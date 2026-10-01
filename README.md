# Nybäddat Home – webbplats

Färdig statisk webbplats med 13 HTML-filer, CSS, JavaScript, originalbilder från företagets webbplats och lokalt typsnitt.

## Publicera på GitHub Pages eller webbhotell
Ladda upp allt INNEHÅLL i `dist` till publiceringsmappens rot. `index.html` ska ligga direkt i roten, med `assets` bredvid. Byt inte namn på filerna eller bildmappen. Alla interna länkar fungerar även under ett GitHub-projekts undermapp.

GitHub: Settings → Pages → Deploy from a branch → välj branch och /(root). På webbhotell: lägg samma filer i public_html. Det behövs ingen byggprocess.

Innan den slutliga egna domänen används, byt webbplatsadressen i canonical/og:url, JSON-LD, robots.txt och sitemap.xml. I källan görs detta genom att ändra ORIGIN i build.py och köra den med Python/Pillow. Det krävs inte för att visa sidan.

## Vad som fungerar
Kategorisidor, varumärkesöversikt, presentguide, responsiv meny, tangentbordsnavigation, öppettider, vägbeskrivning, telefon- och e-postlänkar samt kopiering av e-postadress. Det är en webbplats för en fysisk butik; ingen kopplad kassa eller lagerdatabas.

## Innehåll
Kontakt, sortiment och bilder hämtade från företagets webbplats, kontaktuppgifter även kontrollerade mot Åkersberga Centrum 2026-10-01. Bildkällor i research/asset-sources.json. Sortiment och öppettider behöver hållas aktuella av butiken. Historiska kampanjer och tidigare ägare har inte presenterats som aktuella.
