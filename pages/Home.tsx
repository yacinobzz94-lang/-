
import React from 'react';
import { ArrowLeft, CheckCircle2, Star, TrendingUp, Users, ShieldCheck } from 'lucide-react';
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
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-100">
                <TrendingUp className="w-4 h-4" />
                أكبر سوق خدمات مصغرة في الوطن العربي
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
                أنجز أعمالك <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-green-500">بنقرة واحدة</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                آلاف المستقلين المبدعين جاهزون لمساعدتك في بناء مشروعك وتطوير أعمالك بأسعار تبدأ من 5 دولار فقط.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('services')}
                  className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  تصفح الخدمات
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="bg-white text-gray-700 px-10 py-4 rounded-2xl font-bold text-lg border border-gray-200 hover:bg-gray-50 transition-all">
                  كيف يعمل الموقع؟
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-4 space-x-reverse">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" />
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">+50k</div>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-gray-900 block">انضم إلينا اليوم</span>
                  <span className="text-gray-500">أكثر من 50,000 مستقل ومشترٍ</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
              <img 
                src="https://picsum.photos/seed/hero/800/600" 
                className="relative z-10 rounded-3xl shadow-2xl border-8 border-white object-cover aspect-video"
              />
              <div className="absolute top-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="block font-black text-gray-900 text-sm">تقييم ممتاز</span>
                  <span className="text-xs text-gray-500">4.9/5 متوسط التقييمات</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-right">
              <h2 className="text-3xl font-black text-gray-900 mb-4">اكتشف التصنيفات</h2>
              <p className="text-gray-500">تصفح مجموعة واسعة من الخدمات الاحترافية</p>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              عرض كل التصنيفات
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className="group cursor-pointer text-center p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all shadow-sm hover:shadow-md"
                onClick={() => onNavigate('services', { category: cat.id })}
              >
                <div className={`${cat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-inner`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm sm:text-base">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-right">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">الخدمات الرائجة</h2>
              <p className="text-gray-500">الأكثر مبيعاً وتقييماً هذا الأسبوع</p>
            </div>
            <button 
              onClick={() => onNavigate('services')}
              className="text-blue-600 font-bold flex items-center gap-2"
            >
              عرض المزيد
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_SERVICES.map(service => (
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
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="grid grid-cols-6 gap-4 transform -rotate-12 scale-150">
            {Array.from({length: 24}).map((_, i) => (
              <div key={i} className="h-40 bg-white/20 rounded-xl"></div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-black mb-16 leading-tight">لماذا يختار الآلاف "نقرة"؟</h2>
            <div className="grid md:grid-cols-3 gap-12 text-right">
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">ضمان وحماية</h4>
                <p className="text-blue-100 leading-relaxed">أموالك في أمان. لا يتم تحويل المبلغ للبائع إلا بعد استلامك للخدمة بنجاح.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">جودة عالية</h4>
                <p className="text-blue-100 leading-relaxed">نخبة من المستقلين المحترفين يخضعون لمراجعات دقيقة لضمان أفضل النتائج.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">دعم متواصل</h4>
                <p className="text-blue-100 leading-relaxed">فريق دعم فني متواجد على مدار الساعة لحل أي مشكلة قد تواجهك.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-l from-green-500 to-blue-600 rounded-[3rem] p-8 lg:p-20 relative overflow-hidden text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">هل أنت مستقل مبدع؟</h2>
              <p className="text-white/80 text-lg mb-10">ابدأ في جني الأرباح من مهاراتك اليوم. انضم إلى أكبر مجتمع للمستقلين العرب.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-lg hover:shadow-xl transition-all">
                  سجل كبائع الآن
                </button>
                <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                  اقرأ قصص النجاح
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
