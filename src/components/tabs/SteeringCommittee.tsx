const agendaItems = [
  { num: 1, title: 'אישור תכנית הפעלה TailorPath', status: '📋 להצבעה' },
  { num: 2, title: 'דוח התקדמות פיילוט ירושלים', status: '📊 לדיון' },
  { num: 3, title: 'הצעת שיתוף פעולה עם משרד העבודה', status: '📋 להצבעה' },
  { num: 4, title: 'תקציב 2027 — הצעה ראשונית', status: '💬 לדיון ראשוני' },
];

const prevDecisions = [
  { date: '15.1.2026', decision: 'אישור תקציב TailorPath — 999,578 ₪', status: '✅ אושר' },
  { date: '15.1.2026', decision: 'הקמת צוות פיילוט ירושלים', status: '✅ אושר' },
  { date: '15.1.2026', decision: 'מינוי מנהל פרויקט', status: '✅ אושר' },
  { date: '10.11.2025', decision: 'אישור נייר עמדה אסטרטגי', status: '✅ אושר' },
  { date: '10.11.2025', decision: 'הגשת בקשה לקרנות ביל״א', status: '✅ אושר' },
];

const actionItems = [
  { task: 'הכנת RFP לפיתוח בוט', owner: 'אביעד', deadline: '1.4.2026', status: '🔄 בתהליך' },
  { task: 'גיוס מתאמות שטח', owner: 'דנה', deadline: '15.4.2026', status: '🟡 בהמתנה' },
  { task: 'חתימת הסכם עם מרכזי יום', owner: 'יוסי', deadline: '1.4.2026', status: '🔄 בתהליך' },
  { task: 'הכנת מצגת לוועדה', owner: 'אביעד', deadline: '10.4.2026', status: '⏳ טרם התחיל' },
];

export default function SteeringCommittee() {
  return (
    <div className="space-y-8">
      {/* Next Meeting */}
      <div className="btl-card-gold text-center">
        <p className="text-lg font-bold">ישיבה הבאה: 15 באפריל 2026 | 10:00 | חדר הנהלה</p>
      </div>

      {/* Agenda */}
      <div>
        <h2 className="text-xl font-bold mb-4">סדר יום</h2>
        <div className="space-y-3">
          {agendaItems.map((a) => (
            <div key={a.num} className="btl-card flex items-center gap-4">
              <span className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{a.num}</span>
              <div className="flex-1">
                <p className="font-semibold">{a.title}</p>
              </div>
              <span className="text-sm whitespace-nowrap">{a.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Decisions */}
      <div className="btl-card">
        <h2 className="text-xl font-bold mb-4">יומן החלטות</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" role="table">
            <thead>
              <tr className="border-b">
                <th className="text-right py-2 px-3 font-bold">תאריך</th>
                <th className="text-right py-2 px-3 font-bold">החלטה</th>
                <th className="text-right py-2 px-3 font-bold">סטטוס</th>
              </tr>
            </thead>
            <tbody>
              {prevDecisions.map((d, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2 px-3">{d.date}</td>
                  <td className="py-2 px-3">{d.decision}</td>
                  <td className="py-2 px-3">{d.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Items */}
      <div className="btl-card">
        <h2 className="text-xl font-bold mb-4">משימות פתוחות</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" role="table">
            <thead>
              <tr className="border-b">
                <th className="text-right py-2 px-3 font-bold">משימה</th>
                <th className="text-right py-2 px-3 font-bold">אחראי</th>
                <th className="text-right py-2 px-3 font-bold">דדליין</th>
                <th className="text-right py-2 px-3 font-bold">סטטוס</th>
              </tr>
            </thead>
            <tbody>
              {actionItems.map((a, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2 px-3">{a.task}</td>
                  <td className="py-2 px-3">{a.owner}</td>
                  <td className="py-2 px-3">{a.deadline}</td>
                  <td className="py-2 px-3">{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
