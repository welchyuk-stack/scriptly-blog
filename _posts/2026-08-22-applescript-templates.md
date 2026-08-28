---
layout: post
title: "10 AppleScript Templates You Can Copy-Paste Right Now"
date: 2026-08-22
redirect_from: /applescript-templates/
section: scriptly
categories: [templates, reference, applescript]
tags: [AppleScript, templates, copy-paste, Finder, Mail]
author: Luke Welch
excerpt: "Ten small, genuinely useful AppleScript snippets — file organization, notifications, backups, and more — ready to paste into Script Editor."
---

# 10 AppleScript Templates You Can Copy-Paste

No theory, no setup — just ten working scripts. Paste any of these into **Script Editor** (Applications → Utilities) and click Run.

## 1. Empty the Trash

```applescript
tell application "Finder"
    empty trash
end tell
```

## 2. Show a Desktop Notification

```applescript
display notification "Backup finished!" with title "Scriptly" sound name "Glass"
```

Useful at the end of longer scripts so you know when they're done.

## 3. Get the Frontmost App's Name

```applescript
tell application "System Events"
    set frontApp to name of first application process whose frontmost is true
end tell
display dialog "You're using: " & frontApp
```

## 4. Count Files in a Folder

```applescript
set targetFolder to choose folder
tell application "Finder"
    set fileCount to count of (files of targetFolder)
end tell
display dialog "That folder has " & fileCount & " files."
```

## 5. Quit All Apps Except a Few

Handy before a screen recording or presentation:

```applescript
set keepOpen to {"Finder", "Script Editor"}

tell application "System Events"
    set runningApps to name of every process whose background only is false
end tell

repeat with appName in runningApps
    if appName is not in keepOpen then
        try
            tell application appName to quit
        end try
    end if
end repeat
```

## 6. Backup a Folder to an External Drive

```applescript
set sourceFolder to choose folder with prompt "Folder to back up:"
set destFolder to choose folder with prompt "Where to back it up:"

set sourcePath to POSIX path of sourceFolder
set destPath to POSIX path of destFolder

do shell script "rsync -av " & quoted form of sourcePath & " " & quoted form of destPath

display notification "Backup complete" with title "Scriptly"
```

`rsync` only copies what's changed, so re-running this is fast after the first backup.

## 7. Convert Selected Finder Text File to Uppercase Content

```applescript
set theFile to choose file with prompt "Pick a text file:"
set fileContent to read theFile as «class utf8»
set upperContent to do shell script "echo " & quoted form of fileContent & " | tr '[:lower:]' '[:upper:]'"

set theResult to open for access theFile with write permission
set eof of theResult to 0
write upperContent to theResult
close access theResult
```

## 8. Toggle Dark Mode

```applescript
tell application "System Events"
    tell appearance preferences
        set dark mode to not dark mode
    end tell
end tell
```

## 9. Eject All Mounted Volumes

```applescript
tell application "Finder"
    eject (every disk whose ejectable is true)
end tell
```

Great as the last step before shutting down for the day.

## 10. Create a Timestamped Folder on the Desktop

```applescript
set todayDate to (current date)
set dateString to (year of todayDate as string) & "-" & my padded(month of todayDate as integer) & "-" & my padded(day of todayDate)

tell application "Finder"
    make new folder at desktop with properties {name:"Notes-" & dateString}
end tell

on padded(n)
    if n < 10 then
        return "0" & n
    else
        return (n as string)
    end if
end padded
```

Good for daily journaling folders, scanned receipts, or a "today's downloads" staging area.

## Using These Templates

For any script above:
1. Open Script Editor
2. Paste the code
3. Click **Run** (▶)
4. Approve any permission prompts (this is normal — macOS confirming the script can control an app)

## Want 100+ More, Organized by Category?

These ten cover the basics. [Scriptly](https://apps.apple.com/us/app/scriptly-script-automations/id6788839033?mt=12) has 100+ ready-made templates across email, files, calendar, Slack, and GitHub — plus AI generation for anything not already covered.

## Related Guides

- [Organize Your Downloads Folder Automatically](/scriptly-blog/scriptly/auto-organize-downloads/)
- [How to Automate Email Organization on Mac](/scriptly-blog/scriptly/automate-email-organization/)
- [Fix Common AppleScript Errors](/scriptly-blog/scriptly/fix-common-applescript-errors/)
