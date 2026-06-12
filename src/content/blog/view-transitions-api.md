---
title: "Membuat Animasi Halus dengan View Transitions API"
description: "Panduan lengkap menggunakan View Transitions API di Astro untuk menciptakan pengalaman navigasi seperti SPA."
pubDate: "2026-06-05"
updatedDate: "2026-06-06"
category: "JavaScript"
tags: ["view-transitions", "api", "animation", "astro", "web-apis"]
thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
draft: false
---

## Apa itu View Transitions API?

View Transitions API adalah API browser modern yang memungkinkan animasi transisi halus antar tampilan (view) tanpa perlu library tambahan. Astro memiliki dukungan built-in untuk API ini.

## Implementasi Dasar

Tambahkan komponen `<ViewTransitions />` di `<head>` layout utama:

```astro
---
import { ViewTransitions } from 'astro:transitions';
---

<html lang="id">
  <head>
    <ViewTransitions />
  </head>
  <body>
    <slot />
  </body>
</html>
```

## Animasi Kustom

Kita bisa menyesuaikan animasi dengan CSS:

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

::view-transition-old(root) {
  animation: fade-out 0.3s ease;
}

::view-transition-new(root) {
  animation: slide-up 0.4s ease;
}
```

## Transisi Elemen Spesifik

Gunakan `view-transition-name` untuk animasi elemen tertentu:

```astro
---
import { ViewTransitions } from 'astro:transitions';
---

<ViewTransitions fallback="animate" />

<main style="view-transition-name: main-content;">
  <slot />
</main>
```

## Fallback untuk Browser Lama

Astro menyediakan fallback otomatis:

```astro
<ViewTransitions fallback="animate" />
```

Opsi fallback:
- `"animate"` - Animasi CSS sederhana
- `"swap"` - Pertukaran instan tanpa animasi
- `false` - Nonaktifkan View Transitions

## Best Practices

1. **Gunakan nama unik** untuk `view-transition-name`
2. **Hindari animasi terlalu kompleks** yang mempengaruhi performa
3. **Test di berbagai browser** untuk konsistensi
4. **Respect `prefers-reduced-motion`** untuk aksesibilitas

## Kesimpulan

View Transitions API membuat navigasi blog terasa seperti SPA modern. Dengan dukungan native Astro, implementasinya sangat mudah dan performa tetap optimal.