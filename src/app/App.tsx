import {
  Award,
  Box,
  CheckCircle,
  Code,
  Database,
  Gift,
  Globe,
  LayoutDashboard,
  Monitor,
  Package,
  PhoneCall,
  Ruler,
  ScanLine,
  Settings,
  Shield,
  ShoppingBag,
  Tags,
  Users,
  WalletCards,
} from 'lucide-react';
import React from 'react';

type IconType = React.ComponentType<{ className?: string }>;

type ModuleInfo = {
  title: string;
  description: string;
  icon: IconType;
  items: string[];
};

type SectionInfo = ModuleInfo & { goal?: string };

type FeatureInfo = {
  icon: React.ReactNode;
  title: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
};

const coreModules: ModuleInfo[] = [
  {
    title: 'الموقع الإلكتروني',
    description: 'موقع احترافي يعرض منتجات الشركاء ويوجه العميل لقرار شراء واثق.',
    icon: Monitor,
    items: [
      'واجهة متجاوبة بالكامل للهواتف والأجهزة المكتبية.',
      'عرض منتجات IKEA وHome Box ضمن تصنيفات واضحة.',
      'بحث وفلاتر ومفضلة وتجربة تصفح سريعة.'
    ]
  },
  {
    title: 'تجهيز تجربة AR',
    description: 'تجهيز وربط الموقع لدعم معاينة الأثاث بالواقع المعزز.',
    icon: ScanLine,
    items: [
      'تجهيز زر معاينة القطعة في المكان عبر الموبايل (AR).',
      'تهيئة مسارات عرض النماذج ثلاثية الأبعاد المتاحة.',
      'ربط المنتج بنموذج 3D عند توفره من الشركة أو الشريك.'
    ]
  },
  {
    title: 'لوحة التحكم',
    description: 'لوحة إدارية لإدارة المحتوى والمنتجات والعروض والنقاط.',
    icon: LayoutDashboard,
    items: [
      'إدارة المنتجات والتصنيفات والصور والموديلات ثلاثية الأبعاد.',
      'إدارة الأسعار والخصومات والعروض الموسمية.',
      'متابعة العملاء والنقاط والكاش باك.'
    ]
  }
];

const websiteSections: SectionInfo[] = [
  {
    title: 'الصفحة الرئيسية',
    icon: Globe,
    items: [
      'تعريف مختصر بالشركة وفكرة معاينة الأثاث قبل الشراء.',
      'إبراز الشراكات مع IKEA وHome Box.',
      'عرض التصنيفات والمنتجات المميزة وأحدث العروض.',
      'دعوات واضحة للتصفح وتجربة المعاينة بالواقع المعزز.'
    ],
    goal: 'بناء الثقة وتحويل الزائر إلى عميل مهتم بالشراء.'
  },
  {
    title: 'كتالوج المنتجات',
    icon: ShoppingBag,
    items: [
      'تصنيفات مثل غرف المعيشة، غرف النوم، المكاتب، الإضاءة والإكسسوارات.',
      'بحث ذكي وفلاتر حسب الفئة، العلامة التجارية، السعر، اللون والخامة.',
      'بطاقات منتج واضحة تشمل الصورة والسعر والخصم وحالة توفر المعاينة ثلاثية الأبعاد.'
    ],
    goal: 'تسهيل اكتشاف القطعة المناسبة بأقل عدد من الخطوات.'
  },
  {
    title: 'تفاصيل المنتج والمقاسات',
    icon: Ruler,
    items: [
      'عرض دقيق للطول والعرض والارتفاع والوزن وأي مقاسات إضافية.',
      'وصف مختصر للخامات المستخدمة: خشب، معدن، قماش وغيرها.',
      'صور متعددة ومعلومات العلامة التجارية والسعر الحالي.',
      'إظهار حالة الخصم وتفاصيل السعر قبل وبعد العرض.'
    ],
    goal: 'مساعدة العميل على التأكد من ملاءمة القطعة لمساحته وديكوره.'
  },
  {
    title: 'تجهيز المعاينة بالواقع المعزز AR',
    icon: ScanLine,
    items: [
      'تجهيز صفحة المنتج لفتح نموذج ثلاثي الأبعاد على الهاتف.',
      'ربط النماذج المتاحة بخدمة أو تطبيق الواقع المعزز.',
      'تهيئة تجربة قابلة للتوسع عند اعتماد النماذج ثلاثية الأبعاد.'
    ],
    goal: 'تجهيز أساس تقني يدعم تجربة معاينة واقعية عند توفير النماذج.'
  },
  {
    title: 'العروض والخصومات',
    icon: Tags,
    items: [
      'صفحة مخصصة لكل المنتجات المخفضة.',
      'إظهار السعر السابق والسعر بعد الخصم ونسبة التوفير.',
      'تصنيفات للعروض لتصل للعميل بسهولة.'
    ],
    goal: 'زيادة الوصول للعروض وتحفيز الشراء.'
  },
  {
    title: 'برنامج الولاء والنقاط',
    icon: Gift,
    items: [
      'احتساب نقاط للعميل عند كل عملية شراء من التطبيق.',
      'عرض رصيد النقاط وسجل عمليات الكسب والاستبدال.',
      'تحويل النقاط إلى كاش باك يستخدم كخصم على عملية شراء لاحقة.',
      'قواعد قابلة للإدارة لتحديد قيمة النقاط وشروط الاستخدام.'
    ],
    goal: 'زيادة عودة العملاء ورفع قيمة المشتريات المتكررة.'
  },
  {
    title: 'حساب العميل والمفضلة',
    icon: Users,
    items: [
      'تسجيل دخول آمن وإدارة بيانات العميل.',
      'حفظ المنتجات المفضلة للرجوع إليها لاحقًا.',
      'متابعة النقاط والكاش باك والعروض ذات الصلة.'
    ],
    goal: 'تجربة شخصية متصلة بالموقع والتطبيق.'
  },
  {
    title: 'صفحات الشركة والدعم',
    icon: Shield,
    items: [
      'من نحن، الشركاء، تواصل معنا، الأسئلة الشائعة.',
      'الشروط والأحكام وسياسة الخصوصية.',
      'روابط تحميل التطبيق وقنوات الدعم.'
    ],
    goal: 'تعزيز مصداقية الشركة وتسهيل التواصل مع العملاء.'
  }
];

