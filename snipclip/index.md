---
layout: page
title: "SnipClip — Screenshots & Markup for Mac"
description: "Capture and annotate screenshots on Mac in one hotkey, with SnipClip."
permalink: /snipclip/
section: snipclip
wide: true
show_breadcrumb: false
---

<span class="section-badge">SnipClip</span>

# SnipClip

A menu-bar screenshot tool for Mac that gets you from capture to markup in one hotkey — `⌘⇧S`, drag-select, mark up, copy or share. Fully offline, nothing uploaded.

## Reference

<div class="card-grid">
  <a class="card" href="{{ '/snipclip/mac-screenshot-shortcuts/' | relative_url }}">
    <div class="card__accent" style="background: {{ site.sections.snipclip.accent }};"></div>
    <h3>Mac Screenshot Shortcuts</h3>
    <p>Every native macOS shortcut, plus what SnipClip adds on top.</p>
  </a>
</div>

## Guides

{% assign snipclip_posts = site.snipclip | sort: "title" %}
{% for post in snipclip_posts %}
  <div class="post-list-item">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | default: post.description }}</p>
  </div>
{% endfor %}

---

## Get SnipClip

[Download from the App Store]({{ site.sections.snipclip.app_url }})

- Global hotkey capture + instant markup (pen, arrow, rectangle, circle, text, colour picker)
- Fully offline — nothing uploaded, no cloud sync
- Recent Captures: last 6 screenshots from the menu bar
- Free with a 24-hour full-feature trial, then a one-time unlock — no subscription
- Requires macOS 13+
