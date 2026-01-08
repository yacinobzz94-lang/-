
import React, { useState } from 'react';
import { Filter, ChevronDown, LayoutGrid, List, Search, Megaphone, Sparkles, Star, Zap } from 'lucide-react';
import { CATEGORIES, MOCK_SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';

interface ServicesProps {
  onNavigate: (page: string, params?: any) => void;
  initialParams?: any;
}

const Services: React.FC<ServicesProps> = ({ onNavigate, initialParams }) => {
  const [activeCategory, setActiveCategory] = useState(initialParams?.category || 'all');
  const [priceRange, setPriceRange] = useState(10000);

  const filteredServices = activeCategory === 'all' 
    ? MOCK_SERVICES 
    : MOCK_SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-100 py-8 lg:py-12 mb-8">
        <div className="container mx-auto px-4 text-right">
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">سوق الخدمات الجزائرية</h1>
          <p className="text-gray-500 font-medium">تصفح الخدمات التي تناسب ميزانيتك وتدعم الدفع ببريد موب</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            {/* Standard Sidebar Ad */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-orange-100 relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Sparkles className="absolute -left-4 -top-4 w-24 h-24 text-white/10 -rotate-12" />
              <div className="relative z-10 text-right">
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-[10px] font-black mb-4">إعلان مميز</span>
                <h4 className="text-xl font-black mb-3">هل مهاراتك لا تظهر للزبائن؟</h4>
                <p className="text-orange-50 text-sm mb-6 leading-relaxed">فعل ميزة "المستقل الموثوق" الآن واظهر في النتائج الأولى لزيادة مبيعاتك.</p>
                <button className="w-full bg-white text-orange-600 py-3 rounded-xl font-black text-sm hover:scale-[1.02] transition-transform">اكتشف الطريقة</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-right">
              <h3 className="font-bold text-gray-900 mb-6">التصنيفات</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setActiveCategory('all')}
                  className={`w-full text-right px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    activeCategory === 'all' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  الكل
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-right px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      activeCategory === cat.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Injecting an Ad Card at the 3rd position */}
              {filteredServices.map((service, index) => (
                <React.Fragment key={service.id}>
                  {index === 2 && (
                    <div className="bg-blue-600 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg shadow-blue-100 relative overflow-hidden h-full">
                       <div className="absolute -top-4 -left-4 bg-white/10 w-24 h-24 rounded-full blur-2xl"></div>
                       <div className="relative z-10 text-right">
                          <div className="flex items-center gap-2 mb-4">
                            <Zap className="w-4 h-4 text-yellow-300 fill-current" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-100">إعلان ترويجي</span>
                          </div>
                          <h3 className="text-xl font-black mb-4 leading-tight">احصل على استشارة قانونية لمشروعك بـ 1500 دج فقط</h3>
                          <div className="flex items-center gap-2 mb-6 text-sm text-blue-100">
                             <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"><Star className="w-3 h-3 fill-white text-white" /></div>
                             <span>بواسطة الأستاذ محمد (محامي معتمد)</span>
                          </div>
                       </div>
                       <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-black text-sm hover:bg-blue-50 transition-all mt-auto">اطلب الخدمة الآن</button>
                    </div>
                  )}
                  <ServiceCard 
                    service={service} 
                    onClick={(id) => onNavigate('service-detail', { id })}
                  />
                </React.Fragment>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Services;
