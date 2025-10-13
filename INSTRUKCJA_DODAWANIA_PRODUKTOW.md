# 📦 Instrukcja Dodawania Nowych Produktów

## 🚀 Szybki Start (5 kroków)

### 1️⃣ Skopiuj szablon
```
Skopiuj folder: /public/produkty/_SZABLON_PRODUKTU/
Zmień nazwę na: nazwa-twojego-produktu
```

### 2️⃣ Dodaj zdjęcia
```
W folderze: /public/produkty/nazwa-twojego-produktu/images/
Dodaj 3 pliki:
- nazwa-twojego-produktu-1l.png
- nazwa-twojego-produktu-5l.png
- nazwa-twojego-produktu-20l.png
```

### 3️⃣ Dodaj dokumenty PDF
```
W folderze: /public/produkty/nazwa-twojego-produktu/documents/
Dodaj 2 pliki:
- etykieta.pdf
- karta-charakterystyki.pdf
```

### 4️⃣ Edytuj products.json
```
Otwórz: /public/produkty/products.json
Skopiuj szablon produktu (poniżej)
Zmień dane na swoje
Zapisz plik
```

### 5️⃣ Gotowe! 🎉
```
Odśwież stronę /produkty
Twój produkt powinien się pojawić na liście
```

---

## 📋 Szablon produktu do skopiowania

Skopiuj poniższy kod i wklej do pliku `products.json` w sekcji `"products": [...]`:

```json
{
  "id": "nazwa-produktu",
  "name": "NAZWA PRODUKTU",
  "slug": "nazwa-produktu",
  "description": "Krótki opis produktu (1-2 zdania).",
  "category": "herbicydy",
  "ufi": "TH00-Y0W5-D00X-SY0S",
  "type": "Herbicyd",
  "images": {
    "1l": "/produkty/nazwa-produktu/images/nazwa-produktu-1l.png",
    "5l": "/produkty/nazwa-produktu/images/nazwa-produktu-5l.png",
    "20l": "/produkty/nazwa-produktu/images/nazwa-produktu-20l.png"
  },
  "documents": {
    "etykieta": "/produkty/nazwa-produktu/documents/etykieta.pdf",
    "karta": "/produkty/nazwa-produktu/documents/karta-charakterystyki.pdf"
  },
  "sizes": ["1l", "5l", "20l"],
  "properties": [
    "Właściwość 1 produktu",
    "Właściwość 2 produktu",
    "Właściwość 3 produktu",
    "Właściwość 4 produktu"
  ],
  "safety": {
    "short": "Krótka informacja o bezpieczeństwie (1 zdanie).",
    "detailed": "Szczegółowa informacja o bezpieczeństwie (co zrobić w razie kontaktu)."
  },
  "composition": {
    "activeSubstance": "Nazwa substancji aktywnej",
    "concentration": "800 g/l",
    "form": "Emulsja koncentrat",
    "additives": "Emulgatory"
  }
}
```

**⚠️ WAŻNE:** Pamiętaj o przecinku na końcu obiektu, jeśli dodajesz produkt w środku listy!

---

## 📁 Struktura folderów

```
public/
└── produkty/
    ├── products.json                    ← Plik konfiguracyjny (edytujesz tutaj)
    ├── _SZABLON_PRODUKTU/              ← Szablon do kopiowania
    │   ├── images/
    │   │   └── PLACEHOLDER.txt
    │   ├── documents/
    │   │   └── PLACEHOLDER.txt
    │   └── README.md
    │
    └── nazwa-produktu/                  ← Twój nowy produkt
        ├── images/
        │   ├── nazwa-produktu-1l.png
        │   ├── nazwa-produktu-5l.png
        │   └── nazwa-produktu-20l.png
        ├── documents/
        │   ├── etykieta.pdf
        │   └── karta-charakterystyki.pdf
        └── README.md (opcjonalnie)
```

---

## 🎨 Kategorie produktów

Wybierz jedną z dostępnych kategorii:

| Kategoria | Opis | Kolor |
|-----------|------|-------|
| `herbicydy` | Środki do zwalczania chwastów | 🔵 Niebieski |
| `fungicydy` | Środki do zwalczania chorób grzybowych | 🟢 Zielony |
| `insektycydy` | Środki do zwalczania owadów | 🔴 Czerwony |
| `aduiwanty` | Środki wspomagające (adiuwanty) | 🟡 Żółty |
| `inne` | Inne produkty | 🟣 Fioletowy |

---

## 📝 Zasady nazewnictwa

### ✅ DOBRZE:
- `agricon-800`
- `ricarion-95-ec`
- `olecon-84-ec`

### ❌ ŹLE:
- `Agricon 800` (spacje, wielkie litery)
- `agricon_800` (podkreślniki)
- `agricon800` (brak separatora)
- `agricoń-800` (polskie znaki)

### 📌 Reguły:
1. Tylko małe litery
2. Zamiast spacji używaj myślnika `-`
3. Bez polskich znaków (ą, ć, ę, ł, ń, ó, ś, ź, ż)
4. Bez podkreślników `_`
5. Bez spacji

