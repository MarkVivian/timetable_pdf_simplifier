import PyPDF2
import pdfquery
import tabula


class Simplifier:
    def __init__(self, file, courses):
        self.file = file
        self.courses = courses

    # this will convert the pdf to a text.
    def convert_to_text(self):
        pdf_data = ""
        with open(self.file, 'rb') as pdf_file:
            pdf_file_reader = PyPDF2.PdfReader(pdf_file)

            # Iterate through each page in the PDF
            for page_num in range(len(pdf_file_reader.pages)):
                # Get the text content of the current page
                page = pdf_file_reader.pages[page_num]
                page_text = page.extract_text()

                # Append the page's text to the extracted_text variable
                pdf_data += page_text

        print(pdf_data)

    def free_code_camp(self):
        pdf = pdfquery.PDFQuery(self.file)
        pdf.load()
        # Use CSS-like selectors to locate the elements
        text_elements = pdf.pq('LTTextLineHorizontal')
        another_element = pdf.pq('LTTextLineHorizontal:in_bbox("68.0, 231.57, 101.990, 234.893")').text()
        # Extract the text from the elements
        text = [t.text for t in text_elements]
        pdf.tree.write('timetable.xml', pretty_print=True)

    def using_tabula_column(self):
        tabula_data = tabula.read_pdf(self.file, pages="all")
        print(f"Number of tables found: {len(tabula_data)}")

        for i, df in enumerate(tabula_data):
            # Extract the first column (assuming it's the course names)
            if len(df.columns) >= 2:
                first_column = df.iloc[:, 1]  # Change the column index as needed
                # first_row = df.iloc[1:]
                # Print the first column data
                print(f"Table {i + 1} - First Column:")
                print(first_column)
                # print(f"Table {i + 1} - second row")
                # print(first_row)
                print("\n")
            else:
                print(f"Table {i + 1} - Table does not have a second column.\n")

    def using_tabula_row(self):
        tabula_data = tabula.read_pdf(self.file, pages="all")
        print(f"Number of tables found: {len(tabula_data)}")

        for i, df in enumerate(tabula_data):
            # Extract the first column (assuming it's the course names)
            first_row = df.iloc[2:0]  # Change the column index as needed
            print(f"Table {i + 1} - second row")
            print(first_row)
            print("\n")
