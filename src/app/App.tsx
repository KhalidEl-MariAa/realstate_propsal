import {
  AlertTriangle, BarChart3, Check, ClipboardCheck, FileSearch, MapPinned,
  MessageCircle, PhoneCall, RadioTower, ShieldAlert, ShieldCheck, Smartphone,
  Sparkles, UserRound, UsersRound, WalletCards,
} from 'lucide-react';
import { useState } from 'react';

type IconType = React.ComponentType<{ className?: string }>;
type Feature = { title: string; description: string; icon: IconType };
type Plan = { name: string; price: string; badge: string; features: string[]; featured?: boolean };

const copy = {
  ar: {
    label: 'عرض فني ومالي', date: 'أغسطس ٢٠٢٦', platform: 'منصة توصيل توكتوك داخل المركز', preparedFor: 'عرض سعر لتطوير تطبيق', company: 'ينجز Yngez',
    hero: 'منظومة توصيل محلية باللغة العربية، تربط العميل بسائق التوكتوك داخل نطاق المركز، مع متابعة حية للرحلة وإجراءات أمان وإدارة متكاملة من لوحة التحكم.',
    tags: ['تطبيق العميل Android', 'تطبيق السائق Android', 'لوحة تحكم ويب'],
    stats: [['مدة التنفيذ', '45 يوم عمل'], ['لغة التطبيق', 'عربي RTL 100%'], ['طريقة الدفع', 'كاش فقط'], ['العروض المتاحة', '50,000 أو 70,000 جنيه']],
    objectiveEyebrow: 'نطاق التنفيذ', objectiveTitle: '3 أجزاء مترابطة لإدارة تجربة التوصيل بالكامل', objectiveText: 'يشمل المشروع تطبيق العميل، وتطبيق السائق، ولوحة تحكم إدارية على الويب. تعتمد الخرائط على OpenStreetMap، ويعتمد النظام على الدفع النقدي فقط مع عمولة قدرها جنيه واحد تُخصم من محفظة السائق بعد انتهاء الرحلة.',
    coreEyebrow: 'أساسيات النظام', coreTitle: 'تشغيل آمن وسريع داخل نطاق المركز', core: ['تسجيل OTP للعميل مع الاسم ورقمي طوارئ إلزاميين.', 'Geofencing لتحديد نطاق الخدمة داخل المركز.', 'متابعة موقع السائق والرحلة مباشرة Live Tracking.', 'كود PIN من 4 أرقام لبدء الرحلة.', 'زر SOS ومشاركة الرحلة للعميل والسائق.', 'عمولة 1 جنيه من محفظة السائق بعد 30 دقيقة من إنهاء الرحلة.'],
    riderEyebrow: 'تطبيق العميل', riderTitle: 'طلب رحلة ومتابعتها بثقة', driverEyebrow: 'تطبيق السائق', driverTitle: 'إدارة الرحلات والمحفظة بأمان', adminEyebrow: 'لوحة التحكم', adminTitle: 'سيطرة كاملة على التشغيل اليومي',
    riderFeatures: [
      { title: 'تسجيل وآمان', description: 'تسجيل OTP مع الاسم ورقمي طوارئ إلزاميين، وإدارة بيانات الحساب.', icon: UserRound },
      { title: 'طلب ومتابعة الرحلة', description: 'إنشاء طلب رحلة، متابعة السائق والرحلة على الخريطة، ورؤية حالة الطلب لحظة بلحظة.', icon: MapPinned },
      { title: 'التواصل والأمان', description: 'شات داخل التطبيق، اتصال، مشاركة الرحلة، زر SOS وتقييم السائق بعد الرحلة.', icon: ShieldAlert },
    ] as Feature[],
    driverFeatures: [
      { title: 'توثيق وموافقة', description: 'تسجيل بصورة سيلفي وصورة البطاقة، ثم اعتماد الحساب من الإدارة قبل التفعيل.', icon: ClipboardCheck },
      { title: 'استقبال الرحلات', description: 'حالة Online/Offline واستقبال طلبات الرحلات خلال 20 ثانية مع قبول أو رفض الطلب.', icon: RadioTower },
      { title: 'محفظة السائق', description: 'تجميد الحساب عند وصول الرصيد إلى صفر، شحن المحفظة بصورة التحويل، وخصم العمولة تلقائياً.', icon: WalletCards },
    ] as Feature[],
    adminFeatures: [
      { title: 'إدارة السائقين', description: 'مراجعة بيانات ووثائق السائقين، اعتماد أو إيقاف الحسابات وإدارة نطاق الخدمة.', icon: UsersRound },
      { title: 'متابعة حية وSOS', description: 'متابعة الرحلات الجارية لايف، واستقبال بلاغات SOS والتعامل معها من لوحة التحكم.', icon: AlertTriangle },
      { title: 'المحافظ والتقارير', description: 'مراجعة طلبات شحن المحافظ، إرسال Broadcast، وتقارير العمولة والرحلات.', icon: BarChart3 },
    ] as Feature[],
    chatEyebrow: 'التواصل داخل التطبيق', chatTitle: 'شات كامل في الباقتين، ومكالمات صوتية في باقة 70,000 جنيه', chatPoints: ['رسائل نصية داخل التطبيق.', 'إرسال واستقبال الصور داخل المحادثة.', 'رسائل صوتية Voice Messages داخل المحادثة.', 'المحادثة مرتبطة بالرحلة لتوضيح سياق التواصل.', 'المكالمات الصوتية داخل التطبيق متاحة في باقة 70,000 جنيه فقط.'],
    securityEyebrow: 'الأمان والاختبار', securityTitle: 'متطلبات تشغيل موثوقة قبل الإطلاق', securityPoints: ['مصادقة OTP وصلاحيات منفصلة للعميل والسائق والإدارة.', 'حماية نقاط API والتحقق من البيانات وحدود الاستخدام.', 'اختبار Beta لمدة 30 يوماً.', 'Load Test لسيناريو حتى 1000 مستخدم.', 'تسليم السورس كود وقاعدة البيانات وملف Keystore.', 'دعم مجاني لمدة سنة يشمل 20 ساعة تعديلات.'],
    offersEyebrow: 'العرض المالي', offersTitle: 'اختر الباقة المناسبة للتطبيق', recommended: 'يشمل المكالمات الصوتية', differenceTitle: 'الفرق بين الباقتين', differenceText: 'جميع المزايا الأساسية متطابقة في الباقتين، بما فيها تطبيق العميل والسائق، لوحة التحكم، تتبع الرحلات، المحفظة، SOS والشات الكامل. الفرق الوحيد: باقة 70,000 جنيه تشمل مكالمات صوتية داخل التطبيق، بينما باقة 50,000 جنيه تشمل الشات فقط.',
    plans: [
      { name: 'باقة المكالمات الصوتية', price: '70,000 جنيه', badge: 'الخيار المتكامل', featured: true, features: ['كل ما في باقة الشات الكامل.', 'مكالمات صوتية داخل التطبيق.', 'تواصل متكامل بين العميل والسائق.', 'إعدادات وإشعارات المكالمات داخل النظام.', 'جميع خصائص الرحلات والمحفظة وSOS.', 'تطبيق العميل والسائق ولوحة التحكم.'] },
      { name: 'باقة الشات الكامل', price: '50,000 جنيه', badge: 'شات شامل', features: ['تطبيق العميل Android.', 'تطبيق السائق Android.', 'لوحة تحكم ويب.', 'شات: كتابة وصور ورسائل صوتية.', 'جميع خصائص الرحلات والمحفظة وSOS.', 'بدون مكالمات صوتية داخل التطبيق.'] },
    ] as Plan[],
    paymentsEyebrow: 'الدفعات والتسليم', paymentsTitle: 'تقسيم الدفعات لكل باقة', paymentNote: 'يتم تطبيق التقسيم نفسه على الباقة المختارة. تبدأ المدة من اعتماد تصميم UI/UX.', paymentSteps: ['25% مقدم عند بدء المشروع.', '25% عند تسليم واعتماد تصميم UI/UX.', '25% عند تسليم النسخة التجريبية للتطبيقات ولوحة التحكم.', '25% عند التسليم النهائي وقبل الرفع على حسابات العميل.'],
    termsEyebrow: 'بنود التسليم والدعم', termsTitle: 'التزامات واضحة لضمان إطلاق منظم', terms: ['مدة التنفيذ 45 يوم عمل من اعتماد UI/UX.', 'تسليم Source Code كامل + Database + Keystore.', 'رفع تطبيقات Android على حساب Google Play الخاص بـ«ينجز».', 'رفع Apple App Store يحتاج تطبيق iOS مستقلاً، وهو غير مشمول في نطاق تطبيقات Android الحالي.', 'غرامة التأخير 1% يومياً وبحد أقصى 20% وفقاً للعقد النهائي المعتمد.', 'يتم توفير حسابات النشر وخدمات OTP وأي خدمات خارجية من العميل أو تُحاسب بشكل منفصل.'],
    thanks: 'شكراً لثقتكم ودراسة هذا العرض.',
  },
  en: {
    label: 'Technical & Commercial Proposal', date: 'August 2026', platform: 'Local tuk-tuk delivery platform', preparedFor: 'Development proposal for', company: 'Yngez',
    hero: 'An Arabic-first local delivery system connecting riders with tuk-tuk drivers within the town boundary, with live trip tracking, safety features and a complete admin dashboard.',
    tags: ['Android rider app', 'Android driver app', 'Web admin dashboard'],
    stats: [['Delivery duration', '45 business days'], ['Application language', 'Arabic RTL 100%'], ['Payment method', 'Cash only'], ['Available offers', '50,000 or 70,000 L.E']],
    objectiveEyebrow: 'Project scope', objectiveTitle: 'Three connected products to manage the entire delivery experience', objectiveText: 'The project includes a rider app, driver app and web admin dashboard. Maps use OpenStreetMap, and the system works with cash payments only, with a 1 L.E commission deducted from the driver wallet after a trip is completed.',
    coreEyebrow: 'Core system', coreTitle: 'Fast and safe operations within the town boundary', core: ['OTP registration for riders with a name and two required emergency numbers.', 'Geofencing to define the service boundary within the town.', 'Live driver and trip tracking.', 'Four-digit PIN to start a trip.', 'SOS and trip sharing for both rider and driver.', '1 L.E driver-wallet commission deducted 30 minutes after trip completion.'],
    riderEyebrow: 'Rider app', riderTitle: 'Request and follow each trip with confidence', driverEyebrow: 'Driver app', driverTitle: 'Manage trips and wallet securely', adminEyebrow: 'Admin dashboard', adminTitle: 'Complete control over daily operations',
    riderFeatures: [
      { title: 'Registration & safety', description: 'OTP registration with name and two mandatory emergency numbers, plus account management.', icon: UserRound },
      { title: 'Trip request & tracking', description: 'Create a trip request, follow the driver and trip on the map, and see request status in real time.', icon: MapPinned },
      { title: 'Communication & safety', description: 'In-app chat, calling, trip sharing, SOS and driver rating after the trip.', icon: ShieldAlert },
    ] as Feature[],
    driverFeatures: [
      { title: 'Verification & approval', description: 'Register with selfie and national ID photo, then receive admin approval before activation.', icon: ClipboardCheck },
      { title: 'Trip requests', description: 'Online/Offline status and a 20-second window to accept or reject incoming trip requests.', icon: RadioTower },
      { title: 'Driver wallet', description: 'Freeze account at zero balance, top up by transfer image and automatically deduct commission.', icon: WalletCards },
    ] as Feature[],
    adminFeatures: [
      { title: 'Driver management', description: 'Review driver data and documents, approve or suspend accounts and manage the service area.', icon: UsersRound },
      { title: 'Live view & SOS', description: 'Track active trips live, receive SOS alerts and respond from the dashboard.', icon: AlertTriangle },
      { title: 'Wallets & reports', description: 'Review wallet top-ups, send broadcasts and review trip and commission reports.', icon: BarChart3 },
    ] as Feature[],
    chatEyebrow: 'In-app communication', chatTitle: 'Full chat in both plans, with voice calls in the 70,000 L.E plan', chatPoints: ['Text messages inside the application.', 'Send and receive images in chat.', 'Voice messages in chat.', 'Each conversation is linked to its trip for clear context.', 'In-app voice calls are available only in the 70,000 L.E plan.'],
    securityEyebrow: 'Security & testing', securityTitle: 'Reliable operating requirements before release', securityPoints: ['OTP authentication and separate rider, driver and admin permissions.', 'API protection, data validation and rate limits.', '30-day beta testing period.', 'Load test scenario for up to 1,000 users.', 'Delivery of source code, database and keystore file.', 'One year of free support including 20 modification hours.'],
    offersEyebrow: 'Commercial offer', offersTitle: 'Choose the plan that suits the app', recommended: 'Includes voice calls', differenceTitle: 'Difference between the plans', differenceText: 'All core features are identical in both plans, including rider and driver apps, dashboard, trip tracking, wallet, SOS and full chat. The only difference is that the 70,000 L.E plan includes in-app voice calling, while the 50,000 L.E plan includes chat only.',
    plans: [
      { name: 'Voice calling plan', price: '70,000 L.E', badge: 'Complete option', featured: true, features: ['Everything in the full chat plan.', 'In-app voice calling.', 'Complete rider-to-driver communication.', 'In-system call settings and notifications.', 'All trip, wallet and SOS features.', 'Rider app, driver app and admin dashboard.'] },
      { name: 'Full chat plan', price: '50,000 L.E', badge: 'Complete chat', features: ['Android rider application.', 'Android driver application.', 'Web admin dashboard.', 'Chat: text, images and voice messages.', 'All trip, wallet and SOS features.', 'No in-app voice calls.'] },
    ] as Plan[],
    paymentsEyebrow: 'Payments & delivery', paymentsTitle: 'Payment split for either plan', paymentNote: 'The same payment split applies to the selected plan. The delivery period starts after UI/UX approval.', paymentSteps: ['25% advance payment at project start.', '25% on delivery and approval of the UI/UX design.', '25% on delivery of the beta apps and admin dashboard.', '25% on final delivery before publishing to the client’s accounts.'],
    termsEyebrow: 'Delivery & support terms', termsTitle: 'Clear commitments for an organised launch', terms: ['45 business days from UI/UX approval.', 'Full source code, database and keystore delivery.', 'Android applications uploaded to Yngez’s Google Play account.', 'Apple App Store publishing requires a separate iOS application, which is not included in the current Android scope.', '1% daily delay penalty, capped at 20%, subject to the final signed agreement.', 'Publishing accounts, OTP services and other third-party services are supplied by the client or charged separately.'],
    thanks: 'Thank you for considering this proposal.',
  },
};

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const t = copy[language];
  const isArabic = language === 'ar';
  return <div className="min-h-screen bg-[#f8fafc] text-slate-800" dir={isArabic ? 'rtl' : 'ltr'}>
    <header className="border-b border-slate-200/80 bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5"><img src="/logo.png" alt="Penta-k" className="h-10 w-auto object-contain" /><div className={isArabic ? 'text-left' : 'text-right'}><button type="button" onClick={() => setLanguage(isArabic ? 'en' : 'ar')} className="mb-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 transition hover:bg-sky-100">{isArabic ? 'English' : 'العربية'}</button><p className="text-xs font-semibold tracking-[0.12em] text-sky-700">{t.label}</p><p className="mt-1 text-sm text-slate-500">{t.date}</p></div></div></header>
    <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white shadow-2xl md:px-12 md:py-16"><div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" /><div className="absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" /><div className="relative max-w-3xl"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-sky-100"><Sparkles className="h-4 w-4" />{t.platform}</div><p className="mb-3 text-sm font-medium text-sky-300">{t.preparedFor}</p><h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{t.company}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{t.hero}</p><div className="mt-9 flex flex-wrap gap-3 text-sm">{t.tags.map((tag) => <Pill key={tag} label={tag} />)}</div></div></section>
      <section className="grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-4">{t.stats.map(([label, value]) => <Stat key={label} label={label} value={value} />)}</section>
      <section className="mb-10 grid gap-8 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.25fr_0.9fr] md:p-10"><div><Eyebrow text={t.objectiveEyebrow} /><h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{t.objectiveTitle}</h2><p className="mt-5 max-w-2xl leading-8 text-slate-600">{t.objectiveText}</p></div><div className="rounded-2xl bg-sky-50 p-6"><Eyebrow text={t.coreEyebrow} /><h3 className="mt-2 text-xl font-semibold text-slate-900">{t.coreTitle}</h3><div className="mt-5 space-y-3">{t.core.map((item) => <CheckRow key={item} text={item} />)}</div></div></section>
      <section className="mb-10"><SectionTitle eyebrow={t.riderEyebrow} title={t.riderTitle} /><FeatureGrid features={t.riderFeatures} /></section>
      <section className="mb-10"><SectionTitle eyebrow={t.driverEyebrow} title={t.driverTitle} /><FeatureGrid features={t.driverFeatures} /></section>
      <section className="mb-10"><SectionTitle eyebrow={t.adminEyebrow} title={t.adminTitle} /><FeatureGrid features={t.adminFeatures} /></section>
      <section className="mb-10 grid gap-6 lg:grid-cols-2"><article className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl"><div className="w-fit rounded-xl bg-white/10 p-3"><MessageCircle className="h-7 w-7 text-sky-300" /></div><SectionTitle dark eyebrow={t.chatEyebrow} title={t.chatTitle} /><div className="space-y-3">{t.chatPoints.map((item) => <DarkCheckRow key={item} text={item} />)}</div></article><article className="rounded-[2rem] border border-violet-100 bg-violet-50 p-8"><div className="w-fit rounded-xl bg-violet-100 p-3"><ShieldCheck className="h-7 w-7 text-violet-700" /></div><SectionTitle eyebrow={t.securityEyebrow} title={t.securityTitle} /><div className="grid gap-3 sm:grid-cols-2">{t.securityPoints.map((item) => <CheckRow key={item} text={item} violet />)}</div></article></section>
      <section className="mb-10"><SectionTitle eyebrow={t.offersEyebrow} title={t.offersTitle} /><div className="grid gap-6 lg:grid-cols-2">{t.plans.map((plan) => <PlanCard key={plan.name} plan={plan} recommended={t.recommended} />)}</div><div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6"><h3 className="text-lg font-semibold text-slate-950">{t.differenceTitle}</h3><p className="mt-2 leading-7 text-slate-600">{t.differenceText}</p></div></section>
      <section className="mb-10 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10"><SectionTitle eyebrow={t.paymentsEyebrow} title={t.paymentsTitle} /><p className="mb-6 max-w-3xl text-sm leading-6 text-slate-600">{t.paymentNote}</p><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{t.paymentSteps.map((step, index) => <article key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="text-sm font-semibold text-sky-700">0{index + 1}</span><p className="mt-4 text-sm leading-6 text-slate-700">{step}</p></article>)}</div></section>
      <section className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10"><SectionTitle eyebrow={t.termsEyebrow} title={t.termsTitle} /><div className="grid gap-3 md:grid-cols-2">{t.terms.map((term) => <CheckRow key={term} text={term} />)}</div></section>
    </main>
    <footer className="mt-12 border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500"><p className="font-semibold text-slate-800">Penta-k</p><p className="mt-1">{t.thanks}</p></footer>
  </div>;
}

