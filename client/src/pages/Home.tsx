/*
Design philosophy for this file: Kawaii Wabi-Sabi Editorial.
The page is composed like a cozy Japanese study desk: asymmetric paper layers, warm cream surfaces, soft orange washi accents, a gentle duck mascot, editorial serif hierarchy, handwritten note details, and calm micro-interactions.
*/
import {
  BookOpen,
  CalendarDays,
  ChevronRight,
  Coffee,
  Flower2,
  Headphones,
  Heart,
  Instagram,
  Mail,
  Music2,
  NotebookPen,
  Search,
  Sparkles,
  Star,
  Tags,
  Target,
  Twitter,
} from "lucide-react";

const ASSETS = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663617175418/kYp65cYssKAs52o4uDFHT2/yume-duck-hero-DwLwBTiMScHLUZDLg4B2jz.webp",
  tea: "https://d2xsxph8kpxj0f.cloudfront.net/310519663617175418/kYp65cYssKAs52o4uDFHT2/yume-duck-tea-4ZEWoHs9oez7ZhkjJZnki8.webp",
  headphones: "https://d2xsxph8kpxj0f.cloudfront.net/310519663617175418/kYp65cYssKAs52o4uDFHT2/yume-duck-headphones-WXMmQDzcV8bboa3qctUVLJ.webp",
  flatlay: "https://d2xsxph8kpxj0f.cloudfront.net/310519663617175418/kYp65cYssKAs52o4uDFHT2/yume-study-flatlay-Q27Gn7nDcrDhzyR5w6fsfH.webp",
  tracker: "https://d2xsxph8kpxj0f.cloudfront.net/310519663617175418/kYp65cYssKAs52o4uDFHT2/yume-flashcard-tracker-4XiRMsvfJ5Z9rr8BRoVhro.webp",
};

const navItems = ["Home", "Estudos", "JLPT", "Recursos", "Sobre"];

const posts = [
  {
    title: "Como criar uma rotina de japonês sem se sentir perdida",
    date: "18 Abril 2026",
    image: ASSETS.flatlay,
    excerpt:
      "Um guia gentil para organizar hiragana, vocabulário, escuta e revisão em blocos pequenos, com espaço para descanso e consistência realista.",
    tags: ["dicas", "rotina", "iniciante"],
    read: "6 min",
  },
  {
    title: "Partículas は e が: uma explicação com exemplos simples",
    date: "12 Abril 2026",
    image: ASSETS.headphones,
    excerpt:
      "Uma leitura leve para perceber o papel de tópico e foco sem decorar regras soltas, usando frases curtas e contexto do dia a dia.",
    tags: ["gramática", "N5", "exemplos"],
    read: "8 min",
  },
  {
    title: "Flashcards que funcionam: revisão espaçada com carinho",
    date: "04 Abril 2026",
    image: ASSETS.tracker,
    excerpt:
      "Como transformar cartões de vocabulário em uma prática tranquila, com metas semanais, erros anotados e pequenas recompensas visuais.",
    tags: ["vocabulário", "flashcards", "JLPT"],
    read: "5 min",
  },
];

const popularPosts = [
  "Primeiros 100 verbos em japonês",
  "Plano JLPT N5 em 12 semanas",
  "Como ler kana todos os dias",
  "Apps úteis para imersão leve",
];

const specialSections = [
  {
    title: "Diário de Estudos",
    icon: NotebookPen,
    copy: "Regista sessões, energia do dia e pequenas vitórias para manter motivação sem pressão.",
  },
  {
    title: "JLPT Tracker",
    icon: Target,
    copy: "Acompanha kanji, gramática, leitura e escuta por níveis N5 a N3 com metas visuais.",
  },
  {
    title: "Vocabulário do Dia",
    icon: BookOpen,
    copy: "Uma palavra por dia com exemplo, leitura, nuance e mini desafio de memória.",
  },
  {
    title: "Dicas de Imersão",
    icon: Headphones,
    copy: "Sugestões de podcasts, vídeos lentos, playlists e hábitos para ouvir japonês com calma.",
  },
  {
    title: "Materiais Gratuitos",
    icon: Sparkles,
    copy: "Folhas de estudo, checklists, fichas de kana e modelos para imprimir ou usar no tablet.",
  },
];

