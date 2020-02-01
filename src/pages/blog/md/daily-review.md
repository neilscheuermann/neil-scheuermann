---
title: "Daily Review"
date: "2020-01-31"
---

## 1/30/20

- I can wrap text in Vim by visually selecting a section and typing `gq`. 
- Added a shortcut in .vimrc to **visually select the whole file** with
  `<Leader>sa`.
- I found out that **graphql queries** are re-run if any of the props passed to
  mapProps change.
- I downloaded an application called [Vim Markdown Preview](https://github.com/JamshedVesuna/vim-markdown-preview) from github and it allows
  me to live preview my markdown files as I'm typing.
  - Toggle live preview with F6, as set in my .vimrc
  - It's pretty sweet because it will also scroll in the web as I scroll in the
    markdown file!! 🤯
- I was having a hard time with the syntax highlighting in markdown files for
  *italics* and **bold**, where it hid the `*'s` while highlighting the italics,
and very slightly bolding the bold.
  - After searching for a while I found that adding `let
    g:indentLine_fileTypeExclude = ['markdown']` to my .vimrc will now show the
`*'s`.

## 1/31/20

- I learned the difference between relative and absolute numbers in vim. 
  - Relative: gives the lines below and above the current line a relative
    number. Can jump up and down a certain range with `5j` or `15k`, for
example.
  - Absolute: Default, sequential numbering.
  - To toggle relative/absolute numbers and show/hide numbers (found in .vimrc)
    - `<Leader>r`: toggles relative/absolute numbers
    - `<Leader>R`: toggles show/hide numbers
- I was reminded to break down my tasks into smaller pieces, and look for the
  happy faces (familiar aspects of task) such as what props are available to the
component or its parent.
