import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users, Target, TrendingUp, Building2, Clock, Award,
  CheckCircle2, BarChart3, Shield, Lightbulb, Zap, ArrowLeft,
  BookOpen, Briefcase, GraduationCap, Heart, Sparkles,
  ChevronDown, Globe, Rocket, Star
} from "lucide-react";

/* ───── helpers ───── */
const Section = ({ children, icon: Icon, title, accent = "blue", id }: { children: React.ReactNode; icon?: any; title: string; accent?: string; id?: string }) => {
  const colors: Record<string, string> = {
    blue: "from-blue-600 to-blue-700",
    amber: "from-amber-500 to-amber-600",
    green: "from-emerald-500 to-emerald-600",
    red: "from-red-500 to-red-600",
  };
  return (
    <Card id={id} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border-0 ring-1 ring-gray-200/60 group">
      <div className={`h-1.5 bg-gradient-to-l ${colors[accent]}`} />
      <CardContent className="pt-7 pb-7 px-7">
        <div className="flex items-center gap-3 mb-5">
          {Icon && (
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors[accent]} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
          )}
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        </div>
        {children}
      </CardContent>
    </Card>
  );
};

const Stat = ({ value, label, color = "blue", icon: Icon }: { value: string; label: string; color?: string; icon: any }) => {
  const bg: Record<string, string> = {
    blue: "from-blue-600 to-blue-800",
    green: "from-emerald-600 to-emerald-800",
    purple: "from-purple-600 to-purple-800",
    orange: "from-orange-500 to-orange-700",
    red: "from-red-600 to-red-800",
  };
  return (
    <div className={`bg-gradient-to-br ${bg[color]} rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden group hover:scale-[1.03] transition-transform duration-300`}>
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/5 rounded-full" />
      <Icon className="w-6 h-6 mx-auto mb-2 opacity-80" />
      <div className="text-3xl md:text-4xl font-black mb-1 relative">{value}</div>
      <div className="text-xs opacity-80 leading-tight relative">{label}</div>
    </div>
  );
};

