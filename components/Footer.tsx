
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">ن</div>
              <span className="text-2xl font-black">نقرة</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              سوقك العربي الأول للخدمات المصغرة. نجمع المبدعين بالمستثمرين لتحويل الأفكار إلى واقع ملموس بكل ثقة وأمان.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6">عن المنصة</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-white transition-colors">كيف يعمل نقرة؟</a></li>
              <li><a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6">الدعم</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ضمان استعادة الأموال</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-bold mb-6">النشرة البريدية</h4>
            <p className="text-gray-400 mb-4 text-sm">احصل على آخر التحديثات والفرص المهنية مباشرة في بريدك.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-gray-800 border-none rounded-lg px-4 py-2 flex-grow text-sm focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-lg font-bold text-sm">اشتراك</button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 نقرة. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Globe className="w-4 h-4" />
            <span>اللغة العربية (المملكة العربية السعودية)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