const adminFeatures: FeatureInfo[] = [
  { icon: <Package className="w-5 h-5" />, title: 'إضافة وتعديل المنتجات والتصنيفات', color: 'purple' },
  { icon: <Ruler className="w-5 h-5" />, title: 'إدارة المقاسات والخامات والتفاصيل الفنية', color: 'purple' },
  { icon: <ScanLine className="w-5 h-5" />, title: 'ربط الصور والنماذج ثلاثية الأبعاد بالمنتجات', color: 'purple' },
  { icon: <Tags className="w-5 h-5" />, title: 'إنشاء وإدارة العروض والخصومات', color: 'purple' },
  { icon: <WalletCards className="w-5 h-5" />, title: 'إدارة قواعد النقاط والكاش باك', color: 'purple' },
  { icon: <Users className="w-5 h-5" />, title: 'متابعة العملاء وصلاحيات فريق العمل', color: 'purple' }
];

const integrationFeatures: FeatureInfo[] = [
  { icon: <Database className="w-5 h-5" />, title: 'ربط الموقع بقاعدة بيانات المنتجات والعملاء', color: 'blue' },
  { icon: <ShoppingBag className="w-5 h-5" />, title: 'تكامل مرن مع التطبيق الحالي وواجهات API المتاحة', color: 'blue' },
  { icon: <Gift className="w-5 h-5" />, title: 'مزامنة برنامج النقاط والكاش باك بين المنصات', color: 'blue' },
  { icon: <Tags className="w-5 h-5" />, title: 'تحديث الأسعار والعروض من لوحة التحكم', color: 'blue' },
  { icon: <ScanLine className="w-5 h-5" />, title: 'تهيئة روابط وملفات النماذج ثلاثية الأبعاد للـ AR', color: 'blue' },
  { icon: <Settings className="w-5 h-5" />, title: 'بنية قابلة للتوسع لشركاء ومنتجات إضافية', color: 'blue' }
];

