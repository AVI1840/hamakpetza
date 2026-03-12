import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const stats = [
  { value: '48%', label: 'שיעור אי-תעסוקה בקרב חרדים', source: 'בנק ישראל, 2025' },
  { value: '35%', label: 'פער תעסוקה נשים ערביות', source: 'למ״ס, 2025' },
  { value: '62%', label: 'קשישים 60+ מחוץ לשוק העבודה', source: 'מרכז טאוב, 2025' },
];

const research = [
  { title: 'מחקר בנק ישראל — AI ושוק העבודה', summary: 'AI צפוי להשפיע על 30% מהמשרות בישראל. אוכלוסיות מוחלשות בסיכון גבוה יותר.', date: 'ינואר 2026' },
  { title: 'דוח OECD — תעסוקה מכלילה', summary: 'ישראל במקום 28 מתוך 38 במדד תעסוקה מכלילה. פער משמעותי בפריפריה.', date: '2025' },
  { title: 'מרכז טאוב — בינה ופערי שכר', summary: 'פער השכר בין עובדים עם מיומנויות דיגיטליות לללא — 40%.', date: 'פברואר 2026' },
  { title: 'המצפן החברתי — נייר עמדה', summary: 'אסטרטגיה לאומית לתעסוקת אוכלוסיות בסיכון בעידן AI.', date: '2025' },
];

const trendData = [
  { year: '2021', haredim: 40, arab: 28, elderly: 55, disabled: 48 },
  { year: '2022', haredim: 42, arab: 30, elderly: 57, disabled: 50 },
  { year: '2023', haredim: 44, arab: 31, elderly: 58, disabled: 51 },
  { year: '2024', haredim: 45, arab: 32, elderly: 59, disabled: 53 },
  { year: '2025', haredim: 47, arab: 34, elderly: 61, disabled: 54 },
  { year: '2026', haredim: 48, arab: 35, elderly: 62, disabled: 55 },
];

const intlData = [
  { name: 'הולנד', value: 78 },
  { name: 'דנמרק', value: 75 },
  { name: 'גרמניה', value: 72 },
  { name: 'OECD ממוצע', value: 68 },
  { name: 'ישראל', value: 58 },
  { name: 'יעד', value: 70 },
];

const INTL_COLORS = ['#0368b0', '#0368b0', '#0368b0', '#6b7a8d', '#c0392b', '#1a7a4e'];

export default function ResearchTab() {
  return (
    <div className="space-y-8">
      {/* Key Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="btl-card text-center">
            <p className="text-4xl font-extrabold text-secondary">{s.value}</p>
            <p className="font-semibold mt-1">{s.label}</p>
            <p className="text-xs text-muted mt-1">מקור: {s.source}</p>
          </div>
        ))}
      </div>

      {/* Research Summaries */}
      <div>
        <h2 className="text-xl font-bold mb-4">סקירות מחקר</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {research.map((r) => (
            <div key={r.title} className="btl-card">
              <h3 className="font-bold">{r.title}</h3>
              <p className="text-sm text-muted mt-1">{r.summary}</p>
              <p className="text-xs text-muted mt-2">{r.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="btl-card">
          <h2 className="text-lg font-bold mb-4">מגמת תעסוקה לפי אוכלוסייה (5 שנים)</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Legend />
              <Line type="monotone" dataKey="haredim" name="חרדים" stroke="#0368b0" strokeWidth={2} />
              <Line type="monotone" dataKey="arab" name="ערבים" stroke="#266794" strokeWidth={2} />
              <Line type="monotone" dataKey="elderly" name="זקנים" stroke="#e8a020" strokeWidth={2} />
              <Line type="monotone" dataKey="disabled" name="מוגבלות" stroke="#1a7a4e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="btl-card">
          <h2 className="text-lg font-bold mb-4">השוואה בינלאומית — תעסוקה מכלילה</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={intlData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Bar dataKey="value" name="שיעור" radius={[6, 6, 0, 0]}>
                {intlData.map((_, i) => <Cell key={i} fill={INTL_COLORS[i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
