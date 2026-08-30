---
layout: post
date: 2026-08-28 07:46:48 +0000
last_modified_at: 2026-08-29 17:28:37 +0000
title: "How to Annotate a Screenshot on Mac (Arrows, Boxes, Text)"
excerpt: "Mac has a built-in markup tool — it's just easy to miss. Here's how to use it, and when a dedicated tool is worth the switch."
author: Luke Welch
section: snipclip
---

# How to Annotate a Screenshot on Mac

You've got a screenshot and you need to circle something, draw an arrow, or add a caption before sending it — a bug report, a support request, a quick note to a coworker. Mac has a built-in way to do this. It's just not obvious unless you already know where to look.

## The built-in method: Markup in Preview

Every screenshot you take, and most images you open, can be annotated using Preview's Markup toolbar. Two ways in:

**Right after capturing** — take a screenshot (`⌘+Shift+4`, for instance), and a small thumbnail appears bottom-right for a few seconds. Click it *before it disappears* and it opens in a Markup view directly, ready to annotate.

**From any existing image** — open it in Preview (right-click any image, Open With > Preview if it's not already the default), then click the Markup toolbar icon (looks like a pen tip inside a circle) in the top toolbar, or `⇧+⌘+A`.

From there, the toolbar offers:

- **Shapes** — rectangle, oval, arrow, speech bubble, line, star
- **Text** — click to place a text box, type, adjust font and size
- **Sketch** — freehand drawing, useful for circling something irregularly shaped
- **Signature** — for signing documents, less relevant for screenshots
- **Highlight-style marker** for a translucent overlay effect

Colors, line thickness, and fill are all adjustable per shape via a small popover that appears once you place one. Once you're done, `⌘+S` saves the annotated version, or `Shift+⌘+S` to save as a new file if you want to keep the original untouched.

## Why this is easy to miss entirely

The catch: it's only obvious if you catch that thumbnail preview in the few seconds before it auto-dismisses, or if you already know Preview has a Markup mode at all (Preview reads as "just an image viewer" to most people, so they never look for editing tools inside it). If the thumbnail disappears before you click it, the screenshot still saved to your Desktop as a plain file — you just have to manually open it in Preview and find the Markup button yourself.

## The workflow friction, honestly assessed

The built-in path works, but it's several deliberate steps: capture, catch (or find) the file, open Markup, choose a tool, place it, save, then locate the file again to actually share it. For an occasional annotation, that's fine. If you're doing this multiple times a day — support work, bug triage, quick visual feedback to a team — those extra steps add up in a way that's easy to underestimate until you count them.

## Where a dedicated tool changes the workflow

This is the specific gap [SnipClip]({{ site.sections.snipclip.app_url }}) is built around: instead of capture → find file → open Preview → find Markup → annotate → save → find file again to share, it's capture and annotate in the same motion. `⌘⇧S`, drag to select the area, and the markup toolbar (pen, arrow, rectangle, circle, text, full colour picker with opacity) is already there, before you've even finished the capture — then copy or share immediately with the result already on your clipboard.

It's not a different set of markup tools so much as a different number of steps to reach them. If Preview's Markup already fits your workflow, there's no reason to add another app. If you're finding yourself annotating screenshots often enough that the extra steps are noticeable, that's the actual signal worth paying attention to.
