---
layout: post
date: 2026-08-28 07:46:48 +0000
last_modified_at: 2026-08-29 17:28:37 +0000
title: "Every Mac Screenshot Shortcut Explained (⌘⇧3, ⌘⇧4, ⌘⇧5)"
excerpt: "Three shortcuts cover every screenshot scenario on Mac. Here's exactly what each one does, and the options most people never discover."
author: Luke Welch
section: snipclip
---

# Every Mac Screenshot Shortcut Explained

macOS has three built-in screenshot shortcuts, and between them they cover almost every capture scenario without installing anything. Here's exactly what each does.

## `⌘+Shift+3` — Full screen

Captures the entire screen immediately, no selection step. If you have multiple displays connected, it captures all of them, saving one image per screen. The screenshot saves to your Desktop by default as a `.png`, named with the date and time (e.g. `Screenshot 2026-08-28 at 14.32.05.png`).

A small thumbnail appears in the bottom-right corner for a few seconds after capture — click it before it disappears to open the screenshot immediately for cropping or markup, or just let it save and ignore it.

## `⌘+Shift+4` — Selected area

The one you'll use most. Your cursor becomes a crosshair — click and drag to select exactly the area you want, release to capture. A few modifier keys change the behavior mid-drag:

- Hold **Space** while dragging to move the selection without resizing it
- Hold **Shift** while dragging to lock movement to one axis
- Hold **Option** to resize the selection from its center instead of a corner
- Press **Esc** to cancel entirely

After `⌘+Shift+4`, pressing **Spacebar** once (before dragging) switches to window-capture mode — your cursor becomes a camera icon, and clicking any window captures just that window, cleanly cropped with a drop shadow, no manual selection needed.

## `⌘+Shift+5` — Options panel

Opens a small on-screen toolbar rather than capturing immediately. From here you can choose: capture full screen, capture a window, capture a selection, or — the part most people miss — **record the screen** as a video, either full-screen or a selected area. There's also an Options menu in this toolbar controlling where captures save (Desktop, Clipboard, Mail, Messages, Preview, or a custom folder), a capture timer (5 or 10 seconds delayed), and whether the floating thumbnail preview shows up.

If you only remember one shortcut, this is the one worth defaulting to — it's slower by one extra click, but it surfaces every other option instead of assuming.

## Sending straight to clipboard instead of a file

Add **Control** to any of the above (`⌘+Ctrl+Shift+3` or `⌘+Ctrl+Shift+4`) and the screenshot copies directly to your clipboard instead of saving a file to Desktop. Genuinely useful if you're about to paste it straight into Slack, an email, or a doc and don't want a stray file left behind afterward.

## Changing where screenshots save

By default, everything lands on your Desktop, which gets cluttered fast if you screenshot often. `⌘+Shift+5`'s Options menu lets you redirect captures to a specific folder instead — worth setting up once if Desktop clutter bothers you.

## What none of these shortcuts do

They capture. That's it — no markup, no arrows, no way to circle something or add text before sharing, beyond a very basic built-in Markup toolbar that appears if you click the capture thumbnail before it disappears (which does support some annotation, but requires catching that small window in time).

If markup is something you do after nearly every screenshot — annotating a bug for a colleague, circling something in a support request, adding a note before sending — that extra step (open the file, find an editor, add markup, re-export) adds up. That's the specific gap [SnipClip]({{ site.sections.snipclip.app_url }}) fills: one hotkey (`⌘⇧S`) that combines the selection step above with an instant markup toolbar, so annotation happens in the same motion as the capture rather than as a separate follow-up. See [how SnipClip's hotkey fits alongside these native shortcuts](/snipclip/mac-screenshot-shortcuts/) for the full comparison.

For everyday "just get the screenshot" needs, though, the three shortcuts above are genuinely all you need.
