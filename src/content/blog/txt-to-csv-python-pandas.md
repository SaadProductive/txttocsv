---
title: "Convert TXT to CSV in Python With pandas"
metaTitle: "Convert TXT to CSV in Python With pandas (Full Guide)"
description: "Convert TXT to CSV in Python using pandas or the csv module. Handle any delimiter, whitespace, headers, encodings and quoting, with copy-paste code that works."
keyword: "convert txt to csv python"
intent: "Informational"
published: "2026-07-28"
updated: "2026-07-28"
author: "Saad Zaman"
faq:
  - q: "How do I convert a TXT file to CSV in pandas?"
    a: "Read the file with pandas.read_csv, setting the sep argument to your source delimiter, then write it out with DataFrame.to_csv and index=False. pandas handles the quoting rules automatically, so values containing commas are wrapped correctly."
  - q: "How do I convert a space or tab separated file?"
    a: "For a single tab use sep='\\t'. For one or more spaces of varying width, use sep=r'\\s+', which treats any run of whitespace as one separator. This is the usual fix for fixed-width or ragged console output."
  - q: "My file has no header row. What do I do?"
    a: "Pass header=None so pandas does not treat the first line as column names, then optionally set names=['col1','col2'] to label the columns yourself before writing the CSV."
  - q: "How do I avoid an extra index column in the output?"
    a: "Always pass index=False to to_csv. Without it, pandas writes the row numbers as an unnamed first column, which is the single most common mistake in TXT to CSV scripts."
  - q: "How do I fix a UnicodeDecodeError when reading the file?"
    a: "The file is not UTF-8. Pass encoding='latin-1' or the file's real encoding to read_csv. When writing, set encoding='utf-8-sig' on to_csv so Excel reads the result without garbling accented characters."
related:
  - href: "/blog/how-to-convert-txt-to-csv"
    label: "All six methods to convert TXT to CSV"
  - href: "/blog/txt-to-csv-in-excel"
    label: "Convert TXT to CSV in Excel"
  - href: "/#tool"
    label: "No-code option: convert in the browser"
  - href: "/csv-to-txt"
    label: "Convert CSV back to TXT"
---

If you convert text to CSV more than once, stop doing it by hand. A few lines of Python turn it into a repeatable, correct process that handles quoting for you. This guide covers the pandas approach for real-world files, the standard-library approach when you cannot install anything, and the specific arguments that fix the errors you will actually hit.

## How do you convert TXT to CSV in pandas?

Read the text with `read_csv`, set `sep` to your source delimiter, and write it out with `to_csv` using `index=False`. That is the whole job for a clean file:

```python
import pandas as pd

df = pd.read_csv("input.txt", sep="\t")   # tab-separated source
df.to_csv("output.csv", index=False)
```

`read_csv` does the parsing and `to_csv` writes an RFC 4180 compliant file, so a value like `Smith, John` is automatically wrapped in quotes and your columns never shift. The `index=False` argument stops pandas from adding an unwanted row-number column. The official argument list lives in the [pandas documentation](https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html).

## Handling different separators

The `sep` argument is where most files differ. Match it to your source:

| Source format | `sep` value |
| --- | --- |
| Tab separated | `"\t"` |
| Semicolon | `";"` |
| Pipe | `"\|"` |
| Single or multiple spaces | `r"\s+"` |
| Comma (already CSV-ish) | `","` |

The whitespace case is the one people miss. Console output and fixed-width exports often use a variable number of spaces to line up columns. `sep=r"\s+"` treats any run of whitespace as a single separator, which collapses that ragged spacing into clean fields.

## Files with no header

By default pandas treats the first line as column names. When your text file starts straight into data, that eats your first row. Turn it off and name the columns yourself:

```python
import pandas as pd

df = pd.read_csv("input.txt", sep=r"\s+", header=None,
                 names=["name", "age", "city"])
df.to_csv("output.csv", index=False)
```

## Fixing encoding errors

A `UnicodeDecodeError` means the file is not UTF-8. Tell pandas the real encoding on the way in, and force a BOM on the way out so Excel opens the result cleanly:

```python
df = pd.read_csv("input.txt", sep="\t", encoding="latin-1")
df.to_csv("output.csv", index=False, encoding="utf-8-sig")
```

<div class="callout">

`utf-8-sig` writes UTF-8 with a byte order mark. That mark is what tells Excel the file is UTF-8, and it is the difference between `Café` displaying correctly and showing up as `CafÃ©`.

</div>

## Without pandas: the csv module

If you cannot install pandas, the standard library does the job. This reads a tab-separated file and writes a comma CSV with correct quoting:

```python
import csv

with open("input.txt", newline="", encoding="utf-8") as fin, \
     open("output.csv", "w", newline="", encoding="utf-8") as fout:
    reader = csv.reader(fin, delimiter="\t")
    writer = csv.writer(fout)          # defaults to comma, quotes as needed
    writer.writerows(reader)
```

The `csv.writer` applies quoting automatically, so you get the same safe output as pandas without the dependency. The `newline=""` argument prevents blank lines between rows on Windows, which is a classic gotcha.

## Batch converting a folder

To convert every text file in a directory, loop over them:

```python
import pandas as pd
from pathlib import Path

for txt in Path("data").glob("*.txt"):
    pd.read_csv(txt, sep="\t").to_csv(txt.with_suffix(".csv"), index=False)
```

## When a script is overkill

For a single file you will convert once, spinning up Python is more work than the task deserves. Paste it into the [browser converter](/#tool) instead: it applies the same quoting rules, auto-detects the delimiter, and runs locally so nothing is uploaded. Use Python when the job repeats, and the tool when it does not. The [full method guide](/blog/how-to-convert-txt-to-csv) compares every option, and the [Excel guide](/blog/txt-to-csv-in-excel) covers the spreadsheet route.
