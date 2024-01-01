import pandas
import tabula


# since the table are in a pdf, we need to extract them.
class Extraction:
    def __init__(self, teaching_pdf, exam_pdf, courses, formatted_path):
        self.courses = courses
        self.pdf_content = {
            "teaching_content": [
                teaching_pdf,
                f"{formatted_path}format1_teaching.csv",
                f"{formatted_path}format2_teaching.csv",
                f"{formatted_path}completed_teaching.csv",
                f"{formatted_path}removed_redundancy_teaching.csv",
                f"{formatted_path}added_time_teaching.csv"
            ],
            "exam_content": [
                exam_pdf,
                f"{formatted_path}format1_exam.csv",
                f"{formatted_path}format2_exam.csv",
                f"{formatted_path}completed_exam.csv",
                f"{formatted_path}removed_redundancy_exam.csv",
                f"{formatted_path}added_time_exam.csv"
            ]
        }
        self.original_pdf = [self.pdf_content["teaching_content"][0], self.pdf_content["exam_content"][0]]
        self.format1_csv = [self.pdf_content["teaching_content"][1], self.pdf_content["exam_content"][1]]
        self.format2_csv = [self.pdf_content["teaching_content"][2], self.pdf_content["exam_content"][2]]
        self.complete_csv = [self.pdf_content["teaching_content"][3], self.pdf_content["exam_content"][3]]
        self.remove_redundancy_csv = [self.pdf_content["teaching_content"][4], self.pdf_content["exam_content"][4]]
        self.add_time_csv = [self.pdf_content["teaching_content"][5], self.pdf_content["exam_content"][5]]
        self.convert_pdf_to_csv()
        self.clean_csv()

    def convert_pdf_to_csv(self):
        for (original_file, format1_csv) in zip(self.original_pdf, self.format1_csv):
            try:
                # Read a PDF File
                var = tabula.read_pdf(original_file, pages='all')

                # convert PDF into CSV
                tabula.convert_into(original_file, format1_csv, output_format='csv', pages='all')
                print(" \n successfully extracted the table to csv \n")
            except Exception as e:
                print(f"an error occurred while converting pdf to csv \n line 38 \n file {original_file} \n error {e}")

    def clean_csv(self):
        for format1_csv, format2_csv in zip(self.format1_csv, self.format2_csv):
            try:
                # Read the CSV into a Pandas DataFrame
                df = pandas.read_csv(format1_csv, skiprows=[0])

                # Calculate row sizes (e.g., number of characters in each row)
                row_sizes = df.apply(lambda row: len(','.join(map(str, row))), axis=1)

                # Identify and remove rows where the size of data in column A is larger than a threshold
                # and where column A is not empty.
                threshold_size = 90  # You can adjust this threshold based on your data
                jungle_mask = (row_sizes >= threshold_size)

                # Create a clean DataFrame excluding the rows with jungled data
                clean_df = df[~jungle_mask]

                # Save the cleaned DataFrame as a new CSV file
                clean_df.to_csv(format2_csv, index=False)
                print("\n successfully cleaned the csv file \n")
            except Exception as e:
                print(f"an error occurred while cleaning csv \n line 46 \n file {format1_csv} \n error {e}")
