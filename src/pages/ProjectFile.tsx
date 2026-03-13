import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users, Target, TrendingUp, Building2, Clock, Award,
  CheckCircle2, BarChart3, Shield, Lightbulb, Zap, ArrowLeft,
  BookOpen, Briefcase, GraduationCap, Heart, Sparkles,
  ChevronDown, Rocket, Star, Layers, ArrowUpRight, Brain,
  CircleDot, Activity, FileText
} from "lucide-react";

/* ═══════════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════════ */

const Section = ({ children, icon: Icon, title, accent = "blue", subtitle }: {
  children: React.ReactNode; icon?: any; title: string; accent?: string; subtitle?: string;
}) => {
  const colors: Record<string, { bar: string; icon: string; ring: string }> = {
    blue:  { bar: "from-blue-600 to-indigo-600", icon: "from-blue-600 to-indigo-600", ring: "ring-blue-100" },
    amber: { bar: "from-amber-500 to-orange-500", icon: "from-amber-500 to-orange-500", ring: "ring-amber-100" },
    green: { bar: "from-emerald-500 to-teal-500", icon: "from-emerald-500 to-teal-500", ring: "ring-emerald-100" },
    red:   { bar: "from-rose-500 to-red-500", icon: "from-rose-500 to-red-500", ring: "ring-rose-100" },
  };
  const c = colors[accent];
  return (
    <div className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden ring-1 ${c.ring} group`}>
      <div className={`h-1 bg-gradient-to-l ${c.bar}`} />
      <div className="p-7 md:p-8">
        <div className="flex items-center gap-3.5 mb-5">
          {Icon && (
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.icon} flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
          )}
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 leading-tight">{title}</h2>
            {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

const StatCard = ({ value, label, color, icon: Icon, sub }: {
  value: string; label: string; color: string; icon: any; sub?: string;
}) => {
  const bg: Record<string, string> = {
    red: "from-rose-600 via-red-600 to-rose-700",
    orange: "from-amber-500 via-orange-500 to-amber-600",
    purple: "from-violet-600 via-purple-600 to-indigo-600",
    green: "from-emerald-500 via-teal-500 to-emerald-600",
  };
  return (
    <div className={`relative bg-gradient-to-br ${bg[color]} rounded-2xl p-6 text-white shadow-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300`}>
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/[0.07] rounded-full" />
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/[0.05] rounded-full" />
      <Icon className="w-5 h-5 mb-3 opacity-70" />
      <div className="text-3xl md:text-4xl font-black leading-none mb-1.5 relative">{value}</div>
      <div className="text-[11px] font-medium opacity-80 leading-snug relative">{label}</div>
      {sub && <div className="text-[10px] opacity-50 mt-1 relative">{sub}</div>}
    </div>
  );
};

const TrackCard = ({ title, owner, lines, target, budget, kpi, color, icon: Icon, num }: {
  title: string; owner: string; lines: string[]; target: string; budget: string; kpi: string; color: string; icon: any; num: string;
}) => {
  const styles: Record<string, { bg: string; accent: string; badge: string; gradient: string; glow: string }> = {
    blue:   { bg: "from-blue-50/80 to-indigo-50/40", accent: "border-blue-200/50", badge: "bg-blue-600", gradient: "from-blue-600 to-indigo-600", glow: "shadow-blue-500/10" },
    green:  { bg: "from-emerald-50/80 to-teal-50/40", accent: "border-emerald-200/50", badge: "bg-emerald-600", gradient: "from-emerald-600 to-teal-600", glow: "shadow-emerald-500/10" },
    purple: { bg: "from-violet-50/80 to-purple-50/40", accent: "border-violet-200/50", badge: "bg-violet-600", gradient: "from-violet-600 to-purple-600", glow: "shadow-violet-500/10" },
  };
  const s = styles[color];
  return (
    <div className={`bg-gradient-to-br ${s.bg} ${s.accent} border rounded-2xl overflow-hidden hover:shadow-xl ${s.glow} transition-all hover:-translate-y-1 duration-300`}>
      <div className={`h-1.5 bg-gradient-to-l ${s.gradient}`} />
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2.5">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-md`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900 leading-tight">{title}</div>
              <div className="text-[11px] text-slate-400">{owner}</div>
            </div>
          </div>
          <Badge className={`${s.badge} text-white text-[11px] shrink-0 shadow-sm font-bold`}>{budget}</Badge>
        </div>
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-slate-600 leading-snug mb-1">{l}</p>
        ))}
        <div className="flex justify-between items-center pt-3 border-t border-slate-200/60 mt-3">
          <span className="font-bold text-slate-800 text-sm">{target}</span>
          <span className="text-[11px] text-slate-500 bg-white/80 px-2.5 py-0.5 rounded-full font-medium">{kpi}</span>
        </div>
      </div>
    </div>
  );
};

