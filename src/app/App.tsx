import {
  BarChart3,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Globe2,
  LayoutDashboard,
  Mail,
  MessageCircle,
  MousePointerClick,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { useState } from 'react';

type IconType = React.ComponentType<{ className?: string }>;
type Feature = { title: string; description: string; icon: IconType };
type PhaseItem = { title: string; text: string };

const copy = {
  en: {
    proposal: 'Business Proposal', date: 'August 2026', platform: 'Digital real-estate platform', preparedFor: 'Prepared exclusively for', company: 'Mr. Mohamed Elaraby Company',
    hero: 'A focused real-estate website designed to showcase properties, capture qualified leads and give your marketing team control of every key touchpoint.',
    phaseOne: 'Phase 1', maxViews: 'Up to 10 views', noLogin: 'No login required',
    phaseOneInvestment: 'Phase 1 investment', websiteViews: 'Website views',
    objective: 'Project objective', objectiveTitle: 'Turn property interest into measurable sales opportunities.', publicWebsite: 'Public-facing website', noAuth: 'No sign-in or authentication', cmsIncluded: 'CMS dashboard included',
    scope: 'Phase 1 scope', scopeTitle: 'Real-estate website & content dashboard', scopeText: 'Phase 1 delivers a complete website without customer accounts or login flows. Visitors can explore your properties, access a detailed property page and download its related PDF brochure. Behind the scenes, a simple content-management dashboard keeps your team in control.',
    websiteEyebrow: 'Website experience', websiteTitle: 'Built for discovery, enquiries and campaigns',
    cmsEyebrow: 'CMS dashboard', cmsTitle: 'Everything your team needs to keep the website current', dashboardTitle: 'One dashboard, clear ownership.', dashboardText: 'Designed for non-technical users to manage site content and property information without depending on a developer for routine updates.', dashboardIncluded: 'Included with the Phase 1 website.',
    marketingEyebrow: 'Marketing integrations', marketingTitle: 'Connect every enquiry to your marketing workflow',
    futureEyebrow: 'Future vision', futureTitle: 'Phase 2: scale sales operations with CRM',
    commercialEyebrow: 'Commercial summary', commercialTitle: 'Investment & scope notes', phaseOnePackage: 'Phase 1 — Website + CMS', phaseOneSummary: 'Includes the public website, up to 10 views, property data and PDF brochures, dashboard CMS, email automation, WhatsApp API integration and pixel analytics setup.', appPackage: 'Optional — Website + CMS + mobile app', appSummary: 'Includes all Phase 1 scope plus the mobile-app features outlined above, including notifications and saved properties.',
    noteOne: 'No login or authentication is included in Phase 1.', noteTwo: 'The client provides property content, imagery, brochures and access to third-party marketing accounts.', noteThree: 'Third-party fees, including WhatsApp provider, email service and advertising-platform charges, are not included unless agreed separately.', thanks: 'Thank you for considering this proposal.',
    websiteFeatures: [
      { title: 'Property catalogue', description: 'A clear browsing experience for available real-estate listings, organised for fast discovery.', icon: Building2 },
      { title: 'Property details & PDF', description: 'Every property has its own data, media and downloadable PDF brochure for easy sharing.', icon: FileText },
      { title: 'Lead capture', description: 'Focused enquiry forms and calls-to-action that make it simple for prospects to reach the sales team.', icon: MousePointerClick },
      { title: 'Marketing integrations', description: 'Email automation, WhatsApp API and marketing pixels connected to the lead journey.', icon: MessageCircle },
      { title: 'Analytics readiness', description: 'Pixel-based tracking to help measure campaigns, audience behaviour and conversion activity.', icon: BarChart3 },
      { title: 'Responsive website', description: 'A polished experience that works seamlessly across desktop, tablet and mobile browsers.', icon: Globe2 },
    ] as Feature[],
    dashboardFeatures: ['Manage up to 10 website views and their content.', 'Add, edit and archive property listings.', 'Upload property PDF brochures and update listing data.', 'Manage media, text, calls-to-action and contact details.', 'Review incoming enquiries in one central place.', 'Control pixel, WhatsApp and email automation settings.'],
    integrations: [{ icon: Mail, title: 'Email automation', description: 'Trigger follow-up email sequences after a website enquiry.' }, { icon: MessageCircle, title: 'WhatsApp API', description: 'Enable direct, fast conversations with property prospects.' }, { icon: BarChart3, title: 'Pixel analytics', description: 'Track campaign performance and optimise marketing spend.' }] as Feature[],
    phaseTwo: [{ title: 'CRM', text: 'A dedicated lead pipeline to track each opportunity from first enquiry to close.' }, { title: 'Broker roles', text: 'Role-based access for brokers, team leaders and administrators.' }, { title: 'Lead assignment', text: 'Assign, follow up and measure broker activity across the sales funnel.' }] as PhaseItem[],
  },
  ar: {
    proposal: 'عرض فني ومالي', date: 'أغسطس ٢٠٢٦', platform: 'منصة عقارية رقمية', preparedFor: 'أُعِدّ خصيصاً لصالح', company: 'شركة الأستاذ محمد العربي',
    hero: 'موقع عقاري متكامل لعرض العقارات، جذب العملاء المحتملين، ومنح فريق التسويق التحكم الكامل في جميع نقاط التواصل مع العملاء.',
    phaseOne: 'المرحلة الأولى', maxViews: 'حتى ١٠ صفحات', noLogin: 'بدون تسجيل دخول',
    phaseOneInvestment: 'استثمار المرحلة الأولى', websiteViews: 'عدد صفحات الموقع',
    objective: 'هدف المشروع', objectiveTitle: 'تحويل اهتمام العملاء بالعقارات إلى فرص مبيعات قابلة للقياس.', publicWebsite: 'موقع متاح للزوار', noAuth: 'بدون تسجيل حساب أو مصادقة', cmsIncluded: 'لوحة إدارة محتوى متضمنة',
    scope: 'نطاق المرحلة الأولى', scopeTitle: 'موقع عقاري ولوحة لإدارة المحتوى', scopeText: 'تتضمن المرحلة الأولى موقعاً كاملاً دون حسابات للعملاء أو تسجيل دخول. يمكن للزائر استعراض العقارات، والوصول إلى صفحة تفاصيل العقار، وتحميل البروشور الخاص به بصيغة PDF. ومن خلال لوحة إدارة سهلة، يبقى فريقكم مسيطراً على المحتوى بشكل كامل.',
    websiteEyebrow: 'تجربة الموقع', websiteTitle: 'مصمم للاستكشاف، الاستفسارات والحملات التسويقية',
    cmsEyebrow: 'لوحة إدارة المحتوى', cmsTitle: 'كل ما يحتاجه فريقكم لتحديث الموقع باستمرار', dashboardTitle: 'لوحة واحدة، وتحكم واضح.', dashboardText: 'مصممة لتمكين المستخدمين غير التقنيين من إدارة محتوى الموقع وبيانات العقارات دون الحاجة إلى مطور في التحديثات اليومية.', dashboardIncluded: 'متضمنة ضمن موقع المرحلة الأولى.',
    marketingEyebrow: 'التكاملات التسويقية', marketingTitle: 'اربط كل استفسار بمسار عملك التسويقي',
    futureEyebrow: 'الرؤية المستقبلية', futureTitle: 'المرحلة الثانية: تطوير عمليات المبيعات عبر CRM',
    commercialEyebrow: 'الملخص التجاري', commercialTitle: 'الاستثمار وملاحظات نطاق العمل', phaseOnePackage: 'المرحلة الأولى — الموقع ولوحة الإدارة', phaseOneSummary: 'يشمل الموقع المتاح للزوار، وحتى ١٠ صفحات، وبيانات العقارات وبروشورات PDF، ولوحة إدارة المحتوى، وأتمتة البريد الإلكتروني، وتكامل WhatsApp API، وإعداد تحليلات Pixel.', appPackage: 'اختياري — الموقع ولوحة الإدارة وتطبيق الموبايل', appSummary: 'يشمل جميع بنود المرحلة الأولى إضافة إلى مزايا تطبيق الموبايل الموضحة أعلاه، بما فيها الإشعارات والعقارات المفضلة.',
    noteOne: 'لا تتضمن المرحلة الأولى تسجيل دخول أو مصادقة للمستخدمين.', noteTwo: 'يوفر العميل محتوى العقارات والصور والبروشورات وصلاحيات الوصول إلى حسابات أدوات التسويق الخارجية.', noteThree: 'لا تشمل الأسعار رسوم الجهات الخارجية، مثل مزود WhatsApp وخدمة البريد الإلكتروني ومنصات الإعلانات، ما لم يتم الاتفاق على ذلك بشكل منفصل.', thanks: 'شكراً لثقتكم ودراسة هذا العرض.',
    websiteFeatures: [
      { title: 'كتالوج العقارات', description: 'تجربة تصفح واضحة للعقارات المتاحة، منظمة لتسهيل الوصول السريع إليها.', icon: Building2 },
      { title: 'تفاصيل العقار وPDF', description: 'تتضمن كل عقار بياناته وصوره وبروشور PDF قابل للتحميل والمشاركة بسهولة.', icon: FileText },
      { title: 'استقبال العملاء المحتملين', description: 'نماذج استفسار ودعوات واضحة لاتخاذ إجراء تسهّل وصول العملاء إلى فريق المبيعات.', icon: MousePointerClick },
      { title: 'التكاملات التسويقية', description: 'أتمتة البريد الإلكتروني وWhatsApp API وبيكسلات التسويق مرتبطة بمسار العميل.', icon: MessageCircle },
      { title: 'جاهزية التحليلات', description: 'تتبّع عبر Pixels لقياس أداء الحملات وسلوك الجمهور ومعدلات التحويل.', icon: BarChart3 },
      { title: 'موقع متجاوب', description: 'تجربة احترافية تعمل بسلاسة على الكمبيوتر والتابلت ومتصفحات الموبايل.', icon: Globe2 },
    ] as Feature[],
    dashboardFeatures: ['إدارة محتوى ما يصل إلى ١٠ صفحات بالموقع.', 'إضافة العقارات وتعديلها وأرشفتها.', 'رفع بروشورات العقارات بصيغة PDF وتحديث بياناتها.', 'إدارة الصور والنصوص ودعوات اتخاذ الإجراء وبيانات التواصل.', 'مراجعة الاستفسارات الواردة من مكان مركزي واحد.', 'التحكم في إعدادات Pixel وWhatsApp وأتمتة البريد الإلكتروني.'],
    integrations: [{ icon: Mail, title: 'أتمتة البريد الإلكتروني', description: 'تشغيل رسائل متابعة تلقائية بعد إرسال استفسار من الموقع.' }, { icon: MessageCircle, title: 'WhatsApp API', description: 'إتاحة محادثات مباشرة وسريعة مع العملاء المهتمين بالعقارات.' }, { icon: BarChart3, title: 'تحليلات Pixels', description: 'متابعة أداء الحملات وتحسين الإنفاق التسويقي.' }] as Feature[],
    phaseTwo: [{ title: 'CRM', text: 'مسار متكامل لإدارة العملاء المحتملين ومتابعة كل فرصة من أول استفسار حتى الإغلاق.' }, { title: 'صلاحيات الوسطاء', text: 'صلاحيات حسب الدور للوسطاء وقادة الفريق والمديرين.' }, { title: 'توزيع العملاء المحتملين', text: 'توزيع العملاء ومتابعتهم وقياس نشاط الوسطاء ضمن مسار المبيعات.' }] as PhaseItem[],
  },
};

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  const t = copy[language];
  const isArabic = language === 'ar';
  const DirectionChevron = isArabic ? ChevronLeft : ChevronRight;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800" dir={isArabic ? 'rtl' : 'ltr'}>
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <img src="/logo.png" alt="Penta-k" className="h-10 w-auto object-contain" />
          <div className={isArabic ? 'text-left' : 'text-right'}>
            <button type="button" onClick={() => setLanguage(isArabic ? 'en' : 'ar')} className="mb-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 transition hover:bg-sky-100">
              {isArabic ? 'English' : 'العربية'}
            </button>
            <p className="text-xs font-semibold tracking-[0.14em] text-sky-700">{t.proposal}</p>
            <p className="mt-1 text-sm text-slate-500">{t.date}</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white shadow-2xl md:px-12 md:py-16">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-sky-100"><Sparkles className="h-4 w-4" />{t.platform}</div>
            <p className="mb-3 text-sm font-medium text-sky-300">{t.preparedFor}</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{t.company}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{t.hero}</p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm"><Pill label={t.phaseOne} /><Pill label={t.maxViews} /><Pill label={t.noLogin} /></div>
          </div>
        </section>

        <section className="grid gap-5 py-10 md:grid-cols-2"><Stat label={t.phaseOneInvestment} value="75,000 L.E" /><Stat label={t.websiteViews} value={isArabic ? 'حتى ١٠' : 'Up to 10'} /></section>

        <section className="mb-10 grid gap-8 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:grid-cols-[0.9fr_1.4fr] md:p-10">
          <div className="rounded-2xl bg-sky-50 p-6"><p className="text-sm font-semibold text-sky-700">{t.objective}</p><h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{t.objectiveTitle}</h2><div className="mt-7 space-y-4">{[t.publicWebsite, t.noAuth, t.cmsIncluded].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700"><Check className="h-5 w-5 text-sky-600" />{item}</div>)}</div></div>
          <div className="flex flex-col justify-center"><p className="text-sm font-semibold tracking-[0.14em] text-slate-400">{t.scope}</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{t.scopeTitle}</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">{t.scopeText}</p></div>
        </section>

        <section className="mb-10"><SectionTitle eyebrow={t.websiteEyebrow} title={t.websiteTitle} /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{t.websiteFeatures.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}</div></section>

        <section className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-9"><SectionTitle eyebrow={t.cmsEyebrow} title={t.cmsTitle} compact /><div className="grid gap-3 sm:grid-cols-2">{t.dashboardFeatures.map((item) => <CheckRow key={item} text={item} />)}</div></div>
          <aside className="rounded-[2rem] bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-lg"><div className="w-fit rounded-xl bg-white/15 p-3"><LayoutDashboard className="h-7 w-7" /></div><h3 className="mt-6 text-2xl font-semibold">{t.dashboardTitle}</h3><p className="mt-3 leading-7 text-sky-100">{t.dashboardText}</p><div className="mt-7 border-t border-white/20 pt-5 text-sm text-sky-100">{t.dashboardIncluded}</div></aside>
        </section>

        <section className="mb-10 rounded-[2rem] bg-slate-900 p-7 text-white shadow-xl md:p-10"><SectionTitle dark eyebrow={t.marketingEyebrow} title={t.marketingTitle} /><div className="grid gap-5 md:grid-cols-3">{t.integrations.map((item) => <Integration key={item.title} {...item} />)}</div></section>

        <section className="mb-10"><SectionTitle eyebrow={t.futureEyebrow} title={t.futureTitle} /><div className="grid gap-4 md:grid-cols-3">{t.phaseTwo.map((item, index) => <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><span className="text-sm font-semibold text-sky-600">0{index + 1}</span><h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3><p className="mt-2 leading-7 text-slate-600">{item.text}</p><DirectionChevron className="mt-5 h-5 w-5 text-slate-400" /></article>)}</div></section>

        <section className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10"><SectionTitle eyebrow={t.commercialEyebrow} title={t.commercialTitle} /><div className="grid gap-6 lg:grid-cols-2"><div className="rounded-2xl bg-slate-950 p-7 text-white"><p className="text-sm font-medium text-sky-300">{t.phaseOnePackage}</p><p className="mt-3 text-4xl font-semibold">75,000 <span className="text-xl text-slate-300">L.E</span></p><p className="mt-5 text-sm leading-6 text-slate-300">{t.phaseOneSummary}</p></div><div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7"><p className="text-sm font-medium text-emerald-700">{t.appPackage}</p><p className="mt-3 text-4xl font-semibold text-slate-950">95,000 <span className="text-xl text-slate-500">L.E</span></p><p className="mt-5 text-sm leading-6 text-slate-600">{t.appSummary}</p></div></div><div className="mt-7 grid gap-3 text-sm leading-6 text-slate-600"><Note icon={ShieldCheck} text={t.noteOne} /><Note icon={UsersRound} text={t.noteTwo} /><Note icon={Phone} text={t.noteThree} /></div></section>
      </main>
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500"><p className="font-semibold text-slate-800">Penta-k</p><p className="mt-1">{t.thanks}</p></footer>
    </div>
  );
}

