import pandas as pd
import tabula
from reuse import name_extractor_and_former, content_of_dir, formatted_file_path
from filtrator import filter_csv


def pdf_to_csv(pdfs, courses):
    error_checker = False
    for index, pdf in enumerate(pdfs):
        try:

            # convert PDF into CSV
            csv_data = tabula.read_pdf(pdf, pages='all', output_format="csv")
            csv_file = name_extractor_and_former(
                file=pdf,
                ext=".csv",
                index=index,
                text="extracted_"
            )
            clean_csv(
                csv_file=csv_file,
                csv_content=csv_data,
                index=index
            )

            print(" \n successfully extracted the table to csv \n")
        except Exception as e:
            error_checker = True
            print(f"an error occurred while converting pdf to csv \n line 38 \n file {pdf} \n error {e}")

    # filter the data when done
    if not error_checker:
        filter_csv(courses=courses, files=content_of_dir(formatted_file_path))


def clean_csv(csv_file, csv_content, index):
    try:
        # Read the CSV into a Pandas DataFrame
        df = pd.read_csv(csv_content, skiprows=[0])

        # Calculate row sizes (e.g., number of characters in each row)
        row_sizes = df.apply(lambda row: len(','.join(map(str, row))), axis=1)

        # Identify and remove rows where the size of data in column A is larger than a threshold
        # and where column A is not empty.
        threshold_size = 90  # You can adjust this threshold based on your data
        jungle_mask = (row_sizes >= threshold_size)

        # Create a clean DataFrame excluding the rows with jungled data
        clean_df = df[~jungle_mask]

        # Save the cleaned DataFrame as a new CSV file
        clean_df.to_csv(csv_file, index=False)
        print("\n successfully cleaned the csv file \n")
    except Exception as e:
        print(f"an error occurred while cleaning csv \n line 46 \n file {csv_file} \n error {e}")

        # if an error occurred then the csv file is saved as it is.
        # Concatenate all DataFrames into a single DataFrame
        combined_df = pd.concat(csv_content, ignore_index=True)

        # Save the combined DataFrame to a CSV file
        combined_df.to_csv(name_extractor_and_former(
            file=csv_file,
            index=index,
            ext=".csv",
            text="error_cleaning_"
        ), index=False)

