import { Link } from "react-router-dom";

export default function ProductsPage(){
     const products = [
       {
         id: 1,
         url: "https://www.joyfay.com/joyfay-stuffed-63-5-25-ft-light-brown-giant-teddy-bear.html",
         name: "Giant Teddy Bear",
         price: 79.99,
         amount: 50,
         description:
           "A 63-inch light brown giant teddy bear, perfect for cuddling.",
         image:
           "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",
       },
       {
         id: 2,
         url: "https://www.actionfigureinsider.com/set-the-scene-bring-the-lego-city-adventures-tv-series-to-life-with-the-new-lego-city-main-square-set/",
         name: "LEGO City Main Square Set",
         price: 199.99,
         amount: 30,
         description:
           "A comprehensive LEGO City set to build and explore the main square.",
         image:
           "https://www.actionfigureinsider.com/wp-content/uploads/2020/09/60271_Box1_v39.jpg",
       },
       {
         id: 3,
         url: "https://toptoyusa.com/product/barbie-mattel-year-2015-friends-series-12-inch-doll-in-pink/",
         name: "Barbie Doll",
         price: 24.99,
         amount: 40,
         description:
           "A stylish Barbie doll dressed in pink, ready for endless fun.",
         image:
           "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",
       },
       {
         id: 4,
         url: "https://www.goonproducts.com/best-remote-control-cars-for-toddlers/",
         name: "Remote Control Car",
         price: 49.99,
         amount: 25,
         description:
           "A fast and durable remote control car suitable for toddlers.",
         image:
           "https://www.goonproducts.com/wp-content/uploads/2021/01/Remote-Control-Car-for-Toddlers.jpg",
       },
       {
         id: 5,
         url: "https://dollibu.com/product/dollibu-white-gold-unicorn-stuffed-animal-plush-kids-adults-huggable-rainbow-unicorn-cuddle-gifts-cute-stuffed-animals-for-toddler-baby-first-teddy-bear-soft-toys-for-girls-boys-11-5-inch/",
         name: "Stuffed Unicorn",
         price: 22.99,
         amount: 35,
         description:
           "A magical white and gold unicorn plush toy for kids who love fantasy.",
         image:
           "https://dollibu.com/wp-content/uploads/2020/01/DolliBu-White-Gold-Unicorn-Stuffed-Animal-Plush.jpg",
       },
       {
         id: 6,
         url: "https://www.ebay.com/itm/100pc-Hand-Crafted-Wooden-Train-Set-Triple-Loop-Railway-Track-Kids-Toy-Play-Set-/311484841722",
         name: "Wooden Train Set",
         price: 29.99,
         amount: 20,
         description:
           "A 100-piece handcrafted wooden train set with triple loop railway tracks.",
         image: "https://i.ebayimg.com/images/g/7~AAAOSwHnFV0CkA/s-l1600.jpg",
       },
       {
         id: 7,
         url: "https://www.wayfair.ca/Teamson-Kids-2-Piece-Wooden-Play-Kitchen-Set-TMD1667.html",
         name: "Kids' Kitchen Playset",
         price: 59.99,
         amount: 15,
         description:
           "A two-piece wooden play kitchen set to inspire young chefs.",
         image:
           "https://secure.img1-fg.wfcdn.com/im/89287207/resize-h800%5Ecompr-r85/1000/1000/Teamson-Kids-2-Piece-Wooden-Play-Kitchen-Set.jpg",
       },
       {
         id: 8,
         url: "https://puzzlesaustralia.com.au/product/african-animal-puzzle-kids-puzzles/",
         name: "Animal Puzzle",
         price: 14.99,
         amount: 60,
         description:
           "A colorful African animal-themed puzzle for developing problem-solving skills.",
         image:
           "https://puzzlesaustralia.com.au/wp-content/uploads/2020/06/African-Animal-Puzzle.jpg",
       },
       {
         id: 9,
         url: "https://www.walmart.ca/en/ip/Brio-Set-Fits-Jr-Melissa-Boys-Thomas-SainSmart-Tracks-Wood-old-3-4-5-Kids-Girls-Wooden-Year-Toddler-Train-Doug-Double-Side-Toy/PRD3DNPQK5LB4JR",
         name: "Dinosaur Figures Set",
         price: 34.99,
         amount: 28,
         description:
           "A collection of detailed dinosaur figures for prehistoric adventures.",
         image:
           "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",
       },
       {
         id: 10,
         url: "https://www.etsy.com/uk/listing/924368897/slime-kit-126-pcs-diy-slime-making-kit",
         name: "DIY Slime Kit",
         price: 18.99,
         amount: 45,
         description:
           "A 126-piece DIY slime making kit for creative and safe fun.",
         image:
           "https://i.etsystatic.com/21916622/r/il/0f3f4e/2664027890/il_794xN.2664027890_1x1c.jpg",
       },
     ];

     return (
       <main>
         <section className="objects-section" id="objects">
           <div className="objects-container">
             {products.map((product) => {
                return <Link key={product.id} to={`/product/${product.id}`}>
                 <article className="object-card">
                   <h3>{product.name}</h3>
                   <img src={product.image} alt={product.name} />
                   <p>
                     <strong>Price:</strong> ${product.price}
                   </p>
                   <p>
                     <strong>Amount:</strong> {product.amount} in stock
                   </p>
                   <p>
                     <strong>Description:</strong> {product.description}
                   </p>
                   <button>
                    
                   </button>
                   {/* <a
                     href={product.url}
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     Buy Now
                   </a> */}
                 </article>
               </Link>
})}
           </div>
         </section>
       </main>
     );
}