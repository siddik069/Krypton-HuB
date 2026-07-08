const ICONS = {
  compass: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5 13 13l-3.5 1.5L11 11z"/>',
  code: '<polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/>',
  shield: '<path d="M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6z"/>',
  chart: '<path d="M3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2 0-.6-.3-1-.6-1.4-.3-.4-.6-.8-.6-1.4 0-1 .8-1.7 1.8-1.7H16a5 5 0 0 0 5-5c0-3.9-4-6.5-9-6.5Z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16.5" cy="10.5" r="1"/>',
  mappin: '<path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/>',
  phone: '<path d="M6.6 10.8c1.3 2.7 3.5 4.9 6.2 6.2l2-2a1.4 1.4 0 0 1 1.5-.3c1 .3 2.1.5 3.2.5.8 0 1.5.7 1.5 1.5V20c0 .8-.7 1.5-1.5 1.5C10.6 21.5 2.5 13.4 2.5 4.5c0-.8.7-1.5 1.5-1.5h3.3c.8 0 1.5.7 1.5 1.5 0 1.1.2 2.2.5 3.2.1.5 0 1.1-.3 1.5z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14a5 5 0 0 1 5.5 5"/>'
};
function icon(name, size=22){ return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`; }

const TEAM = [
  {key:'rifat', photo:'assets/img/rifat.jpg', name:'Rifat Alam', title:'Founder & Chief Executive', pillar:'Strategy & Orchestration', icon:'compass',
   bio:"Rifat founded Krypton Hub after building his own skill set across networking infrastructure (CCNA-certified), digital marketing, and graphic design — a rare combination that convinced him no business should have to choose between technical depth and creative execution. He leads strategy and cross-department orchestration for every engagement.",
   tags:['CCNA Networking','Digital Marketing','Strategic Leadership']},
  {key:'nabid', photo:'assets/img/nabid.jpg', name:'Nabid Ahmad', title:'Full-Stack Developer', pillar:'Advanced Engineering', icon:'code',
   bio:"Nabid works across Python/Django and PHP/Laravel, with hands-on project experience spanning school management systems, pharmacy management platforms, and fitness-club web applications. Industrial training at Creative IT Institute rounds out practical experience across both frameworks the team relies on.",
   tags:['Python / Django','PHP / Laravel','Web Development']},
  {key:'rony', photo:'assets/img/rony.jpg', name:'Md Shariful Islam Rony', title:'Full-Stack Developer', pillar:'Advanced Engineering', icon:'code',
   bio:"Rony is a Python/Django developer who has architected and deployed three live full-stack applications, including a flight-booking platform integrating Google OAuth 2.0 and PostgreSQL. A software engineering internship at Tiger Park Limited gave him direct experience shipping inside an agile team on production codebases.",
   tags:['Django REST Framework','PostgreSQL','Google OAuth 2.0']},
  {key:'khairul', photo:'assets/img/khairul.jpg', name:'Md Khairul Islam Akaid', title:'Cybersecurity & Systems Professional', pillar:'Defensive Architecture & Trust', icon:'shield',
   bio:"Khairul brings a Linux-first foundation to the team's security practice, with a growing specialization in cybersecurity fundamentals, threat awareness, and security operations tooling. His self-directed approach to systems administration underpins the team's day-to-day infrastructure hardening work.",
   tags:['Linux Administration','Security Fundamentals','Threat Awareness']},
  {key:'abdullah', photo:'assets/img/abdullah.jpg', name:'Abdullah Al Siddik', title:'Cybersecurity Professional', pillar:'Defensive Architecture & Trust', icon:'shield',
   bio:"Abdullah focuses on offensive and defensive security — penetration testing, vulnerability assessment, and network monitoring using tools including Kali Linux, Metasploit, Nmap, and Wireshark. He has built a full home penetration-testing lab and applies OWASP Top 10 methodology to every web application the team ships.",
   tags:['Penetration Testing','Kali Linux / Metasploit','Network Monitoring']},
  {key:'farzana', photo:'assets/img/farzana.jpg', name:'Farzana Akter Popi', title:'Digital Marketing & Growth Specialist', pillar:'Growth & Performance', icon:'chart',
   bio:"Farzana leads client-facing marketing and lead generation, currently running marketing strategy and outreach campaigns as a Counselor & Marketing Officer at an international education consultancy. Her background spans digital marketing, CRM, and direct sales across several customer-facing roles.",
   tags:['Digital Marketing','Lead Generation','CRM & Sales']},
  {key:'afia', photo:'assets/img/afia.jpg', name:'Afia Najnine', title:'Digital Marketing & Client Relations Specialist', pillar:'Growth & Performance', icon:'chart',
   bio:"Afia brings a client-facing foundation to the growth team, currently managing student communications, Meta Business Suite, and WhatsApp broadcast campaigns as a Student Counsellor at Flash IT. Industrial training in digital marketing — SEO, SMM, and Meta Ads campaign management — rounds out her practical approach to growth.",
   tags:['Meta Ads & Business Suite','SEO & Keyword Research','Client Communication']},
  {key:'nurul', photo:'assets/img/nurul.jpg', name:'Nurul Ahanaf Adil', title:'Graphic Designer', pillar:'Visual Identity & Design', icon:'palette',
   bio:"Nurul is an NSDA-certified graphic designer with a professional graphic design credential from Creative IT Institute and hands-on experience designing social campaigns and brand assets during his internship at a leading gadget retailer. He works across Adobe Photoshop and Illustrator to deliver social content and brand collateral.",
   tags:['Adobe Photoshop / Illustrator','Social & Brand Design','NSDA Certified']},
];

const SERVICES = [
  {icon:'code', title:'Software Architecture & Web Engineering', intro:'Custom applications engineered to scale, not just to launch.',
   items:['Custom web & enterprise application development','Django & Laravel platform architecture','E-commerce development & platform migrations','Third-party & API integrations','Database design, migrations & cloud deployment','Ongoing maintenance & performance tuning']},
  {icon:'shield', title:'Cybersecurity & Threat Mitigation', intro:'Security engineered in from day one — not audited in after launch.',
   items:['Penetration testing & ethical hacking','Vulnerability assessments & risk scoring','Security audits & compliance readiness','Infrastructure hardening & network security','Incident response planning & monitoring','Security awareness training']},
  {icon:'chart', title:'Performance Marketing & Brand Growth', intro:'Growth engineered on real data, not assumptions.',
   items:['Lead generation & digital marketing campaigns','Client relationship management (CRM)','Content strategy & sales funnels','Social media marketing & audience growth','Brand positioning & go-to-market strategy','Sales enablement & negotiation support']},
  {icon:'palette', title:'UI/UX & Brand Design', intro:'Design that is engineered for conversion and trust.',
   items:['Social media post design & campaign assets','Website banner & digital ad creative','Brand identity systems & visual language','Product & web interface design (UI/UX)','Print & merchandise design','Fast-turnaround revisions']},
];

const SYNERGY = [
  {a:'code', b:'shield', title:'Development × Cybersecurity', body:"Developers and cybersecurity professionals work side-by-side from the first sprint, so every line of code carries security requirements built in — not audited in after launch."},
  {a:'code', b:'palette', title:'Engineering × Design', body:"Our developers and designer work from the same product brief and component set, so what gets designed is exactly what ships — no fidelity lost in the handoff to production."},
  {a:'palette', b:'chart', title:'Design × Growth', body:"Our designer and marketing specialists collaborate on every interface and asset, so what looks best also converts best — brand and performance, engineered together."},
  {a:'compass', b:'users', title:'Leadership × Every Discipline', body:"One strategic leader sits across all five disciplines, translating business goals into a single coordinated roadmap — so nothing gets lost in translation between teams."},
];

const PROCESS = [
  {n:'01', title:'Discover & Diagnose', body:"We audit your current stack, security posture, brand, and growth funnel to find the real bottlenecks."},
  {n:'02', title:'Architect & Design', body:"Technical architecture and user experience are blueprinted in parallel, so form and function are never at odds."},
  {n:'03', title:'Build & Secure', body:"Development and cybersecurity move together in the same sprint cycle — security is never an afterthought."},
  {n:'04', title:'Launch, Grow & Defend', body:"We go to market with performance marketing driving growth while cybersecurity defends what's underneath it."},
];

const CONTACT = [
  {icon:'mappin', l:'Address', v:'Dhaka, Bangladesh'},
  {icon:'phone', l:'Phone', v:'+8801776-580916'},
  {icon:'mail', l:'Email', v:'krypton.hub.360@gmail.com'},
  {icon:'globe', l:'Website', v:'kryptonhub360.com'},
];

function render(){
  document.getElementById('teamGrid').innerHTML = TEAM.map((p,i)=>`
    <button class="tcard rv" style="--i:${i}" data-key="${p.key}">
      <div class="ph"><img src="${p.photo}" alt="${p.name}" loading="lazy"></div>
      <div class="pillar">${p.pillar}</div>
      <h4>${p.name}</h4>
      <div class="role">${p.title}</div>
      <div class="expand">View profile
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </div>
    </button>`).join('');

  document.getElementById('svcGrid').innerHTML = SERVICES.map((s,i)=>`
    <div class="svc-card rv" style="--i:${i}">
      <div class="svc-icon" style="color:var(--lime)">${icon(s.icon,24)}</div>
      <h4>${s.title}</h4>
      <div class="intro">${s.intro}</div>
      <ul>${s.items.map(it=>`<li>${it}</li>`).join('')}</ul>
    </div>`).join('');

  document.getElementById('synGrid').innerHTML = SYNERGY.map((s,i)=>`
    <div class="syn-card rv" style="--i:${i}">
      <div class="syn-icons"><div class="ic" style="color:#fff">${icon(s.a,20)}</div><div class="ic">${icon(s.b,20)}</div></div>
      <h4>${s.title}</h4>
      <p>${s.body}</p>
    </div>`).join('');

  document.getElementById('procRow').innerHTML = PROCESS.map((p,i)=>`
    <div class="pstep rv" style="--i:${i}"><div class="pnum">${p.n}</div><h4>${p.title}</h4><p>${p.body}</p></div>`).join('');

  document.getElementById('crows').innerHTML = CONTACT.map(c=>`
    <div class="crow"><div class="ic" style="color:#fff">${icon(c.icon,18)}</div><div><div class="l">${c.l}</div><div class="v">${c.v}</div></div></div>`).join('');
}
render();

// ---- modal ----
const backdrop = document.getElementById('modal-backdrop');
let lastFocus = null;
function openModal(key){
  const p = TEAM.find(t=>t.key===key); if(!p) return;
  document.getElementById('modalImg').src = p.photo;
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalRole').textContent = p.title + ' — ' + p.pillar;
  document.getElementById('modalBio').textContent = p.bio;
  document.getElementById('modalTags').innerHTML = p.tags.map(t=>`<span class="tag">${t}</span>`).join('');
  lastFocus = document.activeElement;
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').focus();
}
function closeModal(){
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  if(lastFocus) lastFocus.focus();
}
document.getElementById('teamGrid').addEventListener('click', e=>{
  const card = e.target.closest('.tcard'); if(card) openModal(card.dataset.key);
});
document.getElementById('modalClose').addEventListener('click', closeModal);
backdrop.addEventListener('click', e=>{ if(e.target===backdrop) closeModal(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && backdrop.classList.contains('open')) closeModal(); });

// ---- nav scroll + mobile menu ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>{ nav.classList.toggle('solid', window.scrollY>40); }, {passive:true});
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', ()=>{
  const isOpen = mobileMenu.style.display==='flex';
  mobileMenu.style.display = isOpen? 'none':'flex';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
});
document.querySelectorAll('.mnav').forEach(a=>a.addEventListener('click', ()=>{ mobileMenu.style.display='none'; }));

// ---- scroll reveal ----
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
}, {threshold:.01, rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

// safety net: guarantee nothing stays invisible even in edge-case fast-scroll/navigation timing
let safetyTicks = 0;
const safetyNet = setInterval(()=>{
  const remaining = document.querySelectorAll('.rv:not(.in)');
  remaining.forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight * 1.2 && r.bottom > -200){ el.classList.add('in'); io.unobserve(el); }
  });
  safetyTicks++;
  if(remaining.length === 0 || safetyTicks > 20) clearInterval(safetyNet);
}, 400);

// ---- counters ----
const counters = document.querySelectorAll('.counter');
const cio = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      const el = en.target; const target = +el.dataset.target; let cur = 0;
      const step = Math.max(1, target/24);
      const t = setInterval(()=>{ cur += step; if(cur>=target){ el.textContent=target; clearInterval(t);} else { el.textContent = Math.floor(cur); } }, 40);
      cio.unobserve(el);
    }
  });
}, {threshold:.6});
counters.forEach(el=>cio.observe(el));

// ---- contact form ----
// Zero-backend default: opens the visitor's email client with a pre-filled message.
// To upgrade to an in-page AJAX submission instead, POST `entry` to a form
// endpoint (e.g. Formspree, Netlify Forms) here and skip the mailto redirect.
const CONTACT_EMAIL = 'krypton.hub.360@gmail.com';
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('f-name');
  const email = document.getElementById('f-email');
  const msg = document.getElementById('f-msg');
  let valid = true;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  [['fr-name', name.value.trim().length>0], ['fr-email', emailRe.test(email.value.trim())], ['fr-msg', msg.value.trim().length>4]]
    .forEach(([id, ok])=>{ document.getElementById(id).classList.toggle('invalid', !ok); if(!ok) valid=false; });
  if(!valid) return;

  const entry = {name:name.value.trim(), email:email.value.trim(), message:msg.value.trim()};
  const subject = encodeURIComponent(`New project inquiry from ${entry.name}`);
  const body = encodeURIComponent(`${entry.message}\n\n— ${entry.name} (${entry.email})`);
  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  const msgEl = document.getElementById('formmsg');
  window.location.href = mailtoLink;
  msgEl.textContent = "✓ Opening your email client to send this to Krypton Hub...";
  msgEl.style.color = 'var(--lime)';
  msgEl.classList.add('show');
  form.reset();
});
