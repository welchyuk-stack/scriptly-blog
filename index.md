---
layout: page
title: "MacBound: Four Little Mac Apps That Live in Your Menu Bar"
description: "Screenshots, clipboard, AppleScript and display fixes — four small Mac menu-bar apps, one-time purchase, no accounts. Plus the complete Windows-to-Mac switching guide."
permalink: /
section: windows_to_mac
wide: true
show_breadcrumb: false
last_modified_at: 2026-09-14
---

<div class="hero">
  <div class="hero-grid">
    <div>
      <div class="eyebrow">Small Mac apps · one-time purchase · no accounts</div>
      <h1>Four little apps that live in your <em>menu bar.</em></h1>
      <p class="lede">Screenshots, clipboard, AppleScript and display fixes. Each one does a single job, works offline, and costs less than a coffee.</p>
    </div>
    <div class="hero-note">
      <b>Try it →</b> click an icon in the menu bar below.<br>Every MacBound app is one keystroke from a menu-bar icon. That's the whole idea.<br>
      <a class="desk-link" href="#apps">See all four apps and download links ↓</a>
    </div>
  </div>

  <div class="menubar-stage">
    <div class="menubar">
      <div class="left"><span class="apple">&#63743;</span><span>Finder</span><span style="font-weight:500">File</span><span style="font-weight:500">Edit</span><span style="font-weight:500">View</span></div>
      <div class="right">
        <button class="mb-app" data-menu="scriptly" aria-expanded="false" aria-label="Scriptly menu"><img src="{{ '/assets/images/scriptly/icon.jpg' | relative_url }}" width="18" height="18" alt=""></button>
        <button class="mb-app" data-menu="topbox" aria-expanded="false" aria-label="TopBox menu"><img src="{{ '/assets/images/topbox/icon.jpg' | relative_url }}" width="18" height="18" alt=""></button>
        <button class="mb-app" data-menu="porthole" aria-expanded="false" aria-label="PortHole menu"><img src="{{ '/assets/images/porthole/icon.jpg' | relative_url }}" width="18" height="18" alt=""></button>
        <button class="mb-app" data-menu="snipclip" aria-expanded="true" aria-label="SnipClip menu"><img src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" width="18" height="18" alt=""></button>
        <span class="mb-clock">Mon 14 Sep&nbsp; 16:42</span>
      </div>
    </div>
    <div class="mb-window"><div class="dots"><i></i><i></i><i></i></div><img src="{{ '/assets/images/snipclip/screenshot-1-markup.jpg' | relative_url }}" width="900" height="562" fetchpriority="high" alt="SnipClip markup editor with arrows and highlights on a screenshot"></div>

    <div class="mb-menu is-open" data-for="snipclip">
      <div class="head"><img src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" width="14" height="14" alt="">SnipClip</div>
      <div class="row hl">Capture Area <kbd>⌘⇧S</kbd></div>
      <div class="row">Scrolling Capture</div>
      <div class="row">Timed Capture ▸</div>
      <div class="row">Record Screen <kbd>⌘⇧R</kbd></div>
      <hr><div class="row">Recent Captures ▸</div><div class="row">Preferences…</div>
    </div>
    <div class="mb-menu" data-for="scriptly">
      <div class="head"><img src="{{ '/assets/images/scriptly/icon.jpg' | relative_url }}" width="14" height="14" alt="">Scriptly</div>
      <div class="row hl">Run "Tidy Desktop"</div>
      <div class="row">Run "Mute + Dark Mode"</div>
      <div class="row">Scheduled ▸</div>
      <hr><div class="row">New Script… <kbd>⌘N</kbd></div><div class="row">Marketplace</div>
    </div>
    <div class="mb-menu tb-panel" data-for="topbox">
      <div class="tb-titlebar">TopBox <span class="tb-gear" aria-hidden="true">⚙</span></div>
      <div class="tb-panes">
        <div class="tb-pane">
          <div class="tb-search">Search clipboard…</div>
          <div class="tb-row"><span>SnipClip 2026-08-31 at 16.28.03.png</span><span class="tb-pin" aria-hidden="true">📌</span></div>
          <div class="tb-row"><span>IMG_0100.JPG</span><span class="tb-pin" aria-hidden="true">📌</span></div>
          <div class="tb-clear">Clear</div>
        </div>
        <div class="tb-pane">
          <div class="tb-search">Search files…</div>
          <div class="tb-drop">Drop files here</div>
          <div class="tb-empty">Nothing yet</div>
        </div>
      </div>
    </div>
    <div class="mb-menu" data-for="porthole">
      <div class="head"><img src="{{ '/assets/images/porthole/icon.jpg' | relative_url }}" width="14" height="14" alt="">PortHole</div>
      <div class="row hl">Fix Display Arrangement</div>
      <div class="row">Studio Display ✓</div>
      <div class="row">MacBook Pro</div>
      <hr><div class="row">Preferences…</div>
    </div>
    <div class="mb-hint">↑ live menus · not a screenshot</div>
  </div>
</div>

