import {
  BarChart3,
  BellRing,
  Check,
  ClipboardCheck,
  FileSearch,
  Heart,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  PackagePlus,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  UserRound,
  UsersRound,
} from 'lucide-react';
import { useState } from 'react';

type IconType = React.ComponentType<{ className?: string }>;
type Feature = { title: string; description: string; icon: IconType };
type Phase = { number: string; title: string; text: string };

const copy = {
  ar: {
    label: 'عرض فني ومالي', date: 'أغسطس ٢٠٢٦', platform: 'منصة إعلانات مبوبة رقمية', preparedFor: 'عرض سعر لتطوير', company: 'تطبيق Marketplace',
    hero: 'منصة إلكترونية متكاملة للإعلانات المبوبة تُمكّن المستخدمين من نشر منتجاتهم أو خدماتهم، واستكشاف الإعلانات، والبحث والتواصل الآمن مع البائعين.',
    tags: ['MVP قابل للتوسع', 'تطبيق Android وiOS', 'لوحة تحكم ويب'],
    priceLabel: 'استثمار المشروع', appLabel: 'منصات التطبيق', rolesLabel: 'أدوار الإدارة', price: '80,000 جنيه', appValue: 'Android + iOS', rolesValue: '3 أدوار',
    objectiveEyebrow: 'هدف المشروع', objectiveTitle: 'إطلاق Marketplace سريع وموثوق، يبدأ بالأساسيات الصحيحة وقابل للتوسع لاحقاً.', objectiveText: 'يُبنى المشروع كنسخة أولى MVP تركّز على سهولة الاستخدام، سرعة التطبيق، البحث القوي، نشر الإعلانات والتواصل المباشر بين المشتري والبائع، مع إدارة كاملة للمحتوى والأمان.',
    scopeEyebrow: 'نطاق المرحلة الأولى', scopeTitle: 'تطبيق للمستخدمين ولوحة إدارة مستقلة', scopeItems: ['تطبيق موبايل واحد يعمل على Android وiOS.', 'واجهة عربية RTL كأساس مع دعم اللغة الإنجليزية.', 'Backend وREST API مستقلان وقابلان للتوسع.', 'لوحة تحكم ويب لإدارة المستخدمين والإعلانات والمحتوى.'],
    userEyebrow: 'تجربة المستخدم', userTitle: 'كل ما يحتاجه المستخدم للبيع والشراء',
    listingEyebrow: 'نظام الإعلانات', listingTitle: 'نشر منظم، ومراجعة تحافظ على جودة المحتوى', listingText: 'تدخل الإعلانات الجديدة في حالة انتظار المراجعة، ثم يعتمدها المسؤول قبل نشرها. يدعم النظام بيانات مرنة حسب القسم، حتى تتغير الحقول تلقائياً للسيارات أو الموبايلات أو أي قسم آخر.', listingPoints: ['عنوان، وصف، سعر، حالة المنتج والقسم والقسم الفرعي.', 'حتى ١٠ صور للإعلان مع ترتيب الصور وتحديد الصورة الرئيسية.', 'المحافظة والمدينة والمنطقة، مع إمكانية إضافة الخرائط لاحقاً.', 'حالات الإعلان: انتظار، نشط، مباع، منتهي، مرفوض ومحذوف.'],
    dashboardEyebrow: 'لوحة التحكم', dashboardTitle: 'إدارة شاملة وآمنة للمنصة', dashboardPoints: ['إدارة المستخدمين وتعطيل أو حظر الحسابات عند الحاجة.', 'مراجعة الإعلانات وقبولها أو رفضها مع توضيح السبب.', 'إدارة الأقسام والأقسام الفرعية بشكل ديناميكي.', 'مراجعة البلاغات واتخاذ الإجراء المناسب.', 'إحصائيات للمستخدمين والإعلانات والمشاهدات والبلاغات.', 'صلاحيات Super Admin وModerator وSupport.'],
    securityEyebrow: 'الأمان وجودة البيانات', securityTitle: 'مصمم لحماية المنصة ومستخدميها من البداية', securityPoints: ['تشفير كلمات المرور ومصادقة API وصلاحيات حسب الدور.', 'تفعيل رقم الهاتف عبر OTP مع Rate Limiting.', 'التحقق من كل البيانات والصور وأحجام الملفات المرفوعة.', 'حماية من Spam ومحاولات الوصول غير المصرح بها.', 'Audit Logs للعمليات الإدارية الحساسة.', 'تخزين الصور على Cloud Storage مع ضغط الصور وإنشاء صور مصغّرة.'],
    phasesEyebrow: 'خطة التنفيذ', phasesTitle: 'تطوير منظم من الفكرة إلى الإطلاق',
    investmentEyebrow: 'الاستثمار', investmentTitle: 'سعر تطوير المرحلة الأولى', includedTitle: 'يشمل هذا السعر', included: ['تطبيق Marketplace للمستخدمين على Android وiOS.', 'Backend وREST API وقاعدة بيانات قابلة للتوسع.', 'لوحة تحكم ويب للإدارة.', 'واجهات المستخدم وتجربة الاستخدام للنسخة الأولى.', 'نظام تسجيل الدخول، الإعلانات، البحث، المحادثات، الإشعارات والبلاغات.', 'رفع الصور ومعالجة حالات الإعلانات وإدارة الأقسام.', 'إعدادات الأمان الأساسية والصلاحيات الإدارية.'],
    noteOne: 'المرحلة الأولى لا تشمل بوابات الدفع أو الإعلانات المدفوعة أو الاشتراكات.', noteTwo: 'رسوم الخدمات الخارجية مثل رسائل OTP، الإشعارات، التخزين السحابي وحسابات المتاجر ليست ضمن سعر التطوير.', noteThree: 'المتاجر التجارية، الخرائط، التقييمات، الذكاء الاصطناعي والإعلانات المميزة تُنفذ في مراحل لاحقة.', thanks: 'شكراً لثقتكم ودراسة هذا العرض.',
    features: [
      { title: 'التسجيل والملف الشخصي', description: 'إنشاء حساب وتسجيل دخول واستعادة كلمة المرور وتعديل الملف الشخصي، مع تفعيل رقم الهاتف عبر OTP.', icon: UserRound },
      { title: 'التصفح والأقسام', description: 'أقسام ديناميكية وإعلانات حديثة ومميزة ومقترحة، مع مرونة لإدارة المحتوى من لوحة التحكم.', icon: Store },
      { title: 'البحث والفلاتر', description: 'بحث بالكلمات المفتاحية مع فلترة بالقسم والسعر والموقع وحالة المنتج، وخيارات ترتيب النتائج.', icon: Search },
      { title: 'تفاصيل الإعلان', description: 'صور ووصف وسعر وموقع وبيانات البائع وعدد المشاهدات، مع الإعلانات المشابهة والمشاركة.', icon: FileSearch },
      { title: 'المفضلة', description: 'حفظ الإعلانات ومتابعة حالتها تلقائياً عند البيع أو الحذف أو انتهاء المدة.', icon: Heart },
      { title: 'المحادثات', description: 'محادثة داخلية مرتبطة بالإعلان بين المشتري والبائع، مع الرسائل وحالة القراءة والإشعارات.', icon: MessageCircle },
      { title: 'الإشعارات', description: 'تنبيهات للرسائل وحالة الإعلان وقرارات المراجعة والتنبيهات الإدارية.', icon: BellRing },
      { title: 'البلاغات', description: 'إبلاغ عن الإعلانات المخالفة أو الاحتيال أو المحتوى غير المناسب، مع متابعة من الإدارة.', icon: ClipboardCheck },
    ] as Feature[],
    phases: [
      { number: '01', title: 'التحليل والتصميم', text: 'تحديد المعمارية وقاعدة البيانات والـ API وخطة الأمان، ثم اعتماد واجهات UI/UX.' },
      { number: '02', title: 'تطوير المنصة', text: 'تنفيذ التطبيق والـ Backend ولوحة التحكم مع جميع وظائف النسخة الأولى.' },
      { number: '03', title: 'الاختبار والإطلاق', text: 'اختبار الوظائف والأمان والأداء، ثم تجهيز التطبيق للنشر والتشغيل.' },
    ] as Phase[],
  },
  en: {
    label: 'Technical & Commercial Proposal', date: 'August 2026', platform: 'Digital classified marketplace', preparedFor: 'Development proposal for', company: 'Marketplace Application',
    hero: 'A complete classified marketplace that lets users publish products or services, browse listings, search and communicate securely with sellers.',
    tags: ['Scalable MVP', 'Android & iOS app', 'Web admin dashboard'],
    priceLabel: 'Project investment', appLabel: 'Application platforms', rolesLabel: 'Admin roles', price: '80,000 L.E', appValue: 'Android + iOS', rolesValue: '3 roles',
    objectiveEyebrow: 'Project objective', objectiveTitle: 'Launch a fast, trusted marketplace that starts with the right essentials and can grow over time.', objectiveText: 'The project is delivered as an MVP focused on ease of use, speed, strong search, listing publication and direct buyer-to-seller communication, backed by complete content management and security.',
    scopeEyebrow: 'Phase 1 scope', scopeTitle: 'A user mobile app and a separate admin dashboard', scopeItems: ['One mobile application for both Android and iOS.', 'Arabic RTL as the primary experience, with English support.', 'A separate, scalable backend and REST API.', 'A web dashboard for managing users, listings and content.'],
    userEyebrow: 'User experience', userTitle: 'Everything users need to sell and buy',
    listingEyebrow: 'Listing system', listingTitle: 'Structured publishing with quality-controlled content', listingText: 'New listings enter a pending state for review, then are approved by an administrator before publishing. The system supports flexible data by category, so fields adapt automatically for cars, mobiles or any other category.', listingPoints: ['Title, description, price, condition, category and subcategory.', 'Up to 10 listing images, ordering and a defined main image.', 'Governorate, city and area, with maps available as a future addition.', 'Listing statuses: pending, active, sold, expired, rejected and deleted.'],
    dashboardEyebrow: 'Admin dashboard', dashboardTitle: 'Comprehensive and secure platform control', dashboardPoints: ['Manage users and disable or ban accounts when required.', 'Review listings and approve or reject them with a reason.', 'Manage dynamic categories and subcategories.', 'Review reports and take the appropriate action.', 'Statistics for users, listings, views and reports.', 'Super Admin, Moderator and Support roles.'],
    securityEyebrow: 'Security & data quality', securityTitle: 'Designed to protect the platform and its users from day one', securityPoints: ['Password hashing, API authentication and role-based access.', 'Phone verification through OTP with rate limiting.', 'Validation of all data, images and uploaded file sizes.', 'Protection against spam and unauthorised access attempts.', 'Audit logs for sensitive administrative actions.', 'Cloud image storage with compression and thumbnails.'],
    phasesEyebrow: 'Delivery plan', phasesTitle: 'A structured journey from concept to launch',
    investmentEyebrow: 'Investment', investmentTitle: 'Phase 1 development price', includedTitle: 'This price includes', included: ['Marketplace application for users on Android and iOS.', 'Scalable backend, REST API and database.', 'Web admin dashboard.', 'UI and UX for the first release.', 'Authentication, listings, search, chat, notifications and reports.', 'Image uploading, listing statuses and category management.', 'Core security setup and admin permissions.'],
    noteOne: 'Phase 1 does not include payment gateways, paid listings or subscriptions.', noteTwo: 'Third-party charges such as OTP messages, notifications, cloud storage and store accounts are not included in the development price.', noteThree: 'Business accounts, maps, reviews, AI, promoted listings and advanced monetisation can be added in later phases.', thanks: 'Thank you for considering this proposal.',
    features: [
      { title: 'Authentication & profile', description: 'Registration, login, password recovery and profile editing, with optional OTP phone verification.', icon: UserRound },
      { title: 'Browsing & categories', description: 'Dynamic categories with recent, featured and suggested listings, fully managed from the dashboard.', icon: Store },
      { title: 'Search & filters', description: 'Keyword search with category, price, location and condition filters, plus result sorting.', icon: Search },
      { title: 'Listing details', description: 'Images, description, price, location, seller details, views, sharing and similar listings.', icon: FileSearch },
      { title: 'Favourites', description: 'Save listings and automatically see their updated status when sold, deleted or expired.', icon: Heart },
      { title: 'In-app chat', description: 'Listing-linked conversations between buyer and seller, with messages, read status and notifications.', icon: MessageCircle },
      { title: 'Notifications', description: 'Alerts for messages, listing status, review decisions and administrative announcements.', icon: BellRing },
      { title: 'Reports', description: 'Report fraudulent, inappropriate or prohibited listings for administrative review.', icon: ClipboardCheck },
    ] as Feature[],
    phases: [
      { number: '01', title: 'Analysis & design', text: 'Define the architecture, database, API and security plan, then approve the UI/UX.' },
      { number: '02', title: 'Platform development', text: 'Build the app, backend and dashboard with all agreed MVP functions.' },
      { number: '03', title: 'Testing & launch', text: 'Test functionality, security and performance, then prepare the app for release.' },
    ] as Phase[],
  },
};

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const t = copy[language];
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800" dir={isArabic ? 'rtl' : 'ltr'}>
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <img src="/logo.png" alt="Penta-k" className="h-10 w-auto object-contain" />
          <div className={isArabic ? 'text-left' : 'text-right'}>
            <button type="button" onClick={() => setLanguage(isArabic ? 'en' : 'ar')} className="mb-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 transition hover:bg-sky-100">{isArabic ? 'English' : 'العربية'}</button>
            <p className="text-xs font-semibold tracking-[0.12em] text-sky-700">{t.label}</p>
            <p className="mt-1 text-sm text-slate-500">{t.date}</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white shadow-2xl md:px-12 md:py-16">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative max-w-3xl"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-sky-100"><Sparkles className="h-4 w-4" />{t.platform}</div><p className="mb-3 text-sm font-medium text-sky-300">{t.preparedFor}</p><h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{t.company}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{t.hero}</p><div className="mt-9 flex flex-wrap gap-3 text-sm">{t.tags.map((tag) => <Pill key={tag} label={tag} />)}</div></div>
        </section>

        <section className="grid gap-5 py-10 md:grid-cols-3"><Stat label={t.priceLabel} value={t.price} /><Stat label={t.appLabel} value={t.appValue} /><Stat label={t.rolesLabel} value={t.rolesValue} /></section>

        <section className="mb-10 grid gap-8 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.25fr_0.9fr] md:p-10"><div><Eyebrow text={t.objectiveEyebrow} /><h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{t.objectiveTitle}</h2><p className="mt-5 max-w-2xl leading-8 text-slate-600">{t.objectiveText}</p></div><div className="rounded-2xl bg-sky-50 p-6"><Eyebrow text={t.scopeEyebrow} /><h3 className="mt-2 text-xl font-semibold text-slate-900">{t.scopeTitle}</h3><div className="mt-5 space-y-3">{t.scopeItems.map((item) => <CheckRow key={item} text={item} />)}</div></div></section>

        <section className="mb-10"><SectionTitle eyebrow={t.userEyebrow} title={t.userTitle} /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{t.features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}</div></section>

        <section className="mb-10 grid gap-6 lg:grid-cols-2"><article className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl"><div className="w-fit rounded-xl bg-white/10 p-3"><PackagePlus className="h-7 w-7 text-sky-300" /></div><SectionTitle dark eyebrow={t.listingEyebrow} title={t.listingTitle} /><p className="leading-7 text-slate-300">{t.listingText}</p><div className="mt-6 space-y-3">{t.listingPoints.map((item) => <DarkCheckRow key={item} text={item} />)}</div></article><article className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200"><div className="w-fit rounded-xl bg-sky-50 p-3"><LayoutDashboard className="h-7 w-7 text-sky-700" /></div><SectionTitle eyebrow={t.dashboardEyebrow} title={t.dashboardTitle} /><div className="grid gap-3 sm:grid-cols-2">{t.dashboardPoints.map((item) => <CheckRow key={item} text={item} />)}</div></article></section>

        <section className="mb-10 rounded-[2rem] border border-violet-100 bg-violet-50 p-7 md:p-10"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><div className="w-fit rounded-xl bg-violet-100 p-3"><LockKeyhole className="h-7 w-7 text-violet-700" /></div><SectionTitle eyebrow={t.securityEyebrow} title={t.securityTitle} /></div><div className="grid gap-3 sm:grid-cols-2">{t.securityPoints.map((item) => <CheckRow key={item} text={item} violet />)}</div></div></section>

        <section className="mb-10"><SectionTitle eyebrow={t.phasesEyebrow} title={t.phasesTitle} /><div className="grid gap-4 md:grid-cols-3">{t.phases.map((phase) => <article key={phase.number} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><span className="text-sm font-semibold text-sky-600">{phase.number}</span><h3 className="mt-5 text-xl font-semibold text-slate-950">{phase.title}</h3><p className="mt-2 leading-7 text-slate-600">{phase.text}</p></article>)}</div></section>

        <section className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10"><SectionTitle eyebrow={t.investmentEyebrow} title={t.investmentTitle} /><div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><div className="rounded-2xl bg-slate-950 p-7 text-white"><p className="text-sm font-medium text-sky-300">{t.investmentEyebrow}</p><p className="mt-3 text-4xl font-semibold">80,000 <span className="text-xl text-slate-300">{isArabic ? 'جنيه مصري' : 'L.E'}</span></p><div className="mt-6 flex items-center gap-2 border-t border-white/15 pt-5 text-sm text-slate-300"><Smartphone className="h-5 w-5 text-sky-300" />{t.appValue}</div></div><div><h3 className="mb-4 text-xl font-semibold text-slate-950">{t.includedTitle}</h3><div className="grid gap-3 sm:grid-cols-2">{t.included.map((item) => <CheckRow key={item} text={item} />)}</div></div></div><div className="mt-8 grid gap-3 text-sm leading-6 text-slate-600"><Note icon={ShieldCheck} text={t.noteOne} /><Note icon={UsersRound} text={t.noteTwo} /><Note icon={BarChart3} text={t.noteThree} /></div></section>
      </main>
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500"><p className="font-semibold text-slate-800">Penta-k</p><p className="mt-1">{t.thanks}</p></footer>
    </div>
  );
}

