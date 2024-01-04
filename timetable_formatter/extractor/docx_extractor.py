import camelot


class Extraction:
    def __init__(self, pdfs, courses, formatted_path):
        self.courses = courses
        self.pdf_content = {
            "exam": [
                pdfs[0],
                f"{formatted_path}camelot_exam_table1.csv",
                f"{formatted_path}camelot_exam_table2.csv"
            ],
            "teaching": [
                pdfs[1],
                f"{formatted_path}camelot_teaching_table1.csv",
                f"{formatted_path}camelot_teaching_table2.csv"
            ]
        }
        self.pdfs = [self.pdf_content["exam"][0], self.pdf_content["teaching"][0]]
        self.csv1 = [self.pdf_content["exam"][1], self.pdf_content["teaching"][1]]
        self.extractor()

    def extractor(self):
        for (pdf, csv1) in zip(self.pdfs, self.csv1):
            try:
                print(f"starting on pdf {pdf}")
                table = camelot.read_pdf(filepath=pdf)
                print("read the table \n")
                table.export(csv1, f="csv")
                print("exported the table")
            except Exception as e:
                print(f"an error occurred in extractor \n error {e} \n line 24 method 2")
