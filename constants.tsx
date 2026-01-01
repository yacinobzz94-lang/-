
import React from 'react';
import { Palette, Code, PenTool, BarChart, Video, Globe, Smartphone, Megaphone } from 'lucide-react';
import { Service, BlogPost, Review } from './types';

export const CATEGORIES = [
  { id: 'design', name: 'تصميم جرافيك', icon: <Palette className="w-6 h-6" />, color: 'bg-blue-100 text-blue-600' },
  { id: 'writing', name: 'كتابة وترجمة', icon: <PenTool className="w-6 h-6" />, color: 'bg-green-100 text-green-600' },
  { id: 'coding', name: 'برمجة وتطوير', icon: <Code className="w-6 h-6" />, color: 'bg-purple-100 text-purple-600' },
  { id: 'marketing', name: 'تسويق رقمي', icon: <Megaphone className="w-6 h-6" />, color: 'bg-orange-100 text-orange-600' },
  { id: 'video', name: 'فيديو وأنيميشن', icon: <Video className="w-6 h-6" />, color: 'bg-red-100 text-red-600' },
  { id: 'business', name: 'أعمال واستشارات', icon: <BarChart className="w-6 h-6" />, color: 'bg-cyan-100 text-cyan-600' },
];

export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    title: 'تصميم شعار احترافي ومميز لشركتك',
    description: 'سأقوم بتصميم شعار فريد يعبر عن هوية علامتك التجارية بدقة واحترافية عالية مع تقديم 3 نماذج مختلفة.',
    category: 'design',
    price: 15,
    rating: 4.9,
    reviewsCount: 124,
    imageUrl: 'https://picsum.photos/seed/design1/600/400',
    seller: { name: 'أحمد علي', avatar: 'https://i.pravatar.cc/150?u=ahmed', level: 'بائع محترف' }
  },
  {
    id: '2',
    title: 'كتابة مقالات متوافقة مع قواعد السيو (SEO)',
    description: 'كتابة مقالات حصرية وجذابة لمحركات البحث تضمن لك تصدر النتائج وزيادة عدد الزوار.',
    category: 'writing',
    price: 5,
    rating: 4.8,
    reviewsCount: 89,
    imageUrl: 'https://picsum.photos/seed/writing1/600/400',
    seller: { name: 'سارة خالد', avatar: 'https://i.pravatar.cc/150?u=sara', level: 'بائع نشيط' }
  },
  {
    id: '3',
    title: 'برمجة متجر إلكتروني متكامل باستخدام ووردبريس',
    description: 'إنشاء متجر إلكتروني يدعم الدفع واللغة العربية وتجربة مستخدم رائعة لبيع منتجاتك.',
    category: 'coding',
    price: 50,
    rating: 5.0,
    reviewsCount: 45,
    imageUrl: 'https://picsum.photos/seed/code1/600/400',
    seller: { name: 'ياسين محمود', avatar: 'https://i.pravatar.cc/150?u=yasin', level: 'بائع موثوق' }
  },
  {
    id: '4',
    title: 'إدارة حملات إعلانية على فيسبوك وإنستقرام',
    description: 'زيادة مبيعاتك من خلال حملات إعلانية مستهدفة بدقة واحترافية عالية.',
    category: 'marketing',
    price: 25,
    rating: 4.7,
    reviewsCount: 67,
    imageUrl: 'https://picsum.photos/seed/ads1/600/400',
    seller: { name: 'ليلى مراد', avatar: 'https://i.pravatar.cc/150?u=laila', level: 'بائع متميز' }
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'دليلك الشامل: كيف تبدأ مسيرتك في العمل الحر من الصفر؟',
    excerpt: 'العمل الحر ليس مجرد وظيفة، بل هو أسلوب حياة. في هذا المقال، سنأخذك في رحلة تبدأ من تحديد مهاراتك، مروراً ببناء ملف تعريفي جذاب، وصولاً إلى استراتيجيات فعالة للحصول على أول عميل لك في منصات الخدمات المصغرة.',
    author: 'أحمد محمود',
    date: '2024-05-20',
    category: 'دليل المبتدئين',
    imageUrl: 'https://picsum.photos/seed/start-freelancing/800/500'
  },
  {
    id: 'b2',
    title: 'أسرار النجاح في بيع الخدمات: كيف تضاعف مبيعاتك؟',
    excerpt: 'هل تتساءل لماذا يبيع البعض خدماتهم بسرعة بينما ينتظر الآخرون طويلاً؟ السر يكمن في طريقة عرض الخدمة، صياغة العناوين الجذابة، وتقديم عروض لا يمكن رفضها. اكتشف كيف تحول زوار صفحتك إلى عملاء دائمين.',
    author: 'سارة عبد الله',
    date: '2024-05-18',
    category: 'استراتيجيات البيع',
    imageUrl: 'https://picsum.photos/seed/sell-success/800/500'
  },
  {
    id: 'b3',
    title: 'أهم 7 مهارات رقمية مطلوبة بقوة في السوق العربي 2024',
    excerpt: 'التطور التقني يغير سوق العمل باستمرار. قمنا بتحليل آلاف الطلبات في "نقرة" لنخرج لك بقائمة تضم أكثر المهارات طلباً وأعلاها سعراً، من الذكاء الاصطناعي وصناعة المحتوى إلى البرمجة والتسويق الرقمي.',
    author: 'ياسين الخالدي',
    date: '2024-05-15',
    category: 'مهارات المستقبل',
    imageUrl: 'https://picsum.photos/seed/best-skills/800/500'
  },
  {
    id: 'b4',
    title: '10 نصائح ذهبية لكل مستقل مبتدئ لتجنب الإحباط',
    excerpt: 'البدايات دائماً صعبة، لكنها قد تكون أسهل بكثير إذا اتبعت نصائح الخبراء. تعرف على كيفية إدارة وقتك، التعامل مع العملاء الصعبين، وتطوير مهاراتك بشكل مستمر لتبني علامة تجارية شخصية قوية في عالم العمل الحر.',
    author: 'مريم يوسف',
    date: '2024-05-12',
    category: 'تطوير الذات',
    imageUrl: 'https://picsum.photos/seed/freelancer-tips/800/500'
  },
  {
    id: 'b5',
    title: 'أخطاء قاتلة يقع فيها المستقلون في منصات الخدمات المصغرة',
    excerpt: 'خطأ واحد قد يكلفك سمعتك أو إيقاف حسابك. سنتطرق إلى الأخطاء الشائعة مثل ضعف التواصل، إهمال وصف الخدمة، أو محاولة التحايل على القوانين، وكيف يمكنك تجنب هذه العقبات لضمان استمرارية نجاحك.',
    author: 'عمر علي',
    date: '2024-05-10',
    category: 'تحذيرات مهنية',
    imageUrl: 'https://picsum.photos/seed/mistakes/800/500'
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: 'محمد حسن',
    userAvatar: 'https://i.pravatar.cc/150?u=mohamed',
    rating: 5,
    comment: 'عمل رائع وسرعة في التنفيذ، أنصح بالتعامل معه.',
    date: 'منذ يومين'
  },
  {
    id: 'r2',
    userName: 'خالد عبد الله',
    userAvatar: 'https://i.pravatar.cc/150?u=khaled',
    rating: 4,
    comment: 'خدمة جيدة جداً، تواصل ممتاز.',
    date: 'منذ أسبوع'
  }
];
