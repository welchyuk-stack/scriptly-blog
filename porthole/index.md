---
layout: app
title: "PortHole — Fix External Monitor Problems on Mac"
description: "PortHole fixes external-monitor resolution mismatches, remembers your display arrangements, and adds one-click AirPlay — all from the menu bar."
permalink: /porthole/
section: porthole
last_modified_at: 2026-09-14
---

<div class="app-hero" style="--tint: {{ site.sections.porthole.tint }};">
  <div class="app-hero__inner" style="grid-template-columns: 1fr;">
    <div>
      <img class="app-hero__icon" width="84" height="84" src="{{ '/assets/images/porthole/icon.jpg' | relative_url }}" alt="PortHole app icon">
      <div class="app-hero__text">
        <h1>Fix your external monitor without opening Settings.</h1>
        <p>Resolution mismatches, forgotten display layouts, and AirPlay casting — one click from the menu bar.</p>
        <div class="app-hero__btn-row">
          <span class="app-hero__badge--soon">Coming soon to the App Store</span>
          <span class="app-hero__price">${{ site.sections.porthole.price }} / £{{ site.sections.porthole.gbp_price }} one-time · macOS</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

A menu-bar utility for Mac that fixes the recurring annoyances of working with external monitors — wrong resolution after reconnecting, forgotten window arrangements, and casting to AirPlay displays without hunting through System Settings.

## What it does

<div class="feat-grid" style="--app-tint: {{ site.sections.porthole.tint }};">
  <div class="feat"><div class="k">Resolution</div><h3>Fix a mismatch in one click</h3><p>Detects every connected display, compares current vs. native resolution, and fixes any mismatch with "Fix All Monitors," or automatically the moment a monitor reconnects.</p></div>
  <div class="feat"><div class="k">Layouts</div><h3>Display Arrangement Memory</h3><p>Save named layouts (e.g. "Desk," "Living Room TV") and switch between them, or drag-arrange displays to match your desk right inside the app.</p></div>
  <div class="feat"><div class="k">AirPlay</div><h3>One-click casting</h3><p>Cast to a nearby Apple TV or AirPlay display, right from the menu bar.</p></div>
  <div class="feat"><div class="k">Menu bar</div><h3>Dark Mode and Launch at Login</h3><p>Both toggled straight from the menu bar.</p></div>
  <div class="feat"><div class="k">Private</div><h3>No account, no analytics</h3><p>No tracking of any kind — ${{ site.sections.porthole.price }} / £{{ site.sections.porthole.gbp_price }} one-time purchase, no subscription.</p></div>
  <div class="feat"><div class="k">Built right</div><h3>Public APIs only</h3><p>No private frameworks, no kernel extensions, no DDC hacking.</p></div>
</div>

## Common questions

<div class="faq">
<details open><summary><h3>Will this mess with my built-in display?</h3></summary><p>No. PortHole deliberately leaves your Mac's built-in display alone — a scaled Retina resolution there is a choice, not something to "fix."</p></details>
<details><summary><h3>Does PortHole need an account or internet connection?</h3></summary><p>No. There's no sign-in of any kind. The only network activity is AirPlay discovery on your own local network when you use the casting button — nothing else PortHole does requires a connection.</p></details>
<details><summary><h3>Does it collect any data?</h3></summary><p>No — confirmed "Data Not Collected" for the App Store's privacy label. Your saved display layouts and preferences stay in local storage on your Mac, never transmitted anywhere. See the <a href="{{ '/porthole/privacy/' | relative_url }}">Privacy Policy</a> for the full detail.</p></details>
<details><summary><h3>Is it out yet?</h3></summary><p>Not quite — PortHole is still in submission prep. This page will get an App Store link the moment it's live.</p></details>
</div>

</div>
