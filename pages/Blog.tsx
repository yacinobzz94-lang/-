
import React, { useState } from 'react';
import { MOCK_BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowLeft, Sparkles, Loader2 } from 'lucide-react';
import { generateBlogSummary } from '../services/geminiService';

interface BlogProps {
  onNavigate: (page: string, params?: any) => void;
}

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const handleGetSummary = async (postId: string, title: string) => {
    if (summaries[postId]) return;
    setLoading(prev => ({ ...prev, [postId]: true }));
    const summary = await generateBlogSummary(title);
    setSummaries(prev => ({ ...prev, [postId]: summary }));
    setLoading(prev => ({ ...prev, [postId]: false }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-100 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">مدونة نقرة</h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">نصائح، تقارير، وقصص نجاح من عالم العمل الحر في الوطن العربي.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MOCK_BLOG_POSTS.map(post => (
            <article key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-blue-600 font-bold text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</div>
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                {summaries[post.id] && (
                  <div className="mb-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 animate-in fade-in slide-in-from-top-4">
                    <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
                      <Sparkles className="w-4 h-4" /> ملخص الذكاء الاصطناعي
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">{summaries[post.id]}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all">
                    اقرأ المقال كاملاً <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleGetSummary(post.id, post.title)}
                    disabled={loading[post.id]}
                    className="flex-grow border-2 border-dashed border-blue-200 text-blue-600 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all disabled:opacity-50"
                  >
                    {loading[post.id] ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Sparkles className="w-5 h-5" />
                    )}
                    {summaries[post.id] ? 'تم التلخيص' : 'لخص المقال بذكاء'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
