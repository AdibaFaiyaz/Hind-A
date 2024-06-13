"use client"
import { useState, useEffect } from 'react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<number>(10);

  const handleButtonClick = (amount: number) => {
    setSelectedAmount(amount.toString());
    setCustomAmount(amount); // Update range slider to the selected amount
  };

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(null); // Clear selected button
    setCustomAmount(Number(event.target.value));
  };

  return (

    <>
      <div className="bg-white">
        <div className="mx-auto py-16 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
            <h2 className="font-nudge-extrabold mx-auto max-w-2xl text-3xl font-bold uppercase tracking-wide sm:text-4xl">HELP US CREATE A BETTER FUTURE</h2>
            <svg viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7"></circle>
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stop-color="#964B00"></stop>
                  <stop offset="1" stop-color="#964B00"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      

        <section className="container mx-auto p-6 bg-white shadow-md rounded-lg text-center">
          
          <h1 className="text-2xl  leading-relaxed mb-6">Every donation helps us provide quality education to underprivileged children.</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20 m-24">
            {[10, 500, 2000, 10000].map((amount) => (
              <button
                key={amount}
                className={`bg-orange-600 text-white font-semibold py-4 px-2 rounded-full hover:bg-orange-700 ${selectedAmount === amount.toString() ? 'ring-4 ring-red-300' : ''}`}
                onClick={() => handleButtonClick(amount)}
              >
                ₹{amount}
              </button>
            ))}
          </div>

          <form action="/process_donation" method="POST" className="mt-6">
            <input type="hidden" name="amount" value={selectedAmount || customAmount} />

            <label htmlFor="range-amount" className="block text-lg font-semibold mb-2">Or Choose Custom Amount:</label>
            <input
              type="range"
              id="range-amount"
              name="custom_amount"
              min="10"
              max="25000"
              step="10"
              value={customAmount}
              onChange={handleRangeChange}
              className="w-1/3 mb-4"
            />
            <output className="block text-xl font-semibold mb-4">₹{customAmount}</output>

            <button type="submit" className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
              Donate Now
            </button>
          </form>
        </section>
      

    </>
  );
};

export default Donate;
