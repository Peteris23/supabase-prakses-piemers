# Tehniskās piezīmes (TECH_NOTES)

## Izmantotās tehnoloģijas

- **HTML** – lapas struktūra un saturs (`index.html`).
- **JavaScript** – loģika, kas pieslēdzas Supabase un ielādē datus (`script.js`).
- **Supabase** – Postgres datubāze mākonī un REST/JavaScript API datu nolasīšanai.
- **GitHub Pages** – projekta publiskā hostēšana kā statiska tīmekļa lapa.

## Svarīgie faili

- `index.html` – galvenā HTML lapa, kas tiek ielādēta GitHub Pages.
- `script.js` – JavaScript fails ar Supabase klientu un datu nolasīšanas funkciju.
- `PPS.md` – programmas prasību specifikācija.
- `USER_GUIDE.md` – lietotāja rokasgrāmata.
- `TECH_NOTES.md` – šis tehnisko piezīmju fails.
- `.env.example` (nav obligāts šajā projektā, bet ieteicams lielākiem projektiem) –
  piemērs, kur glabāt `SUPABASE_URL` un `SUPABASE_ANON_KEY` lokālai attīstībai.

Atgādinājums: īstās API atslēgas (`SUPABASE_ANON_KEY`, servisatslēgas u.c.) nevajag glabāt publiskos repozitorijos
bez vajadzības. Šajā mācību projektā tiek izmantota Supabase publiskā anon atslēga.

## Supabase pieslēguma kods

Supabase pieslēguma kods atrodas failā `script.js`.

- Tiek izveidots klients, izmantojot:
  - `SUPABASE_URL = "https://hpmvfhsulwydddvmplbp.supabase.co"`
  - `SUPABASE_ANON_KEY = "<anon key no Supabase API settings>"`
- Funkcija `loadData()` izsauc Supabase:
  - nolasa visus ierakstus no tabulas (piemēram, `tabula`) ar `select("*")`,
  - sakārto tos pēc lauka `created_at`,
  - ģenerē `<li>` elementus un ievieto tos `<ul id="data-list">` sarakstā.

## Iespējamie turpmākie uzlabojumi

- Pievienot formu jaunu ierakstu pievienošanai Supabase tabulai.
- Pievienot autentifikāciju ar Supabase Auth (piemēram, pierakstīšanos ar e‑pastu).
- Uzlabot datu attēlojumu (tabulas formāts, labāks datuma formāts, filtrēšana).
