import tabula
import pandas as pd
# this will allow me to see the exceptions that will be returned by the tabula package
import traceback


# since the table are in a pdf, we need to extract them.
class Extraction:
    def __init__(self, teaching_pdf, exam_pdf, courses, formatted_path):
        self.courses = courses
        self.pdf_content = {
            "teaching_content": [
                teaching_pdf,
                f"{formatted_path}extracted_teaching.csv",
            ],
            "exam_content": [
                exam_pdf,
                f"{formatted_path}extracted_exam.csv"
            ]
        }
        self.extract_table()

    def extract_table(self):
        pdfs = [self.pdf_content["teaching_content"][0], self.pdf_content["exam_content"][0]]
        csvs = [self.pdf_content["teaching_content"][1], self.pdf_content["exam_content"][1]]
        for pdf, csv in zip(pdfs, csvs):
            try:
                # Extract tables from the PDF
                tables = tabula.read_pdf(pdf, pages='all', multiple_tables=True)

                # Filter rows based on target courses
                filtered_tables = []
                for table in tables:
                    # Check if the DataFrame is not empty
                    if not table.empty:
                        # Print the structure of the DataFrame for debugging
                        print(table.head())

                        # Assuming the course information is in a specific column, adjust the column index accordingly
                        course_column_index = 0

                        # Filter rows based on the target courses
                        filtered_table = table[table.iloc[:, course_column_index].isin(self.courses)]
                        filtered_tables.append(filtered_table)

                # Concatenate the filtered tables into a single DataFrame
                result_df = pd.concat(filtered_tables)

                # Write the DataFrame to a new PDF
                result_df.to_csv(csv, index=False)
                print(f"Successfully extracted data from {pdf} \n and saved to {csv}")
            except Exception as e:
                print(f"the error occurred while extracting table "
                      f"\n from pdf {pdf} "
                      f"\n and the error {traceback.format_exc()}")