function Eyebrow({ text, dark = false }: { text: string; dark?: boolean }) { return <p className={`text-sm font-semibold tracking-[0.14em] ${dark ? 'text-sky-300' : 'text-sky-700'}`}>{text}</p>; }
function Pill({ label }: { label: string }) { return <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-slate-100">{label}</span>; }
function Stat({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-medium text-slate-500">{label}</p><p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{value}</p></div>; }
function SectionTitle({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) { return <div className="mb-7 mt-6"><Eyebrow text={eyebrow} dark={dark} /><h2 className={`mt-2 text-2xl font-semibold tracking-tight ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2></div>; }
function FeatureCard({ feature }: { feature: Feature }) { const Icon = feature.icon; return <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"><div className="inline-flex rounded-xl bg-sky-50 p-3 text-sky-700"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-semibold text-slate-950">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p></article>; }
function CheckRow({ text, violet = false }: { text: string; violet?: boolean }) { return <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${violet ? 'text-violet-600' : 'text-sky-600'}`} />{text}</div>; }
function DarkCheckRow({ text }: { text: string }) { return <div className="flex items-start gap-3 text-sm leading-6 text-slate-200"><Check className="mt-1 h-4 w-4 shrink-0 text-sky-300" />{text}</div>; }
function Note({ icon: Icon, text }: { icon: IconType; text: string }) { return <div className="flex items-start gap-3"><Icon className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" /><span>{text}</span></div>; }
