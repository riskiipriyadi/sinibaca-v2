---
title: "Memulai dengan Astro: Framework Web Modern untuk Blog"
description: "Pelajari cara membangun blog modern dengan Astro, framework web yang cepat dan efisien untuk content-driven websites."
pubDate: "2026-06-10"
updatedDate: "2026-06-11"
category: "Tutorial"
tags: ["astro", "web-development", "javascript", "blogging"]
thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
draft: false
---

## Kenapa Astro?

Astro adalah framework web modern yang dirancang khusus untuk content-driven websites seperti blog, dokumentasi, dan landing pages. Dengan pendekatan **zero-JS by default**, Astro menghasilkan website yang sangat cepat.

### Keunggulan Astro

1. **Islands Architecture** - Hanya mengirim JavaScript yang benar-benar dibutuhkan
2. **Partial Hydration** - Komponen interaktif tanpa membebani halaman
3. **Built-in Markdown Support** - Menulis konten jadi lebih mudah
4. **Content Collections** - Manajemen konten yang terstruktur dan type-safe

## Content Collections

Salah satu fitur terbaik Astro adalah Content Collections. Dengan fitur ini, kita bisa:

- Mendefinisikan schema untuk frontmatter
- Validasi otomatis setiap konten
- Type-safe querying dengan TypeScript
- Filter dan sorting yang mudah

```typescript
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});
```

## View Transitions API

Astro mendukung View Transitions API untuk animasi halaman yang halus. Cukup tambahkan komponen `<ViewTransitions />` di layout utama, dan semua navigasi akan terasa mulus.

### Manfaat View Transitions

- Transisi antar halaman yang halus
- Progress bar otomatis
- Animasi fade dan slide
- Pengalaman seperti Single Page Application

```astro
---
import { ViewTransitions } from 'astro:transitions';
---

<html>
  <head>
    <ViewTransitions />
  </head>
  <body>
    <slot />
  </body>
</html>
```

## Kesimpulan

Astro adalah pilihan tepat untuk membangun blog modern. Dengan performa tinggi, developer experience yang baik, dan ekosistem yang terus berkembang, Astro layak menjadi pertimbangan utama untuk proyek website konten Anda.

Selamat mencoba!