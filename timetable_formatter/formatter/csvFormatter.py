import pandas


class CsvFormatter:
    def __init__(self, original_file, redundant_fixed_file, time_added_file):
        self.file_name = original_file
        self.redundant_file = redundant_fixed_file
        self.time_added_file = time_added_file
        self.days_of_week = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"]
        self.renaming_first_row()

    def renaming_first_row(self):
        renaming_file = pandas.read_csv(self.file_name)
        renaming_criteria = {
            "Unnamed: 1": "7.00 AM→9.00 AM",
            "Unnamed: 2": "9.00 AM→11.00 AM",
            "Unnamed: 3": "11.00 AM→01.00 PM",
            "Unnamed: 4": "01.00 PM→03.00 PM",
            "Unnamed: 5": "03.00 PM→05.00 PM",
            "Unnamed: 6": "05.00 PM→07.00 PM",
        }
        renamed_file = renaming_file.rename(columns=renaming_criteria)
        renamed_file.to_csv(self.file_name, index=False)

