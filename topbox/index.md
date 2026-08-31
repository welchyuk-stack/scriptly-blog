---
layout: app
title: "TopBox — Clipboard History & File Shelf for Mac"
description: "TopBox keeps a searchable clipboard history and a drag-and-drop file shelf, both one hotkey away from the menu bar."
permalink: /topbox/
section: topbox
---

<div class="app-hero" style="--app-accent: {{ site.sections.topbox.accent }}; --app-accent-dark: {{ site.sections.topbox.accent_dark }};">
  <div class="app-hero__inner">
    <img class="app-hero__icon" width="96" height="96" src="{{ '/assets/images/topbox/icon.jpg' | relative_url }}" alt="TopBox app icon">
    <div class="app-hero__text">
      <h1>TopBox</h1>
      <p>A searchable clipboard history and a drag-and-drop file shelf, both one hotkey away — right from the menu bar.</p>
      <span class="app-hero__badge app-hero__badge--soon">Coming soon to the App Store</span>
    </div>
  </div>
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

A menu-bar-only app for Mac (no Dock icon). Press a global hotkey — default **⌘⇧T**, fully rebindable — or click the menu bar icon, and a floating panel opens with two side-by-side panes: your clipboard history and a file shelf.

<ul class="app-features">
  <li>Clipboard history — automatically captures text, images, and code-like text as you copy; full-text search across everything you've copied; click any entry to copy it back</li>
  <li>Pin up to 3 favorite clipboard entries so they survive auto-clear and manual clearing</li>
  <li>Configurable history limit (50 / 100 / 200 / 500 items) and auto-clear (never, after 1 hour, or after 24 hours — pinned items are never cleared)</li>
  <li>File Shelf — a fixed-size "Loading Bay" drop zone for temporarily parking files; drag files in, search by name, drag them back out to Finder or another app whenever you need them</li>
  <li>Right-click a shelved file to open it, reveal it in Finder, or remove it; pin up to 20 files</li>
  <li>Rebindable global hotkey, Launch at Login, and a one-click Reset All Data option (confirmation-gated)</li>
  <li>No account, no analytics, no tracking — {{ site.sections.topbox.price | prepend: "$" }} one-time purchase, no subscription</li>
</ul>

## Common questions

### Does TopBox sync my clipboard or files anywhere?

No. Everything lives in memory only, on your Mac, for as long as the app is running — nothing is written to disk, nothing syncs to iCloud, and nothing leaves your Mac. Quitting or relaunching TopBox clears the in-memory history (aside from what you've pinned during that session).

### Does it need an account or internet connection?

No. There's no sign-in and no network calls of any kind — see the [Privacy Policy]({{ '/topbox/privacy/' | relative_url }}) for the full detail.

### How is this different from macOS's own clipboard?

macOS only remembers your single most recent copy. TopBox keeps a searchable history of many past copies (up to 500), lets you pin favorites so they don't get bumped, and pairs it with a separate File Shelf for temporarily parking files mid-drag — something the built-in clipboard doesn't do at all.

### Is it out yet?

Not quite — TopBox is still in submission prep. This page will get an App Store link the moment it's live.

</div>
