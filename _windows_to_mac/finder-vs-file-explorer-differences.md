---
layout: post
date: 2026-08-28 07:46:48 +0000
title: "Finder vs File Explorer: What's Actually Different"
excerpt: "They both show you your files. Past that, Finder and File Explorer barely agree on anything. Here's what changed."
author: Luke Welch
section: windows_to_mac
---

# Finder vs File Explorer: What's Actually Different

Finder and File Explorer do the same job — browse files, move things around, dig through folders — but almost none of the details match. If you're clicking around expecting Windows behavior, here's what's actually going on.

## There's no address bar (sort of)

File Explorer's address bar lets you type or paste a path and jump straight there. Finder doesn't show one by default. The equivalent is `⌘+Shift+G` — "Go to Folder" — which opens a small text field where you can paste or type any path, including hidden system folders you can't normally browse to. It's arguably faster once you're used to it, but it's not visible until you go looking for it.

## Multiple folders open at once works differently

Windows typically means multiple File Explorer *windows*. Finder supports that too, but its more native pattern is tabs — `⌘+T` opens a new tab in the same window, and `⌘+1` through `⌘+9` jump between them. If your Windows habit is a taskbar cluttered with File Explorer icons, Finder tabs are the cleaner replacement.

## Search works differently — and it's more powerful than it looks

`⌘+F` in Finder isn't a simple filename filter — it's backed by Spotlight, macOS's system-wide index. That means it can search file *contents*, not just names, and it's typically much faster than File Explorer's search on an equivalent folder. The trade-off: because it's index-based, a file you just created might take a few seconds to show up in results.

## Properties became "Get Info" — and it's per-file, not batch by default

Right-click → Properties in Windows becomes right-click → Get Info (or `⌘+I`) in Finder. One difference worth knowing: Get Info opens a separate small window per file, rather than one dialog you can flip between. Selecting multiple files and hitting `⌘+I` will open several info windows at once — that's expected, not a bug.

## Deleting doesn't mean deleting

Dragging a file to the Trash (or pressing `⌘+Delete`) doesn't remove it — same as Windows' Recycle Bin, it's a holding pen until you empty it. The one gotcha: `⌘+Option+Delete` skips the Trash entirely and deletes immediately, no confirmation. Windows' equivalent is `Shift+Delete`. Both are easy to hit by accident with the wrong modifier key, so it's worth knowing before you're troubleshooting a "missing" file.

## View modes are the same idea, different shortcuts

Icons, list, and a third option Windows doesn't really have — columns (`⌘+3`), which shows nested folder hierarchy as a series of panes, genuinely useful for deep folder structures. The shortcuts: `⌘+1` icons, `⌘+2` list, `⌘+3` columns, `⌘+4` gallery (a big-preview mode, closer to Windows' "Large icons" but with a metadata sidebar).

## Hidden files aren't hidden the same way

Windows shows hidden files through a View menu checkbox. Finder's toggle is a shortcut: `⌘+Shift+.` (period) shows and hides dotfiles and system folders instantly, anywhere in Finder. Handy for anyone editing config files that live in hidden folders like `~/.ssh` or `~/.config`.

## Mapped network drives became "Connect to Server"

There's no "map a drive letter" concept on Mac — network shares don't get a letter, they show up in the sidebar once connected. `⌘+K` opens Connect to Server, where you paste a server address (`smb://`, `afp://`, etc.) directly.

None of this is worse or better, exactly — it's just a different set of defaults built around a different set of assumptions. Once the shortcuts are in your fingers, Finder gets out of your way the same as Explorer did. For the shortcuts side of things, the [full keyboard shortcut reference](/windows-to-mac/keyboard-shortcuts/) covers Finder-specific ones alongside everything else.
