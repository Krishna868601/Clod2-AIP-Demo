const productData = [
  {
    id: "prod1",
    brand: "Cera",
    name: "Black T-Shirt",
    price: "$28",
    image: "img/products/f1.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "prod2",
    brand: "Cera",
    name: "White Sweatshirt",
    price: "$40",
    image: "img/products/f2.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "prod3",
    brand: "Cera",
    name: "Grey Shirt",
    price: "$50",
    image: "img/products/f3.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "prod4",
    brand: "Cera",
    name: "Red Sweatshirt",
    price: "$20",
    image: "img/products/f4.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "prod5",
    brand: "Cera",
    name: "Sunflower Sweatshirt",
    price: "$35",
    image: "img/products/f5.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "prod6",
    brand: "Cera",
    name: "Perfect Sweatshirt",
    price: "$35",
    image: "img/products/f6.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "prod7",
    brand: "Cera",
    name: "Mountain Sweatshirt",
    price: "$25",
    image: "img/products/f7.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "prod8",
    brand: "Cera",
    name: "White Hoodie",
    price: "$35",
    image: "img/products/f8.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  }
];
const productCards = document.querySelectorAll('.product-card');
/*productCards.forEach(card => {
  card.addEventListener('click', function() {
    window.location.href = 'sproduct.html';
  });
});
*/
productCards.forEach(card => {
  card.addEventListener('click', function(event) {
    // Check if the click occurred on the .add-to-cart element
    if (!event.target.closest('.add-to-cart')) {
      window.location.href = 'sproduct.html';
    }
  });
});

const main= document.getElementById("main-img");
const smallImg= document.getElementById('prod-img-sm');
  smallImg.addEventListener('click',function(event){
    newImg=event.target.src;
    main.src=newImg;
});
