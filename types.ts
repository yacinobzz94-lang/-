
export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  seller: {
    name: string;
    avatar: string;
    level: string;
  };
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'buyer' | 'seller' | 'both';
  bio: string;
  joinedDate: string;
  completedOrders: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}
