---
layout: post
date: 2026-08-28 07:46:48 +0000
title: "\"App Can't Be Opened\" — Understanding Gatekeeper and Mac Security Prompts"
excerpt: "The warning looks scarier than it is. Here's what Gatekeeper actually checks, and when it's safe to override it."
author: Luke Welch
section: windows_to_mac
---

# "App Can't Be Opened" — Understanding Gatekeeper and Mac Security Prompts

Windows has SmartScreen, which warns about unrecognized downloads. macOS's version is called Gatekeeper, and it shows up more often and more strictly than most switchers expect the first time they download an app from outside the App Store.

## What the warning actually means

The message usually reads something like: *"AppName" can't be opened because Apple cannot check it for malicious software* or *"AppName" is from an unidentified developer.* This isn't macOS detecting something specifically dangerous — it's a blanket check for whether the app was **notarized** by Apple (a verification step, separate from App Store review, that developers can request even for apps distributed directly).

An app failing this check doesn't mean it's malware. It means the developer either didn't submit it for notarization, or you downloaded it in a way that stripped the metadata Gatekeeper checks (common with some torrents or file-sharing sites — one more reason to only download from sources you trust).

## How to open it anyway, if you trust the source

**Method one**: Right-click (or `⌃+click`) the app instead of double-clicking, and choose "Open" from the menu. This shows a similar warning but with an actual Open button, bypassing the plain double-click block. You only need to do this once per app — after the first successful open, double-clicking works normally from then on.

**Method two**: If you already dismissed the warning with no Open option, go to System Settings > Privacy & Security and scroll down — there's usually a message there saying `"AppName" was blocked`, with an "Open Anyway" button next to it. Click it, confirm once more, and it's allowed.

## When to actually be cautious

The warning existing isn't itself a red flag — plenty of legitimate, safe software (much of it open-source, or from small independent developers who haven't paid for Apple's notarization program) triggers it routinely. What's worth pausing on:

- You didn't intentionally seek out this app — it was bundled with something else, or downloaded from a link in an email or ad
- The source is a site you don't recognize, rather than the developer's own official page or GitHub
- The app is asking for unusual permissions immediately on first launch (full disk access, accessibility control) with no clear reason why it'd need them

## Other permission prompts you'll see constantly

Separate from Gatekeeper, macOS asks explicit permission the first time an app wants to access something sensitive: your camera, microphone, contacts, files in Desktop/Documents/Downloads, or control over other apps (Accessibility permissions, needed by window managers like Rectangle, for instance). These aren't Gatekeeper — they're a different, ongoing permission system, and you can review or revoke any of them later in System Settings > Privacy & Security, organized by permission type.

This is more granular than Windows' equivalent — Windows asks for some of these too, but macOS extends the model to more categories and makes revoking access after the fact more visible and centralized.

## The mental model worth having

Gatekeeper is a first-run check, not ongoing surveillance — it evaluates an app once, the first time you try to open it, based on whether it's signed and notarized. It's not scanning your files or monitoring behavior afterward the way antivirus software does. Understanding that distinction makes the warnings feel a lot less alarming, and makes it easier to judge when overriding one is reasonable versus when it's worth reconsidering the download entirely.
