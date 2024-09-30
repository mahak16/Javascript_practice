/*let btn = document.querySelector('#new-quote'); //new quote button
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let mahatmaBtn = document.querySelector('#mahatma') //mahatama button
let cardList = document.querySelector('.card-list')
let card = document.querySelector('.card')

const quotes = [{
    quote: `"the best way to find yourself is to love yourself in the service of others"`,
    person: `Mahatma Gandhi`
},{
    quote: `"If you want  to live a happy life , tie it to a goal, not to people or things"`,
    person:`Albert Einstein`
},{
    quote: `"Your time is Limited, so do not waste it living someone else's life."`,
    person:`steve jobs`
},{
    quote: `"Tell me and I forget.Teach me and I remember.Involve me and I learn."`,
    person:`Benjamin Franklin`
},{
    quote: `"the  way to find yourself is to love yourself in the service of others"`,
    person: `Mahatma Gandhi`
}];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

mahatma.addEventListener('click',function(){
    //let random = Math.floor(Math.random()*quotes.length);
    const mahatma = quotes.filter(quote => quote.person === 'Mahatma Gandhi');
    console.log('matched quotes', mahatma)    

    //clear the list first
    cardList.innerHTML = ""
    mahatma.forEach(item =>{
        //create a new clone card
        const clonedCardEle = card.cloneNode(true);
        //assign values
        const clonedCardQuoteEle =  clonedCardEle.querySelector('.quote')
        clonedCardQuoteEle.innerText = item.quote;
        const clonedCardPersonEle = clonedCardEle.querySelector('.person')
        clonedCardPersonEle.innerText = item.person;

        //append to parent list
        cardList.appendChild(clonedCardEle)
    })

  /*   for(i = 0;i< mahatma.length;i++){
        const quoteElement = document.createElement('p');
        quoteElement.innerText = mahatma[i].quote;
        quote.appendChild(quoteElement);
        person.innerText = mahatma[i].person;
    }
     
    
})*/
let btn = document.querySelector('#new-quote'); // New quote button
let randomQuoteDisplay = document.querySelector('.random-quote'); // Container for random quote
let randomPersonDisplay = document.querySelector('.random-person'); // Container for random person

let mahatmaBtn = document.querySelector('#mahatma'); // Mahatma button
let cardList = document.querySelector('.card-list'); // Container for Mahatma quotes
let card = document.querySelector('.card'); // Template card element

// Selecting the entire random quote section and Mahatma quote section
let randomQuoteSection = document.querySelector('.random-quote-section'); 
let mahatmaQuoteSection = document.querySelector('.mahatma-quote-section');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    person: `Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: `Benjamin Franklin`
}, {
    quote: `"The way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
}];

// Event listener for "New Quote" button
btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    randomQuoteDisplay.innerText = quotes[random].quote;
    randomPersonDisplay.innerText = quotes[random].person;
    
    // Hide Mahatma quote section and show random quote section
    mahatmaQuoteSection.style.display = 'none';
    randomQuoteSection.style.display = 'block';
});

// Event listener for "Mahatma" button
mahatmaBtn.addEventListener('click', function() {
    const mahatmaQuotes = quotes.filter(quote => quote.person === 'Mahatma Gandhi');
    console.log('Matched quotes', mahatmaQuotes);

    // Clear the card list before adding new Mahatma quotes
    cardList.innerHTML = "";

    mahatmaQuotes.forEach(item => {
        // Create a new cloned card element
        const clonedCardEle = card.cloneNode(true);

        // Remove hidden attribute from cloned card
        clonedCardEle.hidden = false;

        // Assign values to the cloned card
        const clonedCardQuoteEle = clonedCardEle.querySelector('.quote');
        clonedCardQuoteEle.innerText = item.quote;
        const clonedCardPersonEle = clonedCardEle.querySelector('.person');
        clonedCardPersonEle.innerText = item.person;

        // Append cloned card to the card list
        cardList.appendChild(clonedCardEle);
    });

    // Hide random quote section and show Mahatma quote section
    randomQuoteSection.style.display = 'none';
    mahatmaQuoteSection.style.display = 'block';
});

