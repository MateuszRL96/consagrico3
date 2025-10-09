# ❓ FAQ - Najczęściej Zadawane Pytania

## 📦 Ogólne

### Gdzie znajdują się wszystkie dane produktów?
Wszystkie dane produktów są w pliku `/public/produkty/products.json`. To jedyny plik, który musisz edytować, aby dodać lub zmienić produkt.

### Czy muszę znać programowanie, aby dodać produkt?
Nie! Wystarczy, że:
1. Skopiujesz folder szablonu
2. Dodasz zdjęcia i PDFy
3. Skopiujesz i wypełnisz szablon w pliku JSON

### Ile czasu zajmuje dodanie nowego produktu?
Około 5-10 minut, jeśli masz już przygotowane zdjęcia i dokumenty.

### Czy jest limit produktów?
Nie, możesz dodać dowolną liczbę produktów.

---

## 📁 Pliki i Foldery

### Gdzie umieścić zdjęcia produktu?
Zdjęcia umieszczasz w folderze:
```
/public/produkty/{nazwa-produktu}/images/
```

### Gdzie umieścić dokumenty PDF?
Dokumenty PDF umieszczasz w folderze:
```
/public/produkty/{nazwa-produktu}/documents/
```

### Czy mogę zmienić nazwy plików PDF?
Nie zalecamy. System oczekuje plików o nazwach:
- `etykieta.pdf`
- `karta-charakterystyki.pdf`

Jeśli chcesz użyć innych nazw, musisz je zmienić w pliku `products.json`.

### Czy mogę dodać więcej niż 3 zdjęcia?
Obecnie system obsługuje 3 rozmiary (1L, 5L, 20L). Jeśli potrzebujesz więcej rozmiarów, musisz zmodyfikować kod.

---

## 🖼️ Zdjęcia

### Jaki format zdjęć jest najlepszy?
PNG z przezroczystym tłem. Wygląda najlepiej na stronie.

### Czy mogę użyć JPG?
Tak, ale PNG z przezroczystym tłem wygląda lepiej.

### Jakie powinny być wymiary zdjęć?
Zalecamy 800x800px lub więcej. Ważne, żeby były kwadratowe (proporcje 1:1).

### Jak zmniejszyć rozmiar zdjęć?
Użyj narzędzia online jak TinyPNG (tinypng.com) do kompresji.

### Czy zdjęcia muszą mieć takie same wymiary?
Nie muszą, ale zalecamy, żeby wszystkie były kwadratowe i podobnej wielkości.

---

## 📄 Dokumenty PDF

### Jakie dokumenty PDF są wymagane?
Dwa dokumenty:
1. Etykieta produktu
2. Karta charakterystyki (SDS/MSDS)

### Czy mogę dodać więcej dokumentów?
Tak, ale musisz zmodyfikować kod. Obecnie system obsługuje 2 dokumenty.

### Jak zmniejszyć rozmiar PDF?
Użyj narzędzia online jak ILovePDF (ilovepdf.com) do kompresji.

### Czy PDFy muszą być w języku polskim?
Nie jest to wymagane, ale zalecane dla użytkowników.

---

## 📝 Plik products.json

### Gdzie znajduje się plik products.json?
W lokalizacji: `/public/produkty/products.json`

### Jak edytować plik JSON?
Możesz użyć dowolnego edytora tekstu (np. Notepad++, VS Code) lub edytora JSON online.

### Co zrobić, jeśli popełnię błąd w JSON?
1. Użyj walidatora JSON online (jsonlint.com)
2. Sprawdź czy wszystkie nawiasy są zamknięte
3. Sprawdź czy przecinki są na swoim miejscu
4. Przywróć backup, jeśli masz

### Czy muszę restartować serwer po edycji JSON?
Nie, wystarczy odświeżyć stronę w przeglądarce.

### Jak zrobić backup pliku JSON?
Skopiuj plik `products.json` i zapisz jako `products.backup.json` lub z datą `products-2025-01-08.json`.

