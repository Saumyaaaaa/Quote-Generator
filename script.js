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


// Initialize display with the first quote
const quoteContainer = document.getElementById("quote");
function displayQuote(index) {
    const filteredQuotes = quotes.filter(q => q.category === currentCategory);
    quoteContainer.textContent = filteredQuotes[index].text;
}

displayQuote(currentIndex);


// Category change functionality
const categorySelect = document.getElementById("category");
categorySelect.addEventListener('change', (event) => {
    currentCategory = event.target.value;
    currentIndex = 0; // Reset to the first quote in the new category
    displayQuote(currentIndex);
});

// Previous button functionality
const prevButton = document.getElementById("prev");
prevButton.addEventListener('click', () => {
  const filteredQuotes = quotes.filter(q => q.category === currentCategory);
  if (currentIndex > 0) {
    currentIndex--; // Move to the previous quote
    displayQuote(currentIndex);
  }
});

// Next button functionality
const nextButton = document.getElementById("next");
nextButton.addEventListener('click', () => {
  const filteredQuotes = quotes.filter(q => q.category === currentCategory);
  if (currentIndex < filteredQuotes.length - 1) {
    currentIndex++; // Move to the next quote
    displayQuote(currentIndex);
  }
});



// Random button functionality
const randomButton = document.getElementById("random");
randomButton.addEventListener('click', () => {
    const filteredQuotes = quotes.filter(q => q.category === currentCategory);
    if (filteredQuotes.length > 0) {
        currentIndex = Math.floor(Math.random() * filteredQuotes.length); // Random index
        displayQuote(currentIndex);
    }
});

// Dark/Light mode toggle functionality
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeToggle.checked);
});

// Initial font size
let currentFontSize = 1.4; // Example initial size in rem

// Function to update font size
const quoteElement = document.getElementById("quote");

function updateFontSize(size) {
    quoteElement.style.fontSize = `${size}rem`;
}

//increaseFontButton functionality
const increaseFontButton = document.getElementById("increase-font");
increaseFontButton.addEventListener('click', () => {
    currentFontSize += 0.1; // Increase size by 0.1rem
    updateFontSize(currentFontSize);
});

//decreaseFontButton functionality
const decreaseFontButton = document.getElementById("decrease-font");
decreaseFontButton.addEventListener('click', () => {
    currentFontSize = Math.max(0.5, currentFontSize - 0.1); // Decrease size by 0.1rem, minimum 0.5rem
    updateFontSize(currentFontSize);
});

