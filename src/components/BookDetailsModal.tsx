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

interface Props {
  book: Book;
  onClose: () => void;
}

export default function BookDetailsModal({ book, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="float-right text-slate-500 hover:text-slate-900">Close</button>
        <img src={book.image} alt={book.title} className="w-full aspect-[3/4] object-cover rounded-lg mb-4" />
        <h2 className="text-2xl font-bold text-slate-900">{book.title}</h2>
        <p className="text-slate-600 mb-2">{book.author}</p>
        <p className="text-xl font-bold text-slate-900 mb-4">{book.price}</p>
        <p className="text-slate-700 mb-6">{book.description}</p>
        <div className="mb-6 p-4 bg-slate-100 rounded-lg">
          <h4 className="font-semibold mb-2">Preview</h4>
          <p className="text-sm text-slate-600">Sample preview content goes here...</p>
        </div>
        <a 
          href={book.buyUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full block text-center py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
