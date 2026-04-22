// PageHeader, ContactSection, Careers

function PageHeader({title, subtitle, crumb}) {
  return (
    <div style={{background:'var(--grad-hero)', color:'#fff', padding:'76px 0', textAlign:'center', position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse 600px 400px at 50% 60%, rgba(26,86,219,0.18) 0%, transparent 65%)'}}/>
      <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize:'50px 50px'}}/>
      <div className="container" style={{position:'relative', zIndex:2}}>
        <h1 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'2.7rem', margin:'0 0 12px', letterSpacing:-0.5, fontWeight:800, color:'#fff'}}>{title}</h1>
        <p style={{fontSize:'1.05rem', color:'rgba(255,255,255,0.65)', margin:0}}>{subtitle}</p>
        {crumb && <div style={{marginTop:14, fontSize:13, color:'rgba(255,255,255,0.45)'}}><a href="#" style={{color:'#60a5fa'}}>Home</a> <span style={{margin:'0 7px'}}>›</span>{crumb}</div>}
      </div>
    </div>
  );
}

function ContactSection({onSubmit}) {
  const [sent, setSent] = React.useState(false);
  const [btnLabel, setBtnLabel] = React.useState('Send Message →');
  function submit(e) {
    e.preventDefault();
    setBtnLabel('Sending…');
    setTimeout(() => { setBtnLabel('✓ Message Sent!'); setSent(true); onSubmit && onSubmit(); }, 900);
  }
  return (
    <section style={{padding:'90px 0', background:'var(--gray-50)'}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.55fr', gap:56, alignItems:'start'}}>
          <div>
            <h2 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'2rem', color:'var(--navy)', margin:'0 0 14px', letterSpacing:-0.3, fontWeight:700}}>Talk to Delivery</h2>
            <p style={{color:'var(--fg2)', lineHeight:1.8, marginBottom:28, fontSize:'1rem'}}>Share your transformation goal and a delivery lead will respond within one business day with a proposed approach, engagement model and next steps.</p>
            <div style={{display:'flex', flexDirection:'column', gap:18}}>
              {[
                {ico:'📍', t:'Headquarters', s:'1333 Corporate Drive #120, Irving, TX 75038'},
                {ico:'📞', t:'Phone', s:'(972) 525-8919'},
                {ico:'✉', t:'Email', s:'info@epacetech.com'},
                {ico:'🌎', t:'Delivery Centers', s:'India · Brazil · Argentina · Mexico'},
              ].map(c => (
                <div key={c.t} style={{display:'flex', gap:14, alignItems:'flex-start'}}>
                  <div style={{width:44, height:44, background:'var(--grad-blue)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0, boxShadow:'0 4px 14px rgba(26,86,219,0.3)'}}>{c.ico}</div>
                  <div>
                    <strong style={{display:'block', fontSize:13, fontWeight:700, color:'var(--navy)', marginBottom:2}}>{c.t}</strong>
                    <span style={{fontSize:13.5, color:'var(--fg2)'}}>{c.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:'#fff', borderRadius:24, padding:40, boxShadow:'var(--shadow-md)', border:'1px solid var(--gray-200)'}}>
            <h3 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'1.25rem', color:'var(--navy)', margin:'0 0 4px'}}>Send Us a Message</h3>
            <p style={{fontSize:13.5, color:'var(--fg3)', marginBottom:26, margin:'0 0 26px'}}>We'll get back to you within one business day.</p>
            <form onSubmit={submit}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
                <Field label="First Name *" placeholder="John"/>
                <Field label="Last Name *" placeholder="Smith"/>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
                <Field label="Email *" placeholder="john@company.com" type="email"/>
                <Field label="Phone" placeholder="(555) 000-0000"/>
              </div>
              <div style={{marginBottom:16}}>
                <label style={lbl}>I'm interested in…</label>
                <select style={inp}>
                  <option>Select a capability</option>
                  <option>Digital Transformation</option>
                  <option>AI &amp; Generative AI</option>
                  <option>Cloud &amp; Platform Engineering</option>
                  <option>Data &amp; Analytics</option>
                  <option>Application Development</option>
                  <option>Managed Services</option>
                </select>
              </div>
              <div style={{marginBottom:16}}>
                <label style={lbl}>Message *</label>
                <textarea style={{...inp, height:115, resize:'vertical'}} placeholder="Tell us about your transformation or delivery need…"/>
              </div>
              <button type="submit" className="btn btn-primary" disabled={sent} style={{width:'100%', justifyContent:'center', padding:14, fontSize:15, borderRadius:8, background: sent ? 'linear-gradient(135deg,#10b981,#059669)' : undefined}}>{btnLabel}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const lbl = {display:'block', fontSize:12, fontWeight:700, color:'var(--gray-700)', marginBottom:6, textTransform:'uppercase', letterSpacing:0.2};
const inp = {width:'100%', padding:'11px 14px', border:'1.5px solid var(--gray-200)', borderRadius:10, fontSize:14, color:'var(--fg1)', fontFamily:'inherit', background:'var(--gray-50)', outline:'none', boxSizing:'border-box'};

function Field({label, placeholder, type='text'}) {
  return (
    <div style={{marginBottom:16}}>
      <label style={lbl}>{label}</label>
      <input type={type} placeholder={placeholder} style={inp}/>
    </div>
  );
}

function CareersList() {
  const jobs = [
    {t:'Senior ML Engineer / AI Specialist', loc:'Remote', pay:'$140k – $170k', type:'Direct Hire', badge:'AI / ML', bc:'purple'},
    {t:'Cloud Architect (AWS / Azure)',      loc:'Irving, TX', pay:'$135k – $165k', type:'Contract', badge:'Cloud', bc:'blue'},
    {t:'DevOps / SRE Engineer',              loc:'Remote', pay:'$120k – $150k', type:'Direct Hire', badge:'DevOps', bc:'green'},
    {t:'Senior Data Engineer (Databricks)',  loc:'Hybrid — Dallas', pay:'$130k – $160k', type:'Contract-to-Hire', badge:'Data', bc:'amber'},
    {t:'Penetration Tester',                 loc:'Remote', pay:'$125k – $155k', type:'Direct Hire', badge:'Security', bc:'blue'},
    {t:'Frontend Engineer (React / Next)',   loc:'Remote', pay:'$110k – $140k', type:'Contract', badge:'Engineering', bc:'purple'},
  ];
  const bg = {blue:'#dbeafe', green:'#d1fae5', amber:'#fef3c7', purple:'#ede9fe'};
  const fg = {blue:'#1347c0', green:'#059669', amber:'#d97706', purple:'#6d28d9'};
  return (
    <section style={{padding:'90px 0'}}>
      <div className="container">
        <div className="section-title">
          <div className="label-tag">Now Hiring</div>
          <h2>Current Open Positions</h2>
          <p>Hot opportunities across AI, cloud, data, and engineering. Updated weekly — check back often.</p>
        </div>
        <div>
          {jobs.map(j => (
            <div key={j.t} style={{background:'#fff', border:'1px solid var(--gray-200)', borderRadius:10, padding:'24px 28px', marginBottom:14, display:'flex', alignItems:'center', justifyContent:'space-between', gap:20}}>
              <div>
                <h3 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'1rem', color:'var(--navy)', margin:'0 0 7px', fontWeight:700}}>{j.t}</h3>
                <div style={{display:'flex', gap:14, flexWrap:'wrap'}}>
                  <span style={{fontSize:13, color:'var(--fg2)'}}>🌐 {j.loc}</span>
                  <span style={{fontSize:13, color:'var(--fg2)'}}>💰 {j.pay}</span>
                  <span style={{fontSize:13, color:'var(--fg2)'}}>📋 {j.type}</span>
                </div>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:12, flexShrink:0}}>
                <span style={{display:'inline-block', padding:'3px 11px', borderRadius:50, fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:0.3, background:bg[j.bc], color:fg[j.bc]}}>{j.badge}</span>
                <button className="btn btn-primary" style={{fontSize:13, padding:'9px 18px'}}>Apply →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PageHeader, ContactSection, CareersList });
