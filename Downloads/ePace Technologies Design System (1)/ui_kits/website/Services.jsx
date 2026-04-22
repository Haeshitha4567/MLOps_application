// Services.jsx — 9-card services grid

const SERVICES = [
  {ico:'🧭', tile:'blue',   title:'Digital Transformation', desc:'End-to-end modernization programs — strategy, operating model, technology roadmap, and large-scale delivery with measurable business outcomes.'},
  {ico:'🤖', tile:'purple', title:'AI & Generative AI',     desc:'GenAI platforms, LLM-powered applications, RAG, AI agents, MLOps, and computer vision — built, deployed and operated at enterprise scale.'},
  {ico:'🔌', tile:'indigo', title:'Application Development', desc:'Custom software, microservices, API platforms, and full-stack web &amp; mobile — delivered via agile pods with engineering excellence built in.'},
  {ico:'☁️', tile:'sky',    title:'Cloud & Platform Engineering', desc:'AWS, Azure, and GCP migrations, landing zones, Kubernetes, Terraform, CI/CD, SRE and FinOps — run as a managed capability.'},
  {ico:'📊', tile:'amber',  title:'Data & Analytics',       desc:'Modern data platforms on Databricks &amp; Snowflake, lakehouse architecture, real-time streaming, BI, and advanced analytics products.'},
  {ico:'⚙️', tile:'teal',   title:'Enterprise Modernization', desc:'Legacy application re-platforming, mainframe modernization, ERP &amp; SAP transformation, and business-process re-engineering.'},
  {ico:'🔄', tile:'orange', title:'Managed Services',       desc:'24/7 application, cloud and data managed services delivered from our global centers — predictable SLAs, outcome-based pricing.'},
  {ico:'🛡️', tile:'rose',   title:'Cybersecurity',          desc:'Zero-trust architecture, cloud security, identity, SOC services, and compliance programs (SOC2, ISO 27001, HIPAA, PCI-DSS).'},
  {ico:'🧑\u200d💼', tile:'green', title:'Talent Solutions',       desc:'Flexible staffing and managed capacity to complement our delivery teams — IT contract, contract-to-hire and direct placement.'},
];

const TILE_BG = { blue:'#dbeafe', purple:'#ede9fe', teal:'#ccfbf1', indigo:'#e0e7ff', sky:'#e0f2fe', amber:'#fef3c7', rose:'#ffe4e6', green:'#d1fae5', orange:'#ffedd5' };

function ServiceCard({s}) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={e=>e.preventDefault()}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        background:'#fff', borderRadius:16, padding:'30px 26px',
        border: hover ? '1px solid transparent' : '1px solid var(--gray-200)',
        transition:'var(--t)', position:'relative', overflow:'hidden', display:'block',
        transform: hover ? 'translateY(-5px)' : 'none',
        boxShadow: hover ? 'var(--shadow-lg)' : 'none',
      }}>
      <div style={{position:'absolute', top:0, left:0, right:0, height:3, background:'var(--grad-blue)', transform: hover ? 'scaleX(1)' : 'scaleX(0)', transformOrigin:'left', transition:'transform 0.3s ease'}}/>
      <div style={{width:56, height:56, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, marginBottom:18, background: TILE_BG[s.tile], transform: hover ? 'scale(1.1)' : 'none', transition:'var(--t)'}}>{s.ico}</div>
      <h3 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'1rem', color:'var(--navy)', margin:'0 0 9px', fontWeight:700}}>{s.title}</h3>
      <p style={{fontSize:13.5, color:'var(--fg2)', lineHeight:1.7, margin:'0 0 14px'}}>{s.desc}</p>
      <div style={{fontSize:13, fontWeight:700, color:'var(--blue)', display:'flex', alignItems:'center', gap: hover ? 8 : 4, transition:'gap .2s'}}>Learn more →</div>
    </a>
  );
}

function Services({title='Capabilities That Power Digital Transformation', showAll=true}) {
  return (
    <section style={{padding:'90px 0', background:'var(--gray-50)'}}>
      <div className="container">
        <div className="section-title">
          <div className="label-tag">What We Deliver</div>
          <h2>{title}</h2>
          <p>A full-stack delivery partner across digital, AI, cloud, data and cyber — engineered to take your enterprise from strategy to production.</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20}}>
          {SERVICES.map(s => <ServiceCard key={s.title} s={s}/>)}
        </div>
        {showAll && <div style={{textAlign:'center', marginTop:44}}>
          <a href="#" onClick={e=>e.preventDefault()} className="btn btn-outline" style={{borderRadius:8, padding:'13px 32px'}}>View All Services</a>
        </div>}
      </div>
    </section>
  );
}

Object.assign(window, { Services, ServiceCard, SERVICES });
