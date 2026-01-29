import { 
  FileText, 
  Smartphone, 
  Monitor, 
  Package, 
  DollarSign, 
  Calendar, 
  CheckCircle, 
  Globe, 
  Code, 
  Shield,
  PhoneCall,
  Mail,
  Palette,
  Clock,
  CreditCard,
  Users,
  Settings,
  TrendingUp,
  Award,
  Server,
  Database,
  Zap
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Bubbles Laundry</h1>
              <p className="text-sm text-slate-600">عرض السعر التفصيلي للمشروع</p>
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-blue-600">Penta</div>
              <a href="https://penta-k.com" className="text-sm text-slate-600 hover:text-blue-600">
                penta-k.com
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Company Info Card */}
        <div className="bg-gradient-to-l from-blue-600 to-blue-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">شركة Penta</h2>
              <p className="text-blue-100 text-lg mb-4 leading-relaxed max-w-3xl">
                شركة متخصصة في تصميم وتطوير حلول البرمجيات والتطبيقات الذكية، 
                وتقديم أنظمة متكاملة بجودة عالية وتجربة استخدام احترافية
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <a href="https://penta-k.com" className="hover:underline">penta-k.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  <a href="tel:+201061942646" className="hover:underline" dir="ltr">+20 10 61942646</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">نظرة عامة على المشروع</h2>
          </div>
          <div className="prose prose-slate max-w-none">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              نظام متكامل لإدارة خدمات استلام وتسليم الملابس
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              يشمل النظام أربعة مكونات أساسية لضمان تجربة متكاملة لجميع الأطراف المعنية
            </p>
          </div>
        </div>

        {/* System Components Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Customer App */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">تطبيق العميل</h3>
                <p className="text-sm text-slate-600">Android & iOS</p>
              </div>
            </div>
            <p className="text-slate-600 mb-3">
              تطبيق شامل للعملاء يتيح طلب خدمات الغسيل والتتبع والدفع الإلكتروني
            </p>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-blue-600">المميزات الرئيسية:</span>
              <span> تسجيل دخول، طلب استلام، تتبع الطلبات، دفع إلكتروني، محفظة، اشتراكات</span>
            </div>
          </div>

          {/* Delivery Agent App */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">تطبيق المندوب</h3>
                <p className="text-sm text-slate-600">Android & iOS</p>
              </div>
            </div>
            <p className="text-slate-600 mb-3">
              تطبيق مخصص للمندوبين لاستقبال وتنفيذ طلبات التوصيل
            </p>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-green-600">المميزات الرئيسية:</span>
              <span> استقبال الطلبات، التواصل مع العميل، تحديث الحالة، سجل التوصيلات</span>
            </div>
          </div>

          {/* Admin Dashboard */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Monitor className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">لوحة التحكم المركزية</h3>
                <p className="text-sm text-slate-600">Web + Windows App</p>
              </div>
            </div>
            <p className="text-slate-600 mb-3">
              لوحة تحكم شاملة لإدارة كافة جوانب النظام
            </p>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-purple-600">المميزات الرئيسية:</span>
              <span> إدارة كاملة، تحكم في الأسعار، تقارير مالية، إدارة المستخدمين، الشكاوى</span>
            </div>
          </div>

          {/* Partner Dashboard */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Monitor className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">لوحة المغاسل الشريكة</h3>
                <p className="text-sm text-slate-600">Web Dashboard</p>
              </div>
            </div>
            <p className="text-slate-600 mb-3">
              لوحة تحكم مستقلة لكل مغسلة شريكة
            </p>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-orange-600">المميزات الرئيسية:</span>
              <span> حساب مستقل، تحديد مناطق التغطية، متابعة الطلبات والأرباح</span>
            </div>
          </div>
        </div>

        {/* Detailed Features Sections */}
        {/* Customer App Features */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Smartphone className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">تطبيق العميل - Customer Mobile App</h2>
              <p className="text-sm text-slate-600">Android & iOS</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureItem icon={<Users className="w-5 h-5" />} title="تسجيل / تسجيل دخول" />
            <FeatureItem icon={<Calendar className="w-5 h-5" />} title="طلب استلام وتسليم مع جدولة المواعيد" />
            <FeatureItem icon={<Package className="w-5 h-5" />} title="اختيار نوع الخدمة" />
            <FeatureItem icon={<TrendingUp className="w-5 h-5" />} title="تتبع حالة الطلب والمندوب" />
            <FeatureItem icon={<CreditCard className="w-5 h-5" />} title="الدفع الإلكتروني (Apple Pay)" />
            <FeatureItem icon={<DollarSign className="w-5 h-5" />} title="محفظة إلكترونية" />
            <FeatureItem icon={<Award className="w-5 h-5" />} title="الاشتراكات ومتابعة الرصيد" />
            <FeatureItem icon={<CheckCircle className="w-5 h-5" />} title="كوبونات خصم وعروض" />
            <FeatureItem icon={<FileText className="w-5 h-5" />} title="سجل الطلبات والفواتير" />
            <FeatureItem icon={<PhoneCall className="w-5 h-5" />} title="التواصل مع المندوب" />
            <FeatureItem icon={<Globe className="w-5 h-5" />} title="دعم لغتين (عربي/English)" />
            <FeatureItem icon={<Settings className="w-5 h-5" />} title="نظام شكاوى ودعم فني" />
          </div>
        </div>

        {/* Delivery Agent App Features */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-green-100 rounded-lg">
              <Package className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">تطبيق المندوب - Delivery Agent App</h2>
              <p className="text-sm text-slate-600">Android & iOS</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureItem icon={<Users className="w-5 h-5" />} title="تسجيل واعتماد حساب المندوب" color="green" />
            <FeatureItem icon={<Package className="w-5 h-5" />} title="استقبال وتنفيذ الطلبات" color="green" />
            <FeatureItem icon={<PhoneCall className="w-5 h-5" />} title="التواصل مع العميل (دردشة)" color="green" />
            <FeatureItem icon={<CheckCircle className="w-5 h-5" />} title="تحديث حالة الطلب" color="green" />
            <FeatureItem icon={<FileText className="w-5 h-5" />} title="سجل التوصيلات" color="green" />
            <FeatureItem icon={<DollarSign className="w-5 h-5" />} title="عرض الأرباح" color="green" />
          </div>
        </div>

        {/* Admin Dashboard Features */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Monitor className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">لوحة التحكم المركزية - Central Admin Dashboard</h2>
              <p className="text-sm text-slate-600">Web + Windows App</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureItem icon={<Settings className="w-5 h-5" />} title="إدارة التطبيق بالكامل" color="purple" />
            <FeatureItem icon={<DollarSign className="w-5 h-5" />} title="التحكم الكامل في الأسعار" color="purple" />
            <FeatureItem icon={<Award className="w-5 h-5" />} title="إدارة الاشتراكات" color="purple" />
            <FeatureItem icon={<CheckCircle className="w-5 h-5" />} title="إدارة كوبونات الخصم" color="purple" />
            <FeatureItem icon={<Users className="w-5 h-5" />} title="إدارة العملاء والمندوبين" color="purple" />
            <FeatureItem icon={<TrendingUp className="w-5 h-5" />} title="تقارير مالية وفنية لحظية" color="purple" />
            <FeatureItem icon={<FileText className="w-5 h-5" />} title="نظام عمولات مرن" color="purple" />
            <FeatureItem icon={<Shield className="w-5 h-5" />} title="صلاحيات متعددة" color="purple" />
            <FeatureItem icon={<Package className="w-5 h-5" />} title="Backup تلقائي للبيانات" color="purple" />
          </div>
        </div>

        {/* Partner Dashboard Features */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Monitor className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">لوحة المغاسل الشريكة - Partner Laundry Dashboard</h2>
              <p className="text-sm text-slate-600">Web Dashboard</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureItem icon={<Users className="w-5 h-5" />} title="حساب مستقل لكل مغسلة" color="orange" />
            <FeatureItem icon={<Globe className="w-5 h-5" />} title="تحديد مناطق التغطية" color="orange" />
            <FeatureItem icon={<Package className="w-5 h-5" />} title="استقبال طلبات المناطق المحددة" color="orange" />
            <FeatureItem icon={<TrendingUp className="w-5 h-5" />} title="متابعة عدد الطلبات" color="orange" />
            <FeatureItem icon={<DollarSign className="w-5 h-5" />} title="عرض الأرباح والعمولات" color="orange" />
            <FeatureItem icon={<FileText className="w-5 h-5" />} title="تقارير خاصة" color="orange" />
          </div>
        </div>

        {/* UI/UX Design Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Palette className="w-7 h-7 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">UI / UX Design - التصميم</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5" />
              <span className="text-slate-700">تصميم احترافي مخصص متوافق مع هوية Bubbles Laundry</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5" />
              <span className="text-slate-700">دعم Light Mode & Dark Mode</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5" />
              <span className="text-slate-700">دعم Arabic / English</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5" />
              <span className="text-slate-700">مراعاة ظهور شعار Penta و Bubbles Laundry</span>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-gradient-to-l from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
            <div className="p-3 bg-slate-700 rounded-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Delivery Timeline - خطة التنفيذ والتسليم</h2>
              <p className="text-slate-300">آلية العمل والتسليم المرحلي</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600">
              <h3 className="text-xl font-bold mb-3 text-amber-400">مدة التنفيذ الكاملة</h3>
              <p className="text-3xl font-bold mb-2">2.5 شهر</p>
              <p className="text-slate-300 text-sm">تشمل التصميم، البرمجة، الاختبارات، ورفع التطبيق على المتاجر</p>
            </div>
            
            <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600">
              <h3 className="text-xl font-bold mb-3 text-green-400">التسليم المرحلي</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>تسليم نسخة Android Test (APK) لكل جزء</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>مراجعة كل مرحلة مع العميل</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>تنفيذ التعديلات المطلوبة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-l from-emerald-600 to-emerald-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500">
            <div className="p-3 bg-emerald-500 rounded-lg">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Pricing - التكلفة الإجمالية</h2>
          </div>
          
          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-2">80,000 جنيه</div>
            <div className="text-emerald-100 text-lg">التكلفة الإجمالية للمشروع</div>
          </div>

          <div className="bg-emerald-500/30 rounded-xl p-6 border border-emerald-400">
            <h3 className="text-xl font-bold mb-4">Payment Terms - سياسة الدفع</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">20,000 جنيه</div>
                <div className="text-sm text-emerald-100">دفعة أولى مقدم</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">20,000 جنيه</div>
                <div className="text-sm text-emerald-100">بعد أول شهر</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">20,000 جنيه</div>
                <div className="text-sm text-emerald-100">بعد الشهر الثاني</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">20,000 جنيه</div>
                <div className="text-sm text-emerald-100">عند التسليم النهائي</div>
              </div>
            </div>
          </div>
        </div>

        {/* Free Services Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-green-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Free Services - مميزات مقدمة من شركة Penta</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">سيرفر مجاني</div>
              <div className="text-slate-600 text-sm">لمدة سنة</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">دومين مجاني</div>
              <div className="text-slate-600 text-sm">لمدة سنة</div>
            </div>
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
                <p className="text-sm text-slate-600">يتم رفع التطبيق مجاناً خلال أول سنة على حسابات شركة Penta لتقليل التكلفة المبدئية وضمان الالتزام بسياسات المتاجر</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Code className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Technologies & Development Standards</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Flutter</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>تطوير تطبيقات الموبايل (Android & iOS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>تطوير تطبيقات الديسكتوب (Windows)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>كود موحد (Single Codebase)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">Node.js Backend</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>RESTful APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>بنية قوية وقابلة للتوسع</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>أداء عالي وتأمين البيانات</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-slate-900">Code Quality & Clean Architecture</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>Clean Code منظم</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>Best Practices</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>سهولة الصيانة</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>Code Review</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>حماية من الأعطال</span>
              </div>
            </div>
          </div>
        </div>

        {/* External Costs Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-amber-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-amber-100 rounded-lg">
              <DollarSign className="w-7 h-7 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">External Running Costs - التكاليف الخارجية</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Google Play Console</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1" dir="ltr">$25</div>
              <p className="text-sm text-slate-600">مدى الحياة (دفعة واحدة)</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Apple Developer Account</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1" dir="ltr">$100</div>
              <p className="text-sm text-slate-600">سنوياً</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Google Maps Platform</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1" dir="ltr">$300</div>
              <p className="text-sm text-slate-600">حد مجاني شهرياً</p>
              <p className="text-xs text-slate-500 mt-2">يتطلب حساب Google Console مع Visa دولارية</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Hostinger Private Server</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1" dir="ltr">$96</div>
              <p className="text-sm text-slate-600">سنوياً (سيرفر خاص)</p>
              <p className="text-xs text-green-600 mt-2">مجاني من Penta لأول سنة</p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-bold text-slate-900 mb-2">دعم فني مدفوع (إضافات جديدة)</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-amber-600">5,000 جنيه</span>
              <span className="text-slate-600">شهرياً</span>
            </div>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>20 ساعة عمل مع مبرمج مخصص</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>تنفيذ أي إضافات أو تطويرات حسب الطلب</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Penta Section */}
        <div className="bg-gradient-to-l from-blue-600 to-indigo-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Why Penta? - ليه تختار Penta؟</h2>
            <p className="text-blue-100 text-lg">نحن لا نكتب كود فقط، نبني حلول قابلة للنمو والتطور</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Shield className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">جودة الكود</h3>
              <p className="text-sm text-blue-100">اهتمام حقيقي بجودة الكود وليس مجرد تنفيذ</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <TrendingUp className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">قابلية التوسع</h3>
              <p className="text-sm text-blue-100">تطبيقات قابلة للتوسع والنمو مع عملك</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Clock className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">تسليم منظم</h3>
              <p className="text-sm text-blue-100">تسليم على مراحل مع متابعة مستمرة</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Users className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">سهولة الاستلام</h3>
              <p className="text-sm text-blue-100">سهولة استلام المشروع من أي فريق تقني لاحقاً</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <DollarSign className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">توفير المستقبل</h3>
              <p className="text-sm text-blue-100">كود نظيف = تكلفة أقل في المستقبل</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Award className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">خبرة احترافية</h3>
              <p className="text-sm text-blue-100">فريق متخصص بخبرة عالية</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">للتواصل والاستفسار</h2>
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
              شكراً لثقتكم في <span className="font-bold text-blue-600">Penta</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">
              نتطلع للعمل معكم على مشروع Bubbles Laundry
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}

// Helper Component for Feature Items
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