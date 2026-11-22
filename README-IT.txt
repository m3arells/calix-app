CALIX — PROTOTIPO INIZIALE
==========================

CONTENUTO
- index.html: struttura dell'app
- styles.css: interfaccia dark/blue
- app.js: funzioni e salvataggio locale
- manifest.webmanifest + icon.svg: installazione PWA
- sw.js: cache offline di base

COME APRIRLA DAL SAMSUNG S23 ULTRA
1. Scarica ed estrai CALIX_project.zip sul telefono.
2. Per provarla come sito/PWA serve pubblicare questi file su un hosting HTTPS.
   Puoi usare GitHub Pages da Chrome mobile; per la prima configurazione è più comodo
   attivare "Sito desktop" nel menu di Chrome.
3. Dopo la pubblicazione, apri l'indirizzo HTTPS con Chrome.
4. Menu ⋮ > "Aggiungi a schermata Home" oppure "Installa app", se disponibile.

IMPORTANTE
- Questo è un prototipo funzionante lato client: workout, skill, record e planning
  vengono salvati nel localStorage del browser sul dispositivo.
- Day Planning accetta testo e, se il browser supporta Web Speech API, dettatura vocale.
  La generazione della checklist usa regole locali: NON è ancora collegata a un modello AI.
- Il riconoscimento vocale può richiedere connessione e permesso microfono.
- Per una vera IA conversazionale serve un backend HTTPS che custodisca la chiave API.
  Non inserire mai chiavi API segrete direttamente in app.js.
- Per ottenere un APK Android nativo/PWA confezionato, dopo la pubblicazione HTTPS
  possiamo usare PWABuilder. La generazione APK e la pubblicazione richiedono ulteriori passaggi.
- I dati salvati nel browser non sono sincronizzati tra dispositivi e possono andare persi
  se si cancellano i dati del sito: esportazione/cloud backup saranno sviluppi successivi.

PROSSIMO PASSO
Prima testiamo la PWA sul telefono. Poi aggiungiamo backend AI sicuro, backup e confezionamento APK.
