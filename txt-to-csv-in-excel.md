---
title: "How to Convert TXT to CSV in Excel Without Losing Data"
metaTitle: "Convert TXT to CSV in Excel: The Zero-Loss Method"
description: "Convert TXT to CSV in Excel without losing leading zeros or scientific notation. The Data From Text/CSV import method, delimiter settings and encoding fixes."
keyword: "convert txt to csv excel"
intent: "Informational"
published: "2026-07-28"
updated: "2026-07-28"
author: "Hamza Younis"
faq:
  - q: "Why does Excel turn my long numbers into scientific notation?"
    a: "Excel auto-detects any long run of digits as a number and displays it as scientific notation once it passes 15 digits. Account numbers, phone numbers and IDs are the usual victims. The fix is to set that column to Text during import instead of letting Excel guess the type."
  - q: "How do I stop Excel dropping the leading zero from 007?"
    a: "The zero is only lost when Excel reads the column as a number. Import through Data then From Text/CSV and change the affected column type to Text in the preview. The raw file always keeps the zero, so the loss is purely an Excel display choice."
  - q: "Why does my file open in one single column in Excel?"
    a: "Excel split the rows on its default list separator, which did not match the separator in your file. Use the From Text/CSV import and pick the correct delimiter in the preview, rather than double-clicking the file open."
  - q: "How do I save an Excel sheet back to CSV correctly?"
    a: "Use File, then Save As, and choose CSV UTF-8 (Comma delimited). The plain CSV option uses your system's ANSI encoding and can garble accented characters, so the UTF-8 variant is the safer choice."
related:
  - href: "/blog/how-to-convert-txt-to-csv"
    label: "All six methods to convert TXT to CSV"
  - href: "/blog/txt-to-csv-python-pandas"
    label: "Convert TXT to CSV in Python with pandas"
  - href: "/#tool"
    label: "Skip Excel: convert in the browser"
  - href: "/csv-to-txt"
    label: "Convert CSV back to TXT"
---

Opening a text file in Excel is where clean data goes to die. Double-click a `.txt` and Excel guesses everything: it trims your leading zeros, mangles long account numbers into scientific notation, and sometimes dumps every field into a single column. This guide shows the import route that keeps your data intact, plus how to save back out to a proper CSV.

## What is the correct way to open a TXT file in Excel?

Do not double-click the file. Open Excel first, go to the **Data** tab, click **From Text/CSV**, and select your file. This opens the import preview, where you control the delimiter and the data type of each column before anything loads. The double-click route skips all of that and lets Excel guess, which is where the damage happens.

The preview shows your columns split out with a delimiter dropdown at the top. Confirm the split looks right, then click **Transform Data** if you need to set column types, or **Load** if the defaults are fine.

## Why does Excel ruin numbers and zeros?

Excel treats every column as a number unless told otherwise, and numbers lose leading zeros and long digits. A value like `00734` becomes `734`, and a 16-digit card number becomes `1.23457E+15`. The CSV file itself is never wrong here. The raw text keeps every character. What breaks is Excel's automatic type detection on the way in.

The fix is to mark those columns as text. In the import preview, click **Transform Data** to open Power Query, select the problem column, and set its type to **Text**. Now `00734` stays `00734` and the card number stays whole. Microsoft documents the full import flow on [Microsoft Learn](https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba).

<div class="callout">

Rule of thumb: any column that looks like a number but is really an identifier (postal codes, phone numbers, SKUs, account numbers) should be imported as Text. If you would never do maths on it, it is not a number.

</div>

## How to fix the single-column problem

When every row lands in column A, the separator in your file did not match what Excel expected. Excel uses the list separator from your operating system's regional settings, which is a comma in the US and a semicolon across much of Europe. If your file uses tabs and Excel expects commas, nothing splits.

The From Text/CSV preview has a **Delimiter** dropdown. Set it to the character your file actually uses: Tab, Comma, Semicolon, or a custom character. The preview re-splits instantly so you can confirm before loading.

## Step by step: TXT to CSV in Excel

1. Open a blank workbook in Excel.
2. Go to **Data**, then **From Text/CSV**, and pick your `.txt` file.
3. In the preview, set **File Origin** to a Unicode option such as UTF-8 if accented characters look wrong.
4. Set the correct **Delimiter**.
5. Click **Transform Data**, set any identifier columns to **Text**, then **Close & Load**.
6. Go to **File**, then **Save As**, and choose **CSV UTF-8 (Comma delimited)**.

That final step matters. The older **CSV (Comma delimited)** option saves in your system's legacy encoding and can corrupt accented text. The UTF-8 variant is the one to pick.

## When Excel is the wrong tool

Excel is worth the effort when you need to inspect or clean the data as you convert. For a straight, faithful conversion with no risk of type mangling, it is overkill and slower. A browser converter reads the text and writes a correctly quoted, UTF-8 CSV without touching your values. Our [TXT to CSV converter](/#tool) does exactly that, and it never uploads your file, which matters for anything confidential.

For automation across many files, skip the interface entirely and script it. The [Python and pandas guide](/blog/txt-to-csv-python-pandas) covers that. For the full picture across every method, see the [complete conversion guide](/blog/how-to-convert-txt-to-csv).
