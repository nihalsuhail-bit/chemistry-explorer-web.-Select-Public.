
import { useState } from "react";
import {
  Atom, FlaskConical, Search, Menu, X, ChevronRight,
  Sparkles, Layers3, Calculator, Orbit, BookOpen,
  CircleHelp, ArrowUpRight, Beaker, Zap
} from "lucide-react";

const elements = [
  [1,"H","Hydrogen"],[2,"He","Helium"],[3,"Li","Lithium"],
  [4,"Be","Beryllium"],[5,"B","Boron"],[6,"C","Carbon"],
  [7,"N","Nitrogen"],[8,"O","Oxygen"],[9,"F","Fluorine"],
  [10,"Ne","Neon"],[11,"Na","Sodium"],[12,"Mg","Magnesium"],
  [13,"Al","Aluminium"],[14,"Si","Silicon"],[15,"P","Phosphorus"],
  [16,"S","Sulfur"],[17,"Cl","Chlorine"],[18,"Ar","Argon"],
  [19,"K","Potassium"],[20,"Ca","Calcium"],[21,"Sc","Scandium"],
  [22,"Ti","Titanium"],[23,"V","Vanadium"],[24,"Cr","Chromium"],
  [25,"Mn","Manganese"],[26,"Fe","Iron"],[27,"Co","Cobalt"],
  [28,"Ni","Nickel"],[29,"Cu","Copper"],[30,"Zn","Zinc"],
  [31,"Ga","Gallium"],[32,"Ge","Germanium"],[33,"As","Arsenic"],
  [34,"Se","Selenium"],[35,"Br","Bromine"],[36,"Kr","Krypton"],
  [37,"Rb","Rubidium"],[38,"Sr","Strontium"],[39,"Y","Yttrium"],
  [40,"Zr","Zirconium"],[41,"Nb","Niobium"],[42,"Mo","Molybdenum"],
  [43,"Tc","Technetium"],[44,"Ru","Ruthenium"],[45,"Rh","Rhodium"],
  [46,"Pd","Palladium"],[47,"Ag","Silver"],[48,"Cd","Cadmium"],
  [49,"In","Indium"],[50,"Sn","Tin"],[51,"Sb","Antimony"],
  [52,"Te","Tellurium"],[53,"I","Iodine"],[54,"Xe","Xenon"],
  [55,"Cs","Caesium"],[56,"Ba","Barium"],[57,"La","Lanthanum"],
  [58,"Ce","Cerium"],[59,"Pr","Praseodymium"],[60,"Nd","Neodymium"],
  [61,"Pm","Promethium"],[62,"Sm","Samarium"],[63,"Eu","Europium"],
  [64,"Gd","Gadolinium"],[65,"Tb","Terbium"],[66,"Dy","Dysprosium"],
  [67,"Ho","Holmium"],[68,"Er","Erbium"],[69,"Tm","Thulium"],
  [70,"Yb","Ytterbium"],[71,"Lu","Lutetium"],[72,"Hf","Hafnium"],
  [73,"Ta","Tantalum"],[74,"W","Tungsten"],[75,"Re","Rhenium"],
  [76,"Os","Osmium"],[77,"Ir","Iridium"],[78,"Pt","Platinum"],
  [79,"Au","Gold"],[80,"Hg","Mercury"],[81,"Tl","Thallium"],
  [82,"Pb","Lead"],[83,"Bi","Bismuth"],[84,"Po","Polonium"],
  [85,"At","Astatine"],[86,"Rn","Radon"],[87,"Fr","Francium"],
  [88,"Ra","Radium"],[89,"Ac","Actinium"],[90,"Th","Thorium"],
  [91,"Pa","Protactinium"],[92,"U","Uranium"],[93,"Np","Neptunium"],
  [94,"Pu","Plutonium"],[95,"Am","Americium"],[96,"Cm","Curium"],
  [97,"Bk","Berkelium"],[98,"Cf","Californium"],[99,"Es","Einsteinium"],
  [100,"Fm","Fermium"],[101,"Md","Mendelevium"],[102,"No","Nobelium"],
  [103,"Lr","Lawrencium"],[104,"Rf","Rutherfordium"],[105,"Db","Dubnium"],
  [106,"Sg","Seaborgium"],[107,"Bh","Bohrium"],[108,"Hs","Hassium"],
  [109,"Mt","Meitnerium"],[110,"Ds","Darmstadtium"],[111,"Rg","Roentgenium"],
  [112,"Cn","Copernicium"],[113,"Nh","Nihonium"],[114,"Fl","Flerovium"],
  [115,"Mc","Moscovium"],[116,"Lv","Livermorium"],[117,"Ts","Tennessine"],
  [118,"Og","Oganesson"]
];

