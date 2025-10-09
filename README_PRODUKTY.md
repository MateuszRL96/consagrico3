# 📦 System Zarządzania Produktami

## 🚀 Szybki Start

### Dodaj nowy produkt w 5 krokach:

1. **Skopiuj szablon**
   ```
   Skopiuj folder: /public/produkty/_SZABLON_PRODUKTU/
   Zmień nazwę na: nazwa-produktu
   ```

2. **Dodaj zdjęcia** (3 pliki PNG/JPG)
   ```
   /images/nazwa-produktu-1l.png
   /images/nazwa-produktu-5l.png
   /images/nazwa-produktu-20l.png
   ```

3. **Dodaj dokumenty** (2 pliki PDF)
   ```
   /documents/etykieta.pdf
   /documents/karta-charakterystyki.pdf
   ```

4. **Edytuj products.json**
   ```
   Otwórz: /public/produkty/products.json
   Dodaj wpis produktu (skopiuj szablon z instrukcji)
   ```

5. **Gotowe!** 🎉
   ```
   Odśwież stronę /produkty
   ```

---

## 📚 Dokumentacja

### Główne dokumenty:
- **[INSTRUKCJA_DODAWANIA_PRODUKTOW.md](./INSTRUKCJA_DODAWANIA_PRODUKTOW.md)** - Szczegółowa instrukcja krok po kroku
- **[NOWA_STRUKTURA_PRODUKTOW.md](./NOWA_STRUKTURA_PRODUKTOW.md)** - Dokumentacja techniczna systemu

### Pliki konfiguracyjne:
- **`/public/produkty/products.json`** - Główny plik z danymi produktów
- **`/public/produkty/_SZABLON_PRODUKTU/`** - Szablon do kopiowania

---

## 📁 Struktura

```
/public/produkty/
├── products.json              ← Edytujesz tutaj
├── _SZABLON_PRODUKTU/        ← Kopiujesz stąd
└── nazwa-produktu/           ← Twój produkt
    ├── images/
    │   ├── nazwa-produktu-1l.png
    │   ├── nazwa-produktu-5l.png
    │   └── nazwa-produktu-20l.png
    └── documents/
        ├── etykieta.pdf
        └── karta-charakterystyki.pdf
```

---

## ✅ Checklist

Przed dodaniem produktu sprawdź:

- [ ] Folder ma poprawną nazwę (slug)
- [ ] Dodane są wszystkie 3 zdjęcia
- [ ] Dodane są oba PDFy
- [ ] Produkt dodany do `products.json`
- [ ] Wszystkie ścieżki są poprawne
- [ ] Plik JSON jest poprawnie sformatowany
- [ ] Produkt wyświetla się na stronie

---

## 🎨 Kategorie

- `herbicydy` - 🔵 Niebieski
- `fungicydy` - 🟢 Zielony
- `insektycydy` - 🔴 Czerwony
- `aduiwanty` - 🟡 Żółty
- `inne` - 🟣 Fioletowy

---

## 💡 Wskazówki

1. Zawsze rób backup `products.json` przed edycją
2. Używaj tego samego slug'a wszędzie
3. Testuj produkt przed publikacją
4. Waliduj JSON online (jsonlint.com)

---

## 🆘 Pomoc

**Problem?** Sprawdź:
1. [INSTRUKCJA_DODAWANIA_PRODUKTOW.md](./INSTRUKCJA_DODAWANIA_PRODUKTOW.md)
2. Przykład w `/public/produkty/agricon-800/`
3. Konsolę przeglądarki (F12)

---

**Czas:** ~5-10 minut na produkt  
**Trudność:** ⭐⭐☆☆☆ (Łatwe)