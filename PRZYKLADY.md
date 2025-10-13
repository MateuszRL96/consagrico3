# 📚 Przykłady - Dodawanie Produktów

## 🎯 Przykład 1: Prosty Herbicyd

### Dane produktu:
- Nazwa: AGRIMAX 500
- Kategoria: Herbicyd
- Rozmiary: 1L, 5L, 20L

### Krok po kroku:

#### 1. Utwórz folder
```
/public/produkty/agrimax-500/
```

#### 2. Dodaj zdjęcia
```
/public/produkty/agrimax-500/images/
├── agrimax-500-1l.png
├── agrimax-500-5l.png
└── agrimax-500-20l.png
```

#### 3. Dodaj dokumenty
```
/public/produkty/agrimax-500/documents/
├── etykieta.pdf
└── karta-charakterystyki.pdf
```

#### 4. Dodaj do products.json
```json
{
  "id": "agrimax-500",
  "name": "AGRIMAX 500",
  "slug": "agrimax-500",
  "description": "Skuteczny herbicyd do zwalczania chwastów jednoliściennych i dwuliściennych.",
  "category": "herbicydy",
  "ufi": "TH00-Y0W5-D00X-SY0S",
  "type": "Herbicyd",
  "images": {
    "1l": "/produkty/agrimax-500/images/agrimax-500-1l.png",
    "5l": "/produkty/agrimax-500/images/agrimax-500-5l.png",
    "20l": "/produkty/agrimax-500/images/agrimax-500-20l.png"
  },
  "documents": {
    "etykieta": "/produkty/agrimax-500/documents/etykieta.pdf",
    "karta": "/produkty/agrimax-500/documents/karta-charakterystyki.pdf"
  },
  "sizes": ["1l", "5l", "20l"],
  "properties": [
    "Szybkie działanie",
    "Długotrwały efekt",
    "Bezpieczny dla upraw",
    "Łatwa aplikacja"
  ],
  "safety": {
    "short": "Stosować rękawice ochronne i odzież ochronną. Unikać kontaktu ze skórą i oczami.",
    "detailed": "W przypadku kontaktu ze skórą przemyć dużą ilością wody. W przypadku kontaktu z oczami płukać przez 15 minut."
  },
  "composition": {
    "activeSubstance": "Glifosat",
    "concentration": "500 g/l",
    "form": "Emulsja koncentrat",
    "additives": "Emulgatory, stabilizatory"
  }
}
```

---

## 🎯 Przykład 2: Fungicyd

### Dane produktu:
- Nazwa: FUNGIPROTECT PLUS
- Kategoria: Fungicyd
- Rozmiary: 1L, 5L, 20L

### Wpis w products.json:
```json
{
  "id": "fungiprotect-plus",
  "name": "FUNGIPROTECT PLUS",
  "slug": "fungiprotect-plus",
  "description": "Zaawansowany fungicyd do ochrony roślin przed chorobami grzybowymi.",
  "category": "fungicydy",
  "ufi": "TH00-Y0W5-D00X-SY0S",
  "type": "Fungicyd",
  "images": {
    "1l": "/produkty/fungiprotect-plus/images/fungiprotect-plus-1l.png",
    "5l": "/produkty/fungiprotect-plus/images/fungiprotect-plus-5l.png",
    "20l": "/produkty/fungiprotect-plus/images/fungiprotect-plus-20l.png"
  },
  "documents": {
    "etykieta": "/produkty/fungiprotect-plus/documents/etykieta.pdf",
    "karta": "/produkty/fungiprotect-plus/documents/karta-charakterystyki.pdf"
  },
  "sizes": ["1l", "5l", "20l"],
  "properties": [
    "Skuteczna ochrona przed chorobami grzybowymi",
    "Długotrwałe działanie",
    "Bezpieczny dla roślin",
    "Odporność na zmywanie"
  ],
  "safety": {
    "short": "Stosować rękawice ochronne i odzież ochronną. Unikać kontaktu ze skórą i oczami.",
    "detailed": "W przypadku kontaktu ze skórą przemyć dużą ilością wody. W przypadku kontaktu z oczami płukać przez 15 minut."
  },
  "composition": {
    "activeSubstance": "Tebukonazol",
    "concentration": "250 g/l",
    "form": "Emulsja koncentrat",
    "additives": "Emulgatory, stabilizatory"
  }
}
```

