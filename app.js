let cards = [
  {
    title: "Rush hour1",
    img: "asset/m-01.png",
  },
  {
    title: "Rush hour2",
    img: "asset/m-02.png",
  },
  {
    title: "Rush hour3",
    img: "asset/m-03.png",
  },
];

const allCardContainer = document.querySelectorAll('.card');
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

// nessasary variables
const lastCard = cards.length - 1;
let activeCard = 0;
let count = 0;

// render cards 

    // console.log(activeCard);

    for(activeCard = 0; activeCard <= lastCard; activeCard++){
        let c = cards[activeCard];
        // renderCard();
        console.log(activeCard);
        let all =allCardContainer[activeCard];
        all.style.backgroundImage = `url('${c.img}')`;

    }






