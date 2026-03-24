import { useState } from 'react';
import StrategicOverview from '@/components/tabs/StrategicOverview';
import TailorPathTab from '@/components/tabs/TailorPathTab';
import PilotsTab from '@/components/tabs/PilotsTab';
import SteeringCommittee from '@/components/tabs/SteeringCommittee';
import ResearchTab from '@/components/tabs/ResearchTab';
import FeedbackModal from '@/components/FeedbackModal';

const tabs = [
  { id: 'overview', label: 'סקירה אסטרטגית' },
  { id: 'tailorpath', label: 'TailorPath' },
  { id: 'pilots', label: 'פיילוטים' },
  { id: 'steering', label: 'ועדת היגוי' },
  { id: 'research', label: 'מחקר ונתונים' },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen flex flex-col bg-background font-heebo" dir="rtl">
      {/* Skip Nav */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 bg-secondary text-secondary-foreground px-4 py-2 rounded z-50">
        דלג לתוכן
      </a>

      {/* Header */}
      <header className="bg-primary text-primary-foreground py-5 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center text-lg font-bold flex-shrink-0" aria-hidden="true">
              ב״ל
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold">המקפצה — כיפת ברזל תעסוקתית</h1>
              <p className="text-sm opacity-80">אסטרטגיה לאומית לתעסוקת אוכלוסיות בסיכון בעידן הבינה המלאכותית</p>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-card border-b sticky top-0 z-40" aria-label="ניווט ראשי">
        <div className="container max-w-6xl mx-auto">
          <div className="flex overflow-x-auto gap-0 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset ${
                  activeTab === tab.id
                    ? 'border-secondary text-secondary'
                    : 'border-transparent text-muted hover:text-foreground hover:border-muted/30'
                }`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="flex-1 container max-w-6xl mx-auto py-8 px-4">
        <div role="tabpanel" id={`panel-${activeTab}`}>
          {activeTab === 'overview' && <StrategicOverview />}
          {activeTab === 'tailorpath' && <TailorPathTab />}
          {activeTab === 'pilots' && <PilotsTab />}
          {activeTab === 'steering' && <SteeringCommittee />}
          {activeTab === 'research' && <ResearchTab />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/80 text-sm py-4 text-center">
        <p>אביעד יצחקי, מינהל גמלאות | ביטוח לאומי | v1.0 | מרץ 2026</p>
        <p className="text-xs opacity-50 mt-1">עדכון אחרון: 24.03.2026</p>
      </footer>

      <FeedbackModal />
    </div>
  );
};

export default Index;
