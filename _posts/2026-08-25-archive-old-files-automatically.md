---
layout: post
title: "Archive Old Files Automatically on Mac (AppleScript Guide)"
date: 2026-08-25
categories: [files, automation]
tags: [AppleScript, Finder, archiving, storage]
author: Luke Welch
excerpt: "Free up clutter by automatically moving files older than a set number of days into an Archive folder — one script, run any time."
---

# Archive Old Files Automatically on Mac

Old downloads, old project files, and old screenshots pile up quietly. Instead of manually hunting for what's safe to move, this script does it by date — automatically, and safely (nothing gets deleted, just moved).

## The Script

```applescript
set targetFolder to choose folder with prompt "Choose a folder to archive old files from:"
set daysOld to 90
set cutoffDate to (current date) - (daysOld * days)

tell application "Finder"
    if not (exists folder "Archive" of targetFolder) then
        make new folder at targetFolder with properties {name:"Archive"}
    end if
    set archiveFolder to folder "Archive" of targetFolder

    repeat with aFile in (get files of targetFolder)
        if modification date of aFile < cutoffDate then
            move aFile to archiveFolder
        end if
    end repeat
end tell
```

## How It Works

1. **You choose a folder** — this can be Downloads, Desktop, a project folder, anywhere
2. **Sets a cutoff** — `daysOld` is 90 by default (files older than 90 days get archived)
3. **Creates an "Archive" subfolder** if one doesn't already exist
4. **Checks every file's modification date** and moves anything older than the cutoff into Archive

Nothing is deleted — files just move into a subfolder, so it's easy to check or undo.

## Changing the Time Window

Want 30 days instead of 90? Just change one line:

```applescript
set daysOld to 30
```

## Archiving by Creation Date Instead

`modification date` catches files that were edited recently even if created long ago. If you'd rather archive based on when a file was first created:

```applescript
if creation date of aFile < cutoffDate then
    move aFile to archiveFolder
end if
```

## Only Archiving Certain File Types

To only archive, say, PDFs and images and leave everything else alone:

```applescript
set targetFolder to choose folder with prompt "Choose a folder to archive old files from:"
set daysOld to 90
set cutoffDate to (current date) - (daysOld * days)
set archiveTypes to {"pdf", "png", "jpg", "jpeg"}

tell application "Finder"
    if not (exists folder "Archive" of targetFolder) then
        make new folder at targetFolder with properties {name:"Archive"}
    end if
    set archiveFolder to folder "Archive" of targetFolder

    repeat with aFile in (get files of targetFolder)
        try
            set fileExtension to name extension of aFile
            if (modification date of aFile < cutoffDate) and (fileExtension is in archiveTypes) then
                move aFile to archiveFolder
            end if
        end try
    end repeat
end tell
```

## Running It Automatically Every Week

1. Export from Script Editor: **File → Export**, Format: **Application**
2. Open **Automator → File → New → Calendar Alarm**
3. Add the **"Run AppleScript"** action, paste in the script
4. Save, then edit the Calendar event it creates to repeat **weekly**

Your folder now self-cleans on a schedule, no manual runs needed.

## A Note on `choose folder`

Because this script uses `choose folder`, it can't run fully unattended without modification — the picker needs a click. For a scheduled version, hardcode the path instead:

```applescript
set targetFolder to (POSIX file "/Users/yourname/Downloads") as alias
```

Replace the path and username with your own. Find your exact path by right-clicking a folder in Finder while holding **Option**, then choosing **Copy "FolderName" as Pathname**.

## Troubleshooting

**"Finder got an error: Can't get folder Archive"**
This shouldn't happen since the script checks `exists` first — but if it does, the folder name may have trailing spaces or hidden characters. Delete it and let the script recreate it.

**Files aren't being archived that should be**
Check `daysOld` — and remember `modification date` updates every time a file is opened and re-saved, so a file you think is "old" might have been touched more recently than expected.

## Prefer a Ready-Made Version?

[Scriptly](https://apps.apple.com/us/app/scriptly-script-automations/id6788839033?mt=12) includes this as a built-in template — no setup required, plus AI generation if you want custom archiving rules described in plain English.

## Related Guides

- [Organize Your Downloads Folder Automatically](/scriptly-blog/auto-organize-downloads/)
- [How to Automate Email Organization on Mac](/scriptly-blog/automate-email-organization/)
- [10 AppleScript Templates You Can Copy-Paste](/scriptly-blog/applescript-templates/)
