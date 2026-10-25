import { Heart } from 'lucide-react';
import { useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
  image: string;
  description: string;
  buyUrl: string;
  rating: number;
  review: string;
}

export const featuredBooks: Book[] = [
  { id: 1, title: 'How to succeed in life', author: 'Eliza Reed', price: '₹99', image: '/images/uploaded_book_cover.png', description: 'A gripping tale of mystery and suspense.', buyUrl: 'https://superprofile.bio/vp/घर-बैठे-कमाई-के-practical-तरीके', rating: 5, review: 'Incredible insights, truly life-changing!' },
  { id: 2, title: 'E-Commerce Business कैसे शुरू करें', author: 'Marcus Thorne', price: '₹29', image: '/images/book_cover_2.png', description: 'A journey through forgotten memories.', buyUrl: 'https://superprofile.bio/vp/e-commerce-business-कैसे-शुरू-करें', rating: 5, review: 'Very practical and easy to follow.' },
  { id: 3, title: 'Meesho Seller Guide: Step by Step', author: 'Sarah Jenkins', price: '₹99', image: '/images/meesho_book_cover.png', description: 'Exploring the beauty of silence and vast landscapes.', buyUrl: 'https://superprofile.bio/vp/howstep-by-step-guide', rating: 4, review: 'Useful guide for beginners.' },
  { id: 4, title: 'Urban Shadows', author: 'David Chen', price: '₹49', image: '/images/khan_sir_book_cover.png', description: 'Secrets hidden in the bustling city streets.', buyUrl: 'https://superprofile.bio/vp/khan-sir--succcessfull-story-', rating: 5, review: 'Fantastic read, highly recommended.' },
];

interface Props {
  onBookClick: (book: Book) => void;
  wishlist: number[];
  toggleWishlist: (id: number) => void;
  isLoading: boolean;
}

export default function FeaturedBooks({ onBookClick, wishlist, toggleWishlist, isLoading }: Props) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Books</h2>
      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[3/4] bg-slate-200 rounded-lg mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-slate-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredBooks.map((book) => (
            <div key={book.id} className="group relative cursor-pointer p-2 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow" onClick={() => onBookClick(book)}>
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(book.id);
                }}
              >
                <Heart className={`w-5 h-5 ${wishlist.includes(book.id) ? 'fill-red-500 text-red-500' : 'text-slate-500'}`} />
              </button>
              <div className="aspect-[3/4] overflow-hidden rounded-md mb-3 bg-slate-100">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-medium text-slate-800 truncate">{book.title}</h3>
              <p className="text-xs text-slate-500 mb-1">{book.author}</p>
              <div className="flex items-center gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xs ${i < book.rating ? 'text-amber-400' : 'text-slate-300'}`}>★</span>
                ))}
              </div>
              <p className="font-bold text-slate-900 mb-3">{book.price}</p>
              <a
                href={book.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 text-xs font-semibold bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
