import React from "react";
import { FaStar } from "react-icons/fa";

type CardProps = {
  imageUrl: string;
  title: string;
  location: string;
  rating: number;
  numReviews: number;
  price: number;
};

const Card: React.FC<CardProps> = ({ imageUrl, title, location, rating, numReviews, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{location}</p>
        <div className="flex items-center mt-2 space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`h-4 w-4 ${i < rating ? "text-red-500" : "text-gray-400"}`} />
          ))}
          <span className="text-gray-500 text-sm">{numReviews} reviews</span>
        </div>
        <div className="mt-4 flex items-center space-x-1">
          <span className="font-bold text-lg">${price}</span>
          <span className="text-gray-500 text-sm">/ night</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