<div class="section" id="apps">
  <div class="section-head"><h2>The apps</h2><span class="meta">4 apps · macOS 13+ · Mac App Store</span></div>
  <div class="tiles">
    <div class="tile" style="--tint: {{ site.sections.snipclip.tint }}">
      <img src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" width="72" height="72" alt="SnipClip icon">
      <div>
        <h3><a href="{{ '/snipclip/' | relative_url }}">SnipClip</a> <span class="tag">Screenshots &amp; Markup</span></h3>
        <p>Capture, annotate and share in one hotkey. Scrolling Capture stitches a whole page into one tall image.</p>
        <div class="foot">
          <span class="price">${{ site.sections.snipclip.price }} · £{{ site.sections.snipclip.gbp_price }}</span>
          <a class="app-hero__badge" href="{{ site.sections.snipclip.app_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/images/badges/app-store-badge-black.svg' | relative_url }}" width="96" height="32" alt="Download SnipClip on the App Store"></a>
          <span class="key">Hotkey <kbd>⌘⇧S</kbd></span>
        </div>
      </div>
    </div>
    <div class="tile" style="--tint: {{ site.sections.topbox.tint }}">
      <img src="{{ '/assets/images/topbox/icon.jpg' | relative_url }}" width="72" height="72" alt="TopBox icon">
      <div>
        <h3><a href="{{ '/topbox/' | relative_url }}">TopBox</a> <span class="tag">Clipboard &amp; File Shelf</span></h3>
        <p>A clipboard history and a drag-in shelf for files, both one keystroke away. Nothing leaves memory, nothing syncs.</p>
        <div class="foot">
          <span class="price">${{ site.sections.topbox.price }} · £{{ site.sections.topbox.gbp_price }}</span>
          <span class="pill soon">Waiting for review</span>
          <span class="key">Hotkey <kbd>⌘⇧T</kbd></span>
        </div>
      </div>
    </div>
    <div class="tile" style="--tint: {{ site.sections.scriptly.tint }}">
      <img src="{{ '/assets/images/scriptly/icon.jpg' | relative_url }}" width="72" height="72" alt="Scriptly icon">
      <div>
        <h3><a href="{{ '/scriptly/' | relative_url }}">Scriptly</a> <span class="tag">AppleScript &amp; Automation</span></h3>
        <p>Write, schedule and run AppleScripts from the menu bar, with AI help when you're stuck and a marketplace when you're lazy.</p>
        <div class="foot">
          <span class="price">${{ site.sections.scriptly.price }} · £{{ site.sections.scriptly.gbp_price }}</span>
          <a class="app-hero__badge" href="{{ site.sections.scriptly.app_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/images/badges/app-store-badge-black.svg' | relative_url }}" width="96" height="32" alt="Download Scriptly on the App Store"></a>
          <span class="key">Menu bar</span>
        </div>
      </div>
    </div>
    <div class="tile" style="--tint: {{ site.sections.porthole.tint }}">
      <img src="{{ '/assets/images/porthole/icon.jpg' | relative_url }}" width="72" height="72" alt="PortHole icon">
      <div>
        <h3><a href="{{ '/porthole/' | relative_url }}">PortHole</a> <span class="tag">Menu-Bar Display Fixes</span></h3>
        <p>For the moment your external monitor forgets where it lives. Put displays back where they belong without opening Settings.</p>
        <div class="foot">
          <span class="price">${{ site.sections.porthole.price }} · £{{ site.sections.porthole.gbp_price }}</span>
          <span class="pill soon">Coming soon</span>
          <span class="key">Menu bar</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section" id="reference">
  <div class="desk">
    <div>
      <div class="eyebrow">Windows → Mac</div>
      <h2>New to the Mac? Start at the reference desk.</h2>
      <p>The switching guide MacBound started with. Every Windows habit mapped to its macOS equivalent, searchable and printable.</p>
      <p><a class="desk-link" href="{{ '/windows-to-mac/' | relative_url }}">Open the complete Windows to Mac switching guide →</a></p>
    </div>
    <div class="ref-list">
      <a href="{{ '/windows-to-mac/keyboard-shortcuts/' | relative_url }}"><span><strong>Keyboard Shortcuts</strong><small>Every Windows shortcut mapped to macOS</small></span><span class="win">Ctrl+C<b>⌘C</b></span></a>
      <a href="{{ '/windows-to-mac/trackpad-gestures/' | relative_url }}"><span><strong>Trackpad Gestures</strong><small>What each gesture replaces</small></span><span class="win">Alt+Tab<b>3-finger swipe</b></span></a>
      <a href="{{ '/windows-to-mac/finder-vs-explorer/' | relative_url }}"><span><strong>Finder vs. Explorer</strong><small>Same job, different muscle memory</small></span><span class="win">Delete<b>⌘⌫</b></span></a>
      <a href="{{ '/windows-to-mac/settings-translator/' | relative_url }}"><span><strong>Settings Translator</strong><small>"Where did they move this?"</small></span><span class="win">Control Panel<b>System Settings</b></span></a>
      <a href="{{ '/windows-to-mac/first-week/' | relative_url }}"><span><strong>Your First Week</strong><small>Seven things that trip up every switcher</small></span><span class="win">Day 1<b>Day 7</b></span></a>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/menubar-hero.js' | relative_url }}" defer></script>
