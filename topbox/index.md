---
layout: app
title: "TopBox — Clipboard History & File Shelf for Mac"
description: "TopBox keeps a searchable clipboard history and a drag-and-drop file shelf, both one hotkey away from the menu bar."
permalink: /topbox/
section: topbox
---

<div class="app-hero" style="--tint: {{ site.sections.topbox.tint }};">
  <div class="app-hero__inner" style="grid-template-columns: 1fr;">
    <div>
      <img class="app-hero__icon" width="84" height="84" src="{{ '/assets/images/topbox/icon.jpg' | relative_url }}" alt="TopBox app icon">
      <div class="app-hero__text">
        <h1>Your clipboard history and a file shelf, one hotkey away.</h1>
        <p>A searchable clipboard history and a drag-and-drop file shelf, both one keystroke from the menu bar.</p>
        <div class="app-hero__btn-row">
          <span class="app-hero__badge--soon">Waiting for review</span>
          <span class="app-hero__price">${{ site.sections.topbox.price }} one-time · macOS</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

A menu-bar-only app for Mac (no Dock icon). Press a global hotkey — default **⌘⇧T**, fully rebindable — or click the menu bar icon, and a floating panel opens with two side-by-side panes: your clipboard history and a file shelf.

## What it does

<div class="feat-grid" style="--app-tint: {{ site.sections.topbox.tint }};">
  <div class="feat"><div class="k">Clipboard</div><h3>Searchable clipboard history</h3><p>Automatically captures text, images, and code-like text as you copy; full-text search across everything you've copied; click any entry to copy it back.</p></div>
  <div class="feat"><div class="k">Pinning</div><h3>Pin your favourites</h3><p>Pin up to 3 favorite clipboard entries so they survive auto-clear and manual clearing.</p></div>
  <div class="feat"><div class="k">Settings</div><h3>Configurable limits</h3><p>History limit of 50 / 100 / 200 / 500 items, and auto-clear never, after 1 hour, or after 24 hours — pinned items are never cleared.</p></div>
  <div class="feat"><div class="k">Files</div><h3>File Shelf</h3><p>A fixed-size "Loading Bay" drop zone for temporarily parking files; drag files in, search by name, drag them back out to Finder or another app whenever you need them.</p></div>
  <div class="feat"><div class="k">Files</div><h3>Right-click actions</h3><p>Right-click a shelved file to open it, reveal it in Finder, or remove it; pin up to 20 files.</p></div>
  <div class="feat"><div class="k">Controls</div><h3>Rebindable hotkey &amp; reset</h3><p>Rebindable global hotkey, Launch at Login, and a one-click Reset All Data option (confirmation-gated).</p></div>
  <div class="feat"><div class="k">Private</div><h3>No account, no analytics</h3><p>No tracking of any kind — ${{ site.sections.topbox.price }} one-time purchase, no subscription.</p></div>
</div>

## Common questions

<div class="faq">
<details open><summary>Does TopBox sync my clipboard or files anywhere?</summary><p>No. Everything lives in memory only, on your Mac, for as long as the app is running — nothing is written to disk, nothing syncs to iCloud, and nothing leaves your Mac. Quitting or relaunching TopBox clears the in-memory history (aside from what you've pinned during that session).</p></details>
<details><summary>Does it need an account or internet connection?</summary><p>No. There's no sign-in and no network calls of any kind — see the <a href="{{ '/topbox/privacy/' | relative_url }}">Privacy Policy</a> for the full detail.</p></details>
<details><summary>How is this different from macOS's own clipboard?</summary><p>macOS only remembers your single most recent copy. TopBox keeps a searchable history of many past copies (up to 500), lets you pin favorites so they don't get bumped, and pairs it with a separate File Shelf for temporarily parking files mid-drag — something the built-in clipboard doesn't do at all.</p></details>
<details><summary>Is it out yet?</summary><p>Not quite — TopBox is still in submission prep. This page will get an App Store link the moment it's live.</p></details>
</div>

</div>
