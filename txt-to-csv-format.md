---
title: "TXT to CSV Format: What Changes and Why It Matters"
metaTitle: "TXT to CSV Format Explained: Rules, Fixes, Examples"
description: "Understand the TXT to CSV format change: delimiters, quoting, encoding and line endings. The RFC 4180 rules that decide whether your converted file works."
keyword: "txt to csv format"
intent: "Informational"
published: "2026-07-28"
updated: "2026-07-28"
author: "Hamza Younis"
faq:
  - q: "What is the difference between TXT and CSV format?"
    a: "TXT is unstructured text with no rules about columns. CSV is a structured format where each line is a row and a chosen character, usually a comma, separates the columns, with specific rules for quoting values that contain that character."
  - q: "Is CSV just a renamed TXT file?"
    a: "Not reliably. A CSV is a text file, so any CSV can be opened as TXT, but not every TXT is a valid CSV. Renaming only works if the text already uses commas as separators and quotes any value containing a comma."
  - q: "What character should separate columns in CSV?"
    a: "A comma is the default defined by RFC 4180. Semicolons are common in regions where the comma is a decimal mark, and tabs are common in data exports. Any of these works as long as values containing the separator are quoted."
  - q: "What is the correct CSV format for Excel?"
    a: "Excel reads a comma-separated file most reliably when it is UTF-8 with a byte order mark and uses CRLF line endings. For locales that default to semicolons, either match that separator or use the Data import wizard to pick the delimiter."
related:
  - href: "/blog/how-to-convert-txt-to-csv"
    label: "How to convert TXT to CSV: six methods"
  - href: "/blog/txt-to-csv-in-excel"
    label: "Convert TXT to CSV in Excel"
  - href: "/#tool"
    label: "Convert your file to CSV format now"
  - href: "/csv-to-txt"
    label: "Convert CSV back to TXT"
---

Converting text to CSV is not really a conversion, it is imposing structure. A TXT file is just characters. A CSV file is a table with rules. Understanding what those rules are is the difference between a file that imports cleanly and one that splits a customer's name across two columns. This is the format explained in plain terms, with the specific rules that decide success.

## What does TXT to CSV format actually change?

The change is from unstructured to structured. A TXT file has no concept of columns. A CSV file adds three things: a **delimiter** that marks where one column ends and the next begins, a **quoting rule** for values that contain that delimiter, and a consistent **encoding and line ending** so any program reads it the same way. Get those three right and the file works everywhere. Get any one wrong and it breaks.

The specification that defines these rules is RFC 4180, which most spreadsheets and databases follow. You can read it in full from the [IETF](https://www.rfc-editor.org/rfc/rfc4180).

## The delimiter

The delimiter is the character that separates columns. A comma is the default, which is where the name comes from, but it is not the only valid choice.

- **Comma** is the RFC 4180 default and the safest for sharing.
- **Semicolon** is standard in European locales, where the comma is used as a decimal mark and would clash with the data.
- **Tab** is common in data exports and is unlikely to appear inside a normal field, which makes it a robust choice.

The rule is simple: pick one, use it consistently, and make sure no value contains it unquoted. If your data is full of commas, a tab or semicolon delimiter avoids a lot of quoting.

## The quoting rule

This is the rule that breaks the most files. Any value that contains the delimiter, a double quote, or a line break must be wrapped in double quotes. A double quote inside such a value is written twice.

So a name like `Smith, John` must be stored as `"Smith, John"`, and a measurement like `5" pipe` becomes `"5"" pipe"`. Without this, the comma inside `Smith, John` reads as a column break and shifts every field after it. A converter that does not apply this rule will look fine until the first value with a comma, then silently corrupt every row below it.

<div class="callout">

This is the number one reason a "working" converter produces broken files. If your CSV looks fine in a small sample but falls apart on real data, unquoted delimiters inside values are almost always the cause.

</div>

## Encoding and line endings

Two settings decide whether accented characters and cross-platform files behave.

**Encoding** should be UTF-8. For Excel specifically, UTF-8 *with a byte order mark* is the reliable choice, because the mark tells Excel the file is UTF-8. Without it, `José` can display as `JosÃ©`.

**Line endings** are either CRLF (Windows, and what Excel prefers) or LF (Unix and most programming tools). Either is valid CSV, but matching your target avoids stray characters showing up when the file crosses platforms.

## A worked example

Take this tab-separated text:

```
name	note	city
Ada	London, UK	UK
Alan	5" cable	US
```

Converted to correct comma CSV format, it becomes:

```
name,note,city
Ada,"London, UK",UK
Alan,"5"" cable",US
```

Notice what changed. Tabs became commas. `London, UK` gained quotes because it contains a comma. `5" cable` gained quotes and its internal quote was doubled to `5""`. That is the format working as intended.

## Getting the format right automatically

You do not need to apply these rules by hand. A converter that follows RFC 4180 handles the delimiter, quoting and encoding for you. Paste your text into the [TXT to CSV converter](/#tool), pick a separator or let it auto-detect, and download a file that already quotes correctly and exports UTF-8 with a BOM. It runs in your browser, so nothing is uploaded.

For the different tools and workflows, see the [complete conversion guide](/blog/how-to-convert-txt-to-csv), the [Excel walkthrough](/blog/txt-to-csv-in-excel), or reverse the process with the [CSV to TXT converter](/csv-to-txt).
