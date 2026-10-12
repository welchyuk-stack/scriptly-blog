---
layout: page
title: "TopBox Support"
description: "Get help with TopBox, the Mac menu-bar clipboard manager and file shelf: hotkeys, keyboard navigation, storage, the file shelf, and resetting data."
permalink: /topbox/support/
section: topbox
show_breadcrumb: false
last_modified_at: 2026-10-12
---

<span class="section-badge">TopBox</span>

# TopBox Support

TopBox is a menu-bar-only app for Mac — look for its icon in the menu bar after launching (there's no Dock icon or main window). Press the global hotkey (default **⇧⌘T**) or click the menu bar icon to open the panel.

## What TopBox does

- **Clipboard history** — automatically saves text, code snippets, and images as you copy, with instant search and one click to copy any past entry back. Files copied in Finder are kept as files, so clicking the entry lets you paste the actual files.
- **File Shelf** — a drop zone (the Loading Bay) for parking files while you work. Drag files in or click the Loading Bay to pick them, search by name, click to open, and drag them out to Finder or another app when you need them.

## Common questions

### How do I change the hotkey?

Open Settings (the gear icon in the panel) and click the hotkey field, then press the new combination. It must include ⌘, ⌥, or ⌃ — Shift on its own isn't accepted, so the hotkey can't interfere with normal typing. If another app already uses that combination, Settings will tell you.

### Can I use TopBox from the keyboard?

Yes. The search field is focused as soon as the panel opens. Use ↑/↓ to move through either list, Return to copy the selected clipboard entry (or open the selected file), and Tab to switch between the clipboard and the shelf. Escape closes the panel. VoiceOver is supported throughout.

### Does my clipboard history survive a restart?

Yes. Since version 1.2, clipboard history and the file shelf are saved on your Mac and are still there after you quit or restart TopBox. Clipboard history and saved images are encrypted at rest with a key kept in your Keychain. See the [Privacy Policy](/topbox/privacy/) for the details.

### Can I stop TopBox from clearing my clipboard history?

Yes, two ways: pin up to 3 favourite entries (pinned items are kept by auto-clear and by the Clear button), or set auto-clear to "Never" in Settings. You can also raise the history limit up to 500 items.

### I dragged a file into the shelf — where did it go?

Nowhere — the File Shelf doesn't move or copy the file, it just keeps a reference to it. Click it to open it, drag it out to Finder or another app, or right-click it to Open, Show in Finder, or Remove it from the shelf. Unpinned files leave the shelf when you drag them out; pinned files stay.

### Why is a shelved file dimmed and marked "Missing"?

The original file has been deleted, or moved somewhere TopBox can no longer follow it. Right-click and choose Remove to clear it from the shelf, then add the file again from its new location.

### Does TopBox collect any data?

No — no account, no analytics, no tracking, no network calls of any kind. Everything stays on your Mac. See the [Privacy Policy](/topbox/privacy/) for details.

### What does "Reset All Data" do?

Clears your entire clipboard history and file shelf, pinned items included. It asks for confirmation first, since it can't be undone. "Unpin All Files" is different and non-destructive — it just unpins your shelved files, it doesn't remove them from the shelf.

## Contact

Still stuck, or found a bug? Email **welchyuk@gmail.com** — include your Mac model and macOS version so it's easier to help.
