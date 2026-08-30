import type { ComponentType } from 'react';
import { Bot, Building2, Check, ClipboardList, Database, LayoutDashboard, ShieldCheck, Store, UtensilsCrossed } from 'lucide-react';

type IconType = ComponentType<{ className?: string }>;
type Feature = { title: string; description: string; icon: IconType };

const features: Feature[] = [
  { title: 'منصة متعددة المطاعم والفروع', description: 'إدارة عدد من المطاعم والفروع من منصة واحدة، مع عزل كامل لبيانات كل مطعم وصلاحيات مستقلة للمستخدمين.', icon: Building2 },
  { title: 'تشغيل المطعم اليومي', description: 'نقطة البيع POS، المنيو الإلكتروني، إدارة المطبخ، الطلبات والطاولات، مع ربط تشغيلي واضح بين الفروع.', icon: UtensilsCrossed },
  { title: 'الإدارة والرقابة', description: 'المخزون والمشتريات والوصفات وFood Cost والتقارير، مع سجل تدقيق وصلاحيات وأدوار لكل مستخدم.', icon: LayoutDashboard },
];

const platformItems = [
  'لوحة Super Admin لإدارة المطاعم والباقات والاستخدام.',
  'إدارة المطاعم والفروع والهوية البصرية لكل مطعم.',
  'POS ومنيو إلكتروني وشاشة مطبخ وإدارة الطاولات.',
  'المخزون والموردون والمشتريات والوصفات والهالك.',
  'المبيعات وFood Cost والتنبيهات والتقارير.',
  'المستخدمون والأدوار والصلاحيات وسجل العمليات.',
];

const aiUsage = [
  { restaurants: '10', branches: '30', requests: '30', cost: '~$16' },
  { restaurants: '50', branches: '150', requests: '150', cost: '~$81' },
  { restaurants: '100', branches: '300', requests: '300', cost: '~$162' },
  { restaurants: '500', branches: '1,500', requests: '1,500', cost: '~$810' },
  { restaurants: '1,000', branches: '3,000', requests: '3,000', cost: '~$1,620' },
];

