const EMBEDDED_EXPORT={"version":3,"people":[{"id":1,"poste":"Président","nom":"Komenan Galet Malval","section":"Bureau principal"},{"id":2,"poste":"S.G.","nom":"Ahouman Alain","section":"Bureau principal"},{"id":3,"poste":"S.G. chargé de l’information","nom":"Mahi Williams","section":"Bureau principal"},{"id":5,"poste":"S.A. / Organisateur","nom":"Gbély Jean","section":"Bureau principal"},{"id":4,"poste":"S.A. / Organisateur","nom":"Kouadio Ahouman","section":"Bureau principal"},{"id":6,"poste":"Trésorier","nom":"Awato Bitty","section":"Bureau principal"},{"id":7,"poste":"Trésorier","nom":"Komenan Yao Olivier","section":"Bureau principal"},{"id":8,"poste":"Commissaire aux comptes","nom":"Diego","section":"Bureau principal"},{"id":10,"poste":"Conseiller","nom":"Guedé","section":"Bureau principal"},{"id":9,"poste":"Conseiller","nom":"Safary","section":"Bureau principal"},{"id":11,"poste":"Sécurité","nom":"Abraham","section":"Bureau principal"},{"id":1790529802104,"poste":"Sécurité","nom":"ASSAMENE GBOZE FERDINAND","section":"Bureau principal"},{"id":12,"poste":"Sécurité","nom":"Ossoffi Pierre","section":"Bureau principal"},{"id":13,"poste":"Secrétaire chargé des projets","nom":"Dadié Pascal","section":"Bureau principal"},{"id":14,"poste":"S. chargé de la sensibilisation","nom":"Koffi kouassi Yves","section":"Bureau principal"},{"id":17,"poste":"Secrétaire chargé des affaires culturelles et sportives","nom":"Abakalé","section":"Bureau principal"},{"id":16,"poste":"Secrétaire chargé des affaires culturelles et sportives","nom":"ÉLODIE SEREKA","section":"Bureau principal"},{"id":15,"poste":"Secrétaire chargé des affaires culturelles et sportives","nom":"Semera","section":"Bureau principal"},{"id":18,"poste":"Secrétaire chargé de la jeunesse féminine","nom":"Kouadio","section":"Bureau principal"},{"id":1790532490248,"poste":"Vacan","nom":"AGNEZA JEAN MARC","section":"Bureau principal"},{"id":1790529818535,"poste":"Vacan","nom":"Ahouman Toussaint","section":"Bureau principal"},{"id":1790532688353,"poste":"Vacan","nom":"AKADE FORTUNE","section":"Bureau principal"},{"id":1790532778396,"poste":"Vacan","nom":"Akande Marie junior","section":"Bureau principal"},{"id":1790529709017,"poste":"Délégué","nom":"AWATO BEUGRE OTIS","section":"Bureau principal"},{"id":1790533464446,"poste":"Délégué","nom":"BEUGRE ENOC","section":"Bureau principal"},{"id":1790532676575,"poste":"Vacan","nom":"BEUGRE KOUAME CYPRIEN","section":"Bureau principal"},{"id":1790529908978,"poste":"Vacant","nom":"BEUGRE N'GUESSAN RAHOUL","section":"Bureau principal"},{"id":1790530470804,"poste":"Vacant","nom":"DAGO N'DRI SERGE","section":"Bureau principal"},{"id":1790530073080,"poste":"Vacant","nom":"DAGO YVAN TRÉSOR","section":"Bureau principal"},{"id":1790530073394,"poste":"Vacant","nom":"FRANCK AWATO","section":"Bureau principal"},{"id":1790530114066,"poste":"Informations","nom":"GBOZE CHARLE","section":"Bureau principal"},{"id":1790525483267,"poste":"TECHNICIEN","nom":"KAKOU ERIC","section":"Bureau principal"},{"id":1790530114088,"poste":"Vacant","nom":"KOFFI DOGRODJI SAMUEL","section":"Bureau principal"},{"id":1790530203190,"poste":"Vice-président","nom":"KOMENAN AKRIBY","section":"Bureau principal"},{"id":1790529976430,"poste":"Vacant","nom":"KOUADIO AKAFFOU FERDINAND","section":"Bureau principal"},{"id":1790530386517,"poste":"Porte-parole","nom":"KRAMO CLIFF","section":"Bureau principal"},{"id":1790530390696,"poste":"Secrétaire à l'information","nom":"MAHI WILLIAM","section":"Bureau principal"},{"id":1790530416062,"poste":"Vacant","nom":"N'DRE AMOIN CHRISTELLE","section":"Bureau principal"},{"id":1790530501527,"poste":"Vacant","nom":"N'DRE AMOIN CHRISTELLE","section":"Bureau principal"},{"id":1790529648497,"poste":"Tresorier","nom":"N'DRE MARIE JOSÉ","section":"Bureau principal"},{"id":1790529805799,"poste":"Vacant","nom":"N'GUESSAN KOUASSI","section":"Bureau principal"},{"id":1790529742714,"poste":"A","nom":"OTOU BELI","section":"Bureau principal"},{"id":1790529522334,"poste":"KOUASSI","nom":"Willy ROSA","section":"Bureau principal"},{"id":1790533487847,"poste":"Vacant","nom":"YAO GRÊLE JEAN LUC","section":"Bureau principal"},{"id":1790532595202,"poste":"Vacant","nom":"YAO KOUASSI MARTIN","section":"Bureau principal"}],"photos":{"1":"images/1.jpeg","2":"images/2.jpeg","4":"images/4.jpeg","6":"images/6.jpeg","7":"images/7.jpeg","8":"images/8.jpeg","10":"images/10.jpeg","11":"images/11.jpeg","13":"images/13.jpeg","14":"images/14.jpeg","1790529802104":"images/1790529802104.jpeg","1790529818535":"images/1790529818535.jpeg","1790529709017":"images/1790529709017.jpeg","1790529908978":"images/1790529908978.jpeg","1790530073080":"images/1790530073080.jpeg","1790530073394":"images/1790530073394.jpeg","1790530114066":"images/1790530114066.jpeg","1790530114088":"images/1790530114088.jpeg","1790530203190":"images/1790530203190.jpeg","1790529976430":"images/1790529976430.jpeg","1790530386517":"images/1790530386517.jpeg","1790530390696":"images/1790530390696.jpeg","1790529648497":"images/1790529648497.jpeg","1790529805799":"images/1790529805799.jpeg","1790529742714":"images/1790529742714.jpeg","1790529522334":"images/1790529522334.jpeg"}};
const DB_NAME='LMP_BUREAU_PHOTOS_FINAL',DB_VERSION=2,STORE='state';
let people=[],photos={},signatures={},db=null,admin=false,ready=false,editingId=null,modalPhoto=null,photoTargetId=null,cameraStream=null,cameraForModal=false,signatureTargetId=null,signatureDrawing=false,signatureCtx=null,signaturePointerDown=false;
let page=1;const PAGE_SIZE=30;
const ADMIN_PASSWORD='LMP2026';
const $=id=>document.getElementById(id);
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function openDB(){return new Promise((res,rej)=>{if(!window.indexedDB)return rej(Error('IndexedDB'));const r=indexedDB.open(DB_NAME,DB_VERSION);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(STORE))r.result.createObjectStore(STORE)};r.onsuccess=()=>{db=r.result;res()};r.onerror=()=>rej(r.error)})}
function getState(){return new Promise((res,rej)=>{const r=db.transaction(STORE,'readonly').objectStore(STORE).get('data');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
function putState(v){return new Promise((res,rej)=>{const r=db.transaction(STORE,'readwrite').objectStore(STORE).put(v,'data');r.onsuccess=()=>res();r.onerror=()=>rej(r.error)})}
async function requestPersistentStorage(){
  try{
    if(!navigator.storage||!navigator.storage.persist){alert('Ce navigateur ne permet pas de demander le stockage persistant. Les données restent néanmoins dans le stockage local de l’application.');return false}
    const already=await navigator.storage.persisted();
    const granted=already||await navigator.storage.persist();
    updateStorageStatus();
    alert(granted?'🔒 Le stockage persistant de l’application est activé sur cet appareil.':'Le navigateur n’a pas accordé le stockage persistant. Les données restent dans l’espace local de l’application.');
    return granted;
  }catch(e){updateStorageStatus();alert('Impossible d’activer le stockage persistant sur cet appareil.');return false}
}
async function updateStorageStatus(){
  const el=$('storageStatus'),txt=$('storageStatusText'),usage=$('storageUsageText'),bar=$('storageProgressBar'); if(!el)return;
  try{
    let persisted=false,estimate=null;
    if(navigator.storage){if(navigator.storage.persisted)persisted=await navigator.storage.persisted();if(navigator.storage.estimate)estimate=await navigator.storage.estimate();}
    el.classList.toggle('warning',!persisted);el.classList.toggle('error',false);
    txt.textContent=persisted?'Stockage protégé':'Stockage local de l’application';
    if(estimate&&estimate.quota){const used=estimate.usage||0,pct=Math.min(100,used/estimate.quota*100);if(bar)bar.style.width=pct.toFixed(1)+'%';if(usage)usage.textContent='Utilisé : '+formatBytes(used)+' sur environ '+formatBytes(estimate.quota)+' ('+pct.toFixed(1)+' %). '+(persisted?'Stockage persistant activé.':'Appuyez sur « Protéger le stockage » pour demander au navigateur de conserver les données plus durablement.');}
    else if(usage)usage.textContent=persisted?'Stockage persistant activé.':'Stockage local actif.';
  }catch(e){el.classList.add('warning');txt.textContent='Stockage local';}
}
function formatBytes(n){if(!n)return '0 o';const u=['o','Ko','Mo','Go'];const i=Math.min(Math.floor(Math.log(n)/Math.log(1024)),u.length-1);return (n/Math.pow(1024,i)).toFixed(i?1:0)+' '+u[i]}
function openStoragePanel(){const p=$('storagePanel');if(p)p.classList.add('show');updateStorageStatus()}
function closeStoragePanel(){const p=$('storagePanel');if(p)p.classList.remove('show')}
async function persist(){const state={version:10,people,photos,signatures};try{if(db){await putState(state);updateStorageStatus();return}}catch(e){}try{localStorage.setItem('lmp_final_state',JSON.stringify(state));updateStorageStatus()}catch(e){}}
async function boot(){let state=null;if(window.__LMP_EXPORTED_SNAPSHOT__&&window.__LMP_EXPORTED_STATE__){state=window.__LMP_EXPORTED_STATE__;admin=!!(window.__LMP_EXPORTED_UI__&&window.__LMP_EXPORTED_UI__.admin);if(window.__LMP_EXPORTED_UI__){$('search').value=window.__LMP_EXPORTED_UI__.search||'';$('showAbsentOnly').checked=!!window.__LMP_EXPORTED_UI__.absent}}else{try{await openDB();state=await getState()}catch(e){try{state=JSON.parse(localStorage.getItem('lmp_final_state')||'null')}catch(_){} }}if(!state||!Array.isArray(state.people))state=EMBEDDED_EXPORT;people=state.people.map(p=>({...p,absent:!!p.absent}));photos={...(state.photos||{})};signatures={...(state.signatures||{})};ready=true;render();updateAdminUI();if(!window.__LMP_EXPORTED_SNAPSHOT__)await persist();updateStorageStatus();}
function render(){
  if(!ready)return;
  const q=($('search').value||'').toLowerCase().trim(),only=$('showAbsentOnly').checked;
  const filtered=people.filter(p=>(p.poste+' '+p.nom+' '+(p.section||'')).toLowerCase().includes(q)&&(!only||p.absent));
  const totalPages=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));
  if(page>totalPages)page=totalPages;if(page<1)page=1;
  const start=(page-1)*PAGE_SIZE,end=Math.min(start+PAGE_SIZE,filtered.length),list=filtered.slice(start,end);
  const groups=new Map();
  list.forEach(p=>{const k=(p.section||'Bureau principal')+'|||'+p.poste;if(!groups.has(k))groups.set(k,{section:p.section||'Bureau principal',poste:p.poste,people:[]});groups.get(k).people.push(p)});
  let out='<div class="attendance-summary">📋 <strong>'+people.filter(p=>p.absent).length+'</strong> absent(s) sur <strong>'+people.length+'</strong> membre(s) — affichage '+(filtered.length?start+1:0)+'–'+end+' sur '+filtered.length+'</div>';
  out+='<div class="pagination-bar"><div class="pagination-info">Page '+page+' / '+totalPages+' · '+PAGE_SIZE+' membres maximum affichés à la fois</div><div class="pagination-actions"><button class="page-btn" onclick="goPage(1)" '+(page===1?'disabled':'')+'>«</button><button class="page-btn" onclick="goPage(page-1)" '+(page===1?'disabled':'')+'>‹</button><span style="font-size:12px;font-weight:800">'+page+' / '+totalPages+'</span><button class="page-btn" onclick="goPage(page+1)" '+(page===totalPages?'disabled':'')+'>›</button><button class="page-btn" onclick="goPage('+totalPages+')" '+(page===totalPages?'disabled':'')+'>»</button></div></div>';
  for(const g of groups.values()){
    out+='<div class="section-title">'+esc(g.section)+'</div><article class="post-card"><div class="post-head"><div><div class="poste">'+esc(g.poste)+'</div><div class="post-count">'+g.people.length+' personne(s) sur cette page</div></div><button class="btn green admin-only" onclick="openAddToPost('+JSON.stringify(g.poste)+','+JSON.stringify(g.section)+')">＋ Ajouter</button></div><div class="people-list">';
    for(const p of g.people){
      const ph=photos[String(p.id)]||'';
      out+='<div class="person-item '+(p.absent?'absent':'')+'"><div class="person-photo">'+(ph?'<img src="'+ph+'" alt="'+esc(p.nom)+'">':'<span class="placeholder">＋</span>')+'</div><div class="person-info"><div class="nom">'+esc(p.nom)+' '+(p.absent?'<span class="absent-badge">ABSENT</span>':'')+'</div><div class="hint">'+esc(p.poste)+'</div><div class="actions"><button class="btn" onclick="openSignature('+p.id+')">✍️ '+(signatures[String(p.id)]?'Modifier signature':'Signer')+'</button><button class="btn green" onclick="printCard('+p.id+')">🪪 Imprimer la carte</button>'+(signatures[String(p.id)]?'<span class="signature-badge">✓ Signature enregistrée</span>':'')+'<span class="admin-only"><button class="btn" onclick="editPerson('+p.id+')">Modifier</button><button class="btn orange" onclick="openCameraFor('+p.id+')">📷 Photo</button><button class="btn" onclick="openGalleryFor('+p.id+')">🖼️ Galerie</button><button class="btn '+(p.absent?'red':'')+'" onclick="toggleAbsent('+p.id+')">'+(p.absent?'✓ Présent':'⚠ Absent')+'</button>'+(ph?'<button onclick="removePhoto('+p.id+')">Supprimer photo</button>':'')+'<button onclick="deletePerson('+p.id+')">Supprimer</button></span></div></div></div>';
    }
    out+='</div></article>';
  }
  if(!filtered.length)out+='<div class="empty">Aucun membre ne correspond à votre recherche.</div>';
  $('grid').innerHTML=out;updateAdminUI();
}
function goPage(n){page=Math.max(1,Number(n)||1);render();window.scrollTo({top:0,behavior:'smooth'});}

function updateAdminUI(){$('adminBar').classList.toggle('show',admin);document.body.classList.toggle('readonly',!admin);$('adminLoginBtn').textContent=admin?'🔓 Administrateur connecté':'🔐 Accès administrateur'}
function loginAdmin(){if(admin){logoutAdmin();return}const p=prompt('Mot de passe administrateur :');if(p===ADMIN_PASSWORD){admin=true;updateAdminUI();render()}else if(p!==null)alert('Mot de passe incorrect.')}
function logoutAdmin(){admin=false;closeModal();closeCamera();updateAdminUI();render()}function requireAdmin(){if(admin)return true;alert('Cette action est réservée à l’administrateur.');return false}
function openAdd(){if(!requireAdmin())return;editingId=null;modalPhoto=null;$('modalTitle').textContent='Ajouter une personne';$('fPoste').value='';$('fNom').value='';$('fSection').value='Bureau principal';$('modal').classList.add('show')}
function openAddToPost(poste,section){openAdd();$('fPoste').value=poste;$('fSection').value=section}
function editPerson(id){if(!requireAdmin())return;const p=people.find(x=>x.id===id);if(!p)return;editingId=id;modalPhoto=null;$('modalTitle').textContent='Modifier la personne';$('fPoste').value=p.poste;$('fNom').value=p.nom;$('fSection').value=p.section;$('modal').classList.add('show')}
function closeModal(){$('modal').classList.remove('show');modalPhoto=null}
function makeUniqueId(){let id=Date.now()*1000+Math.floor(Math.random()*1000);while(people.some(p=>String(p.id)===String(id)))id++;return id;}
function openBulkAdd(){if(!requireAdmin())return;$('bulkText').value='';$('bulkModal').classList.add('show');}
function closeBulkAdd(){$('bulkModal').classList.remove('show');}
async function saveBulkAdd(){
  if(!requireAdmin())return;
  const raw=$('bulkText').value.trim();if(!raw)return alert('Ajoutez au moins un membre.');
  const rows=raw.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);let added=0,bad=0;
  for(const row of rows){
    const parts=row.split(';').map(x=>x.trim());
    if(parts.length<2){bad++;continue;}
    const nom=parts[0],poste=parts[1],section=(parts[2]||'Bureau principal');
    if(!nom||!poste){bad++;continue;}
    const sec=section.toLowerCase().includes('adjoint')?'Adjoints':'Bureau principal';
    people.push({id:makeUniqueId(),poste,nom,section:sec,absent:false});added++;
  }
  if(added){page=Math.ceil(people.length/PAGE_SIZE);await persist();closeBulkAdd();render();alert(added+' membre(s) ajouté(s).'+(bad?' '+bad+' ligne(s) ignorée(s).':''));}else alert('Aucun membre valide trouvé.');
}
async function savePerson(){if(!requireAdmin())return;const poste=$('fPoste').value.trim(),nom=$('fNom').value.trim(),section=$('fSection').value;if(!poste||!nom)return alert('Veuillez renseigner le poste et le nom.');let id=editingId;if(id==null){id=makeUniqueId();people.push({id,poste,nom,section,absent:false});page=Math.max(1,Math.ceil(people.length/PAGE_SIZE))}else Object.assign(people.find(p=>p.id===id),{poste,nom,section});if(modalPhoto)photos[String(id)]=modalPhoto;await persist();closeModal();render()}
async function toggleAbsent(id){if(!requireAdmin())return;const p=people.find(x=>x.id===id);if(!p)return;p.absent=!p.absent;await persist();render()}
async function deletePerson(id){if(!requireAdmin()||!confirm('Supprimer cette personne et sa photo ?'))return;people=people.filter(p=>p.id!==id);delete photos[String(id)];delete signatures[String(id)];await persist();render()}
async function removePhoto(id){if(!requireAdmin())return;delete photos[String(id)];await persist();render()}
function chooseGalleryForModal(){if(!requireAdmin())return;const i=document.createElement('input');i.type='file';i.accept='image/*';i.onchange=async()=>{if(i.files[0])modalPhoto=await imageToDataURL(i.files[0])};i.click()}
function openGalleryFor(id){if(!requireAdmin())return;photoTargetId=id;$('galleryInput').value='';$('galleryInput').click()}
async function handleGallerySelect(e){const f=e.target.files[0];e.target.value='';if(!requireAdmin()||!f||photoTargetId==null)return;photos[String(photoTargetId)]=await imageToDataURL(f);await persist();render()}
async function imageToDataURL(file){if(!file||!file.type.startsWith('image/'))throw Error('image');const raw=await new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file)});const img=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=raw});const max=1000,s=Math.min(1,max/Math.max(img.naturalWidth,img.naturalHeight)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.naturalWidth*s));c.height=Math.max(1,Math.round(img.naturalHeight*s));c.getContext('2d').drawImage(img,0,0,c.width,c.height);return c.toDataURL('image/jpeg',.82)}
async function openCameraFor(id){if(!requireAdmin())return;photoTargetId=id;cameraForModal=false;await startCamera()}
async function takePhotoForModal(){if(!requireAdmin())return;photoTargetId=null;cameraForModal=true;await startCamera()}
async function startCamera(){try{cameraStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false});$('cameraVideo').srcObject=cameraStream;$('cameraModal').classList.add('show')}catch(e){const i=document.createElement('input');i.type='file';i.accept='image/*';i.capture='environment';i.onchange=async()=>{if(i.files[0]){const d=await imageToDataURL(i.files[0]);if(cameraForModal)modalPhoto=d;else if(photoTargetId!=null){photos[String(photoTargetId)]=d;await persist();render()}}};i.click()}}
function closeCamera(){if(cameraStream)cameraStream.getTracks().forEach(t=>t.stop());cameraStream=null;$('cameraVideo').srcObject=null;$('cameraModal').classList.remove('show')}
async function takePhoto(){if(!cameraStream)return;const v=$('cameraVideo'),c=$('cameraCanvas');c.width=v.videoWidth;c.height=v.videoHeight;c.getContext('2d').drawImage(v,0,0);const d=c.toDataURL('image/jpeg',.82);if(cameraForModal)modalPhoto=d;else if(photoTargetId!=null){photos[String(photoTargetId)]=d;await persist()}closeCamera();render()}
function downloadBlob(content,type,filename){const b=new Blob([content],{type}),url=URL.createObjectURL(b),a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)}
async function dataUrlForExport(src){
  if(!src||src.startsWith('data:')) return src||'';
  try{
    const r=await fetch(src);
    if(!r.ok) return src;
    const blob=await r.blob();
    return await new Promise((resolve,reject)=>{const fr=new FileReader();fr.onload=()=>resolve(fr.result);fr.onerror=reject;fr.readAsDataURL(blob)});
  }catch(e){return src}
}
async function makeExportState(){
  const out={version:10,people:people.map(p=>({...p})),photos:{},signatures:{}};
  for(const [id,src] of Object.entries(photos||{})) out.photos[id]=await dataUrlForExport(src);
  for(const [id,src] of Object.entries(signatures||{})) out.signatures[id]=await dataUrlForExport(src);
  return out;
}
async function exportJSON(){
  if(!ready)return;
  const state=await makeExportState();
  downloadBlob(JSON.stringify(state,null,2),'application/json','lmp-bureau-photos-sauvegarde-v9.json');
}
async function exportData(){
  if(!ready)return;
  const state=await makeExportState();
  const ui={admin:false,search:$('search').value||'',absent:!!$('showAbsentOnly').checked};
  const clone=document.documentElement.cloneNode(true);
  for(const img of clone.querySelectorAll('img[src]')){
    const src=img.getAttribute('src')||'';
    if(src.startsWith('./assets/')||src.startsWith('./images/')||src.startsWith('assets/')||src.startsWith('images/')){
      try{img.setAttribute('src',await dataUrlForExport(src))}catch(e){}
    }
  }
  const safeJson=(value)=>JSON.stringify(value).replace(/</g,'\\u003c').replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');
  const marker='<script>window.__LMP_EXPORTED_SNAPSHOT__=true;window.__LMP_EXPORTED_STATE__='+safeJson(state)+';window.__LMP_EXPORTED_UI__='+safeJson(ui)+';<'+ '/script>';
  const finalHtml='<!doctype html>\n'+clone.outerHTML.replace('</head>',marker+'</head>');
  downloadBlob(finalHtml,'text/html;charset=utf-8','lmp-bureau-photos-plateforme-v12.html');
}
function importData(e){if(!requireAdmin())return;const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=async()=>{try{const d=JSON.parse(r.result);if(!Array.isArray(d.people))throw Error();people=d.people.map((p,i)=>({id:Number(p.id)||Date.now()+i,poste:String(p.poste||'').trim(),nom:String(p.nom||'').trim(),section:p.section==='Adjoints'?'Adjoints':'Bureau principal',absent:!!p.absent})).filter(p=>p.poste&&p.nom);photos=d.photos&&typeof d.photos==='object'?{...d.photos}:{};signatures=d.signatures&&typeof d.signatures==='object'?{...d.signatures}:{};page=1;await persist();render();alert('Importation réussie : noms, photos et signatures restaurés.')}catch(x){alert('Fichier invalide ou incompatible.')}finally{e.target.value=''}};r.readAsText(f)}
function buildMemberSheet(p,logo){
  const ph=photos[String(p.id)]||'';
  const sig=signatures[String(p.id)]||'';
  const memberNo=String(p.id).slice(-8).padStart(8,'0');
  const status=p.absent?'ABSENT':'MEMBRE ACTIF';
  const front='<div class="card front">'
    +'<div class="gold-line"></div>'
    +'<div class="front-head">'
      +(logo?'<img class="card-logo" src="'+logo+'" alt="Logo LMP">':'<div class="card-logo-placeholder">LMP</div>')
      +'<div class="head-copy"><div class="org">LA MAJORITÉ PRÉSIDENTIELLE</div><div class="org-short">(LMP) — CARTE DE MEMBRE</div></div>'
    +'</div>'
    +'<div class="front-body">'
      +'<div class="photo-frame">'+(ph?'<img class="member-photo" src="'+ph+'" alt="'+esc(p.nom)+'">':'<span class="no-photo">PHOTO</span>')+'</div>'
      +'<div class="member-details">'
        +'<div class="label">MEMBRE</div>'
        +'<div class="member-name">'+esc(p.nom)+'</div>'
        +'<div class="role-label">FONCTION</div>'
        +'<div class="member-role">'+esc(p.poste)+'</div>'
        +'<div class="member-meta"><span>N° '+memberNo+'</span><span>'+esc(p.section||'Bureau principal')+'</span></div>'
      +'</div>'
    +'</div>'
    +'<div class="front-footer"><span>'+status+'</span><span>CARTE OFFICIELLE</span></div>'
  +'</div>';
  const signatureBlock=sig
    ? '<div class="member-signature"><img src="'+sig+'" alt="Signature de '+esc(p.nom)+'"><span>Signature du membre</span></div>'
    : '<div class="member-signature empty-signature"><span>Signature du membre</span><span class="signature-line"></span></div>';
  const back='<div class="card back">'
    +'<div class="back-pattern"></div>'
    +'<div class="back-content">'
      +(logo?'<img class="back-logo" src="'+logo+'" alt="Logo LMP">':'')
      +'<div class="back-title">LA MAJORITÉ PRÉSIDENTIELLE</div>'
      +'<div class="back-motto">ENSEMBLE POUR LA LIBERTÉ</div>'
      +'<div class="back-divider"></div>'
      +'<div class="back-info"><strong>CARTE DE MEMBRE</strong><br>Cette carte est personnelle et ne peut être cédée.<br>Elle atteste l’appartenance du titulaire à la structure LMP.</div>'
      +'<div class="back-fields"><span>IDENTIFIANT</span><strong>'+memberNo+'</strong><span>SECTION</span><strong>'+esc(p.section||'Bureau principal')+'</strong></div>'
      +'<div class="signature-row">'+signatureBlock+'<span class="bureau-sign">Cachet / Bureau</span></div>'
      +'<div class="back-footer">LMP • CARTE DE MEMBRE • '+status+'</div>'
    +'</div>'
  +'</div>';
  return '<div class="member-sheet">'+front+back+'</div>';
}
function printMemberWindow(list,title){
  if(!ready||!list.length)return;
  const logo=(document.querySelector('.logo')||{}).src||'';
  const cards=list.map(p=>buildMemberSheet(p,logo)).join('');
  const w=window.open('','_blank');
  if(!w)return alert('Autorisez les fenêtres contextuelles.');
  w.document.write('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title)+'</title><style>'
  +'@page{size:A4;margin:8mm}'
  +'*{box-sizing:border-box}'
  +'body{margin:0;background:#fff;color:#171717;font-family:Arial,Helvetica,sans-serif}'
  +'.member-sheet{display:grid;grid-template-columns:85.6mm 85.6mm;gap:5mm;justify-content:center;margin:0 auto 7mm;page-break-inside:avoid;break-inside:avoid}'
  +'.card{width:85.6mm;height:54mm;position:relative;overflow:hidden;border-radius:3.5mm;page-break-inside:avoid;break-inside:avoid;-webkit-print-color-adjust:exact;print-color-adjust:exact}'
  +'.front{background:linear-gradient(135deg,#101010 0%,#1d1d1d 62%,#0a0a0a 100%);border:1px solid #c9a24b;color:#fff;box-shadow:0 1mm 2mm #0002;padding:4mm}'
  +'.gold-line{position:absolute;left:0;top:0;width:100%;height:2.2mm;background:linear-gradient(90deg,#8f6b22,#f2d27a,#a77b25,#f5dc8b,#8f6b22)}'
  +'.front:after{content:"";position:absolute;right:-18mm;bottom:-24mm;width:58mm;height:58mm;border:1px solid #caa451;border-radius:50%;opacity:.22;box-shadow:0 0 0 5mm #caa45122,0 0 0 10mm #caa45111}'
  +'.front-head{position:relative;z-index:2;display:flex;align-items:center;gap:2.5mm;margin-top:1mm}'
  +'.card-logo{width:13mm;height:13mm;object-fit:contain;border-radius:50%;background:#fff;border:1px solid #d7b65d}'
  +'.card-logo-placeholder{width:13mm;height:13mm;border-radius:50%;background:#fff;color:#111;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:7px;border:1px solid #d7b65d}'
  +'.org{font-size:8px;line-height:1.05;font-weight:900;letter-spacing:.45px;color:#f0cf73;text-transform:uppercase}.org-short{font-size:5.4px;margin-top:1mm;color:#fff;letter-spacing:.35px;font-weight:700}'
  +'.front-body{position:relative;z-index:2;display:flex;gap:4mm;align-items:center;margin-top:3.2mm}'
  +'.photo-frame{width:28mm;height:31mm;min-width:28mm;border:1px solid #d5b45b;border-radius:2mm;overflow:hidden;background:#2b2b2b;display:flex;align-items:center;justify-content:center}'
  +'.member-photo{display:block;width:100%;height:100%;object-fit:cover;object-position:center 28%}.no-photo{font-size:6px;color:#d5b45b;font-weight:900}'
  +'.member-details{min-width:0;display:flex;flex-direction:column;justify-content:center}.label,.role-label{font-size:4.5px;letter-spacing:1px;color:#d8b75d;font-weight:900}.member-name{font-size:12px;line-height:1.05;font-weight:900;text-transform:uppercase;margin:1.2mm 0 2.5mm;overflow-wrap:anywhere}.member-role{font-size:7.3px;line-height:1.12;font-weight:800;color:#fff;max-height:9mm;overflow:hidden;text-transform:uppercase;margin-top:1mm}.member-meta{display:flex;flex-direction:column;gap:1mm;margin-top:2.5mm;font-size:5px;color:#ddd;text-transform:uppercase}.member-meta span:first-child{color:#f0cf73;font-weight:900}'
  +'.front-footer{position:absolute;z-index:3;left:4mm;right:4mm;bottom:3mm;display:flex;justify-content:space-between;border-top:1px solid #a98331;padding-top:1.5mm;font-size:4.5px;font-weight:900;letter-spacing:.55px;color:#d9bc6a}.front-footer span:last-child{color:#fff}'
  +'.back{background:#f7f4ec;border:1px solid #c9a24b;color:#171717;position:relative}.back-pattern{position:absolute;inset:0;background:radial-gradient(circle at 15% 15%,#d5b45b1f 0 1px,transparent 1.5px),radial-gradient(circle at 85% 85%,#11111110 0 1px,transparent 1.5px);background-size:8mm 8mm}.back:before{content:"";position:absolute;top:0;left:0;right:0;height:10mm;background:linear-gradient(135deg,#111 0%,#222 55%,#111 100%);border-bottom:2px solid #c9a24b}.back-content{position:relative;z-index:2;height:100%;padding:4mm}.back-logo{position:absolute;top:2.2mm;left:4mm;width:14mm;height:14mm;object-fit:contain;background:#fff;border-radius:50%;border:1px solid #d8b65d}.back-title{position:absolute;top:3.2mm;left:21mm;font-size:7px;font-weight:900;color:#f0cf73;letter-spacing:.35px;text-transform:uppercase}.back-motto{position:absolute;top:7.2mm;left:21mm;font-size:4.7px;font-weight:700;color:#fff;letter-spacing:.2px}.back-divider{position:absolute;top:14mm;left:4mm;right:4mm;height:1px;background:#c9a24b}.back-info{position:absolute;top:17mm;left:4mm;right:4mm;font-size:5.3px;line-height:1.45;color:#333}.back-info strong{font-size:6.2px;color:#111;letter-spacing:.5px}.back-fields{position:absolute;left:4mm;right:4mm;bottom:10mm;display:grid;grid-template-columns:22mm 1fr;gap:1.2mm 2mm;font-size:4.6px;text-transform:uppercase}.back-fields span{color:#8d6b25;font-weight:900}.back-fields strong{font-size:5.2px;color:#171717}.signature-row{position:absolute;left:4mm;right:4mm;bottom:4.8mm;display:flex;justify-content:space-between;align-items:flex-end;font-size:4.3px;color:#555}.signature-row .member-signature{width:35mm;min-height:7mm;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;text-align:center}.member-signature img{max-width:33mm;max-height:6mm;object-fit:contain;margin-bottom:.7mm}.member-signature span{width:100%;border-top:1px solid #8c8c8c;padding-top:1mm}.empty-signature .signature-line{display:none}.signature-row .bureau-sign{width:30mm;border-top:1px solid #8c8c8c;padding-top:1mm;text-align:center}.back-footer{position:absolute;left:0;right:0;bottom:0;background:#111;color:#f0cf73;text-align:center;padding:1.8mm;font-size:4.2px;font-weight:900;letter-spacing:.5px}'
  +'@media print{body{padding:0}.member-sheet{margin-bottom:6mm}.card{box-shadow:none}}'
  +'</style></head><body>'+cards+'</body></html>');
  w.document.close();
  setTimeout(()=>w.print(),700);
}
function printCards(){printMemberWindow(people,'Cartes membres LMP — Prestige Noir & Or');}
function printCard(id){const p=people.find(x=>x.id===id);if(!p)return alert('Membre introuvable.');printMemberWindow([p],'Carte membre — '+p.nom);}
function setupSignatureCanvas(){
  const c=$('signatureCanvas'); if(!c)return;
  signatureCtx=c.getContext('2d'); signatureCtx.lineCap='round'; signatureCtx.lineJoin='round'; signatureCtx.strokeStyle='#111'; signatureCtx.lineWidth=5;
  const pos=e=>{const r=c.getBoundingClientRect();const src=e.touches&&e.touches[0]?e.touches[0]:e;return {x:(src.clientX-r.left)*c.width/r.width,y:(src.clientY-r.top)*c.height/r.height}};
  const start=e=>{e.preventDefault();signaturePointerDown=true;signatureDrawing=true;const p=pos(e);signatureCtx.beginPath();signatureCtx.moveTo(p.x,p.y)};
  const move=e=>{if(!signaturePointerDown)return;e.preventDefault();const p=pos(e);signatureCtx.lineTo(p.x,p.y);signatureCtx.stroke()};
  const end=e=>{if(signaturePointerDown)e.preventDefault();signaturePointerDown=false};
  c.onpointerdown=start;c.onpointermove=move;c.onpointerup=end;c.onpointercancel=end;c.onpointerleave=end;
}
function clearSignature(){const c=$('signatureCanvas');if(!c||!signatureCtx)return;signatureCtx.clearRect(0,0,c.width,c.height);signatureDrawing=false}
function closeSignature(){signatureTargetId=null;$('signatureModal').classList.remove('show');clearSignature()}
function openSignature(id){
  const p=people.find(x=>x.id===id);if(!p)return;
  signatureTargetId=id;$('signatureMemberName').textContent=p.nom+' — '+p.poste;
  setupSignatureCanvas();clearSignature();
  const existing=signatures[String(id)];
  if(existing){const img=new Image();img.onload=()=>{signatureCtx.clearRect(0,0,$('signatureCanvas').width,$('signatureCanvas').height);signatureCtx.drawImage(img,0,0,$('signatureCanvas').width,$('signatureCanvas').height);signatureDrawing=true};img.src=existing}
  $('signatureModal').classList.add('show');
}
async function saveSignature(){
  if(signatureTargetId==null||!signatureDrawing)return alert('Veuillez signer dans la zone prévue.');
  const c=$('signatureCanvas'); signatures[String(signatureTargetId)]=c.toDataURL('image/png');
  await persist(); const id=signatureTargetId; closeSignature(); render();
  alert('Signature enregistrée pour '+(people.find(p=>p.id===id)?.nom||'le membre')+'.');
}
boot();
window.addEventListener('load',()=>{updateStorageStatus()});
// PWA : installation Android et fonctionnement hors connexion.
let deferredInstallPrompt=null;
function setupPWA(){
  if('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost')){
    navigator.serviceWorker.register('./sw.js').catch(()=>{});
  }
  window.addEventListener('beforeinstallprompt',e=>{
    e.preventDefault(); deferredInstallPrompt=e;
    const box=$('pwaInstall'); if(box)box.classList.add('show');
  });
  const install=$('pwaInstallBtn'),close=$('pwaCloseBtn');
  if(install)install.onclick=async()=>{
    if(!deferredInstallPrompt){alert('Sur Android, ouvrez le menu du navigateur puis choisissez « Ajouter à l’écran d’accueil » ou « Installer l’application ».');return;}
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice; deferredInstallPrompt=null;
    const box=$('pwaInstall'); if(box)box.classList.remove('show');
  };
  if(close)close.onclick=()=>{const box=$('pwaInstall');if(box)box.classList.remove('show')};
  window.addEventListener('appinstalled',()=>{const box=$('pwaInstall');if(box)box.classList.remove('show')});
}
setupPWA();
