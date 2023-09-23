import PyPDF2
import pandas as pd
import tabula


class SimplifyTabulaPanda:
    def __init__(self, file, courses):
        self.courses = courses
        self.file = file
        self.tabula_form = tabula.read_pdf(file, pages=f"1-{self.counting_pages()}")

    def counting_pages(self):
        with open(self.file, 'rb') as pdf_file:
            pdf_reader = PyPDF2.PdfReader(pdf_file)

            # Get the number of pages
            pages = len(pdf_reader.pages)
        return pages

    def panda_clutch(self):
        desired_course_pdf = pd.DataFrame()
        for df in self.tabula_form:
            if len(df.columns) >= 2:
                course_column = df.iloc[:, 1]

    def checking_column(self):

        for index, df in enumerate(self.tabula_form):
            if len(df.columns) >= 3:
                first_column = df.iloc[:, 0]  # change the columns as needed.
                print(f"Table {index + 1} - First Column")
                print(first_column)
                print("\n")
            else:
                print(f"Table {index + 1} - Table doesn't have a second column")
