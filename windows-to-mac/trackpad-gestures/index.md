---
layout: page
last_modified_at: 2026-08-28 07:46:48 +0000
title: "Mac Trackpad Gestures for Windows Switchers"
description: "Every essential macOS trackpad gesture explained, with its Windows equivalent."
permalink: /windows-to-mac/trackpad-gestures/
section: windows_to_mac
wide: true
---

<span class="section-badge">Windows → Mac</span>

# Trackpad Gestures: Quick Reference

Every gesture below works the same on a Magic Trackpad or a MacBook's built-in trackpad. This is the quick-scan card grid — for the full story on why gestures replace right-clicking and window snapping (and which ones switchers miss first), read [Right-Click, Gestures, and the Death of Muscle Memory](/windows-to-mac/right-click-gestures-mouse-trackpad/).

<div class="gesture-grid">
{%- for g in site.data.gestures -%}
  <div class="gesture-card">
    <div class="gesture-card__top">
      <h4>{{ g.gesture }}</h4>
      <span class="finger-pill">{{ g.fingers }} finger{% if g.fingers != 1 %}s{% endif %}</span>
    </div>
    <p class="motion">{{ g.motion }}</p>
    <p>{{ g.description }}</p>
    {%- if g.windows_equivalent -%}
    <p class="win-eq">Windows: {{ g.windows_equivalent }}</p>
    {%- endif -%}
  </div>
{%- endfor -%}
</div>

---

Related: [Keyboard Shortcuts](/windows-to-mac/keyboard-shortcuts/) · [Finder vs. Explorer](/windows-to-mac/finder-vs-explorer/)
