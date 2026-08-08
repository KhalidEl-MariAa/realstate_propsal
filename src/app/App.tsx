import {
  Award,
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Clock3,
  Coins,
  CreditCard,
  Database,
  FileQuestion,
  GraduationCap,
  LayoutDashboard,
  Monitor,
  NotebookTabs,
  PhoneCall,
  Settings,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  Video,
} from 'lucide-react';
import React from 'react';

type IconType = React.ComponentType<{ className?: string }>;

type Module = {
  title: string;
  description?: string;
  icon: IconType;
  items: string[];
  tone?: 'blue' | 'violet' | 'emerald' | 'amber';
};

const mobileModules: Module[] = [
  {
    title: 'تسجيل الدخول والحسابات',
    description: 'رحلة تسجيل بسيطة ومخصصة لكل طالب.',
    icon: UserRound,
    items: ['تسجيل حساب جديد وتسجيل الدخول.', 'استعادة كلمة المرور.', 'إعداد الملف الشخصي.', 'تحديد الجامعة والفرقة الدراسية.'],
  },
  {
    title: 'الصفحة الرئيسية',
    description: 'لوحة يومية تساعد الطالب على الاستمرار في المذاكرة.',
    icon: Sparkles,
    items: ['ترحيب مخصص بالطالب.', 'XP وCurrent Streak.', 'الأهداف اليومية وMotivation Quote.', 'متابعة آخر محتوى تم الوصول إليه.', 'عرض المواد والشابترز الحالية، والجلسات القادمة، ومستوى التقدم الدراسي.'],
    tone: 'violet',
  },
  {
    title: 'المواد الدراسية',
    description: 'تنظيم المحتوى: Subjects ← Chapters ← Educational Content.',
    icon: BookOpen,
    items: ['محاضرات ومواد دراسية وملفات PDF.', 'Videos / External Links عند الحاجة.', 'Question Bank وFlashcards.', 'Practice Questions وTimed Quizzes.', 'Bookmarked Questions مع متابعة نسبة الإنجاز لكل مادة وChapter.'],
    tone: 'emerald',
  },
  {
    title: 'بنك الأسئلة',
    description: 'تجربة اختبار واضحة ومناسبة للمراجعة والتقييم.',
    icon: FileQuestion,
    items: ['أسئلة MCQ واختيار الإجابة.', 'إظهار الإجابة الصحيحة وشرحها.', 'الانتقال بين الأسئلة وإضافتها للمفضلة.', 'Timer للاختبارات المحددة بوقت.', 'حساب الإجابات الصحيحة والخاطئة وعدد الأسئلة المحلولة.'],
    tone: 'amber',
  },
  {
    title: 'Flashcards',
    description: 'مراجعة سريعة ومرنة للمفاهيم المهمة.',
    icon: NotebookTabs,
    items: ['عرض السؤال والإجابة وتقليب الكارت.', 'الانتقال بين الكروت.', 'تحديد الكروت الصعبة.', 'متابعة مستوى التقدم.'],
    tone: 'violet',
  },
];

const planner: Module = {
  title: 'Planner',
  description: 'قسم مخصص لتنظيم مذاكرة الطالب ومتابعة أهدافه.',
  icon: CalendarDays,
  items: ['Study Calendar.', 'Daily Goals.', 'Exam Planner وإضافة مواعيد الامتحانات.', 'Countdown للامتحان.', 'Reminder Notifications.', 'Progress Checklist ومتابعة المهام اليومية.'],
  tone: 'emerald',
};

const mentorStudentItems = [
  'مشاهدة قائمة الـ Mentors والـ Profile الخاص بكل Mentor.',
  'معرفة التخصص والخبرة والتقييم وسعر الجلسة بالـ Coins.',
  'مشاهدة المواعيد المتاحة واختيار الموعد وحجز الجلسة.',
  'دفع قيمة الجلسة من رصيد الـ Coins.',
  'مشاهدة الجلسات القادمة والسابقة وتقييم الـ Mentor بعد انتهاء الجلسة.',
];

const mentorItems = [
  'إنشاء وتعديل الـ Profile الخاص به.',
  'تحديد المواعيد المتاحة واستقبال طلبات الحجز.',
  'قبول أو رفض الحجز وإضافة Zoom Meeting Link للجلسة.',
  'مشاهدة الجلسات القادمة والسابقة ومتابعة الأرباح.',
  'تقديم طلب سحب الأرباح.',
];

