// Array of quotes
const quotes = [
  {
    text: "Science is a way of thinking much more than it is a body of knowledge.",
    category: "science",
  },
  {
    text: "Philosophy is the science which considers truth.",
    category: "philosophy",
  },
  {
    text: "The important thing is not to stop questioning.",
    category: "science",
  },
  {
    text: "Physics,Chemistry,Biology and Astronomy combines to make whole science.",
    category: "science",
  },
  {
    text: "The unexamined life is not worth living.",
    category: "philosophy",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    category: "inspiration",
  },
  {
    text: "The best way to predict the future is to create it.",
    category: "inspiration",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    category: "inspiration",
  },
  {
    text: "Love all, trust a few, do wrong to none.",
    category: "love",
  },
  {
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    category: "love",
  },
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    category: "love",
  },
  {
    text: "I am so clever that sometimes I don’t understand a single word of what I am saying.",
    category: "humor",
  },
  {
    text: "If you think you are too small to make a difference, try sleeping with a mosquito.",
    category: "humor",
  },
  {
    text: "I’m not arguing, I’m just explaining why I’m right.",
    category: "humor",
  },
];

let currentIndex = 0;
let currentCategory = "science";

// DOM Elements
const quoteContainer = document.getElementById("quote");
const categorySelect = document.getElementById("category");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const randomButton = document.getElementById("random");
const themeToggle = document.getElementById("theme-toggle");


// Initialize display with the first quote
function displayQuote(index) {
    const filteredQuotes = quotes.filter(q => q.category === currentCategory);
    quoteContainer.textContent = filteredQuotes[index].text;
}

displayQuote(currentIndex);


// Category change functionality
categorySelect.addEventListener('change', (event) => {
    currentCategory = event.target.value;
    currentIndex = 0; // Reset to the first quote in the new category
    displayQuote(currentIndex);
});

// Previous button functionality
prevButton.addEventListener('click', () => {
  const filteredQuotes = quotes.filter(q => q.category === currentCategory);
  if (currentIndex > 0) {
    currentIndex--; // Move to the previous quote
    displayQuote(currentIndex);
  }
});

// Next button functionality
nextButton.addEventListener('click', () => {
  const filteredQuotes = quotes.filter(q => q.category === currentCategory);
  if (currentIndex < filteredQuotes.length - 1) {
    currentIndex++; // Move to the next quote
    displayQuote(currentIndex);
  }
});

// Random button functionality
randomButton.addEventListener('click', () => {
    const filteredQuotes = quotes.filter(q => q.category === currentCategory);
    if (filteredQuotes.length > 0) {
        currentIndex = Math.floor(Math.random() * filteredQuotes.length); // Random index
        displayQuote(currentIndex);
    }
});

// Dark/Light mode toggle functionality
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeToggle.checked);
});