---

## 🎨 Kategorie

### Jakie kategorie są dostępne?
- `herbicydy` - Środki do zwalczania chwastów (niebieski)
- `fungicydy` - Środki do zwalczania chorób grzybowych (zielony)
- `insektycydy` - Środki do zwalczania owadów (czerwony)
- `aduiwanty` - Środki wspomagające (żółty)
- `inne` - Inne produkty (fioletowy)

### Czy mogę dodać nową kategorię?
Tak, ale musisz zmodyfikować kod w pliku `/src/app/produkty/page.tsx`.

### Czy produkt może należeć do wielu kategorii?
Nie, obecnie produkt może należeć tylko do jednej kategorii.

---

## 🔧 Nazewnictwo

### Jak nazwać folder produktu?
Używaj małych liter, myślników zamiast spacji, bez polskich znaków.
Przykład: `agricon-800`, `ricarion-95-ec`

### Co to jest "slug"?
Slug to URL-friendly nazwa produktu. Używana w adresie strony.
Przykład: `/produkty/agricon-800` - tutaj `agricon-800` to slug.

### Czy slug musi być taki sam jak nazwa folderu?
Tak, zalecamy, żeby były identyczne dla spójności.

### Czy mogę zmienić slug istniejącego produktu?
Tak, ale pamiętaj, że zmieni się też adres URL produktu.

---

## 🐛 Rozwiązywanie Problemów

### Produkt nie pojawia się na liście
**Możliwe przyczyny:**
1. Błąd składni w pliku JSON
2. Produkt nie został dodany do tablicy `products`
3. Błąd w ścieżkach do plików

**Rozwiązanie:**
1. Zwaliduj JSON online (jsonlint.com)
2. Sprawdź konsolę przeglądarki (F12)
3. Sprawdź czy plik JSON został zapisany

### Zdjęcia się nie wyświetlają
**Możliwe przyczyny:**
1. Błędna ścieżka w JSON
2. Błędna nazwa pliku
3. Plik nie istnieje w podanej lokalizacji

**Rozwiązanie:**
1. Sprawdź czy ścieżka w JSON jest poprawna
2. Sprawdź czy nazwa pliku jest dokładnie taka sama
3. Sprawdź czy plik istnieje w folderze

### PDFy się nie otwierają
**Możliwe przyczyny:**
1. Błędna ścieżka w JSON
2. Błędna nazwa pliku
3. Plik nie jest w formacie PDF

**Rozwiązanie:**
1. Sprawdź czy ścieżka w JSON jest poprawna
2. Sprawdź czy nazwa pliku jest dokładnie taka sama
3. Sprawdź czy plik jest w formacie PDF

### Błąd "Unexpected token" w JSON
**Przyczyna:** Błąd składni w pliku JSON

**Rozwiązanie:**
1. Sprawdź czy wszystkie nawiasy są zamknięte `{ }` i `[ ]`
2. Sprawdź czy wszystkie przecinki są na swoim miejscu
3. Sprawdź czy ostatni element w liście NIE ma przecinka
4. Użyj walidatora JSON online

### Strona się nie ładuje po dodaniu produktu
**Przyczyna:** Prawdopodobnie błąd w pliku JSON

**Rozwiązanie:**
1. Sprawdź konsolę przeglądarki (F12)
2. Zwaliduj plik JSON
3. Przywróć backup i spróbuj ponownie

---

## 🔄 Aktualizacja Produktów

### Jak zmienić dane istniejącego produktu?
Edytuj wpis produktu w pliku `products.json` i zapisz.

### Jak zmienić zdjęcie produktu?
1. Zamień plik zdjęcia w folderze `/images/`
2. Zachowaj tę samą nazwę pliku
3. Odśwież stronę

### Jak zmienić dokument PDF?
1. Zamień plik PDF w folderze `/documents/`
2. Zachowaj tę samą nazwę pliku
3. Odśwież stronę

