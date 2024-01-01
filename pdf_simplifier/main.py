from extractor import method_1, method_2


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
        self.teaching_pdf = "original_pdf/teaching_time_table.pdf"
        self.exam_pdf = "original_pdf/exam_time_table.pdf"
        self.formatted_path = "formatted_pdf/"

    def course_register(self):
        try:
            # method_1.Extraction(self.teaching_pdf, self.exam_pdf, self.courses, self.formatted_path)
            method_2.Extraction(self.teaching_pdf, self.exam_pdf, self.courses, self.formatted_path)
        except Exception as e:
            print(f"an error occurred in the main file \n in the course registration function. \n the error was {e}")


if __name__ == '__main__':
    Manager().course_register()
