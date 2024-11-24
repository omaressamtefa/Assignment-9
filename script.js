const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "When life gives you lemons, make lemonade.",
    author: "Elbert Hubbard",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "“A room without books is like a body without a soul.” ",
    author: " Marcus Tullius Cicero ",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
    author: "― Bernard M. Baruch",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "― Bernard M. Baruch ",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "― Dr. Seuss",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "― Mae West ",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "― Robert Frost ",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
];

function displayQuote() {
  const quotearea = document.getElementById("quote");
  const authorarea = document.getElementById("author");
  const randomQuote = getRandomQuote();

  quotearea.textContent = `"${randomQuote.quote}"`;
  authorarea.textContent = `- ${randomQuote.author}`;
}
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
document.getElementById("new-quote").addEventListener("click", displayQuote);
displayQuote();
