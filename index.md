---
layout: page
title: "MacBound: The Complete Windows to Mac Switching Guide"
description: "Everything a Windows switcher needs on one Mac — keyboard shortcuts, trackpad gestures, Finder vs. Explorer, settings, and more."
permalink: /
redirect_from: /windows-to-mac/
section: windows_to_mac
wide: true
show_breadcrumb: false
---

<div class="hero">
  <div class="kicker">Windows → Mac · The complete switching guide</div>
  <h1>Feel at home<br>on macOS.</h1>
  <p>Reference pages for the stuff you'll look up in week one. Guides for the stuff you'll want to understand properly.</p>
</div>

<hr class="hr">

<h2 class="kicker kicker--ink" style="margin-top: 40px;">01 — Reference</h2>

<div class="ref-grid">
  <a class="ref-cell" href="{{ '/windows-to-mac/keyboard-shortcuts/' | relative_url }}">
    <div class="ref-cell__no">01</div>
    <h3>Keyboard Shortcuts</h3>
    <p>Searchable, copyable, printable — every Windows shortcut mapped to macOS.</p>
  </a>
  <a class="ref-cell" href="{{ '/windows-to-mac/trackpad-gestures/' | relative_url }}">
    <div class="ref-cell__no">02</div>
    <h3>Trackpad Gestures</h3>
    <p>Every gesture your trackpad supports, and what it replaces.</p>
  </a>
  <a class="ref-cell" href="{{ '/windows-to-mac/finder-vs-explorer/' | relative_url }}">
    <div class="ref-cell__no">03</div>
    <h3>Finder vs. Explorer</h3>
    <p>Same job, different muscle memory — a side-by-side comparison.</p>
  </a>
  <a class="ref-cell" href="{{ '/windows-to-mac/settings-translator/' | relative_url }}">
    <div class="ref-cell__no">04</div>
    <h3>Settings Translator</h3>
    <p>"Where did they move this?" Find any Windows setting's new home.</p>
  </a>
  <a class="ref-cell" href="{{ '/windows-to-mac/first-week/' | relative_url }}">
    <div class="ref-cell__no">05</div>
    <h3>Your First Week</h3>
    <p>Seven things that trip up almost every switcher, one per day.</p>
  </a>
</div>

<hr class="hr">

<h2 class="kicker kicker--ink" style="margin-top: 40px;">02 — Guides</h2>

<div class="guide-index">
{% assign w2m_posts = site.windows_to_mac | sort: "title" %}
{% for post in w2m_posts %}
  <a class="guide-row" href="{{ post.url | relative_url }}">
    <span class="guide-row__no">{{ forloop.index | prepend: '00' | slice: -2, 2 }}</span>
    <span class="guide-row__title">{{ post.title }}</span>
    <span class="guide-row__arrow">→</span>
  </a>
{% endfor %}
</div>

<div class="poster">
  <div class="poster__kicker">From the makers of Scriptly &amp; SnipClip</div>
  <div class="poster__title">Built by switchers, for switchers.</div>
</div>
