---
layout: app
title: "SnipClip — Screenshots & Markup for Mac"
description: "Capture and annotate screenshots on Mac in one hotkey, with SnipClip."
permalink: /snipclip/
section: snipclip
---

<div class="app-hero" style="--app-accent: {{ site.sections.snipclip.accent }}; --app-accent-dark: {{ site.sections.snipclip.accent_dark }};">
  <div class="app-hero__inner">
    <img class="app-hero__icon" src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" alt="SnipClip app icon">
    <div class="app-hero__text">
      <h1>SnipClip</h1>
      <p>Capture, annotate, and share — one hotkey from screenshot to markup.</p>
      <a class="app-hero__badge" href="{{ site.sections.snipclip.app_url }}">
        <img src="{{ '/assets/images/badges/app-store-badge-white.svg' | relative_url }}" alt="Download on the App Store">
      </a>
    </div>
  </div>
</div>

<div class="app-screens">
  <img src="{{ '/assets/images/snipclip/promo.jpg' | relative_url }}" alt="SnipClip — pick any colour, copy instantly to clipboard">
  <img src="{{ '/assets/images/snipclip/screenshot-1-colors.jpg' | relative_url }}" alt="SnipClip colour picker with opacity control">
  <img src="{{ '/assets/images/snipclip/screenshot-2-editor.jpg' | relative_url }}" alt="SnipClip markup editor toolbar">
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

A menu-bar screenshot tool for Mac that gets you from capture to markup in one hotkey — `⌘⇧S`, drag-select, mark up, copy or share. Fully offline, nothing uploaded.

<ul class="app-features">
  <li>Global hotkey capture + instant markup (pen, arrow, rectangle, circle, text)</li>
  <li>Full colour picker with opacity control</li>
  <li>Fully offline — nothing uploaded, no cloud sync</li>
  <li>Recent Captures: last 6 screenshots from the menu bar</li>
  <li>Free with a 24-hour full-feature trial, then a one-time unlock — no subscription</li>
  <li>Requires macOS 13+</li>
</ul>

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

</div>
