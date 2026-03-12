import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const pilots = [
  {
    name: 'TailorPath — מרכזי יום ירושלים',
    status: '🟢 בהקמה', statusClass: 'btl-badge-success',
    population: 'קשישים 65+, אוכלוסייה חרדית',
    target: '150 משתתפים', location: '3 מרכזי יום בירושלים',
    timeline: 'אפריל — ספטמבר 2026', budget: '400,000 ₪', progress: 25,
  },
  {
    name: 'הכשרה דיגיטלית — נצרת',
    status: '🟡 בתכנון', statusClass: 'btl-badge-warning',
    population: 'נשים ערביות 25-45',
    target: '80 משתתפות', location: 'מרכז קהילתי נצרת',
    timeline: 'יוני — דצמבר 2026', budget: '250,000 ₪', progress: 10,
  },
  {
    name: 'תמריצי מעסיקים — תל אביב',
    status: '🟡 בתכנון', statusClass: 'btl-badge-warning',
    population: 'אנשים עם מוגבלות',
    target: '30 מעסיקים, 100 עובדים', location: '',
    timeline: 'Q3 2026', budget: '180,000 ₪', progress: 5,
  },
  {
    name: 'AI לשיקום — באר שבע',
    status: '⚪ רעיון', statusClass: 'btl-badge-neutral',
    population: 'נכים + קשישים בפריפריה',
    target: '200 משתתפים', location: '',
    timeline: '2027', budget: 'בהגדרה', progress: 0,
  },
];

const progressData = [
  { name: 'ירושלים', planning: 15, execution: 10, completion: 0 },
  { name: 'נצרת', planning: 10, execution: 0, completion: 0 },
  { name: 'תל אביב', planning: 5, execution: 0, completion: 0 },
  { name: 'באר שבע', planning: 0, execution: 0, completion: 0 },
];

export default function PilotsTab() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">פיילוטים פעילים</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {pilots.map((p) => (
          <div key={p.name} className="btl-card space-y-3">
            <h3 className="font-bold text-lg">{p.name}</h3>
            <span className={p.statusClass}>{p.status}</span>
            <div className="text-sm space-y-1 mt-2">
              <p><strong>אוכלוסייה:</strong> {p.population}</p>
              <p><strong>יעד:</strong> {p.target}</p>
              {p.location && <p><strong>מיקום:</strong> {p.location}</p>}
              <p><strong>לוח זמנים:</strong> {p.timeline}</p>
              <p><strong>תקציב:</strong> {p.budget}</p>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>התקדמות</span>
                <span>{p.progress}%</span>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-2.5">
                <div className="bg-secondary rounded-full h-2.5 transition-all" style={{ width: `${p.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="btl-card">
        <h2 className="text-xl font-bold mb-4">סטטוס כולל — פיילוטים</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(v) => `${v}%`} />
            <Tooltip formatter={(v: number) => `${v}%`} />
            <Legend />
            <Bar dataKey="planning" name="תכנון" fill="#e8a020" stackId="a" />
            <Bar dataKey="execution" name="ביצוע" fill="#0368b0" stackId="a" />
            <Bar dataKey="completion" name="השלמה" fill="#1a7a4e" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
