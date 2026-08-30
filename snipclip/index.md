---
layout: app
title: "SnipClip — Screenshots & Markup for Mac"
description: "Capture and annotate screenshots on Mac in one hotkey, with SnipClip."
permalink: /snipclip/
section: snipclip
---

<div class="app-hero" style="--app-accent: {{ site.sections.snipclip.accent }}; --app-accent-dark: {{ site.sections.snipclip.accent_dark }};">
  <div class="app-hero__inner">
    <img class="app-hero__icon" width="96" height="96" src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" alt="SnipClip app icon">
    <div class="app-hero__text">
      <h1>SnipClip</h1>
      <p>Capture, annotate, and share — one hotkey from screenshot to markup.</p>
      <a class="app-hero__badge" href="{{ site.sections.snipclip.app_url }}">
        <img src="{{ '/assets/images/badges/app-store-badge-white.svg' | relative_url }}" width="120" height="40" alt="Download on the App Store">
      </a>
    </div>
  </div>
</div>

<div class="app-screens">
  <img src="{{ '/assets/images/snipclip/screenshot-1-markup.jpg' | relative_url }}" width="900" height="562" fetchpriority="high" alt="SnipClip: capture, markup, and share fast — freehand markup, shapes and arrows, text overlay and highlight, undo/redo, save and auto copy to clipboard, recent captures, custom hotkeys, lives in the menu bar">
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

A menu-bar screenshot tool for Mac that gets you from capture to markup in one hotkey — `⌘⇧S`, drag-select, mark up, copy or share. Fully offline, nothing uploaded.

<ul class="app-features">
  <li>Global hotkey capture + instant markup — 6 tools: pen, arrow, rectangle, circle, highlight, text</li>
  <li>Remappable hotkey — change the capture shortcut in Preferences if it conflicts with another app</li>
  <li>Full colour picker with opacity control</li>
  <li>Fully offline — nothing uploaded, no cloud sync, no analytics</li>
  <li>Recent Captures: last 6 screenshots from the menu bar</li>
  <li>{{ site.sections.snipclip.price | prepend: "$" }} one-time purchase — no subscription, no trial, no in-app purchases</li>
  <li>Requires macOS 13+</li>
</ul>

## Common questions

### Is there a free trial?

No — SnipClip is a straight {{ site.sections.snipclip.price | prepend: "$" }} one-time purchase from the App Store. That purchase is the unlock; there's nothing further to buy inside the app.

### What does it do that the built-in macOS Screenshot tool doesn't?

macOS's own shortcuts (`⌘⇧3/4/5`) capture; markup is a separate step through Preview. SnipClip combines both into one hotkey — select an area and the markup toolbar is already open by the time you've finished dragging.

### Does it upload my screenshots anywhere?

No. SnipClip has no cloud sync, no account, and makes no network requests — every capture stays on your Mac unless you choose to share it yourself.

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
