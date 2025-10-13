# Szablon Produktu - Instrukcja

## Jak dodać nowy produkt?

### Krok 1: Skopiuj ten folder
1. Skopiuj cały folder `_SZABLON_PRODUKTU`
2. Zmień nazwę folderu na slug produktu (np. `agricon-800`, `ricarion-95-ec`)
   - Używaj małych liter
   - Zamiast spacji używaj myślników (-)
   - Nie używaj polskich znaków

### Krok 2: Dodaj zdjęcia produktu
W folderze `images/` umieść 3 zdjęcia:
- `{nazwa-produktu}-1l.png` - zdjęcie butelki 1L
- `{nazwa-produktu}-5l.png` - zdjęcie kanistra 5L
- `{nazwa-produktu}-20l.png` - zdjęcie kanistra 20L

**Przykład:**
- `agricon-800-1l.png`
- `agricon-800-5l.png`
- `agricon-800-20l.png`

**Wymagania zdjęć:**
- Format: PNG z przezroczystym tłem (zalecane) lub JPG
- Rozmiar: maksymalnie 2MB na zdjęcie
- Wymiary: zalecane 800x800px lub więcej
- Jakość: wysokiej jakości, wyraźne zdjęcia

### Krok 3: Dodaj dokumenty PDF
W folderze `documents/` umieść 2 pliki PDF:
- `etykieta.pdf` - etykieta produktu
- `karta-charakterystyki.pdf` - karta charakterystyki (SDS/MSDS)

**Wymagania PDF:**
- Format: PDF
- Rozmiar: maksymalnie 5MB na plik
- Nazwa: dokładnie jak powyżej (małe litery, myślniki)

### Krok 4: Dodaj produkt do pliku products.json
Otwórz plik `/public/produkty/products.json` i dodaj nowy obiekt produktu:

```json
{
  "id": "nazwa-produktu",
  "name": "NAZWA PRODUKTU",
  "slug": "nazwa-produktu",
  "description": "Krótki opis produktu (1-2 zdania)",
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
    "Właściwość 1",
    "Właściwość 2",
    "Właściwość 3",
    "Właściwość 4"
  ],
  "safety": {
    "short": "Krótka informacja o bezpieczeństwie",
    "detailed": "Szczegółowa informacja o bezpieczeństwie"
  },
  "composition": {
    "activeSubstance": "Nazwa substancji aktywnej",
    "concentration": "800 g/l",
    "form": "Emulsja koncentrat",
    "additives": "Emulgatory"
  }
}
```

### Krok 5: Kategorie produktów
Dostępne kategorie (wybierz jedną):
- `herbicydy` - środki do zwalczania chwastów
- `fungicydy` - środki do zwalczania chorób grzybowych
- `insektycydy` - środki do zwalczania owadów
- `aduiwanty` - środki wspomagające (adiuwanty)
- `inne` - inne produkty

### Krok 6: Sprawdź czy wszystko działa
1. Zapisz zmiany w pliku `products.json`
2. Odśwież stronę produktów
3. Sprawdź czy produkt pojawia się na liście
4. Kliknij w produkt i sprawdź czy:
   - Zdjęcia się wyświetlają
   - Przyciski zmiany rozmiaru działają
   - PDFy się otwierają
   - Wszystkie informacje są poprawne

## Struktura folderu produktu

```
nazwa-produktu/
├── images/
│   ├── nazwa-produktu-1l.png
│   ├── nazwa-produktu-5l.png
│   └── nazwa-produktu-20l.png
├── documents/
│   ├── etykieta.pdf
│   └── karta-charakterystyki.pdf
└── README.md (opcjonalnie - notatki o produkcie)
```

## Przykład kompletnego produktu

Zobacz folder `agricon-800/` jako przykład poprawnie skonfigurowanego produktu.

## Wskazówki

1. **Nazewnictwo:** Zawsze używaj tego samego slug'a (nazwy) w:
   - Nazwie folderu
   - Polu `id` i `slug` w JSON
   - Nazwach plików zdjęć

2. **Ścieżki:** Wszystkie ścieżki w JSON zaczynają się od `/produkty/`

3. **Zdjęcia:** Najlepiej używać PNG z przezroczystym tłem - wyglądają lepiej na stronie

4. **Testowanie:** Zawsze testuj nowy produkt przed publikacją

5. **Backup:** Przed edycją `products.json` zrób kopię zapasową pliku

## Potrzebujesz pomocy?

Jeśli masz problemy z dodaniem produktu, sprawdź:
1. Czy nazwy plików są poprawne (małe litery, bez polskich znaków)
2. Czy ścieżki w JSON są poprawne
3. Czy plik JSON jest poprawnie sformatowany (użyj walidatora JSON online)
4. Czy wszystkie pliki zostały zapisane