const galleryItems = [
  { label: "Kana notes", icon: "あ" },
  { label: "Tea break", icon: "茶" },
  { label: "Sakura", icon: "花" },
  { label: "N5 plan", icon: "五" },
  { label: "Cards", icon: "札" },
  { label: "Audio", icon: "音" },
];

function Header() {
  return (
    <header className="container py-6 lg:py-8">
      <nav className="paper-card flex flex-col gap-5 rounded-[2rem] px-5 py-4 md:flex-row md:items-center md:justify-between md:px-7 animate-fade-paper">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD8A8] text-2xl shadow-inner transition duration-300 group-hover:-rotate-6">
            夢
          </span>
          <span>
            <span className="font-display block text-3xl font-bold leading-none text-[#614026]">Yume Lab</span>
            <span className="font-hand text-lg text-[#b87940]">cantinho de japonês</span>
          </span>
        </a>

        <div className="flex flex-wrap items-center gap-2 md:justify-end">
          {navItems.map((item) => (
            <a
              href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
              key={item}
              className="rounded-full px-4 py-2 text-sm font-extrabold text-[#6f4a2d] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFD8A8]/60 hover:text-[#4f3320]"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="container pb-10 lg:pb-14">
      <div className="paper-card relative overflow-hidden rounded-[2.7rem] p-6 md:p-10 lg:min-h-[560px]">
        <span className="washi left-10 top-6 -rotate-6" />
        <span className="washi bottom-8 right-16 rotate-3" />
        <div className="absolute -left-10 top-28 hidden h-40 w-40 rounded-full bg-[#FFD8A8]/35 blur-2xl lg:block" />
        <div className="absolute right-0 top-0 h-full w-full opacity-95 lg:w-[64%]">
          <img
            src={ASSETS.hero}
            alt="Patinho amarelo do Yume Lab a estudar japonês numa secretária acolhedora"
            className="h-full w-full object-cover object-center lg:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff6e9] via-[#fff6e9]/82 to-[#fff6e9]/10" />
        </div>

        <div className="relative z-10 max-w-2xl pt-8 lg:pt-16">
          <div className="section-label mb-6">
            <Flower2 className="h-4 w-4" />
            Blog de estudo japonês
          </div>
          <h1 className="font-display text-balance text-6xl font-bold leading-[0.95] text-[#553821] md:text-7xl lg:text-8xl">
            Yume Lab
          </h1>
          <p className="font-hand mt-3 text-3xl text-[#b87940] md:text-4xl">o teu cantinho de estudos dos sonhos</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#684832]">
            Um blog acolhedor para estudantes iniciantes e intermediários de japonês, com rotinas gentis, recursos JLPT, vocabulário diário e um patinho sempre pronto para estudar contigo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#estudos" className="soft-button">
              Começar a estudar <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#recursos"
              className="inline-flex items-center justify-center rounded-full border border-[#e7b47c] bg-white/55 px-5 py-3 text-sm font-extrabold text-[#6b472b] transition duration-300 hover:-translate-y-1 hover:bg-white/85"
            >
              Ver materiais gratuitos
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {[
              ["N5", "roteiros"],
              ["365", "palavras"],
              ["15 min", "por dia"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-3xl border border-[#efc99d] bg-white/55 p-4 text-center shadow-sm">
                <strong className="font-display block text-3xl text-[#b96f34]">{number}</strong>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7e5739]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PostCard({ post, index }: { post: (typeof posts)[number]; index: number }) {
  return (
    <article className="paper-card group relative overflow-hidden rounded-[2rem] p-4 transition duration-300 hover:-translate-y-1 hover:rotate-[0.35deg] hover:shadow-2xl">
      <span className={`washi top-4 ${index % 2 === 0 ? "right-8 rotate-6" : "left-8 -rotate-6"}`} />
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="overflow-hidden rounded-[1.6rem] border border-[#efc99d]/70 bg-[#fff6e9]">
          <img src={post.image} alt={post.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="p-2 md:p-4">
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-[#987052]">
            <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" />{post.date}</span>
            <span className="inline-flex items-center gap-1"><Coffee className="h-4 w-4" />{post.read}</span>
          </div>
          <h2 className="font-display mt-3 text-4xl font-bold leading-tight text-[#593b24]">{post.title}</h2>
          <p className="mt-4 leading-7 text-[#6e4d35]">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span className="tag-pill" key={tag}>#{tag}</span>
            ))}
          </div>
          <a href="#" className="mt-6 inline-flex items-center font-extrabold text-[#b96f34] transition hover:gap-2">
            Ler post completo <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Sidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
      <section className="paper-card relative overflow-hidden rounded-[2rem] p-6 text-center">
        <span className="washi left-1/2 top-4 -translate-x-1/2 -rotate-3" />
        <img
          src={ASSETS.tea}
          alt="Patinho mascote do Yume Lab a tomar chá"
          className="mx-auto mt-6 h-44 w-44 rounded-full border-8 border-[#fff6e9] object-cover shadow-lg"
        />
        <h3 className="font-display mt-5 text-3xl font-bold text-[#593b24]">Olá, sou o Yuzu</h3>
        <p className="mt-3 leading-7 text-[#76543b]">
          Sou o patinho guardião do Yume Lab. Trago chá, flashcards e lembretes gentis para estudar um pouquinho todos os dias.
        </p>
        <div className="mt-5 flex justify-center gap-2">
          {[Instagram, Twitter, Mail].map((Icon, index) => (
            <a key={index} href="#" className="rounded-full bg-[#FFD8A8]/70 p-3 text-[#6f4a2d] transition hover:-translate-y-1 hover:bg-[#F6B26B]/70" aria-label="Rede social do Yume Lab">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </section>

      <section className="paper-card rounded-[2rem] p-5">
        <label className="mb-3 block text-sm font-extrabold uppercase tracking-[0.2em] text-[#9a6332]" htmlFor="search">Pesquisar</label>
        <div className="flex items-center gap-2 rounded-full border border-[#efc99d] bg-white/70 px-4 py-3">
          <Search className="h-4 w-4 text-[#b87940]" />
          <input id="search" placeholder="kana, JLPT, rotina..." className="w-full bg-transparent text-sm text-[#5b3b24] outline-none placeholder:text-[#a98568]" />
        </div>
      </section>

      <section className="paper-card rounded-[2rem] p-6">
        <h3 className="font-display mb-4 text-3xl font-bold text-[#593b24]">Posts populares</h3>
        <div className="space-y-3">
          {popularPosts.map((post, index) => (
            <a key={post} href="#" className="flex items-center gap-3 rounded-2xl bg-white/45 p-3 transition hover:-translate-y-0.5 hover:bg-[#FFD8A8]/45">
              <span className="font-display flex h-9 w-9 items-center justify-center rounded-full bg-[#F6B26B]/70 text-lg font-bold text-[#503521]">{index + 1}</span>
              <span className="text-sm font-bold leading-5 text-[#65462f]">{post}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="paper-card rounded-[2rem] p-6">
        <h3 className="font-display mb-1 text-3xl font-bold text-[#593b24]">Galeria</h3>
        <p className="font-hand mb-4 text-2xl text-[#b87940]">pequenos momentos de estudo</p>
        <div className="grid grid-cols-3 gap-2">
          {galleryItems.map((item, index) => (
            <a
              href="#"
              key={item.label}
              className="aspect-square rounded-2xl border border-[#efc99d] bg-gradient-to-br from-white/70 to-[#FFD8A8]/35 p-2 text-center transition hover:-translate-y-1 hover:rotate-2"
              aria-label={item.label}
            >
              <span className="font-display flex h-full items-center justify-center text-3xl font-bold text-[#b87940]">{item.icon}</span>
            </a>
          ))}
        </div>
      </section>
    </aside>
  );
}

function SpecialSections() {
  return (
    <section id="recursos" className="mt-12">
      <div className="divider-flower mb-8">
        <Flower2 className="h-5 w-5" />
      </div>
      <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="section-label"><Star className="h-4 w-4" /> Secções especiais</span>
          <h2 className="font-display mt-4 text-5xl font-bold text-[#593b24]">Ferramentas para estudar com leveza</h2>
        </div>
        <p className="max-w-md leading-7 text-[#75523a]">
          Cada bloco foi pensado para transformar aprendizagem em ritual: um pouco de método, um pouco de ternura e muita clareza.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {specialSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <article key={section.title} className="paper-card group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-2xl bg-[#FFD8A8]/65 p-3 text-[#7e522e] transition group-hover:-rotate-6"><Icon className="h-6 w-6" /></span>
                <span className="font-hand text-2xl text-[#c07a40]">0{index + 1}</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-[#593b24]">{section.title}</h3>
              <p className="mt-3 leading-7 text-[#705038]">{section.copy}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function StudyTracker() {
  return (
    <section id="jlpt" className="paper-card mt-12 overflow-hidden rounded-[2.4rem] p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <span className="washi left-8 top-4 -rotate-6" />
          <img src={ASSETS.tracker} alt="Patinho a rever flashcards JLPT" className="rounded-[2rem] border border-[#efc99d] object-cover shadow-lg" />
        </div>
        <div>
          <span className="section-label"><Target className="h-4 w-4" /> JLPT Tracker</span>
          <h2 className="font-display mt-4 text-5xl font-bold leading-tight text-[#593b24]">Um mapa visual para não perder o fio ao estudo</h2>
          <p className="mt-4 leading-8 text-[#705038]">
            Organiza gramática, kanji, leitura, escuta e revisão em pequenos cartões semanais. A ideia não é correr; é construir confiança com passos visíveis.
          </p>
          <div className="mt-6 space-y-4">
            {[
              ["Kana", 92],
              ["Vocabulário N5", 68],
              ["Gramática essencial", 54],
              ["Escuta diária", 41],
            ].map(([label, value]) => (
              <div key={label as string}>
                <div className="mb-2 flex justify-between text-sm font-extrabold text-[#6b472b]"><span>{label}</span><span>{value}%</span></div>
                <div className="h-3 overflow-hidden rounded-full bg-[#f1ddc1]"><div className="h-full rounded-full bg-gradient-to-r from-[#F6B26B] to-[#FFD8A8]" style={{ width: `${value}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="sobre" className="container py-10">
      <div className="paper-card rounded-[2rem] p-7 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD8A8] text-2xl">夢</div>
        <h2 className="font-display text-4xl font-bold text-[#593b24]">Yume Lab</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#705038]">
          Um blog fictício e inspirador para tornar o estudo de japonês mais calmo, organizado e bonito. Feito com papel, chá, sakura e um patinho muito dedicado.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-bold text-[#8a5b34]">
          <span className="tag-pill">wabi-sabi</span>
          <span className="tag-pill">kawaii suave</span>
          <span className="tag-pill">JLPT</span>
          <span className="tag-pill">imersão</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden text-[#553821]">
      <Header />
      <main>
        <Hero />
        <section className="container grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div id="estudos" className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-label"><Tags className="h-4 w-4" /> Últimos posts</span>
                <h2 className="font-display mt-4 text-5xl font-bold text-[#593b24]">Notas recentes do laboratório</h2>
              </div>
              <p className="max-w-sm leading-7 text-[#75523a]">Textos pessoais e educativos para quem quer estudar japonês com estrutura, ternura e constância.</p>
            </div>
            {posts.map((post, index) => <PostCard key={post.title} post={post} index={index} />)}
            <SpecialSections />
            <StudyTracker />
            <section className="paper-card mt-12 rounded-[2.4rem] p-8">
              <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
                <div>
                  <span className="section-label"><Music2 className="h-4 w-4" /> Dicas de imersão</span>
                  <h2 className="font-display mt-4 text-5xl font-bold leading-tight text-[#593b24]">Transforma o japonês em presença diária</h2>
                  <p className="mt-4 leading-8 text-[#705038]">
                    Ouve japonês enquanto arrumas a secretária, revê três cartões antes do chá e guarda frases bonitas num caderno. Pequenos rituais criam familiaridade.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['podcasts lentos', 'anime com notas', 'shadowing suave', 'playlist matinal'].map((tag) => <span className="tag-pill" key={tag}>{tag}</span>)}
                  </div>
                </div>
                <img src={ASSETS.headphones} alt="Patinho com fones a praticar escuta em japonês" className="rounded-[2rem] border border-[#efc99d] shadow-lg" />
              </div>
            </section>
          </div>
          <Sidebar />
        </section>
      </main>
      <Footer />
      <div className="pointer-events-none fixed left-4 top-1/3 hidden text-[#f1a667]/50 lg:block animate-float-soft"><Heart className="h-8 w-8 fill-current" /></div>
      <div className="pointer-events-none fixed bottom-16 right-8 hidden text-[#f1a667]/45 lg:block animate-float-soft"><Flower2 className="h-10 w-10" /></div>
    </div>
  );
}
