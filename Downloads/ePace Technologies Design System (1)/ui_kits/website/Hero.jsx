// Hero.jsx — big hero with glass stats card

function Hero({onCta}) {
  const heroStyle = {
    background:'linear-gradient(135deg, #0b1f3a 0%, #1a3a6b 50%, #1a56db 100%)',
    minHeight:580, display:'flex', alignItems:'center', position:'relative', overflow:'hidden'
  };
  return (
    <section style={heroStyle}>
      <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse 900px 600px at 75% 50%, rgba(26,86,219,0.25) 0%, transparent 65%), radial-gradient(ellipse 400px 300px at 15% 80%, rgba(8,145,178,0.15) 0%, transparent 60%)'}}/>
      <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)', backgroundSize:'60px 60px'}}/>
      <div className="container" style={{position:'relative', zIndex:2, padding:'80px 0', width:'100%'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:60, alignItems:'center'}}>
          <div>
            <div style={{display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.25)', color:'#fff', padding:'6px 16px', borderRadius:50, fontSize:12, fontWeight:700, letterSpacing:0.8, textTransform:'uppercase', marginBottom:24}}>
              <span style={{width:7, height:7, background:'#4ade80', borderRadius:'50%', animation:'blink 2s infinite'}}/>
              Digital Transformation &amp; AI-Led Delivery
            </div>
            <h1 style={{fontFamily:'Plus Jakarta Sans, Inter, sans-serif', fontSize:'3.2rem', fontWeight:800, color:'#fff', lineHeight:1.15, letterSpacing:-1, margin:'0 0 20px'}}>
              Engineering Your <span style={{color:'#60a5fa'}}>Digital Future</span>,<br/>End to End
            </h1>
            <p style={{fontSize:'1.1rem', color:'rgba(255,255,255,0.72)', lineHeight:1.8, marginBottom:34, maxWidth:520}}>
              A delivery-led digital transformation partner for modern enterprises. We design, build, and run mission-critical software, data, and AI platforms — globally, with measurable outcomes.
            </p>
            <div style={{display:'flex', gap:14, flexWrap:'wrap', marginBottom:48}}>
              <a href="#" onClick={e=>{e.preventDefault();onCta&&onCta('contact');}} className="btn btn-white btn-lg">Start a Transformation →</a>
              <a href="#" onClick={e=>{e.preventDefault();onCta&&onCta('services');}} className="btn btn-ghost btn-lg">Our Capabilities</a>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:14}}>
              <div style={{display:'flex'}}>
                {['D','V','Q','G'].map((l,i) => (
                  <span key={l} style={{width:36, height:36, borderRadius:'50%', background:'linear-gradient(135deg,#60a5fa,#3b82f6)', border:'2px solid rgba(255,255,255,0.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, color:'#fff', marginLeft: i===0 ? 0 : -10}}>{l}</span>
                ))}
              </div>
              <div style={{fontSize:13, color:'rgba(255,255,255,0.65)'}}>Delivering for <strong style={{color:'#fff'}}>100+ Enterprises</strong> — Dell, Verizon, Qualcomm &amp; more</div>
            </div>
          </div>
          <HeroCard/>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}@keyframes floatUp{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}`}</style>
    </section>
  );
}

function HeroCard() {
  return (
    <div style={{position:'relative'}}>
      <div style={{position:'absolute', top:-16, right:-10, background:'#fff', borderRadius:50, padding:'7px 14px', display:'flex', alignItems:'center', gap:7, boxShadow:'var(--shadow-lg)', fontSize:12, fontWeight:700, color:'var(--navy)', animation:'floatUp 3s ease-in-out infinite', zIndex:3}}>🤖 AI &amp; GenAI Ready</div>
      <div style={{background:'rgba(255,255,255,0.09)', border:'1px solid rgba(255,255,255,0.15)', backdropFilter:'blur(20px)', borderRadius:24, padding:30, boxShadow:'0 24px 60px rgba(0,0,0,0.3)'}}>
        <div style={{display:'flex', alignItems:'center', gap:10, paddingBottom:18, borderBottom:'1px solid rgba(255,255,255,0.1)', marginBottom:20}}>
          <div style={{width:36, height:36, background:'var(--grad-blue)', borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18}}>📊</div>
          <div>
            <h4 style={{color:'#fff', fontSize:14, margin:0}}>ePace Performance Dashboard</h4>
            <span style={{fontSize:12, color:'rgba(255,255,255,0.5)'}}>Live metrics — 2026</span>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16}}>
          {[{v:'500+',l:'Programs Delivered'},{v:'98%',l:'On-Time Delivery'},{v:'40%',l:'Avg. TCO Savings'},{v:'5',l:'Delivery Regions'}].map(s => (
            <div key={s.l} style={{background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, padding:16, textAlign:'center'}}>
              <div style={{fontSize:'1.8rem', fontWeight:900, color:'#fff', lineHeight:1, marginBottom:4}}>{s.v}</div>
              <div style={{fontSize:11, color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:0.5}}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{background:'rgba(16,185,129,0.15)', border:'1px solid rgba(16,185,129,0.3)', borderRadius:10, padding:'12px 14px', display:'flex', alignItems:'center', gap:10, fontSize:13, color:'rgba(255,255,255,0.8)'}}>
          🌍 <span><strong style={{color:'#4ade80'}}>Global Delivery Centers</strong> — India, Brazil, Argentina &amp; Mexico</span>
        </div>
      </div>
    </div>
  );
}

function StatsStrip() {
  return (
    <div style={{background:'var(--navy-mid)', borderTop:'1px solid rgba(255,255,255,0.06)'}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)'}}>
          {[{n:'25+',l:'Years Delivering'},{n:'500+',l:'Programs Delivered'},{n:'100+',l:'Enterprise Clients'},{n:'24/7',l:'Global Delivery'}].map((s,i,arr) => (
            <div key={s.l} style={{padding:'32px 24px', textAlign:'center', borderRight: i<arr.length-1 ? '1px solid rgba(255,255,255,0.06)' : 'none'}}>
              <h3 style={{fontSize:'2.4rem', fontWeight:900, lineHeight:1, color:'#fff', margin:'0 0 6px'}}>{s.n}</h3>
              <p style={{fontSize:12, color:'rgba(255,255,255,0.45)', textTransform:'uppercase', letterSpacing:1, fontWeight:600, margin:0}}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Hero, StatsStrip });
