"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, Bell, ChevronDown, ChevronRight, Clock3, Flame, Menu, Search,
  Trophy, X, Zap, RefreshCw, Radio
} from "lucide-react";

type Match = {
  id: number; league: string; home: string; away: string; time: string;
  status: "À venir" | "Direct" | "Terminé"; homeScore?: number; awayScore?: number;
  homeLogo?: string; awayLogo?: string;
};

type Standing = { rank:number; team:{id:number;name:string;logo?:string}; points:number; goalsDiff:number; all:{played:number;win:number;draw:number;lose:number} };

const leagueIds: Record<string, number> = {
  "Premier League": 39, "La Liga": 140, "Ligue 1": 61, "Serie A": 135, "Bundesliga": 78,
  "Champions League": 2, "Europa League": 3, "Ligue des champions CAF": 12
};

const demoMatches: Match[] = [
  {id:1,league:"Premier League",home:"Arsenal",away:"Chelsea",time:"18:30",status:"À venir"},
  {id:2,league:"La Liga",home:"Real Madrid",away:"Barcelona",time:"21:00",status:"À venir"},
  {id:3,league:"Ligue 1",home:"PSG",away:"Marseille",time:"20:45",status:"Direct"},
  {id:4,league:"Serie A",home:"Inter",away:"Milan",time:"20:45",status:"Terminé",homeScore:2,awayScore:1},
];

const news = [
  ["Mercato", "Les dernières informations qui agitent le marché des transferts", "8 min"],
  ["Football", "Ce qu’il faut retenir avant les grands rendez-vous du week-end", "6 min"],
  ["Champions League", "Les affiches à suivre et les enjeux de la prochaine journée", "7 min"],
  ["Afrique", "Les talents africains qui attirent l’attention en Europe", "5 min"],
];

const analyses = [
  ["Analyse", "Comment analyser une équipe avant un match ?", "Forme, absences, calendrier et statistiques."],
  ["Guide", "Comprendre les principales statistiques du football", "Possession, tirs cadrés, xG et efficacité."],
  ["Paris sportifs", "1N2, double chance, Over/Under : les bases", "Le vocabulaire à connaître avant de parier."],
];

function formatTime(date:string) { return new Intl.DateTimeFormat("fr-FR", { hour:"2-digit", minute:"2-digit", timeZone:"Africa/Douala" }).format(new Date(date)); }
function statusOf(short:string): Match["status"] {
  if (["1H","2H","HT","ET","P","BT","LIVE"].includes(short)) return "Direct";
  if (["FT","AET","PEN","CANC","PST","ABD","AWD","WO"].includes(short)) return "Terminé";
  return "À venir";
}
function todayDouala() { return new Intl.DateTimeFormat("en-CA", {timeZone:"Africa/Douala",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date()); }

function ImagePlaceholder({label="Votre photo"}:{label?:string}) { return <div className="h-full min-h-32 w-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center text-zinc-500 text-sm">{label}</div>; }
function TeamBadge({logo,name}:{logo?:string;name:string}) { return logo ? <img src={logo} alt="" className="w-10 h-10 object-contain mx-auto" /> : <div className="w-10 h-10 mx-auto rounded-full bg-white/5 flex items-center justify-center font-black">{name.slice(0,2)}</div>; }
function SectionTitle({eyebrow,title,href="#"}:{eyebrow:string,title:string,href?:string}) { return <div className="flex items-end justify-between gap-4 mb-5"><div><div className="text-xs uppercase tracking-[.22em] text-green-400 font-bold">{eyebrow}</div><h2 className="text-2xl md:text-3xl font-black mt-1">{title}</h2></div><a href={href} className="hidden sm:flex items-center gap-1 text-sm text-zinc-400 hover:text-white">Tout voir <ArrowRight size={15}/></a></div>; }

function Header() {
  const [open,setOpen]=useState(false); const [search,setSearch]=useState(false);
  return <header className="sticky top-0 z-50 bg-[#07090d]/90 backdrop-blur-xl border-b border-white/10"><div className="container-x h-16 flex items-center justify-between"><a href="#" className="font-black text-xl tracking-tight">MAFFO <span className="text-green-400">SPORT</span></a><nav className="hidden lg:flex items-center gap-7 text-sm font-semibold"><a href="#" className="text-green-400">Accueil</a><a href="#actus">Actualités</a><div className="relative group"><button className="flex items-center gap-1">Football <ChevronDown size={14}/></button><div className="absolute top-7 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition glass rounded-xl p-2 w-52">{["Actualités football","Guides football","Compétitions","Équipes & joueurs","Records & histoire","Football africain"].map(x=><a key={x} href="#football" className="block px-3 py-2 rounded-lg hover:bg-white/5">{x}</a>)}</div></div><div className="relative group"><button className="flex items-center gap-1">Paris sportifs <ChevronDown size={14}/></button><div className="absolute top-7 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition glass rounded-xl p-2 w-52">{["Pronostics","Guides paris sportifs","Types de paris","Stratégies & conseils","Bookmakers","Comparatifs"].map(x=><a key={x} href="#paris" className="block px-3 py-2 rounded-lg hover:bg-white/5">{x}</a>)}</div></div><a href="#analyses">Analyses</a><a href="#resultats">Résultats</a><a href="#calendrier">Calendrier</a></nav><div className="flex items-center gap-2"><button onClick={()=>setSearch(!search)} aria-label="Recherche" className="p-2 rounded-lg hover:bg-white/10"><Search size={19}/></button><button className="p-2 rounded-lg hover:bg-white/10 hidden sm:block" aria-label="Notifications"><Bell size={19}/></button><button onClick={()=>setOpen(!open)} className="p-2 rounded-lg hover:bg-white/10 lg:hidden" aria-label="Menu">{open?<X/>:<Menu/>}</button></div></div>{search&&<div className="border-t border-white/10"><div className="container-x py-3"><div className="relative"><Search className="absolute left-3 top-3 text-zinc-500" size={18}/><input autoFocus placeholder="Rechercher une actualité, une équipe..." className="w-full rounded-xl bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 outline-none focus:border-green-400/50"/></div></div></div>}{open&&<nav className="lg:hidden border-t border-white/10 bg-[#090c12] px-4 py-4 space-y-1">{["Actualités","Football","Pronostics","Analyses","Résultats","Calendrier"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setOpen(false)} className="block py-3 border-b border-white/5">{x}</a>)}</nav>}</header>;
}

