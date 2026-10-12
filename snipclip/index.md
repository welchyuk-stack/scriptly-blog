---
layout: app
title: "SnipClip — Screenshot and Markup App for Mac"
description: "SnipClip: $1.99 one-time Mac screenshot and markup app. One-hotkey capture, Numbered Steps and Blur tools, scrolling capture, screen recording. Fully offline."
permalink: /snipclip/
section: snipclip
last_modified_at: 2026-10-12
---

<div class="app-hero" style="--tint: {{ site.sections.snipclip.tint }};">
  <div class="app-hero__inner">
    <div>
      <img class="app-hero__icon" width="84" height="84" src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" alt="SnipClip app icon">
      <div class="app-hero__text">
        <h1>Screenshot to markup in one hotkey.</h1>
        <p>Press <kbd style="background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.3);color:#fff">⌥⇧⌘S</kbd>, drag, annotate, paste. Fully offline. Nothing uploaded, ever.</p>
        <div class="app-hero__btn-row">
          <a class="app-hero__badge" href="{{ site.sections.snipclip.app_url }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/images/badges/app-store-badge-white.svg' | relative_url }}" width="120" height="40" alt="Download SnipClip on the App Store">
          </a>
          <span class="app-hero__price">${{ site.sections.snipclip.price }} / £{{ site.sections.snipclip.gbp_price }} one-time · macOS 13+</span>
        </div>
      </div>
    </div>
    <div class="app-hero__shot">
      <picture>
        <source type="image/webp" srcset="{{ '/assets/images/snipclip/screenshot-1-markup-480.webp' | relative_url }} 480w, {{ '/assets/images/snipclip/screenshot-1-markup.webp' | relative_url }} 900w" sizes="(max-width: 840px) 92vw, 540px">
        <img src="{{ '/assets/images/snipclip/screenshot-1-markup.jpg' | relative_url }}" width="900" height="562" fetchpriority="high" alt="SnipClip markup editor with arrows, shapes and highlights drawn on a screenshot">
      </picture>
    </div>
  </div>
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

SnipClip is a menu-bar screenshot and markup app for Mac (macOS 13+) that captures, annotates and shares in one hotkey — ${{ site.sections.snipclip.price }} one-time on the Mac App Store, fully offline. Press `⌥⇧⌘S`, drag a region or click a window, add arrows, numbered steps, text or blur, then copy, save or drag the result where it needs to go. Nothing is uploaded.

## What it does

<div class="feat-grid" style="--app-tint: {{ site.sections.snipclip.tint }};">
  <div class="feat"><div class="k">Markup</div><h3>Nine tools, each one key away</h3><p>Pen, Arrow, Rectangle, Circle, Highlighter, Text, Numbered Steps, Blur and Crop — every tool has a one-key shortcut. Three line widths, a wider colour set and full Undo/Redo.</p></div>
  <div class="feat new"><div class="k">Steps</div><h3>Numbered Steps</h3><p>Drop 1, 2, 3 badges onto a capture to walk someone through a process in order.</p></div>
  <div class="feat new"><div class="k">Blur</div><h3>Blur private details</h3><p>Pixelate email addresses, names or anything else private before you share the image.</p></div>
  <div class="feat new"><div class="k">Crop</div><h3>Crop in the editor</h3><p>Trim the capture right in the markup editor instead of taking it again.</p></div>
  <div class="feat new"><div class="k">Capture</div><h3>Window capture and a magnifier loupe</h3><p>Click any window to capture just that window, or drag a region with a magnifier loupe for pixel-perfect edges. Hold Space to move the selection while you drag; Esc cancels. Captures are crisp on Retina displays.</p></div>
  <div class="feat"><div class="k">Scrolling</div><h3>Scrolling Capture</h3><p>Select a region, then keep scrolling the window or webpage underneath while SnipClip stitches it into one tall image, up to 12,000px, ready in the markup editor when you hit Stop.</p></div>
  <div class="feat"><div class="k">Timed</div><h3>3 · 5 · 10 second countdown</h3><p>Full-screen capture after a delay — handy for menus and tooltips that vanish when you click. Choose PNG or JPEG and where it saves.</p></div>
  <div class="feat new"><div class="k">Record</div><h3>Record the full screen or a region</h3><p>Start and stop from the menu bar. Saves an MP4 to a folder you choose, with a live timer and a red menu bar icon while recording. System audio is optional — off by default, switched on in Settings.</p></div>
  <div class="feat"><div class="k">Hotkeys</div><h3>Two customisable hotkeys</h3><p>One for capture (<code>⌥⇧⌘S</code> by default), one for screen recording (<code>⌥⇧⌘R</code> by default). Change either in Settings.</p></div>
  <div class="feat"><div class="k">Recent</div><h3>Recent Captures</h3><p>Reopen, edit and copy past snips from the menu bar, even after you've closed the editor.</p></div>
  <div class="feat"><div class="k">Share</div><h3>Copy, Save or Drag</h3><p>The editor sidebar copies to the clipboard, saves as PNG or JPEG, or lets you drag the image straight into another app.</p></div>
  <div class="feat"><div class="k">Private</div><h3>Nothing leaves your Mac</h3><p>Fully offline — no cloud sync, no account, no analytics, no network requests.</p></div>
  <div class="feat"><div class="k">More</div><h3>Colour picker, Launch at Login, Welcome guide</h3><p>A full colour picker with opacity control, Launch at Login, and a Welcome guide that walks you through the Screen Recording permission.</p></div>
  <div class="feat"><div class="k">Price</div><h3>${{ site.sections.snipclip.price }} / £{{ site.sections.snipclip.gbp_price }} one-time</h3><p>No subscription, no ads, no trial, no in-app purchases. Requires macOS 13+.</p></div>
</div>

## Common questions

<div class="faq">
<details open><summary><h3>Is there a free trial?</h3></summary><p>No — SnipClip is a straight ${{ site.sections.snipclip.price }} (£{{ site.sections.snipclip.gbp_price }}) one-time purchase from the App Store. That purchase is the unlock; there's nothing further to buy inside the app.</p></details>
<details><summary><h3>What does SnipClip do that ⇧⌘5 doesn't?</h3></summary><p>macOS's own shortcuts (<code>⇧⌘3/4/5</code>) capture and record the screen well, but markup is a separate step through the thumbnail or Preview, and there's no scrolling capture. SnipClip puts capture and markup behind one hotkey — select an area and the editor is already open — and adds tools Preview doesn't have: Numbered Steps, Blur for private details, and Crop in the same window, plus Scrolling Capture and a Recent Captures list. If you only ever need the plain screenshot, the built-in tools are enough.</p></details>
<details><summary><h3>What are the default shortcuts?</h3></summary><p><code>⌥⇧⌘S</code> starts a capture and <code>⌥⇧⌘R</code> starts a screen recording. Both can be changed in SnipClip's Settings. macOS's own screenshot shortcuts keep working alongside them.</p></details>
<details><summary><h3>Does screen recording capture sound?</h3></summary><p>Optionally. System audio — the sound your Mac is playing — is off by default; turn it on in Settings and it's saved into the same MP4. SnipClip doesn't record your microphone.</p></details>
<details><summary><h3>Does it upload my screenshots anywhere?</h3></summary><p>No. SnipClip has no cloud sync, no account, and makes no network requests — every capture and recording stays on your Mac unless you choose to share it yourself.</p></details>
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
