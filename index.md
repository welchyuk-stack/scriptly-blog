---
layout: page
title: "MacBound: Four Little Mac Apps That Live in Your Menu Bar"
description: "Screenshots, clipboard, AppleScript and display fixes — four small Mac menu-bar apps, one-time purchase, no accounts. Plus the complete Windows-to-Mac switching guide."
permalink: /
redirect_from: /windows-to-mac/
section: windows_to_mac
wide: true
show_breadcrumb: false
---

<div class="hero">
  <div class="hero-grid">
    <div>
      <div class="eyebrow">Small Mac apps · one-time purchase · no accounts</div>
      <h1>Four little apps that live in your <em>menu bar.</em></h1>
      <p class="lede">Screenshots, clipboard, AppleScript and display fixes. Each one does a single job, works offline, and costs less than a coffee.</p>
    </div>
    <div class="hero-note">
      <b>Try it →</b> click an icon in the menu bar below.<br>Every MacBound app is one keystroke from a menu-bar icon. That's the whole idea.
      <div class="asb-row">
        <a class="app-hero__badge" href="{{ site.sections.snipclip.app_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/images/badges/app-store-badge-black.svg' | relative_url }}" height="32" alt="Download SnipClip on the App Store">
        </a>
        <a class="app-hero__badge" href="{{ site.sections.scriptly.app_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/images/badges/app-store-badge-black.svg' | relative_url }}" height="32" alt="Download Scriptly on the App Store">
        </a>
      </div>
    </div>
  </div>

  <div class="menubar-stage">
    <div class="menubar">
      <div class="left"><span class="apple">&#63743;</span><span>Finder</span><span style="font-weight:500">File</span><span style="font-weight:500">Edit</span><span style="font-weight:500">View</span></div>
      <div class="right">
        <button class="mb-app" data-menu="scriptly" aria-expanded="false" aria-label="Scriptly menu"><img src="{{ '/assets/images/scriptly/icon.jpg' | relative_url }}" alt=""></button>
        <button class="mb-app" data-menu="topbox" aria-expanded="false" aria-label="TopBox menu"><img src="{{ '/assets/images/topbox/icon.jpg' | relative_url }}" alt=""></button>
        <button class="mb-app" data-menu="porthole" aria-expanded="false" aria-label="PortHole menu"><img src="{{ '/assets/images/porthole/icon.jpg' | relative_url }}" alt=""></button>
        <button class="mb-app" data-menu="snipclip" aria-expanded="true" aria-label="SnipClip menu"><img src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" alt=""></button>
        <span class="mb-clock">Mon 14 Sep&nbsp; 16:42</span>
      </div>
    </div>
    <div class="mb-window"><div class="dots"><i></i><i></i><i></i></div><img src="{{ '/assets/images/snipclip/screenshot-1-markup.jpg' | relative_url }}" alt="SnipClip markup editor"></div>

    <div class="mb-menu is-open" data-for="snipclip">
      <div class="head"><img src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" alt="">SnipClip</div>
      <div class="row hl">Capture Area <kbd>⌘⇧S</kbd></div>
      <div class="row">Scrolling Capture</div>
      <div class="row">Timed Capture ▸</div>
      <div class="row">Record Screen <kbd>⌘⇧R</kbd></div>
      <hr><div class="row">Recent Captures ▸</div><div class="row">Preferences…</div>
    </div>
    <div class="mb-menu" data-for="scriptly">
      <div class="head"><img src="{{ '/assets/images/scriptly/icon.jpg' | relative_url }}" alt="">Scriptly</div>
      <div class="row hl">Run "Tidy Desktop"</div>
      <div class="row">Run "Mute + Dark Mode"</div>
      <div class="row">Scheduled ▸</div>
      <hr><div class="row">New Script… <kbd>⌘N</kbd></div><div class="row">Marketplace</div>
    </div>
    <div class="mb-menu" data-for="topbox">
      <div class="head"><img src="{{ '/assets/images/topbox/icon.jpg' | relative_url }}" alt="">TopBox</div>
      <div class="row hl">Show Shelf <kbd>⌘⇧V</kbd></div>
      <div class="row">Pinned · 3 clips</div>
      <div class="row">File Shelf · 2 files</div>
      <hr><div class="row">Clear History</div><div class="row">Settings…</div>
    </div>
    <div class="mb-menu" data-for="porthole">
      <div class="head"><img src="{{ '/assets/images/porthole/icon.jpg' | relative_url }}" alt="">PortHole</div>
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
      <img src="{{ '/assets/images/snipclip/icon.jpg' | relative_url }}" alt="SnipClip icon">
      <div>
        <h3><a href="{{ '/snipclip/' | relative_url }}">SnipClip</a> <span class="tag">Screenshots &amp; Markup</span></h3>
        <p>Capture, annotate and share in one hotkey. Scrolling Capture stitches a whole page into one tall image.</p>
        <div class="foot">
          <span class="price">${{ site.sections.snipclip.price }}</span>
          <a class="app-hero__badge" href="{{ site.sections.snipclip.app_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/images/badges/app-store-badge-black.svg' | relative_url }}" height="32" alt="Download SnipClip on the App Store"></a>
          <span class="key">Hotkey <kbd>⌘⇧S</kbd></span>
        </div>
      </div>
    </div>
    <div class="tile" style="--tint: {{ site.sections.topbox.tint }}">
      <img src="{{ '/assets/images/topbox/icon.jpg' | relative_url }}" alt="TopBox icon">
      <div>
        <h3><a href="{{ '/topbox/' | relative_url }}">TopBox</a> <span class="tag">Clipboard &amp; File Shelf</span></h3>
        <p>A clipboard history and a drag-in shelf for files, both one keystroke away. Nothing leaves memory, nothing syncs.</p>
        <div class="foot">
          <span class="price">${{ site.sections.topbox.price }}</span>
          <span class="pill soon">Waiting for review</span>
          <span class="key">Hotkey <kbd>⌘⇧V</kbd></span>
        </div>
      </div>
    </div>
    <div class="tile" style="--tint: {{ site.sections.scriptly.tint }}">
      <img src="{{ '/assets/images/scriptly/icon.jpg' | relative_url }}" alt="Scriptly icon">
      <div>
        <h3><a href="{{ '/scriptly/' | relative_url }}">Scriptly</a> <span class="tag">AppleScript &amp; Automation</span></h3>
        <p>Write, schedule and run AppleScripts from the menu bar, with AI help when you're stuck and a marketplace when you're lazy.</p>
        <div class="foot">
          <span class="price">${{ site.sections.scriptly.price }}</span>
          <a class="app-hero__badge" href="{{ site.sections.scriptly.app_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/images/badges/app-store-badge-black.svg' | relative_url }}" height="32" alt="Download Scriptly on the App Store"></a>
          <span class="key">Menu bar</span>
        </div>
      </div>
    </div>
    <div class="tile" style="--tint: {{ site.sections.porthole.tint }}">
      <img src="{{ '/assets/images/porthole/icon.jpg' | relative_url }}" alt="PortHole icon">
      <div>
        <h3><a href="{{ '/porthole/' | relative_url }}">PortHole</a> <span class="tag">Menu-Bar Display Fixes</span></h3>
        <p>For the moment your external monitor forgets where it lives. Put displays back where they belong without opening Settings.</p>
        <div class="foot">
          <span class="price">${{ site.sections.porthole.price }}</span>
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

<hr class="hr">

<h2 class="kicker kicker--ink" style="margin-top: 40px;">02 — Guides</h2>

<div class="guide-index">
{% assign w2m_posts = site.windows_to_mac | sort: "title" %}
{% for post in w2m_posts %}
  <a class="guide-row" href="{{ post.url | relative_url }}">
    <span class="guide-row__no">{{ forloop.index | prepend: '00' | slice: -2, 2 }}</span>
    <span class="guide-row__title">{{ post.title }}</span>
    <span class="guide-row__arrow">→</span>
  </a>
{% endfor %}
</div>

<script src="{{ '/assets/js/menubar-hero.js' | relative_url }}" defer></script>
