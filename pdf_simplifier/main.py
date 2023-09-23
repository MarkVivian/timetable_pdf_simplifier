import pdf_simplifier.simplifier_tabula_panda as pdf


def course_register():
    # number_of_courses: int = int(input("how many courses are you doing:    "))
    # courses: list[str] = []
    # for i in range(number_of_courses):
    #     courses.append(input(f"course name {i}: ").upper())
    # print(courses)
    courses: list[str] = [
        "CHAL 451",
        "CHEM 419",
        "BIOC 406",
        "COSC 434",
        "ECDE 431",
        "BMET 442",
        "PHYS 483"
    ]
    file_path = "./pdf_simplifier/timeTable.pdf"
    method1 = pdf.SimplifyTabulaPanda(file_path, courses)
    method1.checking_column()


if __name__ == '__main__':
    course_register()