const dashboardModules: Module[] = [
  { title: 'المستخدمون', icon: UsersRound, items: ['إدارة الطلاب والـ Mentors.', 'إدارة الحسابات والصلاحيات.'] },
  { title: 'المواد والمحتوى', icon: BookOpen, items: ['إضافة وتعديل وحذف المواد والـ Chapters.', 'رفع ملفات PDF وإضافة المحاضرات والمواد.', 'إضافة الروابط والفيديوهات.'], tone: 'emerald' },
  { title: 'Question Bank وFlashcards', icon: FileQuestion, items: ['إضافة الأسئلة والاختيارات والإجابات الصحيحة والشرح.', 'تصنيف السؤال حسب المادة والـ Chapter.', 'إضافة وتعديل وحذف الـ Flashcards.'], tone: 'violet' },
  { title: 'Mentors وSessions', icon: Video, items: ['مراجعة واعتماد الـ Mentors وإدارة بياناتهم.', 'متابعة التقييمات والجلسات والحجوزات.', 'إدارة حالات الجلسات ومتابعة روابط Zoom.'], tone: 'amber' },
  { title: 'Coins والأرباح', icon: Coins, items: ['إنشاء باقات Coins وتحديد أسعارها وأسعار الجلسات.', 'متابعة معاملات الـ Coins.', 'متابعة أرباح الـ Mentors وطلبات السحب وقبولها أو رفضها.'], tone: 'emerald' },
  { title: 'الإشعارات والإحصائيات', icon: BarChart3, items: ['إرسال Notifications للمستخدمين.', 'عرض عدد المستخدمين ونشاط الطلاب والأسئلة المحلولة.', 'متابعة الجلسات والإيرادات ومعاملات الـ Coins.'], tone: 'violet' },
];

const overviewItems = [
  { icon: <GraduationCap className="w-5 h-5" />, label: 'تطبيق مخصص لطلاب الطب' },
  { icon: <Video className="w-5 h-5" />, label: 'جلسات فردية مع Mentors' },
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Web Dashboard متكامل' },
];

