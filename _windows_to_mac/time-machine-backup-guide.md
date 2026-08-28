---
layout: post
title: "Time Machine: Mac's Built-In Backup, Explained for Windows Switchers"
excerpt: "Windows has File History, buried and easy to ignore. Time Machine is Mac's equivalent — more visible, and worth actually turning on."
author: Luke Welch
section: windows_to_mac
---

# Time Machine: Mac's Built-In Backup, Explained for Windows Switchers

Windows has had backup tools for years — File History, and before that, Backup and Restore — but they're easy to forget exist because nothing prompts you to set them up. Time Machine is Mac's equivalent, and it's worth knowing about specifically because it's genuinely well designed, not just "technically available."

## What it actually does

Time Machine takes automatic, incremental backups of your entire Mac — not just documents, but apps, settings, and system files — to an external drive (or a network location, with more setup). "Incremental" means after the first full backup, it only copies what's changed, hourly, keeping:

- Hourly backups for the past 24 hours
- Daily backups for the past month
- Weekly backups for everything older, for as long as the drive has space

That means you can restore a file as it existed at 2pm yesterday, or a week ago, or three months ago — not just "the most recent backup," which is the main thing that separates it from a simple mirrored copy.

## Setting it up

Plug in an external drive (USB or Thunderbolt), and macOS will usually prompt you directly: "Do you want to use this disk to back up with Time Machine?" Say yes, and it handles formatting and setup itself. If it doesn't prompt automatically, go to System Settings > General > Time Machine and add the disk manually.

A drive roughly 2–3x the size of your Mac's storage is a reasonable rule of thumb — Time Machine keeps old backups until space runs low, then automatically deletes the oldest ones to make room.

**One thing worth doing immediately after setup**: encrypt the backup. There's a checkbox for it during setup ("Encrypt Backup Disk"). If that external drive is ever lost or stolen, an unencrypted backup is a copy of your entire Mac sitting in someone else's hands.

## Restoring a file (or your whole Mac)

For a single file: open Time Machine from the menu bar (or Spotlight search "Time Machine"), navigate to the folder that used to contain it, and use the timeline on the right edge of the screen to scroll back to a point where the file existed. Select it, click Restore.

For a full Mac restore — new machine, or a fresh reinstall — boot into macOS Recovery (hold the power button on Apple Silicon Macs during startup) and choose "Restore from Time Machine Backup." This restores everything: apps, settings, files, exactly as they were.

## Where it differs from Windows' File History

File History backs up specific folders you designate (Documents, Desktop, etc.) — it's opt-in per folder. Time Machine backs up essentially everything by default, which is both more thorough and less configurable without deliberately excluding folders (System Settings > General > Time Machine > Options, "Exclude these items"). If you have a folder full of large files you don't want backed up — a video project library, a VM disk image — excluding it explicitly is worth doing, since it otherwise eats backup drive space fast.

## The honest pitch

The reason Time Machine is worth actually setting up, rather than filing under "I'll do it eventually," is that it runs invisibly once configured — no reminders, no manual "run backup now" button you have to remember to click. Plug the drive in periodically (or leave a dedicated one connected at your desk), and it just works in the background. It's the kind of thing that matters enormously exactly once, and it's worth having in place before that day rather than after.
