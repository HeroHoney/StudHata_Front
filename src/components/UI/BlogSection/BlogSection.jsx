import React from 'react';
import blogPosts from '/Users/batyrbekasel/Desktop/StudHata_front/studhata_front/studhata/src/data/blogPosts.jsx';
const BlogSection = () => {

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <p className="mt-2 font-bold tracking-tight lg:text-left blog-text">
            Советы для студентов при выборе жилья:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 transition-transform hover:scale-105"
            >
              <div
                className="bg-contain bg-center h-0 pb-[65%] rounded-xl"
                style={{ backgroundImage: `url(${post.image})` }}
                ></div>
              <h3 className="text-lg font-semibold mt-4">{post.title}</h3>
              <p className="mt-2 text-gray-600">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
