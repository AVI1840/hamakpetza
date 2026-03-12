import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users, Target, TrendingUp, Building2, Clock, Award,
  CheckCircle2, BarChart3, Shield, Lightbulb, Zap, ArrowDown,
  BookOpen, Briefcase, GraduationCap, Heart
} from "lucide-react";

/* ───── helpers ───── */
const Section = ({ children, icon: Icon, title }: { children: React.ReactNode; icon?: any; title: string }) => (
  <Card className="overflow-hidden">
    <CardContent className="pt-6">
      <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-blue-600">
        {Icon && <Icon className="w-6 h-6 text-blue-600 shrink-0" />}
        <h2 className="text-xl font-bold text-blue-900">{title}</h2>
      </div>
      {children}
    </CardContent>
  </Card>
);

const Stat = ({ value, label, color = "blue" }: { value: string; label: string; color?: string }) => {
  const bg: Record<string, string> = {
    blue: "from-blue-500 to-blue-700",
    green: "from-emerald-500 to-emerald-700",
    purple: "from-purple-500 to-purple-700",
    orange: "from-orange-500 to-orange-700",
    red: "from-red-500 to-red-700",
  };
  return (
    <div className={`bg-gradient-to-br ${bg[color]} rounded-xl p-5 text-white text-center shadow-lg`}>
      <div className="text-3xl font-black mb-1">{value}</div>
      <div className="text-sm opacity-90 leading-tight">{label}</div>
    </div>
  );
};

