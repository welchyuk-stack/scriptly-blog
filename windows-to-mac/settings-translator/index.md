---
layout: page
last_modified_at: 2026-08-28 07:46:48 +0000
title: "Where Did This Windows Setting Go on Mac? (Settings Translator)"
description: "Find the macOS System Settings location for any Windows Settings page."
permalink: /windows-to-mac/settings-translator/
section: windows_to_mac
wide: true
---

<span class="section-badge">Windows → Mac</span>

# Settings Translator

"Where did they move this?" — find the macOS location for any Windows Settings page. This is the searchable lookup table — for the longer explanation of how macOS organizes System Settings differently from the Windows Control Panel, read [Where Did My Windows Settings Go? A Mac Translator](/windows-to-mac/wheres-my-windows-setting-on-mac/).

<div class="ref-toolbar no-print">
  <input type="search" id="ref-search" placeholder="Search a Windows setting…" aria-label="Search settings">
</div>

<div class="ref-table-wrap">
<table class="ref-table" data-storage-key="settings">
  <thead>
    <tr>
      <th>Category</th>
      <th>Windows Setting</th>
      <th>macOS Location</th>
    </tr>
  </thead>
  <tbody>
    {%- assign i = 0 -%}
    {%- for row in site.data.settings_translator -%}
      {%- assign i = i | plus: 1 -%}
    <tr data-id="t{{ i }}" data-search="{{ row.category | downcase }} {{ row.windows_setting | downcase }} {{ row.mac_location | downcase }}">
      <td>{{ row.category }}</td>
      <td>{{ row.windows_setting }}</td>
      <td>{{ row.mac_location }}{% if row.notes and row.notes != "" %}<br><span class="notes">{{ row.notes }}</span>{% endif %}</td>
    </tr>
    {%- endfor -%}
  </tbody>
</table>
</div>
<p class="empty-state" id="ref-empty">No settings match your search.</p>

---

Related: [Keyboard Shortcuts](/windows-to-mac/keyboard-shortcuts/) · [Finder vs. Explorer](/windows-to-mac/finder-vs-explorer/)
