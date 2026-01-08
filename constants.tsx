
import React from 'react';
import { 
  Palette, Code, PenTool, BarChart, Video, Globe, Smartphone, Megaphone, 
  Building2, Heart, Mic2, Database, Languages, Bot, GraduationCap, Briefcase 
} from 'lucide-react';
import { Service, BlogPost, Review } from './types';

export const CATEGORIES = [
  { id: 'coding', name: 'برمجة وتطوير', icon: <Code className="w-5 h-5" />, color: 'bg-purple-100 text-purple-600' },
  { id: 'design', name: 'تصميم', icon: <Palette className="w-5 h-5" />, color: 'bg-blue-100 text-blue-600' },
  { id: 'engineering', name: 'هندسة وعمارة', icon: <Building2 className="w-5 h-5" />, color: 'bg-amber-100 text-amber-600' },
  { id: 'video', name: 'فيديو وأنيميشن', icon: <Video className="w-5 h-5" />, color: 'bg-red-100 text-red-600' },
  { id: 'business', name: 'أعمال', icon: <Briefcase className="w-5 h-5" />, color: 'bg-cyan-100 text-cyan-600' },
  { id: 'marketing', name: 'تسويق رقمي', icon: <Megaphone className="w-5 h-5" />, color: 'bg-orange-100 text-orange-600' },
  { id: 'lifestyle', name: 'أسلوب حياة', icon: <Heart className="w-5 h-5" />, color: 'bg-pink-100 text-pink-600' },
  { id: 'audio', name: 'صوتيات', icon: <Mic2 className="w-5 h-5" />, color: 'bg-indigo-100 text-indigo-600' },
  { id: 'data', name: 'بيانات', icon: <Database className="w-5 h-5" />, color: 'bg-teal-100 text-teal-600' },
  { id: 'writing', name: 'كتابة وترجمة', icon: <Languages className="w-5 h-5" />, color: 'bg-green-100 text-green-600' },
  { id: 'ai', name: 'ذكاء اصطناعي', icon: <Bot className="w-5 h-5" />, color: 'bg-violet-100 text-violet-600' },
  { id: 'education', name: 'تعليم عن بعد', icon: <GraduationCap className="w-5 h-5" />, color: 'bg-sky-100 text-sky-600' },
];

