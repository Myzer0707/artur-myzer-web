# BRAND GUIDELINES — Wytyczne brandowe Myzer

Aktualizacja: 19.03.2026
Zrodlo: Brand Book Myzer VMT (35 stron) + Myzer Brand Guidelines (6 stron)
Flipbook: https://myzervmt.aflip.in/myzerbrand.html

## Kolory

### Paleta podstawowa (z Brand Book, oficjalne wartosci Pantone)

| Kolor | Pantone | CMYK | RGB | Hex | RAL | Zastosowanie |
|-------|---------|------|-----|-----|-----|-------------|
| **Myzer Dark** | 7547 C | 85/70/50/80 | 20, 26, 34 | `#141A22` | 7021 | Tlo glowne, naglowki, tekst |
| **Myzer Orange** | 158 C | 0/78/84/0 | 235, 93, 48 | `#EB5D30` | 2003 | Akcenty, CTA, wyroznienia |
| **Myzer Grey** | Cool Gray 1 C | 0/0/0/5 | 243, 243, 244 | `#F3F3F4` | — | Tla jasne, sekcje, karty |
| **Myzer Black** | Process Black | 0/0/0/100 | 0, 0, 0 | `#000000` | 9005 | Tekst, wersje achromatyczne |

### Paleta uzupelniajaca (dane, wykresy — NIE w materialach wizerunkowych)

| Kolor | Pantone | CMYK | RGB | Hex |
|-------|---------|------|-----|-----|
| **Myzer Yellow** | 605 C | 0/0/100/10 | 236, 220, 0 | `#ECDC00` |
| **Myzer Orange Alt** | 158 C | 0/60/100/0 | 245, 130, 32 | `#F58220` |
| **Myzer Green** | 355 C | 85/0/100/0 | 11, 175, 77 | `#0BAF4D` |
| **Myzer Navy** | 308 C | 100/0/0/50 | 0, 105, 145 | `#006991` |
| **Myzer Red** | 187 | 8/100/79/28 | 167, 25, 48 | `#A71930` |

### Szarosci dodatkowe

| Kolor | Pantone | RGB | Hex |
|-------|---------|-----|-----|
| Grey Medium | 431 C | 75, 93, 107 | `#4B5D6B` |
| Grey Cool | Cool Grey 8 C | 139, 141, 142 | `#8B8D8E` |
| Blue Grey | 5425 C | 125, 154, 170 | `#7D9AAA` |

### CSS Quick Reference
```css
:root {
  --myzer-dark: #141A22;
  --myzer-orange: #EB5D30;
  --myzer-grey: #F3F3F4;
  --myzer-black: #000000;
  --myzer-yellow: #ECDC00;
  --myzer-green: #0BAF4D;
  --myzer-navy: #006991;
  --myzer-red: #A71930;
  --font-primary: 'Soleto', 'Montserrat', sans-serif;
  --font-secondary: 'Trebuchet MS', sans-serif;
}
```

## Typografia

### Font podstawowy: Soleto (z Brand Book)

| Wariant | Zastosowanie |
|---------|-------------|
| **Soleto Light** | Teksty opisowe, body copy |
| **Soleto Regular** | Tekst standardowy |
| **Soleto Medium** | Podtytuly, wyroznienia |
| **Soleto Bold** | Naglowki, tytuly, CTA |

### Font uzupelniajacy: Trebuchet MS
Stosowac gdy Soleto niedostepny (MS Office, email, dokumenty systemowe).

### Fallbacki web
| Zastosowanie | Font | Fallback |
|-------------|------|---------|
| **Primary (web)** | Soleto | Montserrat, Poppins, sans-serif |
| **Office** | Trebuchet MS | Calibri, Arial |
| **Kod** | JetBrains Mono | Consolas, monospace |

