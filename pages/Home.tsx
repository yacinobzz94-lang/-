
import React from 'react';
import { ArrowLeft, Smartphone, Megaphone, Sparkles, Zap, Star, ShieldCheck, Users } from 'lucide-react';
import { CATEGORIES, MOCK_SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative bg-[#f0f9ff] pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100/50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-green-100">
                <Smartphone className="w-4 h-4" />
                أول منصة تدعم الدفع بـ BaridiMob في الجزائر
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
                أنجز أعمالك في الجزائر <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-green-500">بنقرة واحدة</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                آلاف المبدعين الجزائريين جاهزون لمساعدتك في بناء مشروعك وتطوير أعمالك بأسعار تبدأ من 1000 دج فقط.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('services')}
                  className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  تصفح الخدمات المحلية
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="bg-white text-gray-700 px-10 py-4 rounded-2xl font-bold text-lg border border-gray-200 hover:bg-gray-50 transition-all">
                  كيف يعمل نقرة؟
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-gray-900">+50,000</span>
                  <span className="text-sm text-gray-500 font-bold">مستقل جزائري</span>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-gray-900">+100,000</span>
                  <span className="text-sm text-gray-500 font-bold">خدمة مكتملة</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-10 -right-10 bg-blue-600 text-white p-6 rounded-[2rem] shadow-xl z-20 animate-bounce">
                <span className="text-sm font-black block">خدمة 5 نجوم</span>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current text-yellow-300" />)}
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
                className="relative z-10 rounded-3xl shadow-2xl border-8 border-white object-cover aspect-video"
                alt="Nakraa Algeria"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-right">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
               <h2 className="text-3xl font-black text-gray-900 mb-2">اكتشف الأقسام</h2>
               <p className="text-gray-500 font-bold">كل ما تحتاجه لتطوير مشروعك في مكان واحد</p>
             </div>
             <button onClick={() => onNavigate('services')} className="text-blue-600 font-black hover:underline">عرض كل التصنيفات</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className="group cursor-pointer text-center p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all shadow-sm"
                onClick={() => onNavigate('services', { category: cat.id })}
              >
                <div className={`${cat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated AD Banner */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden group cursor-pointer shadow-2xl shadow-blue-900/20">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-right">
                <div className="max-w-xl">
                   <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                     <Zap className="w-3 h-3 fill-current" /> عرض حصري لشهر جوان
                   </div>
                   <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                     ارفع مبيعاتك لـ <span className="text-blue-400">10 أضعاف</span> مع خدمة نقرة بلس
                   </h2>
                   <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                     باقة إعلانية متكاملة تشمل تصدر نتائج البحث، النشر في منصات التواصل الاجتماعي الخاصة بنا، وتصميم بانر احترافي لخدمتك.
                   </p>
                   <button className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-xl">
                     اشترك الآن وابدأ بالربح
                   </button>
                </div>
                <div className="relative">
                   <div className="w-64 h-64 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                      <Megaphone className="w-32 h-32 text-blue-400" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-right">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">أحدث الخدمات المحلية</h2>
            <button onClick={() => onNavigate('services')} className="bg-white px-6 py-2 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all">تصفح الجميع</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_SERVICES.slice(0, 8).map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={(id) => onNavigate('service-detail', { id })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-3 gap-12 text-right">
              <div className="space-y-4">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <ShieldCheck className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-black text-gray-900">ضمان كامل لحقوقك</h3>
                 <p className="text-gray-500 leading-relaxed font-medium">نحن نحفظ أموالك حتى تستلم خدمتك بالكامل وبأعلى جودة ترضيك.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                    <Smartphone className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-black text-gray-900">دفع محلي سهل</h3>
                 <p className="text-gray-500 leading-relaxed font-medium">ادفع واستقبل أرباحك بالدينار الجزائري عبر بريد موب دون الحاجة لبطاقات دولية.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                    <Users className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-black text-gray-900">دعم فني جزائري</h3>
                 <p className="text-gray-500 leading-relaxed font-medium">فريق دعم محترف متاح على مدار الساعة لمساعدتك في أي استفسار.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
