
const CALIX_EXERCISES = [
  // =========================
  // PUSH - SPINTA
  // =========================
  ["Push-up","Spinta","Principiante","Petto, tricipiti, core","Nessuna","Spinta orizzontale a corpo libero","3×8-15","Mantieni il corpo allineato.","Knee Push-up","Diamond Push-up"],
  ["Knee Push-up","Spinta","Principiante","Petto, tricipiti","Nessuna","Push-up facilitato sulle ginocchia","3×10-15","Non incurvare la schiena.","Wall Push-up","Push-up"],
  ["Incline Push-up","Spinta","Principiante","Petto, tricipiti","Panca o supporto","Push-up con mani rialzate","3×10-15","Controlla la discesa.","Wall Push-up","Push-up"],
  ["Decline Push-up","Spinta","Intermedio","Petto alto, spalle","Supporto","Push-up con piedi rialzati","3×8-12","Evita di inarcare la schiena.","Push-up","Pike Push-up"],
  ["Diamond Push-up","Spinta","Intermedio","Tricipiti, petto","Nessuna","Push-up con mani ravvicinate","3×6-12","Gomiti controllati.","Push-up","Archer Push-up"],
  ["Wide Push-up","Spinta","Principiante","Petto","Nessuna","Push-up a presa larga","3×8-15","Non allargare eccessivamente le braccia.","Push-up","Archer Push-up"],
  ["Archer Push-up","Spinta","Avanzato","Petto, tricipiti","Nessuna","Spinta prevalentemente su un braccio","3×4-8","Distribuisci il carico gradualmente.","Wide Push-up","One Arm Push-up"],
  ["Pseudo Planche Push-up","Spinta","Avanzato","Spalle, petto, polsi","Nessuna","Push-up con inclinazione in avanti","3×5-10","Aumenta l'inclinazione progressivamente.","Push-up","Tuck Planche"],
  ["Pike Push-up","Spinta","Intermedio","Spalle, tricipiti","Nessuna","Spinta verticale in posizione a V","3×6-12","Mantieni il bacino alto.","Push-up","Handstand Push-up"],
  ["Elevated Pike Push-up","Spinta","Avanzato","Spalle, tricipiti","Supporto","Pike push-up con piedi rialzati","3×5-10","Controlla la testa nella discesa.","Pike Push-up","Handstand Push-up"],
  ["Handstand Push-up","Spinta","Elite","Spalle, tricipiti","Parete","Piegamento in verticale","3×3-8","Usa solo una progressione già controllata.","Pike Push-up","Freestanding HSPU"],
  ["Bench Dips","Spinta","Principiante","Tricipiti","Panca","Estensione dei gomiti su supporto","2×8-12","Evita discese profonde se danno fastidio.","Close Push-up","Dips"],
  ["Parallel Bar Dips","Spinta","Intermedio","Petto, tricipiti","Parallele","Piegamento sulle parallele","3×5-10","Scendi solo nel range controllato.","Bench Dips","Weighted Dips"],
  ["Straight Bar Dips","Spinta","Avanzato","Petto, tricipiti","Sbarra","Dip sopra la sbarra","3×4-8","Mantieni il controllo della transizione.","Dips","Muscle-up"],
  ["Korean Dips","Spinta","Elite","Petto, spalle, tricipiti","Sbarra","Dip con movimento dietro la sbarra","2×3-6","Richiede mobilità e preparazione specifica.","Dips","Korean Dip"],
  ["Wall Handstand Hold","Spinta","Intermedio","Spalle, core","Parete","Tenuta verticale assistita","3×20-40 sec","Mantieni una linea stabile.","Pike Hold","Handstand"],
  ["Planche Lean","Spinta","Intermedio","Spalle, polsi, core","Nessuna","Inclinazione in avanti in appoggio","3×10-20 sec","Non forzare i polsi.","Pseudo Planche Push-up","Tuck Planche"],
  ["Tuck Planche","Spinta","Elite","Spalle, core, dorsali","Parallettes opzionali","Tenuta planche raccolta","3×5-10 sec","Avanza solo mantenendo controllo.","Planche Lean","Advanced Tuck Planche"],
  ["One Arm Push-up","Spinta","Elite","Petto, tricipiti, core","Nessuna","Push-up a un braccio","3×2-5","Richiede una solida base di forza.","Archer Push-up","One Arm Push-up"],
  ["Clap Push-up","Spinta","Avanzato","Petto, tricipiti","Nessuna","Push-up esplosivo","3×3-6","Atterra con controllo.","Push-up","Explosive Push-up"],

  // =========================
  // PULL - TRAZIONE
  // =========================
  ["Dead Hang","Trazione","Principiante","Presa, avambracci","Sbarra","Sospensione alla sbarra","3×15-30 sec","Mantieni una presa sicura.","Active Hang","Pull-up"],
  ["Active Hang","Trazione","Principiante","Dorsali, scapole","Sbarra","Depressione scapolare in sospensione","3×8-12","Non piegare i gomiti.","Dead Hang","Scapular Pull-up"],
  ["Scapular Pull-up","Trazione","Principiante","Dorsali, trapezio","Sbarra","Movimento scapolare alla sbarra","3×8-12","Movimento piccolo e controllato.","Active Hang","Pull-up"],
  ["Australian Pull-up","Trazione","Principiante","Dorsali, bicipiti","Sbarra bassa","Trazione orizzontale","3×8-15","Mantieni il corpo allineato.","Incline Row","Pull-up"],
  ["Inverted Row","Trazione","Principiante","Dorsali, bicipiti","Sbarra","Trazione orizzontale","3×8-12","Avvicina il petto alla sbarra.","Australian Pull-up","Archer Row"],
  ["Pull-up","Trazione","Intermedio","Dorsali, bicipiti","Sbarra","Trazione verticale prona","3×3-8","Evita slanci e oscillazioni.","Negative Pull-up","Chest-to-Bar"],
  ["Chin-up","Trazione","Intermedio","Bicipiti, dorsali","Sbarra","Trazione verticale supina","3×4-10","Non perdere il controllo in discesa.","Negative Chin-up","Weighted Chin-up"],
  ["Neutral Grip Pull-up","Trazione","Intermedio","Dorsali, bicipiti","Sbarra","Trazione a presa neutra","3×4-10","Mantieni i polsi neutrali.","Assisted Pull-up","Pull-up"],
  ["Negative Pull-up","Trazione","Principiante","Dorsali, bicipiti","Sbarra","Discesa controllata dalla posizione alta","3×3-5","Usa una discesa graduale.","Jumping Pull-up","Pull-up"],
  ["Archer Pull-up","Trazione","Avanzato","Dorsali, bicipiti","Sbarra","Trazione con carico laterale","3×2-5","Alterna i lati senza slanci.","Pull-up","One Arm Pull-up progression"],
  ["Chest-to-Bar Pull-up","Trazione","Avanzato","Dorsali, bicipiti","Sbarra","Trazione fino al petto","3×3-6","Mantieni il movimento pulito.","Pull-up","Explosive Pull-up"],
  ["Explosive Pull-up","Trazione","Avanzato","Dorsali, bicipiti","Sbarra","Trazione esplosiva","3×3-5","Non sacrificare il controllo.","Chest-to-Bar","Muscle-up"],
  ["L-sit Pull-up","Trazione","Avanzato","Dorsali, core","Sbarra","Pull-up con gambe in L","3×3-6","Mantieni la posizione delle gambe.","Pull-up","L-sit"],
  ["Typewriter Pull-up","Trazione","Elite","Dorsali, bicipiti","Sbarra","Spostamento laterale alla sbarra","2×2-4","Usa un range controllato.","Archer Pull-up","One Arm Pull-up progression"],
  ["Commando Pull-up","Trazione","Intermedio","Dorsali, bicipiti","Sbarra","Trazione con corpo laterale alla sbarra","3×4-8","Alterna il lato della testa.","Chin-up","Archer Pull-up"],
  ["Towel Hang","Trazione","Intermedio","Presa, avambracci","Asciugamano e sbarra","Tenuta di presa su asciugamano","2×10-20 sec","Usa un supporto stabile.","Dead Hang","Towel Pull-up"],
  ["Muscle-up","Trazione","Elite","Dorsali, petto, tricipiti","Sbarra","Transizione dalla trazione al dip","3×1-3","Richiede forza e tecnica consolidate.","Explosive Pull-up","Strict Muscle-up"],
  ["Front Lever Tuck","Trazione","Avanzato","Dorsali, core","Sbarra","Tenuta raccolta orizzontale","3×5-10 sec","Mantieni bacino e spalle controllati.","Inverted Hang","Advanced Tuck"],
  ["Front Lever Raises","Trazione","Elite","Dorsali, core","Sbarra","Sollevamento verso front lever","3×3-5","Non usare slanci incontrollati.","Tuck Front Lever","Front Lever"],
  ["One Arm Scapular Pull-up","Trazione","Elite","Dorsali, presa","Sbarra","Controllo scapolare unilaterale","2×3-5","Usa assistenza se necessario.","Scapular Pull-up","Archer Pull-up"],

  // =========================
  // LEGS - GAMBE
  // =========================
  ["Bodyweight Squat","Gambe","Principiante","Quadricipiti, glutei","Nessuna","Squat a corpo libero","3×12-20","Ginocchia in linea con i piedi.","Box Squat","Jump Squat"],
  ["Box Squat","Gambe","Principiante","Quadricipiti, glutei","Sedia stabile","Squat verso un supporto","3×10-15","Tocca il supporto senza lasciarti cadere.","Assisted Squat","Bodyweight Squat"],
  ["Reverse Lunge","Gambe","Principiante","Quadricipiti, glutei","Nessuna","Affondo indietro","3×8-12 per lato","Mantieni equilibrio e controllo.","Split Squat","Bulgarian Split Squat"],
  ["Forward Lunge","Gambe","Principiante","Quadricipiti, glutei","Nessuna","Affondo in avanti","3×8-12 per lato","Passo stabile e controllato.","Reverse Lunge","Walking Lunge"],
  ["Walking Lunge","Gambe","Intermedio","Quadricipiti, glutei","Nessuna","Affondi camminati","3×10 per lato","Evita oscillazioni del busto.","Reverse Lunge","Jump Lunge"],
  ["Bulgarian Split Squat","Gambe","Intermedio","Quadricipiti, glutei","Supporto stabile","Squat unilaterale con piede posteriore rialzato","3×8-12 per lato","Supporto stabile e profondità controllata.","Split Squat","Pistol Squat"],
  ["Split Squat","Gambe","Principiante","Quadricipiti, glutei","Nessuna","Squat in posizione sfalsata","3×10 per lato","Mantieni il busto stabile.","Reverse Lunge","Bulgarian Split Squat"],
  ["Step-up","Gambe","Principiante","Quadricipiti, glutei","Gradino stabile","Salita su rialzo","3×8-12 per lato","Non spingerti con il piede posteriore.","Squat","High Step-up"],
  ["Pistol Squat","Gambe","Elite","Quadricipiti, glutei, core","Nessuna","Squat completo su una gamba","3×3-6 per lato","Usa una progressione assistita se serve.","Assisted Pistol","Full Pistol"],
  ["Assisted Pistol Squat","Gambe","Intermedio","Quadricipiti, glutei","Supporto stabile","Pistol squat con assistenza","3×5-8 per lato","Riduci l'assistenza gradualmente.","Box Pistol","Pistol Squat"],
  ["Shrimp Squat","Gambe","Avanzato","Quadricipiti, glutei","Nessuna","Squat unilaterale con gamba posteriore raccolta","3×4-8 per lato","Mantieni equilibrio e controllo.","Split Squat","Shrimp Squat"],
  ["Single Leg Glute Bridge","Gambe","Intermedio","Glutei, posteriori coscia","Nessuna","Estensione dell'anca unilaterale","3×10 per lato","Evita di ruotare il bacino.","Glute Bridge","Single Leg Hip Thrust"],
  ["Glute Bridge","Gambe","Principiante","Glutei, posteriori coscia","Nessuna","Estensione dell'anca da terra","3×12-20","Non iperestendere la schiena.","Hip Raise","Single Leg Glute Bridge"],
  ["Nordic Curl","Gambe","Elite","Posteriori coscia","Supporto per piedi","Flessione eccentrica del ginocchio","2×3-5","Progressione assistita e controllo.","Hamstring Bridge","Assisted Nordic Curl"],
  ["Hamstring Bridge","Gambe","Principiante","Posteriori coscia, glutei","Nessuna","Ponte con talloni a terra","3×10-15","Mantieni il bacino stabile.","Glute Bridge","Nordic Curl"],
  ["Standing Calf Raise","Gambe","Principiante","Polpacci","Nessuna","Sollevamento sui polpacci","3×15-20","Pausa breve in alto.","Seated Calf Raise","Single Leg Calf Raise"],
  ["Single Leg Calf Raise","Gambe","Intermedio","Polpacci","Supporto opzionale","Calf raise su una gamba","3×10-15","Movimento completo e controllato.","Calf Raise","Single Leg Calf Raise"],
  ["Wall Sit","Gambe","Principiante","Quadricipiti","Parete","Tenuta isometrica","3×20-45 sec","Schiena appoggiata e posizione confortevole.","Squat","Long Wall Sit"],
  ["Jump Squat","Gambe","Intermedio","Quadricipiti, glutei","Nessuna","Squat con salto","3×5-8","Atterra in modo morbido e controllato.","Squat","Jump Lunge"],
  ["Broad Jump","Gambe","Avanzato","Glutei, quadricipiti","Spazio libero","Salto in lungo da fermo","3×3-5","Atterra in equilibrio e interrompi se perdi controllo.","Squat","Broad Jump"],

  // =========================
  // CORE - ADDOME
  // =========================
  ["Plank","Core","Principiante","Addome, core","Nessuna","Tenuta in posizione prona","3×20-40 sec","Non lasciare cadere il bacino.","Knee Plank","Long Plank"],
  ["Side Plank","Core","Principiante","Obliqui, core","Nessuna","Tenuta laterale","3×15-30 sec per lato","Mantieni il bacino allineato.","Knee Side Plank","Star Side Plank"],
  ["Hollow Body Hold","Core","Intermedio","Addome, flessori anca","Nessuna","Tenuta hollow","3×15-30 sec","Lombare stabile e controllata.","Tuck Hollow Hold","Hollow Rock"],
  ["Dead Bug","Core","Principiante","Addome, stabilizzatori","Nessuna","Movimento alternato braccio-gamba","3×8-12 per lato","Muoviti lentamente.","Heel Tap","Hollow Body"],
  ["Reverse Crunch","Core","Principiante","Addome","Nessuna","Sollevamento del bacino","3×10-15","Evita lo slancio.","Dead Bug","Leg Raise"],
  ["Lying Leg Raise","Core","Intermedio","Addome, flessori anca","Nessuna","Sollevamento gambe da terra","3×8-12","Controlla la discesa.","Knee Raise","Strict Leg Raise"],
  ["Hanging Knee Raise","Core","Intermedio","Addome, presa","Sbarra","Sollevamento ginocchia in sospensione","3×8-12","Evita oscillazioni.","Reverse Crunch","Hanging Leg Raise"],
  ["Hanging Leg Raise","Core","Avanzato","Addome, flessori anca","Sbarra","Sollevamento gambe tese","3×5-10","Evita di usare slancio.","Hanging Knee Raise","Toes-to-Bar"],
  ["Toes-to-Bar","Core","Avanzato","Addome, presa","Sbarra","Sollevamento piedi fino alla sbarra","3×3-8","Controlla l'oscillazione.","Hanging Leg Raise","Strict Toes-to-Bar"],
  ["L-sit","Core","Avanzato","Addome, flessori anca, tricipiti","Parallele o supporti","Tenuta a gambe distese","3×5-15 sec","Spalle attive e gambe controllate.","Tuck L-sit","V-sit"],
  ["Tuck L-sit","Core","Intermedio","Addome, tricipiti","Parallele o supporti","Tenuta raccolta","3×10-20 sec","Mantieni il bacino sollevato.","Support Hold","L-sit"],
  ["V-up","Core","Intermedio","Addome","Nessuna","Sollevamento simultaneo busto e gambe","3×8-12","Evita movimenti bruschi.","Tuck-up","V-up"],
  ["Mountain Climber","Core","Principiante","Core, flessori anca","Nessuna","Alternanza ginocchia al petto","3×20-30 sec","Mantieni il busto stabile.","Plank","Cross-body Climber"],
  ["Dragon Flag Progression","Core","Elite","Addome, dorsali","Panca stabile","Progressione di tenuta e discesa","2×3-5","Procedi per livelli senza forzare la schiena.","Reverse Crunch","Dragon Flag"],
  ["Arch Hold","Core","Principiante","Lombari, glutei","Nessuna","Tenuta prona in estensione controllata","3×15-25 sec","Non forzare l'estensione lombare.","Bird Dog","Superman Hold"],

  // =========================
  // SKILLS - CONTROLLO CORPO
  // =========================
  ["Frog Stand","Skill","Principiante","Polsi, spalle, core","Nessuna","Equilibrio sulle mani con ginocchia appoggiate alle braccia","3×10-20 sec","Usa una superficie non scivolosa.","Bear Hold","Tuck Planche"],
  ["Handstand","Skill","Avanzato","Spalle, core, polsi","Parete","Equilibrio verticale sulle mani","3×10-30 sec","Allena prima la linea al muro.","Wall Handstand","Freestanding Handstand"],
  ["Freestanding Handstand","Skill","Elite","Spalle, core, polsi","Nessuna","Verticale libera","5×tentativi controllati","Interrompi quando perdi la linea.","Wall Handstand","Handstand Walk"],
  ["Back Lever Tuck","Skill","Avanzato","Dorsali, spalle, core","Sbarra","Tenuta raccolta in back lever","3×5-10 sec","Usa una progressione adeguata alla tua mobilità.","Skin the Cat","Advanced Tuck"],
  ["Human Flag Progression","Skill","Elite","Obliqui, spalle, dorsali","Spalliera stabile","Progressione laterale di forza e controllo","3×5-10 sec","Richiede preparazione specifica e supporto stabile.","Side Plank","Human Flag"],
  ["Skin the Cat","Skill","Avanzato","Spalle, dorsali, core","Anelli o sbarra","Rotazione controllata delle spalle","2×3-5","Richiede mobilità e controllo; non forzare.","Active Hang","German Hang progression"],
  ["Handstand Shoulder Tap","Skill","Elite","Spalle, core","Parete","Trasferimento controllato del peso in verticale","3×3-6 per lato","Inizia con supporto stabile.","Wall Handstand","Freestanding Shoulder Tap"],
  ["Planche Lean Hold","Skill","Intermedio","Spalle, core","Nessuna","Tenuta inclinata in avanti","3×10-20 sec","Avanza gradualmente.","Planche Lean","Tuck Planche"],
  ["Advanced Tuck Planche","Skill","Elite","Spalle, core, dorsali","Parallettes","Tenuta planche raccolta avanzata","3×3-8 sec","Solo dopo controllo della tuck planche.","Tuck Planche","Straddle Planche"],
  ["Straddle Planche","Skill","Elite","Spalle, core, dorsali","Parallettes","Tenuta planche a gambe divaricate","3×2-5 sec","Progressione di alta difficoltà.","Advanced Tuck","Full Planche"],
  ["Front Lever","Skill","Elite","Dorsali, core","Sbarra","Tenuta orizzontale","3×3-8 sec","Mantieni una progressione adatta al tuo livello.","Straddle Front Lever","Full Front Lever"],
  ["Back Lever","Skill","Elite","Spalle, dorsali, core","Sbarra","Tenuta orizzontale supina","3×3-8 sec","Richiede mobilità e progressione graduale.","Advanced Tuck","Full Back Lever"]
];

// Controllo dati: ogni esercizio deve avere 9 campi.
if (CALIX_EXERCISES.some(ex => ex.length !== 10)) {
  console.error("CALIX Library: esercizio con campi mancanti.");
}
