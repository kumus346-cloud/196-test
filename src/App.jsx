import { useState } from "react";
import "./style.css";

const pages = [
  { id: "about", title: "Men haqimda", icon: "👤" },
  { id: "likes", title: "Nimalarni yoqtiraman", icon: "❤️" },
  { id: "skills", title: "Bilimlarim", icon: "⚡" },
  { id: "languages", title: "Tillar", icon: "🌐" },
];

function App() {
  const [page, setPage] = useState("about");

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <div className="logoBox">K</div>
          <div>
            <b>Kumush</b>
            <span>Personal Space</span>
          </div>
        </div>

        <nav>
          {pages.map((item) => (
            <button
              key={item.id}
              className={page === item.id ? "nav active" : "nav"}
              onClick={() => setPage(item.id)}
            >
              <span>{item.icon}</span>
              {item.title}
            </button>
          ))}
        </nav>

        <div className="sideBottom">
          <div className="miniProfile">
            <div className="avatar">K</div>
            <div>
              <b>Kumush</b>
              <small>9-sinf o‘quvchisi</small>
            </div>
          </div>
        </div>
      </aside>

      <main className="content">
        <header>
          <div>
            <span className="smallTitle">MY PERSONAL SPACE</span>
            <h1>{pages.find((x) => x.id === page)?.title}</h1>
          </div>

          <div className="topBadge">
            <span className="online"></span>
            Kumush's profile
          </div>
        </header>

        {page === "about" && <About />}
        {page === "likes" && <Likes />}
        {page === "skills" && <Skills />}
        {page === "languages" && <Languages />}
      </main>
    </div>
  );
}

function About() {
  return (
    <section className="page">
      <div className="heroCard">
        <div className="heroText">
          <span className="tag">HELLO 👋</span>
          <h2>Salom, men <span>Kumush</span>.</h2>
          <p>
            Men 14 yoshdaman va 9-sinfda o‘qiyman. Yangi narsalarni
            o‘rganishni, tillar bilan shug‘ullanishni va kelajak uchun
            yangi ko‘nikmalar yig‘ishni yoqtiraman.
          </p>

          <div className="infoGrid">
            <Info title="Ism" value="Kumush" />
            <Info title="Yosh" value="14 yosh" />
            <Info title="Tug‘ilgan sana" value="03.04.2012" />
            <Info title="Sinf" value="9-sinf" />
          </div>
        </div>

        <div className="bigAvatar">K</div>
      </div>

      <div className="sectionTitle">
        <span>01</span>
        <h3>Qisqacha men haqimda</h3>
      </div>

      <div className="cards three">
        <Card icon="🎓" title="O‘quvchi" text="Hozirda 9-sinfda ta’lim olyapman." />
        <Card icon="🧠" title="Qiziquvchan" text="Yangi narsalarni o‘rganishga qiziqaman." />
        <Card icon="🚀" title="Maqsadlar" text="Til va zamonaviy ko‘nikmalarni rivojlantirmoqchiman." />
      </div>
    </section>
  );
}

