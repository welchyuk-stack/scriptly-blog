---
layout: post
date: 2026-08-28 07:46:48 +0000
last_modified_at: 2026-08-29 17:28:37 +0000
title: "How to Install Homebrew on Mac (and Why You'll Want It)"
excerpt: "Windows has winget and Chocolatey. Mac's equivalent is Homebrew — and once it's installed, it becomes how you install almost everything else."
author: Luke Welch
section: windows_to_mac
---

# How to Install Homebrew on Mac (and Why You'll Want It)

If you ever used `winget` or Chocolatey on Windows to install software from the command line instead of hunting for installer `.exe` files, Homebrew is the direct Mac equivalent — and it's more central to the Mac developer/power-user ecosystem than either of those are on Windows. A huge number of tools, especially anything development-adjacent, assume you already have it.

## What it actually is

Homebrew is a package manager: a command-line tool that installs, updates, and removes software by name, pulling from a huge community-maintained catalog. Instead of downloading a `.dmg`, dragging an icon to Applications, and manually checking for updates later, you run one command and it's handled — installation, and later, updates, all from Terminal.

## Installing it

Open Terminal (Spotlight: `⌘+Space`, type "Terminal") and paste this, exactly as published on [brew.sh](https://brew.sh) — always check the official site for the current command rather than copying it from an old blog post, since Homebrew occasionally updates the installer:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

It'll ask for your password (this is normal — it needs to create a few system directories) and walk you through the rest. On Apple Silicon Macs, it installs to `/opt/homebrew`; on Intel Macs, `/usr/local`. The installer will tell you if you need to add it to your shell's PATH — usually one more command it prints for you to copy-paste.

## Using it

Once installed, the whole interface is a handful of commands:

```bash
brew install <package>     # install something
brew uninstall <package>   # remove it
brew update                # update Homebrew itself
brew upgrade                # upgrade everything you've installed
brew list                   # see what you've installed
```

A few genuinely useful examples: `brew install wget`, `brew install git`, `brew install --cask visual-studio-code`. That `--cask` flag matters — Homebrew has two catalogs. Plain `brew install` handles command-line tools; `brew install --cask` handles full GUI applications (the ones you'd normally drag into Applications). If a regular install fails with "no formulae found" for something you know is an app, try it again with `--cask`.

## Why it's worth the setup

The honest case for Homebrew isn't that it's dramatically faster than downloading an installer once — it's that it removes the manual-update problem entirely. `brew upgrade` on its own catches every tool you've installed this way in one pass, instead of you remembering to check a dozen different apps' "Check for Updates" menus individually.

It's also just the expected way to install a huge swath of developer and power-user tools on Mac — READMEs across GitHub routinely say "run `brew install x`" as the first step, no further explanation given, because it's assumed you have it.

## A note if you're coming from AppleScript or automation work

Homebrew installs command-line tools, but it's not itself a scripting or automation tool — it's how you *get* the tools you'll automate around (`jq` for JSON, `ffmpeg` for video, `imagemagick` for images, and hundreds more). If what you're actually after is automating repetitive Mac tasks — file organization, batch renaming, that kind of thing — that's more AppleScript's territory than Homebrew's, and it doesn't require Terminal at all. [Scriptly]({{ site.sections.scriptly.app_url }}) generates working AppleScript from a plain-English description if you'd rather skip writing it by hand.

Homebrew is a one-time, ten-minute setup that quietly saves time for as long as you use the Mac afterward — worth doing even if you don't yet know exactly what you'll install with it.
