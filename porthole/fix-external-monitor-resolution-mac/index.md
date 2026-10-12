---
layout: page
title: "How to Fix a Blurry or Wrong-Resolution External Monitor on Mac"
description: "Why an external monitor looks blurry on a Mac, and how to fix it: find the native resolution, set it in System Settings, and check cables, adapters and docks."
permalink: /porthole/fix-external-monitor-resolution-mac/
section: porthole
last_modified_at: 2026-10-12
---

<span class="section-badge">PortHole</span>

# How to Fix a Blurry or Wrong-Resolution External Monitor on Mac

An external monitor usually looks blurry on a Mac because macOS is running it at a resolution other than its native one. Look up the monitor's native resolution, select it in System Settings → Displays, and if it isn't offered, check the cable, adapter or dock, which often limits what the Mac can send.

## Why it happens

Every LCD or OLED monitor has a fixed grid of pixels, its native resolution. Text is only perfectly sharp when the Mac sends exactly that many pixels. Send anything else and the monitor has to stretch or squash the image to fit, which softens every edge.

When you plug in a monitor, macOS reads a description of it (its EDID) and picks a mode. Most of the time it picks well, but there are a few common ways it goes wrong:

- **It picks a scaled mode.** On a 4K monitor, macOS often defaults to a "looks like" resolution such as 1920 × 1080 or 2560 × 1440 so text isn't tiny. Those modes are intentional and usually look good, but some in-between sizes are rendered larger and then shrunk, which can look slightly soft.
- **It picks a non-native mode.** macOS sometimes settles on a lower resolution, or one with the wrong aspect ratio, so the picture looks stretched, fuzzy or letterboxed.
- **Something in between hides the real monitor.** Docks, hubs, adapters and HDMI connections can pass along incomplete information about the monitor, or simply can't carry its full resolution at the refresh rate it wants, so macOS falls back to something smaller.

One honest caveat: a 1080p or 1440p monitor will never look as crisp as your Mac's built-in Retina screen, even at its native resolution, because it has far fewer pixels per inch. Native resolution is the sharpest it can be, not Retina-sharp.

## Check your monitor's native resolution

Before changing anything, find out what you're aiming for:

1. Find the exact model number, usually on a label on the back of the monitor or in its on-screen menu.
2. Look it up on the manufacturer's website and find the spec sheet. The native resolution may be listed as "native resolution," "maximum resolution" or "recommended resolution."
3. Note the refresh rate it supports at that resolution, for example 3840 × 2160 at 60 Hz.

Common native resolutions are 1920 × 1080 (Full HD), 2560 × 1440 (QHD), 3440 × 1440 (ultrawide), 3840 × 2160 (4K UHD) and 5120 × 2880 (5K).

## Set the resolution in System Settings → Displays

On macOS Ventura, Sonoma and Sequoia:

1. Open the Apple menu → System Settings, then click **Displays** in the sidebar.
2. If you have more than one display, select the external monitor at the top of the window.
3. Choose a resolution. Depending on the monitor, you'll see either a row of size options (from larger text to more space) or a list of resolutions.
4. If the native resolution isn't offered, Control-click (right-click) the resolution options and choose **Show List**, then turn on **Show all resolutions**. Pick the one that matches your monitor's spec.
5. If there's a **Refresh rate** pop-up menu, set it to the rate your monitor supports at that resolution.

On a 4K or 5K monitor, a scaled option such as "looks like 2560 × 1440" can be a perfectly good choice if native makes text too small. The aim is a mode you picked deliberately, not one macOS fell back to.

If the native resolution doesn't appear even with all resolutions shown, the Mac isn't being told the monitor supports it, or the connection can't carry it. That points to the cable, adapter or dock.

## Cables, adapters and docks

The connection between your Mac and the monitor sets a ceiling on what's possible:

- **HDMI versions matter.** HDMI 1.4 tops out at 4K at 30 Hz, which feels sluggish and can push macOS toward a lower mode. You need HDMI 2.0 or later end to end (port, adapter and cable) for 4K at 60 Hz.
- **Prefer DisplayPort, USB-C or Thunderbolt** where the monitor supports it. A direct USB-C or Thunderbolt connection usually reports the monitor to macOS most reliably.
- **Use a certified cable.** Cheap or very long cables can fail at high resolutions and refresh rates. A cable certified for the bandwidth you need (for example "Premium High Speed" HDMI for 4K at 60 Hz) rules this out.
- **Check your adapter or dock's specs.** Many USB-C hubs and older adapters only output 4K at 30 Hz, or less when several displays share them.
- **Try a different port.** Plug the monitor directly into the Mac, try another port on the Mac or the monitor, and take the dock out of the chain to see whether the problem follows the dock.

## After sleep, wake or replugging

Sometimes everything is set correctly and then breaks: the Mac wakes from sleep, or you reconnect to a dock, and the monitor comes back at the wrong resolution or your displays are in the wrong order. macOS can lose track of a monitor's settings or arrangement, especially through docks. Things to try:

- Unplug the monitor's cable, wait a few seconds and plug it back in.
- Turn the monitor off and on again.
- Restart the Mac with the monitor connected.
- Re-check the arrangement in System Settings → Displays, using the **Arrange** button when more than one display is connected.

## How many external displays your Mac supports

If a second external monitor stays black or only mirrors the first, the cause may be your Mac rather than the monitor. Many Macs with a base Apple Silicon chip (not Pro or Max), particularly MacBook Air and 13-inch MacBook Pro models with M1 or M2, natively support only one external display. Newer models vary, so check your Mac's Tech Specs page on Apple's website for the exact number.

To run more monitors than your Mac supports natively, you need a dock that uses a DisplayLink chip, with the DisplayLink Manager software installed. An ordinary hub or HDMI splitter can't add extra independent displays. Our [PortHole support page]({{ '/porthole/support/' | relative_url }}) has more on this.

## Let PortHole do it automatically

If you're fixing the same monitor every time you plug it in, [PortHole]({{ '/porthole/' | relative_url }}) does the steps above for you from the menu bar:

- **One click.** PortHole detects every connected display, compares its current resolution with its native one, and fixes any mismatch with "Fix All Monitors." Your Mac's built-in display is left alone.
- **Automatic on connect.** With auto-fix on, it corrects each monitor the moment it connects, and leaves alone any resolution you've set yourself afterwards.
- **Named layouts.** Save as many display arrangements as you like, such as "Desk" or "Office Dock," and restore them from the Restore menu when macOS forgets them.

PortHole can't get around a cable or adapter that can't carry your monitor's native resolution, or a Mac's limit on external displays, so the checks above still apply. It's ${{ site.sections.porthole.price }} / £{{ site.sections.porthole.gbp_price }} one-time on the [Mac App Store]({{ site.sections.porthole.app_url }}), for macOS 13 Ventura or later, with no account and no data collected.
