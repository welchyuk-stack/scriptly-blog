---
layout: app
title: "TopBox — Clipboard Manager and File Shelf for Mac"
description: "TopBox is a Mac menu bar clipboard manager and file shelf: encrypted, searchable clipboard history plus a drag-and-drop shelf for files. $2.99 one-time."
permalink: /topbox/
section: topbox
last_modified_at: 2026-10-12
---

<div class="app-hero" style="--tint: {{ site.sections.topbox.tint }};">
  <div class="app-hero__inner" style="grid-template-columns: 1fr;">
    <div>
      <img class="app-hero__icon" width="84" height="84" src="{{ '/assets/images/topbox/icon.jpg' | relative_url }}" alt="TopBox app icon">
      <div class="app-hero__text">
        <h1>Your clipboard history and a file shelf, one hotkey away.</h1>
        <p>A searchable clipboard history and a drag-and-drop file shelf, both one keystroke from the menu bar.</p>
        <div class="app-hero__btn-row">
          <a class="app-hero__badge" href="{{ site.sections.topbox.app_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/images/badges/app-store-badge-white.svg' | relative_url }}" width="120" height="40" alt="Download TopBox on the App Store"></a>
          <span class="app-hero__price">${{ site.sections.topbox.price }} / £{{ site.sections.topbox.gbp_price }} one-time · macOS 13+</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

TopBox is a clipboard manager and file shelf for the Mac menu bar (macOS 13+): searchable, encrypted clipboard history plus a drag-and-drop shelf for files — ${{ site.sections.topbox.price }} one-time on the Mac App Store.

It lives in the menu bar only (no Dock icon). Press the global hotkey — **⇧⌘T** by default, and you can change it — or click the menu bar icon, and a floating panel opens with two panes side by side: your clipboard history on one side, your file shelf on the other. Current version: {{ site.sections.topbox.version }}.

## What it does

<div class="feat-grid" style="--app-tint: {{ site.sections.topbox.tint }};">
  <div class="feat"><div class="k">Clipboard</div><h3>Searchable clipboard history</h3><p>Text, code snippets, and images are saved automatically as you copy. Search everything instantly and click any entry to copy it back, ready to paste.</p></div>
  <div class="feat"><div class="k">Clipboard</div><h3>Copied files stay files</h3><p>Copy files in Finder and TopBox keeps them as files, not just their names — click the entry later to paste the actual files.</p></div>
  <div class="feat"><div class="k">Pinning</div><h3>Pin your favourites</h3><p>Pin your 3 most-used clipboard entries so they stay at the top and survive auto-clear and the Clear button.</p></div>
  <div class="feat"><div class="k">Settings</div><h3>Configurable limits</h3><p>Keep 50, 100, 200, or 500 items, and auto-clear never, after 1 hour, or after 24 hours. Pinned items are always kept.</p></div>
  <div class="feat"><div class="k">Files</div><h3>File Shelf</h3><p>Drag files onto the Loading Bay, or click it to pick files. Click a shelved file to open it, search by name, and drag it out to Finder or another app when you need it.</p></div>
  <div class="feat"><div class="k">Files</div><h3>Pinned files and right-click actions</h3><p>Right-click to open, show in Finder, or remove. Pin up to 20 files — pinned files stay on the shelf even when you drag them out. Moved or deleted files show as dimmed and marked "Missing".</p></div>
  <div class="feat"><div class="k">Keyboard</div><h3>Full keyboard navigation</h3><p>Search is focused when the panel opens. Use ↑/↓ to move through either list, Return to copy or open, and Tab to switch panes. VoiceOver is supported throughout.</p></div>
  <div class="feat"><div class="k">Private</div><h3>Local and encrypted</h3><p>History stays on your Mac, encrypted at rest with a key kept in your Keychain. No account, no cloud, no analytics, no network calls.</p></div>
  <div class="feat"><div class="k">Controls</div><h3>Hotkey, login, and reset</h3><p>Change the global hotkey, turn on Launch at Login, or wipe everything with Reset All Data (it asks for confirmation first).</p></div>
</div>

## Common questions

<div class="faq">
<details open><summary><h3>Does TopBox sync my clipboard or files anywhere?</h3></summary><p>No. Your clipboard history and the list of shelved files are saved on your Mac only, so they're still there after you quit or restart TopBox. Clipboard history and saved images are encrypted at rest using a key kept in your Keychain. Nothing syncs to iCloud and nothing leaves your Mac — see the <a href="{{ '/topbox/privacy/' | relative_url }}">Privacy Policy</a> for exactly what's stored.</p></details>
<details><summary><h3>Does it need an account or internet connection?</h3></summary><p>No. There's no sign-in and TopBox makes no network calls of any kind.</p></details>
<details><summary><h3>How is this different from macOS's own clipboard?</h3></summary><p>macOS only remembers your single most recent copy. TopBox keeps a searchable history of past copies (up to 500), lets you pin favourites so they don't get bumped, and pairs it with a File Shelf for parking files while you work — something the built-in clipboard doesn't do at all.</p></details>
<details><summary><h3>How is TopBox different from other clipboard managers?</h3></summary><p>TopBox pairs clipboard history with a file shelf in one dual-pane panel, so recent copies and the files you're working with are both one hotkey away. If you only need clipboard history, there are good free options — Maccy, for example, is a free, open-source clipboard manager. TopBox is for people who also want somewhere to park files, in the same panel.</p></details>
<details><summary><h3>Where can I get TopBox?</h3></summary><p>On the <a href="{{ site.sections.topbox.app_url }}" target="_blank" rel="noopener">Mac App Store</a>, for ${{ site.sections.topbox.price }} / £{{ site.sections.topbox.gbp_price }} as a one-time purchase — no subscription. It needs macOS 13 or later.</p></details>
</div>

</div>
