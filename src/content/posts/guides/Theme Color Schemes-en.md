---
title: Theme Color Schemes
published: 2025-04-11
tags:
  - Guide
toc: false
lang: en
abbrlink: theme-color-schemes
---

Retypeset defines theme color schemes based on the [OKLCH](https://oklch.com/) color space, with a default black, white, and gray color scheme that simulates a print style.

To meet personalization needs, I've created several color schemes for the theme. You can replace the default color scheme in [src/config.ts](https://github.com/radishzzz/astro-theme-retypeset/blob/master/src/config.ts) and **restart the development server** to preview the new color scheme.

## Scallion White

![Light mode](../_images/1-light.jpeg)
![Dark mode](../_images/1-dark.jpeg)

```
light: {
  primary: 'oklch(0.25 0.03 211.86)',
  secondary: 'oklch(0.40 0.03 211.86)',
  background: 'oklch(0.99 0.0039 106.47)',
},
dark: {
  primary: 'oklch(0.92 0.0015 106.47)',
  secondary: 'oklch(0.79 0.0015 106.47)',
  background: 'oklch(0.24 0.0039 106.47)',
},
```

## Raven Teal

![Light mode](../_images/2-light.jpeg)
![Dark mode](../_images/2-dark.jpeg)

```
light: {
  primary: 'oklch(0.24 0.0172 280.05)',
  secondary: 'oklch(0.40 0.0172 280.05)',
  background: 'oklch(0.98 0.0172 280.05)',
},
dark: {
  primary: 'oklch(0.92 0.0172 280.05)',
  secondary: 'oklch(0.79 0.0172 280.05)',
  background: 'oklch(0.24 0.0172 280.05)',
},
```

## Ink Blue

![Light mode](../_images/4-light.jpeg)
![Dark mode](../_images/4-dark.jpeg)

```
light: {
  primary: 'oklch(0.24 0.053 261.24)',
  secondary: 'oklch(0.39 0.053 261.24)',
  background: 'oklch(1 0 0)',
},
dark: {
  primary: 'oklch(0.92 0 0)',
  secondary: 'oklch(0.79 0 0)',
  background: 'oklch(0.24 0.016 265.21)',
},
```

## Ecru

![Light mode](../_images/3-light.jpeg)
![Dark mode](../_images/3-dark.jpeg)

```
light: {
  primary: 'oklch(0.25 0 0)',
  secondary: 'oklch(0.41 0 0)',
  background: 'oklch(0.95 0.0237 59.39)',
},
dark: {
  primary: 'oklch(0.93 0.019 59.39)',
  secondary: 'oklch(0.80 0.017 59.39)',
  background: 'oklch(0.23 0 0)',
},
```
