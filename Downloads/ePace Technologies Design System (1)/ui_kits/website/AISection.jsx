// AISection.jsx — dark AI section with capability bars

function AISection({onCta}) {
  return (
    <section style={{padding:'90px 0', background:'var(--navy)', position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse 700px 500px at 0% 60%, rgba(26,86,219,0.25) 0%, transparent 65%), radial-gradient(ellipse 500px 400px at 100% 20%, rgba(8,145,178,0.2) 0%, transparent 60%)'}}/>
      <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize:'50px 50px'}}/>
      <div className="container" style={{position:'relative', zIndex:2}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center'}}>
          <div>
            <div className="label-tag light">🤖 AI-Led Transformation</div>
            <h2 style={{fontFamily:'Plus Jakarta Sans, sans-serif', fontSize:'2.2rem', color:'#fff', margin:'0 0 16px', letterSpacing:-0.3, fontWeight:700}}>Delivering the <span style={{color:'#60a5fa'}}>AI-Native Enterprise</span></h2>
            <p style={{color:'rgba(255,255,255,0.65)', fontSize:'1.02rem', lineHeight:1.8, marginBottom:28}}>We operationalize AI at enterprise scale — from high-value use-case discovery to production deployment, MLOps, and change management. Outcomes over experiments.</p>
            <div style={{display:'flex', flexDirection:'column', gap:14, marginBottom:32}}>
              {[
                {ico:'🧠', h:'GenAI Platforms & LLM Products', p:'Production-grade RAG, agent orchestration, fine-tuning and enterprise LLM platforms on Azure OpenAI, Bedrock and Vertex AI.'},
                {ico:'📈', h:'AI Strategy & Value Engineering', p:'Use-case discovery, ROI modeling, responsible-AI frameworks and a phased adoption roadmap tied to P&amp;L outcomes.'},
                {ico:'🔬', h:'MLOps & Production AI', p:'End-to-end ML pipelines, CI/CD for models, monitoring, drift detection and governance — delivered as a managed service.'},
                {ico:'🎯', h:'Intelligent Automation', p:'Process discovery, document AI, copilots and agentic workflows that measurably reduce cost-to-serve and cycle time.'},
              ].map(f => (
                <div key={f.h} style={{display:'flex', gap:14, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:16}}>
                  <div style={{width:40, height:40, borderRadius:9, background:'var(--grad-blue)', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:19}}>{f.ico}</div>
                  <div>
                    <h4 style={{fontSize:13.5, color:'#fff', margin:'0 0 3px', fontWeight:700}}>{f.h}</h4>
                    <p style={{fontSize:12.5, color:'rgba(255,255,255,0.55)', margin:0, lineHeight:1.5}}>{f.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" onClick={e=>{e.preventDefault();onCta&&onCta('services');}} className="btn btn-primary" style={{borderRadius:8}}>See Our AI Delivery Playbook →</a>
          </div>
          <AICard/>
        </div>
      </div>
    </section>
  );
}

function AICard() {
  const caps = [
    {l:'Generative AI & LLMs', pct:95, lv:'Expert'},
    {l:'Machine Learning / MLOps', pct:90, lv:'Expert'},
    {l:'Computer Vision', pct:75, lv:'Advanced'},
    {l:'NLP & Speech AI', pct:82, lv:'Advanced'},
    {l:'AI Infrastructure', pct:78, lv:'Advanced'},
  ];
  return (
    <div style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:24, padding:28, backdropFilter:'blur(16px)'}}>
      <div style={{display:'flex', alignItems:'center', gap:12, paddingBottom:18, borderBottom:'1px solid rgba(255,255,255,0.07)', marginBottom:18}}>
        <div style={{width:42, height:42, background:'var(--grad-blue)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22}}>🧠</div>
        <div>
          <h4 style={{color:'#fff', fontSize:14, margin:0}}>AI Capability Matrix</h4>
          <span style={{fontSize:12, color:'rgba(255,255,255,0.45)'}}>ePace Technologies 2026</span>
        </div>
      </div>
      {caps.map(c => (
        <div key={c.l} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 12px', background:'rgba(255,255,255,0.04)', borderRadius:8, marginBottom:8, gap:12}}>
          <span style={{fontSize:13, color:'rgba(255,255,255,0.8)', flex:1}}>{c.l}</span>
          <div style={{flex:'0 0 110px', height:5, background:'rgba(255,255,255,0.08)', borderRadius:3}}>
            <div style={{width:`${c.pct}%`, height:'100%', borderRadius:3, background:'linear-gradient(90deg,#3b82f6,#60a5fa)'}}/>
          </div>
          <span style={{fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.55)', minWidth:60, textAlign:'right'}}>{c.lv}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { AISection });
