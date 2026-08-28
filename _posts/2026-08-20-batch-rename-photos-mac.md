---
layout: post
title: "Batch Rename Photos on Mac Automatically (With AppleScript)"
date: 2026-08-20
redirect_from: /batch-rename-photos-mac/
section: scriptly
categories: [photos, files, automation]
tags: [AppleScript, photos, Finder, batch rename]
author: Luke Welch
excerpt: "Rename hundreds of photos in seconds instead of one by one. Two working scripts: sequential naming and date-based naming."
---

# Batch Rename Photos on Mac Automatically

Camera exports named `IMG_4821.jpg`, `IMG_4822.jpg`... are useless for finding anything later. Here are two AppleScript approaches to fix that — no third-party app needed.

## Option 1: Sequential Renaming ("Vacation-01.jpg", "Vacation-02.jpg"...)

```applescript
set targetFolder to choose folder with prompt "Select folder of photos to rename:"

tell application "Finder"
    set fileList to sort (get files of targetFolder) by name
end tell

set counter to 1
repeat with aFile in fileList
    tell application "Finder"
        set fileExtension to name extension of aFile
        set newName to "Vacation-" & my zeroPad(counter) & "." & fileExtension
        set name of aFile to newName
    end tell
    set counter to counter + 1
end repeat

on zeroPad(n)
    if n < 10 then
        return "0" & n
    else
        return (n as string)
    end if
end zeroPad
```

**What it does:** Asks you to pick a folder, sorts the files by their current name, then renames each one to `Vacation-01.jpg`, `Vacation-02.jpg`, and so on.

**To customize:** Change `"Vacation-"` to whatever prefix you want (e.g. `"Wedding-"`, `"Trip2026-"`).

## Option 2: Rename by Date Taken (Using Photo Metadata)

This is more useful for actually organizing a photo library — it renames files using the date the photo was modified/created, so they sort chronologically.

```applescript
set targetFolder to choose folder with prompt "Select folder of photos to rename:"

tell application "Finder"
    set fileList to get files of targetFolder
    repeat with aFile in fileList
        set fileExtension to name extension of aFile
        set fileDate to creation date of aFile
        set dateString to (year of fileDate as string) & "-" & my padded(month of fileDate as integer) & "-" & my padded(day of fileDate)
        set baseName to dateString & "-" & (name of aFile)
        set name of aFile to baseName
    end repeat
end tell

on padded(n)
    if n < 10 then
        return "0" & n
    else
        return (n as string)
    end if
end padded
```

**What it does:** Prefixes each filename with its creation date, e.g. `IMG_4821.jpg` becomes `2026-08-20-IMG_4821.jpg`. This keeps the original name (so nothing is lost) while making files sort by date in Finder.

## How to Run Either Script

1. Open **Script Editor** (Applications → Utilities)
2. Paste the script
3. Click **Run** (▶)
4. Select your photo folder when prompted
5. Done — check the folder in Finder

**Tip:** Always test on a copy of your photos first. Renaming is easy to do but tedious to undo by hand.

## Common Issues

**"Finder got an error: Can't set name of file to..."**
Usually means a file with that new name already exists in the folder — two photos with the same creation date and original name will collide. Add a counter suffix if this happens often.

**Script skips some files**
Non-image files in the folder (like `.DS_Store`) will still get renamed by these scripts since they operate on *every* file. Add a check like `if fileExtension is in {"jpg", "jpeg", "png", "heic"} then` around the rename logic to only touch photos.

Updated version with that filter:

```applescript
set targetFolder to choose folder with prompt "Select folder of photos to rename:"
set photoTypes to {"jpg", "jpeg", "png", "heic"}

tell application "Finder"
    set fileList to get files of targetFolder
    repeat with aFile in fileList
        set fileExtension to name extension of aFile
        if fileExtension is in photoTypes then
            set fileDate to creation date of aFile
            set dateString to (year of fileDate as string) & "-" & my padded(month of fileDate as integer) & "-" & my padded(day of fileDate)
            set name of aFile to (dateString & "-" & (name of aFile))
        end if
    end repeat
end tell

on padded(n)
    if n < 10 then
        return "0" & n
    else
        return (n as string)
    end if
end padded
```

## Skip Writing This Yourself

[Scriptly](https://apps.apple.com/us/app/scriptly-script-automations/id6788839033?mt=12) has a ready-made photo batch-rename template, plus AI generation if you want a custom naming pattern — just describe it in plain English.

## Related Guides

- [Organize Your Downloads Folder Automatically](/scriptly-blog/scriptly/auto-organize-downloads/)
- [10 AppleScript Templates You Can Copy-Paste](/scriptly-blog/scriptly/applescript-templates/)