const pricingOptions = [
  { title: 'مطعم واحد بدون AI', price: '280,000 جنيه', installment: '4 × 70,000 جنيه', badge: 'نسخة خاصة بعميل واحد', description: 'نظام كامل لإدارة مطعم واحد وفروعه، دون ربط أو وظائف الذكاء الاصطناعي.', details: ['إدارة الفروع ونقاط البيع والمنيو والمطبخ.', 'المخزون والمشتريات وFood Cost والتقارير.', 'لا يشمل ربط OpenAI أو رسوم استخدامها.'], tone: 'sky' },
  { title: 'عدة مطاعم + Super Admin بدون AI', price: '300,000 جنيه', installment: '4 × 75,000 جنيه', badge: 'منصة قابلة للتوزيع', description: 'منصة تُوزّع على عدة مطاعم، مع لوحة مركزية لإدارة العملاء والباقات، ولكن دون الذكاء الاصطناعي.', details: ['عزل بيانات مستقل لكل مطعم وفروعه.', 'لوحة Super Admin لإدارة المطاعم والاشتراكات.', 'لا يشمل ربط OpenAI أو رسوم استخدامها.'], tone: 'sky' },
  { title: 'مطعم واحد + AI', price: '300,000 جنيه', installment: '4 × 75,000 جنيه', badge: 'نسخة خاصة بعميل واحد', description: 'نظام كامل لإدارة مطعم واحد وفروعه مع ربط وظائف الذكاء الاصطناعي داخل المنصة.', details: ['إدارة الفروع ونقاط البيع والمنيو والمطبخ.', 'المخزون والمشتريات وFood Cost والتقارير.', 'يشمل الربط التقني مع OpenAI؛ ورسوم الاستخدام منفصلة.'], tone: 'violet' },
  { title: 'عدة مطاعم + Super Admin + AI', price: '320,000 جنيه', installment: '4 × 80,000 جنيه', badge: 'منصة قابلة للتوزيع', description: 'منصة متعددة المطاعم مع Super Admin وربط الذكاء الاصطناعي لدعم التحليلات والتنبيهات والتوصيات.', details: ['Multi-Tenant مع عزل كامل لبيانات كل مطعم.', 'لوحة Super Admin لإدارة المطاعم والباقات والاستخدام.', 'يشمل الربط التقني مع OpenAI؛ ورسوم الاستخدام منفصلة.'], tone: 'violet' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800" dir="rtl">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <img src="/logo.png" alt="Penta-k" className="h-10 w-auto object-contain" />
          <div className="text-left"><p className="text-xs font-semibold tracking-[0.12em] text-sky-700">عرض فني ومالي</p><p className="mt-1 text-sm text-slate-500">مشروع إدارة مطاعم بالكامل</p></div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white shadow-2xl md:px-12 md:py-16">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" /><div className="absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="relative max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-sky-100"><ClipboardList className="h-4 w-4" /> منظومة تشغيل وإدارة موحّدة</div>
            <p className="mb-3 text-sm font-medium text-sky-300">عرض سعر لتطوير منصة SaaS متعددة المطاعم</p><h1 className="text-4xl font-semibold tracking-tight md:text-6xl">مشروع إدارة مطاعم بالكامل</h1><p className="mt-2 text-xl font-medium text-sky-100 md:text-2xl">Restaurant ERP, POS &amp; AI Platform</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">منصة متكاملة لإدارة وتشغيل سلاسل المطاعم: الفروع، نقاط البيع، المخزون، المشتريات، Food Cost، التقارير، والصلاحيات؛ مع طبقة ذكاء اصطناعي لدعم القرار عند تفعيلها.</p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm"><Pill label="Multi-Tenant SaaS" /><Pill label="POS وإدارة الفروع" /><Pill label="Food Cost وتقارير" /><Pill label="AI Decision Intelligence" /></div>
          </div>
        </section>

        <section className="grid gap-5 py-10 sm:grid-cols-3"><Stat label="باقات التنفيذ" value="280,000 — 320,000 جنيه" /><Stat label="نوع المنصة" value="Web + Desktop POS" /><Stat label="تكلفة الـ AI" value="حسب الاستخدام" /></section>

        <section className="mb-10"><SectionTitle eyebrow="العرض المالي" title="اختر النسخة المناسبة للمشروع" /><p className="mb-6 max-w-3xl leading-7 text-slate-600">الفرق في السعر يعتمد على عدد المطاعم المراد تشغيلها، ووجود لوحة Super Admin من عدمه، وقرار إضافة الذكاء الاصطناعي. الباقات التالية مرتبة من الأبسط إلى الأكثر توسعًا.</p><div className="space-y-4">{pricingOptions.map((option) => <PricingOption key={option.title} option={option} />)}</div></section>

        <section className="mb-10 rounded-[2rem] border border-violet-200 bg-violet-50 p-7 shadow-sm md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"><div className="max-w-3xl"><Eyebrow text="تكلفة الذكاء الاصطناعي" /><h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">رسوم OpenAI حسب الاستخدام</h2><p className="mt-4 leading-8 text-slate-600">في الباقات التي تشمل AI، يغطي سعر التنفيذ ربط وظائف الذكاء الاصطناعي داخل المنصة فقط. أما رسوم OpenAI الشهرية فتُدفع بشكل مستقل بحسب عدد الطلبات وحجم الاستخدام الفعلي.</p></div><div className="w-fit rounded-2xl bg-white p-4 text-violet-700 shadow-sm"><Bot className="h-10 w-10" /></div></div>
          <div className="mt-7 overflow-x-auto rounded-2xl border border-violet-200 bg-white"><table className="min-w-full text-right text-sm"><thead className="bg-violet-100 text-violet-950"><tr><th className="whitespace-nowrap px-5 py-4 font-semibold">المطاعم</th><th className="whitespace-nowrap px-5 py-4 font-semibold">الفروع</th><th className="whitespace-nowrap px-5 py-4 font-semibold">طلبات AI / يوم</th><th className="whitespace-nowrap px-5 py-4 font-semibold">تكلفة شهرية تقريبية</th></tr></thead><tbody>{aiUsage.map((row) => <tr key={row.restaurants} className="border-t border-violet-100 text-slate-700"><td className="px-5 py-4 font-medium">{row.restaurants}</td><td className="px-5 py-4">{row.branches}</td><td className="px-5 py-4">{row.requests}</td><td className="px-5 py-4 font-semibold text-violet-800" dir="ltr">{row.cost}</td></tr>)}</tbody></table></div>
          <p className="mt-5 text-sm leading-6 text-slate-500">هذه أرقام تقديرية شهرية للاستخدام المذكور، وقد تختلف تبعًا للنموذج المختار، وطول المدخلات والمخرجات، وحجم الاستخدام الفعلي. يتم سداد رسوم OpenAI مباشرةً على حساب الخدمة وبشكل منفصل عن تكلفة التطوير.</p>
        </section>

        <section className="mb-10 grid gap-8 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.25fr_0.9fr] md:p-10">
          <div><Eyebrow text="فكرة المنصة" /><h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">عقل تشغيلي وإداري موحّد للمطاعم</h2><p className="mt-5 max-w-2xl leading-8 text-slate-600">يدير مشروع إدارة مطاعم بالكامل عدة مطاعم من نفس المنصة مع فصل بيانات كل مطعم تمامًا. يستطيع كل مالك مطعم إدارة فروعه ومبيعاته ومخزونه وموظفيه وتقاريره، بينما يدير مالك المنصة الاشتراكات والاستخدام والحسابات من لوحة مركزية.</p></div>
          <div className="rounded-2xl bg-sky-50 p-6"><Eyebrow text="يشمل التنفيذ" /><h3 className="mt-2 text-xl font-semibold text-slate-900">أساسيات المنصة</h3><div className="mt-5 space-y-3">{platformItems.slice(0, 4).map((item) => <CheckRow key={item} text={item} />)}</div></div>
        </section>

        <section className="mb-10"><SectionTitle eyebrow="نطاق التنفيذ" title="منصة تربط كل العمليات ببعضها" /><div className="grid gap-4 md:grid-cols-3">{features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}</div></section>

        <section className="mb-10 rounded-[2rem] border border-sky-200 bg-gradient-to-l from-sky-50 to-emerald-50 p-7 md:p-10"><div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div className="max-w-3xl"><Eyebrow text="تكامل تشغيلي" /><h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">من البيع إلى التقارير والقرار</h2><p className="mt-4 leading-8 text-slate-600">كل عملية بيع ترتبط تلقائيًا بالمنيو والوصفات واستهلاك المخزون وFood Cost والتقارير. ويضيف الذكاء الاصطناعي تحليلات وتنبيهات وتوصيات مبنية على البيانات، مع بقاء الاعتماد والتنفيذ بيد المستخدم المخوّل.</p></div><div className="flex w-fit gap-3 rounded-2xl bg-white p-4 text-sky-700 shadow-sm"><Store className="h-10 w-10" /><Database className="h-10 w-10" /><Bot className="h-10 w-10" /></div></div></section>

        <section className="mb-10 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10"><SectionTitle eyebrow="المكونات الرئيسية" title="تشغيل مرن لكل مطعم وفرع" /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{platformItems.map((item, index) => <article key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="text-sm font-semibold text-sky-700">0{index + 1}</span><p className="mt-3 text-sm font-medium leading-6 text-slate-800">{item}</p></article>)}</div></section>

        <section className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10"><SectionTitle eyebrow="الدفعات والتسليم" title="4 دفعات خلال 8 أشهر" /><p className="mb-6 max-w-3xl text-sm leading-6 text-slate-600">تُسدد الدفعات عند البداية، ثم في نهاية الشهر الثاني والرابع والثامن. ولا تشمل قيمة أي من الباقات رسوم OpenAI الشهرية حسب الاستخدام.</p><div className="grid gap-4 md:grid-cols-2">{pricingOptions.map((option) => <article key={option.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><p className="text-sm font-semibold text-sky-700">{option.title} — {option.price}</p><p className="mt-3 text-2xl font-semibold text-slate-950">{option.installment}</p><p className="mt-2 text-sm leading-6 text-slate-600">كل دفعة تمثل 25% من قيمة الباقة.</p></article>)}</div></section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"><div className="flex gap-4"><div className="rounded-xl bg-slate-100 p-3 text-slate-700"><ShieldCheck className="h-6 w-6" /></div><div><h2 className="text-xl font-semibold text-slate-950">ملاحظات مهمة</h2><p className="mt-2 leading-7 text-slate-600">يشمل العرض تطوير وربط وظائف الذكاء الاصطناعي داخل المنصة، بينما تحاسب OpenAI على الاستخدام الفعلي بشكل مستقل. تفاصيل الاستضافة والدعم بعد التسليم يتم الاتفاق عليها ضمن عقد التشغيل والصيانة.</p></div></div></section>
      </main>
      <footer className="mt-12 border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500"><p className="font-semibold text-slate-800">Penta-k</p><p className="mt-1">نتطلع إلى تنفيذ مشروع إدارة مطاعم بالكامل معكم.</p></footer>
    </div>
  );
}

