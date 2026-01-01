
import React from 'react';
import { MOCK_SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { Star, MapPin, Calendar, CheckCircle, Package, User, Edit } from 'lucide-react';

interface ProfileProps {
  onNavigate: (page: string, params?: any) => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  const userServices = MOCK_SERVICES.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-l from-blue-600 to-green-500"></div>
              <div className="relative z-10">
                <div className="relative inline-block mb-6">
                  <img src="https://i.pravatar.cc/150?u=me" className="w-32 h-32 rounded-[2rem] border-4 border-white shadow-lg mx-auto" />
                  <button className="absolute bottom-0 right-0 bg-white p-2 rounded-xl shadow-md border border-gray-100 text-gray-500 hover:text-blue-600">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-1">أحمد محمد</h2>
                <span className="text-blue-600 font-bold block mb-6">بائع محترف (مستوى 2)</span>
                
                <div className="flex justify-center gap-4 mb-8">
                   <div className="flex items-center gap-1 text-yellow-500 font-bold"><Star className="w-4 h-4 fill-current" /> 5.0</div>
                   <div className="text-gray-400">|</div>
                   <div className="text-gray-600 font-medium">124 تقييم</div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-8">
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block mb-1">منذ</span>
                    <span className="font-bold text-gray-800 flex items-center gap-2"><Calendar className="w-4 h-4" /> 2021</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block mb-1">الدولة</span>
                    <span className="font-bold text-gray-800 flex items-center gap-2"><MapPin className="w-4 h-4" /> مصر</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8">
               <h3 className="text-lg font-bold mb-6 border-r-4 border-blue-600 pr-4">نبذة عني</h3>
               <p className="text-gray-600 leading-relaxed">
                 مصمم جرافيك ومطور واجهات بخبرة تزيد عن 5 سنوات. أسعى دائماً لتقديم أفضل جودة ممكنة لعملائي. تخصصي يشمل بناء الهويات البصرية وتصميم المواقع المتوافقة مع كافة الشاشات.
               </p>
            </div>
          </aside>

          {/* Main Profile Content */}
          <main className="lg:w-2/3 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'طلبات مكتملة', value: '89', icon: <CheckCircle className="w-6 h-6 text-green-500" />, bg: 'bg-green-50' },
                { label: 'طلبات جارية', value: '4', icon: <Package className="w-6 h-6 text-blue-500" />, bg: 'bg-blue-50' },
                { label: 'متوسط الرد', value: 'ساعتين', icon: <User className="w-6 h-6 text-purple-500" />, bg: 'bg-purple-50' },
              ].map((stat, i) => (
                <div key={i} className={`${stat.bg} p-8 rounded-[2rem] border border-white flex items-center justify-between`}>
                  <div>
                    <span className="text-gray-500 font-medium block mb-1">{stat.label}</span>
                    <span className="text-3xl font-black text-gray-900">{stat.value}</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm">{stat.icon}</div>
                </div>
              ))}
            </div>

            {/* My Services */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-gray-900">خدماتي</h3>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-blue-100">أضف خدمة جديدة</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {userServices.map(service => (
                  <ServiceCard key={service.id} service={service} onClick={(id) => onNavigate('service-detail', { id })} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
