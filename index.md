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
    <div class="eyebrow">Small Mac apps · one-time purchase · no accounts</div>
    <h1>Four little apps that live in your <em>menu bar.</em></h1>
    <p class="lede">Screenshots, clipboard, AppleScript and display fixes. Each one does a single job, works offline, and costs less than a coffee.</p>
  </div>

  <div class="try-callout" aria-hidden="true">
    <span class="try-callout__text">Try it — click an icon!</span>
    <svg class="try-callout__arrow" width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1 V22 M11 22 L4 15 M11 22 L18 15" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
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
    <div class="mb-menu is-open" data-for="snipclip">
      <div class="head"><img src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" width="14" height="14" alt="">SnipClip</div>
      <div class="row hl">Capture Area <kbd>⇧⌘S</kbd></div>
      <div class="row">Recent Captures ▸</div>
      <div class="row">Timed Full-Screen Capture ▸</div>
      <div class="row">Scrolling Capture</div>
      <div class="row">Start Screen Recording <kbd>⇧⌘R</kbd></div>
      <hr><div class="row">Preferences…</div>
    </div>
    <div class="mb-menu sc-panel" data-for="scriptly">
      <div class="sc-title">Favorite Automations</div>
      <div class="sc-row"><span class="sc-icon" aria-hidden="true">✨</span><span class="sc-label">Empty the Trash</span><span class="sc-run">Run</span></div>
      <div class="sc-row"><span class="sc-icon" aria-hidden="true">🗂</span><span class="sc-label">Clear Downloads</span><span class="sc-run">Run</span></div>
      <hr>
      <div class="sc-plain">Open Scriptly</div>
      <div class="sc-plain">Quit Scriptly</div>
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
    <div class="mb-menu ph-panel" data-for="porthole">
      <div class="ph-titlebar">PortHole <span class="ph-gear" aria-hidden="true">⚙</span></div>
      <div class="ph-row ph-row--display">
        <span class="ph-dot" aria-hidden="true"></span>
        <span><strong>Built-in Retina Display</strong><small>1512×982</small></span>
      </div>
      <div class="ph-row">
        <span><strong>AirPlay</strong><small>Cast to a nearby display</small></span>
      </div>
      <div class="ph-row ph-row--layout">
        <span><strong>Display Layout</strong><small>1 layout saved</small></span>
        <span class="ph-btns"><span class="ph-btn">Arrange…</span><span class="ph-btn">Restore ▾</span></span>
      </div>
      <div class="ph-row ph-row--toggle">
        <span class="ph-checkbox" aria-hidden="true"></span><strong>Dark Mode</strong>
      </div>
      <div class="ph-cta">Fix All Monitors</div>
      <div class="ph-quit">Quit</div>
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
          <span class="key">Hotkey <kbd>⇧⌘S</kbd></span>
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
          <a class="app-hero__badge" href="{{ site.sections.topbox.app_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/images/badges/app-store-badge-black.svg' | relative_url }}" width="96" height="32" alt="Download TopBox on the App Store"></a>
          <span class="key">Hotkey <kbd>⇧⌘T</kbd></span>
        </div>
      </div>
    </div>
    <div class="tile" style="--tint: {{ site.sections.scriptly.tint }}">
      <img src="{{ '/assets/images/scriptly/icon.jpg' | relative_url }}" width="72" height="72" alt="Scriptly icon">
      <div>
        <h3><a href="{{ '/scriptly/' | relative_url }}">Scriptly</a> <span class="tag">AppleScript &amp; Automation</span></h3>
        <p>Write, schedule and run AppleScripts from the menu bar, with AI help when you're stuck and a marketplace when you're lazy. Beginner and power-user friendly.</p>
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
          <a class="app-hero__badge" href="{{ site.sections.porthole.app_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/images/badges/app-store-badge-black.svg' | relative_url }}" width="96" height="32" alt="Download PortHole on the App Store"></a>
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