function MatchCard({m}:{m:Match}) { return <div className="glass card-hover rounded-2xl p-4 min-w-[260px] snap-start"><div className="flex justify-between text-[11px] text-zinc-500 mb-4"><span>{m.league}</span><span className={m.status==="Direct"?"text-red-400":"text-zinc-500"}>{m.status}</span></div><div className="flex items-center justify-between gap-3"><div className="text-center flex-1"><TeamBadge logo={m.homeLogo} name={m.home}/><div className="text-sm mt-2 font-semibold">{m.home}</div></div><div className="text-center min-w-14"><div className="font-black text-lg">{m.status==="À venir"?m.time:`${m.homeScore ?? 0} - ${m.awayScore ?? 0}`}</div><div className="text-[10px] text-zinc-500 mt-1">{m.status==="Direct"?"En direct":"Aujourd’hui"}</div></div><div className="text-center flex-1"><TeamBadge logo={m.awayLogo} name={m.away}/><div className="text-sm mt-2 font-semibold">{m.away}</div></div></div><a href="#analyses" className="mt-4 block text-center text-xs text-green-400 hover:text-green-300">Voir l’analyse →</a></div>; }

export default function Home() {
  const [filter,setFilter]=useState<"Tous"|"À venir"|"Direct"|"Terminé">("Tous");
  const [matches,setMatches]=useState<Match[]>(demoMatches); const [standings,setStandings]=useState<Standing[]>([]);
  const [apiOnline,setApiOnline]=useState(false); const [loading,setLoading]=useState(true); const [apiError,setApiError]=useState("");

  async function loadData() {
    setLoading(true); setApiError("");
    try {
      const [fixturesRes, standingsRes] = await Promise.all([
        fetch(`/api/fixtures?date=${todayDouala()}`, {cache:"no-store"}),
        fetch(`/api/standings?league=39&season=${new Date().getUTCFullYear()}`, {cache:"no-store"})
      ]);
      if (!fixturesRes.ok || !standingsRes.ok) throw new Error("API-Football non configurée ou indisponible.");
      const fixtureData = await fixturesRes.json(); const standingData = await standingsRes.json();
      const allowed = new Set(Object.keys(leagueIds));
      const realMatches: Match[] = (fixtureData.fixtures || []).filter((f:any)=>allowed.has(f.league.name)).map((f:any)=>({
        id:f.fixture.id, league:f.league.name, home:f.teams.home.name, away:f.teams.away.name,
        time:formatTime(f.fixture.date), status:statusOf(f.fixture.status.short), homeScore:f.goals.home ?? undefined,
        awayScore:f.goals.away ?? undefined, homeLogo:f.teams.home.logo, awayLogo:f.teams.away.logo
      }));
      setMatches(realMatches); setStandings(standingData.standings || []); setApiOnline(true);
    } catch (e) { setApiOnline(false); setApiError(e instanceof Error ? e.message : "Erreur API"); }
    finally { setLoading(false); }
  }

  useEffect(()=>{ loadData(); },[]);
  const filtered=useMemo(()=>filter==="Tous"?matches:matches.filter(m=>m.status===filter),[filter,matches]);

  return <div className="min-h-screen"><Header/><main>
    <section className="hero-grid border-b border-white/10"><div className="container-x py-10 md:py-16 grid lg:grid-cols-[1.35fr_.65fr] gap-5"><article className="relative overflow-hidden rounded-3xl min-h-[390px] border border-white/10"><ImagePlaceholder label="IMAGE PRINCIPALE — à remplacer"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"/><div className="absolute bottom-0 p-6 md:p-9 max-w-3xl"><div className="flex items-center gap-2 text-xs font-bold text-green-400 uppercase tracking-widest"><Flame size={15}/> À la une</div><h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">Toute l’actualité sportive, les analyses et les rendez-vous à ne pas manquer</h1><p className="text-zinc-300 mt-3 max-w-2xl">Un regard clair sur le football, les grandes compétitions, les statistiques et les pronostics.</p><button className="mt-5 bg-green-500 text-black font-bold px-5 py-3 rounded-xl hover:bg-green-400 transition">Lire l’article <ArrowRight className="inline ml-1" size={17}/></button></div></article><div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">{[["Mercato","Les informations et mouvements à suivre"],["Analyse","Les clés pour comprendre les grands matchs"],["Pronostics","Nos analyses avant les principales rencontres"]].map(([cat,title])=><article key={cat} className="glass rounded-2xl overflow-hidden card-hover"><div className="h-28"><ImagePlaceholder/></div><div className="p-4"><div className="text-xs text-green-400 font-bold uppercase">{cat}</div><h3 className="font-bold mt-1 leading-snug">{title}</h3><a href="#actus" className="text-xs text-zinc-500 mt-2 inline-block">Lire →</a></div></article>)}</div></div></section>

    <section id="calendrier" className="container-x py-10"><SectionTitle eyebrow="Aujourd’hui" title="Matchs à suivre" href="#resultats"/><div className="flex items-center justify-between gap-3 mb-4"><div className="flex gap-3 overflow-x-auto scrollbar-hide">{(["Tous","À venir","Direct","Terminé"] as const).map(f=><button key={f} onClick={()=>setFilter(f)} className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border ${filter===f?"bg-green-500 text-black border-green-500":"border-white/10 text-zinc-400 hover:text-white"}`}>{f}</button>)}</div><button onClick={loadData} className="p-2 rounded-xl border border-white/10 hover:bg-white/5" title="Actualiser"><RefreshCw size={17} className={loading?"animate-spin":""}/></button></div>{!apiOnline&&<div className="mb-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-3 text-xs text-yellow-200">Mode démonstration. Ajoute <b>API_FOOTBALL_KEY</b> dans les variables d’environnement Vercel pour afficher les données réelles. {apiError}</div>}{apiOnline&&<div className="mb-4 text-xs text-zinc-500 flex items-center gap-2"><Radio size={13} className="text-green-400"/> Données fournies par API-Football • mises en cache côté serveur</div>}<div className="flex gap-4 overflow-x-auto pb-3 snap-x scrollbar-hide">{filtered.length?filtered.map(m=><MatchCard key={m.id} m={m}/>):<div className="glass rounded-2xl p-6 text-sm text-zinc-500">Aucun match correspondant pour aujourd’hui.</div>}</div></section>

    <section id="paris" className="bg-[#0b0e14] border-y border-white/5"><div className="container-x py-12"><SectionTitle eyebrow="Sélection" title="Pronostics du jour"/><div className="grid md:grid-cols-3 gap-5">{[["Analyse match","Double chance : équipe ou nul","1X"],["Marché buts","Plus de 1,5 buts","O1.5"],["Les deux équipes","Les deux équipes marquent","BTTS"]].map(([match,type,pick])=><article key={match} className="glass rounded-2xl p-5 card-hover"><div className="flex justify-between items-start"><span className="text-xs text-zinc-500">{match}</span><Zap size={17} className="text-green-400"/></div><h3 className="font-black text-lg mt-4">{type}</h3><div className="my-4 flex items-center justify-between rounded-xl bg-white/5 p-3"><span className="text-xs text-zinc-400">Sélection</span><span className="font-black text-green-400">{pick}</span></div><p className="text-sm text-zinc-400 leading-6">Une sélection doit être accompagnée d’une analyse de la forme, des absences et des statistiques disponibles.</p><a href="#analyses" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-white hover:text-green-400">Lire l’analyse <ArrowRight size={15}/></a></article>)}</div><p className="text-[11px] text-zinc-600 mt-5">18+ • Jouez de manière responsable. Les pronostics ne garantissent aucun gain.</p></div></section>

    <section id="actus" className="container-x py-12"><SectionTitle eyebrow="À ne pas manquer" title="Dernières actualités"/><div className="grid lg:grid-cols-[1.5fr_1fr] gap-6"><div className="grid sm:grid-cols-2 gap-5">{news.map(([cat,title,time],i)=><article key={title} className={`glass rounded-2xl overflow-hidden card-hover ${i===0?"sm:col-span-2":""}`}><div className={i===0?"h-52":"h-36"}><ImagePlaceholder/></div><div className="p-5"><div className="text-xs text-green-400 font-bold uppercase">{cat}</div><h3 className="font-black text-lg mt-1">{title}</h3><div className="flex items-center gap-2 text-xs text-zinc-500 mt-3"><Clock3 size={13}/>{time} de lecture</div></div></article>)}</div><aside className="glass rounded-2xl p-5 h-fit"><div className="flex items-center gap-2 font-black"><Trophy size={18} className="text-green-400"/> À suivre</div><div className="mt-4 space-y-1">{Object.keys(leagueIds).slice(0,6).map(x=><a href="#calendrier" key={x} className="flex justify-between p-3 rounded-xl hover:bg-white/5"><span>{x}</span><ChevronRight size={16} className="text-zinc-600"/></a>)}</div></aside></div></section>

    <section id="analyses" className="bg-[#0b0e14] border-y border-white/5"><div className="container-x py-12"><SectionTitle eyebrow="Décryptage" title="Analyses & guides"/><div className="grid md:grid-cols-3 gap-5">{analyses.map(([cat,title,desc])=><article key={title} className="glass rounded-2xl p-5 card-hover"><div className="h-32 rounded-xl overflow-hidden mb-5"><ImagePlaceholder/></div><div className="text-xs text-green-400 font-bold uppercase">{cat}</div><h3 className="font-black text-xl mt-2">{title}</h3><p className="text-sm text-zinc-400 mt-2 leading-6">{desc}</p><a href="#footer" className="inline-flex items-center gap-1 text-sm font-bold mt-5">Lire la suite <ArrowRight size={15}/></a></article>)}</div></div></section>

    <section id="resultats" className="container-x py-12"><SectionTitle eyebrow="Scores" title="Résultats & classements"/><div className="grid lg:grid-cols-2 gap-6"><div className="glass rounded-2xl overflow-hidden"><div className="p-5 border-b border-white/10 font-black">Derniers résultats</div>{matches.filter(m=>m.status==="Terminé").slice(0,6).map(m=><div key={m.id} className="flex items-center justify-between px-5 py-4 border-b border-white/5"><div><div className="text-xs text-zinc-500">{m.league}</div><div className="font-semibold mt-1">{m.home} — {m.away}</div></div><div className="font-black">{m.homeScore} - {m.awayScore}</div></div>)}{!matches.some(m=>m.status==="Terminé")&&<div className="p-5 text-sm text-zinc-500">Les résultats du jour apparaîtront ici automatiquement.</div>}</div><div className="glass rounded-2xl overflow-hidden"><div className="p-5 border-b border-white/10 font-black">Premier League — classement</div>{standings.slice(0,8).map(r=><div key={r.team.id} className="grid grid-cols-[28px_1fr_50px] items-center px-5 py-3 border-b border-white/5 text-sm"><span className="text-zinc-500">{r.rank}</span><span className="font-semibold flex items-center gap-2"><img src={r.team.logo} alt="" className="w-5 h-5 object-contain"/>{r.team.name}</span><span className="text-right font-bold">{r.points}</span></div>)}{!standings.length&&<div className="p-5 text-sm text-zinc-500">Le classement apparaîtra lorsque la clé API sera configurée.</div>}</div></div></section>

    <section id="football" className="bg-[#0b0e14] border-y border-white/5"><div className="container-x py-12"><SectionTitle eyebrow="Focus" title="Football africain"/><div className="grid md:grid-cols-3 gap-5">{["Les joueurs africains à suivre cette saison","Les grandes compétitions africaines expliquées","Les clubs africains et leurs performances"].map(t=><article key={t} className="glass rounded-2xl overflow-hidden card-hover"><div className="h-36"><ImagePlaceholder/></div><div className="p-5"><h3 className="font-black">{t}</h3><a href="#actus" className="text-sm text-green-400 inline-block mt-3">Découvrir →</a></div></article>)}</div></div></section>

    <section className="container-x py-12"><div className="rounded-3xl border border-green-400/20 bg-gradient-to-r from-green-500/10 to-transparent p-7 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"><div><div className="flex items-center gap-2 text-green-400 font-bold text-sm"><Bell size={16}/> Maffo Sport</div><h2 className="text-2xl md:text-3xl font-black mt-2">Les infos et analyses directement sur Telegram</h2><p className="text-zinc-400 mt-2">Actualités, analyses et pronostics sélectionnés.</p></div><a href="#" className="bg-green-500 text-black font-black px-6 py-3 rounded-xl text-center hover:bg-green-400 transition">Rejoindre Telegram</a></div></section>
    <section className="container-x pb-14"><div className="glass rounded-3xl p-7 md:p-9 flex flex-col md:flex-row gap-6 md:items-center justify-between"><div><div className="text-xs uppercase tracking-widest text-green-400 font-bold">Newsletter</div><h2 className="text-2xl font-black mt-2">Recevez l’essentiel du sport</h2><p className="text-zinc-400 mt-1">Un résumé des informations importantes, sans spam.</p></div><div className="flex w-full md:w-auto gap-2"><input type="email" placeholder="Votre adresse email" className="min-w-0 md:w-72 bg-white/5 border border-white/10 rounded-xl px-4 outline-none focus:border-green-400/50"/><button className="bg-white text-black font-bold px-5 rounded-xl hover:bg-zinc-200">S’inscrire</button></div></div></section>
  </main><footer id="footer" className="border-t border-white/10 bg-[#05070a]"><div className="container-x py-10 grid md:grid-cols-4 gap-8"><div><div className="font-black text-xl">MAFFO <span className="text-green-400">SPORT</span></div><p className="text-sm text-zinc-500 mt-3 leading-6">Actualités, analyses, résultats, calendrier et pronostics sportifs.</p></div><div><div className="font-bold mb-3">Sport</div><div className="space-y-2 text-sm text-zinc-500"><a href="#actus" className="block hover:text-white">Actualités</a><a href="#football" className="block hover:text-white">Football</a><a href="#analyses" className="block hover:text-white">Analyses</a></div></div><div><div className="font-bold mb-3">Paris sportifs</div><div className="space-y-2 text-sm text-zinc-500"><a href="#paris" className="block hover:text-white">Pronostics</a><a href="#paris" className="block hover:text-white">Guides</a><a href="#paris" className="block hover:text-white">Bookmakers</a></div></div><div><div className="font-bold mb-3">Informations</div><div className="space-y-2 text-sm text-zinc-500"><a href="#" className="block hover:text-white">À propos</a><a href="#" className="block hover:text-white">Contact</a><a href="#" className="block hover:text-white">Mentions légales</a><a href="#" className="block hover:text-white">Confidentialité</a></div></div></div><div className="container-x py-5 border-t border-white/5 text-xs text-zinc-600 flex flex-col sm:flex-row justify-between gap-2"><span>© 2026 Maffo Sport. Tous droits réservés.</span><span>18+ • Jouez responsablement.</span></div></footer></div>;
} 
