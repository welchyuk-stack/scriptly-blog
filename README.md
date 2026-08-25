# Scriptly Blog

Mac automation guides and AppleScript templates. Built with Jekyll, hosted on GitHub Pages.

Live at: https://welchyuk-stack.github.io/scriptly-blog

Companion blog for [Scriptly](https://apps.apple.com/us/app/scriptly-script-automations/id6788839033?mt=12), a Mac app that generates AppleScript from plain-English descriptions.

## Publishing a new post

```bash
cat > "_posts/YYYY-MM-DD-title.md" << 'EOF'
---
layout: post
title: "Your Title Here"
date: YYYY-MM-DD
excerpt: "Short description"
---

Your content here
EOF

git add _posts/YYYY-MM-DD-title.md
git commit -m "Add post: [topic]"
git push origin main
```