---

## 🎯 Przykład 3: Insektycyd

### Dane produktu:
- Nazwa: INSECTO GUARD
- Kategoria: Insektycyd
- Rozmiary: 1L, 5L, 20L

### Wpis w products.json:
```json
{
  "id": "insecto-guard",
  "name": "INSECTO GUARD",
  "slug": "insecto-guard",
  "description": "Skuteczny insektycyd do zwalczania szkodliwych owadów w uprawach.",
  "category": "insektycydy",
  "ufi": "TH00-Y0W5-D00X-SY0S",
  "type": "Insektycyd",
  "images": {
    "1l": "/produkty/insecto-guard/images/insecto-guard-1l.png",
    "5l": "/produkty/insecto-guard/images/insecto-guard-5l.png",
    "20l": "/produkty/insecto-guard/images/insecto-guard-20l.png"
  },
  "documents": {
    "etykieta": "/produkty/insecto-guard/documents/etykieta.pdf",
    "karta": "/produkty/insecto-guard/documents/karta-charakterystyki.pdf"
  },
  "sizes": ["1l", "5l", "20l"],
  "properties": [
    "Szybkie działanie kontaktowe",
    "Skuteczność przeciwko wielu gatunkom owadów",
    "Długotrwała ochrona",
    "Bezpieczny dla roślin"
  ],
  "safety": {
    "short": "Stosować rękawice ochronne i odzież ochronną. Unikać kontaktu ze skórą i oczami.",
    "detailed": "W przypadku kontaktu ze skórą przemyć dużą ilością wody. W przypadku kontaktu z oczami płukać przez 15 minut."
  },
  "composition": {
    "activeSubstance": "Lambda-cyhalotryna",
    "concentration": "100 g/l",
    "form": "Emulsja koncentrat",
    "additives": "Emulgatory, stabilizatory"
  }
}
```

---

## 🎯 Przykład 4: Adiuwant

### Dane produktu:
- Nazwa: SPRAYADD PRO
- Kategoria: Adiuwant
- Rozmiary: 1L, 5L, 20L

### Wpis w products.json:
```json
{
  "id": "sprayadd-pro",
  "name": "SPRAYADD PRO",
  "slug": "sprayadd-pro",
  "description": "Profesjonalny adiuwant poprawiający skuteczność środków ochrony roślin.",
  "category": "aduiwanty",
  "ufi": "TH00-Y0W5-D00X-SY0S",
  "type": "Adiuwant",
  "images": {
    "1l": "/produkty/sprayadd-pro/images/sprayadd-pro-1l.png",
    "5l": "/produkty/sprayadd-pro/images/sprayadd-pro-5l.png",
    "20l": "/produkty/sprayadd-pro/images/sprayadd-pro-20l.png"
  },
  "documents": {
    "etykieta": "/produkty/sprayadd-pro/documents/etykieta.pdf",
    "karta": "/produkty/sprayadd-pro/documents/karta-charakterystyki.pdf"
  },
  "sizes": ["1l", "5l", "20l"],
  "properties": [
    "Zwiększa przyczepność cieczy użytkowej",
    "Poprawia zwilżenie powierzchni roślin",
    "Redukuje znoszenie cieczy",
    "Zwiększa penetrację środków ochrony roślin"
  ],
  "safety": {
    "short": "Stosować rękawice ochronne i odzież ochronną. Unikać kontaktu ze skórą i oczami.",
    "detailed": "W przypadku kontaktu ze skórą przemyć dużą ilością wody. W przypadku kontaktu z oczami płukać przez 15 minut."
  },
  "composition": {
    "activeSubstance": "Olej roślinny",
    "concentration": "84%",
    "form": "Emulsja koncentrat",
    "additives": "Emulgatory"
  }
}
```

---

## 🎯 Przykład 5: Produkt z nazwą zawierającą cyfry i myślniki