export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    title: 'برمجة متجر إلكتروني متكامل يدعم الدفع ببريد موب',
    description: 'سأقوم ببناء متجر إلكتروني سريع ومتجاوب مع لوحة تحكم سهلة وإضافة نظام إشعارات بالرسائل القصيرة للطلبات الجديدة في الجزائر.',
    category: 'coding',
    price: 12000,
    rating: 5.0,
    reviewsCount: 24,
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'ياسين المبرمج', avatar: 'https://i.pravatar.cc/150?u=yasin', level: 'بائع موثوق' }
  },
  {
    id: '2',
    title: 'تصميم هوية بصرية كاملة (شعار + بطاقة عمل + أوراق)',
    description: 'تصميم احترافي يعكس فخامة مشروعك. سأقدم لك 3 نماذج للشعار مع دليل كامل لاستخدام الألوان والخطوط.',
    category: 'design',
    price: 4500,
    rating: 4.9,
    reviewsCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'أمين دزيري', avatar: 'https://i.pravatar.cc/150?u=amin', level: 'بائع محترف' }
  },
  {
    id: '3',
    title: 'تصميم داخلي 3D لغرف المنزل أو المحلات التجارية',
    description: 'سأقوم بعمل مخططات معمارية وتصاميم داخلية ثلاثية الأبعاد باستخدام 3DS Max و V-Ray مع استغلال أمثل للمساحات الضيقة.',
    category: 'engineering',
    price: 8000,
    rating: 5.0,
    reviewsCount: 12,
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'م. فؤاد سطيف', avatar: 'https://i.pravatar.cc/150?u=fouad', level: 'بائع نشيط' }
  },
  {
    id: '4',
    title: 'دمج ذكاء اصطناعي (Chatbot) مخصص لخدمة عملائك',
    description: 'برمجة بوت ذكي يرد على استفسارات الزبائن في فيسبوك وانستغرام آلياً باستخدام تقنيات OpenAI و Gemini.',
    category: 'ai',
    price: 6500,
    rating: 4.8,
    reviewsCount: 31,
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'إلياس تكنولوجيا', avatar: 'https://i.pravatar.cc/150?u=ilyes', level: 'بائع موثوق' }
  },
  {
    id: '5',
    title: 'مونتاج فيديو إعلاني (Motion Graphics) لمنتجاتك',
    description: 'سأحول صور منتجاتك إلى فيديو موشن جرافيك جذاب يزيد من مبيعاتك بنسبة كبيرة، مع تعليق صوتي احترافي.',
    category: 'video',
    price: 5000,
    rating: 4.9,
    reviewsCount: 42,
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'رضوان مونتاج', avatar: 'https://i.pravatar.cc/150?u=radwan', level: 'بائع متميز' }
  },
  {
    id: '6',
    title: 'إدارة حملات إعلانية ممولة على فيسبوك في الجزائر',
    description: 'استهداف دقيق للجمهور الجزائري حسب الولايات والاهتمامات لضمان أقل تكلفة للنقرة وأعلى عائد استثماري.',
    category: 'marketing',
    price: 3500,
    rating: 4.7,
    reviewsCount: 88,
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'ليلى ماركتينغ', avatar: 'https://i.pravatar.cc/150?u=laila', level: 'بائع محترف' }
  },
  {
    id: '7',
    title: 'إعداد دراسة جدوى اقتصادية لمشروع ناشئ في الجزائر',
    description: 'دراسة شاملة للمنافسين، التكاليف، والأرباح المتوقعة لمساعدتك في الحصول على تمويل من ANADE أو بنوك محلية.',
    category: 'business',
    price: 15000,
    rating: 5.0,
    reviewsCount: 9,
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-027ff8d99f83?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'د. عثمان خبير', avatar: 'https://i.pravatar.cc/150?u=othmane', level: 'بائع موثوق' }
  },
  {
    id: '8',
    title: 'تعليق صوتي إخباري أو إعلاني باللهجة الجزائرية',
    description: 'تسجيل صوتي نقي بجودة استوديو، مناسب للإعلانات التلفزيونية، اليوتيوب، أو الرسائل الصوتية للشركات.',
    category: 'audio',
    price: 2000,
    rating: 4.9,
    reviewsCount: 65,
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'سمية صوت', avatar: 'https://i.pravatar.cc/150?u=somaya', level: 'بائع نشيط' }
  },
  {
    id: '9',
    title: 'دروس خصوصية في اللغة الإنجليزية للمبتدئين (عبر زووم)',
    description: 'حصص تفاعلية لتعلم المحادثة والقواعد بأسلوب مبسط. الساعة بـ 1000 دج فقط مع ملفات تعليمية مجانية.',
    category: 'education',
    price: 1000,
    rating: 5.0,
    reviewsCount: 112,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'أ. مريم بجاية', avatar: 'https://i.pravatar.cc/150?u=meriem', level: 'بائع متميز' }
  },
  {
    id: '10',
    title: 'ترجمة احترافية للمستندات والبحوث (عربي - فرنسي - إنجليزي)',
    description: 'ترجمة دقيقة تراعي السياق اللغوي والمصطلحات التقنية. أضمن لك جودة عالية وتسليم في الموعد.',
    category: 'writing',
    price: 1500,
    rating: 4.8,
    reviewsCount: 204,
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'منال قسنطينة', avatar: 'https://i.pravatar.cc/150?u=manal', level: 'بائع محترف' }
  },
  {
    id: '11',
    title: 'أتمتة ملفات Excel وبناء لوحات تحكم (Dashboard) ذكية',
    description: 'تحويل بياناتك المعقدة إلى رسوم بيانية تفاعلية وتلقائية باستخدام Power BI و Excel VBA.',
    category: 'data',
    price: 4000,
    rating: 5.0,
    reviewsCount: 18,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'سامي بيانات', avatar: 'https://i.pravatar.cc/150?u=sami', level: 'بائع نشيط' }
  },
  {
    id: '12',
    title: 'خطة غذائية وتدريبية منزلية لفقدان الوزن أو بناء العضلات',
    description: 'برنامج مخصص حسب وزنك وعمرك والأغذية المتوفرة في السوق الجزائري مع متابعة أسبوعية عبر واتساب.',
    category: 'lifestyle',
    price: 2500,
    rating: 4.9,
    reviewsCount: 57,
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop',
    seller: { name: 'كوتش وليد', avatar: 'https://i.pravatar.cc/150?u=walid', level: 'بائع متميز' }
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'مستقبل الذكاء الاصطناعي في العمل الحر: كيف تستعد؟',
    excerpt: 'الذكاء الاصطناعي ليس تهديداً بل أداة جبارة. اكتشف كيف يستخدم المستقلون الناجحون أدوات مثل Gemini لتسريع عملهم.',
    author: 'أمين محمود',
    date: '2024-05-22',
    category: 'ai',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b2',
    title: 'لماذا يزداد الطلب على التعليم عن بعد في الجزائر؟',
    excerpt: 'تحليل شامل لسوق التدريب الإلكتروني في الجزائر وكيف يمكنك تحويل خبرتك إلى دورات مدفوعة رابحة.',
    author: 'سارة العاصمة',
    date: '2024-05-20',
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b3',
    title: 'أهمية التصميم المعماري للمشاريع التجارية الناشئة',
    excerpt: 'كيف تساهم الهندسة المعمارية وتصميم المساحات في زيادة مبيعات محلك التجاري أو مكتبك؟',
    author: 'م. كريم سطيف',
    date: '2024-05-18',
    category: 'engineering',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: 'كمال سطيف',
    userAvatar: 'https://i.pravatar.cc/150?u=kamal',
    rating: 5,
    comment: 'عمل رائع وسرعة في التنفيذ، التعامل كان سهلاً جداً والدفع ببريد موب مريح للغاية.',
    date: 'منذ يومين'
  }
];
