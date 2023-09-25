import pdf_formatter.pdfFormatter as pdfFile


def course_register():
    courses: list[str] = [
        "CHAL 451",
        "CHEM 419",
        "BIOC 406",
        "COSC 434",
        "ECDE 431",
        "BMET 442",
        "PHYS 483"
    ]
    file_path = "./timeTable.pdf"
    pdfFile.PdfFormatter(file_path, courses)


if __name__ == '__main__':
    course_register()
