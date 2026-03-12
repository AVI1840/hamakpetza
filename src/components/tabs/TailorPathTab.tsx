import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const budgetData = [
  { name: 'פיתוח טכנולוגי', value: 350000, pct: '35%' },
  { name: 'הפעלה ושטח', value: 280000, pct: '28%' },
  { name: 'מחקר והערכה', value: 150000, pct: '15%' },
  { name: 'ניהול פרויקט', value: 120000, pct: '12%' },
  { name: 'חירום ובלתי צפוי', value: 99578, pct: '10%' },
];

const PIE_COLORS = ['#0368b0', '#266794', '#e8a020', '#1a7a4e', '#6b7a8d'];

const adaptations = [
  { title: 'בוט וואטסאפ לקשישים', desc: 'ממשק שיחה פשוט בעברית לגילאי 65+' },
  { title: 'שוק שירותים מקומי', desc: 'חיבור בין זכאים לספקי שירות באזורם' },
  { title: 'מיצוי זכויות אוטומטי', desc: 'זיהוי זכויות שלא מומשו על בסיס פרופיל' },
  { title: 'ליווי מתאמת סיעוד', desc: 'כלי עזר דיגיטלי למתאמות בשטח' },
  { title: 'דשבורד ניהולי', desc: 'מעקב אחר ביצועים ותוצאות בזמן אמת' },
];

const timeline = [
  { phase: 'חודש 1-2', desc: 'פיתוח MVP + גיוס שטח', color: '#0368b0' },
  { phase: 'חודש 3-4', desc: 'פיילוט 250 אזרחים', color: '#266794' },
  { phase: 'חודש 5-6', desc: 'הרחבה ל-500 + הערכה', color: '#e8a020' },
  { phase: 'חודש 7', desc: 'דוח סיכום + המלצות להרחבה', color: '#1a7a4e' },
];

export default function TailorPathTab() {
  return (
    <div className="space-y-8">
      {/* Status Banner */}
      <div className="bg-success/10 border-2 border-success rounded-xl p-4 text-center">
        <p className="text-lg font-bold text-success">✅ מאושר ומתוקצב | 999,578 ₪ | 80% קרנות ביל״א | פיילוט 6 חודשים</p>
      </div>

      {/* Budget PieChart */}
      <div className="btl-card">
        <h2 className="text-xl font-bold mb-4">פירוט תקציב</h2>
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie data={budgetData} cx="50%" cy="50%" outerRadius={110} dataKey="value" label={({ name, pct }) => `${name} (${pct})`} labelLine>
              {budgetData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
            </Pie>
            <Tooltip formatter={(v: number) => `${v.toLocaleString()} ₪`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 5 Adaptations */}
      <div>
        <h2 className="text-xl font-bold mb-4">5 התאמות (ללא תקציב נוסף)</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {adaptations.map((a, i) => (
            <div key={i} className="btl-card">
              <h3 className="font-bold text-base mb-1">{a.title}</h3>
              <p className="text-sm text-muted">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="btl-card">
        <h2 className="text-xl font-bold mb-4">לוח זמנים ליישום</h2>
        <div className="flex flex-col md:flex-row gap-3">
          {timeline.map((t, i) => (
            <div key={i} className="flex-1 rounded-lg p-4 text-primary-foreground" style={{ backgroundColor: t.color }}>
              <p className="font-bold text-sm">{t.phase}</p>
              <p className="text-sm opacity-90">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div>
        <h2 className="text-xl font-bold mb-4">אפשרויות שותפות</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="btl-card">
            <h3 className="font-bold">משרד העבודה</h3>
            <p className="text-sm text-muted">שותף יישום ראשי — תשתית מרכזי יום</p>
          </div>
          <div className="btl-card">
            <h3 className="font-bold">רשות הצמיחה</h3>
            <p className="text-sm text-muted">שותף חלופי — מיקוד בפריפריה</p>
          </div>
        </div>
      </div>
    </div>
  );
}
