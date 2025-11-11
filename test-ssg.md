# تست SSG بلاگ

## مراحل تست:

### 1. Build کن:
```bash
npm run generate
```

### 2. چک کن فایل‌های HTML ساخته شدن:
```bash
dir .output\public\blog
dir .output\public\fa\blog
```

### 3. محتوای یه فایل رو ببین:
```bash
type .output\public\blog\getting-started-with-nuxt-content\index.html
```

اگه محتوای کامل پست رو توی HTML دیدی = SSG کار می‌کنه ✅

### 4. سرور static رو اجرا کن:
```bash
npx serve .output\public
```

بعد مستقیماً برو روی یه پست بلاگ - باید بدون هیچ loading نشون بده.

---

## چیزایی که باید توی HTML ببینی:

✅ عنوان پست
✅ محتوای کامل
✅ تگ‌ها
✅ تاریخ
✅ Meta tags برای SEO

اگه این‌ها رو دیدی، یعنی SSG درست کار می‌کنه!
