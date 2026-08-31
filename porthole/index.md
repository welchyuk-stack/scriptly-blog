---
layout: app
title: "PortHole — Fix External Monitor Problems on Mac"
description: "PortHole fixes external-monitor resolution mismatches, remembers your display arrangements, and adds one-click AirPlay — all from the menu bar."
permalink: /porthole/
section: porthole
---

<div class="app-hero" style="--app-accent: {{ site.sections.porthole.accent }}; --app-accent-dark: {{ site.sections.porthole.accent_dark }};">
  <div class="app-hero__inner">
    <img class="app-hero__icon" width="96" height="96" src="{{ '/assets/images/porthole/icon.jpg' | relative_url }}" alt="PortHole app icon">
    <div class="app-hero__text">
      <h1>PortHole</h1>
      <p>Fix external-monitor resolution mismatches, remember your display layouts, and AirPlay in one click — from the menu bar.</p>
      <span class="app-hero__badge app-hero__badge--soon">Coming soon to the App Store</span>
    </div>
  </div>
</div>

<div class="wrap wrap--wide" style="padding-top: 20px; padding-bottom: 60px;" markdown="1">

A menu-bar utility for Mac that fixes the recurring annoyances of working with external monitors — wrong resolution after reconnecting, forgotten window arrangements, and casting to AirPlay displays without hunting through System Settings.

<ul class="app-features">
  <li>Resolution Fix — detects every connected display, compares current vs. native resolution, and fixes any mismatch in one click ("Fix All Monitors"), or automatically the moment a monitor reconnects</li>
  <li>Display Arrangement Memory — save named layouts (e.g. "Desk", "Living Room TV") and switch between them, or drag-arrange displays to match your desk right inside the app</li>
  <li>One-click AirPlay casting to a nearby Apple TV or AirPlay display, right from the menu bar</li>
  <li>Dark Mode toggle and Launch at Login, both from the menu bar</li>
  <li>No account, no analytics, no tracking — {{ site.sections.porthole.price | prepend: "$" }} one-time purchase, no subscription</li>
  <li>Built entirely on public Apple APIs — no private frameworks, no kernel extensions, no DDC hacking</li>
</ul>

## Common questions

### Will this mess with my built-in display?

No. PortHole deliberately leaves your Mac's built-in display alone — a scaled Retina resolution there is a choice, not something to "fix."

### Does PortHole need an account or internet connection?

No. There's no sign-in of any kind. The only network activity is AirPlay discovery on your own local network when you use the casting button — nothing else PortHole does requires a connection.

### Does it collect any data?

No — confirmed "Data Not Collected" for the App Store's privacy label. Your saved display layouts and preferences stay in local storage on your Mac, never transmitted anywhere. See the [Privacy Policy]({{ '/porthole/privacy/' | relative_url }}) for the full detail.

### Is it out yet?

Not quite — PortHole is still in submission prep. This page will get an App Store link the moment it's live.

</div>