const Track = ({ title, owner, lines, target, budget, kpi, color, icon: Icon }: {
  title: string; owner: string; lines: string[]; target: string; budget: string; kpi: string; color: string; icon: any;
}) => {
  const c: Record<string, { bg: string; border: string; badge: string; icon: string }> = {
    blue:   { bg: "bg-blue-50",    border: "border-blue-200",    badge: "bg-blue-600",    icon: "text-blue-600" },
    green:  { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-600", icon: "text-emerald-600" },
    purple: { bg: "bg-purple-50",  border: "border-purple-200",  badge: "bg-purple-600",  icon: "text-purple-600" },
  };
  const s = c[color];
  return (
    <Card className={`${s.bg} ${s.border} border-2 hover:shadow-lg transition-shadow`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Icon className={`w-5 h-5 ${s.icon}`} />
            <CardTitle className="text-base text-gray-900 leading-tight">{title}</CardTitle>
          </div>
          <Badge className={`${s.badge} text-white text-xs shrink-0`}>{budget}</Badge>
        </div>
        <p className="text-xs text-gray-500 mr-7">{owner}</p>
      </CardHeader>
      <CardContent className="space-y-1.5 text-sm">
        {lines.map((l, i) => (
          <p key={i} className="text-gray-700 leading-snug">{l}</p>
        ))}
        <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
          <span className="font-semibold text-gray-700">{target}</span>
          <span className="text-xs text-gray-500">{kpi}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const TL = ({ month, title, desc }: { month: string; title: string; desc: string }) => (
  <div className="flex gap-4 items-start">
    <div className="bg-blue-600 text-white rounded-lg px-3 py-1 text-sm font-bold whitespace-nowrap min-w-[90px] text-center shrink-0">{month}</div>
    <div><div className="font-bold text-gray-900">{title}</div><div className="text-sm text-gray-600">{desc}</div></div>
  </div>
);

/* ───── page ───── */
export default function ProjectFile() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 print:bg-white">

      {/* ── HEADER ── */}
      <header className="relative text-white overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-950 via-blue-900 to-indigo-950" />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950/80 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 py-12">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-xs font-medium tracking-wide">02.2026 | מהלך תעסוקה ועסקים בעידן הבינה המלאכותית</span>
            </div>
            <span className="text-blue-400/70 text-xs border border-blue-400/30 rounded-full px-3 py-1">תיק התנסות | לדיון בוועדת ההיגוי</span>
          </div>

          <div className="mb-8">
            <div className="flex items-end gap-4 mb-3">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none">המקפצה</h1>
              <div className="h-1 w-16 bg-gradient-to-l from-amber-400 to-amber-500 rounded-full mb-3" />
            </div>
            <p className="text-xl md:text-2xl text-blue-200 font-light">אסטרטגיה לאומית לתעסוקה בעידן הבינה המלאכותית</p>
            <p className="text-sm text-blue-400/60 mt-2">צוות "אוכלוסיות בסיכון" | פורום "תעסוקה בעולם החדש"</p>
          </div>

          {/* למה דווקא עכשיו */}
          <div className="grid md:grid-cols-4 gap-3">
            <div className="md:col-span-3 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-5">
              <h3 className="font-bold text-base mb-3 flex items-center gap-2 text-blue-200">
                <Zap className="w-4 h-4 text-amber-400" /> למה דווקא עכשיו?
              </h3>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-white/[0.06] rounded-lg p-3 border border-white/5">
                  <Zap className="w-4 h-4 text-amber-400 mb-1" />
                  <span>האצה בהטמעת AI במשק</span>
                </div>
                <div className="bg-white/[0.06] rounded-lg p-3 border border-white/5">
                  <Heart className="w-4 h-4 text-red-400 mb-1" />
                  <span>מחסור חריף בכוח אדם במערכות החברתיות</span>
                </div>
                <div className="bg-white/[0.06] rounded-lg p-3 border border-white/5">
                  <Target className="w-4 h-4 text-green-400 mb-1" />
                  <span>חלון הזדמנות לבחינת מודל מדיניות חדש</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-5 flex flex-col justify-center text-center">
              <div className="text-xs text-amber-300/80 mb-1">שורה תחתונה</div>
              <div className="text-3xl font-black text-amber-300">1:2.5</div>
              <div className="text-xs text-amber-200/70 mt-1">ROI — כל שקל מחזיר 2.5 בשנה הראשונה</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">

        {/* ── KEY STATS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat value="700K" label="נשים בסיכון להחלפה עקב AI" color="red" />
          <Stat value="60-70%" label="זמן עו״ס מבוזבז על בירוקרטיה" color="orange" />
          <Stat value="54%" label="תעסוקת גברים חרדים — קפוא" color="purple" />
          <Stat value="10M ₪" label="תקציב פיילוט — 430 משתתפים" color="green" />
        </div>

        {/* ── 3. SUMMARY ── */}
        <Section icon={BookOpen} title="תיאור תמציתי של הפרויקט">
          <p className="text-gray-700 leading-relaxed">
            המדינה מממנת כיום בו-זמנית קצבאות פסיביות לעובדים שנפלטו, ושירותים ציבוריים הסובלים ממחסור בכוח אדם.
            "המקפצה" הוא פיילוט אקטיבי הממיר הוצאה פיסקלית לנכס מערכתי, דרך שלושה מסלולים ממוקדים
            (ארנק דיגיטלי, מענק עבודה מועדפת ציבורית, ובוטקאמפ AI "עוקף ליבה") הפועלים תחת מנהלת לאומית אחת.
            שלושת המסלולים בוחנים אותה משוואה כלכלית — המרת תשלומי העברה להשקעה תעסוקתית — בשלוש אוכלוסיות שונות,
            כדי לאפשר לממשלה לבחור מודל הרחבה לאחר הפיילוט.
            הפרויקט יפעל עבור 430 משתתפים בתקציב כולל של 10 מיליון ש"ח למשך שנת הרצה, לשם הוכחת כדאיות לפני שינוי חקיקה.
          </p>
        </Section>

        {/* ── 4. BACKGROUND ── */}
        <Section icon={BarChart3} title="רקע — כשל השוק הכפול">
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              המשק הישראלי ניצב מול כשל שוק דואלי. מחד, שחיקה תעסוקתית מואצת עקב כניסת כלי AI:
              כ-700,000 נשים מועסקות כיום במקצועות אדמיניסטרציה ושירות המצויים בסיכון להחלפה.
              מאידך, המערכות הציבוריות (רווחה, חינוך ובריאות) סובלות מעומס מתמשך.
              הערכות מקצועיות מצביעות כי 60%-70% מזמנם של עובדים סוציאליים מוקדש למשימות אדמיניסטרטיביות
              במקום טיפול ישיר, מה שמוביל לשחיקה ולעלויות עתק. שיעור תעסוקת גברים חרדים קפוא על 54%, בשכר נמוך עקב חסמי השכלה ושפה.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="font-bold text-amber-900 mb-1">הפער המבני — "השטח המת":</p>
              <p className="text-amber-800 text-sm">
                פער מבני במדיניות התעסוקה מספק כיום שני מענים: דמי אבטלה פסיביים או הכשרות ארוכות טווח.
                בין השניים נוצר "שטח מת" של 1-4 חודשים לאחר הפיטורים, בו ההון האנושי נשחק
                והמדינה מייצרת הוצאה פיסקלית ללא יצירת ערך תעסוקתי.
              </p>
            </div>
            <p className="text-sm text-gray-500">
              <strong>מה חסר:</strong> מנגנון תעסוקתי פרואקטיבי לניהול תקופת המעבר באמצעות "תקציב צמיחה אישי",
              המאפשר למפוטרים לצרוך כלים טכנולוגיים ושירותי ליווי אקטיביים בזמן אמת.
            </p>
          </div>
        </Section>

        {/* ── 5. PROBLEM ── */}
        <Card className="border-r-4 border-r-red-500 bg-red-50/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-red-600" />
              <h2 className="text-xl font-bold text-red-900">הגדרת הבעיה</h2>
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
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="font-bold text-blue-900 mb-1">מסלול א — נשים בסיכון</div>
              <div className="text-sm text-gray-600">200 נשים שפוטרו לאחרונה ממקצועות אדמיניסטרציה ושירות בסיכון</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
              <div className="font-bold text-emerald-900 mb-1">מסלול ב — מקצועות במחסור</div>
              <div className="text-sm text-gray-600">200 נשים לשיבוץ כתומכות עו"ס, מתאמות קליניות וסייעות במערך הציבורי</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <div className="font-bold text-purple-900 mb-1">מסלול ג — LibAI חרדים</div>
              <div className="text-sm text-gray-600">30 גברים חרדים תושבי ירושלים — הכשרה טכנולוגית ממוקדת</div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            משתתפי מעטפת: פקידי השמה, מנהלי רווחה/בריאות, ומעסיקים כסוכני שינוי מרכזיים.
          </p>
        </Section>

        {/* ── 7. GOAL ── */}
        <Card className="border-r-4 border-r-blue-600 bg-blue-50/30">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-blue-900">מטרת הפרויקט</h2>
            </div>
            <p className="text-lg text-gray-800 font-medium">
              הוכחת היתכנות כלכלית ומערכתית למדיניות העברה אקטיבית המפנה משאבים ציבוריים להשקעה תעסוקתית,
              במטרה להגדיל את הפריון ולספק בסיס נתונים לתיקון מדיניות רוחבי.
            </p>
          </CardContent>
        </Card>

        {/* ── 11. THEORY OF CHANGE ── */}
        <Section icon={Lightbulb} title="תיאוריית השינוי — מדיניות העברה אקטיבית">
          <p className="text-gray-700 leading-relaxed mb-4">
            המדינה ממירה חלק מתשלומי ההעברה הפסיביים לתקציב צמיחה אישי המיועד להכשרה, השמה ושדרוג מקצועי,
            ללא פריצת מסגרת התקציב. השקעה זו מקצרת את משך האבטלה, מורידה את העומס הבירוקרטי מהמערכת הציבורית
            באמצעות "מכפילי כוח", ומנצלת טכנולוגיה (AI) כדי לגשר על פערי שפה וליבה במקום להוות איום תעסוקתי.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border text-center">
            <p className="text-sm text-gray-500 mb-2">שלושת המסלולים בוחנים אותה משוואה כלכלית בסביבות שונות:</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">תשלומי העברה</span>
              <ArrowDown className="w-4 h-4 text-gray-400 rotate-[-90deg]" />
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">השקעה תעסוקתית</span>
              <ArrowDown className="w-4 h-4 text-gray-400 rotate-[-90deg]" />
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">נתונים להרחבה לאומית</span>
            </div>
          </div>
        </Section>

        {/* ── 12. INTERVENTION MODEL ── */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-blue-900">מודל ההתערבות — תקציב כולל 10 מיליון ש"ח</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Track
              icon={Briefcase}
              title='מסלול א — זירת "המקפצה"'
              owner="באחריות שירות התעסוקה"
              lines={[
                "ארנק דיגיטלי ל-200 נשים שפוטרו",
                "צריכת כלי AI, הכשרות קצרות, והשמה לשוק הפרטי",
              ]}
              target="200 נשים"
              budget="3M ₪"
              kpi="60% שובצו בשכר ≥ קודם"
              color="blue"
            />
            <Track
              icon={Heart}
              title="מסלול ב — מענק עבודה מועדפת"
              owner="באחריות ביטוח לאומי"
              lines={[
                "מענק תוספתי (מלגה) לתוספת שכר 12-18 חודשים — לא חלופת גמלה",
                'שיבוץ כ"מכפילי כוח" להפחתת עומס מצוותים קליניים וסוציאליים',
              ]}
              target="200 נשים"
              budget="4.5M ₪"
              kpi="קיצור אבטלה 30% מול ביקורת"
              color="green"
            />
            <Track
              icon={GraduationCap}
              title="מסלול ג — LibAI חרדים"
              owner="באחריות משרד העבודה"
              lines={[
                'בוטקאמפ 6 חודשים — כלי AI כ"עוקף ליבה"',
                "התמחות מעשית (OJT) + פיתוח כלים ייעודיים",
              ]}
              target="30 גברים חרדים"
              budget="2M ₪"
              kpi="השמה בשכר 12-15K ₪"
              color="purple"
            />
          </div>
          <div className="text-center mt-3">
            <Badge variant="outline" className="text-gray-600 border-gray-400">
              + מנהלת פרויקט לאומית: 500K ₪ | סה"כ: 10 מיליון ₪
            </Badge>
          </div>
        </div>

        {/* ── 8. PARTNERS ── */}
        <Section icon={Building2} title="מיפוי שותפים">
          <div className="grid md:grid-cols-2 gap-2">
            {[
              { name: "שירות התעסוקה", role: 'מוביל מסלול א ("המקפצה" לשוק הפרטי)' },
              { name: "ביטוח לאומי", role: "מוביל מסלול ב, חיבור מנגנון תביעות ומימון מענקים" },
              { name: "משרד העבודה", role: "אחריות רגולטורית למסלול ג (שילוב המגזר החרדי)" },
              { name: "חשכ״ל — זירת האתגרים", role: "פרסום RFD, מסגרת משפטית ופלטפורמת Marketplace" },
              { name: "ג׳וינט-תבת", role: "ליווי מחקרי, מדידת אפקטיביות (RCT) ומימון Seed" },
            ].map((p, i) => (
              <div key={i} className="flex gap-2 items-start bg-gray-50 rounded p-3">
                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900 text-sm">{p.name}</span>
                  <span className="text-gray-500 text-sm"> — {p.role}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 9+10. TEAM ROLES ── */}
        <div className="grid md:grid-cols-2 gap-4">
          <Section icon={Users} title="תפקיד צוות הפיתוח">
            <p className="text-sm text-gray-700">
              ניהול אופרטיבי מלא: אפיון ארנק דיגיטלי (א), בניית מנגנון משפטי למענקים (ב),
              הפעלת בוטקאמפ AI (ג). תיאום בין משרדי ממשלה לספקים חיצוניים.
            </p>
          </Section>
          <Section icon={Building2} title="תפקיד פורום האקוסיסטם">
            <p className="text-sm text-gray-700">
              יצירת "שוק חופשי" מפוקח. מעסיקי עוגן מתחייבים לקלוט מתמחים (OJT),
              ספקי שירותים מתחרים במסגרת ה-Marketplace על מתן מענים ממוקדים למשתתפים.
            </p>
          </Section>
        </div>

        {/* ── 13. TIMELINE ── */}
        <Section icon={Clock} title="משך הפרויקט — אבני דרך">
          <div className="space-y-4">
            <TL month="חודש 1" title="התנעה מוסדית" desc="גיוס פרויקטור, אישור מסגרת תקציב, כינוס ועדת היגוי" />
            <TL month="חודשים 2-3" title="רכש ושותפויות" desc="פרסום RFD בזירת האתגרים, חתימת הסכמי קליטה מול משרדי ממשלה ומעסיקים" />
            <TL month="חודשים 4-5" title="גיוס והכשרה" desc="חלוקת ארנקים (א), שילוב OJT מיידי (ב), פתיחת בוטקאמפ חרדי (ג)" />
            <TL month="חודשים 6-18" title="הרצה ומדידה" desc="איסוף נתוני שכר, הגשת נתוני ROI לאגף התקציבים להמלצות חקיקה" />
          </div>
        </Section>

        {/* ── 14+15. VALUE + SUCCESS ── */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border-t-4 border-t-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-gray-900">הערך המוסף</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                איגוד שלושת המסלולים תחת מנהלת אחת מייצר אקוסיסטם נתונים רוחבי המוכיח את היתרון הכלכלי שבהתערבות אקטיבית.
                הפרויקט הופך טכנולוגיה משבשת מ"גורם מבדל" המאיים על עובדים חלשים,
                ל<strong>"גורם משווה" (Equalizer)</strong> המעצים את הפריון ומגשר על פערים מבניים.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900">תמונת הצלחה</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• מסלול א: קיצור אבטלה ב-20%-30%</li>
                <li>• מסלול ב: 60% שימרו/שיפרו שכר</li>
                <li>• מסלול ג: 80% הושמו בשכר 12-15K ₪</li>
                <li>• הצלחה = בסיס להרחבה ארצית מדורגת</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* ── 17. METRICS TABLE ── */}
        <Section icon={BarChart3} title="טבלת מדדים">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="p-2 text-right border border-blue-700">סוג</th>
                  <th className="p-2 text-right border border-blue-700">תיאור המדד</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "תפוקה", desc: "הקמת הזירה וגיוס מינימום 20 ספקי שירות למסלול א", bg: "bg-blue-50" },
                  { type: "תפוקה", desc: "שיעור מימוש ארנק דיגיטלי (יעד: 75% מהמשתתפות במסלול א)", bg: "bg-blue-50" },
                  { type: "תפוקה", desc: "שיעור סיום בוטקאמפ של משתתפי מסלול ג", bg: "bg-blue-50" },
                  { type: "תפוקה", desc: 'כמות השמות "מכפילי כוח" (מסלול ב) במערכות הציבוריות', bg: "bg-blue-50" },
                  { type: "ביניים", desc: "שרידות בהתמחות: 90% מבוגרי מסלול ג צלחו 6 חודשי OJT", bg: "bg-amber-50" },
                  { type: "ביניים", desc: "הפחתת עומס אדמיניסטרטיבי של 25%+ מהצוותים הקליניים (מסלול ב)", bg: "bg-amber-50" },
                  { type: "ביניים", desc: "ציון שביעות רצון מעסיקים מתפוקת משתתפי הפיילוט (יעד: 4/5)", bg: "bg-amber-50" },
                  { type: "סופית", desc: "ירידה של 20%-30% בימי האבטלה במסלול א ביחס לקבוצת ביקורת", bg: "bg-green-50" },
                  { type: "סופית", desc: "שימור/שיפור שכר עבור 60% ממשתתפות מסלולים א וב", bg: "bg-green-50" },
                  { type: "סופית", desc: "השמת בוגרי מסלול ג בשכר ברוטו ממוצע של 10,500 ש\"ח ומעלה", bg: "bg-green-50" },
                  { type: "סופית", desc: "תשואה מערכתית (ROI) של 1:2.5 למשק, וצמצום עלויות עקיפות", bg: "bg-green-50" },
                ].map((row, i) => (
                  <tr key={i} className={row.bg}>
                    <td className="p-2 border border-gray-200 font-semibold whitespace-nowrap">{row.type}</td>
                    <td className="p-2 border border-gray-200">{row.desc}</td>
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
        <Card className="bg-gradient-to-l from-blue-900 to-indigo-900 text-white border-0 shadow-2xl">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-2xl font-black mb-6 text-center">החלטות נדרשות מוועדת ההיגוי</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
                <div className="text-3xl font-black mb-2">1</div>
                <div className="font-bold mb-1">אישור מדיניות העברה אקטיבית</div>
                <div className="text-sm text-blue-200">אישור מסגרת שלושת המסלולים תחת מנהלת לאומית אחת כפיילוט לבחינת שינוי מדיניות</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
                <div className="text-3xl font-black mb-2">2</div>
                <div className="font-bold mb-1">מינוי צוות</div>
                <div className="text-sm text-blue-200">בחירת פרויקטור לאומי וצוות היגוי בין-משרדי</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
                <div className="text-3xl font-black mb-2">3</div>
                <div className="font-bold mb-1">אישור תקציבי</div>
                <div className="text-sm text-blue-200">מסגרת של 10 מיליון ש"ח להתנעת הפיילוט, פיתוח הפלטפורמה, ומימון ההכשרות והמענקים</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 pb-8">
          פורום "תעסוקה בעולם החדש" | ועדת "אוכלוסיות בסיכון" | פברואר 2026
        </div>
      </main>
    </div>
  );
}