function Pill({ label }: { label: string }) { return <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-slate-100">{label}</span>; }
function Stat({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-medium text-slate-500">{label}</p><p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{value}</p></div>; }
function SectionTitle({ eyebrow, title, compact = false, dark = false }: { eyebrow: string; title: string; compact?: boolean; dark?: boolean }) { return <div className="mb-7"><p className={`text-sm font-semibold tracking-[0.14em] ${dark ? 'text-sky-300' : 'text-sky-700'}`}>{eyebrow}</p><h2 className={`mt-2 font-semibold tracking-tight ${compact ? 'text-2xl' : 'text-3xl'} ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2></div>; }
function FeatureCard({ feature }: { feature: Feature }) { const Icon = feature.icon; return <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"><div className="inline-flex rounded-xl bg-sky-50 p-3 text-sky-700"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-semibold text-slate-950">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p></article>; }
function CheckRow({ text, emerald = false }: { text: string; emerald?: boolean }) { return <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${emerald ? 'text-emerald-600' : 'text-sky-600'}`} />{text}</div>; }
function Integration({ icon: Icon, title, description }: Feature) { return <div className="rounded-2xl border border-white/10 bg-white/5 p-6"><Icon className="h-6 w-6 text-sky-300" /><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{description}</p></div>; }
function Note({ icon: Icon, text }: { icon: IconType; text: string }) { return <div className="flex items-start gap-3"><Icon className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" /><span>{text}</span></div>; }