const TimelineStep = ({ month, title, desc, step, isLast }: {
  month: string; title: string; desc: string; step: number; isLast?: boolean;
}) => (
  <div className="flex gap-4 items-start group">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-sm font-black shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-all duration-300">{step}</div>
      {!isLast && <div className="w-0.5 h-12 bg-gradient-to-b from-blue-300 to-transparent mt-1" />}
    </div>
    <div className="pb-6">
      <div className="bg-gradient-to-l from-blue-600 to-indigo-600 text-white rounded-lg px-3.5 py-1 text-xs font-bold inline-block mb-1.5 shadow-sm">{month}</div>
      <div className="font-bold text-slate-900 text-[15px]">{title}</div>
      <div className="text-sm text-slate-500 leading-relaxed">{desc}</div>
    </div>
  </div>
);

const PhotoDivider = ({ src, text, sub, gradient }: { src: string; text: string; sub?: string; gradient?: string }) => (
  <div className="relative rounded-2xl overflow-hidden h-48 shadow-xl group">
    <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
    <div className={`absolute inset-0 ${gradient || "bg-gradient-to-l from-slate-900/90 via-blue-900/80 to-indigo-900/70"} flex items-center justify-center`}>
      <div className="text-center text-white px-8">
        <p className="text-2xl md:text-3xl font-black drop-shadow-xl leading-snug">{text}</p>
        {sub && <p className="text-blue-200/70 text-sm mt-2 font-light">{sub}</p>}
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */
export default function ProjectFile() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f9fc] print:bg-white">

      {/* ══════════════════════════════════════════
          HERO — Full-screen immersive header
          ══════════════════════════════════════════ */}
      <header className="relative text-white overflow-hidden min-h-[100vh] md:min-h-[90vh] flex flex-col justify-end noise">
        {/* Background layers */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=90"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-[#0c1445]/85 to-[#0a0f2e]/95" />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-blue-500/[0.08] rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-amber-400/[0.06] rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[40%] left-[40%] w-[600px] h-[600px] bg-indigo-500/[0.05] rounded-full blur-[150px] animate-float" style={{ animationDelay: '4s' }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10 pb-14 pt-8">
          {/* Top navigation bar */}
          <div className="flex justify-between items-center mb-16 md:mb-24">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="text-white/40 text-sm font-medium tracking-wider">02.2026</span>
            </div>
            <div className="glass rounded-full px-5 py-2 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-amber-300/80" />
              <span className="text-white/70 text-xs font-semibold tracking-wide">מסמך ייזום מדיניות | ועדת היגוי</span>
            </div>
          </div>

          {/* Hero content */}
          <div className="mb-16 md:mb-20">
            {/* Subtitle */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="h-px w-8 bg-amber-400/60" />
              <span className="text-amber-300/70 text-xs font-bold tracking-[0.2em] uppercase">National AI Employment Strategy</span>
            </div>

            {/* Main title */}
            <h1 className="text-7xl md:text-[120px] font-black leading-[0.85] mb-5 tracking-tight">
              <span className="bg-gradient-to-l from-white via-blue-100 to-white bg-clip-text text-transparent">המקפצה</span>
            </h1>
            <p className="text-xl md:text-3xl text-blue-100/80 font-light leading-relaxed max-w-2xl mb-3">
              אסטרטגיה לאומית לתעסוקה בעידן הבינה המלאכותית
            </p>
            <p className="text-sm text-white/25 flex items-center gap-2">
              צוות "אוכלוסיות בסיכון" · פורום "תעסוקה בעולם החדש"
            </p>
          </div>

          {/* Bottom cards row */}
          <div className="grid md:grid-cols-12 gap-4">
            {/* Why now — 9 cols */}
            <div className="md:col-span-9 glass rounded-2xl p-7">
              <h3 className="font-bold text-sm mb-5 flex items-center gap-2 text-white/90 tracking-wide">
                <Zap className="w-4 h-4 text-amber-400" /> למה דווקא עכשיו?
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Brain, color: "text-amber-400", text: "האצה בהטמעת AI במשק — 700K נשים בסיכון" },
                  { icon: Heart, color: "text-rose-400", text: "מחסור חריף בכוח אדם במערכות הרווחה, הבריאות והחינוך" },
                  { icon: Target, color: "text-emerald-400", text: "חלון הזדמנויות לבחינת מודל מדיניות חדש" },
                ].map((item, i) => (
                  <div key={i} className="glass rounded-xl p-4 hover:bg-white/[0.08] transition-all duration-300 group/card">
                    <item.icon className={`w-5 h-5 ${item.color} mb-2.5 group-hover/card:scale-110 transition-transform`} />
                    <span className="text-white/80 text-sm leading-snug block">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI — 3 cols */}
            <div className="md:col-span-3 relative rounded-2xl p-6 flex flex-col justify-center text-center overflow-hidden animate-pulse-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-amber-600/15 to-orange-500/10 backdrop-blur-xl border border-amber-400/20 rounded-2xl" />
              <div className="relative">
                <Star className="w-5 h-5 text-amber-300/50 mx-auto mb-2" />
                <div className="text-[10px] text-amber-200/60 mb-2 font-bold tracking-[0.15em] uppercase">שורה תחתונה</div>
                <div className="text-5xl font-black text-amber-300 mb-1">1:2.5</div>
                <div className="text-[11px] text-amber-200/50 leading-snug">ROI — כל שקל מחזיר<br/>2.5 ₪ בשנה הראשונה</div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center mt-10 no-print">
            <div className="animate-bounce opacity-30">
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
          ══════════════════════════════════════════ */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 py-12 space-y-10">

        {/* ── KEY STATS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-4">
          <StatCard value="700K" label="נשים בסיכון להחלפה עקב AI" sub="מקצועות אדמיניסטרציה ושירות" color="red" icon={Users} />
          <StatCard value="60-70%" label="זמן עו״ס מבוזבז על בירוקרטיה" sub="במקום טיפול ישיר" color="orange" icon={Clock} />
          <StatCard value="54%" label="שיעור תעסוקת גברים חרדים — קפוא על 54%" sub="בשכר נמוך מהממוצע" color="purple" icon={BarChart3} />
          <StatCard value="10M ₪" label="תקציב פיילוט — 430 משתתפים" sub="12 חודשי הרצה" color="green" icon={TrendingUp} />
        </div>

        {/* ── SUMMARY ── */}
        <Section icon={BookOpen} title="תיאור תמציתי של הפרויקט" subtitle="סעיף 3 — תקציר מנהלים">
          <p className="text-slate-600 leading-[1.85] text-[15px]">
            המדינה מממנת בו-זמנית קצבאות פסיביות לעובדים שנפלטו, ושירותים ציבוריים משותקים ממחסור בכוח אדם.
            "המקפצה" היא מודל התערבות אקטיבי מבוסס-תוצאות, הפועל בשלושה מסלולי פיילוט נפרדים תחת מנהלת אחודה:
            (א) ארנק דיגיטלי לשדרוג מקצועי וחזרה מהירה לשוק הפרטי — 200 נשים;
            (ב) מענק עבודה מועדפת לשיבוץ כ"מכפילי כוח" במקצועות במחסור — 200 נשים;
            (ג) LibAI — מסלול עוקף ליבה לגברים חרדים באמצעות כלי AI — 30 גברים.
            שלושת המסלולים פועלים על אותה משוואה: <strong className="text-slate-800">המרת נטל פיסקלי לנכס מערכתי</strong>.
            סה"כ 430 משתתפים, תקציב 10 מיליון ₪, משך 12 חודשים — הוכחת היתכנות (MVP) בטרם דרישה לשינוי חקיקה.
          </p>
        </Section>

        {/* ── Photo divider ── */}
        <PhotoDivider
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=85"
          text="המרת נטל פיסקלי לנכס מערכתי"
          sub="שלושה מסלולים · אותה משוואה · 430 משתתפים"
        />

        {/* ── BACKGROUND ── */}
        <Section icon={BarChart3} title="רקע — כשל השוק הכפול" subtitle="סעיף 4">
          <div className="space-y-5 text-slate-600 leading-[1.85]">
            <p>
              שוק העבודה הישראלי נכנס לשלב של שחיקה תעסוקתית מואצת. על פי נתוני בנק ישראל,
              כ-700,000 נשים מועסקות כיום במקצועות אדמיניסטרציה ושירות — המצויים בסיכון הגבוה ביותר
              לשינוי או החלפה עקב כניסת כלי בינה מלאכותית. במקביל, 60%-70% מזמן עובדים סוציאליים
              ופרה-רפואיים מבוזבז על בירוקרטיה ולא על טיפול, ושיעור תעסוקת גברים חרדים עומד על 54% בלבד — קפוא, בשכר נמוך מהממוצע.
            </p>
            <div className="bg-gradient-to-l from-amber-50 to-orange-50/80 border border-amber-200/50 rounded-2xl p-6">
              <p className="font-extrabold text-amber-900 mb-2 flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4" /> הפער המבני — "השטח המת"
              </p>
              <p className="text-amber-800/90 text-sm leading-[1.85]">
                המערכת הציבורית מספקת כיום שני מענים: דמי אבטלה (רשת ביטחון פסיבית) והכשרות מקצועיות
                (פתרון ארוך טווח, לרוב מאוחר מדי). בין שניהם קיים פער מבני קריטי בחודשים 1-4 לאחר הפיטורים:
                ההון האנושי נשחק, הסיכוי לחזרה איכותית לעבודה יורד, והמדינה ממשיכה לשלם קצבאות ללא יצירת ערך תעסוקתי.
                מחקר אמפירי מגרמניה ודנמרק מוכיח: התערבות פעילה בחלון זה מונעת שחיקה ארוכת טווח.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
              <Lightbulb className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
              <p className="text-sm text-slate-500">
                <strong className="text-slate-700">מה חסר:</strong> אין כיום מנגנון שמנהל את תקופת המעבר ומאפשר התערבות אקטיבית, גמישה ומותאמת אישית.
                חסר "תקציב צמיחה אישי" המאפשר למפוטרת הטרייה לצרוך שירותי חוסן, כלים טכנולוגיים והכנה לקריירה בזמן אמת.
              </p>
            </div>
          </div>
        </Section>

        {/* ── PROBLEM DEFINITION ── */}
        <div className="bg-gradient-to-l from-rose-50/80 via-white to-white rounded-2xl shadow-sm ring-1 ring-rose-100 overflow-hidden hover:shadow-lg transition-all duration-500">
          <div className="h-1 bg-gradient-to-l from-rose-500 to-red-500" />
          <div className="p-7 md:p-8">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center shadow-lg shadow-rose-500/15">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">הגדרת הבעיה</h2>
                <p className="text-xs text-slate-400">סעיף 5</p>
              </div>
            </div>
            <p className="text-slate-700 leading-[1.85] text-[16px]">
              המדינה מממנת בו-זמנית קצבאות פסיביות לעובדים שנפלטו ושירותים ציבוריים משותקים ממחסור בכוח אדם —
              ללא מנגנון אקטיבי שממיר את הנטל הפיסקלי לנכס מערכתי. חסרה התערבות מוקדמת, גמישה ומבוססת-תוצאות
              בחודשים הקריטיים הראשונים לאחר פיטורים — חלון ההזדמנויות שבו ניתן למנוע שחיקת הון אנושי
              ולהפנות עובדים לתפקידים בעלי ערך.
            </p>
          </div>
        </div>

        {/* ── TARGET AUDIENCE ── */}
        <Section icon={Users} title="קהל היעד — 430 משתתפים" subtitle="סעיף 6">
          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {[
              { color: "from-blue-500 to-indigo-500", bg: "bg-gradient-to-br from-blue-50 to-indigo-50/50", title: "מסלול א׳ — נשים בסיכון", desc: "200 נשים שפוטרו לאחרונה ממקצועות אדמיניסטרציה ושירות, באזור גיאוגרפי מוגדר", num: "200", potential: "פוטנציאל: 700K" },
              { color: "from-emerald-500 to-teal-500", bg: "bg-gradient-to-br from-emerald-50 to-teal-50/50", title: "מסלול ב׳ — מקצועות במחסור", desc: 'שיבוץ כתומכות עו"ס, מתאמות קליניות וסייעות הוראה במערך הציבורי', num: "200", potential: "אלפי משרות פנויות" },
              { color: "from-violet-500 to-purple-500", bg: "bg-gradient-to-br from-violet-50 to-purple-50/50", title: "מסלול ג׳ — LibAI חרדים", desc: "30 גברים חרדים תושבי ירושלים — בוטקאמפ 6 חודשים + התמחות מעשית", num: "30", potential: "עשרות אלפים" },
            ].map((t, i) => (
              <div key={i} className={`${t.bg} rounded-2xl p-5 border border-slate-100 relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group`}>
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l ${t.color}`} />
                <div className="text-5xl font-black text-slate-200/60 absolute top-2 left-4 group-hover:text-slate-200/80 transition-colors">{t.num}</div>
                <div className="font-extrabold text-slate-900 mb-2 text-sm relative">{t.title}</div>
                <div className="text-sm text-slate-500 leading-snug relative mb-3">{t.desc}</div>
                <div className="text-[10px] text-slate-400 bg-white/80 rounded-full px-2.5 py-0.5 inline-block font-medium relative">{t.potential}</div>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
            <Users className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
            <p className="text-sm text-slate-500">
              <strong className="text-slate-700">משתתפי מעטפת:</strong> פקידי השמה בשירות התעסוקה, מנהלים במקצועות המחסור, ומעסיקים בהיי-טק — כסוכני שינוי מרכזיים.
            </p>
          </div>
        </Section>

        {/* ── PROJECT GOAL ── */}
        <div className="bg-gradient-to-l from-blue-50/80 via-white to-white rounded-2xl shadow-sm ring-1 ring-blue-100 overflow-hidden hover:shadow-lg transition-all duration-500">
          <div className="h-1 bg-gradient-to-l from-blue-600 to-indigo-600" />
          <div className="p-7 md:p-8">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/15">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">מטרת הפרויקט</h2>
                <p className="text-xs text-slate-400">סעיף 7</p>
              </div>
            </div>
            <p className="text-lg text-slate-700 font-medium leading-[1.85]">
              הוכחת היתכנות כלכלית ומערכתית למודל התערבות אקטיבי הממיר נטל פיסקלי (קצבאות פסיביות ומחסור בכוח אדם)
              לנכס מערכתי (תעסוקה איכותית ופריון) — כבסיס לשינוי מדיניות תעסוקתית והרחבה ארצית.
            </p>
          </div>
        </div>

        {/* ── THEORY OF CHANGE ── */}
        <Section icon={Lightbulb} title="תיאוריית השינוי — מדיניות העברה אקטיבית" accent="amber" subtitle="סעיף 11 — Active Transfer Policy">
          <p className="text-slate-600 leading-[1.85] mb-6">
            המדינה ממירה חלק מתשלומי ההעברה הפסיביים לתקציב צמיחה אישי המיועד להכשרה, השמה ושדרוג מקצועי,
            ללא פריצת מסגרת התקציב. השקעה זו מקצרת את משך האבטלה, מורידה את העומס הבירוקרטי מהמערכת הציבורית
            באמצעות "מכפילי כוח", ומנצלת טכנולוגיה (AI) כדי לגשר על פערי שפה וליבה במקום להוות איום תעסוקתי.
            שלושת המסלולים בוחנים אותה משוואה כלכלית בסביבות שונות, כדי לספק לממשלה כלים מבוססי-נתונים להרחבה לאומית.
          </p>
          <div className="bg-gradient-to-l from-slate-50 to-blue-50/40 rounded-2xl p-6 border border-slate-100">
            <p className="text-xs text-slate-400 mb-4 text-center font-bold tracking-wider uppercase">המשוואה המרכזית</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="bg-rose-100 text-rose-800 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm border border-rose-200/50">תשלומי העברה</span>
              <ArrowLeft className="w-5 h-5 text-amber-500" />
              <span className="bg-amber-100 text-amber-800 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm border border-amber-200/50">השקעה תעסוקתית</span>
              <ArrowLeft className="w-5 h-5 text-emerald-500" />
              <span className="bg-emerald-100 text-emerald-800 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm border border-emerald-200/50">נתונים להרחבה לאומית</span>
            </div>
          </div>
        </Section>

        {/* ── Photo divider — teamwork ── */}
        <PhotoDivider
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85"
          text="שלושה מסלולים — מנהלת אחת — 10 מיליון ₪"
          sub="מודל התערבות מבוסס-תוצאות"
          gradient="bg-gradient-to-l from-indigo-900/90 via-blue-900/85 to-slate-900/75"
        />

        {/* ── INTERVENTION MODEL ── */}
        <div>
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/15">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">מודל ההתערבות</h2>
              <p className="text-xs text-slate-400">סעיף 12 — תקציב כולל 10 מיליון ש"ח</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <TrackCard
              icon={Briefcase} num="א"
              title='זירת "המקפצה"'
              owner="באחריות שירות התעסוקה"
              lines={["ארנק דיגיטלי ל-200 נשים שפוטרו", "צריכת כלי AI, הכשרות קצרות, והשמה לשוק הפרטי"]}
              target="200 נשים" budget="3M ₪" kpi="60% שובצו בשכר ≥ קודם" color="blue"
            />
            <TrackCard
              icon={Heart} num="ב"
              title="מענק עבודה מועדפת"
              owner="באחריות ביטוח לאומי"
              lines={["המרת קצבאות אבטלה לתוספת שכר 12-18 חודשים", 'שיבוץ כ"מכפילי כוח" להפחתת עומס מצוותים קליניים וסוציאליים']}
              target="200 נשים" budget="4.5M ₪" kpi="קיצור אבטלה 30%" color="green"
            />
            <TrackCard
              icon={GraduationCap} num="ג"
              title="LibAI — עוקף ליבה"
              owner="באחריות משרד העבודה"
              lines={['בוטקאמפ 6 חודשים — כלי AI כ"עוקף ליבה"', "התמחות מעשית (OJT) + פיתוח כלים ייעודיים"]}
              target="30 גברים חרדים" budget="2M ₪" kpi="השמה בשכר 12-15K ₪" color="purple"
            />
          </div>
          <div className="text-center mt-5">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm border border-slate-100 text-sm text-slate-500 font-medium">
              <CircleDot className="w-3.5 h-3.5 text-blue-500" />
              מנהלת פרויקט לאומית: 500K ₪ · סה"כ: 10 מיליון ₪
            </div>
          </div>
        </div>

        {/* ── PARTNERS ── */}
        <Section icon={Building2} title="מיפוי שותפים" subtitle="סעיף 8">
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { name: "שירות התעסוקה", role: 'מוביל מסלול א ("המקפצה" לשוק הפרטי)' },
              { name: "המוסד לביטוח לאומי", role: "מוביל מסלול ב, חיבור מנגנון התביעות ומימון מענקים" },
              { name: "משרד העבודה", role: "אחריות רגולטורית למסלול ג (שילוב המגזר החרדי)" },
              { name: "החשב הכללי — זירת האתגרים", role: "פרסום קול קורא (RFD), מסגרת משפטית ופלטפורמת Marketplace" },
              { name: "ג׳וינט-תבת", role: "ליווי מחקרי, מדידת אפקטיביות (RCT) ומימון Seed להקמת הפלטפורמה" },
            ].map((p, i) => (
              <div key={i} className="flex gap-3 items-start bg-slate-50/80 rounded-xl p-4 border border-slate-100 hover:bg-blue-50/50 hover:border-blue-100 transition-all duration-300 group">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="font-bold text-slate-800 text-sm">{p.name}</span>
                  <span className="text-slate-500 text-sm"> — {p.role}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Photo divider — innovation ── */}
        <PhotoDivider
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=85"
          text="שותפויות אסטרטגיות"
          sub="ממשלה · אקדמיה · תעשייה · מגזר שלישי"
          gradient="bg-gradient-to-l from-emerald-900/90 via-teal-900/80 to-slate-900/70"
        />

        {/* ── TEAM ROLES ── */}
        <div className="grid md:grid-cols-2 gap-5">
          <Section icon={Users} title="תפקיד צוות הפיתוח" subtitle="סעיף 9">
            <p className="text-sm text-slate-600 leading-[1.85]">
              ניהול אופרטיבי מלא של הפיילוט, הכולל גיבוש אפיון לארנק הדיגיטלי (מסלול א),
              בניית מנגנון משפטי לחלוקת המענקים (מסלול ב), והפעלת בוטקאמפ להכשרת מיומנויות AI (מסלול ג).
              הצוות אמון על תיאום בין משרדי הממשלה לספקים החיצוניים.
            </p>
          </Section>
          <Section icon={Building2} title="תפקיד פורום האקוסיסטם" subtitle="סעיף 10">
            <p className="text-sm text-slate-600 leading-[1.85]">
              יצירת "שוק חופשי" מפוקח. מעסיקי עוגן (חברות הייטק, תעשייה ומגזר ציבורי) מתחייבים לקלוט מתמחים (OJT)
              על בסיס מכתבי כוונות, בעוד ספקי שירותים פרטיים יתחרו במסגרת ה-Marketplace על מתן מענים ממוקדים למשתתפים.
            </p>
          </Section>
        </div>

        {/* ── TIMELINE ── */}
        <Section icon={Clock} title="משך הפרויקט — אבני דרך" subtitle="סעיף 13">
          <div className="space-y-0">
            <TimelineStep step={1} month="חודש 1" title="התנעה מוסדית" desc="גיוס פרויקטור, אישור מסגרת תקציב וכינוס ועדת היגוי" />
            <TimelineStep step={2} month="חודשים 2-3" title="רכש ושותפויות" desc="פרסום קול קורא (RFD) בזירת האתגרים, חתימת הסכמי קליטה מול משרדי ממשלה ומעסיקים" />
            <TimelineStep step={3} month="חודשים 4-5" title="גיוס והכשרה" desc="גיוס משתתפים, חלוקת ארנקים (א), שילוב OJT מיידי (ב), פתיחת הבוטקאמפ החרדי (ג)" />
            <TimelineStep step={4} month="חודשים 6-18" title="הרצה ומדידה" desc="איסוף נתוני שכר ומדידה. הגשת נתוני ROI לאגף התקציבים להמלצות חקיקה" isLast />
          </div>
        </Section>

        {/* ── VALUE + SUCCESS ── */}
        <div className="grid md:grid-cols-2 gap-5">
          <Section icon={Award} title="הערך המוסף" accent="amber" subtitle="סעיף 14">
            <p className="text-sm text-slate-600 leading-[1.85]">
              איגוד שלושת המסלולים תחת פיילוט ומנהלת אחת מייצר אקוסיסטם נתונים רוחבי המוכיח את היתרון הכלכלי שבהתערבות אקטיבית.
              הפרויקט הופך טכנולוגיה משבשת מ"גורם מבדל" המאיים על עובדים חלשים,
              ל<strong className="text-slate-800">"גורם משווה" (Equalizer)</strong> המעצים את הפריון ומגשר על פערים מבניים.
            </p>
          </Section>
          <Section icon={TrendingUp} title="תמונת הצלחה" accent="green" subtitle="סעיף 15">
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                "מסלול א: קיצור משך האבטלה ב-20%-30%",
                "מסלול ב: 60% שימרו/שיפרו שכר",
                "מסלול ג: 80% הושמו בשכר 12-15K ₪",
                "הצלחה = בסיס להרחבה ארצית מדורגת",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* ── LOGICAL MODEL (Section 16 — NEW) ── */}
        <Section icon={Activity} title="מודל לוגי" subtitle="סעיף 16 — תשומות → תפוקות → תוצאות">
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="bg-gradient-to-l from-slate-800 to-slate-900 text-white p-3 text-right rounded-tr-xl font-bold text-xs w-20">רמה</th>
                  <th className="bg-gradient-to-l from-blue-700 to-blue-800 text-white p-3 text-right font-bold text-xs">תשומות</th>
                  <th className="bg-gradient-to-l from-indigo-600 to-indigo-700 text-white p-3 text-right font-bold text-xs">תפוקות</th>
                  <th className="bg-gradient-to-l from-amber-600 to-amber-700 text-white p-3 text-right font-bold text-xs">תוצאות ביניים</th>
                  <th className="bg-gradient-to-l from-emerald-600 to-emerald-700 text-white p-3 text-right rounded-tl-xl font-bold text-xs">תוצאות סופיות</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-50/40">
                  <td className="p-3 border-b border-slate-100 font-extrabold text-slate-700 text-xs">רמת הפרט</td>
                  <td className="p-3 border-b border-slate-100 text-slate-600 text-xs leading-relaxed">ארנק דיגיטלי, סבסוד שכר אקטיבי, הכשרת "עוקף ליבה" (AI)</td>
                  <td className="p-3 border-b border-slate-100 text-slate-600 text-xs leading-relaxed">מימוש השירותים, סיום בוטקאמפ, קליטה ל-OJT</td>
                  <td className="p-3 border-b border-slate-100 text-slate-600 text-xs leading-relaxed">חזרה לשוק תוך פחות מ-6 חודשים, יצירת גמישות תעסוקתית</td>
                  <td className="p-3 border-b border-slate-100 text-slate-600 text-xs leading-relaxed">איפוס "קנס שכר", העלאת פריון אישי, תעסוקה מקיימת</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b border-slate-100 font-extrabold text-slate-700 text-xs">רמת המערכת</td>
                  <td className="p-3 border-b border-slate-100 text-slate-600 text-xs leading-relaxed">מינוף תקציב קיים למדיניות אקטיבית (10M ₪), פלטפורמת חשכ"ל</td>
                  <td className="p-3 border-b border-slate-100 text-slate-600 text-xs leading-relaxed">גיוס ספקים, התקשרות עם מעסיקים, הפעלת 430 משתתפים</td>
                  <td className="p-3 border-b border-slate-100 text-slate-600 text-xs leading-relaxed">הפחתה בעומס בירוקרטי ברווחה/בריאות, שינוי תפיסת מעסיקים</td>
                  <td className="p-3 border-b border-slate-100 text-slate-600 text-xs leading-relaxed">ROI חיובי 1:2.5, מניעת אבטלה מבנית, בסיס לתיקון חקיקה</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── METRICS TABLE ── */}
        <Section icon={BarChart3} title="טבלת מדדים" subtitle="סעיף 17">
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="bg-gradient-to-l from-slate-800 to-slate-900 text-white p-3.5 text-right rounded-tr-xl font-bold w-24">סוג מדד</th>
                  <th className="bg-gradient-to-l from-slate-800 to-slate-900 text-white p-3.5 text-right rounded-tl-xl font-bold">תיאור המדד</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "תפוקה", desc: "הקמת הזירה וגיוס מינימום 20 ספקי שירות למסלול א", color: "bg-blue-50/50" },
                  { type: "תפוקה", desc: "שיעור מימוש ארנק דיגיטלי (יעד: 75% מהמשתתפות במסלול א)", color: "bg-white" },
                  { type: "תפוקה", desc: "שיעור סיום בוטקאמפ של משתתפי מסלול ג", color: "bg-blue-50/50" },
                  { type: "תפוקה", desc: 'כמות ההשמות של "מכפילי כוח" (מסלול ב) במערכות הציבוריות', color: "bg-white" },
                  { type: "ביניים", desc: "שרידות בהתמחות: 90% מבוגרי מסלול ג צלחו את 6 חודשי ה-OJT", color: "bg-amber-50/40" },
                  { type: "ביניים", desc: "הפחתת עומס אדמיניסטרטיבי של לפחות 25% מהצוותים הקליניים (מסלול ב)", color: "bg-white" },
                  { type: "ביניים", desc: "ציון שביעות רצון מעסיקים מתפוקת משתתפי הפיילוט (יעד: 4/5)", color: "bg-amber-50/40" },
                  { type: "סופית", desc: "ירידה של 20%-30% בימי האבטלה במסלול א ביחס לקבוצת הביקורת", color: "bg-emerald-50/40" },
                  { type: "סופית", desc: "שימור/שיפור שכר עבור 60% ממשתתפות מסלולים א וב", color: "bg-white" },
                  { type: "סופית", desc: "השמת בוגרי מסלול ג בשכר ברוטו ממוצע של 10,500 ש\"ח ומעלה", color: "bg-emerald-50/40" },
                  { type: "סופית", desc: "תשואה מערכתית (ROI) של 1:2.5 למשק, וצמצום עלויות עקיפות", color: "bg-white" },
                ].map((row, i) => (
                  <tr key={i} className={`${row.color} hover:bg-blue-50/30 transition-colors`}>
                    <td className="p-3 border-b border-slate-100 font-bold whitespace-nowrap text-slate-600 text-xs">{row.type}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── RCT ── */}
        <Section icon={Shield} title="מתווה מדידה והערכה — RCT" subtitle="סעיף 18 — מחקר מבוקר">
          <p className="text-slate-600 leading-[1.85]">
            ביצוע מחקר מבוקר (RCT) לבדיקת קבוצות ההתערבות מול קבוצות ביקורת הממשיכות לקבל קצבאות במודל הפסיבי.
            המדידה תכמת את החיסכון בימי אבטלה, תבחן את מניעת שחיקת השכר לאורך זמן,
            ותוכיח באמצעות מחקרי עומס (Time-Motion) את העלייה בפריון הקליני כתוצאה משילוב מכפילי הכוח.
          </p>
        </Section>

        {/* ══════════════════════════════════════════
            DECISIONS CTA — The grand finale
            ══════════════════════════════════════════ */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl noise">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=85" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e]/95 via-[#0c1445]/95 to-slate-950/98" />
          <div className="relative p-10 md:p-14 text-white">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-5">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold tracking-wider text-white/70">סעיף 19 — לאישור הוועדה</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black">החלטות נדרשות מוועדת ההיגוי</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "1", title: "אישור עקרוני", desc: "אישור מסגרת שלושת המסלולים תחת מנהלת לאומית אחת כפיילוט לבחינת שינוי מדיניות", icon: CheckCircle2 },
                { num: "2", title: "מינוי צוות", desc: "בחירת פרויקטור לאומי וצוות היגוי בין-משרדי", icon: Users },
                { num: "3", title: "אישור תקציבי", desc: "מסגרת של 10 מיליון ש\"ח להתנעת הפיילוט, פיתוח הפלטפורמה, ומימון ההכשרות והמענקים", icon: TrendingUp },
              ].map((d, i) => (
                <div key={i} className="glass rounded-2xl p-7 text-center hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center text-2xl font-black mx-auto mb-5 shadow-xl shadow-amber-400/20 group-hover:scale-105 transition-transform">{d.num}</div>
                  <div className="font-bold mb-3 text-lg">{d.title}</div>
                  <div className="text-sm text-blue-200/70 leading-relaxed">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="text-center pb-14 pt-8">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-7 py-3.5 shadow-md border border-slate-100">
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              פורום "תעסוקה בעולם החדש" · ועדת "אוכלוסיות בסיכון" · פברואר 2026
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
