import os

import pandas, tabula, csv


def renaming_first_row(finished_file, done_file):
    renaming_file = pandas.read_csv(finished_file)
    renaming_criteria = {
        "Unnamed: 1": "7.00 AM→9.00 AM",
        "Unnamed: 2": "9.00 AM→11.00 AM",
        "Unnamed: 3": "11.00 AM→01.00 PM",
        "Unnamed: 4": "01.00 PM→03.00 PM",
        "Unnamed: 5": "03.00 PM→05.00 PM",
        "Unnamed: 6": "05.00 PM→07.00 PM",
    }
    renamed_file = renaming_file.rename(columns=renaming_criteria)
    renamed_file.to_csv(done_file, index=False)


def delete_useless_files(file_to_delete):
    # Check if the file exists before deleting
    if os.path.exists(file_to_delete):
        os.remove(file_to_delete)
        print(f"{file_to_delete} has been deleted.")
    else:
        print(f"{file_to_delete} does not exist.")


def add_time_to_days(file):
    # Read the CSV into a Pandas DataFrame
    df = pandas.read_csv(file)

    # Define a list of days of the week
    days_of_week = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"]

    # Iterate through the DataFrame and fill in missing time values
    for day in days_of_week:
        # Find the first row for the current day
        first_day_row = df[df[day] == day].index[0]

        # Copy the time values from Monday's row
        monday_row = df[df["MONDAY"] == day].iloc[0]
        df.loc[first_day_row, day] = monday_row["7.00 AM→9.00 AM"]
        df.loc[first_day_row + 1, day] = monday_row["9.00 AM→11.00 AM"]
        df.loc[first_day_row + 2, day] = monday_row["11.00 AM→01.00 PM"]
        df.loc[first_day_row + 3, day] = monday_row["01.00 PM→03.00 PM"]
        df.loc[first_day_row + 4, day] = monday_row["03.00 PM→05.00 PM"]
        df.loc[first_day_row + 5, day] = monday_row["05.00 PM→07.00 PM"]

    df.to_csv("added_time.csv", index=False)


class PdfFormatter:
    def __init__(self, file_path, courses):
        self.pdf_file = file_path
        self.courses = courses
        self.csv_file_1 = "table_format_1.csv"
        self.csv_file_2 = "table_format_2.csv"
        self.csv_file_complete = "complete_time_table.csv"
        self.convert_to_csv()
        self.clean_csv_file()
        self.filter_csv_file()

    def convert_to_csv(self):
        # Read a PDF File
        df = tabula.read_pdf(self.pdf_file, pages='all')[0]
        # convert PDF into CSV
        tabula.convert_into(self.pdf_file, self.csv_file_1, output_format="csv", pages='all')

    def get_row_sizes(self):
        row_sizes = []
        with open(self.csv_file_1, 'r', newline='') as csv_file:
            csv_reader = csv.reader(csv_file)

            for row in csv_reader:
                # Calculate the size of the row by joining all elements and measuring the length
                row_size = len(','.join(row))
                row_sizes.append(row_size)
        print(f"get row sizes : {row_sizes}")
        return row_sizes

    def clean_csv_file(self):
        # Read the CSV into a Pandas DataFrame
        df = pandas.read_csv(self.csv_file_1, skiprows=[0])

        # Calculate row sizes (e.g., number of characters in each row)
        row_sizes = df.apply(lambda row: len(','.join(map(str, row))), axis=1)
        print(f"the row_sizes {row_sizes}")
        # Identify and remove rows with sizes exceeding the threshold
        clean_df = df[row_sizes < 90]

        # Save the cleaned DataFrame as a new CSV file
        clean_df.to_csv(self.csv_file_2, index=False)
        delete_useless_files(self.csv_file_1)

    def filter_csv_file(self):
        # Read the CSV into a Pandas DataFrame
        df = pandas.read_csv(self.csv_file_2)

        # Define a list of courses provided by the user
        user_courses = self.courses

        # Define a list of keywords to avoid removing rows with specific data
        avoid_keywords = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"]

        # Filter the "unnamed" columns
        unnamed_columns = [col for col in df.columns if col.startswith("Unnamed")]

        # Create a filter to keep rows where at least one of the user-specified courses is present
        # or the row contains one of the avoid_keywords
        filter_condition = df.apply(
            lambda row: any(course in row[unnamed_columns].values for course in user_courses) or any(
                keyword in row.values for keyword in avoid_keywords), axis=1)

        # Apply the filter to the DataFrame
        filtered_df = df[filter_condition]

        # Save the filtered DataFrame as a new CSV file
        filtered_df.to_csv(self.csv_file_complete, index=False)
        delete_useless_files(self.csv_file_1)
        delete_useless_files(self.csv_file_2)
        renaming_first_row(self.csv_file_complete, self.csv_file_complete)
        add_time_to_days(self.csv_file_complete)
