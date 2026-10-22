import { X } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  books: Book[];
}

export default function WishlistSidebar({ isOpen, onClose, books }: Props) {
  return (
    <div className={`fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Wishlist</h2>
          <button onClick={onClose}><X className="w-6 h-6" /></button>
        </div>
        <div className="flex-grow overflow-y-auto space-y-4">
          {books.length === 0 && <p className="text-slate-500">Your wishlist is empty.</p>}
          {books.map((book) => (
            <div key={book.id} className="flex gap-4">
              <div className="flex-grow">
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-slate-500">{book.author}</p>
                <p className="font-bold text-slate-900">{book.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
