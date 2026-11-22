const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem('calix_'+k))??d}catch{return d}};
const save=(k,v)=>localStorage.setItem('calix_'+k,JSON.stringify(v));
let workouts=load('workouts',[]),prs=load('prs',[]),goal=load('goal',null),skills=load('skills',{}),dayTasks=load('dayTasks',[]);
let filter='Tutti',timer=90,ticking=false,timerId=null,recognition=null;
const today=()=>new Date().toISOString().slice(0,10);
$('#w-date').value=today();$('#day-date').value=today();
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2300)}
function go(page){$$('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+page));$$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===page));window.scrollTo(0,0)}
$$('[data-page]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.page)));
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
function renderWorkouts(){
 const html=workouts.slice().reverse().map(w=>`<article class="card"><div class="card-top"><b>${esc(w.name)}</b><span class="tag">${w.date}</span></div><p>${esc(w.exercise)} · ${w.sets} serie × ${w.reps} · ${w.duration} min</p>${w.notes?`<p>${esc(w.notes)}</p>`:''}</article>`).join('');
 $('#workout-history').innerHTML=html||'Nessuna sessione per ora.';$('#recent-workouts').innerHTML=html?workouts.slice(-2).reverse().map(w=>`<article class="card"><b>${esc(w.name)}</b><p>${w.date} · ${w.duration} min</p></article>`).join(''):'Ancora nessun allenamento registrato.';
 $('#home-workouts').textContent=workouts.length;$('#home-minutes').textContent=workouts.reduce((a,w)=>a+Number(w.duration),0);$('#home-prs').textContent=prs.length;
 const recent=workouts.slice(-7);const max=Math.max(1,...recent.map(w=>Number(w.duration)));
 $('#progress-chart').innerHTML=recent.length?recent.map(w=>`<div class="bar-wrap"><div class="bar" style="height:${Math.max(8,Number(w.duration)/max*80)}px"></div><small>${w.date.slice(5)}</small></div>`).join(''):'<p class="muted small">Registra sessioni per visualizzare il grafico.</p>';
}
$('#workout-form').addEventListener('submit',e=>{e.preventDefault();workouts.push({name:$('#w-name').value.trim(),duration:+$('#w-duration').value,date:$('#w-date').value,exercise:$('#w-exercise').value.trim(),sets:+$('#w-sets').value,reps:+$('#w-reps').value,notes:$('#w-notes').value.trim()});save('workouts',workouts);e.target.reset();$('#w-date').value=today();$('#w-duration').value=45;$('#w-sets').value=3;$('#w-reps').value=8;renderWorkouts();toast('Workout salvato!')});
const skillInfo=[['Handstand',['Wall hold','Freestanding balance','Consistent hold','Handstand push-up progression']],['Planche',['Frog stand','Tuck planche','Advanced tuck','Straddle planche']],['Front Lever',['Tuck','Advanced tuck','One-leg','Straddle']],['Muscle Up',['Explosive pull-up','Chest-to-bar','Transition drill','Strict muscle-up']],['L-sit',['Tuck support','One-leg L-sit','Full L-sit','V-sit preparation']]];
function renderSkills(){$('#skill-list').innerHTML=skillInfo.map(([name,levels])=>{let n=skills[name]||0;return `<article class="card"><div class="card-top"><b>${name}</b><span class="tag">Level ${n+1}/${levels.length}</span></div><p>Progressione attuale: ${levels[n]}</p><select class="skill-select" data-skill="${name}">${levels.map((l,i)=>`<option value="${i}" ${i===n?'selected':''}>${i+1}. ${l}</option>`).join('')}</select></article>`}).join('');$$('[data-skill]').forEach(s=>s.addEventListener('change',()=>{skills[s.dataset.skill]=+s.value;save('skills',skills);renderSkills();toast('Progressione aggiornata')}))}
function renderLibrary() {
  const q = $('#exercise-search').value.toLowerCase();

  const arr = CALIX_EXERCISES.filter(x =>
    (filter === 'Tutti' || x[1] === filter) &&
    x.join(' ').toLowerCase().includes(q)
  );

  $('#exercise-library').innerHTML = arr.map(x => `
    <article class="card">
      <div class="card-top">
        <b>${esc(x[0])}</b>
        <span class="tag">${esc(x[1])}</span>
      </div>
      <p><b>Difficoltà:</b> ${esc(x[2])}</p>
      <p><b>Muscoli:</b> ${esc(x[3])}</p>
      <p><b>Attrezzatura:</b> ${esc(x[4])}</p>
      <p>${esc(x[5])}</p>
      <p><b>Serie e ripetizioni:</b> ${esc(x[6])}</p>
      <p><b>Tecnica:</b> ${esc(x[7])}</p>
      <p><b>Progressione precedente:</b> ${esc(x[8])}</p>
      <p><b>Progressione successiva:</b> ${esc(x[9])}</p>
    </article>
  `).join('') || '<div class="empty">Nessun esercizio trovato.</div>';
}{const q=$('#exercise-search').value.toLowerCase();const arr=exercises.filter(x=>(filter==='Tutti'||x[1]===filter)&&x.join(' ').toLowerCase().includes(q));$('#exercise-library').innerHTML=arr.map(x=>`<article class="card"><div class="card-top"><b>${x[0]}</b><span class="tag">${x[1]}</span></div><p>${x[2]}</p></article>`).join('')||'<div class="empty">Nessun esercizio trovato.</div>'}
$$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;$$('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));renderLibrary()}));$('#exercise-search').addEventListener('input',renderLibrary);
$('#goal-form').addEventListener('submit',e=>{e.preventDefault();goal={name:$('#goal-name').value,target:+$('#goal-target').value,unit:$('#goal-unit').value};save('goal',goal);renderGoal();toast('Obiettivo salvato')});
function renderGoal(){$('#goal-current').textContent=goal?`${goal.name} · Target: ${goal.target} ${goal.unit}`:'Nessun obiettivo impostato.';if(goal){$('#goal-name').value=goal.name;$('#goal-target').value=goal.target;$('#goal-unit').value=goal.unit}}
$('#pr-form').addEventListener('submit',e=>{e.preventDefault();prs.push({exercise:$('#pr-exercise').value.trim(),value:+$('#pr-value').value,unit:$('#pr-unit').value});save('prs',prs);renderPRs();renderWorkouts();e.target.reset();$('#pr-unit').value='ripetizioni';toast('Record aggiunto')});
function renderPRs(){$('#pr-list').innerHTML=prs.length?prs.slice().reverse().map((p,i)=>`<article class="card"><div class="card-top"><b>${esc(p.exercise)}</b><span class="tag">${p.value} ${esc(p.unit)}</span></div></article>`).join(''):'<div class="empty">Nessun record salvato.</div>'}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function renderDay(){save('dayTasks',dayTasks);$('#day-checklist').innerHTML=dayTasks.length?dayTasks.slice().sort((a,b)=>(a.time||'99:99').localeCompare(b.time||'99:99')).map(t=>`<div class="task-row ${t.done?'done':''}"><input type="checkbox" data-task-check="${t.id}" ${t.done?'checked':''}><div class="task-content"><b>${esc(t.title)}</b><p>${t.duration?esc(String(t.duration))+' min':''}</p></div><span class="task-time">${t.time||'—'}</span><button class="task-delete" data-task-delete="${t.id}" aria-label="Elimina attività">×</button></div>`).join(''):'<div class="empty">Nessun planning creato. Scrivi o detta le tue attività qui sopra.</div>';
 $$('[data-task-check]').forEach(c=>c.addEventListener('change',()=>{const t=dayTasks.find(x=>x.id===c.dataset.taskCheck);if(t)t.done=c.checked;renderDay()}));
 $$('[data-task-delete]').forEach(b=>b.addEventListener('click',()=>{dayTasks=dayTasks.filter(t=>t.id!==b.dataset.taskDelete);renderDay()}))}
function addTask(title,time='',duration=30){dayTasks.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random()),title,time,duration,done:false})}
$('#add-task-form').addEventListener('submit',e=>{e.preventDefault();addTask($('#task-title').value.trim(),$('#task-time').value,+$('#task-duration').value);renderDay();e.target.reset();$('#task-duration').value=30;toast('Attività aggiunta')});
$('#clear-day').addEventListener('click',()=>{if(confirm('Vuoi eliminare tutte le attività di questo planning?')){dayTasks=[];renderDay()}});
function parsePlan(text){
 const chunks=text.replace(/\s+e poi\s+/gi,', ').replace(/\s+poi\s+/gi,', ').split(/[,;\n]+/).map(x=>x.trim()).filter(Boolean);
 const tasks=[];let cursor=8*60;
 for(const chunk of chunks){
  const tm=chunk.match(/\b(?:alle|ore)\s*(\d{1,2})(?:[:.](\d{2}))?\b/i);
  let time='';if(tm){let h=+tm[1],m=+(tm[2]||0);if(h<24&&m<60){time=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0');cursor=h*60+m}}
  const durationMatch=chunk.match(/(\d+)\s*(minuti|min|ore|ora|h)\b/i);let duration=30;
  if(durationMatch){duration=+durationMatch[1]*(/ore|ora|h/i.test(durationMatch[2])?60:1)}
  let title=chunk.replace(/\b(domani|oggi|dopodomani)\b/gi,'').replace(/\b(?:alle|ore)\s*\d{1,2}(?:[:.]\d{2})?\b/gi,'').replace(/\bper\s+\d+\s*(?:minuti|min|ore|ora|h)\b/gi,'').replace(/\s+/g,' ').trim();
  title=title.replace(/^[,.\s]+|[,.\s]+$/g,'');
  if(title.length>2){tasks.push({title:title.charAt(0).toUpperCase()+title.slice(1),time:time||minutesToTime(cursor),duration});if(!time)cursor+=duration+15;else cursor+=duration+15}
 }
 if(!tasks.length){const sentences=text.split(/[.!?\n]+/).map(x=>x.trim()).filter(Boolean);sentences.forEach((s,i)=>tasks.push({title:s,time:minutesToTime(8*60+i*60),duration:45}))}
 return tasks;
}
function minutesToTime(n){n=Math.max(0,Math.min(1439,n));return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}
$('#generate-day').addEventListener('click',()=>{const text=$('#day-prompt').value.trim();if(!text){toast('Scrivi o detta prima le tue attività');return}const parsed=parsePlan(text);dayTasks=parsed.map((t,i)=>({id:String(Date.now()+i),...t,done:false}));renderDay();toast('Bozza Day Planning creata! Controlla gli orari')});
$('#voice-btn').addEventListener('click',()=>{
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!SR){$('#voice-status').textContent='Riconoscimento vocale non disponibile in questo browser. Usa il campo testo.';toast('Prova con Chrome aggiornato');return}
 if(recognition){recognition.stop();recognition=null;$('#voice-btn').textContent='🎙️ Parla';return}
 recognition=new SR();recognition.lang='it-IT';recognition.interimResults=true;recognition.continuous=false;
 $('#voice-btn').textContent='■ Ferma';$('#voice-status').textContent='Ti ascolto…';
 recognition.onresult=e=>{let s='';for(let i=0;i<e.results.length;i++)s+=e.results[i][0].transcript;$('#day-prompt').value=s};
 recognition.onerror=e=>{$('#voice-status').textContent='Microfono: '+e.error};
 recognition.onend=()=>{$('#voice-btn').textContent='🎙️ Parla';$('#voice-status').textContent='Registrazione terminata. Premi “Crea il mio Day Planning”.';recognition=null};
 recognition.start();
});
function timerRender(){$('#timer-display').textContent=String(Math.floor(timer/60)).padStart(2,'0')+':'+String(timer%60).padStart(2,'0')}
$('#timer-start').addEventListener('click',()=>{if(ticking){clearInterval(timerId);ticking=false;$('#timer-start').textContent='Riprendi';return}if(timer<=0)timer=90;ticking=true;$('#timer-start').textContent='Pausa';timerId=setInterval(()=>{timer--;timerRender();if(timer<=0){clearInterval(timerId);ticking=false;$('#timer-start').textContent='Avvia';toast('Recupero terminato!');if(navigator.vibrate)navigator.vibrate([200,100,200])}},1000)});
$('#timer-reset').addEventListener('click',()=>{clearInterval(timerId);ticking=false;timer=90;timerRender();$('#timer-start').textContent='Avvia'});
renderWorkouts();renderSkills();renderLibrary();renderGoal();renderPRs();renderDay();timerRender();
if('serviceWorker'in navigator && location.protocol.startsWith('http'))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