const Track = ({ title, owner, lines, target, budget, kpi, color, icon: Icon }: {
  title: string; owner: string; lines: string[]; target: string; budget: string; kpi: string; color: string; icon: any;
}) => {
  const c: Record<string, { bg: string; border: string; badge: string; icon: string; gradient: string }> = {
    blue:   { bg: "bg-blue-50/80",    border: "border-blue-200/60",    badge: "bg-blue-600",    icon: "text-blue-600", gradient: "from-blue-600 to-blue-700" },
    green:  { bg: "bg-emerald-50/80", border: "border-emerald-200/60", badge: "bg-emerald-600", icon: "text-emerald-600", gradient: "from-emerald-600 to-emerald-700" },
    purple: { bg: "bg-purple-50/80",  border: "border-purple-200/60",  badge: "bg-purple-600",  icon: "text-purple-600", gradient: "from-purple-600 to-purple-700" },
  };
  const s = c[color];
  return (
    <Card className={`${s.bg} ${s.border} border hover:shadow-xl transition-all hover:-translate-y-1 duration-300 overflow-hidden`}>
      <div className={`h-1.5 bg-gradient-to-l ${s.gradient}`} />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-sm`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <CardTitle className="text-base text-gray-900 leading-tight">{title}</CardTitle>
          </div>
          <Badge className={`${s.badge} text-white text-xs shrink-0 shadow-sm`}>{budget}</Badge>
        </div>
        <p className="text-xs text-gray-500 mr-11">{owner}</p>
      </CardHeader>
      <CardContent className="space-y-1.5 text-sm">
        {lines.map((l, i) => (
          <p key={i} className="text-gray-700 leading-snug">{l}</p>
        ))}
        <div className="flex justify-between pt-3 border-t border-gray-200/60 mt-3">
          <span className="font-semibold text-gray-800">{target}</span>
          <span className="text-xs text-gray-500 bg-white/60 px-2 py-0.5 rounded-full">{kpi}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const TL = ({ month, title, desc, step }: { month: string; title: string; desc: string; step: number }) => (
  <div className="flex gap-4 items-start group">
    <div className="flex flex-col items-center">
      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center text-sm font-bold shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">{step}</div>
      {step < 4 && <div className="w-0.5 h-10 bg-gradient-to-b from-blue-300 to-blue-100 mt-1" />}
    </div>
    <div className="pb-4">
      <div className="bg-blue-600 text-white rounded-lg px-3 py-1 text-xs font-bold inline-block mb-1 shadow-sm">{month}</div>
      <div className="font-bold text-gray-900">{title}</div>
      <div className="text-sm text-gray-600">{desc}</div>
    </div>
  </div>
);

/* ───── page ───── */
export default function ProjectFile() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 print:bg-white">

      {/* ── HERO HEADER ── */}
      <header className="relative text-white overflow-hidden min-h-[600px] flex items-end">
        {/* Photo background — high-quality office/tech image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-blue-950/88 to-indigo-950/95" />
        </div>

        {/* Animated geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Decorative light effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-[10%] w-80 h-80 bg-amber-400/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-[5%] w-[500px] h-[500px] bg-blue-400/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-6 py-12">
          {/* Top bar — official badge */}
          <div className="flex justify-between items-center mb-14">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
              <span className="text-blue-200/70 text-sm font-medium tracking-wide">02.2026 | מהלך תעסוקה ועסקים בעידן הבינה המלאכותית</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-full px-5 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-white/90 text-xs font-semibold tracking-wide">תיק התנסות | לדיון בוועדת ההיגוי</span>
            </div>
          </div>

          {/* Main title block */}
          <div className="mb-14">
            <div className="flex items-center gap-5 mb-6">
              <div className="h-20 w-1.5 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 rounded-full shadow-lg shadow-amber-400/30" />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="w-6 h-6 text-amber-400/80" />
                  <span className="text-amber-300/80 text-sm font-bold tracking-widest uppercase">National AI Employment Strategy</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-3">
                  <span className="bg-gradient-to-l from-white via-white to-blue-100 bg-clip-text text-transparent">המקפצה</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100/90 font-light leading-relaxed">אסטרטגיה לאומית לתעסוקה בעידן הבינה המלאכותית</p>
              </div>
            </div>
            <p className="text-sm text-blue-300/50 mr-7 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              צוות "אוכלוסיות בסיכון" | פורום "תעסוקה בעולם החדש"
            </p>
          </div>

          {/* Why now + ROI cards */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-3 bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl p-7 shadow-2xl">
              <h3 className="font-bold text-base mb-5 flex items-center gap-2 text-white">
                <Zap className="w-5 h-5 text-amber-400" /> למה דווקא עכשיו?
              </h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                {[
                  { icon: Zap, color: "text-amber-400", bg: "from-amber-500/10 to-amber-600/5", text: "האצה בהטמעת AI במשק" },
                  { icon: Heart, color: "text-rose-400", bg: "from-rose-500/10 to-rose-600/5", text: "מחסור חריף בכוח אדם במערכות החברתיות" },
                  { icon: Target, color: "text-emerald-400", bg: "from-emerald-500/10 to-emerald-600/5", text: "חלון הזדמנות לבחינת מודל מדיניות חדש" },
                ].map((item, i) => (
                  <div key={i} className={`bg-gradient-to-br ${item.bg} rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5 duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color} mb-3`} />
                    <span className="text-blue-100 leading-snug block">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 backdrop-blur-xl border border-amber-400/25 rounded-2xl p-6 flex flex-col justify-center text-center shadow-2xl relative overflow-hidden">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400/10 rounded-full blur-xl" />
              <Star className="w-5 h-5 text-amber-300/60 mx-auto mb-2" />
              <div className="text-xs text-amber-200/70 mb-2 font-bold tracking-wider uppercase">שורה תחתונה</div>
              <div className="text-5xl font-black text-amber-300 mb-2 relative">1:2.5</div>
              <div className="text-xs text-amber-200/60 leading-snug">ROI — כל שקל מחזיר 2.5 ₪ בשנה הראשונה</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-10">
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-white/30" />
            </div>
          </div>
        </div>
      </header>

      {/* ── Smooth transition ── */}
      <div className="relative h-16 -mt-1">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-transparent" />
      </div>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">

        {/* ── KEY STATS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-6">
          <Stat value="700K" label="נשים בסיכון להחלפה עקב AI" color="red" icon={Users} />
          <Stat value="60-70%" label="זמן עו״ס מבוזבז על בירוקרטיה" color="orange" icon={Clock} />
          <Stat value="54%" label="תעסוקת גברים חרדים — קפוא" color="purple" icon={BarChart3} />
          <Stat value="10M ₪" label="תקציב פיילוט — 430 משתתפים" color="green" icon={TrendingUp} />
        </div>

        {/* ── 3. SUMMARY ── */}
        <Section icon={BookOpen} title="תיאור תמציתי של הפרויקט">
          <p className="text-gray-700 leading-relaxed text-[15px]">
            המדינה מממנת כיום בו-זמנית קצבאות פסיביות לעובדים שנפלטו, ושירותים ציבוריים הסובלים ממחסור בכוח אדם.
            "המקפצה" הוא פיילוט אקטיבי הממיר הוצאה פיסקלית לנכס מערכתי, דרך שלושה מסלולים ממוקדים
            (ארנק דיגיטלי, מענק עבודה מועדפת ציבורית, ובוטקאמפ AI "עוקף ליבה") הפועלים תחת מנהלת לאומית אחת.
            שלושת המסלולים בוחנים אותה משוואה כלכלית — המרת תשלומי העברה להשקעה תעסוקתית — בשלוש אוכלוסיות שונות,
            כדי לאפשר לממשלה לבחור מודל הרחבה לאחר הפיילוט.
            הפרויקט יפעל עבור 430 משתתפים בתקציב כולל של 10 מיליון ש"ח למשך שנת הרצה, לשם הוכחת כדאיות לפני שינוי חקיקה.
          </p>
        </Section>

        {/* ── Visual divider with image ── */}
        <div className="relative rounded-2xl overflow-hidden h-52 shadow-xl group">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=85" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-l from-blue-900/90 via-blue-800/80 to-indigo-900/70 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <p className="text-3xl md:text-4xl font-black mb-3 drop-shadow-lg">המרת נטל פיסקלי לנכס מערכתי</p>
              <p className="text-blue-200/80 text-sm tracking-wide">שלושה מסלולים. אותה משוואה. 430 משתתפים.</p>
            </div>
          </div>
        </div>

        {/* ── 4. BACKGROUND ── */}
        <Section icon={BarChart3} title="רקע — כשל השוק הכפול">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              המשק הישראלי ניצב מול כשל שוק דואלי. מחד, שחיקה תעסוקתית מואצת עקב כניסת כלי AI:
              כ-700,000 נשים מועסקות כיום במקצועות אדמיניסטרציה ושירות המצויים בסיכון להחלפה.
              מאידך, המערכות הציבוריות (רווחה, חינוך ובריאות) סובלות מעומס מתמשך.
              הערכות מקצועיות מצביעות כי 60%-70% מזמנם של עובדים סוציאליים מוקדש למשימות אדמיניסטרטיביות
              במקום טיפול ישיר, מה שמוביל לשחיקה ולעלויות עתק. שיעור תעסוקת גברים חרדים קפוא על 54%, בשכר נמוך עקב חסמי השכלה ושפה.
            </p>
            <div className="bg-gradient-to-l from-amber-50 to-orange-50 border border-amber-200/60 rounded-xl p-5 shadow-sm">
              <p className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" /> הפער המבני — "השטח המת":
              </p>
              <p className="text-amber-800 text-sm leading-relaxed">
                פער מבני במדיניות התעסוקה מספק כיום שני מענים: דמי אבטלה פסיביים או הכשרות ארוכות טווח.
                בין השניים נוצר "שטח מת" של 1-4 חודשים לאחר הפיטורים, בו ההון האנושי נשחק
                והמדינה מייצרת הוצאה פיסקלית ללא יצירת ערך תעסוקתי.
              </p>
            </div>
            <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3 border border-gray-100">
              <strong>מה חסר:</strong> מנגנון תעסוקתי פרואקטיבי לניהול תקופת המעבר באמצעות "תקציב צמיחה אישי",
              המאפשר למפוטרים לצרוך כלים טכנולוגיים ושירותי ליווי אקטיביים בזמן אמת.
            </p>
          </div>
        </Section>

        {/* ── 5. PROBLEM ── */}
        <Card className="border-0 ring-1 ring-red-200/60 bg-gradient-to-l from-red-50/80 to-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
          <div className="h-1.5 bg-gradient-to-l from-red-500 to-red-600" />
          <CardContent className="pt-7 px-7">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">הגדרת הבעיה</h2>
            </div>
            <p className="text-gray-800 leading-relaxed text-lg">
              המדינה מתמודדת בו-זמנית עם תשלומי קצבאות פסיביות לעובדים שנפלטו ממעגל העבודה
              ועם שירותים ציבוריים הסובלים מעומס מתמשך ומחסור בכוח אדם.
              חסרה התערבות מוקדמת וגמישה בחודשים הראשונים לאחר פיטורים,
              שבאמצעותה ניתן למנוע שחיקת הון אנושי ולהמיר את תשלומי ההעברה להשקעה תעסוקתית.
            </p>
          </CardContent>
        </Card>

        {/* ── 6. TARGET AUDIENCE ── */}
        <Section icon={Users} title="קהל היעד — 430 משתתפים">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { color: "from-blue-500 to-blue-600", bg: "bg-blue-50", title: "מסלול א — נשים בסיכון", desc: "200 נשים שפוטרו לאחרונה ממקצועות אדמיניסטרציה ושירות בסיכון", num: "200" },
              { color: "from-emerald-500 to-emerald-600", bg: "bg-emerald-50", title: "מסלול ב — מקצועות במחסור", desc: 'שיבוץ כתומכות עו"ס, מתאמות קליניות וסייעות במערך הציבורי', num: "200" },
              { color: "from-purple-500 to-purple-600", bg: "bg-purple-50", title: "מסלול ג — LibAI חרדים", desc: "30 גברים חרדים תושבי ירושלים — הכשרה טכנולוגית ממוקדת", num: "30" },
            ].map((t, i) => (
              <div key={i} className={`${t.bg} rounded-xl p-5 border border-gray-100 relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}>
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l ${t.color}`} />
                <div className="text-4xl font-black text-gray-200/80 absolute top-3 left-4">{t.num}</div>
                <div className="font-bold text-gray-900 mb-2 text-sm">{t.title}</div>
                <div className="text-sm text-gray-600 leading-snug">{t.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3 border border-gray-100">
            משתתפי מעטפת: פקידי השמה, מנהלי רווחה/בריאות, ומעסיקים כסוכני שינוי מרכזיים.
          </p>
        </Section>

        {/* ── 7. GOAL ── */}
        <Card className="border-0 ring-1 ring-blue-200/60 bg-gradient-to-l from-blue-50/80 to-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
          <div className="h-1.5 bg-gradient-to-l from-blue-600 to-blue-700" />
          <CardContent className="pt-7 px-7">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">מטרת הפרויקט</h2>
            </div>
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              הוכחת היתכנות כלכלית ומערכתית למדיניות העברה אקטיבית המפנה משאבים ציבוריים להשקעה תעסוקתית,
              במטרה להגדיל את הפריון ולספק בסיס נתונים לתיקון מדיניות רוחבי.
            </p>
          </CardContent>
        </Card>

        {/* ── 11. THEORY OF CHANGE ── */}
        <Section icon={Lightbulb} title="תיאוריית השינוי — מדיניות העברה אקטיבית" accent="amber">
          <p className="text-gray-700 leading-relaxed mb-5">
            המדינה ממירה חלק מתשלומי ההעברה הפסיביים לתקציב צמיחה אישי המיועד להכשרה, השמה ושדרוג מקצועי,
            ללא פריצת מסגרת התקציב. השקעה זו מקצרת את משך האבטלה, מורידה את העומס הבירוקרטי מהמערכת הציבורית
            באמצעות "מכפילי כוח", ומנצלת טכנולוגיה (AI) כדי לגשר על פערי שפה וליבה במקום להוות איום תעסוקתי.
          </p>
          <div className="bg-gradient-to-l from-gray-50 to-blue-50/50 rounded-xl p-6 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500 mb-4 text-center font-medium">שלושת המסלולים בוחנים אותה משוואה כלכלית בסביבות שונות:</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="bg-red-100 text-red-800 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm">תשלומי העברה</span>
              <ArrowLeft className="w-5 h-5 text-amber-500" />
              <span className="bg-amber-100 text-amber-800 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm">השקעה תעסוקתית</span>
              <ArrowLeft className="w-5 h-5 text-emerald-500" />
              <span className="bg-emerald-100 text-emerald-800 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm">נתונים להרחבה לאומית</span>
            </div>
          </div>
        </Section>

        {/* ── Visual divider — teamwork ── */}
        <div className="relative rounded-2xl overflow-hidden h-44 shadow-xl group">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-l from-indigo-900/90 to-blue-800/75 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-2xl md:text-3xl font-black drop-shadow-lg">שלושה מסלולים — מנהלת אחת — 10 מיליון ₪</p>
            </div>
          </div>
        </div>

        {/* ── 12. INTERVENTION MODEL ── */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">מודל ההתערבות — תקציב כולל 10 מיליון ש"ח</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Track
              icon={Briefcase}
              title='מסלול א — זירת "המקפצה"'
              owner="באחריות שירות התעסוקה"
              lines={["ארנק דיגיטלי ל-200 נשים שפוטרו", "צריכת כלי AI, הכשרות קצרות, והשמה לשוק הפרטי"]}
              target="200 נשים" budget="3M ₪" kpi="60% שובצו בשכר ≥ קודם" color="blue"
            />
            <Track
              icon={Heart}
              title="מסלול ב — מענק עבודה מועדפת"
              owner="באחריות ביטוח לאומי"
              lines={["מענק תוספתי (מלגה) לתוספת שכר 12-18 חודשים — לא חלופת גמלה", 'שיבוץ כ"מכפילי כוח" להפחתת עומס מצוותים קליניים וסוציאליים']}
              target="200 נשים" budget="4.5M ₪" kpi="קיצור אבטלה 30% מול ביקורת" color="green"
            />
            <Track
              icon={GraduationCap}
              title="מסלול ג — LibAI חרדים"
              owner="באחריות משרד העבודה"
              lines={['בוטקאמפ 6 חודשים — כלי AI כ"עוקף ליבה"', "התמחות מעשית (OJT) + פיתוח כלים ייעודיים"]}
              target="30 גברים חרדים" budget="2M ₪" kpi="השמה בשכר 12-15K ₪" color="purple"
            />
          </div>
          <div className="text-center mt-5">
            <Badge variant="outline" className="text-gray-600 border-gray-300 bg-white shadow-sm px-5 py-1.5 text-sm">
              + מנהלת פרויקט לאומית: 500K ₪ | סה"כ: 10 מיליון ₪
            </Badge>
          </div>
        </div>

        {/* ── 8. PARTNERS ── */}
        <Section icon={Building2} title="מיפוי שותפים">
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { name: "שירות התעסוקה", role: 'מוביל מסלול א ("המקפצה" לשוק הפרטי)' },
              { name: "ביטוח לאומי", role: "מוביל מסלול ב, חיבור מנגנון תביעות ומימון מענקים" },
              { name: "משרד העבודה", role: "אחריות רגולטורית למסלול ג (שילוב המגזר החרדי)" },
              { name: "חשכ״ל — זירת האתגרים", role: "פרסום RFD, מסגרת משפטית ופלטפורמת Marketplace" },
              { name: "ג׳וינט-תבת", role: "ליווי מחקרי, מדידת אפקטיביות (RCT) ומימון Seed" },
            ].map((p, i) => (
              <div key={i} className="flex gap-3 items-start bg-gray-50/80 rounded-xl p-4 border border-gray-100 hover:bg-blue-50/50 hover:border-blue-100 transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-gray-900 text-sm">{p.name}</span>
                  <span className="text-gray-500 text-sm"> — {p.role}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Photo break — innovation ── */}
        <div className="relative rounded-2xl overflow-hidden h-40 shadow-xl group">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=85" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-l from-emerald-900/85 to-teal-800/70 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <p className="text-xl md:text-2xl font-black drop-shadow-lg">שותפויות אסטרטגיות | ממשלה · אקדמיה · תעשייה</p>
            </div>
          </div>
        </div>

        {/* ── 9+10. TEAM ROLES ── */}
        <div className="grid md:grid-cols-2 gap-4">
          <Section icon={Users} title="תפקיד צוות הפיתוח">
            <p className="text-sm text-gray-700 leading-relaxed">
              ניהול אופרטיבי מלא: אפיון ארנק דיגיטלי (א), בניית מנגנון משפטי למענקים (ב),
              הפעלת בוטקאמפ AI (ג). תיאום בין משרדי ממשלה לספקים חיצוניים.
            </p>
          </Section>
          <Section icon={Building2} title="תפקיד פורום האקוסיסטם">
            <p className="text-sm text-gray-700 leading-relaxed">
              יצירת "שוק חופשי" מפוקח. מעסיקי עוגן מתחייבים לקלוט מתמחים (OJT),
              ספקי שירותים מתחרים במסגרת ה-Marketplace על מתן מענים ממוקדים למשתתפים.
            </p>
          </Section>
        </div>

        {/* ── 13. TIMELINE ── */}
        <Section icon={Clock} title="משך הפרויקט — אבני דרך">
          <div className="space-y-0">
            <TL step={1} month="חודש 1" title="התנעה מוסדית" desc="גיוס פרויקטור, אישור מסגרת תקציב, כינוס ועדת היגוי" />
            <TL step={2} month="חודשים 2-3" title="רכש ושותפויות" desc="פרסום RFD בזירת האתגרים, חתימת הסכמי קליטה מול משרדי ממשלה ומעסיקים" />
            <TL step={3} month="חודשים 4-5" title="גיוס והכשרה" desc="חלוקת ארנקים (א), שילוב OJT מיידי (ב), פתיחת בוטקאמפ חרדי (ג)" />
            <TL step={4} month="חודשים 6-18" title="הרצה ומדידה" desc="איסוף נתוני שכר, הגשת נתוני ROI לאגף התקציבים להמלצות חקיקה" />
          </div>
        </Section>

        {/* ── 14+15. VALUE + SUCCESS ── */}
        <div className="grid md:grid-cols-2 gap-4">
          <Section icon={Award} title="הערך המוסף" accent="amber">
            <p className="text-sm text-gray-700 leading-relaxed">
              איגוד שלושת המסלולים תחת מנהלת אחת מייצר אקוסיסטם נתונים רוחבי המוכיח את היתרון הכלכלי שבהתערבות אקטיבית.
              הפרויקט הופך טכנולוגיה משבשת מ"גורם מבדל" המאיים על עובדים חלשים,
              ל<strong>"גורם משווה" (Equalizer)</strong> המעצים את הפריון ומגשר על פערים מבניים.
            </p>
          </Section>
          <Section icon={TrendingUp} title="תמונת הצלחה" accent="green">
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "מסלול א: קיצור אבטלה ב-20%-30%",
                "מסלול ב: 60% שימרו/שיפרו שכר",
                "מסלול ג: 80% הושמו בשכר 12-15K ₪",
                "הצלחה = בסיס להרחבה ארצית מדורגת",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* ── 17. METRICS TABLE ── */}
        <Section icon={BarChart3} title="טבלת מדדים">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-l from-blue-800 to-blue-900 text-white">
                  <th className="p-3 text-right rounded-tr-lg font-bold">סוג</th>
                  <th className="p-3 text-right rounded-tl-lg font-bold">תיאור המדד</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "תפוקה", desc: "הקמת הזירה וגיוס מינימום 20 ספקי שירות למסלול א", bg: "bg-blue-50/60" },
                  { type: "תפוקה", desc: "שיעור מימוש ארנק דיגיטלי (יעד: 75% מהמשתתפות במסלול א)", bg: "bg-white" },
                  { type: "תפוקה", desc: "שיעור סיום בוטקאמפ של משתתפי מסלול ג", bg: "bg-blue-50/60" },
                  { type: "תפוקה", desc: 'כמות השמות "מכפילי כוח" (מסלול ב) במערכות הציבוריות', bg: "bg-white" },
                  { type: "ביניים", desc: "שרידות בהתמחות: 90% מבוגרי מסלול ג צלחו 6 חודשי OJT", bg: "bg-amber-50/60" },
                  { type: "ביניים", desc: "הפחתת עומס אדמיניסטרטיבי של 25%+ מהצוותים הקליניים (מסלול ב)", bg: "bg-white" },
                  { type: "ביניים", desc: "ציון שביעות רצון מעסיקים מתפוקת משתתפי הפיילוט (יעד: 4/5)", bg: "bg-amber-50/60" },
                  { type: "סופית", desc: "ירידה של 20%-30% בימי האבטלה במסלול א ביחס לקבוצת ביקורת", bg: "bg-emerald-50/60" },
                  { type: "סופית", desc: "שימור/שיפור שכר עבור 60% ממשתתפות מסלולים א וב", bg: "bg-white" },
                  { type: "סופית", desc: "השמת בוגרי מסלול ג בשכר ברוטו ממוצע של 10,500 ש\"ח ומעלה", bg: "bg-emerald-50/60" },
                  { type: "סופית", desc: "תשואה מערכתית (ROI) של 1:2.5 למשק, וצמצום עלויות עקיפות", bg: "bg-white" },
                ].map((row, i) => (
                  <tr key={i} className={`${row.bg} hover:bg-blue-50/40 transition-colors`}>
                    <td className="p-3 border-b border-gray-100 font-bold whitespace-nowrap text-gray-700">{row.type}</td>
                    <td className="p-3 border-b border-gray-100 text-gray-700">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── 18. RCT ── */}
        <Section icon={Shield} title="מתווה מדידה והערכה — RCT">
          <p className="text-gray-700 leading-relaxed">
            ביצוע מחקר מבוקר (RCT) לבדיקת קבוצות ההתערבות מול קבוצות ביקורת הממשיכות לקבל קצבאות במודל הפסיבי.
            המדידה תכמת את החיסכון בימי אבטלה, תבחן את מניעת שחיקת השכר לאורך זמן,
            ותוכיח באמצעות מחקרי עומס (Time-Motion) את העלייה בפריון הקליני כתוצאה משילוב מכפילי הכוח.
          </p>
        </Section>

        {/* ── 19. DECISIONS CTA ── */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=85" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/95 via-indigo-900/95 to-slate-950/95" />
          <div className="relative p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-black mb-10 text-center flex items-center justify-center gap-3">
              <Sparkles className="w-7 h-7 text-amber-400" />
              החלטות נדרשות מוועדת ההיגוי
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "1", title: "אישור מדיניות העברה אקטיבית", desc: "אישור מסגרת שלושת המסלולים תחת מנהלת לאומית אחת כפיילוט לבחינת שינוי מדיניות" },
                { num: "2", title: "מינוי צוות", desc: "בחירת פרויקטור לאומי וצוות היגוי בין-משרדי" },
                { num: "3", title: "אישור תקציבי", desc: "מסגרת של 10 מיליון ש\"ח להתנעת הפיילוט, פיתוח הפלטפורמה, ומימון ההכשרות והמענקים" },
              ].map((d, i) => (
                <div key={i} className="bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-2xl p-7 text-center hover:bg-white/[0.14] transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-blue-950 flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-xl shadow-amber-400/20">{d.num}</div>
                  <div className="font-bold mb-3 text-lg">{d.title}</div>
                  <div className="text-sm text-blue-200/80 leading-relaxed">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-12 pt-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-xs text-gray-500 font-medium">פורום "תעסוקה בעולם החדש" | ועדת "אוכלוסיות בסיכון" | פברואר 2026</span>
          </div>
        </div>
      </main>
    </div>
  );
}
