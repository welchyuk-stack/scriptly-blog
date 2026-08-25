---
layout: post
title: "Why AppleScript Still Matters in 2026"
date: 2026-08-23
categories: [applescript, opinion]
tags: [AppleScript, Shortcuts, JXA, automation]
author: Luke Welch
excerpt: "Apple hasn't meaningfully updated AppleScript in years, and Shortcuts gets all the marketing attention. Here's why it's still the right tool for real work."
---

# Why AppleScript Still Matters in 2026

AppleScript is old. It first shipped in 1993. Apple's marketing energy has gone almost entirely into Shortcuts for over half a decade. And yet — professionals doing real automation work on Mac still reach for it constantly. Here's why.

## It Controls Apps That Shortcuts Can't Touch

Shortcuts is great for iOS-style automations: toggling settings, quick text transforms, simple app actions. But most professional Mac software — Adobe Creative Suite, Microsoft Excel, FileMaker, DEVONthink, BBEdit, and dozens of others — exposes deep automation through **Apple Events**, which is what AppleScript talks to directly.

If you need to loop through 400 InDesign pages, batch-process Excel spreadsheets, or script Finder operations with real conditional logic, AppleScript (or its JavaScript cousin, JXA) is usually still the only option.

## It's Remarkably Stable

A widely upvoted post on r/applescript put it well: AppleScript "remains remarkably stable over the years." Scripts written a decade ago still run today with little to no modification. For production workflows — the kind studios and agencies depend on daily — that stability is worth more than new features.

## It's Not Actually Going Away

There's periodic anxiety in the community about AppleScript's long-term future, but Apple has kept it alive as the underlying automation layer for macOS for over 30 years, through OS 9, Mac OS X, and Apple Silicon. Even Shortcuts on Mac runs many of its actions through the same Apple Events system AppleScript uses.

## The Actual Barrier Was Never the Language — It Was the Syntax

AppleScript's English-like syntax is approachable in theory ("tell application... to..."), but in practice, remembering exact command names, correct capitalization, and app-specific dictionaries is where beginners get stuck. That's a real, valid criticism — but it's a tooling problem, not a reason the language itself is obsolete.

This is exactly the gap apps like [Scriptly](https://apps.apple.com/us/app/scriptly-script-automations/id6788839033?mt=12) exist to close: describe a task in plain English, get working AppleScript back, powered by on-device AI so nothing leaves your Mac. You get AppleScript's real power over apps, without needing to memorize its dictionaries.

## When to Use Shortcuts Instead

To be fair, Shortcuts is genuinely better for:
- Quick, simple automations (toggle Wi-Fi, resize an image, share to an app)
- Anything you want to trigger from iPhone or Apple Watch
- Automations that don't need deep control over third-party Mac apps

For anything involving Mail, Finder batch operations, or professional creative/office apps at scale, AppleScript still wins.

## The Bottom Line

AppleScript isn't legacy cruft — it's infrastructure. It's the layer that lets Mac apps talk to each other, and there's no real replacement for the depth of control it offers on macOS. The barrier has always been syntax, not usefulness, and that barrier is finally coming down.

## Related Guides

- [AppleScript for Complete Beginners](/scriptly-blog/applescript-for-beginners/)
- [10 AppleScript Templates You Can Copy-Paste](/scriptly-blog/applescript-templates/)
- [Fix Common AppleScript Errors](/scriptly-blog/fix-common-applescript-errors/)
