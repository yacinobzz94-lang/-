
import React, { useState } from 'react';
import { Search, Menu, X, User, Bell, MessageSquare, PlusCircle } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'services', label: 'الخدمات' },
    { id: 'blog', label: 'المدونة' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              ن
            </div>
            <span className="text-2xl font-black text-gray-800 tracking-tight hidden sm:inline">نقرة</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-base font-medium transition-colors ${
                  currentPage === link.id ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Icons / Search */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden lg:flex relative">
              <input
                type="text"
                placeholder="ابحث عن خدمة..."
                className="bg-gray-50 border border-gray-200 rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 text-sm"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate('profile')}
                className="flex items-center gap-2 p-1.5 border border-gray-200 rounded-full hover:bg-gray-50 transition-all"
              >
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
              </button>
              <button 
                onClick={() => onNavigate('login')}
                className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-shadow hover:shadow-lg"
              >
                أضف خدمة
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-xl">
          <div className="flex flex-col gap-4">
            <div className="relative mb-2">
              <input
                type="text"
                placeholder="ابحث عن خدمة..."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-10 focus:outline-none"
              />
              <Search className="absolute right-3 top-3 text-gray-400 w-4 h-4" />
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMenuOpen(false);
                }}
                className={`text-right py-2 text-lg font-medium border-b border-gray-50 ${
                  currentPage === link.id ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
               onClick={() => { onNavigate('login'); setIsMenuOpen(false); }}
               className="bg-green-600 text-white py-3 rounded-xl font-bold mt-2 shadow-md"
            >
              تسجيل الدخول
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
