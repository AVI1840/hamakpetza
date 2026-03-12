import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer, Cell } from 'recharts';

const gapData = [
  { name: 'חרדים', value: 48 },
  { name: 'ערבים', value: 35 },
  { name: 'זקנים', value: 62 },
  { name: 'מוגבלות', value: 55 },
];

const populations = [
  { icon: '👤', name: 'חרדים', size: '180,000 בגיל העבודה', challenge: 'מיומנויות דיגיטליות נמוכות', gap: 'פער תעסוקה: 48%' },
  { icon: '👤', name: 'חברה ערבית', size: '120,000 נשים', challenge: 'חסמי תחבורה ושפה', gap: 'פער תעסוקה: 35%' },
  { icon: '👤', name: 'זקנים (60+)', size: '80,000 מחפשי עבודה', challenge: 'אפליית גיל, מיומנויות', gap: 'פער תעסוקה: 62%' },
  { icon: '👤', name: 'אנשים עם מוגבלות', size: '45,000 מחפשי עבודה', challenge: 'נגישות, התאמות', gap: 'פער תעסוקה: 55%' },
];

const COLORS = ['#0368b0', '#266794', '#e8a020', '#1a7a4e'];

export default function StrategicOverview() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">400,000+ אזרחים בסיכון תעסוקתי</h1>
        <p className="text-lg text-muted mb-5">חרדים • חברה ערבית • זקנים • אנשים עם מוגבלות</p>
        <span className="inline-block bg-accent/15 text-accent-foreground font-bold px-5 py-2 rounded-full text-base border-2 border-accent">
          תקציב מאושר: 999,578 ₪
        </span>
      </div>

      {/* 3 Track Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* הכשרה */}
        <div className="btl-card space-y-3">
          <div className="flex items-center gap-2 text-xl font-bold"><span>🎓</span> הכשרה</div>
          <span className="btl-badge-warning">🟡 בתכנון</span>
          <p className="text-sm text-muted">קורסי AI ומיומנויות דיגיטליות לאוכלוסיות פגיעות</p>
          <div className="text-sm space-y-1">
            <p><strong>יעד:</strong> 2,000 משתתפים בשנה הראשונה</p>
            <p><strong>שותפים:</strong> משרד העבודה, רשות החדשנות</p>
            <p><strong>תקציב:</strong> בהגדרה</p>
          </div>
        </div>

        {/* TailorPath */}
        <div className="btl-card-gold space-y-3">
          <div className="flex items-center gap-2 text-xl font-bold"><span>🤝</span> ליווי — TailorPath</div>
          <span className="btl-badge-success">🟢 מאושר ומתוקצב ✅</span>
          <p className="text-sm text-muted">עוזר חכם בוואטסאפ לקשישים במרכזי יום + שוק שירותים + מיצוי זכויות</p>
          <div className="text-sm space-y-1">
            <p><strong>תקציב:</strong> 999,578 ₪ — 80% קרנות ביל״א</p>
            <p><strong>יעד:</strong> 500 אזרחים בפיילוט 6 חודשים</p>
          </div>
        </div>

        {/* תמריצים */}
        <div className="btl-card space-y-3">
          <div className="flex items-center gap-2 text-xl font-bold"><span>💰</span> תמריצים</div>
          <span className="btl-badge-warning">🟡 בתכנון</span>
          <p className="text-sm text-muted">מנגנוני תמריץ למעסיקים ולעובדים מאוכלוסיות בסיכון</p>
          <div className="text-sm space-y-1">
            <p><strong>יעד:</strong> 50 מעסיקים בפיילוט</p>
            <p><strong>שותפים:</strong> משרד הכלכלה, התאחדות התעשיינים</p>
          </div>
        </div>
      </div>

      {/* Population Cards */}
      <div>
        <h2 className="text-2xl font-bold mb-4">אוכלוסיות יעד</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {populations.map((p) => (
            <div key={p.name} className="btl-card flex gap-4 items-start">
              <span className="text-3xl">{p.icon}</span>
              <div>
                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="text-sm text-muted">{p.size}</p>
                <p className="text-sm mt-1">{p.challenge}</p>
                <p className="text-sm font-semibold text-secondary mt-1">{p.gap}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gap Chart */}
      <div className="btl-card">
        <h2 className="text-xl font-bold mb-4">פערי תעסוקה לפי אוכלוסייה</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={gapData} layout="vertical" margin={{ right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" domain={[0, 70]} tickFormatter={(v) => `${v}%`} />
            <YAxis type="category" dataKey="name" width={80} tick={{ fontSize: 14 }} />
            <Tooltip formatter={(v: number) => `${v}%`} />
            <ReferenceLine x={15} stroke="#c0392b" strokeDasharray="4 4" label={{ value: 'ממוצע ארצי 15%', position: 'top', fontSize: 12 }} />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={32}>
              {gapData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
