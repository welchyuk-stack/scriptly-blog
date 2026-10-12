---
layout: page
last_modified_at: 2026-10-12
title: "Windows to Mac Keyboard Shortcuts (Full Reference)"
description: "Every essential Windows keyboard shortcut mapped to its macOS equivalent — searchable, copyable, and printable."
permalink: /windows-to-mac/keyboard-shortcuts/
section: windows_to_mac
wide: true
---

<span class="section-badge">Windows → Mac</span>

# Windows → Mac Keyboard Shortcuts

Find the macOS equivalent of any Windows shortcut you already know. Search by action or by either shortcut, star the ones you want to remember, and print a clean reference sheet when you're ready. This is the full lookup table — if you'd rather read about *why* the mappings work the way they do (and which ones trip people up), see [Windows Keyboard Shortcuts vs Mac: The Muscle-Memory Guide](/windows-to-mac/windows-shortcuts-vs-mac-guide/).

<div class="ref-toolbar no-print">
  <input type="search" id="ref-search" placeholder="Search a shortcut or action…" aria-label="Search shortcuts">
  <button class="btn" id="ref-fav-toggle">Show favourites only</button>
  <button class="btn" id="ref-print">Print / Save as PDF</button>
</div>

<div class="ref-table-wrap">
<table class="ref-table" data-storage-key="shortcuts">
  <thead>
    <tr>
      <th>Action</th>
      <th>Windows</th>
      <th>macOS</th>
      <th class="no-print"></th>
    </tr>
  </thead>
  <tbody>
    {%- assign i = 0 -%}
    {%- for group in site.data.shortcuts -%}
    <tr class="no-print"><td colspan="4" style="padding-top: 20px; font-weight: 600; color: var(--text-secondary); border-bottom: none;">{{ group.category }}</td></tr>
    {%- for item in group.items -%}
      {%- assign i = i | plus: 1 -%}
    <tr data-id="s{{ i }}" data-search="{{ item.action | downcase }} {{ item.windows | downcase }} {{ item.mac | downcase }}">
      <td>{{ item.action }}{% if item.notes and item.notes != "" %}<br><span class="notes">{{ item.notes }}</span>{% endif %}</td>
      <td class="mono"><span class="kbd">{{ item.windows }}</span></td>
      <td class="mono"><span class="kbd">{{ item.mac }}</span></td>
      <td class="no-print">
        <button class="copy-btn" data-copy="{{ item.mac }}" title="Copy Mac shortcut" aria-label="Copy Mac shortcut">Copy</button>
        <button class="fav-btn" aria-label="Favourite this shortcut" aria-pressed="false">☆</button>
      </td>
    </tr>
    {%- endfor -%}
    {%- endfor -%}
  </tbody>
</table>
</div>
<p class="empty-state" id="ref-empty">No shortcuts match your search.</p>

## Shortcuts that work differently on a Mac

Most Windows shortcuts carry over by swapping **Ctrl** for **⌘ Command**. These are the ones that don't, and the ones that catch out almost every switcher in the first week.

### Where are Home and End on a Mac?

Mac keyboards have no Home or End keys. In a text field, **⌘←** jumps to the start of the line and **⌘→** to the end; add **Shift** to select as you go. **⌘↑** and **⌘↓** jump to the top and bottom of the whole document. On a full-size keyboard with Fn, **Fn ←** and **Fn →** act like Home and End in many apps, scrolling to the top or bottom of the page rather than moving the cursor.

### How do I forward-delete?

The Mac **Delete** key deletes backwards, like Backspace on Windows. To delete the character to the right of the cursor, press **Fn Delete**. **⌥ Delete** removes a whole word, and **⌘ Delete** removes everything back to the start of the line.

### Why doesn't closing a window quit the app?

On Windows, closing the last window usually exits the program. On a Mac, **⌘W** closes the window but most apps keep running, with a dot under their Dock icon. Use **⌘Q** to quit. If an app stops responding, **⌥⌘Esc** opens Force Quit, the closest equivalent to Ctrl+Alt+Del.

### Why does ⌘Tab skip my other windows?

**⌘Tab** switches between apps, not windows. To cycle through windows of the same app, use **⌘`** (the key above Tab). Mission Control, with a three-finger swipe up or **⌃↑**, shows every open window at once.

### How do I rename or open a file in Finder?

Select a file and press **Return** to rename it; Windows uses F2. To open it, press **⌘O** or **⌘↓**. **⌘ Delete** moves it to the Trash.

### Can I make the Mac keyboard behave like Windows?

Partly. System Settings → Keyboard → Keyboard Shortcuts → Modifier Keys lets you swap Control and Command, which some switchers do to keep their muscle memory. Most people find it easier to learn the Mac layout within a couple of weeks, because every guide, menu and app assumes the standard keys.

---

Related: [Trackpad Gestures](/windows-to-mac/trackpad-gestures/) · [Finder vs. Explorer](/windows-to-mac/finder-vs-explorer/) · [Settings Translator](/windows-to-mac/settings-translator/)
