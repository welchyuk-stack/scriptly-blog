---
layout: page
title: "TopBox Privacy Policy"
description: "Privacy policy for TopBox, the Mac clipboard manager and file shelf. No account, no analytics, no network calls; history stays on your Mac, encrypted at rest."
permalink: /topbox/privacy/
show_breadcrumb: false
sitemap: false
noindex: true
last_modified_at: 2026-10-23
---

<p class="retired-note"><strong>TopBox is no longer sold.</strong> This page stays online for people who already have TopBox installed.</p>


<span class="section-badge">TopBox</span>

# TopBox Privacy Policy

*Last updated: October 2026*

TopBox is a menu-bar utility for Mac. Your clipboard and file data never leave your Mac.

## What TopBox does not do

- **No account, no sign-in.** TopBox doesn't know who you are.
- **No analytics, no tracking, no telemetry.** Nothing about your usage is collected or transmitted anywhere.
- **No network calls of any kind.** TopBox doesn't talk to the internet — nothing to sync, nothing to phone home to.
- **No data ever leaves your Mac.**

## What TopBox stores, and how

Since version 1.2, TopBox saves your data on your Mac so it's still there after you quit or restart the app. It's kept in TopBox's own Application Support folder and is never uploaded, synced to iCloud, or seen by us.

- **Clipboard history and saved images** are stored on disk and **encrypted at rest** with AES-GCM, using a key created for your install and kept in your Keychain on this Mac. If the Keychain key can't be accessed, TopBox stores history unencrypted rather than lose it.
- **The file shelf** is saved as a list of references to the files you've added (their locations, plus the macOS permission bookmarks that let TopBox reopen them). TopBox doesn't copy your files, and this list isn't encrypted.
- **Copies marked as private are skipped.** Password managers and similar apps can flag a copy as concealed or temporary; TopBox doesn't save those to history.

You control what's kept: delete single entries, use **Clear** (keeps pinned items), set auto-clear to remove unpinned items after 1 hour or 24 hours, or use **Reset All Data** in Settings to erase all history and shelf entries, pinned included. Images that no longer belong to any history entry are deleted automatically. Like the rest of your Mac's data, these files can be included in your own backups, such as Time Machine.

Your app preferences (hotkey, history limit, auto-clear interval, Launch at Login) are stored locally in this Mac's standard preferences storage — never transmitted, never seen by us.

## Sandboxing

TopBox runs inside Apple's App Sandbox with the minimum entitlements needed to function: `app-sandbox` and `files.user-selected.read-write`, the latter needed only so the File Shelf can open or reveal files you've dragged in or picked. This is a technical detail, not a privacy concern — it doesn't grant TopBox any broader access to your files.

## Purchases

TopBox is a one-time paid download on the Mac App Store. Apple processes the purchase entirely through its own systems — TopBox never sees your payment details. See [Apple's own privacy policy](https://www.apple.com/legal/privacy/) for how Apple handles that transaction.

## Changes to this policy

If this policy changes, the "Last updated" date above will change too. Material changes will be reflected in the app's release notes.

## Contact

Questions about this policy: welchyuk@gmail.com