const tools = [
  { id:"table", title:"Periodic Table", subtitle:"Explore all 118 elements", icon:Layers3, tag:"118 ELEMENTS" },
  { id:"molecules", title:"Molecule Studio", subtitle:"Discover molecular structures", icon:Orbit, tag:"3D EXPLORER" },
  { id:"calculators", title:"Chemistry Calculators", subtitle:"Solve chemistry problems", icon:Calculator, tag:"SMART TOOLS" },
  { id:"quiz", title:"Quiz Arena", subtitle:"Test your knowledge", icon:CircleHelp, tag:"CHALLENGE YOURSELF" }
];

function PeriodicTable() {
  const [query,setQuery] = useState("");
  const [selected,setSelected] = useState(null);
  const filtered = elements.filter(e =>
    e.join(" ").toLowerCase().includes(query.toLowerCase())
  );
  return <section className="content-section">
    <div className="section-heading">
      <div><span className="eyebrow">THE ELEMENTS</span><h2>Periodic Table</h2>
      <p>118 elements. One universe of discovery.</p></div>
      <span className="count-chip">118 ELEMENTS</span>
    </div>
    <div className="search-box"><Search size={18}/>
      <input value={query} onChange={e=>setQuery(e.target.value)}
        placeholder="Search name, symbol or atomic number"/>
    </div>
    <div className="element-grid">
      {filtered.map(e=><button key={e[0]} className="element-card"
        onClick={()=>setSelected(e)}>
        <span className="atomic-number">{e[0]}</span>
        <strong>{e[1]}</strong><span className="element-name">{e[2]}</span>
      </button>)}
    </div>
    {selected && <div className="detail-panel">
      <button className="close-detail" onClick={()=>setSelected(null)}>✕</button>
      <span className="eyebrow">ELEMENT DETAILS</span>
      <h2>{selected[2]} <span className="formula">{selected[1]}</span></h2>
      <p>Atomic number: {selected[0]}</p>
    </div>}
  </section>;
}

function Quiz() {
  const questions = [
    {q:"What is the chemical symbol for gold?",a:["Ag","Au","Gd","Go"],correct:1},
    {q:"What is the approximate pH of pure water at 25°C?",a:["0","5","7","14"],correct:2},
    {q:"Which particle has a negative electric charge?",a:["Proton","Neutron","Electron","Nucleus"],correct:2},
    {q:"What is the chemical formula of water?",a:["CO₂","O₂","H₂O","NaCl"],correct:2},
    {q:"Which gas do plants absorb during photosynthesis?",a:["Oxygen","Carbon dioxide","Hydrogen","Helium"],correct:1}
  ];
  const [index,setIndex] = useState(0);
  const [answers,setAnswers] = useState({});
  const done = index >= questions.length;
  if (done) {
    const score = questions.filter((q,i)=>answers[i]===q.correct).length;
    return <section className="content-section quiz-wrap">
      <span className="eyebrow">CHALLENGE COMPLETE</span>
      <h2>You scored {score}/{questions.length}</h2>
      <p>{score===questions.length?"Perfect score! Outstanding chemistry.":"Keep practising. Every question makes you stronger."}</p>
      <button className="primary-button" onClick={()=>{setIndex(0);setAnswers({});}}>Try again <ChevronRight size={17}/></button>
    </section>;
  }
  const q = questions[index];
  return <section className="content-section quiz-wrap">
    <span className="eyebrow">QUIZ ARENA · QUICK CHALLENGE</span>
    <div className="quiz-progress"><span>QUESTION {index+1} OF {questions.length}</span><span>{Math.round(index/questions.length*100)}%</span></div>
    <div className="progress-track"><div style={{width:`${index/questions.length*100}%`}}/></div>
    <h2>{q.q}</h2>
    <div className="answer-list">{q.a.map((a,i)=><button key={a}
      disabled={answers[index]!==undefined}
      className={`answer-option ${answers[index]===i?(i===q.correct?"correct":"wrong"):""}`}
      onClick={()=>setAnswers(p=>({...p,[index]:i}))}>
      <span>{String.fromCharCode(65+i)}</span>{a}
    </button>)}</div>
    {answers[index]!==undefined&&<button className="primary-button next-button"
      onClick={()=>setIndex(index+1)}>{index===questions.length-1?"See results":"Next question"} <ChevronRight size={17}/></button>}
  </section>;
}

