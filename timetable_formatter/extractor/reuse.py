import os

formatted_file_path = "formatted_pdf/"


def name_extractor_and_former(file, index, ext, text):
    # extract the file name from the path e.g. file from ./folder/file
    pdf_name_with_ext = os.path.basename(file)
    print(f"the pdf name with extension {pdf_name_with_ext}")

    # extract the name of file without extension e.g. file from file.pdf
    pdf_name_without_ext = os.path.splitext(pdf_name_with_ext)[0]
    print(f"the pdf name without extension {pdf_name_without_ext}")

    # path to the csv file
    name = formatted_file_path + text + pdf_name_without_ext + str(index) + ext
    print(f"the name of \n file \n changed to \n{name}")
    return name


def content_of_dir(path):
    files = []
    for file in os.listdir(path):
        file_path = os.path.join(path + file)
        if os.path.isfile(file_path):
            files.append(file_path)
    return files
