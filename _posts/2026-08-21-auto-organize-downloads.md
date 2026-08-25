---
layout: post
title: "Organize Your Downloads Folder Automatically (AppleScript That Actually Works)"
date: 2026-08-21
categories: [files, automation, beginner-friendly]
tags: [AppleScript, Finder, Downloads, file organization]
author: Luke Welch
excerpt: "Turn a chaotic Downloads folder into neatly sorted Images, Documents, Videos, and Archives folders — automatically, every time."
---

# Organize Your Downloads Folder Automatically

Everyone's Downloads folder looks the same: a graveyard of PDFs, screenshots, installers, and random zip files. Here's a script that sorts it into subfolders by file type — safely, and re-runnable any time.

## The Script

```applescript
tell application "Finder"
    set downloadsFolder to (path to downloads folder) as alias

    set folderNames to {"Images", "Documents", "Videos", "Archives"}
    repeat with aName in folderNames
        if not (exists folder aName of downloadsFolder) then
            make new folder at downloadsFolder with properties {name:aName}
        end if
    end repeat

    set imageTypes to {"png", "jpg", "jpeg", "gif", "heic"}
    set docTypes to {"pdf", "doc", "docx", "txt", "xlsx", "pages"}
    set videoTypes to {"mp4", "mov", "mkv"}
    set archiveTypes to {"zip", "dmg"}

    repeat with aFile in (get files of downloadsFolder)
        try
            set fileExtension to name extension of aFile
            if fileExtension is in imageTypes then
                move aFile to folder "Images" of downloadsFolder
            else if fileExtension is in docTypes then
                move aFile to folder "Documents" of downloadsFolder
            else if fileExtension is in videoTypes then
                move aFile to folder "Videos" of downloadsFolder
            else if fileExtension is in archiveTypes then
                move aFile to folder "Archives" of downloadsFolder
            end if
        end try
    end repeat
end tell
```

## What This Actually Does, Step by Step

1. **Finds your Downloads folder** automatically — no need to type a path
2. **Creates four subfolders** (Images, Documents, Videos, Archives) if they don't already exist — safe to run repeatedly, it won't duplicate them
3. **Loops through every file** sitting directly in Downloads
4. **Checks the file extension** and moves it into the matching subfolder
5. **Wraps each move in `try`** so one problem file (like something with no extension) doesn't stop the whole script

## How to Run It

1. Open **Script Editor** (Applications → Utilities)
2. Paste the script
3. Click **Run** (▶)
4. Grant Finder access if prompted
5. Check your Downloads folder — it's now organized

## Customizing It

**Add more categories** — for example, app installers:

```applescript
set folderNames to {"Images", "Documents", "Videos", "Archives", "Installers"}
```

...and add a matching type list plus `else if` branch:

```applescript
set installerTypes to {"dmg", "pkg"}
```
(Note: if you add "dmg" here, remove it from `archiveTypes` so it doesn't get checked twice.)

**Skip files still downloading** — Safari names in-progress downloads `something.download`. This script already ignores them since `.download` isn't in any of the type lists.

## Automating It to Run Daily

Rather than remembering to run this manually:

1. Export the script from Script Editor as an Application (**File → Export**, Format: Application)
2. Open **Automator → File → New → Calendar Alarm**
3. Add a **"Run AppleScript"** action and paste the script
4. Save, then set the Calendar event it creates to repeat daily

Now your Downloads folder tidies itself every night.

## Troubleshooting

**"Finder got an error: doesn't understand the 'move' message"**
This usually means the file was already moved or renamed by something else mid-script (like Spotlight temporarily locking a file). Just run the script again.

**Files aren't moving**
Check the extension actually matches what's in your list — extensions are case-sensitive in some checks; consider lowercasing with `fileExtension as lowercase` for stricter matching, though `name extension` already normalizes case in most cases.

**A folder named "Images" already exists with different contents**
The script checks with `exists folder... of downloadsFolder` and won't overwrite it — it'll just use the existing folder as the destination.

## Prefer Not to Write This Yourself?

[Scriptly](https://apps.apple.com/us/app/scriptly-script-automations/id6788839033?mt=12) has this exact template built in, ready to run, plus 100+ others for files, email, and calendars.

## Related Guides

- [Batch Rename Photos on Mac Automatically](/scriptly-blog/batch-rename-photos-mac/)
- [Archive Old Files Automatically](/scriptly-blog/archive-old-files-automatically/)
- [10 AppleScript Templates You Can Copy-Paste](/scriptly-blog/applescript-templates/)
