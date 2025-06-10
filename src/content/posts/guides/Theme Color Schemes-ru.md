---
title: Цветовые Схемы Темы
published: 2025-04-11
tags:
  - Руководство
toc: false
lang: ru
abbrlink: theme-color-schemes
---

Retypeset определяет цветовые схемы темы на основе цветового пространства [OKLCH](https://oklch.com/), с предустановленной схемой черного, белого и серого цветов, имитирующей печатный стиль.

Для удовлетворения потребностей в персонализации я создал несколько цветовых схем для темы. Вы можете заменить стандартную цветовую схему в [src/config.ts](https://github.com/radishzzz/astro-theme-retypeset/blob/master/src/config.ts) и **перезапустить сервер разработки**, чтобы просмотреть новую цветовую схему.

## Бледно-зелёный

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

## Воронёный

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

## Чернильно-синий

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

## Кремовый

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
