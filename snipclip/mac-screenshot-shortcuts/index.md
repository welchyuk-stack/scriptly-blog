---
layout: page
last_modified_at: 2026-10-12
title: "Every Mac Screenshot Shortcut (Plus How to Add Markup Instantly)"
description: "The native macOS screenshot shortcuts, and how SnipClip's hotkey adds instant markup on top."
permalink: /snipclip/mac-screenshot-shortcuts/
section: snipclip
wide: true
---

<span class="section-badge">SnipClip</span>

# Mac Screenshot Shortcuts

macOS has everything you need to capture a screenshot built in. Here's every native shortcut, plus what SnipClip adds on top.

## Native macOS shortcuts

<div class="ref-table-wrap">
<table class="ref-table">
  <thead>
    <tr>
      <th>Action</th>
      <th>Shortcut</th>
    </tr>
  </thead>
  <tbody>
    {%- for group in site.data.shortcuts -%}
      {%- if group.category == "Screenshots" -%}
        {%- for item in group.items -%}
    <tr>
      <td>{{ item.action }}</td>
      <td class="mono"><span class="kbd">{{ item.mac }}</span></td>
    </tr>
        {%- endfor -%}
      {%- endif -%}
    {%- endfor -%}
  </tbody>
</table>
</div>

These get you the screenshot. They don't get you markup — for that you need a separate step (Preview, Markup in the built-in editor, or a dedicated tool).

## Where SnipClip fits in

SnipClip isn't a replacement for `⇧⌘4` — it's what happens *after*. Its own hotkey, `⌥⇧⌘S`, drag-selects an area (or click a window to capture just that window) and opens the markup editor immediately: pen, arrow, rectangle, circle, highlighter, text, numbered steps, blur and crop, plus a full colour picker with opacity. Copy or share the result instantly, with nothing uploaded — SnipClip is fully offline.

- Global capture hotkey `⌥⇧⌘S` and screen recording hotkey `⌥⇧⌘R` (both customisable)
- Scrolling Capture and timed full-screen capture (3, 5 or 10 seconds) from the menu bar
- Screen recording of the full screen or a selected region, to MP4, with optional system audio
- Recent Captures: reopen, edit and copy past screenshots from the menu bar
- Copy, save as PNG or JPEG, or drag the result into another app
- {{ site.sections.snipclip.price | prepend: "$" }} / £{{ site.sections.snipclip.gbp_price }} one-time purchase — no trial, no subscription
- Requires macOS 13+

<a href="{{ site.sections.snipclip.app_url }}"><img src="{{ '/assets/images/badges/app-store-badge-black.svg' | relative_url }}" width="120" height="40" alt="Download on the App Store" style="height: 44px; width: auto;"></a>

---

Related: [Every Mac Screenshot Shortcut, Explained](/snipclip/every-mac-screenshot-shortcut-explained/) · [How to Annotate a Screenshot on Mac](/snipclip/annotate-screenshot-mac/) · [Windows Snipping Tool vs. Mac](/snipclip/windows-snipping-tool-vs-mac/)
