import formatter.pdfFormatter as pdfFile


def course_register():
    courses: list[str] = [
        "COSC 312",
        "COSC 325",
        "COSC 326",
        "COSC 332",
        "COSC 340",
        "COSC 361",
        "COSC 380"
    ]
    file_path = "test/timeTable.pdf"
    pdfFile.PdfFormatter(file_path, courses)


if __name__ == '__main__':
    course_register()

