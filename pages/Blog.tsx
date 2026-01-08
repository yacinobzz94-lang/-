
import React, { useState, useMemo } from 'react';
import { MOCK_BLOG_POSTS, CATEGORIES } from '../constants';
import { Calendar, User, ArrowLeft, Sparkles, Loader2, BookOpen, Lightbulb, TrendingUp, DollarSign, ChevronLeft, ChevronRight, Gift } from 'lucide-react';
import { generateBlogSummary, generateServiceIdea } from '../services/geminiService';

interface BlogProps {
  onNavigate: (page: string, params?: any) => void;
}

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [activeBlogCat, setActiveBlogCat] = useState('all');
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [ideaLoading, setIdeaLoading] = useState(false);
  const [generatedIdea, setGeneratedIdea] = useState<any>(null);
  const [selectedIdeaCat, setSelectedIdeaCat] = useState('design');

  const filteredPosts = useMemo(() => {
    if (activeBlogCat === 'all') return MOCK_BLOG_POSTS;
    return MOCK_BLOG_POSTS.filter(post => post.category === activeBlogCat);
  }, [activeBlogCat]);

  const handleGetSummary = async (postId: string, title: string) => {
    if (summaries[postId]) return;
    setLoading(prev => ({ ...prev, [postId]: true }));
    const summary = await generateBlogSummary(title);
    setSummaries(prev => ({ ...prev, [postId]: summary }));
    setLoading(prev => ({ ...prev, [postId]: false }));
  };

  const handleGenerateIdea = async () => {
    setIdeaLoading(true);
    const idea = await generateServiceIdea(selectedIdeaCat);
    setGeneratedIdea(idea);
    setIdeaLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] pb-20">
      {/* Editorial Header */}
      <div className="bg-white border-b border-gray-100 py-12 lg:py-16 mb-8 relative overflow-hidden text-right">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">أكاديمية نقرة الجزائر</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl ml-auto">
            تعلم كيف تحول مهاراتك إلى أرباح حقيقية بالدينار الجزائري من خلال مقالاتنا التعليمية المتجددة.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-12 text-right">
            <div className="grid grid-cols-1 gap-12">
              {filteredPosts.map(post => (
                <article key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                      <img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={post.title} />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase mb-4 inline-block">{post.category}</span>
                      <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">{post.title}</h2>
                      <p className="text-gray-500 mb-6 line-clamp-2">{post.excerpt}</p>
                      <button className="text-blue-600 font-bold flex items-center gap-2 hover:underline">اقرأ المزيد <ArrowLeft className="w-4 h-4" /></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar Tools */}
          <aside className="lg:w-1/3 space-y-8">
            {/* New Promotional Ad Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-right overflow-hidden relative">
               <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><Gift className="w-5 h-5" /></div>
                  <h3 className="text-lg font-black text-gray-900">هدايا نقرة للمبتدئين</h3>
               </div>
               <p className="text-gray-500 text-sm mb-6 leading-relaxed">قم بفتح أول متجر لك اليوم واحصل على قسيمة إعلانية بقيمة <span className="font-bold text-blue-600">2000 دج</span> تظهر بها في الصفحة الرئيسية مجاناً.</p>
               <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-sm shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">سجل واحصل على القسيمة</button>
               <div className="mt-4 text-center">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">إعلان داخلي</span>
               </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border-2 border-dashed border-blue-200 p-8">
               <div className="flex items-center gap-3 mb-6 text-right">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white"><Lightbulb className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-black text-gray-900 text-lg">مولد أفكار الخدمات</h3>
                    <p className="text-gray-400 text-xs text-right">بالذكاء الاصطناعي</p>
                  </div>
               </div>
               <button 
                 onClick={handleGenerateIdea}
                 disabled={ideaLoading}
                 className="w-full bg-gray-900 text-white py-4 rounded-xl font-black shadow-lg flex items-center justify-center gap-2"
               >
                 {ideaLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                 اقترح لي فكرة
               </button>
               {generatedIdea && (
                 <div className="mt-6 bg-blue-50 p-6 rounded-2xl border border-blue-100 animate-in zoom-in-95 text-right">
                    <h4 className="font-black text-blue-900 mb-2">{generatedIdea.title}</h4>
                    <p className="text-blue-700 text-xs">{generatedIdea.description}</p>
                 </div>
               )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