function Likes() {
  return (
    <section className="page">
      <div className="intro">
        <span className="tag">MY INTERESTS</span>
        <h2>Menga nimalar yoqadi?</h2>
        <p>
          Bo‘sh vaqtimda qiziq narsalarni o‘rganish, texnologiya va
          tillar bilan shug‘ullanish menga yoqadi.
        </p>
      </div>

      <div className="cards two">
        <BigCard icon="💻" title="Coding" text="Kod yozish va yangi loyihalar yaratish menga yoqadi." />
        <BigCard icon="🎬" title="Dramalar" text="Bo‘sh vaqtimda drama ko‘rishni va musiqa tinglashni yoqtiraman." />
        <BigCard icon="🎧" title="Musiqa" text="Musiqa tinglash men uchun yaxshi dam olish usullaridan biri." />
        <BigCard icon="🌍" title="Sayohat" text="Turli davlatlarga borish va yangi joylarni ko‘rishni xohlayman." />
        <BigCard icon="🍓" title="Strawberry" text="Qulupnayni juda yaxshi ko‘raman." />
        <BigCard icon="📚" title="O‘rganish" text="Yangi til va yangi bilimlarni o‘rganishga qiziqaman." />
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="page">
      <div className="intro">
        <span className="tag">MY SKILLS</span>
        <h2>Men nimalarni bilaman?</h2>
        <p>
          Hozir o‘rganayotgan va biladigan ko‘nikmalarim.
        </p>
      </div>

      <div className="skillBox">
        <Skill icon="💻" name="Coding" level="O‘rganmoqdaman" />
        <Skill icon="🌐" name="HTML" level="O‘rganmoqdaman" />
        <Skill icon="⚙️" name="JavaScript" level="O‘rganmoqdaman" />
        <Skill icon="🎨" name="Web Design" level="O‘rganmoqdaman" />
        <Skill icon="🗣️" name="Languages" level="Bir nechta til" />
        <Skill icon="🎞️" name="Video Editing" level="Kelajakdagi maqsad" />
      </div>

      <div className="goalCard">
        <div className="goalIcon">🎯</div>
        <div>
          <span className="tag">MY GOAL</span>
          <h3>Ko‘proq o‘rganish</h3>
          <p>
            Coding, video editing va yangi tillarni yanada yaxshi
            o‘rganish — mening kelajakdagi maqsadlarimdan.
          </p>
        </div>
      </div>
    </section>
  );
}

function Languages() {
  return (
    <section className="page">
      <div className="intro">
        <span className="tag">LANGUAGES</span>
        <h2>Tillar bilan munosabatim</h2>
        <p>
          Men gaplasha oladigan, yoqtiradigan va o‘rganmoqchi
          bo‘lgan tillarim.
        </p>
      </div>

      <div className="languageSection">
        <h3>🗣️ Gaplasha olaman</h3>

        <div className="languageGrid">
          <Language flag="🇺🇿" name="O‘zbek tili" status="Gaplasha olaman" />
          <Language flag="🇷🇺" name="Rus tili" status="Gaplasha olaman" />
          <Language flag="🇰🇿" name="Qozoq tili" status="Gaplasha olaman" />
        </div>
      </div>

      <div className="languageSection">
        <h3>💜 Yoqtiradigan tillarim</h3>

        <div className="languageGrid">
          <Language flag="🇬🇧" name="English" status="Yoqadi" />
          <Language flag="🇰🇷" name="Korean" status="Yoqadi" />
          <Language flag="🇹🇷" name="Turkish" status="Yoqadi" />
        </div>
      </div>

      <div className="learning">
        <span className="tag">NEXT LEVEL</span>
        <h3>🌱 O‘rganmoqchi bo‘lgan tillarim</h3>
        <div className="learnTags">
          <span>🇬🇧 English</span>
          <span>🇰🇷 Korean</span>
          <span>🇹🇷 Turkish</span>
        </div>
      </div>
    </section>
  );
}

function Info({ title, value }) {
  return (
    <div className="info">
      <small>{title}</small>
      <b>{value}</b>
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="card">
      <div className="cardIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function BigCard({ icon, title, text }) {
  return (
    <div className="bigCard">
      <div className="bigIcon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Skill({ icon, name, level }) {
  return (
    <div className="skill">
      <div className="skillIcon">{icon}</div>
      <div className="skillInfo">
        <b>{name}</b>
        <span>{level}</span>
      </div>
      <div className="arrow">→</div>
    </div>
  );
}

function Language({ flag, name, status }) {
  return (
    <div className="language">
      <div className="flag">{flag}</div>
      <div>
        <h3>{name}</h3>
        <span>{status}</span>
      </div>
      <div className="check">✓</div>
    </div>
  );
}

export default App;