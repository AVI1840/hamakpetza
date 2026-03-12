import { useState } from 'react';

const categories = ['שיפור ממשק', 'תוכן חסר', 'באג', 'הצעה כללית'];

export default function FeedbackModal() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!text.trim()) return;
    const feedback = { category, text, date: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem('hamakpetza-feedback') || '[]');
    existing.push(feedback);
    localStorage.setItem('hamakpetza-feedback', JSON.stringify(existing));
    setSubmitted(true);
    setTimeout(() => { setOpen(false); setSubmitted(false); setText(''); setCategory(''); }, 1500);
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
          <div className="bg-card rounded-xl shadow-xl p-6 w-full max-w-md mx-4 space-y-4" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="טופס משוב">
            <h2 className="text-xl font-bold">שליחת משוב</h2>
            {submitted ? (
              <p className="text-success font-semibold text-center py-8">✅ תודה! המשוב נשלח.</p>
            ) : (
              <>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${category === c ? 'bg-secondary text-secondary-foreground border-secondary' : 'border-border'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="כתבו את המשוב שלכם..."
                  className="w-full border rounded-lg p-3 text-sm min-h-[100px] bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  dir="rtl"
                />
                <div className="flex gap-3 justify-end">
                  <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg text-sm border hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">ביטול</button>
                  <button onClick={handleSubmit} className="btl-btn text-sm" disabled={!text.trim()}>שליחה</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
