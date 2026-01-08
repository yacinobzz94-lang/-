
import React, { useState } from 'react';
import { Star, Shield, Clock, RotateCcw, MessageCircle, ShoppingCart, Share2, Flag, CheckCircle, Smartphone, CreditCard } from 'lucide-react';
import { MOCK_SERVICES, MOCK_REVIEWS } from '../constants';
import { Service } from '../types';

interface ServiceDetailProps {
  onNavigate: (page: string, params?: any) => void;
  params?: { id: string };
}

const CheckCircleIcon = () => <CheckCircle className="w-5 h-5 text-green-500" />;

const SellerWidget: React.FC<{ service: Service }> = ({ service }) => (
  <div className="text-right">
    <div className="flex items-center gap-4 mb-6">
      <img src={service.seller.avatar} className="w-16 h-16 rounded-2xl border-2 border-blue-50" />
      <div>
        <h4 className="text-lg font-bold text-gray-900">{service.seller.name}</h4>
        <span className="text-sm text-blue-600 font-bold">{service.seller.level}</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
      <div className="bg-gray-50 p-3 rounded-xl">
        <span className="block text-gray-400 mb-1">سرعة الرد</span>
        <span className="font-bold">ساعة واحدة</span>
      </div>
      <div className="bg-gray-50 p-3 rounded-xl">
        <span className="block text-gray-400 mb-1">آخر تواجد</span>
        <span className="font-bold text-green-600">متصل الآن</span>
      </div>
    </div>
    <button className="w-full py-3 border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
      <MessageCircle className="w-5 h-5" />
      تواصل مع البائع
    </button>
  </div>
);

const ServiceDetail: React.FC<ServiceDetailProps> = ({ onNavigate, params }) => {
  const service = MOCK_SERVICES.find(s => s.id === params?.id) || MOCK_SERVICES[0];
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-8 lg:pt-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600">الرئيسية</button>
          <span>/</span>
          <button onClick={() => onNavigate('services', { category: service.category })} className="hover:text-blue-600">
             {service.category === 'design' ? 'تصميم جرافيك' : 'خدمات أخرى'}
          </button>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate">{service.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
              <div className="p-6 sm:p-10">
                <div className="flex justify-between items-start mb-6">
                  <h1 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight">
                    {service.title}
                  </h1>
                </div>
                
                <div className="aspect-video rounded-3xl overflow-hidden mb-8 bg-gray-100">
                  <img src={service.imageUrl} className="w-full h-full object-cover" alt={service.title} />
                </div>

                <div className="space-y-10">
                  <section>
                    <h3 className="text-xl font-bold text-gray-900 border-r-4 border-blue-600 pr-4 mb-6">وصف الخدمة</h3>
                    <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
                      <p>{service.description}</p>
                      <ul className="space-y-3">
                        <li className="flex gap-2 items-start"><CheckCircleIcon /> خدمة احترافية مقدمة من مستقل جزائري.</li>
                        <li className="flex gap-2 items-start"><CheckCircleIcon /> الدفع آمن بالدينار الجزائري عبر بريد موب.</li>
                        <li className="flex gap-2 items-start"><CheckCircleIcon /> إمكانية التعديل حتى نيل رضاكم التام.</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">آراء المشترين في الجزائر</h3>
              {MOCK_REVIEWS.map(review => (
                <div key={review.id} className="border-b border-gray-50 last:border-0 pb-8 last:pb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <img src={review.userAvatar} className="w-12 h-12 rounded-full" />
                      <div className="text-right">
                        <h4 className="font-bold text-gray-800">{review.userName}</h4>
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({length: 5}).map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-right">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 sticky top-24">
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-500 font-bold">سعر الخدمة</span>
                <span className="text-3xl font-black text-green-600">{service.price} دج</span>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 mb-8">
                <div className="flex items-center gap-3 text-yellow-800 font-bold text-sm mb-2">
                  <Smartphone className="w-5 h-5" />
                  دفع بريد موب (BaridiMob)
                </div>
                <p className="text-xs text-yellow-700 leading-relaxed">
                  يمكنك الدفع مباشرة عبر تحويل بريد موب للحصول على الخدمة فوراً.
                </p>
              </div>

              <button 
                onClick={() => setShowPaymentModal(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-blue-100 mb-4"
              >
                اشتري الخدمة الآن
              </button>
              
              <div className="text-center">
                <span className="text-xs text-gray-400 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  ضمان نقرة لحماية المشتري
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
               <SellerWidget service={service} />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal Placeholder */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
           <div className="bg-white rounded-[2.5rem] max-w-md w-full p-8 shadow-2xl animate-in zoom-in-95 duration-300">
              <div className="text-center mb-8">
                 <div className="w-20 h-20 bg-yellow-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-yellow-600">
                    <Smartphone className="w-10 h-10" />
                 </div>
                 <h3 className="text-2xl font-black text-gray-900 mb-2">الدفع عبر بريد موب</h3>
                 <p className="text-gray-500 font-medium">قم بإرسال مبلغ <span className="text-blue-600 font-bold">{service.price} دج</span> إلى الحساب التالي:</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8 text-center">
                 <span className="block text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold">رقم الحساب (RIP)</span>
                 <span className="text-xl font-black text-gray-800 select-all">00799999000012345678</span>
              </div>

              <div className="space-y-4">
                 <div className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold">1</div>
                    <p>افتح تطبيق <span className="font-bold">BaridiMob</span> على هاتفك.</p>
                 </div>
                 <div className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold">2</div>
                    <p>قم بإجراء تحويل بالمبلغ المذكور أعلاه.</p>
                 </div>
                 <div className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold">3</div>
                    <p>أرفق صورة من وصل التحويل في الرسالة القادمة.</p>
                 </div>
              </div>

              <button 
                onClick={() => setShowPaymentModal(false)}
                className="w-full bg-green-600 text-white py-4 rounded-2xl font-black mt-10 hover:bg-green-700 transition-all"
              >
                لقد قمت بالتحويل، أرسل الوصل
              </button>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="w-full text-gray-400 font-bold py-3 mt-2 hover:text-gray-600 transition-all"
              >
                إلغاء العملية
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