const userInsights = [
  { icon: <BarChart3 className="w-5 h-5" />, title: 'الإحصائيات', items: ['الأسئلة المحلولة والإجابات الصحيحة والخاطئة ونسبة النجاح.', 'XP وStreak وStudy Progress.', 'Daily / Weekly Progress وعدد الـ Chapters المكتملة.'] },
  { icon: <UserRound className="w-5 h-5" />, title: 'الملف الشخصي', items: ['الاسم، الصورة الشخصية، الجامعة والفرقة الدراسية.', 'XP وRank وStreak وQuestions Solved.', 'Study Hours وCompleted Chapters وCoins Balance وAchievements والإعدادات.'] },
  { icon: <Bell className="w-5 h-5" />, title: 'الإشعارات', items: ['تذكير بالجلسات والامتحانات والمذاكرة.', 'قبول أو رفض الحجز.', 'إضافة محتوى جديد، والإعلانات والتنبيهات العامة.'] },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">عرض سعر – تطبيق تعليمي لطلاب الطب</h1>
            <p className="mt-1 text-sm text-slate-600">تطبيق موبايل ومنصة إدارة متكاملة</p>
          </div>
          <img src="/logo.png" alt="Penta-k" className="h-14 shrink-0 object-contain" />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <section className="mb-8 rounded-2xl bg-gradient-to-l from-indigo-700 to-blue-700 p-8 text-white shadow-xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium"><GraduationCap className="w-4 h-4" /> عرض سعر</p>
          <h2 className="mb-3 text-3xl font-bold">نبذة عن المشروع</h2>
          <p className="max-w-5xl text-lg leading-8 text-blue-100">
            تنفيذ تطبيق تعليمي متكامل مخصص لطلاب كليات الطب، يهدف إلى توفير المواد الدراسية وبنوك الأسئلة وتنظيم عملية المذاكرة، بالإضافة إلى منصة للتواصل بين الطلاب والـ Mentors من خلال جلسات فردية مدفوعة.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {overviewItems.map((item) => <Highlight key={item.label} {...item} />)}
          </div>
        </section>

        <section className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <SectionHeading icon={<Monitor className="w-7 h-7 text-blue-600" />} title="مكونات المشروع" subtitle="سيتم تنفيذ المشروع على هيئة منصتين مترابطتين." />
          <div className="grid gap-5 md:grid-cols-2">
            <ScopeCard icon={GraduationCap} title="Mobile App" text="تطبيق للطلاب والـ Mentors، يضم التعلم والمراجعة وتنظيم الدراسة وحجز الجلسات." />
            <ScopeCard icon={LayoutDashboard} title="Web Dashboard" text="لوحة تحكم للإدارة الكاملة في محتوى التطبيق والمستخدمين والجلسات والمعاملات." tone="violet" />
          </div>
        </section>

        <section className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <SectionHeading icon={<GraduationCap className="w-7 h-7 text-blue-600" />} title="أولاً: تطبيق الموبايل" subtitle="تجربة تعليمية متكاملة للطلاب والـ Mentors." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {mobileModules.map((module) => <ModuleCard key={module.title} module={module} />)}
          </div>
        </section>

        <section className="mb-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-lg"><ModuleCard module={planner} expanded /></div>
          <div className="rounded-2xl bg-gradient-to-br from-violet-700 to-indigo-700 p-8 text-white shadow-xl">
            <div className="mb-5 flex items-center gap-3"><div className="rounded-xl bg-white/15 p-3"><Video className="w-7 h-7" /></div><div><h2 className="text-2xl font-bold">نظام 1-to-1 Sessions</h2><p className="text-sm text-violet-100">جلسات فردية بين الطالب والـ Mentor.</p></div></div>
            <div className="space-y-5">
              <SessionList title="ما يستطيع الطالب القيام به" items={mentorStudentItems} />
              <SessionList title="ما يستطيع الـ Mentor القيام به" items={mentorItems} />
            </div>
            <div className="mt-6 rounded-xl border border-violet-300/40 bg-white/10 p-4">
              <p className="font-bold">طريقة الجلسة</p>
              <p className="mt-1 text-sm leading-6 text-violet-100">لا يتم إنشاء نظام Video Call داخل التطبيق. يضيف الـ Mentor رابط Zoom الخاص به إلى الجلسة، ويظهر للطالب زر Join Meeting لفتح الرابط.</p>
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <SectionHeading icon={<Coins className="w-7 h-7 text-amber-600" />} title="نظام Coins" subtitle="نظام عملات داخل التطبيق لاستخدامها في الخدمات المدفوعة." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {['عرض رصيد الـ Coins.', 'شراء Coins وباقات Coins.', 'سجل عمليات الشراء والاستخدام.', 'خصم Coins عند حجز الجلسات.', 'إدارة أسعار الجلسات من خلال الـ Dashboard.'].map((item) => <FeatureTile key={item} icon={<CircleDollarSign className="w-5 h-5" />} text={item} color="amber" />)}
          </div>
        </section>

        <section className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <SectionHeading icon={<BarChart3 className="w-7 h-7 text-emerald-600" />} title="متابعة الطالب" subtitle="أدوات واضحة لمتابعة الإنجاز، وإدارة الملف الشخصي، والتنبيهات." />
          <div className="grid gap-5 md:grid-cols-3">
            {userInsights.map((section) => <InsightCard key={section.title} {...section} />)}
          </div>
        </section>

        <section className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <SectionHeading icon={<LayoutDashboard className="w-7 h-7 text-violet-600" />} title="ثامناً: Web Dashboard" subtitle="لوحة تحكم متكاملة لإدارة التطبيق والمحتوى." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dashboardModules.map((module) => <ModuleCard key={module.title} module={module} />)}
          </div>
        </section>

        <section className="mb-8 rounded-2xl bg-gradient-to-l from-emerald-600 to-teal-700 p-8 text-white shadow-xl">
          <div className="mb-6 flex items-center gap-3 border-b border-emerald-400 pb-4"><CreditCard className="w-7 h-7" /><div><h2 className="text-2xl font-bold">الأسعار</h2><p className="text-sm text-emerald-100">اختر الباقة المناسبة لاحتياجات الإطلاق.</p></div></div>
          <div className="mx-auto max-w-3xl">
            <PriceCard title="الباقة المتكاملة" price="60,000 جنيه" featured items={['تطوير تطبيق الموبايل.', 'نظام 1-to-1 Sessions.', 'نظام Coins.', 'نظام المواد والـ Chapters.', 'Question Bank وFlashcards وPlanner.', 'Statistics وNotifications وProfiles.', 'Web Dashboard للإدارة.', 'السيرفر والاستضافة لمدة سنة كاملة.', 'رفع ونشر التطبيق على Apple Store.', 'دعم فني مجاني لمدة سنة بعد تسليم المشروع.']} note="بعد السنة الأولى، يتم تجديد السيرفر والاستضافة والدعم بسعر يتم الاتفاق عليه وقت التجديد." />
          </div>
        </section>

        <section className="mb-8 rounded-2xl border-2 border-amber-200 bg-white p-8 shadow-lg">
          <SectionHeading icon={<ClipboardList className="w-7 h-7 text-amber-600" />} title="ملاحظات" />
          <ul className="space-y-3 text-slate-700">
            {[
              'السعر يشمل تنفيذ الـ Mobile App والـ Web Dashboard حسب المتطلبات الموضحة.',
              'جلسات 1-to-1 تعتمد على روابط Zoom التي يضيفها الـ Mentor، ولا تشمل بناء نظام مكالمات فيديو داخلي.',
              'أي خدمات أو Features إضافية غير مذكورة في عرض السعر يتم تقييمها وتسعيرها بشكل منفصل.',
              'محتوى المواد والأسئلة والـ Flashcards يتم توفيره من طرف العميل، بينما يتم توفير النظام اللازم لإدارته وعرضه داخل التطبيق.',
            ].map((note) => <li key={note} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 w-5 h-5 shrink-0 text-amber-600" /><span>{note}</span></li>)}
          </ul>
        </section>

        <footer className="rounded-2xl bg-white p-8 text-center shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">تواصل معنا</h2>
          <div className="flex flex-col items-center gap-3">
            <a className="font-semibold text-blue-600 hover:underline" href="https://penta-k.com">penta-k.com</a>
            <a className="inline-flex items-center gap-2 font-semibold text-emerald-600 hover:underline" dir="ltr" href="tel:+201061942646"><PhoneCall className="w-5 h-5" />+20 10 61942646</a>
          </div>
          <p className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-500">شكراً لثقتكم في <span className="font-bold text-blue-600">Penta-k</span></p>
        </footer>
      </main>
    </div>
  );
}

