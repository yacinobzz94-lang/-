
import React from 'react';
import { Star, Shield, Clock, RotateCcw, MessageCircle, ShoppingCart, Share2, Flag, CheckCircle } from 'lucide-react';
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
                  <div className="flex gap-2">
                     <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full"><Share2 className="w-5 h-5" /></button>
                     <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full"><Flag className="w-5 h-5" /></button>
                  </div>
                </div>
                
                <div className="aspect-video rounded-3xl overflow-hidden mb-8 bg-gray-100">
                  <img src={service.imageUrl} className="w-full h-full object-cover" alt={service.title} />
                </div>

                <div className="space-y-10">
                  <section>
                    <h3 className="text-xl font-bold text-gray-900 border-r-4 border-blue-600 pr-4 mb-6">وصف الخدمة</h3>
                    <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
                      <p>{service.description}</p>
                      <p>أهلاً بك! في هذه الخدمة سأقوم بتقديم حلول احترافية تلبي تطلعاتك. أهتم جداً بالتفاصيل والجودة لضمان رضاك التام.</p>
                      <ul className="space-y-3">
                        <li className="flex gap-2 items-start"><CheckCircleIcon /> تنفيذ العمل بأعلى معايير الجودة العالمية.</li>
                        <li className="flex gap-2 items-start"><CheckCircleIcon /> التواصل المستمر لمتابعة مراحل التنفيذ لحظة بلحظة.</li>
                        <li className="flex gap-2 items-start"><CheckCircleIcon /> تسليم الملفات المصدرية بكافة الصيغ المطلوبة.</li>
                        <li className="flex gap-2 items-start"><CheckCircleIcon /> إمكانية التعديل حتى الرضا التام بنسبة 100%.</li>
                      </ul>
                    </div>
                  </section>
                </div>

                <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6" />
                    </div>
                    <span className="block text-xs text-gray-400 mb-1">وقت التسليم</span>
                    <span className="font-bold text-gray-800">3 أيام</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <RotateCcw className="w-6 h-6" />
                    </div>
                    <span className="block text-xs text-gray-400 mb-1">التعديلات</span>
                    <span className="font-bold text-gray-800">لا نهائي</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6" />
                    </div>
                    <span className="block text-xs text-gray-400 mb-1">ضمان</span>
                    <span className="font-bold text-gray-800">مضمون 100%</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <ShoppingCart className="w-6 h-6" />
                    </div>
                    <span className="block text-xs text-gray-400 mb-1">عدد الطلبات</span>
                    <span className="font-bold text-gray-800">25 طلب</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Info (Mobile) */}
            <div className="lg:hidden bg-white rounded-3xl p-8 mb-8 shadow-sm border border-gray-100">
               <SellerWidget service={service} />
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                آراء المشترين 
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-500 font-medium">({MOCK_REVIEWS.length})</span>
              </h3>
              
              <div className="space-y-8">
                {MOCK_REVIEWS.map(review => (
                  <div key={review.id} className="border-b border-gray-50 last:border-0 pb-8 last:pb-0">
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
                    <p className="text-gray-600 leading-relaxed pr-16 text-right">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 sticky top-24">
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-500 font-bold">سعر الخدمة</span>
                <span className="text-4xl font-black text-green-600">${service.price}</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <CheckCircleIcon />
                  <span>دقة في المواعيد والتسليم</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <CheckCircleIcon />
                  <span>تسليم الملفات بكافة الصيغ</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <CheckCircleIcon />
                  <span>دعم فني بعد البيع</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-blue-100 mb-4">
                اشتري الخدمة الآن
              </button>
              
              <div className="text-center">
                <span className="text-xs text-gray-400 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  مدفوعات آمنة 100% عبر نقرة
                </span>
              </div>
            </div>

            <div className="hidden lg:block bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
               <SellerWidget service={service} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
