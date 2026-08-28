---
layout: page
title: "Your First Week on Mac: 7 Things to Learn"
description: "A day-by-day guide to your first week switching from Windows to Mac."
permalink: /windows-to-mac/first-week/
section: windows_to_mac
---

<span class="section-badge">Windows → Mac</span>

# Your First Week on Mac

Seven things that trip up almost every Windows switcher, one per day.

{%- for tip in site.data.first_week_tips -%}
<div class="tip-card" id="day-{{ tip.day }}">
  <div class="day-label">Day {{ tip.day }}</div>
  <h3>{{ tip.title }}</h3>
  <p>{{ tip.body }}</p>
</div>
{%- endfor -%}

---

Related: [Keyboard Shortcuts](/windows-to-mac/keyboard-shortcuts/) · [Trackpad Gestures](/windows-to-mac/trackpad-gestures/)
