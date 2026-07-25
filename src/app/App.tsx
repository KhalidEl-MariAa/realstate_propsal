import {
  Award,
  Bell,
  CheckCircle,
  Code,
  DollarSign,
  FileText,
  Globe,
  Monitor,
  Package,
  PhoneCall,
  Server,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Settings
} from 'lucide-react';
import React from 'react';

type IconType = React.ComponentType<{ className?: string }>;

type ModuleInfo = {
  title: string;
  description: string;
  icon: IconType;
  items: string[];
};

type SectionInfo = {
  title: string;
  icon: IconType;
  items: string[];
  goal?: string;
};

type FeatureInfo = {
  icon: React.ReactNode;
  title: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
};

const coreModules: ModuleInfo[] = [
  {
    title: 'الموقع الإلكتروني',
    description: 'واجهة عقارية احترافية للبحث والبيع والإيجار ونشر الإعلانات.',
    icon: Monitor,
    items: [
      'شريط بحث متقدم وفلاتر سريعة.',
      'شبكة تصنيفات وعقارات مميزة.',
      'روابط سريعة للبيع والإيجار والعروض وطلب العقار.'
    ]
  },
  {
    title: 'تطبيقات الموبايل',
    description: 'تطبيقات Android و iOS بنفس خصائص الموقع.',
    icon: Smartphone,
    items: [
      'تصفح العقارات والبحث والفلاتر.',
      'إضافة الإعلانات وإدارتها بسهولة.',
      'إشعارات بالعروض الجديدة.'
    ]
  },
  {
    title: 'النظام الإداري المالي',
    description: 'نظام داخلي للموظفين لإدارة الرواتب والعمليات المالية.',
    icon: Settings,
    items: [
      'بيانات الموظفين والرواتب.',
      'متابعة الصرف والخصومات.',
      'تقارير مالية وصلاحيات إدارية.'
    ]
  }
];

const websiteSections: SectionInfo[] = [
  {
    title: 'الرئيسية (Home)',
    icon: Globe,
    items: [
      'شريط بحث متقدم باستخدام كود العقار، المدينة، نوع العقار، والكلمات المفتاحية.',
      'فلاتر سريعة لتضييق النتائج بسهولة.',
      'شبكة تصنيفات العقارات مع عدد الإعلانات لكل نوع.',
      'إبراز العقارات المميزة مع المساحة والسعر والموقع على الخريطة.',
      'روابط سريعة إلى بيع، إيجار، العروض، واطلب عقارك.',
      'قسم الثقة والخدمات (جودة الإعلانات، الشفافية، خدمات ما بعد البيع).',
      'فوتر يحتوي على بيانات التواصل، معلومات الشركة، الشروط والأحكام، وسياسة الخصوصية.'
    ],
    goal: 'نقطة الانطلاق التي تعكس قوة المنصة وسهولة استخدامها.'
  },
  {
    title: 'قسم البيع (Sell)',
    icon: DollarSign,
    items: [
      'نموذج إضافة عقار للبيع يشمل نوع العقار، المساحة، السعر، المدينة، والوصف.',
      'رفع الصور والمرفقات.',
      'زر نشر الإعلان.'
    ],
    goal: 'تمكين الملاك والوسطاء من نشر عقاراتهم بسهولة.'
  },
  {
    title: 'قسم الإيجار (Rent)',
    icon: Package,
    items: [
      'عرض قائمة عقارات الإيجار.',
      'فلاتر حسب المدينة، النوع، المساحة، والسعر.',
      'عرض الخريطة لتحديد مواقع العقارات.'
    ],
    goal: 'تسهيل وصول الباحثين عن الإيجار للعقارات المناسبة.'
  },
  {
    title: 'اطلب عقارك (Request Your Property)',
    icon: FileText,
    items: [
      'نموذج يحدد نوع العقار، المساحة المطلوبة، الميزانية، والمدينة.',
      'إرسال الطلب مباشرة للإدارة أو الوسطاء.'
    ],
    goal: 'مطابقة الطلبات مع العروض المناسبة بسرعة.'
  },
  {
    title: 'العروض العقارية (Property Offers)',
    icon: TrendingUp,
    items: [
      'يتصفح المستخدم جميع العروض المطروحة لدى الشركة.',
      'تصنيفات العروض: الكل، فلل، أرض، محلات تجارية، أراضي زراعية، شاليهات، دبلكسات، استراحات، وحدات، شقق.',
      'تصنيفات إضافية: مخططات، دورين، مزرعة، عمائر (تجارية وسكني)، صالات، مستودعات، قصور، ورش صناعية.',
      'تصنيفات إضافية: فندق، حوش، منتجع، محطة، مركز صيانة، دور وشقتين، أدوار.',
      'تصنيف العقار حسب النوع: الكل، بيع، إيجار، بيع تجاري، إيجار تجاري.'
    ],
    goal: 'زيادة التفاعل وتحفيز الشراء.'
  },
  {
    title: 'تعرف علينا (About Us)',
    icon: Users,
    items: [
      'رسالة الشركة: الشفافية، الجودة، رضا العميل.',
      'الخدمات: صيانة، تشطيب، استشارات.',
      'رؤية الشركة المستقبلية.'
    ],
    goal: 'بناء مصداقية قوية للعلامة التجارية.'
  },
  {
    title: 'اتصل بنا (Contact Us)',
    icon: PhoneCall,
    items: [
      'رقم الهاتف، البريد الإلكتروني، والموقع.',
      'نموذج تواصل مباشر.'
    ],
    goal: 'تسهيل التواصل والدعم.'
  },
  {
    title: 'تسجيل الدخول (Login)',
    icon: Shield,
    items: [
      'تسجيل الدخول بالإيميل أو اسم المستخدم.',
      'كلمة مرور.',
      'رابط نسيت كلمة المرور.'
    ],
    goal: 'إدارة الإعلانات والمفضلة والطلبات.'
  },
  {
    title: 'إضافة إعلان (Add Listing)',
    icon: Monitor,
    items: [
      'نموذج تدريجي خطوة بخطوة.',
      'رفع الصور.',
      'معاينة الإعلان قبل النشر.'
    ],
    goal: 'تجربة نشر سهلة واحترافية.'
  },
  {
    title: 'الصفحات القانونية والخدمية',
    icon: FileText,
    items: [
      'الشروط والأحكام.',
      'سياسة الخصوصية.',
      'أداة مقارنة العقارات.',
      'صفحة تحميل التطبيق.'
    ],
    goal: 'الامتثال القانوني وتحسين تجربة المستخدم.'
  }
];

