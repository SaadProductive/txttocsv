---
title: "How to Convert TXT to CSV: 6 Reliable Methods"
metaTitle: "How to Convert TXT to CSV: 6 Reliable Methods"
description: "Convert TXT to CSV without breaking your data. Six tested methods for the browser, Excel, Notepad++, Python, PowerShell and Google Sheets."
keyword: "how to convert txt to csv"
intent: "Informational"
published: "2026-07-27"
updated: "2026-07-27"
author: "Hamza Younis"
faq:
  - q: "Can I just rename a .txt file to .csv?"
    a: "Sometimes, but only if the text already uses commas as separators and quotes any value that contains a comma. Renaming changes the extension, not the structure. If your file is tab or space separated, renaming it produces a single-column CSV that every spreadsheet will misread."
  - q: "What delimiter should a CSV use?"
    a: "A comma is the default named in the CSV specification, RFC 4180. Tabs and semicolons are common in exports, and semicolons are standard in regions where the comma is a decimal mark. Pick one, then make sure any value containing that character is wrapped in double quotes."
  - q: "Why does Excel open my converted CSV in a single column?"
    a: "Excel splits on the list separator set in your operating system, which is often a semicolon rather than a comma. Import through Data, then From Text/CSV and choose the delimiter, or change the separator in your CSV output to match your locale."
  - q: "How do I keep leading zeros and long numbers intact?"
    a: "Leading zeros and 16-digit codes are a display problem in Excel, not a CSV problem. The CSV file keeps the raw value. Import the column as Text in the Excel import wizard instead of opening the file directly, and the zeros stay."
  - q: "Is it safe to convert files with an online tool?"
    a: "It depends on the tool. Server-based converters upload your file to a remote machine. The converter on this site runs entirely in your browser using JavaScript, so the text never leaves your device. For sensitive data, always confirm where the processing happens."
related:
  - href: "/blog/txt-to-csv-in-excel"
    label: "Convert TXT to CSV in Excel the right way"
  - href: "/blog/txt-to-csv-python-pandas"
    label: "TXT to CSV in Python with pandas"
  - href: "/csv-to-txt"
    label: "Convert CSV back to TXT"
  - href: "/#tool"
    label: "Open the free TXT to CSV converter"
---

Converting a text file to CSV sounds trivial until a column shifts, a name with a comma splits into two, or Excel swallows your leading zeros. The format is simple. The mistakes are predictable. This guide covers six methods, from a one-click browser tool to a scripted pipeline, and it tells you which one fits the file in front of you.

## What is the fastest way to convert TXT to CSV?

