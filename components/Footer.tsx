
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Globe, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 text-right">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">ن</div>
              <div className="flex flex-col items-start -space-y-1">
                <span className="text-2xl font-black">نقرة</span>
                <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Nakraa DZ</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              نقرة (Nakraa) هي المنصة الجزائرية الرائدة للخدمات المصغرة. نجمع المبدعين الجزائريين بأصحاب المشاريع لتحويل الأفكار إلى واقع بدعم كامل لـ BaridiMob.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-6">عن نقرة الجزائر</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الدفع ببريد موب</a></li>
              <li><a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-6">الدعم والعملاء</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة في الجزائر</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-6">النشرة الإخبارية</h4>
            <p className="text-gray-400 mb-4 text-sm">احصل على أفضل الفرص المهنية في الجزائر مباشرة في بريدك.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-gray-800 border-none rounded-lg px-4 py-2 flex-grow text-sm focus:ring-2 focus:ring-blue-600 text-right"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-lg font-bold text-sm">اشتراك</button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 نقرة - Nakraa Algeria. صنع بكل فخر في الجزائر 🇩🇿.</p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>الجزائر العاصمة، الجزائر</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