function Eyebrow({ text, dark = false }: { text: string; dark?: boolean }) { return <p className={`text-sm font-semibold tracking-[0.14em] ${dark ? 'text-sky-300' : 'text-sky-700'}`}>{text}</p>; }
function Pill({ label }: { label: string }) { return <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-slate-100">{label}</span>; }
function Stat({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-medium text-slate-500">{label}</p><p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{value}</p></div>; }
function SectionTitle({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) { return <div className="mb-7 mt-6"><Eyebrow text={eyebrow} dark={dark} /><h2 className={`mt-2 text-2xl font-semibold tracking-tight ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2></div>; }
function FeatureGrid({ features }: { features: Feature[] }) { return <div className="grid gap-4 md:grid-cols-3">{features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}</div>; }
function FeatureCard({ feature }: { feature: Feature }) { const Icon = feature.icon; return <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><div className="inline-flex rounded-xl bg-sky-50 p-3 text-sky-700"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-semibold text-slate-950">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p></article>; }
function CheckRow({ text, violet = false }: { text: string; violet?: boolean }) { return <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${violet ? 'text-violet-600' : 'text-sky-600'}`} />{text}</div>; }
function DarkCheckRow({ text }: { text: string }) { return <div className="flex items-start gap-3 text-sm leading-6 text-slate-200"><Check className="mt-1 h-4 w-4 shrink-0 text-sky-300" />{text}</div>; }
function PlanCard({ plan, recommended }: { plan: Plan; recommended: string }) { return <article className={`rounded-[2rem] border p-7 ${plan.featured ? 'border-sky-200 bg-sky-50 shadow-lg shadow-sky-100/50' : 'border-slate-200 bg-white shadow-sm'}`}><div className="flex items-start justify-between gap-4"><div><span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${plan.featured ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{plan.featured ? recommended : plan.badge}</span><h3 className="mt-4 text-2xl font-semibold text-slate-950">{plan.name}</h3></div><p className="text-3xl font-semibold text-slate-950">{plan.price}</p></div><div className="mt-6 space-y-3 border-t border-slate-200 pt-6">{plan.features.map((feature) => <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700"><Check className={`mt-1 h-4 w-4 shrink-0 ${plan.featured ? 'text-sky-600' : 'text-slate-500'}`} />{feature}</div>)}</div></article>; }
