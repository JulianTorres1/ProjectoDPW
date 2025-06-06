import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Clock, Eye, Share2 } from "lucide-react";

interface ArticleProps {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  views: string;
  publishedAt: string;
  description: string;
}

const ArticleCard: React.FC<{ article: ArticleProps }> = ({ article }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
              {article.category}
            </span>
          </div>
          <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
            <Share2 className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
            <span>Por {article.author}</span>
            <span>{article.publishedAt}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
            {article.title}
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {article.summary}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de lectura</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{article.views} vistas</span>
              </div>
            </div>

            <button
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
              onClick={() => setShowModal(true)}
            >
              Leer más
            </button>
          </div>
        </div>
      </article>

      {showModal &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-lg relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <p className="text-gray-700 mb-4">{article.description}</p>
              {/* Puedes agregar más detalles aquí */}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ArticleCard;