const internalSystemFeatures: FeatureInfo[] = [
  { icon: <Users className="w-5 h-5" />, title: 'لوحة داخلية لموظفي الشركة', color: 'purple' },
  { icon: <DollarSign className="w-5 h-5" />, title: 'تسجيل الأموال المدفوعة من العملاء', color: 'purple' },
  { icon: <FileText className="w-5 h-5" />, title: 'تسجيل الأموال لكل قسم وإدارة العمليات', color: 'purple' },
  { icon: <CheckCircle className="w-5 h-5" />, title: 'متابعة المدفوعات وحالاتها', color: 'purple' },
  { icon: <Shield className="w-5 h-5" />, title: 'صلاحيات وصول محددة حسب الموظف', color: 'purple' },
  { icon: <Settings className="w-5 h-5" />, title: 'تقارير مالية داخلية للإدارة', color: 'purple' }
];

const mobileAppFeatures: FeatureInfo[] = [
  { icon: <Globe className="w-5 h-5" />, title: 'تصفح العقارات كما في الموقع', color: 'blue' },
  { icon: <CheckCircle className="w-5 h-5" />, title: 'بحث متقدم وفلاتر سريعة', color: 'blue' },
  { icon: <FileText className="w-5 h-5" />, title: 'إضافة الإعلانات ومعاينتها قبل النشر', color: 'blue' },
  { icon: <Users className="w-5 h-5" />, title: 'إدارة الحساب والمفضلة والطلبات', color: 'blue' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'إشعارات بالعروض الجديدة', color: 'blue' },
  { icon: <Smartphone className="w-5 h-5" />, title: 'تطبيقات Android و iOS', color: 'blue' }
];

const technologies: ModuleInfo[] = [
  {
    title: 'واجهة الويب',
    description: 'Next.js بلغة JavaScript.',
    icon: Monitor,
    items: []
  },
  {
    title: 'الخلفية البرمجية',
    description: 'Node.js للـ Backend وواجهات الـ API.',
    icon: Server,
    items: []
  },
  {
    title: 'تطبيقات الموبايل',
    description: 'Flutter لتطبيقات Android و iOS.',
    icon: Smartphone,
    items: []
  },
  {
    title: 'الاستضافة والنسخ الاحتياطي',
    description: 'Hostinger مع نسخ احتياطي دوري.',
    icon: Shield,
    items: []
  },
  {
    title: 'نسخ احتياطي أوتوماتيك',
    description: 'خدمة Backup أوتوماتيك أعلى أمان باشتراك 2 دولار.',
    icon: FileText,
    items: []
  },
  {
    title: 'نسخة احتياطية للادمن',
    description: 'إمكانية أخذ نسخة احتياطية على هاتف الادمن عند الحاجة.',
    icon: FileText,
    items: []
  },
  {
    title: 'الإشعارات والتوزيع',
    description: 'Firebase للإشعارات والتوزيع.',
    icon: Bell,
    items: []
  }
];

