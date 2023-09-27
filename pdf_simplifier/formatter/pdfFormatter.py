import os
import pandas, tabula, csv
import formatter.csvFormatter as csvFm


class PdfFormatter:
    def __init__(self, file_path, courses):
        self.pdf_file = file_path
        self.courses = courses
        self.file_names = [
            "table_format_1.csv",
            "table_format_2.csv",
            "complete_time_table.csv",
            "removed_redundancy.csv",
            "added_time.csv",
        ]
        self.convert_to_csv()
        csvFm.CsvFormatter(self.file_names[2], self.file_names[3], self.file_names[4])

    def convert_to_csv(self):
        # Read a PDF File
        df = tabula.read_pdf(self.pdf_file, pages='all')[0]
        # convert PDF into CSV
        tabula.convert_into(self.pdf_file, self.file_names[0], output_format="csv", pages='all')
        self.clean_csv_file()

    def get_row_sizes(self):
        row_sizes = []
        with open(self.file_names[0], 'r', newline='') as csv_file:
            csv_reader = csv.reader(csv_file)

            for row in csv_reader:
                # Calculate the size of the row by joining all elements and measuring the length
                row_size = len(','.join(row))
                row_sizes.append(row_size)
        print(f"get row sizes : {row_sizes}")
        return row_sizes

    def clean_csv_file(self):
        # Read the CSV into a Pandas DataFrame
        df = pandas.read_csv(self.file_names[0], skiprows=[0])

        # Calculate row sizes (e.g., number of characters in each row)
        row_sizes = df.apply(lambda row: len(','.join(map(str, row))), axis=1)
        print(f"the row_sizes {row_sizes}")
        # Identify and remove rows with sizes exceeding the threshold
        clean_df = df[row_sizes < 90]

        # Save the cleaned DataFrame as a new CSV file
        clean_df.to_csv(self.file_names[1], index=False)
        self.filter_csv_file()

    def filter_csv_file(self):
        # Read the CSV into a Pandas DataFrame
        df = pandas.read_csv(self.file_names[1])

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
        filtered_df.to_csv(self.file_names[2], index=False)

        # delete useless files that have been created.
        self.delete_useless_files()

    def delete_useless_files(self):
        # Check if the file exists before deleting
        for i in range(2):
            if os.path.exists(self.file_names[i]):
                os.remove(self.file_names[i])
                print(f"the file {self.file_names[i]} has been deleted")
            else:
                print(f"file does not exists.")

