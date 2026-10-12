---
layout: page
title: "PortHole Support"
description: "Get help with PortHole, the Mac menu-bar display utility — resolution fixes, saved layouts, and AirPlay casting."
permalink: /porthole/support/
section: porthole
show_breadcrumb: false
last_modified_at: 2026-10-12
---

<span class="section-badge">PortHole</span>

# PortHole Support

PortHole is a menu-bar-only utility for Mac — look for its icon in the menu bar after
launching (there's no Dock icon or main window). Preferences — including Launch at
Login, the version number, and links to Support and the Privacy Policy — are reachable
via the gear icon in the menu bar popover. PortHole needs macOS 13 Ventura or later; the
current version is 1.2.

## What PortHole does

- **Fix resolution** — detects external displays running at the wrong resolution
  (common through docks/hubs) and corrects them in one click with "Fix All Monitors",
  or automatically as each monitor connects. Auto-fix only adjusts monitors as they
  connect, so a resolution you've set yourself afterwards is left alone.
- **Named display layouts** — save as many monitor arrangements as you like ("Desk",
  "Office Dock", "Living Room TV") and restore any of them from the Restore menu after
  a dock swap, sleep, or reconnect scatters your displays. You can also drag-arrange
  displays inside PortHole, including when an external monitor is your main display.
- **AirPlay casting** — cast to a nearby Apple TV or AirPlay display using the same
  system picker as QuickTime and Music, with a shortcut to Screen Mirroring settings.
- **Dark Mode toggle** — switch appearance straight from the menu.

Prefer to fix things by hand? See our guide:
[How to fix a blurry or wrong-resolution external monitor on Mac](/porthole/fix-external-monitor-resolution-mac/).

## Common questions

### PortHole says a monitor is "wrong" but it looks fine to me.

Built-in Retina displays are intentionally left alone — a scaled resolution there is a
deliberate choice, not a mismatch. If an *external* monitor is flagged, try System
Settings → Displays as a fallback if PortHole's own fix doesn't take — our
[manual fix guide](/porthole/fix-external-monitor-resolution-mac/) walks through it. If
the native resolution never appears, the cable, adapter, or dock may not be able to
carry it (for example, HDMI 1.4 tops out at 4K 30 Hz).

### Launch at Login is on, but PortHole doesn't start.

macOS may need you to approve PortHole as a login item. When that's the case,
Preferences says so and offers a button that opens Login Items in System Settings —
switch PortHole on there.

### macOS asks whether PortHole can control "System Events".

That's expected the first time you use the Dark Mode toggle: PortHole switches
appearance through System Events, which macOS asks you to allow. Nothing else uses it.

### How do I delete a saved layout?

Choose **Manage…** next to your layouts in the menu bar popover (or in Preferences) and
delete it there — PortHole asks you to
confirm first, so a mis-click won't lose a layout.

### A second external display isn't showing up, or only mirrors the first.

This is usually a Mac hardware limit rather than a PortHole issue: many Macs with a base
Apple Silicon chip (non-Pro/Max) natively drive only one external display — check your
Mac's Tech Specs page on Apple's site for its exact limit. A second monitor beyond that
limit through a dock needs a genuine DisplayLink-chip dock (not just a HDMI splitter/passive
hub) and the [DisplayLink Manager driver](https://www.synaptics.com/products/displaylink-graphics/downloads/macos)
installed to work as an independent display.

### Does PortHole collect any data?

No — no account, no analytics, no tracking. See the
[Privacy Policy](/porthole/privacy/) for details.

## Contact

Still stuck, or found a bug? Email **welchyuk@gmail.com** — include your Mac model and
what's connected (monitor model, dock/hub if any) so it's easier to help.
