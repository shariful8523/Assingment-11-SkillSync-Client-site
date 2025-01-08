import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TutorsDetails = () => {
  const { name, language, price, review, description, image } = useLoaderData();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 border rounded-xl shadow-2xl bg-white mb-10">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-xl" />
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
        <p className="text-lg text-gray-600 mt-2">Language: {language}</p>
        <p className="text-lg text-gray-600 mt-2">Price: ${price}</p>
        <p className="text-lg text-gray-600 mt-2">Review: {review} / 5</p>
        <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>
        
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default TutorsDetails;