### Dane produktu:
- Nazwa: AGRI-TECH 2000 EC
- Kategoria: Herbicyd
- Rozmiary: 1L, 5L, 20L

### Slug: `agri-tech-2000-ec`

### Struktura folderów:
```
/public/produkty/agri-tech-2000-ec/
├── images/
│   ├── agri-tech-2000-ec-1l.png
│   ├── agri-tech-2000-ec-5l.png
│   └── agri-tech-2000-ec-20l.png
└── documents/
    ├── etykieta.pdf
    └── karta-charakterystyki.pdf
```

### Wpis w products.json:
```json
{
  "id": "agri-tech-2000-ec",
  "name": "AGRI-TECH 2000 EC",
  "slug": "agri-tech-2000-ec",
  "description": "Nowoczesny herbicyd nowej generacji z zaawansowaną technologią.",
  "category": "herbicydy",
  "ufi": "TH00-Y0W5-D00X-SY0S",
  "type": "Herbicyd",
  "images": {
    "1l": "/produkty/agri-tech-2000-ec/images/agri-tech-2000-ec-1l.png",
    "5l": "/produkty/agri-tech-2000-ec/images/agri-tech-2000-ec-5l.png",
    "20l": "/produkty/agri-tech-2000-ec/images/agri-tech-2000-ec-20l.png"
  },
  "documents": {
    "etykieta": "/produkty/agri-tech-2000-ec/documents/etykieta.pdf",
    "karta": "/produkty/agri-tech-2000-ec/documents/karta-charakterystyki.pdf"
  },
  "sizes": ["1l", "5l", "20l"],
  "properties": [
    "Zaawansowana technologia",
    "Wysoka skuteczność",
    "Długotrwałe działanie",
    "Łatwa aplikacja"
  ],
  "safety": {
    "short": "Stosować rękawice ochronne i odzież ochronną. Unikać kontaktu ze skórą i oczami.",
    "detailed": "W przypadku kontaktu ze skórą przemyć dużą ilością wody. W przypadku kontaktu z oczami płukać przez 15 minut."
  },
  "composition": {
    "activeSubstance": "Substancja aktywna",
    "concentration": "2000 g/l",
    "form": "Emulsja koncentrat",
    "additives": "Emulgatory, stabilizatory"
  }
}
```

---

## 📝 Wskazówki z przykładów

### Nazewnictwo:
- Używaj małych liter w slug'ach
- Zachowaj myślniki w nazwach (np. `agri-tech-2000-ec`)
- Cyfry są dozwolone w slug'ach

### Ścieżki:
- Zawsze zaczynaj od `/produkty/`
- Używaj tego samego slug'a w całej ścieżce
- Zachowaj spójność nazw plików

### Opisy:
- Opis powinien być krótki (1-2 zdania)
- Właściwości powinny być konkretne
- Informacje o bezpieczeństwie powinny być jasne

### Skład:
- Podaj nazwę substancji aktywnej
- Podaj stężenie (np. "500 g/l", "84%")
- Podaj formę (np. "Emulsja koncentrat")

---

## ✅ Checklist dla każdego przykładu

Przed dodaniem produktu sprawdź:

- [ ] Folder ma poprawną nazwę (slug)
- [ ] Wszystkie 3 zdjęcia są dodane
- [ ] Oba PDFy są dodane
- [ ] Wpis w products.json jest kompletny
- [ ] Wszystkie ścieżki są poprawne
- [ ] Plik JSON jest poprawnie sformatowany
- [ ] Produkt wyświetla się na stronie

---

## 🎯 Podsumowanie

**Kluczowe punkty:**
1. Każdy produkt ma swój folder
2. Nazwy plików muszą być spójne
3. Ścieżki w JSON muszą być poprawne
4. Wszystkie pola muszą być wypełnione
5. JSON musi być poprawnie sformatowany

**Czas potrzebny:** ~5-10 minut na produkt

**Trudność:** ⭐⭐☆☆☆ (Łatwe)

---

**Potrzebujesz więcej przykładów?**
Zobacz istniejące produkty w pliku `/public/produkty/products.json`