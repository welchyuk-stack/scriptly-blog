---
layout: page
title: "Scriptly — Privacy Policy"
description: "Scriptly's privacy policy: the app collects no personal data by default, and the optional Marketplace feature never sends your name, email, or Apple ID."
permalink: /scriptly/privacy/
section: scriptly
show_breadcrumb: false
---

<span class="section-badge">Scriptly</span>

# Privacy Policy

*Scriptly for macOS · Last updated: 8 July 2026*

Scriptly is designed to work entirely on your Mac. This policy explains what data the app does and does not handle. By default, **Scriptly collects, transmits, and stores no personal data.** The one exception is the optional Marketplace feature, described below, which never sends your name, email, or Apple ID.

## Who we are

Scriptly is operated by Luke Welch, trading as Scriptly ("we", "us"). For any privacy question, contact us at [appscriptly@gmail.com](mailto:appscriptly@gmail.com).

## Data we collect by default

**None.** Scriptly's core features — templates, AI script generation and repair, menu bar quick-run, and scheduled automations — all run entirely on your Mac. The app has no analytics, no tracking, and no advertising. Everything you type into a template stays on your device unless you choose to use the Marketplace.

## The Marketplace (optional)

The Marketplace lets you browse, download, and publish AppleScript templates shared by other users. It is entirely optional — if you never open the Marketplace tab, the app makes no related network requests at all.

Using it requires being signed in to iCloud on your Mac, because the Marketplace is built on Apple's CloudKit:

- **Browsing or downloading** a template fetches listings from Apple's CloudKit, which requires an active iCloud sign-in.
- **Publishing** a template sends its title, summary, script text, and category to CloudKit, along with a one-way cryptographic hash of your iCloud account identifier — never your name, email address, or Apple ID directly. That hash exists so we can attribute a template to the account that published it (for example, to act on a report) without ever seeing who you are.
- **Reporting** a template works the same way: a report is tied to the same anonymized hash, not to any identifying information.

We review reported templates ourselves; no third party beyond Apple/CloudKit is involved in handling Marketplace content.

## How the rest of Scriptly works

Scriptly generates AppleScript text from built-in templates or from your own plain-English description (via on-device AI) and copies it to your clipboard. The app never runs those scripts itself and never sends them anywhere — you run each script yourself in Apple's Script Editor or via the menu bar quick-run. The app is sandboxed by macOS; the only file access it requests is to folders you explicitly choose in a standard "Choose Folder" dialog.

Some templates generate scripts that *you* may later configure to contact third-party services (for example Slack, GitHub, or a webhook). Any such connection happens only when *you* run the generated script yourself, using credentials you supply. Scriptly is not involved in, and does not see, that activity.

## Purchases

Scriptly is a one-time purchase handled entirely by Apple through the App Store. There is no separate in-app purchase — the App Store purchase itself is the unlock. We never see or store your payment details; Apple processes the transaction directly. See [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) for how Apple handles payment information.

## Local storage on your device

Scriptly stores small preferences locally on your Mac (your favourites, recently used templates, and appearance choice) using the standard macOS preferences system. This data never leaves your device and is removed if you delete the app.

## Children

Scriptly is rated 4+ and is safe for all ages. It collects no personal data from anyone, including children, and the Marketplace's anonymized-hash design means even optional use doesn't identify a child using the app.

## Your rights (UK / EU)

Scriptly's core features collect no personal data, so there is nothing for us to access, correct, export, or delete there. For the optional Marketplace, we can act on a request tied to your anonymized account hash (for example, removing a template you published) — contact us at the address above with details and we'll assist. If you are in the UK or EU and have a question about your rights under UK GDPR or the Data Protection Act 2018, contact us at the address above. You also have the right to lodge a complaint with the UK Information Commissioner's Office ([ico.org.uk](https://ico.org.uk)).

## Changes to this policy

If we add features that handle data beyond what's described above, we will update this policy and the app's App Store privacy details before that feature ships, and describe exactly what is sent and to whom.

---

© 2026 Luke Welch, trading as Scriptly. Governed by the laws of England and Wales.
