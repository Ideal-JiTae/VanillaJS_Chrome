const quotes = [
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author : "Maya Angelou",
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela",
    },
    {
        quote : "In the end, it’s not the years in your life that count. It’s the life in your years.",
        author : "Abraham Lincoln",
    },
    {
        quote : "Life is either a daring adventure or nothing at all.",
        author : "Helen Keller",
    },
    {
        quote : "Keep your eyes on the stars and your feet on the ground.",
        author : "Theodore Roosevelt",
    },
    {
        quote : "Despite the forecast, live like it’s spring",
        author : "Lilly Pulitzer",
    },
    {
        quote : "The two most important days in your life are the day you are born and the day you find out why.",
        author : "Mark Twain",
    },
    {
        quote : "There is always some madness in love. But there is also always some reason in madness.",
        author : "Friedrich Nietzsche",
    },
    {
        quote : "If you would be loved, love and be lovable.",
        author : "Benjamin Franklin",
    },
    {
        quote : "The supreme happiness in life is the conviction that we are loved.",
        author : "Victor Hugo",
    },
    {
        quote : "The course of true love never did run smooth.",
        author : "William Shakespeare",
    },
    {
        quote : "Success is going from failure to failure without a loss of enthusiasm.",
        author : "Winston Churchill",
    },
    {
        quote : "Always bear in mind that your own resolution to succeed is more important than any other.",
        author : "Abraham Lincoln",
    },
    {
        quote : "Try not to become a man of success but rather try to become a man of value.",
        author : "Albert Einstein",
    },
    {
        quote : "We must believe in luck. For how else can we explain the success of those we don’t like?",
        author : "Jean Cocteau",
    },
    {
        quote : "I find that the harder I work, the more luck I seem to have.",
        author : "Thomas Jefferson",
    },
    {
        quote : "Don’t be afraid to give up the good to go for the great.",
        author : "John D. Rockefeller",
    },
    {
        quote : "I never dreamed about success, I worked for it.",
        author : "Estee Lauder",
    },
    {
        quote : "Do not try to be original, just try to be good.",
        author : "Paul Rand",
    },
    {
        quote : "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward",
        author : "Martin Luther King Jr.",
    },
    {
        quote : "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        author : "Reid Hoffman",
    },
    {
        quote : "Some people dream of success, while other people get up every morning and make it happen.",
        author : "Wayne Huizenga",
    },
    {
        quote : "The only thing worse than starting something and failing … is not starting something.",
        author : "Seth Godin",
    },
    {
        quote : "If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse.",
        author : "Jim Rohn",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;