interface Book {
  title: string;
  price: string;
}

export default function Checkout({ items }: { items: Book[] }) {
  const total = items.reduce((sum, item) => sum + parseInt(item.price.replace('₹', '')), 0);

  return (
    <section className="py-12 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Checkout</h2>
      <div className="bg-slate-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>{item.title}</span>
            <span className="font-bold">{item.price}</span>
          </div>
        ))}
        <div className="border-t pt-4 mt-4 flex justify-between items-center font-bold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Select Payment Method</h3>
        <div className="space-y-4">
          <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-slate-50">
            <input type="radio" name="payment" className="mr-3" defaultChecked />
            UPI (Razorpay)
          </label>
          <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-slate-50">
            <input type="radio" name="payment" className="mr-3" />
            Credit/Debit Card (Razorpay)
          </label>
        </div>
      </div>
      <button className="w-full py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
        Pay ₹{total}
      </button>
    </section>
  );
}
