import type { ComponentType } from 'react';
import { Check, ClipboardList, CreditCard, FileText, LayoutDashboard, RefreshCcw, ShieldCheck } from 'lucide-react';

type IconType = ComponentType<{ className?: string }>;
type Feature = { title: string; description: string; icon: IconType };

const features: Feature[] = [
  { title: 'إدارة الخدمات والمستندات', description: 'إضافة الخدمات وتعديلها، وتحديد المستندات المطلوبة لكل خدمة ليظهر للعميل ما يحتاجه بوضوح قبل إرسال الطلب.', icon: FileText },
  { title: 'طلبات منظمة على لوحة التحكم', description: 'وصول الطلبات إلى لوحة تحكم خاصة بالإدارة، مع الاطلاع على البيانات والمستندات ومتابعة كل طلب من مكان واحد.', icon: LayoutDashboard },
  { title: 'دفع مرن ومتابعة واضحة', description: 'إتاحة الدفع الإلكتروني أو الدفع بعد التواصل، مع حالات تفصيلية للطلب وإشعارات تساعد العميل على المتابعة.', icon: CreditCard },
];

const orderFlow = ['تم استلام الطلب', 'قيد المراجعة', 'بانتظار استكمال المستندات', 'قيد التنفيذ', 'مكتمل أو مرفوض'];

