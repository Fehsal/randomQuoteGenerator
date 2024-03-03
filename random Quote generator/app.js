let btn = document.querySelector('#btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

let quotes = [{
    quote: `“As you simplify your life, the laws of the universe will be simpler.”`,
        person: '  —Henry David Thoreau'
}, {
    quote: `“When the solution is simple, God is answering.”`, person: "—Albert Einstein"
}, {
    quote:
        `“I have witnessed the softening of the hardest of hearts by a simple smile.`
    , person: '—Goldie Hawn'
}, {
    quote:
        `“I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.”`,
    person: '—Mark Zuckerberg'
    }, {
    quote: `“Being simple is attractive to anyone."`,
        person: '—Anonymous'
    }, {
    quote: `"But what is happiness except the simple harmony between a man and the life he leads.”`,
        person: ' —Albert Camus'
    }, {
    quote: `“Like me for who I am and not for who you want me to be.Take it or leave it.That simple.”`,
        person: ' —Anonymous'
    }, {
    quote: `“Love one another and you will be happy.It’s as simple and as difficult as that.” `,
        person: " —Michael Leunig"
    }, {
    quote: `“There is no power on earth, that can neutralize the influence of a high, pure, simple and useful life.”`,
        person: " —Booker T.Washington"
    }, {
    quote:
        `“Success is nothing more than a few simple disciplines, practiced every day.”`,
    person: " —Jim Rohn"
}, {
    quote: `“Don’t reduce your efforts just because you’re missing the target, nothing great comes simple.Steady your aim and train harder.”`,
    person: "—Anonymous"
},];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});