const technologies: ModuleInfo[] = [
  { title: 'واجهة الويب', description: 'Next.js / React لتجربة سريعة ومتجاوبة ومحسّنة لمحركات البحث.', icon: Monitor, items: [] },
  { title: 'الخلفية البرمجية', description: 'Node.js وواجهات API آمنة لربط المنتجات والحسابات والنقاط.', icon: Database, items: [] },
  { title: 'تجهيز الواقع المعزز', description: 'تهيئة ملفات 3D وروابط المنتجات لتتكامل مع تجربة AR عند توفر النماذج.', icon: Box, items: [] },
  { title: 'لوحة التحكم', description: 'لوحة إدارية سهلة لإدارة الكتالوج والعروض والمحتوى.', icon: LayoutDashboard, items: [] },
  { title: 'الحماية والصلاحيات', description: 'إدارة آمنة للحسابات والأدوار والبيانات.', icon: Shield, items: [] },
  { title: 'التكاملات', description: 'تهيئة الربط مع التطبيق الحالي ومصادر بيانات الشركاء حسب الواجهات المتاحة.', icon: Code, items: [] }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">عرض سعر منصة الأثاث الذكية</h1>
              <p className="text-sm text-slate-600">تطوير الموقع الإلكتروني وتجربة عرض الأثاث التفاعلية</p>
            </div>
            <img src="/logo.png" alt="Penta-k" className="h-15 shrink-0" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className="bg-gradient-to-l from-indigo-700 to-blue-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-3">وصف عام للمشروع</h2>
          <p className="text-blue-100 text-lg mb-6 leading-relaxed max-w-4xl">
            تطوير موقع إلكتروني احترافي لشركة ناشئة في مجال الأثاث، يتيح للعميل استكشاف منتجات شركاء الشركة مثل
            <span className="font-bold text-white"> IKEA</span> و<span className="font-bold text-white"> Home Box</span>،
            وتجهيز الموقع لمعاينة شكل الأثاث في المنزل عبر الواقع المعزز (AR) عند توفر النماذج ثلاثية الأبعاد.
            الهدف هو رفع ثقة العميل في قرار الشراء وتقليل التردد وطلبات الإرجاع.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Highlight icon={<ShoppingBag className="w-5 h-5" />} text="كتالوج أثاث متكامل" />
            <Highlight icon={<ScanLine className="w-5 h-5" />} text="تجهيز وربط تجربة AR" />
            <Highlight icon={<Gift className="w-5 h-5" />} text="برنامج نقاط وكاش باك" />
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6"><Package className="w-8 h-8 text-blue-600" /><h2 className="text-2xl font-bold text-slate-900">نطاق العمل</h2></div>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            يشمل نطاق المشروع تصميم وتطوير الموقع الإلكتروني ولوحة التحكم، وربطهما بالتطبيق الحالي وبيانات المنتجات
            بحسب الواجهات المتاحة، مع تجهيز وربط تجربة AR للمنتجات والنماذج المتوفرة وبرنامج الولاء. لا يشمل العرض تكلفة الاستضافة أو السيرفرات.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {coreModules.map((module) => <InfoCard key={module.title} module={module} />)}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6"><Globe className="w-8 h-8 text-blue-600" /><h2 className="text-2xl font-bold text-slate-900">أقسام وميزات الموقع الإلكتروني</h2></div>
          <div className="grid md:grid-cols-2 gap-6">
            {websiteSections.map((section) => <InfoCard key={section.title} module={section} />)}
          </div>
        </section>

        <FeatureSection icon={<LayoutDashboard className="w-7 h-7 text-purple-600" />} title="لوحة التحكم والإدارة" subtitle="إدارة كل ما يظهر للعميل من مكان واحد" features={adminFeatures} color="purple" />
        <FeatureSection icon={<Settings className="w-7 h-7 text-blue-600" />} title="الربط والتكامل مع التطبيق" subtitle="تجربة موحدة بين الموقع والتطبيق الحالي" features={integrationFeatures} color="blue" />

        <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6"><Code className="w-8 h-8 text-blue-600" /><h2 className="text-2xl font-bold text-slate-900">التقنيات المقترحة</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech) => <InfoCard key={tech.title} module={tech} compact />)}
          </div>
        </section>

        <section className="bg-gradient-to-l from-emerald-600 to-teal-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-400"><WalletCards className="w-7 h-7" /><h2 className="text-2xl font-bold">السعر الإجمالي للمشروع</h2></div>
          <div className="text-center mb-6">
            <div className="text-5xl sm:text-6xl font-bold mb-2">١٥٠,٠٠٠ جنيه مصري</div>
            <div className="text-emerald-100 text-lg">يشمل تطوير الموقع الإلكتروني ولوحة التحكم والتكاملات الموضحة في نطاق العمل</div>
            <div className="mt-3 inline-flex items-center gap-2 bg-amber-400/20 border border-amber-200/50 rounded-full px-4 py-2 text-amber-50 font-semibold">
              <Shield className="w-4 h-4" /> السعر لا يشمل تكلفة السيرفر أو الاستضافة أو رسوم الخدمات الخارجية.
            </div>
          </div>
          <div className="bg-emerald-500/30 rounded-xl p-6 border border-emerald-400 mb-6">
            <h3 className="text-xl font-bold mb-4">طريقة الدفع</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Payment percent="25%" label="مقدم لبدء العمل" amount="٣٧,٥٠٠ جنيه" />
              <Payment percent="30%" label="بعد اعتماد التصميم وتسليم النسخة الأولية" amount="٤٥,٠٠٠ جنيه" />
              <Payment percent="30%" label="بعد تسليم الموقع ولوحة التحكم" amount="٤٥,٠٠٠ جنيه" />
              <Payment percent="15%" label="بعد الإطلاق والتسليم النهائي" amount="٢٢,٥٠٠ جنيه" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Highlight icon={<CheckCircle className="w-6 h-6" />} text="موقع إلكتروني متكامل" />
            <Highlight icon={<CheckCircle className="w-6 h-6" />} text="لوحة تحكم للمنتجات والعروض" />
            <Highlight icon={<CheckCircle className="w-6 h-6" />} text="نقاط وكاش باك وتجهيز AR" />
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-green-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200"><Award className="w-7 h-7 text-green-600" /><h2 className="text-2xl font-bold text-slate-900">خدمات مجانية ضمن العرض</h2></div>
          <div className="grid md:grid-cols-3 gap-4">
            <FreeService title="دعم فني مجاني" detail="لمدة 3 أشهر بعد الإطلاق" />
            <FreeService title="تدريب فريق الإدارة" detail="على لوحة التحكم وإدارة المحتوى" />
            <FreeService title="تهيئة أولية للمحتوى" detail="لإضافة التصنيفات والمنتجات الأولى" />
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-3">
            <Shield className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-sm text-slate-600"><span className="font-semibold text-slate-700">ملاحظة مهمة:</span> تكلفة السيرفر والاستضافة، ورسوم المتاجر أو خدمات الطرف الثالث، وتجهيز أو إنتاج النماذج ثلاثية الأبعاد غير مشمولة ما لم يتم الاتفاق عليها بشكل منفصل.</p>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">تواصل معنا</h2>
          <div className="flex flex-col items-center gap-4">
            <a href="https://penta-k.com" className="flex items-center gap-3 text-lg text-blue-600 hover:underline font-semibold"><Globe className="w-6 h-6" />penta-k.com</a>
            <a href="tel:+201061942646" dir="ltr" className="flex items-center gap-3 text-lg text-green-600 hover:underline font-semibold"><PhoneCall className="w-6 h-6" />+20 10 61942646</a>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200"><p className="text-slate-600">شكرًا لثقتكم في <span className="font-bold text-blue-600">Penta-k</span></p><p className="text-sm text-slate-500 mt-2">نتطلع لبناء تجربة أثاث رقمية مميزة لعملائكم.</p></div>
        </section>
      </main>
    </div>
  );
}