const paymentSteps = [
  { percentage: '25%', amount: '15,000 جنيه', text: 'دفعة مقدمة عند اعتماد العرض وبدء العمل.' },
  { percentage: '25%', amount: '15,000 جنيه', text: 'عند تسليم لوحة التحكم.' },
  { percentage: '25%', amount: '15,000 جنيه', text: 'عند تسليم التطبيق واعتماده.' },
  { percentage: '25%', amount: '15,000 جنيه', text: 'بعد رفع التطبيق على حساباتنا.' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800" dir="rtl">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <img src="/logo.png" alt="Penta-k" className="h-10 w-auto object-contain" />
          <div className="text-left">
            <p className="text-xs font-semibold tracking-[0.12em] text-sky-700">عرض فني ومالي</p>
            <p className="mt-1 text-sm text-slate-500">تطبيق تقديم الخدمات الحكومية</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white shadow-2xl md:px-12 md:py-16">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-sky-100"><ClipboardList className="h-4 w-4" /> منصة موحدة للخدمات والطلبات</div>
            <p className="mb-3 text-sm font-medium text-sky-300">عرض سعر لتطوير تطبيق وخدمات إدارية</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">تطبيق تقديم الخدمات الحكومية</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">تطبيق يسهّل على العملاء طلب الخدمات، رفع المستندات المطلوبة، متابعة حالة الطلب، واختيار طريقة الدفع المناسبة، مع لوحة تحكم متكاملة لإدارة الخدمات والطلبات.</p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm"><Pill label="إدارة خدمات ومستندات" /><Pill label="طلبات ودفع إلكتروني" /><Pill label="لوحة تحكم للإدارة" /></div>
          </div>
        </section>

        <section className="grid gap-5 py-10 sm:grid-cols-3"><Stat label="قيمة المشروع" value="60,000 جنيه" /><Stat label="الدعم الفني المجاني" value="3 أشهر" /><Stat label="استضافة السيرفر" value="6 أشهر" /></section>

        <section className="mb-10 grid gap-8 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.25fr_0.9fr] md:p-10">
          <div><Eyebrow text="فكرة التطبيق" /><h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">خدمة واضحة من الطلب حتى الإنجاز</h2><p className="mt-5 max-w-2xl leading-8 text-slate-600">يختار العميل الخدمة المناسبة، يطلع على المستندات المطلوبة، ويرفعها مع بيانات الطلب. يصل الطلب مباشرة إلى الإدارة لمراجعته وتحديث حالته، بينما يظل العميل على اطلاع دائم بمراحل التنفيذ وطريقة الدفع.</p></div>
          <div className="rounded-2xl bg-sky-50 p-6"><Eyebrow text="يشمل التطبيق" /><h3 className="mt-2 text-xl font-semibold text-slate-900">أساسيات التشغيل</h3><div className="mt-5 space-y-3"><CheckRow text="حسابات للعملاء وتسجيل الدخول." /><CheckRow text="إنشاء الخدمات وتحديد مستندات كل خدمة." /><CheckRow text="رفع المستندات ومراجعتها من لوحة التحكم." /><CheckRow text="متابعة حالة كل طلب بشكل واضح." /></div></div>
        </section>

        <section className="mb-10"><SectionTitle eyebrow="نطاق التنفيذ" title="وظائف تدير الخدمة بكفاءة" /><div className="grid gap-4 md:grid-cols-3">{features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}</div></section>

        <section className="mb-10 rounded-[2rem] border border-sky-200 bg-gradient-to-l from-sky-50 to-emerald-50 p-7 md:p-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div className="max-w-3xl"><Eyebrow text="المدفوعات والاسترداد" /><h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">خيارات دفع تناسب طبيعة كل طلب</h2><p className="mt-4 leading-8 text-slate-600">يستطيع العميل الدفع إلكترونيًا عند توفره، أو اختيار الدفع بعد التواصل. وعند رفض الطلب، يمكنه تقديم طلب استرداد مبلغ من داخل التطبيق ليصل مباشرة إلى لوحة التحكم للمراجعة واتخاذ الإجراء المناسب.</p></div><div className="flex w-fit gap-3 rounded-2xl bg-white p-4 text-sky-700 shadow-sm"><CreditCard className="h-10 w-10" /><RefreshCcw className="h-10 w-10" /></div></div>
        </section>

        <section className="mb-10 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10"><SectionTitle eyebrow="حالات الطلب" title="متابعة دقيقة في كل مرحلة" /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{orderFlow.map((status, index) => <article key={status} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="text-sm font-semibold text-sky-700">0{index + 1}</span><p className="mt-3 text-sm font-medium leading-6 text-slate-800">{status}</p></article>)}</div></section>

        <section className="mb-10"><SectionTitle eyebrow="العرض المالي" title="تكلفة تنفيذ المشروع" /><article className="rounded-[2rem] border border-sky-200 bg-sky-50 p-7 shadow-sm md:p-10"><div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between"><div><span className="inline-flex rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">العرض شامل</span><h3 className="mt-4 text-3xl font-semibold text-slate-950">تطبيق الخدمات الحكومية ولوحة التحكم</h3><div className="mt-6 grid gap-3 md:grid-cols-2"><CheckRow text="رفع التطبيق على حساباتنا." /><CheckRow text="دعم فني مجاني لمدة 3 أشهر بعد التسليم." /><CheckRow text="سيرفر لمدة 6 أشهر." /><CheckRow text="إدارة الطلبات والمدفوعات وطلبات الاسترداد." /></div></div><p className="whitespace-nowrap text-4xl font-semibold text-slate-950">60,000 جنيه</p></div></article></section>

        <section className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10"><SectionTitle eyebrow="الدفعات والتسليم" title="تقسيم الدفعات" /><p className="mb-6 max-w-3xl text-sm leading-6 text-slate-600">إجمالي قيمة المشروع 60,000 جنيه، ويكون السداد وفق المراحل التالية:</p><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{paymentSteps.map((step, index) => <article key={`${step.percentage}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><div className="flex items-start justify-between gap-3"><span className="text-sm font-semibold text-sky-700">0{index + 1}</span><span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-900">{step.percentage}</span></div><p className="mt-5 text-xl font-semibold text-slate-950">{step.amount}</p><p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p></article>)}</div></section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"><div className="flex gap-4"><div className="rounded-xl bg-slate-100 p-3 text-slate-700"><ShieldCheck className="h-6 w-6" /></div><div><h2 className="text-xl font-semibold text-slate-950">ملاحظات الاستضافة والدعم</h2><p className="mt-2 leading-7 text-slate-600">يشمل العرض سيرفر لمدة 6 أشهر ودعمًا فنيًا مجانيًا لمدة 3 أشهر بعد التسليم. يتم الاتفاق على تجديد الاستضافة أو الدعم بعد هذه المدة بشكل منفصل عند الحاجة.</p></div></div></section>
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500"><p className="font-semibold text-slate-800">Penta-k</p><p className="mt-1">شكرًا لثقتكم، ونتطلع إلى تنفيذ مشروعكم.</p></footer>
    </div>
  );
}

function Eyebrow({ text }: { text: string }) { return <p className="text-sm font-semibold tracking-[0.14em] text-sky-700">{text}</p>; }
function Pill({ label }: { label: string }) { return <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-slate-100">{label}</span>; }
function Stat({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-medium text-slate-500">{label}</p><p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{value}</p></div>; }
function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) { return <div className="mb-7"><Eyebrow text={eyebrow} /><h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{title}</h2></div>; }
function FeatureCard({ feature }: { feature: Feature }) { const Icon = feature.icon; return <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><div className="inline-flex rounded-xl bg-sky-50 p-3 text-sky-700"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-semibold text-slate-950">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p></article>; }
function CheckRow({ text }: { text: string }) { return <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4 text-sm leading-6 text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />{text}</div>; }
