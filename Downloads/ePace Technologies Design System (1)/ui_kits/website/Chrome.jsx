// Chrome.jsx — TopBar, Header, Footer

function TopBar() {
  return (
    <div style={{background:'var(--navy)', color:'rgba(255,255,255,0.6)', fontSize:12.5, padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8}}>
        <div style={{display:'flex', alignItems:'center', gap:20}}>
          <span>📞 (972) 525-8919</span>
          <span>✉ info@epacetech.com</span>
          <span>📍 Irving, TX 75038</span>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:20}}>
          <a href="#">LinkedIn</a><a href="#">Facebook</a><a href="#">Twitter</a>
        </div>
      </div>
    </div>
  );
}

function Header({current='home', onNavigate}) {
  const nav = [
    {id:'home', label:'Home'},
    {id:'services', label:'Capabilities ▾', hasMenu:true},
    {id:'about', label:'About ▾', hasMenu:true},
    {id:'testimonials', label:'Case Studies'},
    {id:'careers', label:'Careers'},
    {id:'employee', label:'Employee ▾', hasMenu:true},
  ];
  return (
    <header style={{background:'#fff', boxShadow:'0 1px 0 var(--gray-200), 0 2px 16px rgba(0,0,0,0.05)', position:'sticky', top:0, zIndex:1000}}>
      <div className="container">
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 0', gap:16}}>
          <a href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate('home');}}>
            <img src="../../assets/logo.png" alt="ePace" style={{height:52, width:'auto', display:'block'}}/>
          </a>
          <nav>
            <ul style={{display:'flex', alignItems:'center', gap:2, listStyle:'none', margin:0, padding:0}}>
              {nav.map(n => (
                <li key={n.id}>
                  <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate && onNavigate(n.id);}}
                    style={{
                      display:'block', padding:'9px 13px', fontSize:13.5, fontWeight:600,
                      color: current===n.id ? 'var(--blue)' : 'var(--gray-800)',
                      background: current===n.id ? 'var(--blue-light)' : 'transparent',
                      borderRadius:7, whiteSpace:'nowrap',
                    }}>{n.label}</a>
                </li>
              ))}
              <li>
                <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate && onNavigate('contact');}}
                  className="btn btn-primary" style={{padding:'9px 18px', fontSize:13, borderRadius:8}}>Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{background:'var(--navy)', color:'rgba(255,255,255,0.55)', padding:'64px 0 0'}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1fr', gap:44, paddingBottom:48, borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
          <div>
            <img src="../../assets/logo-white.png" alt="ePace" style={{height:46, width:'auto', marginBottom:16}}/>
            <p style={{fontSize:13.5, lineHeight:1.8, color:'rgba(255,255,255,0.48)', maxWidth:270, marginBottom:20}}>A delivery-led digital transformation partner. We engineer AI, cloud, data and modern applications for enterprises worldwide — 25+ years of outcomes.</p>
            <div style={{display:'flex', gap:9}}>
              {['in','f','𝕏'].map(s => (
                <a key={s} href="#" style={{width:36, height:36, background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.55)', fontSize:13, fontWeight:700}}>{s}</a>
              ))}
            </div>
          </div>
          <FootCol title="Capabilities" links={['Digital Transformation','AI &amp; Generative AI','Cloud &amp; Platform','Data &amp; Analytics','Application Development','Managed Services']}/>
          <FootCol title="Company" links={['About Us','Delivery Model','Case Studies','Testimonials','Careers']}/>
          <FootCol title="Contact" links={['Contact Us','(972) 525-8919','info@epacetech.com','Employee Portal','Referral Program']}/>
        </div>
        <div style={{padding:'18px 0', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12.5, color:'rgba(255,255,255,0.3)'}}>
          <span>© 2026 ePace Technologies, Inc. All rights reserved.</span>
          <span><a href="#" style={{color:'#60a5fa'}}>Privacy Policy</a> &nbsp;|&nbsp; <a href="#" style={{color:'#60a5fa'}}>Terms</a></span>
        </div>
      </div>
    </footer>
  );
}

function FootCol({title, links}) {
  return (
    <div>
      <h4 style={{fontSize:12, fontWeight:800, color:'#fff', marginBottom:18, textTransform:'uppercase', letterSpacing:1, margin:'0 0 18px'}}>{title}</h4>
      <ul style={{display:'flex', flexDirection:'column', gap:10, listStyle:'none', margin:0, padding:0}}>
        {links.map(l => (
          <li key={l}><a href="#" style={{fontSize:13.5, color:'rgba(255,255,255,0.48)', display:'flex', alignItems:'center', gap:5}}><span style={{color:'#60a5fa', fontSize:16}}>›</span>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { TopBar, Header, Footer });
