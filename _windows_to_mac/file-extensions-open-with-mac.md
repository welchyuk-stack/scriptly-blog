---
layout: post
date: 2026-08-28 07:46:48 +0000
title: "File Extensions and \"Open With\" on Mac vs Windows"
excerpt: "Mac hides file extensions by default and handles default apps per-file rather than per-type globally. Here's how to actually control it."
author: Luke Welch
section: windows_to_mac
---

# File Extensions and "Open With" on Mac vs Windows

Two small but genuinely confusing differences trip up almost every Windows switcher around file types: extensions are hidden by default, and there's no single "default apps" settings page — control happens differently, and it's more granular than Windows' approach.

## Extensions are hidden by default

Windows shows file extensions in Explorer somewhat inconsistently depending on version and settings, but it's common to see them. macOS hides them by default across the board — a file named `report.pdf` just shows as `report` in Finder.

To show them everywhere: Finder menu (top-left, next to the Apple icon, when Finder is active) > Settings > Advanced > check "Show all filename extensions." This is a global, one-time setting — once it's on, every file everywhere shows its extension.

If you just want to see one file's extension without changing the global setting, select the file, `⌘+I` for Get Info, and expand the "Name & Extension" section — it's shown there regardless of the global setting, and there's a checkbox to hide/show it for that specific file.

## Renaming and accidentally breaking the extension

Since extensions are hidden by default, renaming a file (select it, hit Return, type a new name) can accidentally strip or change the extension if you're not careful, especially right after switching from Windows where you'd see the full `filename.ext` and edit around it. If you rename a file and it suddenly won't open in the app you expect, check whether the extension survived the rename — Get Info will show you.

## "Open With" works per-file, and it's more powerful than it looks

Right-click any file and there's an "Open With" submenu listing every app on your Mac capable of opening that file type, plus "Other..." to browse for something not listed. Choose an app, and there's a checkbox at the bottom: **"Always Open With"** — check it, and every file of that same type opens with your chosen app going forward.

This is functionally similar to Windows' "Open with > Choose another app > Always use this app," but on Mac it's accessed per-file rather than through a centralized Default Apps settings page — there isn't one. If you want to change the default for a file type without having a specific file to right-click, the workaround is: right-click any file of that type, Get Info, change the "Open with" dropdown near the top, and click **"Change All..."** — this applies it to every file with that same extension, not just the one you clicked.

## Setting a default web browser is the one exception

Unlike other file types, default browser (and default email client) does get a dedicated settings location: System Settings > Desktop & Dock, scroll down to "Default web browser." This is the closest Mac gets to Windows' centralized default-apps page, and it only covers browser and mail — everything else routes through the per-file-type Get Info method above.

## Why this design, briefly

The per-file-type approach (via Get Info's "Change All") is arguably more precise than Windows' single global settings page — you're explicitly choosing which extension you're changing the default for, rather than scrolling a long alphabetical list of every registered file type on the system. It's a few more clicks the first time, but it maps more directly to "I want `.jpg` files to open in Preview instead of Photos" as a specific, deliberate action.

Once you know where "Change All" lives, this stops being confusing — it's genuinely just a different location for the same capability, not a missing feature.
