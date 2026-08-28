---
layout: post
title: "Where Did My Windows Settings Go? A Mac Translator"
excerpt: "Every Windows Settings page maps to something on Mac — it's just not always where you'd guess. Here's the translation."
author: Luke Welch
section: windows_to_mac
---

# Where Did My Windows Settings Go? A Mac Translator

You know the Windows Settings app well enough that you could navigate it half-asleep. On Mac, that muscle memory is worthless — not because the settings don't exist, but because they live somewhere with a completely different name and organizational logic. Here's how the two actually map.

## The app itself has a different name (and a very different history)

What you want is called **System Settings** (Apple menu > System Settings, or search it via Spotlight with `⌘+Space`). If you're on an older macOS version you might see "System Preferences" instead — same thing, renamed in macOS Ventura. Either way, it's the one settings app for everything system-level, same idea as Windows Settings.

## The organizational logic is different, not missing

Windows groups settings by broad category — System, Devices, Network, Personalization, Apps, Accounts. macOS groups by roughly the same categories but subdivides differently, and a few Windows categories don't have a direct one-to-one Mac page at all.

The most common lookups:

| You're looking for... | On Mac, it's... |
|---|---|
| Display Settings | System Settings > Displays |
| Network & Internet | System Settings > Network |
| Wallpaper / Lock Screen | System Settings > Wallpaper / Lock Screen (now separate pages) |
| Startup Apps | System Settings > General > Login Items |
| Windows Update | System Settings > General > Software Update |
| Ease of Access | System Settings > Accessibility |
| Family & Other Users | System Settings > Users & Groups |

## The one that genuinely doesn't exist: "Default Apps"

Windows has a single page to set default apps for file types, links, and protocols. macOS doesn't have an equivalent single page — it's split up. Default web browser lives in System Settings > Desktop & Dock. Everything else (which app opens a `.pdf`, a `.jpg`, a specific file type) is set per file type: right-click the file, Get Info (`⌘+I`), find "Open with," pick the app, and optionally hit "Change All..." to apply it to every file of that type. More clicks than Windows' single page, but more granular.

## Uninstalling apps isn't in Settings at all

There's no Control Panel-style "Add or Remove Programs" list. Uninstalling an app on Mac usually just means dragging it from the Applications folder (Finder > Applications) to the Trash. Most apps don't leave meaningful residue behind the way Windows installers sometimes do, since Mac apps are typically self-contained bundles rather than scattered across a registry and multiple folders.

## Login items replaced "Startup Apps"

Windows' Task Manager > Startup tab (or Settings > Apps > Startup) controls what launches at boot. The Mac equivalent, Login Items, lives in System Settings > General — you'll find both apps that launch at login and background items some apps quietly add themselves (worth a periodic check if your Mac feels slower to start up than it used to).

## A few worth bookmarking specifically

- **Privacy & Security** — the single most important page to know. Every permission prompt you'll see ("App wants to access your Camera," "App wants Full Disk Access") gets managed here if you ever need to revoke or re-grant something.
- **Trackpad and Keyboard** — worth a visit on day one. Keyboard specifically lets you remap Caps Lock to Control, which is a small change that makes a surprising number of Mac-native keyboard shortcuts (anything using `⌃`) far more comfortable to reach.
- **Battery** (was "Power & Battery") — shows battery health over time, not just current charge, which Windows doesn't surface nearly as clearly.

For the complete table — every category, matched location, and any gotchas — see the [full Settings Translator](/windows-to-mac/settings-translator/), which is searchable if you just want to jump straight to one setting.
