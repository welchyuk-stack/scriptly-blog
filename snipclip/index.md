---
layout: app
title: "SnipClip — Screenshots & Markup for Mac"
description: "Capture and annotate screenshots on Mac in one hotkey, with SnipClip."
permalink: /snipclip/
section: snipclip
last_modified_at: 2026-09-14
---

<div class="app-hero" style="--tint: {{ site.sections.snipclip.tint }};">
  <div class="app-hero__inner">
    <div>
      <img class="app-hero__icon" width="84" height="84" src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" alt="SnipClip app icon">
      <div class="app-hero__text">
        <h1>Screenshot to markup in one hotkey.</h1>
        <p>Press <kbd style="background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.3);color:#fff">⌘⇧S</kbd>, drag, annotate, paste. Fully offline. Nothing uploaded, ever.</p>
        <div class="app-hero__btn-row">
          <a class="app-hero__badge" href="{{ site.sections.snipclip.app_url }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/images/badges/app-store-badge-white.svg' | relative_url }}" width="120" height="40" alt="Download SnipClip on the App Store">
          </a>
          <span class="app-hero__price">${{ site.sections.snipclip.price }} / £{{ site.sections.snipclip.gbp_price }} one-time · macOS 13+</span>
        </div>
      </div>
    </div>
    <div class="app-hero__shot">
      <img src="{{ '/assets/images/snipclip/screenshot-1-markup.jpg' | relative_url }}" width="900" height="562" fetchpriority="high" alt="SnipClip: capture, markup, and share fast — freehand markup, shapes and arrows, text overlay and highlight, undo/redo, save and auto copy to clipboard, recent captures, custom hotkeys, lives in the menu bar">
    </div>
  </div>
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

A menu-bar screenshot tool for Mac that gets you from capture to markup in one hotkey — `⌘⇧S`, drag-select, mark up, copy or share. Fully offline, nothing uploaded.

## What it does

<div class="feat-grid" style="--app-tint: {{ site.sections.snipclip.tint }};">
  <div class="feat"><div class="k">Markup</div><h3>6 tools, zero clicks away</h3><p>Global hotkey capture with instant markup: pen, arrow, rectangle, circle, highlight, and text.</p></div>
  <div class="feat new"><div class="k">Scrolling</div><h3>Scrolling Capture</h3><p>Select a region, then keep scrolling the window or webpage underneath while SnipClip stitches it into one tall image, up to 12,000px, ready in the markup editor when you hit Stop.</p></div>
  <div class="feat"><div class="k">Timed</div><h3>3 · 5 · 10 second countdown</h3><p>Full-screen capture with a delay, straight to PNG or JPEG.</p></div>
  <div class="feat"><div class="k">Record</div><h3>Screen recording</h3><p>Start/stop from the menu bar, saves to .mp4 in a folder of your choice, with a red menu bar icon and live timer while recording (video only, no audio).</p></div>
  <div class="feat"><div class="k">Hotkeys</div><h3>Two independently remappable hotkeys</h3><p>One for capture (<code>⌘⇧S</code> default), one for screen recording (<code>⌘⇧R</code> default).</p></div>
  <div class="feat"><div class="k">Private</div><h3>Nothing leaves your Mac</h3><p>Fully offline — no cloud sync, no account, no analytics, no network requests.</p></div>
  <div class="feat"><div class="k">Recent</div><h3>Last six captures</h3><p>Sitting in the menu bar, ready to re-copy or re-open in the editor.</p></div>
  <div class="feat"><div class="k">More</div><h3>Colour picker with opacity, Launch at Login</h3><p>A full colour picker with opacity control, and Launch at Login toggled from Preferences.</p></div>
  <div class="feat"><div class="k">Price</div><h3>${{ site.sections.snipclip.price }} / £{{ site.sections.snipclip.gbp_price }} one-time</h3><p>No subscription, no trial, no in-app purchases. Requires macOS 13+.</p></div>
</div>

## Common questions

<div class="faq">
<details open><summary><h3>Is there a free trial?</h3></summary><p>No — SnipClip is a straight ${{ site.sections.snipclip.price }} (£{{ site.sections.snipclip.gbp_price }}) one-time purchase from the App Store. That purchase is the unlock; there's nothing further to buy inside the app.</p></details>
<details><summary><h3>What does it do that the built-in macOS Screenshot tool doesn't?</h3></summary><p>macOS's own shortcuts (<code>⌘⇧3/4/5</code>) capture; markup is a separate step through Preview. SnipClip combines both into one hotkey — select an area and the markup toolbar is already open by the time you've finished dragging.</p></details>
<details><summary><h3>Does it upload my screenshots anywhere?</h3></summary><p>No. SnipClip has no cloud sync, no account, and makes no network requests — every capture stays on your Mac unless you choose to share it yourself.</p></details>
<details><summary><h3>How does Scrolling Capture work?</h3></summary><p>Select a region from the menu bar's "Scrolling Capture" option, then scroll the window or page yourself — SnipClip watches that region and stitches new content onto the bottom of the image as it appears, up to 12,000px tall. Click Stop and it lands straight in the markup editor. It works well for chat logs, long documents, and most scrollable windows and webpages; like any scrolling-capture tool, unusual or animated content can occasionally trip it up.</p></details>
</div>

## Reference

<div class="card-grid">
  <a class="card" href="{{ '/snipclip/mac-screenshot-shortcuts/' | relative_url }}">
    <div class="card__accent" style="background: {{ site.sections.snipclip.tint }};"></div>
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
