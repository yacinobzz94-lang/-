
import React, { useState } from 'react';
import { Filter, ChevronDown, LayoutGrid, List, Search } from 'lucide-react';
import { CATEGORIES, MOCK_SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';

interface ServicesProps {
  onNavigate: (page: string, params?: any) => void;
  initialParams?: any;
}

const Services: React.FC<ServicesProps> = ({ onNavigate, initialParams }) => {
  const [activeCategory, setActiveCategory] = useState(initialParams?.category || 'all');
  const [priceRange, setPriceRange] = useState(100);

  const filteredServices = activeCategory === 'all' 
    ? MOCK_SERVICES 
    : MOCK_SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-8 lg:py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="text-right">
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">اكتشف الخدمات</h1>
            <p className="text-gray-500">أكثر من 10,000 خدمة احترافية في انتظارك</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            {/* Category Filter */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center justify-between">
                التصنيف
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </h3>
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

            {/* Price Filter */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6">ميزانية تبدأ من</h3>
              <div className="space-y-4">
                <input 
                  type="range" 
                  min="5" 
                  max="500" 
                  step="5"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs font-bold text-gray-400">
                  <span>500$</span>
                  <span>5$</span>
                </div>
                <div className="text-center font-black text-gray-900">
                  ${priceRange}
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6">التقييم</h3>
              <div className="space-y-3">
                {[5, 4, 3].map(star => (
                  <label key={star} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                      {star} نجوم وأكثر
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div className="relative flex-grow max-w-md">
                <input 
                  type="text" 
                  placeholder="ابحث داخل هذا التصنيف..."
                  className="w-full bg-white border border-gray-200 rounded-2xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
                />
                <Search className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white border border-gray-200 p-1 rounded-xl flex">
                  <button className="p-2 bg-gray-50 text-blue-600 rounded-lg"><LayoutGrid className="w-5 h-5" /></button>
                  <button className="p-2 text-gray-400"><List className="w-5 h-5" /></button>
                </div>
                <select className="bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm font-bold focus:outline-none">
                  <option>الأكثر مبيعاً</option>
                  <option>الأحدث</option>
                  <option>السعر: من الأقل للأعلى</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map(service => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onClick={(id) => onNavigate('service-detail', { id })}
                />
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-16 flex justify-center">
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 text-white font-bold">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">3</button>
                <button className="px-4 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">التالي</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Services;