function InfoCard({ module, compact = false }: { module: SectionInfo; compact?: boolean }) {
  const Icon = module.icon;
  return <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
    <div className="flex items-center gap-3 mb-3"><div className="p-3 bg-white rounded-lg border border-slate-200"><Icon className="w-5 h-5 text-slate-700" /></div><div><h3 className="text-lg font-bold text-slate-900">{module.title}</h3>{!compact && <p className="text-sm text-slate-600">{module.description}</p>}</div></div>
    {compact ? <p className="text-sm text-slate-600">{module.description}</p> : <><ul className="space-y-2 text-sm text-slate-700">{module.items.map((item) => <li key={item} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /><span>{item}</span></li>)}</ul>{module.goal && <p className="text-sm text-slate-600 mt-4"><span className="font-semibold">الهدف:</span> {module.goal}</p>}</>}
  </div>;
}

function FeatureSection({ icon, title, subtitle, features, color }: { icon: React.ReactNode; title: string; subtitle: string; features: FeatureInfo[]; color: 'blue' | 'purple' }) {
  return <section className="bg-white rounded-2xl p-8 mb-8 shadow-lg"><div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200"><div className={`p-3 rounded-lg ${color === 'purple' ? 'bg-purple-100' : 'bg-blue-100'}`}>{icon}</div><div><h2 className="text-2xl font-bold text-slate-900">{title}</h2><p className="text-sm text-slate-600">{subtitle}</p></div></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{features.map((feature) => <FeatureItem key={feature.title} {...feature} />)}</div></section>;
}

function FeatureItem({ icon, title, color = 'blue' }: FeatureInfo) {
  const colorClasses = { blue: 'bg-blue-50 text-blue-600 border-blue-100', green: 'bg-green-50 text-green-600 border-green-100', purple: 'bg-purple-50 text-purple-600 border-purple-100', orange: 'bg-orange-50 text-orange-600 border-orange-100' };
  return <div className={`flex items-start gap-3 p-3 rounded-lg border ${colorClasses[color]}`}><div className="mt-0.5">{icon}</div><span className="text-sm text-slate-700">{title}</span></div>;
}

function Highlight({ icon, text }: { icon: React.ReactNode; text: string }) { return <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 border border-white/20">{icon}<span>{text}</span></div>; }
function Payment({ percent, label, amount }: { percent: string; label: string; amount: string }) { return <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20"><div className="text-2xl font-bold mb-1">{percent}</div><div className="text-sm text-emerald-100 min-h-10">{label}</div><div className="text-sm text-emerald-100 mt-1">{amount}</div></div>; }
function FreeService({ title, detail }: { title: string; detail: string }) { return <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center"><div className="text-green-600 font-bold text-lg mb-1">{title}</div><div className="text-slate-600 text-sm">{detail}</div></div>; }