---

## 🖼️ Wymagania dla zdjęć

### Format:
- **Zalecany:** PNG z przezroczystym tłem
- **Alternatywny:** JPG z białym tłem

### Rozmiar:
- **Maksymalny:** 2MB na zdjęcie
- **Zalecane wymiary:** 800x800px lub więcej
- **Proporcje:** Kwadratowe (1:1)

### Jakość:
- Wysokiej jakości, wyraźne zdjęcia
- Dobrze oświetlone
- Produkt wycentrowany
- Bez cieni (jeśli PNG z przezroczystym tłem)

### Nazewnictwo:
```
{slug-produktu}-1l.png
{slug-produktu}-5l.png
{slug-produktu}-20l.png
```

---

## 📄 Wymagania dla dokumentów PDF

### Pliki:
1. **etykieta.pdf** - Etykieta produktu
2. **karta-charakterystyki.pdf** - Karta charakterystyki (SDS/MSDS)

### Wymagania:
- **Format:** PDF
- **Maksymalny rozmiar:** 5MB na plik
- **Nazwy:** Dokładnie jak powyżej (małe litery, myślniki)

---

## 🔍 Przykład kompletnego produktu

Zobacz folder `/public/produkty/agricon-800/` jako przykład poprawnie skonfigurowanego produktu.

---

## ✅ Checklist przed publikacją

Przed dodaniem produktu sprawdź:

- [ ] Folder produktu ma poprawną nazwę (slug)
- [ ] Dodane są wszystkie 3 zdjęcia (1L, 5L, 20L)
- [ ] Zdjęcia mają poprawne nazwy
- [ ] Dodane są oba PDFy (etykieta, karta)
- [ ] PDFy mają poprawne nazwy
- [ ] Produkt dodany do `products.json`
- [ ] Wszystkie ścieżki w JSON są poprawne
- [ ] Plik JSON jest poprawnie sformatowany (bez błędów składni)
- [ ] Kategoria jest poprawna
- [ ] Wszystkie pola są wypełnione
- [ ] Produkt wyświetla się na stronie `/produkty`
- [ ] Kliknięcie w produkt otwiera stronę szczegółów
- [ ] Przyciski zmiany rozmiaru działają
- [ ] PDFy otwierają się poprawnie

---

## 🆘 Rozwiązywanie problemów

### Problem: Produkt nie pojawia się na liście
**Rozwiązanie:**
1. Sprawdź czy plik `products.json` jest poprawnie sformatowany
2. Użyj walidatora JSON online (np. jsonlint.com)
3. Sprawdź czy nie ma błędów w konsoli przeglądarki (F12)

### Problem: Zdjęcia się nie wyświetlają
**Rozwiązanie:**
1. Sprawdź czy ścieżki w JSON są poprawne
2. Sprawdź czy nazwy plików są dokładnie takie same jak w JSON
3. Sprawdź czy pliki są w formacie PNG lub JPG

### Problem: PDFy się nie otwierają
**Rozwiązanie:**
1. Sprawdź czy ścieżki w JSON są poprawne
2. Sprawdź czy pliki są w formacie PDF
3. Sprawdź czy nazwy plików są dokładnie takie same jak w JSON

### Problem: Błąd składni w JSON
**Rozwiązanie:**
1. Sprawdź czy wszystkie nawiasy są zamknięte `{ }` i `[ ]`
2. Sprawdź czy wszystkie przecinki są na swoim miejscu
3. Sprawdź czy ostatni element w liście NIE ma przecinka
4. Użyj walidatora JSON online

---

## 💡 Wskazówki

1. **Backup:** Zawsze rób kopię zapasową `products.json` przed edycją
2. **Testowanie:** Testuj produkt lokalnie przed publikacją
3. **Nazewnictwo:** Używaj tego samego slug'a wszędzie (folder, JSON, pliki)
4. **Organizacja:** Trzymaj wszystkie pliki produktu w jego folderze
5. **Dokumentacja:** Dodaj README.md w folderze produktu z notatkami

---

## 📞 Potrzebujesz pomocy?

Jeśli masz problemy:
1. Sprawdź przykładowy produkt w `/public/produkty/agricon-800/`
2. Przeczytaj README w `/public/produkty/_SZABLON_PRODUKTU/`
3. Sprawdź konsolę przeglądarki (F12) w poszukiwaniu błędów
4. Zwaliduj plik JSON online

---

## 🎯 Podsumowanie

**Dodanie nowego produktu to 5 prostych kroków:**
1. Skopiuj szablon
2. Dodaj zdjęcia (3 pliki PNG/JPG)
3. Dodaj PDFy (2 pliki)
4. Edytuj products.json (dodaj wpis)
5. Gotowe! 🎉

**Czas potrzebny:** ~5-10 minut na produkt

**Trudność:** ⭐⭐☆☆☆ (Łatwe)