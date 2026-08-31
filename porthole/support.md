---
layout: page
title: "PortHole Support"
description: "Get help with PortHole, the Mac menu-bar display utility — resolution fixes, saved layouts, and AirPlay casting."
permalink: /porthole/support/
show_breadcrumb: false
---

<span class="section-badge">PortHole</span>

# PortHole Support

PortHole is a menu-bar-only utility for Mac — look for its icon in the menu bar after
launching (there's no Dock icon or main window). Preferences, including the privacy
policy, are reachable via the gear icon in the menu bar popover.

## What PortHole does

- **Fix resolution** — detects external displays running at the wrong resolution
  (common through docks/hubs) and corrects them in one click, or automatically on
  reconnect.
- **Remember display layouts** — save your monitor arrangement under a name and
  restore it after a dock swap, sleep, or reconnect scatters your windows.
- **AirPlay casting** — cast to a nearby Apple TV or AirPlay display straight from the
  menu bar.

## Common questions

**PortHole says a monitor is "wrong" but it looks fine to me.**
Built-in Retina displays are intentionally left alone — a scaled resolution there is a
deliberate choice, not a mismatch. If an *external* monitor is flagged, try System
Settings → Displays as a fallback if PortHole's own fix doesn't take.

**A second external display isn't showing up, or only mirrors the first.**
This is usually a Mac hardware limit rather than a PortHole issue: base Apple Silicon
chips (M1–M5, non-Pro/Max) natively drive only one external display. A second monitor
through a dock needs a genuine DisplayLink-chip dock (not just a HDMI splitter/passive
hub) and the [DisplayLink Manager driver](https://www.synaptics.com/products/displaylink-graphics/downloads/macos)
installed to work as an independent display.

**Does PortHole collect any data?**
No — no account, no analytics, no tracking. See the
[Privacy Policy](/porthole/privacy/) for details.

## Contact

Still stuck, or found a bug? Email **welchyuk@gmail.com** — include your Mac model and
what's connected (monitor model, dock/hub if any) so it's easier to help.
