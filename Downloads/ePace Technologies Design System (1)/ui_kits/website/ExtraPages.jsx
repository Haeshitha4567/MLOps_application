// AboutPage, CaseStudiesPage, EmployeePage

function AboutPage({onCta}) {
  const values = [
    {ico:'🎯', h:'Outcome-Obsessed', p:'Every engagement is measured by the business outcome it delivers — not hours billed or artifacts produced.'},
    {ico:'🛠️', h:'Engineering Excellence', p:'We hold a high bar on architecture, code quality, DevSecOps and production reliability on every program.'},
    {ico:'🤝', h:'Client Partnership', p:'We operate as an extension of your team — transparent plans, open backlogs, shared accountability.'},
    {ico:'🌍', h:'Global, One Team', p:'Follow-the-sun delivery from US, India and LATAM — one culture, one governance model, one quality bar.'},
    {ico:'🧠', h:'Curious & Learning', p:'We invest heavily in AI, cloud and data capabilities so our clients always get the sharpest thinking.'},
    {ico:'🛡️', h:'Integrity First', p:'We say what we will deliver, and we deliver what we said — with enterprise-grade security and compliance.'},
  ];
  const leaders = [
    {ini:'RA', n:'Rajesh Anand', r:'Founder & CEO', b:'25+ years leading enterprise digital programs across BFSI and Hi-Tech.'},
    {ini:'PS', n:'Priya Sharma', r:'Chief Delivery Officer', b:'Runs the global delivery organization across US, India and LATAM.'},
    {ini:'MK', n:'Michael Keller', r:'SVP, AI & Data', b:'Former Principal at a top-tier consultancy. Leads the AI & Data practice.'},
    {ini:'LN', n:'Luiz Nogueira', r:'VP, LATAM Delivery', b:'Runs nearshore delivery from São Paulo. Specialist in agile pod engineering.'},
  ];
  return (
    <>
      <PageHeader title="About ePace" subtitle="A delivery-led digital transformation partner — built for the AI era" crumb="About Us"/>
      <section style={{padding:'90px 0', background:'#fff'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center'}}>
            <div>
              <div className="label-tag">Our Story</div>
              <h2 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'2.1rem', color:'var(--navy)', margin:'0 0 18px', letterSpacing:-0.3, fontWeight:700}}>25 Years of Engineering the Digital Enterprise</h2>
              <p style={{color:'var(--fg2)', lineHeight:1.8, fontSize:'1.02rem', marginBottom:16}}>Founded in 2000 in Irving, Texas, ePace Technologies has grown from a boutique US consultancy into a global delivery partner with centers across India, Brazil, Argentina and Mexico.</p>
              <p style={{color:'var(--fg2)', lineHeight:1.8, fontSize:'1.02rem', marginBottom:16}}>We help Fortune 500 and fast-growing enterprises design, build and run mission-critical AI, cloud, data and application platforms — with an operating model tuned for outcomes, not hours.</p>
              <p style={{color:'var(--fg2)', lineHeight:1.8, fontSize:'1.02rem'}}>Today we serve 100+ enterprise clients and run 500+ programs across BFSI, Hi-Tech, Healthcare, Telecom and Manufacturing.</p>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
              {[{n:'25+',l:'Years Delivering'},{n:'500+',l:'Programs Delivered'},{n:'100+',l:'Enterprise Clients'},{n:'5',l:'Delivery Regions'}].map(s => (
                <div key={s.l} style={{background:'var(--gray-50)', border:'1px solid var(--gray-200)', borderRadius:16, padding:'28px 20px', textAlign:'center'}}>
                  <div style={{fontSize:'2.1rem', fontWeight:900, color:'var(--blue)', lineHeight:1, marginBottom:6}}>{s.n}</div>
                  <div style={{fontSize:12, color:'var(--fg2)', textTransform:'uppercase', letterSpacing:0.6, fontWeight:700}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{padding:'90px 0', background:'var(--gray-50)'}}>
        <div className="container">
          <div className="section-title">
            <div className="label-tag">What We Stand For</div>
            <h2>Our Values</h2>
            <p>Six beliefs that guide how we build teams, run programs and partner with enterprises.</p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20}}>
            {values.map(v => (
              <div key={v.h} style={{background:'#fff', border:'1px solid var(--gray-200)', borderRadius:16, padding:'26px 24px'}}>
                <div style={{width:52, height:52, borderRadius:10, background:'var(--blue-light)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, marginBottom:16}}>{v.ico}</div>
                <h3 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'1rem', color:'var(--navy)', margin:'0 0 8px', fontWeight:700}}>{v.h}</h3>
                <p style={{fontSize:13.5, color:'var(--fg2)', lineHeight:1.7, margin:0}}>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{padding:'90px 0', background:'#fff'}}>
        <div className="container">
          <div className="section-title">
            <div className="label-tag">Leadership</div>
            <h2>Meet The Team</h2>
            <p>Delivery leaders with 20+ years in enterprise technology, consulting and global program management.</p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20}}>
            {leaders.map(p => (
              <div key={p.n} style={{background:'var(--gray-50)', border:'1px solid var(--gray-200)', borderRadius:16, padding:'26px 22px', textAlign:'center'}}>
                <div style={{width:72, height:72, borderRadius:'50%', background:'var(--grad-blue)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, fontWeight:800, margin:'0 auto 14px'}}>{p.ini}</div>
                <h4 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:15, color:'var(--navy)', margin:'0 0 4px', fontWeight:700}}>{p.n}</h4>
                <div style={{fontSize:12, color:'var(--blue)', fontWeight:700, textTransform:'uppercase', letterSpacing:0.5, marginBottom:10}}>{p.r}</div>
                <p style={{fontSize:12.5, color:'var(--fg2)', lineHeight:1.6, margin:0}}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA onCta={onCta}/>
    </>
  );
}

function CaseStudiesPage({onCta}) {
  const cases = [
    {
      tag:'AI & GenAI', tagBg:'#ede9fe', tagFg:'#6d28d9',
      client:'Global Telco',
      title:'GenAI Customer-Service Platform Live in 5 Months',
      summary:'Designed and delivered an enterprise RAG platform across 12 contact centers with full LLM governance, analytics and human-in-the-loop guardrails.',
      stats:[{n:'-28%',l:'Avg. Handle Time'},{n:'+22pt',l:'CSAT Lift'},{n:'5 mo',l:'To Production'}],
    },
    {
      tag:'Cloud Modernization', tagBg:'#dbeafe', tagFg:'#1347c0',
      client:'Fortune 500 Semiconductor',
      title:'40+ Legacy Apps Replatformed to AWS',
      summary:'Factory-model modernization program — landing zones, microservices, CI/CD, SRE handover — delivered from our LATAM nearshore centers.',
      stats:[{n:'40+',l:'Apps Modernized'},{n:'-38%',l:'Infra Cost'},{n:'0',l:'Prod Incidents'}],
    },
    {
      tag:'Data & Analytics', tagBg:'#fef3c7', tagFg:'#d97706',
      client:'US Carrier',
      title:'Managed Databricks Lakehouse for 2PB Workload',
      summary:'Rebuilt the data platform on Databricks + Unity Catalog with streaming pipelines; now operated as an ePace-managed capability with SLAs.',
      stats:[{n:'2PB',l:'Active Data'},{n:'10x',l:'Faster Queries'},{n:'99.95%',l:'Platform SLA'}],
    },
    {
      tag:'Digital Transformation', tagBg:'#ccfbf1', tagFg:'#0891b2',
      client:'Mid-Market Bank',
      title:'Core Banking & Digital Channels Modernization',
      summary:'3-year transformation across digital banking, payments and analytics — Envision-to-Run delivery, outcome-based pricing with shared KPIs.',
      stats:[{n:'+41%',l:'Digital Adoption'},{n:'-52%',l:'Cycle Time'},{n:'3 yr',l:'Program'}],
    },
    {
      tag:'Managed Services', tagBg:'#d1fae5', tagFg:'#059669',
      client:'Healthcare Payer',
      title:'24/7 Application & Data Managed Services',
      summary:'Runs 120+ applications and a modern data estate across Azure — follow-the-sun from India & LATAM with outcome-based SLAs.',
      stats:[{n:'120+',l:'Apps Run'},{n:'24/7',l:'Coverage'},{n:'-32%',l:'TCO'}],
    },
    {
      tag:'Cybersecurity', tagBg:'#ffe4e6', tagFg:'#be123c',
      client:'Global Manufacturer',
      title:'Zero-Trust Rollout Across 40 Sites',
      summary:'Designed and delivered identity-centric zero-trust with ZTNA, PAM and SOC uplift — aligned to NIST CSF and ISO 27001.',
      stats:[{n:'40',l:'Sites Secured'},{n:'-64%',l:'Attack Surface'},{n:'SOC2',l:'Certified'}],
    },
  ];
  return (
    <>
      <PageHeader title="Case Studies" subtitle="How enterprises use ePace to deliver AI, cloud, data and modern application transformations" crumb="Case Studies"/>
      <section style={{padding:'90px 0', background:'var(--gray-50)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:22}}>
            {cases.map(c => (
              <article key={c.title} style={{background:'#fff', border:'1px solid var(--gray-200)', borderRadius:16, padding:'28px 28px 24px', display:'flex', flexDirection:'column', gap:16}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:14}}>
                  <span style={{display:'inline-block', padding:'4px 12px', borderRadius:50, fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:0.3, background:c.tagBg, color:c.tagFg}}>{c.tag}</span>
                  <span style={{fontSize:12, color:'var(--fg3)', fontWeight:600}}>Client: {c.client}</span>
                </div>
                <h3 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'1.22rem', color:'var(--navy)', margin:0, lineHeight:1.3, fontWeight:700}}>{c.title}</h3>
                <p style={{fontSize:14, color:'var(--fg2)', lineHeight:1.7, margin:0}}>{c.summary}</p>
                <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, paddingTop:14, borderTop:'1px solid var(--gray-200)'}}>
                  {c.stats.map(s => (
                    <div key={s.l} style={{textAlign:'center'}}>
                      <div style={{fontSize:'1.3rem', fontWeight:900, color:'var(--blue)', lineHeight:1, marginBottom:4}}>{s.n}</div>
                      <div style={{fontSize:10.5, color:'var(--fg3)', textTransform:'uppercase', letterSpacing:0.5, fontWeight:700}}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <a href="#" onClick={e=>e.preventDefault()} style={{fontSize:13, fontWeight:700, color:'var(--blue)', marginTop:4}}>Read full case study →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Testimonials/>
      <CTA onCta={onCta}/>
    </>
  );
}

function EmployeePage({onCta}) {
  const portals = [
    {ico:'🕐', h:'Timesheets', p:'Submit weekly timesheets and track approvals.', cta:'Open Timesheets'},
    {ico:'📄', h:'Pay & Benefits', p:'View payslips, W-2s, and manage benefits enrollment.', cta:'View Pay Portal'},
    {ico:'📚', h:'Learning & ePace Academy', p:'Courses, certifications and career development tracks.', cta:'Start Learning'},
    {ico:'🎁', h:'Referral Program', p:'Refer an engineer — earn up to $3,000 per successful placement.', cta:'Refer Someone'},
    {ico:'🛟', h:'HR & IT Help', p:'Raise a ticket with HR, IT, or Global Mobility — 24/7 response.', cta:'Open a Ticket'},
    {ico:'📣', h:'Company News', p:'Latest announcements, town halls, and recognition from around the globe.', cta:'Read Updates'},
  ];
  const [signedIn, setSignedIn] = React.useState(false);
  return (
    <>
      <PageHeader title="Employee Portal" subtitle="Everything you need as part of the ePace global team — in one place" crumb="Employee"/>
      <section style={{padding:'90px 0', background:'#fff'}}>
        <div className="container">
          {!signedIn ? (
            <div style={{maxWidth:440, margin:'0 auto', background:'var(--gray-50)', border:'1px solid var(--gray-200)', borderRadius:16, padding:40}}>
              <h3 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'1.3rem', color:'var(--navy)', margin:'0 0 6px', fontWeight:700}}>Employee Sign In</h3>
              <p style={{fontSize:13.5, color:'var(--fg2)', margin:'0 0 24px'}}>Use your ePace SSO credentials to continue.</p>
              <div style={{marginBottom:14}}><label style={{display:'block', fontSize:12, fontWeight:700, color:'var(--gray-700)', marginBottom:6, textTransform:'uppercase'}}>Work Email</label><input defaultValue="priya.sharma@epacetech.com" style={{width:'100%', padding:'11px 14px', border:'1.5px solid var(--gray-200)', borderRadius:10, fontSize:14, fontFamily:'inherit', background:'#fff', boxSizing:'border-box'}}/></div>
              <div style={{marginBottom:20}}><label style={{display:'block', fontSize:12, fontWeight:700, color:'var(--gray-700)', marginBottom:6, textTransform:'uppercase'}}>Password</label><input type="password" defaultValue="••••••••••" style={{width:'100%', padding:'11px 14px', border:'1.5px solid var(--gray-200)', borderRadius:10, fontSize:14, fontFamily:'inherit', background:'#fff', boxSizing:'border-box'}}/></div>
              <button className="btn btn-primary" style={{width:'100%', justifyContent:'center', padding:13, fontSize:15}} onClick={()=>setSignedIn(true)}>Sign In with SSO →</button>
              <p style={{fontSize:12, color:'var(--fg3)', textAlign:'center', marginTop:16}}>Need access? <a href="#" style={{color:'var(--blue)', fontWeight:700}}>Contact IT Help Desk</a></p>
            </div>
          ) : (
            <>
              <div style={{background:'var(--blue-light)', border:'1px solid rgba(26,86,219,0.2)', borderRadius:12, padding:'16px 20px', marginBottom:28, display:'flex', alignItems:'center', justifyContent:'space-between', gap:14}}>
                <div><strong style={{color:'var(--navy)'}}>Welcome back, Priya.</strong> <span style={{color:'var(--fg2)'}}>You have 3 timesheet approvals and 1 new training assigned.</span></div>
                <button className="btn btn-outline" style={{padding:'8px 18px', fontSize:13}} onClick={()=>setSignedIn(false)}>Sign out</button>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20}}>
                {portals.map(p => (
                  <div key={p.h} style={{background:'#fff', border:'1px solid var(--gray-200)', borderRadius:16, padding:'26px 24px'}}>
                    <div style={{width:52, height:52, borderRadius:10, background:'var(--blue-light)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, marginBottom:16}}>{p.ico}</div>
                    <h3 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:15, color:'var(--navy)', margin:'0 0 6px', fontWeight:700}}>{p.h}</h3>
                    <p style={{fontSize:13, color:'var(--fg2)', lineHeight:1.65, margin:'0 0 14px'}}>{p.p}</p>
                    <a href="#" onClick={e=>e.preventDefault()} style={{fontSize:13, fontWeight:700, color:'var(--blue)'}}>{p.cta} →</a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

Object.assign(window, { AboutPage, CaseStudiesPage, EmployeePage });
