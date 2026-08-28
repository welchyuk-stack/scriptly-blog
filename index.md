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
  <div class="logo-wordmark--hero">{% include wordmark.html %}</div>
  <p>Your complete guide to feeling at home on macOS.</p>
</div>

# Windows → Mac Switching Guide

Everything you need to feel at home on macOS — reference pages for the stuff you'll look up in week one, plus guides for the stuff you'll want to understand properly.

## Reference

<div class="card-grid">
  <a class="card" href="{{ '/windows-to-mac/keyboard-shortcuts/' | relative_url }}">
    <div class="card__accent" style="background: {{ site.sections.windows_to_mac.accent }};"></div>
    <h3>Keyboard Shortcuts</h3>
    <p>Searchable, copyable, printable — every Windows shortcut mapped to macOS.</p>
  </a>
  <a class="card" href="{{ '/windows-to-mac/trackpad-gestures/' | relative_url }}">
    <div class="card__accent" style="background: {{ site.sections.windows_to_mac.accent }};"></div>
    <h3>Trackpad Gestures</h3>
    <p>Every gesture your trackpad supports, and what it replaces.</p>
  </a>
  <a class="card" href="{{ '/windows-to-mac/finder-vs-explorer/' | relative_url }}">
    <div class="card__accent" style="background: {{ site.sections.windows_to_mac.accent }};"></div>
    <h3>Finder vs. Explorer</h3>
    <p>Same job, different muscle memory — a side-by-side comparison.</p>
  </a>
  <a class="card" href="{{ '/windows-to-mac/settings-translator/' | relative_url }}">
    <div class="card__accent" style="background: {{ site.sections.windows_to_mac.accent }};"></div>
    <h3>Settings Translator</h3>
    <p>"Where did they move this?" Find any Windows setting's new home.</p>
  </a>
  <a class="card" href="{{ '/windows-to-mac/first-week/' | relative_url }}">
    <div class="card__accent" style="background: {{ site.sections.windows_to_mac.accent }};"></div>
    <h3>Your First Week</h3>
    <p>Seven things that trip up almost every switcher, one per day.</p>
  </a>
</div>

## Guides

{% assign w2m_posts = site.windows_to_mac | sort: "title" %}
{% for post in w2m_posts %}
  <div class="post-list-item">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | default: post.description }}</p>
  </div>
{% endfor %}
