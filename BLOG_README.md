# 📝 Blog Conagrico - Instrukcja Obsługi

## 🎯 Przegląd

Nowa sekcja bloga zastępuje poprzednią stronę "Usługi" i oferuje:
- ✅ Nowoczesny design z ciemnym tłem i heksagonami
- ✅ Integracja z LinkedIn (udostępnianie postów)
- ✅ Panel administracyjny do zarządzania postami
- ✅ Filtrowanie po kategoriach
- ✅ Responsywny design
- ✅ Przyciski social media (LinkedIn, Facebook, Twitter)

## 📂 Struktura Plików

```
src/app/
├── blog/
│   ├── page.tsx              # Główna strona bloga (lista postów)
│   ├── [id]/
│   │   └── page.tsx          # Strona pojedynczego posta
│   └── admin/
│       └── page.tsx          # Panel administracyjny
```

## 🚀 Jak Korzystać

### 1. Przeglądanie Bloga
- Odwiedź: `http://localhost:3000/blog`
- Filtruj posty po kategoriach
- Kliknij "Czytaj więcej" aby zobaczyć pełny post
- Użyj przycisku LinkedIn aby udostępnić post

### 2. Panel Administracyjny
- Odwiedź: `http://localhost:3000/blog/admin`
- Kliknij "➕ Nowy Post" aby dodać post
- Wypełnij formularz:
  - **Tytuł**: Główny tytuł posta
  - **Krótki opis**: Podsumowanie (widoczne na liście)
  - **Treść**: Pełna treść w HTML
  - **URL obrazu**: Ścieżka do obrazu (np. `/lab1 (2).jpg`)
  - **Kategoria**: Innowacje, Ekologia, Poradniki, Aktualności
  - **Czas czytania**: np. "5 min"
  - **Autor**: Domyślnie "Zespół Conagrico"

### 3. Formatowanie Treści

W polu "Treść" możesz używać HTML:

```html
<h2>Główny nagłówek</h2>
<p>Paragraf tekstu z <strong>pogrubieniem</strong> i <em>kursywą</em>.</p>

<h3>Podtytuł</h3>
<p>Kolejny paragraf.</p>

<ul>
  <li>Punkt pierwszy</li>
  <li>Punkt drugi</li>
  <li>Punkt trzeci</li>
</ul>
```

### 4. Udostępnianie na LinkedIn

**Z listy postów:**
1. Kliknij ikonę LinkedIn przy poście
2. Otworzy się okno LinkedIn z linkiem do posta

**Ze strony posta:**
1. Użyj przycisku LinkedIn w lewym panelu (desktop)
2. Lub na górze strony (mobile)
3. Post zostanie udostępniony z linkiem do Twojej strony

### 5. Eksport/Import Danych

**Eksport:**
1. W panelu admin kliknij "📥 Eksportuj JSON"
2. Pobierze się plik `blog-posts.json`

**Import (przyszła funkcja):**
- Obecnie posty są zapisywane w localStorage przeglądarki
- Możesz dodać funkcję importu z JSON

## 🎨 Dostosowywanie

### Zmiana Kategorii

W pliku `src/app/blog/page.tsx` i `src/app/blog/admin/page.tsx`:

```typescript
const categories = ['Innowacje', 'Ekologia', 'Poradniki', 'Aktualności'];
```

### Zmiana Kolorów

Kolory marki są już zintegrowane:
- Niebieski: `#0066b3`
- Zielony: `#2dbd6e`
- Tło: `bg-gray-900`

### Dodanie Bazy Danych

Obecnie posty są w localStorage. Aby dodać bazę danych:

1. **Utwórz API endpoint:**
```typescript
// src/app/api/blog/route.ts
export async function GET() {
  // Pobierz posty z bazy
}

export async function POST(request: Request) {
  // Zapisz post do bazy
}
```

2. **Zaktualizuj komponenty:**
```typescript
// Zamiast useState użyj fetch
const [posts, setPosts] = useState([]);

useEffect(() => {
  fetch('/api/blog')
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);
```

## 📱 Social Media Integration

### LinkedIn
```typescript
const shareOnLinkedIn = (post: BlogPost) => {
  const url = `${window.location.origin}/blog/${post.id}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  window.open(linkedInUrl, '_blank', 'width=600,height=600');
};
```

### Facebook
```typescript
const shareOnFacebook = () => {
  const url = window.location.href;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookUrl, '_blank', 'width=600,height=600');
};
```

### Twitter
```typescript
const shareOnTwitter = () => {
  const url = window.location.href;
  const text = post?.title || '';
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  window.open(twitterUrl, '_blank', 'width=600,height=600');
};
```

## 🔧 Rozszerzenia

### 1. Dodanie Komentarzy
Możesz zintegrować:
- Disqus
- Facebook Comments
- Własny system komentarzy

### 2. SEO
Dodaj meta tagi w `page.tsx`:
```typescript
export const metadata = {
  title: post.title,
  description: post.excerpt,
  openGraph: {
    title: post.title,
    description: post.excerpt,
    images: [post.image],
  },
};
```

### 3. Newsletter
Zintegruj z:
- Mailchimp
- SendGrid
- ConvertKit

### 4. Analytics
Śledź:
- Wyświetlenia postów
- Kliknięcia w social media
- Czas czytania

## 📊 Przykładowe Posty

W pliku znajdują się 3 przykładowe posty:
1. "Innowacje w ochronie roślin"
2. "Zrównoważone rolnictwo"
3. "Jak zwiększyć plony"

Możesz je edytować lub usunąć w panelu admin.

## 🐛 Rozwiązywanie Problemów

### Posty nie zapisują się
- Sprawdź czy localStorage jest włączony w przeglądarce
- Sprawdź konsolę przeglądarki (F12) pod kątem błędów

### Obrazy się nie wyświetlają
- Upewnij się że obrazy są w folderze `public/`
- Użyj pełnej ścieżki: `/nazwa-obrazu.jpg`

### LinkedIn nie udostępnia
- Sprawdź czy strona jest dostępna publicznie
- LinkedIn wymaga HTTPS dla produkcji

## 📞 Wsparcie

Jeśli masz pytania lub problemy:
1. Sprawdź dokumentację Next.js
2. Sprawdź konsolę przeglądarki
3. Skontaktuj się z zespołem deweloperskim

---

**Wersja:** 1.0  
**Data:** 2024  
**Autor:** Conagrico Team