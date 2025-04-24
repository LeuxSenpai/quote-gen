import './QuoteGen.css';
import { useState } from 'react';

export default function QuoteGen() {
  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you’re halfway there. - Theodore Roosevelt"
  ];

  const [quote, setQuote] = useState(quotes[0]);

  function handleOnClick() {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }

  return (
    <div className="QuoteGen">
      <div className="quote-container">
        <h1>Quote Generator</h1>
        <p>{quote}</p>
        <button className="btn" onClick={handleOnClick}>
          Generate Quote
        </button>
      </div>
    </div>
  );
}