The fastest way is a browser-based converter: paste the text, pick the separator, download the CSV. No install, no upload, no spreadsheet quirks. Our [TXT to CSV converter](/#tool) auto-detects whether your file is tab, comma, semicolon or space separated, shows a live table preview, and handles the quoting rules for you.

Use this method when you have a single file and you want a clean result in seconds. It runs on your device, so the data stays local. For repeated jobs across many files, a script is the better tool, and that is covered further down.

## What actually separates TXT from CSV?

A TXT file is unstructured. A CSV file is a table where each line is a row and a chosen character, usually a comma, separates the columns. The rules that make a CSV reliable come from RFC 4180, the specification most software follows. Two of those rules cause almost every real problem.

First, any field that contains the separator, a double quote, or a line break must be wrapped in double quotes. Second, a double quote inside a quoted field is written twice. So `Smith, John` becomes `"Smith, John"` and `5" pipe` becomes `"5"" pipe"`. A converter that ignores this will break the moment your data contains a comma. You can read the exact rules in the official specification from the [IETF](https://www.rfc-editor.org/rfc/rfc4180).

<div class="callout">

Quick check: open your text file and look at one full line. Count the separators. If the count is not the same on every line, your source data is uneven, and no converter can guess the missing columns for you. Fix the source first.

</div>

## Method 1: Convert TXT to CSV in the browser

Paste your text into the left pane of the [converter](/#tool). Leave the separator on Auto-detect for a first pass. The right pane shows the parsed table immediately, so you can see whether the columns landed correctly before you download anything.

If a column looks wrong, switch the separator manually. Tab and semicolon are the two most common surprises in exported files. Tick Header row if your first line holds column names, then download. The output is UTF-8 with a byte order mark, which is the version Excel reads without mangling accented characters.

## Method 2: Convert TXT to CSV in Excel

Do not double-click the text file and hope. Open Excel, go to Data, then From Text/CSV, and select your file. Excel shows a preview with a delimiter dropdown. Choose the right separator, set any code-heavy column to Text so leading zeros survive, then load.

This route respects your data types. Opening a raw file directly lets Excel guess, and its guesses turn `007` into `7` and long account numbers into scientific notation. Microsoft documents the import flow on [Microsoft Learn](https://support.microsoft.com/en-us/office/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba). For a full walkthrough with the zero-loss settings, see [convert TXT to CSV in Excel](/blog/txt-to-csv-in-excel).

## Method 3: Convert TXT to CSV in Notepad++

Notepad++ is useful when the file is nearly a CSV and needs a find-and-replace pass. Open the file, press Ctrl+H, enable Regular expression mode, and replace your current separator with a comma. To turn runs of whitespace into a single comma, search for `\s{2,}` and replace with `,`.

Save the file with a `.csv` extension. This method gives you control over messy, inconsistent spacing that a fixed delimiter cannot handle. It does not add quoting, so use it only when your values contain no commas.

## Method 4: Convert TXT to CSV with Python and pandas

For anything you will repeat, a few lines of Python beats manual work.

```python
import pandas as pd

# whitespace-separated input, no header in the source
df = pd.read_csv("input.txt", sep=r"\s+", header=None)
df.to_csv("output.csv", index=False)
```

`read_csv` handles the parsing and `to_csv` writes a compliant file with correct quoting, so a value like `Smith, John` is quoted automatically. Change `sep` to `"\t"` for tab-separated data or `";"` for semicolons. The full pattern, including how to set column names and handle encodings, is in the [Python and pandas guide](/blog/txt-to-csv-python-pandas). The official reference lives in the [pandas documentation](https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html).

## Method 5: Convert TXT to CSV in PowerShell

PowerShell is built for this on Windows and needs no extra install.

```powershell
Import-Csv input.txt -Delimiter "`t" |
  Export-Csv output.csv -NoTypeInformation -Encoding UTF8
```

`Import-Csv` reads the tab-delimited text into objects, and `Export-Csv` writes a properly quoted comma file. Swap the delimiter for whatever your source uses. This scales cleanly to a folder of files with a `Get-ChildItem` loop, which makes it a solid choice for batch jobs on a server.

## Method 6: Convert TXT to CSV in Google Sheets

Open a blank sheet, go to File, then Import, and upload the text file. Sheets asks for the separator type and previews the result. Once it looks right, go to File, then Download, and choose Comma-separated values.

This is handy when you are already working in Sheets or need to share the result with a team. The trade-off is the round trip through a browser upload, so avoid it for confidential data.

## Which method should you use?

| Your situation | Best method |
| --- | --- |
| One file, want it done now | [Browser converter](/#tool) |
| Confidential data | Browser converter (local) or PowerShell |
| Need types and zeros preserved | Excel import wizard |
| Messy, uneven spacing | Notepad++ regex |
| Repeating the job often | Python or PowerShell |
| Already in a spreadsheet | Google Sheets |

## The three errors that ruin a conversion

Most broken CSVs trace back to the same trio. Values with commas that were never quoted, which shifts every later column. A separator mismatch between the file and the program reading it, which piles everything into one column. And an encoding clash, where UTF-8 text without a byte order mark shows up as garbled characters in Excel.

A converter that quotes correctly and exports UTF-8 with a BOM removes all three. That is exactly what the [browser tool](/#tool) does, and it is why a quick paste often beats a manual fix.

## Next steps

Start with the [free converter](/#tool) for a one-off file. If you convert text regularly, save the Python or PowerShell snippet above. And when you need to reverse the process, the [CSV to TXT converter](/csv-to-txt) turns a comma file back into tab or custom-delimited text.
