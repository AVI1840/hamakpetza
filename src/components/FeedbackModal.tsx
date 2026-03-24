import { useState, useEffect } from 'react';

const STORAGE_KEY = 'btl-feedback-hamakpetza';
const APP_NAME = 'המקפצה — תעסוקת אוכלוסיות';
const NAME_KEY = 'btl-feedback-user-name';
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwD8CMFoP5XoOwRLwK_OxMMOFKF8fS2CRpbJkNdOHjbnJIepkOLzlGrg3GQNGRqbwB6bA/exec';

const categories = ['🐛 באג', '💡 שיפור', '📊 נתונים', '🎨 עיצוב'];
type Severity = 'קריטי' | 'שיפור' | 'קטן';

interface FeedbackEntry {
  id: number; name: string; category: string; severity: string;
  text: string; timestamp: string; sent: boolean;
}

async function sendToSheet(entry: FeedbackEntry): Promise<boolean> {
  try {
    await fetch(SHEET_URL, {
      method: 'POST', mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        app: APP_NAME, name: entry.name || 'אנונימי',
        category: entry.category || 'כללי', severity: entry.severity || '—',
        text: entry.text, page: window.location.pathname,
      }),
    });
    return true;
  } catch { return false; }
}

export default function FeedbackModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(() => localStorage.getItem(NAME_KEY) || '');
  const [category, setCategory] = useState('');
  const [severity, setSeverity] = useState<Severity | ''>('');
  const [text, setText] = useState('');
  const [items, setItems] = useState<FeedbackEntry[]>([]);
  const [sending, setSending] = useState(false);
  const [lastStatus, setLastStatus] = useState<'' | 'ok' | 'offline'>('');

  useEffect(() => { const s = localStorage.getItem(STORAGE_KEY); if (s) setItems(JSON.parse(s)); }, [open]);

  const save = (u: FeedbackEntry[]) => { setItems(u); localStorage.setItem(STORAGE_KEY, JSON.stringify(u)); };

  const handleSubmit = async () => {
    if (!text.trim() || !name.trim()) return;
    localStorage.setItem(NAME_KEY, name.trim());
    setSending(true); setLastStatus('');
    const entry: FeedbackEntry = {
      id: Date.now(), name: name.trim(), category, severity,
      text: text.trim(), timestamp: new Date().toISOString(), sent: false,
    };
    const ok = await sendToSheet(entry);
    entry.sent = ok;
    save([entry, ...items]);
    setText(''); setCategory(''); setSeverity('');
    setSending(false); setLastStatus(ok ? 'ok' : 'offline');
    setTimeout(() => setLastStatus(''), 3000);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-secondary text-secondary-foreground rounded-full px-4 py-3 shadow-lg font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label="פתח טופס משוב"
      >
        💬 משוב
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40" onClick={() => setOpen(false)}>
          <div className="bg-card rounded-xl shadow-xl p-6 w-full max-w-md mx-4 space-y-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="טופס משוב" dir="rtl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">💬 משוב פיילוט</h2>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700 text-xl font-bold">×</button>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">שם</p>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="השם שלך"
                className="w-full border rounded-lg px-3 py-2 text-sm text-right" dir="rtl" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCategory(category === c ? '' : c)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${category === c ? 'bg-secondary text-secondary-foreground border-secondary' : 'border-border'}`}>
                  {c}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {(['קריטי', 'שיפור', 'קטן'] as Severity[]).map(s => (
                <button key={s} onClick={() => setSeverity(severity === s ? '' : s)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${severity === s ? 'bg-secondary text-secondary-foreground border-secondary' : 'border-border'}`}>
                  {s}
                </button>
              ))}
            </div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="כתבו את המשוב שלכם..."
              className="w-full border rounded-lg p-3 text-sm min-h-[100px] bg-background" dir="rtl" />
            <button onClick={handleSubmit} className="btl-btn text-sm w-full" disabled={!text.trim() || !name.trim() || sending}>
              {sending ? 'שולח...' : 'שלח משוב'}
            </button>
            {lastStatus === 'ok' && <p className="text-xs text-green-600 text-center">✅ נשלח בהצלחה</p>}
            {lastStatus === 'offline' && <p className="text-xs text-orange-500 text-center">📱 נשמר מקומית — יישלח כשיהיה חיבור</p>}
            {items.length > 0 && (
              <div className="border-t pt-3 space-y-2">
                <p className="text-xs text-gray-400">{items.length} משובים</p>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {items.map(fb => (
                    <div key={fb.id} className="bg-gray-50 rounded-lg p-3 text-right border border-gray-200">
                      <div className="flex items-center gap-2 mb-1 flex-wrap justify-end">
                        {fb.category && <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 font-medium">{fb.category}</span>}
                        {fb.sent ? <span className="text-xs text-green-600">✅</span> : <span className="text-xs text-orange-500">⏳</span>}
                        <span className="text-xs text-gray-400">{fb.name} · {new Date(fb.timestamp).toLocaleString('he-IL')}</span>
                      </div>
                      <p className="text-sm text-gray-800">{fb.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