const futureSections: SectionInfo[] = [
  {
    title: 'التمويل العقاري',
    icon: DollarSign,
    items: [
      'قسم مخصص لخدمات التمويل العقاري.',
      'سيتم تحديد التفاصيل الوظيفية والتنفيذية لاحقًا من قبل الأستاذ كريم.'
    ]
  }
];

const serviceSections: SectionInfo[] = [
  {
    title: 'قسم المقاولات',
    icon: Package,
    items: [
      'قسم لتقديم خدمة البناء.',
      'سيتم الاتفاق على التفاصيل لاحقًا مع الأستاذ كريم.'
    ]
  },
  {
    title: 'إدارة الأملاك',
    icon: Shield,
    items: [
      'تقديم خدمة إدارة العقار عبر تأجيره للعملاء.',
      'تحصيل الإيجارات وتسليمها للمالك دون أي احتكاك بالمستأجرين.',
      'خدمة متكاملة لتخفيف عبء الإدارة عن المالك.'
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">عرض سعر منصة ركان للعقارات</h1>
              <p className="text-sm text-slate-600">عرض السعر التفصيلي للمشروع</p>
            </div>
            <div className="text-left inline-flex items-center">
              <img src="/logo.png" alt="Project Logo" className="h-15 inline-block" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-l from-blue-600 to-blue-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">وصف عام لمنصة ركان للعقارات</h2>
              <p className="text-blue-100 text-lg mb-4 leading-relaxed max-w-3xl">
                منصة ركان للعقارات (موقع إلكتروني + تطبيقات موبايل) تهدف إلى تسهيل عمليات البيع، الإيجار،
                البحث، ونشر العقارات، مع واجهة سهلة الاستخدام وتجربة مستخدم احترافية، إضافة إلى نظام إداري
                داخلي لإدارة موظفي الشركة ماليًا.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 border border-white/20">
                  <Monitor className="w-5 h-5" />
                  <span>موقع إلكتروني احترافي</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 border border-white/20">
                  <Smartphone className="w-5 h-5" />
                  <span>تطبيقات Android و iOS</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 border border-white/20">
                  <Settings className="w-5 h-5" />
                  <span>لوحة التحكم الداخلية</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">نطاق العمل</h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            يشمل نطاق المشروع تطوير موقع إلكتروني عقاري شامل مع لوحة إدارة، وتطبيقات موبايل متكاملة، ونظام
            إداري داخلي خاص بالشركة لإدارة الموظفين ماليًا، مع قابلية التوسع لإضافة أقسام جديدة لاحقًا.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {coreModules.map((module) => {
              const Icon = module.icon;
              return (
                <div key={module.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{module.title}</h3>
                      <p className="text-sm text-slate-600">{module.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {module.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">أقسام وميزات الموقع الإلكتروني</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {websiteSections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {section.goal ? (
                    <p className="text-sm text-slate-600 mt-4">
                      <span className="font-semibold">الهدف:</span> {section.goal}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Settings className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">لوحة إدارة المدفوعات المالية</h2>
              <p className="text-sm text-slate-600">داش بورد داخلية لتسجيل الأموال المدفوعة من العملاء</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalSystemFeatures.map((feature) => (
              <FeatureItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                color={feature.color}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Smartphone className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">تطبيقات الموبايل (Android & iOS)</h2>
              <p className="text-sm text-slate-600">نفس خصائص الموقع مع تجربة استخدام سلسة عبر الهواتف</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobileAppFeatures.map((feature) => (
              <FeatureItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                color={feature.color}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">التقنيات المستخدمة</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{tech.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-8 h-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">خدمات إضافية</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {serviceSections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white rounded-lg border border-amber-200">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-8 h-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">أقسام جديدة (تطوير لاحقًا)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {futureSections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white rounded-lg border border-amber-200">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-l from-emerald-600 to-emerald-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500">
            <div className="p-3 bg-emerald-500 rounded-lg">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">السعر الإجمالي للمشروع</h2>
          </div>
          <div className="text-center mb-6">
            <div className="text-6xl font-bold mb-2">13,000 ريال سعودي</div>
            <div className="text-emerald-100 text-lg">
              يشمل الموقع الإلكتروني وتطبيقات Android و iOS والنظام الإداري المالي
            </div>
            <div className="text-emerald-100 text-sm mt-2">
              السعر الإجمالي يشمل باقة السيرفرات الخاصة لشركة العقارات بقيمة 1,200 ريال سعودي.
            </div>
          </div>
          <div className="bg-emerald-500/30 rounded-xl p-6 border border-emerald-400 mb-6">
            <h3 className="text-xl font-bold mb-4">طريقة الدفع</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">25%</div>
                <div className="text-sm text-emerald-100">مقدم</div>
                <div className="text-sm text-emerald-100 mt-1">3,125 ريال سعودي</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">30%</div>
                <div className="text-sm text-emerald-100">بعد تسليم الموقع الإلكتروني</div>
                <div className="text-sm text-emerald-100 mt-1">3,750 ريال سعودي</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">30%</div>
                <div className="text-sm text-emerald-100">بعد تسليم تطبيقات Android و iOS</div>
                <div className="text-sm text-emerald-100 mt-1">3,750 ريال سعودي</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">15%</div>
                <div className="text-sm text-emerald-100">بعد إطلاق التطبيقات وتدريب الموظفين</div>
                <div className="text-sm text-emerald-100 mt-1">2,375 ريال سعودي</div>
              </div>
            </div>
          </div>
          <div className="bg-emerald-500/30 rounded-xl p-6 border border-emerald-400 mb-6">
            <h3 className="text-xl font-bold mb-4">اشتراكات وتشغيل</h3>
            <div className="space-y-4 text-sm text-emerald-100">
              <div>
                <div className="font-semibold mb-2">باقة السيرفرات الخاصة (مدرجة في السعر 12,500)</div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                    <span>إجمالي باقة السيرفرات الخاصة: 1,200 ريال.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                    <span>سيرفر خاص للشركة: 700 ريال (يشمل المتابعة والدعم الفني).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                    <span>منصة Google Play: 94 ريال دفع مرة واحدة مدى الحياة.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                    <span>منصة Apple iOS: 380 ريال سنويًا.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                    <span>خدمة Backup أوتوماتيك أعلى أمان: اشتراك 2 دولار.</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">في حالة الاشتراك على سيرفرات شركتنا</div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                    <span>إجمالي الباقة يصبح 900 ريال بدلًا من 1,200 ريال.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                    <span>اشتراك السيرفر لدينا: 400 ريال (ضمن الباقة).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                    <span>منصة Google Play: 94 ريال دفع مرة واحدة مدى الحياة.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                    <span>منصة Apple iOS: 380 ريال سنويًا.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                    <span>خدمة Backup أوتوماتيك أعلى أمان: اشتراك 2 دولار.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-500/30 rounded-xl p-4 border border-emerald-400 text-center">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-white" />
              <div className="font-semibold">موقع إلكتروني متكامل</div>
            </div>
            <div className="bg-emerald-500/30 rounded-xl p-4 border border-emerald-400 text-center">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-white" />
              <div className="font-semibold">تطبيقات Android و iOS</div>
            </div>
            <div className="bg-emerald-500/30 rounded-xl p-4 border border-emerald-400 text-center">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-white" />
              <div className="font-semibold">لوحة التحكم الداخلية</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-green-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Free Services - مميزات مجانية ضمن العرض</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">دعم فني مجاني</div>
              <div className="text-slate-600 text-sm">لمدة سنة</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">رفع على المتاجر</div>
              <div className="text-slate-600 text-sm">مجاناً خلال أول سنة</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <p className="text-slate-700 font-semibold mb-1">سياسة حسابات النشر (Google & Apple)</p>
                <p className="text-sm text-slate-600">
                  يتم رفع التطبيق مجاناً خلال أول سنة على حسابات الشركة لتقليل التكلفة المبدئية وضمان
                  الالتزام بسياسات المتاجر.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">تواصل معنا</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 text-lg">
              <Globe className="w-6 h-6 text-blue-600" />
              <a href="https://penta-k.com" className="text-blue-600 hover:underline font-semibold">
                penta-k.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg" dir="ltr">
              <PhoneCall className="w-6 h-6 text-green-600" />
              <a href="tel:+201061942646" className="text-green-600 hover:underline font-semibold">
                +20 10 61942646
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-slate-600">
              شكرًا لثقتكم في <span className="font-bold text-blue-600">Penta-k</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">نتطلع للعمل معكم على هذا المشروع العقاري.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureItem({ icon, title, color = 'blue' }: { icon: React.ReactNode; title: string; color?: string }) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100'
  };

  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg border ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="mt-0.5">{icon}</div>
      <span className="text-sm text-slate-700">{title}</span>
    </div>
  );
}
