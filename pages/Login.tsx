
import React from 'react';
import { Mail, Lock, ArrowLeft, Facebook, Globe } from 'lucide-react';

interface LoginProps {
  onNavigate: (page: string) => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 lg:p-12">
        <div className="text-center mb-10">
          <div 
            className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-3xl flex items-center justify-center text-white font-bold text-3xl shadow-lg mx-auto mb-6 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            ن
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">مرحباً بعودتك</h2>
          <p className="text-gray-500 font-medium">سجل دخولك لمتابعة أعمالك في نقرة</p>
        </div>

        <form className="space-y-6">
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

          <div className="flex items-center justify-between px-2 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
              <span className="text-gray-600">تذكرني</span>
            </label>
            <a href="#" className="text-blue-600 font-bold hover:underline">نسيت كلمة المرور؟</a>
          </div>

          <button 
            type="button"
            onClick={() => onNavigate('home')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-blue-100"
          >
            تسجيل الدخول
          </button>
        </form>

        <div className="mt-10 flex items-center gap-4 text-gray-400 text-sm mb-10">
          <div className="h-px bg-gray-100 flex-grow"></div>
          <span>أو سجل بواسطة</span>
          <div className="h-px bg-gray-100 flex-grow"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <button className="flex items-center justify-center gap-2 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700">
             <Facebook className="w-5 h-5 text-blue-600" /> فيسبوك
          </button>
          <button className="flex items-center justify-center gap-2 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700">
             <Globe className="w-5 h-5 text-red-500" /> جوجل
          </button>
        </div>

        <p className="text-center text-gray-500 font-medium">
          ليس لديك حساب؟ <button onClick={() => onNavigate('register')} className="text-blue-600 font-black hover:underline">أنشئ حساباً جديداً</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
