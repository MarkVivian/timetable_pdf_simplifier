import os
from extractor import pdf_extractor, docx_extractor


class Manager:
    def __init__(self):
        self.courses = [
            "COSC 312",
            "COSC 325",
            "COSC 326",
            "COSC 332",
            "COSC 340",
            "COSC 361",
            "COSC 380"
        ]
        self.formatted_path = "formatted_pdf/"

    def check_file_type(self):
        pass



if __name__ == '__main__':
    Manager()
