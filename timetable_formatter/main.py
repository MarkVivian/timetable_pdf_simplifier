import os
import magic
from extractor import pdf_extractor, docx_extractor


def content_of_dir():
    files = []
    path = "./original_pdf/"
    for file in os.listdir(path):
        file_path = os.path.join(path + file)
        if os.path.isfile(file_path):
            files.append(file_path)
    return files


def check_file_type(files):
    docx_files = []
    pdf_files = []
    file_type_checker = magic.Magic()
    for file in files:
        file_type = file_type_checker.from_file(file).lower()
        if file_type.__contains__("pdf"):
            pdf_files.append(file)
        else:
            docx_files.append(file)
    return {"pdf": pdf_files, "docx": docx_files}


def manager():
    courses = [
        "COSC 312",
        "COSC 325",
        "COSC 326",
        "COSC 332",
        "COSC 340",
        "COSC 361",
        "COSC 380"
    ]
    files = check_file_type(content_of_dir())
    if files.get("pdf") and files.get("docx"):
        pdf_extractor.pdf_to_csv(pdfs=files.get("pdf"), courses=courses)
        docx_extractor.Extraction(docs=files.get("docx"), courses=courses)
    elif not files.get("pdf") and not files.get("docx"):
        print("no content to work on")
    elif not files.get("pdf"):
        print("no pdfs")
        docx_extractor.Extraction(docs=files.get("docx"), courses=courses)
    else:
        print("no docx")
        pdf_extractor.pdf_to_csv(pdfs=files.get("pdf"), courses=courses)


if __name__ == '__main__':
    manager()