### Jak usunąć produkt?
1. Usuń wpis produktu z pliku `products.json`
2. Opcjonalnie: usuń folder produktu z `/public/produkty/`

---

## 📊 Wydajność

### Czy duża liczba produktów spowolni stronę?
Nie, system jest zoptymalizowany. Możesz mieć setki produktów bez problemu.

### Czy powinienem kompresować zdjęcia?
Tak, zalecamy kompresję zdjęć do max 2MB na zdjęcie.

### Czy powinienem kompresować PDFy?
Tak, zalecamy kompresję PDFów do max 5MB na plik.

---

## 🔐 Bezpieczeństwo

### Czy plik JSON jest bezpieczny?
Tak, plik JSON jest publiczny, ale zawiera tylko dane produktów (bez danych wrażliwych).

### Czy mogę dodać ceny produktów?
Tak, możesz dodać pole `price` do obiektu produktu w JSON.

### Czy mogę ukryć niektóre produkty?
Tak, możesz dodać pole `visible: false` do obiektu produktu i zmodyfikować kod, aby je filtrować.

---

## 🚀 Zaawansowane

### Jak dodać nowe pole do produktu?
1. Dodaj pole do obiektu produktu w JSON
2. Zmodyfikuj typ `ProductData` w kodzie
3. Wyświetl nowe pole w komponencie

### Jak zmienić kolory kategorii?
Edytuj funkcję `getCategoryInfo` w pliku `/src/app/produkty/page.tsx`.

### Jak dodać więcej rozmiarów (np. 10L)?
1. Dodaj pole `"10l"` do obiektu `images` w JSON
2. Dodaj `"10l"` do tablicy `sizes`
3. Zmodyfikuj kod, aby obsługiwał nowy rozmiar

### Jak zmienić układ strony produktu?
Edytuj plik `/src/app/produkty/[slug]/page.tsx`.

---

## 📚 Dodatkowe Zasoby

### Gdzie znajdę więcej informacji?
- **INSTRUKCJA_DODAWANIA_PRODUKTOW.md** - Szczegółowa instrukcja
- **NOWA_STRUKTURA_PRODUKTOW.md** - Dokumentacja techniczna
- **README_PRODUKTY.md** - Szybki przewodnik

### Jakie narzędzia mogą mi pomóc?
- **JSONLint** (jsonlint.com) - Walidator JSON
- **TinyPNG** (tinypng.com) - Kompresja zdjęć
- **ILovePDF** (ilovepdf.com) - Edycja i kompresja PDF
- **VS Code** - Edytor kodu z podświetlaniem składni

---

## 💡 Najlepsze Praktyki

### Backup
Zawsze rób backup pliku `products.json` przed edycją.

### Nazewnictwo
Używaj spójnego nazewnictwa dla wszystkich produktów.

### Testowanie
Testuj produkt lokalnie przed publikacją.

### Organizacja
Trzymaj wszystkie pliki produktu w jego folderze.

### Dokumentacja
Dodaj README.md w folderze produktu z notatkami.

---

## 🎯 Podsumowanie

**Najczęstsze pytania:**
1. Jak dodać produkt? → Zobacz INSTRUKCJA_DODAWANIA_PRODUKTOW.md
2. Gdzie edytować dane? → W pliku /public/produkty/products.json
3. Gdzie dodać zdjęcia? → W folderze /public/produkty/{nazwa}/images/
4. Gdzie dodać PDFy? → W folderze /public/produkty/{nazwa}/documents/
5. Jak naprawić błąd JSON? → Użyj walidatora jsonlint.com

**Nie znalazłeś odpowiedzi?**
Sprawdź szczegółową dokumentację w plikach:
- INSTRUKCJA_DODAWANIA_PRODUKTOW.md
- NOWA_STRUKTURA_PRODUKTOW.md

---

**Ostatnia aktualizacja:** 2025-01-08