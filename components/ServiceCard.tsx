
import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: (id: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer h-full flex flex-col"
      onClick={() => onClick(service.id)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-3 left-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <img src={service.seller.avatar} className="w-6 h-6 rounded-full border border-gray-100" />
          <span className="text-xs font-bold text-gray-600 group-hover:text-blue-600 transition-colors">
            {service.seller.name}
          </span>
        </div>
        
        <h3 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2 mb-4 group-hover:text-blue-600 transition-colors min-h-[2.5rem]">
          {service.title}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-bold text-gray-800">{service.rating}</span>
            <span className="text-xs text-gray-400">({service.reviewsCount})</span>
          </div>
          <div className="text-left">
            <span className="text-xs text-gray-400 block mb-0.5">تبدأ من</span>
            <span className="text-lg font-black text-green-600">{service.price} <span className="text-xs">دج</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
