const Product = require('./Product');

Product.create([
  {
    brandName: 'Marimekko',
    name: 'Hyasintti napkin 50x50, white, green & black' //https://www.funkis.com/home-kitchen/marimekko-hyasintti-napkin-50x50-white-green-black.html
  },
  {
    brandName: 'Thorberg',
    name: 'Reading glasses noah, yellow turtle' //https://www.funkis.com/glasses/reading-glasses-brown-turtle/thorberg-reading-glasses-noah-yellow-turtle.html
  },
  {
    brandName: 'The FortyNine Studio',
    name: 'Flip flop slip medium bowl raku, tin blue' //https://www.funkis.com/home-kitchen/the-fortynine-studio-flip-flop-slip-medium-bowl-raku-tin-blue.html
  },
  {
    brandName: 'Funkis',
    name: 'gota necklace - black' //https://www.funkis.com/jewellery/funkis-gota-necklace-black.html
  }
])

.then((products) => {
  console.log('Created products', products)
})
.catch((error) => {
  console.error(error)
})