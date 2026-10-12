---
layout: app
title: "PortHole: Fix Blurry External Monitors on Mac in One Click"
description: "PortHole is a Mac menu-bar app that fixes blurry or wrong-resolution external monitors in one click, saves named display layouts, and casts to AirPlay."
permalink: /porthole/
section: porthole
last_modified_at: 2026-10-12
---

<div class="app-hero" style="--tint: {{ site.sections.porthole.tint }};">
  <div class="app-hero__inner" style="grid-template-columns: 1fr;">
    <div>
      <img class="app-hero__icon" width="84" height="84" src="{{ '/assets/images/porthole/icon.jpg' | relative_url }}" alt="PortHole app icon">
      <div class="app-hero__text">
        <h1>Fix your external monitor without opening Settings.</h1>
        <p>Resolution mismatches, forgotten display layouts, and AirPlay casting — one click from the menu bar.</p>
        <div class="app-hero__btn-row">
          <a class="app-hero__badge" href="{{ site.sections.porthole.app_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/images/badges/app-store-badge-white.svg' | relative_url }}" width="120" height="40" alt="Download PortHole on the App Store"></a>
          <span class="app-hero__price">${{ site.sections.porthole.price }} / £{{ site.sections.porthole.gbp_price }} one-time · macOS 13+</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

PortHole is a menu-bar utility for Mac (macOS 13+) that fixes blurry or wrong-resolution external monitors in one click, saves and restores named display layouts, and casts to AirPlay — ${{ site.sections.porthole.price }} one-time on the Mac App Store. It's built for the recurring annoyances of working with external displays: a monitor that comes back at the wrong resolution after reconnecting, an arrangement macOS forgets after sleep or a dock swap, and AirPlay settings buried in System Settings.

## What it does

<div class="feat-grid" style="--app-tint: {{ site.sections.porthole.tint }};">
  <div class="feat"><div class="k">Resolution</div><h3>Fix a mismatch in one click</h3><p>Detects every connected display, compares its current resolution with its native one, and fixes any mismatch with "Fix All Monitors." Native-resolution detection is sharper in 1.2, including on 4K and high-refresh monitors. Your built-in display is left alone.</p></div>
  <div class="feat"><div class="k">Auto-fix</div><h3>Fixed as it connects</h3><p>Turn on auto-fix and PortHole corrects each monitor the moment it connects. It only adjusts monitors as they connect, so a resolution you've deliberately set stays put.</p></div>
  <div class="feat"><div class="k">Layouts</div><h3>Named display layouts</h3><p>Save as many arrangements as you like — "Desk," "Office Dock," "Living Room TV" — and bring any of them back from the Restore menu. Deleting a layout asks you to confirm first.</p></div>
  <div class="feat"><div class="k">Arrange</div><h3>Drag-arrange your displays</h3><p>Drag your monitors into place right inside PortHole, no trip to System Settings. Arranging and saved layouts work even when an external monitor is your main display.</p></div>
  <div class="feat"><div class="k">AirPlay</div><h3>Cast from the menu bar</h3><p>Cast to a nearby Apple TV or AirPlay display using the same system picker as QuickTime and Music, plus a one-click shortcut to Screen Mirroring settings.</p></div>
  <div class="feat"><div class="k">Private</div><h3>No account, no data collected</h3><p>No sign-in and no tracking of any kind. ${{ site.sections.porthole.price }} / £{{ site.sections.porthole.gbp_price }} one-time purchase, no subscription. Public macOS APIs only — no kernel extensions.</p></div>
</div>

Also in the menu: a Dark Mode toggle, Launch at Login (which tells you when macOS needs your approval and links straight to Login Items), a clear status line for each monitor, and VoiceOver support throughout.

## Fixing it by hand

You can fix a blurry external monitor without any app: look up the monitor's native resolution, then pick it in System Settings → Displays (Control-click the resolution options and choose "Show List" if it isn't offered). If it still won't stick, the cable, adapter, or dock is often the limit. Our step-by-step guide covers all of it: [How to fix a blurry or wrong-resolution external monitor on Mac]({{ '/porthole/fix-external-monitor-resolution-mac/' | relative_url }}). PortHole is the one-click version — and with auto-fix on, it happens automatically every time you plug in.

## Common questions

<div class="faq">
<details open><summary><h3>Will this mess with my built-in display?</h3></summary><p>No. PortHole deliberately leaves your Mac's built-in display alone — a scaled Retina resolution there is a choice, not something to "fix."</p></details>
<details><summary><h3>Will auto-fix undo a resolution I picked on purpose?</h3></summary><p>No. Auto-fix only adjusts a monitor at the moment it connects. If you later change an external monitor's resolution yourself, PortHole leaves it alone.</p></details>
<details><summary><h3>Does PortHole need an account or internet connection?</h3></summary><p>No. There's no sign-in of any kind. The only network activity is AirPlay discovery on your own local network when you use the casting button — nothing else PortHole does requires a connection.</p></details>
<details><summary><h3>Does it collect any data?</h3></summary><p>No — the App Store privacy label is "Data Not Collected." Your saved display layouts and preferences stay in local storage on your Mac, never transmitted anywhere. See the <a href="{{ '/porthole/privacy/' | relative_url }}">Privacy Policy</a> for the full detail.</p></details>
<details><summary><h3>Where can I get PortHole?</h3></summary><p>On the <a href="{{ site.sections.porthole.app_url }}" target="_blank" rel="noopener">Mac App Store</a> — ${{ site.sections.porthole.price }} / £{{ site.sections.porthole.gbp_price }} as a one-time purchase, with no subscription. It runs on macOS 13 Ventura or later; the current version is 1.2. Help is on the <a href="{{ '/porthole/support/' | relative_url }}">support page</a>.</p></details>
</div>

</div>