### Hierarchia naglowkow
- H1: 32-40px, Soleto Bold, Myzer Dark
- H2: 24-28px, Soleto Medium, Myzer Dark
- H3: 18-20px, Soleto Medium, Myzer Dark
- Body: 14-16px, Soleto Regular, #333333
- Caption: 12px, Soleto Light, Grey Medium

## Logo

### Wersje (z Brand Book)
- **Chromatyczne** (kolorowe) — preferowane, stosowac najczesciej
- **Chromatyczne negatyw** — na ciemnych tlach
- **Achromatyczne** (czarno-biale) — gdy brak koloru
- **Achromatyczne negatyw** — biale na ciemnym tle

### Zakazy
- Niewlasciwe proporcje (rozciaganie)
- Niewlasciwe kolory (inne niz firmowe)
- Dodatkowe efekty (cienie, gradienty)
- Obrys logo
- Tlo o nieodpowiednim kontrascie
- Mala rozdzielczosc plikow

## Stala wizualna (Key Visual)
Key visual = wykadrowany sygnet z logo. Stosowac jako element dekoracyjny w materialach.
Kadrowanie dowolne — dopasowac do publikacji zachowujac kompozycje i czytelnosc.

## Ikony
Styl liniowy (outline), spojna grubosc linii. Do opisow produktow i materialow reklamowych.

## Pliki zrodlowe
| Zasob | Lokalizacja |
|-------|-------------|
| Brand Book (35 stron) | Google Drive → Brand book Myzer VMT |
| Brand Book online | https://myzervmt.aflip.in/myzerbrand.html |
| Canva Brand Kit | ID: kAGQoKSy5RU |

## Ton komunikacji

### Ogolne zasady
- **Profesjonalny** — B2B, nie B2C. Mowimy do decydentow w firmach.
- **Konkretny** — liczby, parametry, fakty. Nie "najlepszy na rynku" tylko "czas montazu: 2h"
- **Bez pustych obietnic** — nie obiecuj czego nie mozesz dostarczyc
- **Kompetentny** — pokaz ze znasz branze klienta
- **Dwujezyczny** — PL/DE jako standard, EN opcjonalnie

### Czego unikac
- Superlatywow bez pokrycia ("lider rynku", "rewolucyjny")
- Zargonu AI/tech w komunikacji z klientami produkcyjnymi
- Ogolnikow ("optymalizujemy procesy") — zawsze konkrety
- Agresywnej sprzedazy — budujemy relacje, nie naciskamy

## Wytyczne per projekt

### Myzer Intra + VMT
- Ton: techniczny, inzynierski, LEAN/5S terminologia
- Jezyki: PL + DE (glowne rynki)
- Klient: kierownik produkcji, dyrektor operacyjny
- USP: Made in Poland, customizacja, szybka dostawa
- Slowa kluczowe: intralogistyka, systemy rurowe, AGV, milkrun, 5S, lean

### Alufance
- Ton: premium, estetyczny, jakosciowy
- Jezyki: PL (glowny), DE (eksport)
- Klient B2C: wlasciciel domu 200k+ PLN. Klient B2B: deweloper, architekt
- USP: aluminium > PVC (trwalosc, estetyka, zero konserwacji), dowolny RAL
- Slowa kluczowe: ogrodzenia aluminiowe, premium, nowoczesne, bramy, przesla

### Mayhpi Costa del Sol
- Ton: lifestyle, aspiracyjny, cieplo i slonce
- Jezyki: PL + DE + EN
- Klient: zamozny Europejczyk szukajacy zycia na poludniu
- USP: nie metry kwadratowe — styl zycia. Osobisty concierge.
- Slowa kluczowe: Costa del Sol, nieruchomosci Hiszpania, luxury living

### AI Lead Generator (usluga)
- Ton: data-driven, ROI-focused, case studies
- Jezyki: PL (glowny)
- Klient: firma B2B bez systemu lead generation
- USP: kompletny system (nie narzedzie) — od bazy przez outreach po CRM
- Slowa kluczowe: generowanie leadow, B2B, automatyzacja sprzedazy, AI