function Molecules() {
  const [name,setName] = useState("Water");
  const molecules = {
    Water:{formula:"H₂O",atoms:"2 hydrogen · 1 oxygen",description:"A polar molecule essential to life."},
    Methane:{formula:"CH₄",atoms:"1 carbon · 4 hydrogen",description:"The simplest alkane and a major component of natural gas."},
    "Carbon dioxide":{formula:"CO₂",atoms:"1 carbon · 2 oxygen",description:"A linear molecule involved in photosynthesis and respiration."},
    Ammonia:{formula:"NH₃",atoms:"1 nitrogen · 3 hydrogen",description:"A trigonal-pyramidal molecule used in fertiliser production."}
  };
  const m = molecules[name];
  return <section className="content-section">
    <span className="eyebrow">MOLECULAR EXPLORER</span>
    <h2>Meet a molecule.</h2>
    <p>Choose a compound to explore its chemistry.</p>
    <div className="molecule-layout">
      <div className="molecule-visual">
        <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
        <div className="atom-core"><Atom size={50}/></div>
        <span className="visual-caption">MOLECULAR LAB</span>
      </div>
      <div className="molecule-info">
        <label htmlFor="molecule-select">SELECT MOLECULE</label>
        <select id="molecule-select" value={name} onChange={e=>setName(e.target.value)}>
          {Object.keys(molecules).map(n=><option key={n}>{n}</option>)}
        </select>
        <h3>{name}</h3><div className="formula">{m.formula}</div>
        <p>{m.description}</p><p className="muted small">{m.atoms}</p>
        <span className="status-chip"><Sparkles size={14}/> Molecular preview</span>
        <p className="muted small">The interactive 3D model will be added in the next development stage.</p>
      </div>
    </div>
  </section>;
}

function Calculators() {
  const [formula,setFormula] = useState("H2O");
  const [result,setResult] = useState(null);
  const masses = {H:1.008,C:12.011,N:14.007,O:15.999,Na:22.990,Cl:35.45,S:32.06,Ca:40.078};
  function calculate() {
    const tokens = formula.match(/[A-Z][a-z]?|[0-9]+/g)||[];
    const check = tokens.join("")===formula && tokens.length>0;
    if (!check) {setResult("Check your formula format.");return;}
    let total=0;
    for(let i=0;i<tokens.length;) {
      const symbol=tokens[i++];
      if(!(symbol in masses)){setResult(`Mass data unavailable for ${symbol}.`);return;}
      const count=/^\d+$/.test(tokens[i]||"")?Number(tokens[i++]):1;
      total+=masses[symbol]*count;
    }
    setResult(`Approximate molar mass: ${total.toFixed(3)} g/mol`);
  }
  return <section className="content-section">
    <span className="eyebrow">CHEMISTRY TOOLS</span><h2>Calculate with confidence.</h2>
    <p>Start with a quick molar mass calculator.</p>
    <div className="calculator-card">
      <div className="calculator-icon"><Calculator size={24}/></div>
      <h3>Molar mass calculator</h3>
      <p className="muted">Enter a formula using element symbols and numbers, such as H2O or CO2.</p>
      <label htmlFor="formula">CHEMICAL FORMULA</label>
      <input id="formula" value={formula} onChange={e=>{setFormula(e.target.value);setResult(null);}} placeholder="e.g. H2O"/>
      <button className="primary-button" onClick={calculate}>Calculate mass <ChevronRight size={16}/></button>
      {result&&<p className="result-text">{result}</p>}
      <p className="muted small">Starter version supports common elements and simple formulas without parentheses.</p>
    </div>
  </section>;
}

