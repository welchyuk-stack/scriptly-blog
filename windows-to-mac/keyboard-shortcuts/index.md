---
layout: page
title: "Windows to Mac Keyboard Shortcuts (Full Reference)"
description: "Every essential Windows keyboard shortcut mapped to its macOS equivalent — searchable, copyable, and printable."
permalink: /windows-to-mac/keyboard-shortcuts/
section: windows_to_mac
wide: true
---

<span class="section-badge">Windows → Mac</span>

# Windows → Mac Keyboard Shortcuts

Find the macOS equivalent of any Windows shortcut you already know. Search by action or by either shortcut, star the ones you want to remember, and print a clean reference sheet when you're ready.

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

---

Related: [Trackpad Gestures](/windows-to-mac/trackpad-gestures/) · [Finder vs. Explorer](/windows-to-mac/finder-vs-explorer/) · [Settings Translator](/windows-to-mac/settings-translator/)
