/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Layout from './components/Layout.tsx';
import Hero from './components/Hero.tsx';
import CategoryMenu from './components/CategoryMenu.tsx';
import FeaturedBooks, { featuredBooks } from './components/FeaturedBooks.tsx';
import Testimonials from './components/Testimonials.tsx';
import BookDetailsModal from './components/BookDetailsModal.tsx';
import WishlistSidebar from './components/WishlistSidebar.tsx';
import NewsletterSignup from './components/NewsletterSignup.tsx';

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

export default function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const wishlistBooks = featuredBooks.filter(book => wishlist.includes(book.id));

  return (
    <Layout>
      <div className="fixed top-4 right-20 z-50">
        <button onClick={() => setIsWishlistOpen(!isWishlistOpen)} className="p-2 bg-slate-900 text-white rounded-lg">
          Wishlist ({wishlist.length})
        </button>
      </div>
      <Hero />
      <CategoryMenu />
      <FeaturedBooks onBookClick={setSelectedBook} wishlist={wishlist} toggleWishlist={toggleWishlist} isLoading={isLoading} />
      <Testimonials />
      <NewsletterSignup />
      <WishlistSidebar isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} books={wishlistBooks} />
      {selectedBook && <BookDetailsModal book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </Layout>
  );
}

