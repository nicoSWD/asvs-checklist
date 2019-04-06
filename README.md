🔐 OWASP ASVS 4.0 Checklist
===========================

Checklist for OWASP's [Application Security Verification Standard 4.0](https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project)

Usage
=====
It's probably easiest if you copy [this Google Spreadsheet](https://docs.google.com/spreadsheets/d/11BNnfM8ImoL7PolLTgPch7xfdQDYTRfELbnayfZLDNI) to your own drive and work from there.

Alternatively, you may download one of these files:
 - [ASVS_v4.0_Checklist.ods](https://docs.google.com/spreadsheets/d/11BNnfM8ImoL7PolLTgPch7xfdQDYTRfELbnayfZLDNI/export?format=ods&id=11BNnfM8ImoL7PolLTgPch7xfdQDYTRfELbnayfZLDNI)
 - [ASVS_v4.0_Checklist.xlsx](https://docs.google.com/spreadsheets/d/11BNnfM8ImoL7PolLTgPch7xfdQDYTRfELbnayfZLDNI/export?format=xlsx&id=11BNnfM8ImoL7PolLTgPch7xfdQDYTRfELbnayfZLDNI)

![screenshot](resources/screenshot.png)

![screenshot](resources/screenshot2.png)

Script Usage
============

You most likely won't need this. But if you need to re-parse the CSV into individual files for easier usage, run this:

```shell
$ bin/csvparse resources/OWASP_Application_Security_Verification_Standard_4.0-en.csv
```