function Eyebrow({ text }: { text: string }) { return <p className="text-sm font-semibold tracking-[0.14em] text-sky-700">{text}</p>; }
function Pill({ label }: { label: string }) { return <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-slate-100">{label}</span>; }
function Stat({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-medium text-slate-500">{label}</p><p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{value}</p></div>; }
function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) { return <div className="mb-7"><Eyebrow text={eyebrow} /><h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{title}</h2></div>; }
function FeatureCard({ feature }: { feature: Feature }) { const Icon = feature.icon; return <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><div className="inline-flex rounded-xl bg-sky-50 p-3 text-sky-700"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-semibold text-slate-950">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p></article>; }
function PricingOption({ option }: { option: typeof pricingOptions[number] }) {
  const isAi = option.tone === 'violet';
  const palette = isAi
    ? { card: 'border-violet-200 bg-violet-50', badge: 'bg-violet-600', price: 'text-violet-800' }
    : { card: 'border-sky-200 bg-sky-50', badge: 'bg-sky-600', price: 'text-sky-800' };
  return <article className={`rounded-[2rem] border p-7 shadow-sm md:p-8 ${palette.card}`}><div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between"><div className="max-w-3xl"><span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white ${palette.badge}`}>{option.badge}</span><h3 className="mt-4 text-2xl font-semibold text-slate-950">{option.title}</h3><p className="mt-3 leading-7 text-slate-600">{option.description}</p><div className="mt-5 grid gap-3 md:grid-cols-3">{option.details.map((detail) => <CheckRow key={detail} text={detail} />)}</div></div><div className="shrink-0 md:text-left"><p className={`text-3xl font-semibold ${palette.price}`}>{option.price}</p><p className="mt-2 text-sm text-slate-600">{option.installment} خلال 8 أشهر</p></div></div></article>;
}
function CheckRow({ text }: { text: string }) { return <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4 text-sm leading-6 text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />{text}</div>; }