function SectionHeading({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4"><div className="rounded-xl bg-slate-50 p-3">{icon}</div><div><h2 className="text-2xl font-bold text-slate-900">{title}</h2>{subtitle && <p className="mt-0.5 text-sm text-slate-600">{subtitle}</p>}</div></div>;
}

function ModuleCard({ module, expanded = false }: { module: Module; expanded?: boolean }) {
  const Icon = module.icon;
  const tones = { blue: 'bg-blue-50 text-blue-600 border-blue-100', violet: 'bg-violet-50 text-violet-600 border-violet-100', emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100', amber: 'bg-amber-50 text-amber-600 border-amber-100' };
  return <article className={`rounded-xl border p-5 ${expanded ? 'h-full bg-slate-50' : 'bg-slate-50 border-slate-200'}`}>
    <div className="mb-4 flex items-center gap-3"><div className={`rounded-lg border p-3 ${tones[module.tone ?? 'blue']}`}><Icon className="w-5 h-5" /></div><div><h3 className="text-lg font-bold text-slate-900">{module.title}</h3>{module.description && <p className="mt-0.5 text-sm text-slate-600">{module.description}</p>}</div></div>
    <ul className="space-y-2.5 text-sm leading-6 text-slate-700">{module.items.map((item) => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-1 w-4 h-4 shrink-0 text-blue-600" /><span>{item}</span></li>)}</ul>
  </article>;
}

function ScopeCard({ icon: Icon, title, text, tone = 'blue' }: { icon: IconType; title: string; text: string; tone?: 'blue' | 'violet' }) {
  const colors = tone === 'violet' ? 'bg-violet-50 border-violet-100 text-violet-600' : 'bg-blue-50 border-blue-100 text-blue-600';
  return <article className="rounded-xl border border-slate-200 bg-slate-50 p-6"><div className={`mb-4 inline-flex rounded-xl border p-3 ${colors}`}><Icon className="w-6 h-6" /></div><h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3><p className="leading-7 text-slate-600">{text}</p></article>;
}

function Highlight({ icon, label }: { icon: React.ReactNode; label: string }) { return <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4 font-medium">{icon}<span>{label}</span></div>; }

function SessionList({ title, items }: { title: string; items: string[] }) { return <div><h3 className="mb-2 font-bold">{title}</h3><ul className="space-y-2 text-sm leading-6 text-violet-100">{items.map((item) => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-violet-200" /><span>{item}</span></li>)}</ul></div>; }

function FeatureTile({ icon, text, color }: { icon: React.ReactNode; text: string; color: 'amber' }) { return <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 p-4"><div className="mt-0.5 text-amber-600">{icon}</div><p className="text-sm leading-6 text-slate-700">{text}</p></div>; }

function InsightCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) { return <article className="rounded-xl border border-slate-200 bg-slate-50 p-5"><div className="mb-4 flex items-center gap-3 text-emerald-600">{icon}<h3 className="text-lg font-bold text-slate-900">{title}</h3></div><ul className="space-y-2 text-sm leading-6 text-slate-700">{items.map((item) => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" /><span>{item}</span></li>)}</ul></article>; }

function PriceCard({ title, price, items, note, featured = false }: { title: string; price: string; items: string[]; note: string; featured?: boolean }) { return <article className={`rounded-xl border p-6 ${featured ? 'border-emerald-200 bg-white/15' : 'border-white/20 bg-white/10'}`}><div className="mb-5 flex items-start justify-between gap-3"><div><h3 className="text-xl font-bold">{title}</h3>{featured && <span className="mt-2 inline-block rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-semibold text-emerald-50">تشمل الاستضافة والتشغيل</span>}</div><span className="text-xl font-bold whitespace-nowrap">{price}</span></div><ul className="space-y-2.5 text-sm text-emerald-50">{items.map((item) => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /><span>{item}</span></li>)}</ul><p className="mt-5 border-t border-white/20 pt-4 text-sm leading-6 text-emerald-100"><ShieldCheck className="ml-1 inline h-4 w-4" /> {note}</p></article>; }
