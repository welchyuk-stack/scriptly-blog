---
layout: post
date: 2026-08-28 07:46:48 +0000
last_modified_at: 2026-08-29 17:28:37 +0000
title: "Getting Comfortable in Terminal on Mac"
excerpt: "You don't need Terminal to use a Mac day to day — but knowing a handful of commands makes a lot of small annoyances disappear."
author: Luke Welch
section: windows_to_mac
---

# Getting Comfortable in Terminal on Mac

Terminal is Mac's command-line app — the rough equivalent of Windows' Command Prompt or PowerShell, but running a Unix shell (`zsh` by default on modern macOS) instead. You genuinely don't need it for everyday Mac use. But a handful of commands solve problems that are otherwise annoyingly fiddly through the regular interface, and it's less intimidating than it looks.

## Opening it

`⌘+Space`, type "Terminal," hit Enter. That's it — it's in Applications > Utilities if you'd rather find it by clicking.

## The commands that map directly from what you already know

If you've used Command Prompt, most of your instincts carry over with different command names:

| Command Prompt | Terminal (Mac) | Does |
|---|---|---|
| `dir` | `ls` | list files in current folder |
| `cd foldername` | `cd foldername` | change directory (same!) |
| `cls` | `clear` | clear the screen |
| `copy` | `cp` | copy a file |
| `move` | `mv` | move or rename a file |
| `del` | `rm` | delete a file |
| `mkdir` | `mkdir` | make a folder (same!) |

A few of these are identical, which helps. The differences are mostly naming, not concept.

## The moves worth learning first

**Tab completion.** Start typing a file or folder name and hit Tab — it autocompletes. This alone eliminates most typos and is faster than typing full paths.

**Dragging a file into Terminal** pastes its full path automatically. If a command needs a file path and you're not sure how to type it out, just drag the file from Finder into the Terminal window.

**Up arrow** cycles through your command history — no retyping a long command you just ran with one small change.

**`open .`** opens the current Terminal folder in Finder. Useful when you've navigated somewhere via `cd` and want to see it visually instead of by listing.

## Things Terminal is genuinely good for

**Force-quitting something that's really stuck.** If Force Quit (`⌘+⌥+Esc`) doesn't work, `killall AppName` (exact app name, case-sensitive) will.

**Checking what's using your network or a port.** `lsof -i :3000` shows what's bound to port 3000 — handy if you're a developer and something's already running there.

**Batch operations regular Finder can't do easily.** Renaming 200 files with a specific pattern, finding every file over a certain size, that kind of thing — a one-line command often beats clicking through hundreds of files by hand.

**Checking disk space by folder**, not just overall: `du -sh */` in a directory shows the size of each subfolder, which System Settings' storage view doesn't break down nearly as granularly.

## The honest caveat

Terminal commands are unforgiving — there's no confirmation dialog before `rm` deletes a file, and no Trash to recover it from afterward. The habit worth building early: if you're not sure what a command does, look it up before running it, especially anything involving `rm`, `sudo`, or a command copy-pasted from a random forum post. `man <command>` (manual) shows the built-in documentation for anything installed on your Mac if you want to check before running it.

## If Terminal isn't really what you're after

A lot of people reach for Terminal assuming it's the only way to automate repetitive tasks on Mac — rename files, sort downloads, that kind of thing. It's one way, but not the easiest one. AppleScript handles most everyday automation without ever opening Terminal, and [Scriptly]({{ site.sections.scriptly.app_url }}) will write that AppleScript for you from a plain description if you'd rather skip the syntax entirely.

Terminal is a tool worth having in your back pocket, not something you need to master. Learning the ten commands above covers the vast majority of situations where it's genuinely the fastest option.