export default function App() {
  const [page,setPage] = useState("home");
  const [menuOpen,setMenuOpen] = useState(false);

  const navigate = id => {
    setPage(id);
    setMenuOpen(false);
    window.scrollTo({top:0,behavior:"smooth"});
  };

  const activeTool = tools.find(t=>t.id===page);

  return <div className="app-shell">
    <header className="topbar">
      <button className="brand" onClick={()=>navigate("home")}>
        <span className="brand-mark"><Atom size={25}/></span>
        <span><strong>Chemistry<span className="brand-accent">Explorer</span></strong><small>MOLECULAR LAB</small></span>
      </button>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>
        {menuOpen?<X/>:<Menu/>}
      </button>
      <nav className={menuOpen?"nav-links nav-open":"nav-links"}>
        <button className={page==="home"?"nav-item active":"nav-item"} onClick={()=>navigate("home")}>Overview</button>
        <button className={page==="table"?"nav-item active":"nav-item"} onClick={()=>navigate("table")}>Periodic Table</button>
        <button className={page==="molecules"?"nav-item active":"nav-item"} onClick={()=>navigate("molecules")}>Molecules</button>
        <button className={page==="quiz"?"nav-item active":"nav-item"} onClick={()=>navigate("quiz")}>Quiz Arena</button>
        <button className="nav-cta" onClick={()=>navigate("calculators")}>Explore tools <ArrowUpRight size={15}/></button>
      </nav>
    </header>

    {page==="home"&&<>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="status-chip"><span className="live-dot"></span> YOUR INTERACTIVE CHEMISTRY LAB</div>
            <h1>Discover the<br/>science of <span>everything.</span></h1>
            <p>Explore the elements, uncover molecular structures, and turn complex chemistry into something you can see and understand.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={()=>navigate("table")}>Explore the elements <ChevronRight size={17}/></button>
              <button className="secondary-button" onClick={()=>navigate("molecules")}><Orbit size={17}/> Enter molecule studio</button>
            </div>
            <div className="hero-stats">
              <div><strong>118</strong><span>ELEMENTS</span></div>
              <div><strong>04</strong><span>MOLECULE EXAMPLES</span></div>
              <div><strong>∞</strong><span>THINGS TO DISCOVER</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-grid"></div>
            <div className="art-orbit art-orbit-a"></div>
            <div className="art-orbit art-orbit-b"></div>
            <div className="art-center"><Atom size={100} strokeWidth={0.8}/></div>
            <span className="floating-label label-one"><span className="live-dot"></span> SYSTEM ONLINE</span>
            <span className="floating-label label-two">CHEMISTRY / 001</span>
            <span className="floating-element element-h">H</span>
            <span className="floating-element element-o">O</span>
            <span className="floating-element element-c">C</span>
          </div>
        </section>

        <section className="feature-strip">
          <div><span className="feature-icon"><Layers3/></span><span><strong>Element explorer</strong><small>Search the building blocks</small></span></div>
          <div><span className="feature-icon"><Orbit/></span><span><strong>Molecule studio</strong><small>Discover chemical structures</small></span></div>
          <div><span className="feature-icon"><Calculator/></span><span><strong>Smart calculators</strong><small>Work through calculations</small></span></div>
        </section>

        <section className="tools-section">
          <div className="section-heading"><div><span className="eyebrow">YOUR DIGITAL LABORATORY</span><h2>Tools for curious minds.</h2><p>Everything you need to explore chemistry, in one place.</p></div><span className="muted small">04 MODULES</span></div>
          <div className="tool-grid">
            {tools.map((tool,i)=>{const Icon=tool.icon;return <button className="tool-card" key={tool.id} onClick={()=>navigate(tool.id)}>
              <div className="tool-card-top"><span className="feature-icon"><Icon size={22}/></span><ArrowUpRight size={17}/></div>
              <span className="eyebrow">{tool.tag}</span><h3>{tool.title}</h3><p>{tool.subtitle}</p>
              <span className="card-bottom">OPEN MODULE <ChevronRight size={15}/></span>
            </button>;})}
          </div>
        </section>
        <section className="quote-banner"><FlaskConical size={26}/><div><span className="eyebrow">THE SCIENCE MINDSET</span><p>"Nothing in life is to be feared, it is only to be understood."</p></div><span className="quote-credit">— MARIE CURIE</span></section>
      </main>
    </>}

    {page==="table"&&<PeriodicTable/>}
    {page==="molecules"&&<Molecules/>}
    {page==="calculators"&&<Calculators/>}
    {page==="quiz"&&<Quiz/>}

    <footer className="footer">
      <button className="brand footer-brand" onClick={()=>navigate("home")}><span className="brand-mark"><Atom size={22}/></span><span><strong>Chemistry<span className="brand-accent">Explorer</span></strong><small>MOLECULAR LAB</small></span></button>
      <p>Designed for discovery. Built for curious minds.</p>
      <span className="footer-credit">CREATED BY NIHAl S · AIML · SRM IST</span>
    </footer>
  </div>;
}
