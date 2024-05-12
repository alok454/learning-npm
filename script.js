import Quote from 'inspirational-quotes';

const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");

quoteText.innerText = Quote.getQuote().text;
author.innerText = Quote.getQuote().author;