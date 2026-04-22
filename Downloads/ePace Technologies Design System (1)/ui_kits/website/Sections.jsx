// GlobalSection.jsx — global delivery split with location panel
// Process.jsx — dark 4-step
// Clients.jsx — marquee
// Testimonials.jsx — 3-up
// CTA.jsx — dark CTA

function GlobalSection() {
  const locs = [
    {flag:'🇺🇸', city:'Irving, Texas', country:'United States', tag:'Headquarters', cls:'hq'},
    {flag:'🇮🇳', city:'Hyderabad', country:'India — Telangana', tag:'Delivery Center', cls:'dev'},
    {flag:'🇮🇳', city:'Visakhapatnam', country:'India — Andhra Pradesh', tag:'Delivery Center', cls:'dev'},
    {flag:'🇧🇷', city:'São Paulo', country:'Brazil — Nearshore', tag:'Nearshore', cls:'new'},
    {flag:'🇦🇷', city:'Buenos Aires', country:'Argentina — Nearshore', tag:'Nearshore', cls:'new'},
    {flag:'🇲🇽', city:'Mexico City', country:'Mexico — Nearshore', tag:'Nearshore', cls:'new'},
  ];
  const locBg = {hq:'rgba(26,86,219,0.25)', dev:'rgba(16,185,129,0.2)', new:'rgba(245,158,11,0.2)'};
  const locFg = {hq:'#60a5fa', dev:'#4ade80', new:'#fbbf24'};
  const models = [
    {ico:'🎯', h:'Outcome-Based Delivery', p:'Fixed-price, SLA-backed programs with milestones tied to business outcomes — you pay for results, not hours.'},
    {ico:'🧩', h:'Managed Capability Pods', p:'Dedicated, cross-functional squads (product, engineering, data, SRE) run as an extension of your team under our governance.'},
    {ico:'⚡', h:'Time & Materials / Agile', p:'Flexible agile pods and specialists scaled up or down — ideal for discovery, experimentation and fast iterations.'},
  ];
  return (
    <section style={{padding:'90px 0', background:'#fff'}}>
      <div className="container">
        <div className="section-title">
          <div className="label-tag">🌎 Our Delivery Model</div>
          <h2>Global Delivery, Built Around Outcomes</h2>
          <p>Follow-the-sun execution from our US, India and Latin America centers — with flexible engagement models that fit how your enterprise buys and builds.</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'start'}}>
          <div>
            <div style={{display:'flex', flexDirection:'column', gap:14, marginBottom:28}}>
              {models.map(m => (
                <div key={m.h} style={{display:'flex', gap:14, background:'var(--gray-50)', border:'1px solid var(--gray-200)', borderRadius:12, padding:'18px 20px'}}>
                  <div style={{width:42, height:42, borderRadius:10, background:'var(--grad-blue)', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, color:'#fff'}}>{m.ico}</div>
                  <div>
                    <h4 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:14.5, color:'var(--navy)', margin:'0 0 4px', fontWeight:700}}>{m.h}</h4>
                    <p style={{fontSize:13, color:'var(--fg2)', margin:0, lineHeight:1.6}}>{m.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14}}>
              {[{n:'24/7',l:'Follow-the-Sun'},{n:'40%',l:'TCO Reduction'},{n:'SLA',l:'Outcome-Backed'}].map(g => (
                <div key={g.l} style={{textAlign:'center', background:'var(--blue-light)', border:'1px solid rgba(26,86,219,0.18)', borderRadius:10, padding:'18px 12px'}}>
                  <div style={{fontSize:'1.45rem', fontWeight:900, color:'var(--blue)', lineHeight:1, marginBottom:4}}>{g.n}</div>
                  <div style={{fontSize:11, color:'var(--blue-dark)', textTransform:'uppercase', letterSpacing:0.5, fontWeight:700}}>{g.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:'var(--navy)', borderRadius:24, padding:32, position:'relative', overflow:'hidden'}}>
            <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse 400px 300px at 80% 20%, rgba(26,86,219,0.2) 0%, transparent 65%)'}}/>
            <div style={{position:'relative', zIndex:2}}>
              <div style={{fontSize:12, fontWeight:700, color:'rgba(255,255,255,0.45)', textTransform:'uppercase', letterSpacing:1.5, marginBottom:20}}>Global Delivery Centers</div>
              {locs.map((l,i) => (
                <div key={i} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'13px 16px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:10, marginBottom:10}}>
                  <div style={{display:'flex', alignItems:'center', gap:12}}>
                    <span style={{fontSize:24}}>{l.flag}</span>
                    <div>
                      <div style={{fontSize:14, fontWeight:600, color:'#fff'}}>{l.city}</div>
                      <div style={{fontSize:11.5, color:'rgba(255,255,255,0.45)'}}>{l.country}</div>
                    </div>
                  </div>
                  <span style={{padding:'3px 10px', borderRadius:50, fontSize:10.5, fontWeight:700, textTransform:'uppercase', letterSpacing:0.3, background:locBg[l.cls], color:locFg[l.cls]}}>{l.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {ico:'🎯', h:'Envision',  p:'Business-outcome workshops, current-state assessment and a prioritized transformation roadmap with clear value metrics.'},
    {ico:'📐', h:'Architect', p:'Reference architecture, solution design, platform selection and an execution plan phased around early, measurable wins.'},
    {ico:'🏗️', h:'Build & Deliver', p:'Agile delivery pods ship production software, data platforms and AI products — with engineering quality and DevSecOps baked in.'},
    {ico:'🔄', h:'Run & Evolve',    p:'Managed services, SRE, FinOps and continuous modernization — we operate what we build and improve it over time.'},
  ];
  return (
    <section style={{padding:'90px 0', background:'var(--navy)'}}>
      <div className="container">
        <div className="section-title">
          <div className="label-tag light">Delivery Lifecycle</div>
          <h2 className="light">From Envision to Run — One Partner</h2>
          <p className="light">A proven 4-phase approach that takes enterprise transformations from whiteboard to production to day-2 operations.</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, position:'relative', marginTop:56}}>
          <div style={{position:'absolute', top:38, left:'calc(12.5% + 24px)', right:'calc(12.5% + 24px)', height:2, background:'linear-gradient(90deg,#3b82f6,#0891b2)'}}/>
          {steps.map((s,i) => (
            <div key={s.h} style={{textAlign:'center', padding:'0 20px', position:'relative', zIndex:1}}>
              <div style={{width:76, height:76, borderRadius:'50%', background:'rgba(255,255,255,0.05)', border:'2px solid rgba(59,130,246,0.35)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', fontSize:28, position:'relative'}}>
                {s.ico}
                <span style={{position:'absolute', top:-8, right:-8, width:24, height:24, background:'var(--grad-blue)', borderRadius:'50%', fontSize:11, fontWeight:800, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center'}}>{i+1}</span>
              </div>
              <h4 style={{color:'#fff', fontSize:15, margin:'0 0 8px'}}>{s.h}</h4>
              <p style={{fontSize:13, color:'rgba(255,255,255,0.5)', lineHeight:1.65, margin:0}}>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const logos = ['Dell','Verizon','Qualcomm','Motorola','GE Digital','Visa','Fujitsu','AT&T','Cisco','IBM','Microsoft','Amazon'];
  const all = [...logos, ...logos];
  return (
    <section style={{padding:'64px 0', background:'var(--gray-50)'}}>
      <div className="container">
        <div className="section-title" style={{marginBottom:36}}>
          <div className="label-tag">Delivering For</div>
          <h2>Enterprises That Trust ePace to Deliver</h2>
          <p>From Fortune 500 to fast-growing scale-ups — we deliver the software, data and AI platforms that run their business.</p>
        </div>
      </div>
      <div style={{overflow:'hidden', position:'relative'}}>
        <div style={{position:'absolute', top:0, bottom:0, left:0, width:80, zIndex:2, background:'linear-gradient(90deg,var(--gray-50),transparent)'}}/>
        <div style={{position:'absolute', top:0, bottom:0, right:0, width:80, zIndex:2, background:'linear-gradient(-90deg,var(--gray-50),transparent)'}}/>
        <div style={{display:'flex', gap:16, animation:'scrollLeft 28s linear infinite', width:'max-content'}}>
          {all.map((l,i) => (
            <div key={i} style={{background:'#fff', border:'1px solid var(--gray-200)', borderRadius:50, padding:'11px 26px', height:52, display:'flex', alignItems:'center', fontWeight:700, fontSize:14.5, color:'var(--fg2)', whiteSpace:'nowrap'}}>{l}</div>
          ))}
        </div>
      </div>
      <style>{`@keyframes scrollLeft{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {s:5, t:"ePace delivered our GenAI customer-service platform end-to-end — strategy, data, LLM pipeline and production rollout. It went live in under six months and is measurably reducing handle time across the contact center.", name:'James Mitchell', role:'IT Director — Dell Technologies', ini:'JM'},
    {s:5, t:'Their cloud modernization team replatformed 40+ legacy apps to AWS with zero production incidents. The outcome-based contract and follow-the-sun delivery from their LATAM centers gave us the pace we needed.', name:'Sarah Reynolds', role:'VP of Engineering — Qualcomm', ini:'SR'},
    {s:5, t:'ePace runs our data platform as a managed capability — Databricks, streaming pipelines, governance, the works. Reliability is up, time-to-insight is down, and we finally treat data as a product.', name:'David Kumar', role:'Senior Manager — Verizon', ini:'DK'},
  ];
  return (
    <section style={{padding:'90px 0', background:'#fff'}}>
      <div className="container">
        <div className="section-title">
          <div className="label-tag">Client Outcomes</div>
          <h2>Delivery That Moves the Business</h2>
          <p>How enterprises use ePace to deliver AI, cloud and data transformations — and the outcomes they unlock.</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24}}>
          {quotes.map(q => (
            <div key={q.name} style={{background:'#fff', border:'1px solid var(--gray-200)', borderRadius:16, padding:30, position:'relative'}}>
              <div style={{position:'absolute', top:12, left:20, fontSize:'4.5rem', color:'var(--blue)', opacity:0.12, lineHeight:1, fontFamily:'serif'}}>"</div>
              <div style={{color:'var(--amber)', fontSize:14, letterSpacing:2, marginBottom:12}}>{'★'.repeat(q.s)}</div>
              <p style={{color:'#2d3748', fontSize:14, lineHeight:1.8, marginBottom:22, fontStyle:'italic'}}>{q.t}</p>
              <div style={{display:'flex', alignItems:'center', gap:12}}>
                <div style={{width:44, height:44, borderRadius:'50%', background:'var(--grad-blue)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:14}}>{q.ini}</div>
                <div>
                  <span style={{fontSize:14, fontWeight:700, color:'var(--navy)', display:'block'}}>{q.name}</span>
                  <span style={{fontSize:12, color:'var(--fg3)'}}>{q.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({onCta}) {
  return (
    <section style={{padding:'90px 0', background:'var(--grad-hero)', position:'relative', overflow:'hidden', textAlign:'center'}}>
      <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse 700px 500px at 50% 50%, rgba(26,86,219,0.2) 0%, transparent 70%)'}}/>
      <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'60px 60px'}}/>
      <div className="container" style={{position:'relative', zIndex:2}}>
        <div className="label-tag light" style={{margin:'0 auto 18px'}}>Ready to Transform?</div>
        <h2 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'2.6rem', color:'#fff', letterSpacing:-0.5, margin:'0 0 14px', fontWeight:700}}>Engineer Your Next<br/>Chapter of Growth</h2>
        <p style={{fontSize:'1.05rem', color:'rgba(255,255,255,0.68)', maxWidth:540, margin:'0 auto 34px', lineHeight:1.75}}>From AI platforms and cloud modernization to data products and managed services — ePace is the delivery-led partner for your digital transformation.</p>
        <div style={{display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap'}}>
          <a href="#" onClick={e=>{e.preventDefault();onCta&&onCta('contact');}} className="btn btn-white btn-lg">Talk to Delivery →</a>
          <a href="#" onClick={e=>{e.preventDefault();onCta&&onCta('services');}} className="btn btn-ghost btn-lg">View Capabilities</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { GlobalSection, Process, Clients, Testimonials, CTA });
