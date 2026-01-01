
import React from 'react';
import { Mail, Lock, User, ShieldCheck } from 'lucide-react';

interface RegisterProps {
  onNavigate: (page: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 lg:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-3">ابدأ رحلتك اليوم</h2>
          <p className="text-gray-500 font-medium">انضم لآلاف المستقلين والمشترين في نقرة</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 mr-2">الاسم الكامل</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="أحمد علي"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <User className="absolute right-4 top-4 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 mr-2">البريد الإلكتروني</label>
            <div className="relative">
              <input 
                type="email" 
                placeholder="example@mail.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <Mail className="absolute right-4 top-4 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 mr-2">كلمة المرور</label>
            <div className="relative">
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <Lock className="absolute right-4 top-4 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
            <h4 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> ضمان نقرة
            </h4>
            <p className="text-xs text-blue-600 leading-relaxed">
              بتسجيلك في الموقع، أنت توافق على شروط الاستخدام وسياسة الخصوصية. نحن نضمن حماية حقوقك المالية بالكامل.
            </p>
          </div>

          <button 
            type="button"
            onClick={() => onNavigate('home')}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-green-100"
          >
            إنشاء حساب
          </button>
        </form>

        <p className="mt-10 text-center text-gray-500 font-medium">
          لديك حساب بالفعل؟ <button onClick={() => onNavigate('login')} className="text-blue-600 font-black hover:underline">سجل الدخول</button>
        </p>
      </div>
    </div>
  );
};

export default Register;
