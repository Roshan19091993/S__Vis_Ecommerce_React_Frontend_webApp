import  logo_img from '../assets/Logo/Logo.jpg';
export const assets={
    logo_img,
    // support_img,
    // menu_icon,
    // about_img,
    // razorpay_logo,
    // stripe_logo,
    // cross_icon,

};

export const Categories=[
    "MENS",
    "WOMENS",
    "KIDS",
    "BY BRAND",
]



import Image1 from "../assets/products/product1.jpg";//mens shorts
import Image2 from "../assets/products/product2.jpg";//xl tshirts men
import Image3 from "../assets/products/product3.jpg";//men shirts
import Image4 from "../assets/products/product4.webp";//men shirts
import Image5 from "../assets/products/product5.webp";//men blezzer
import Image6 from "../assets/products/product6.webp";//men 
import Image7 from "../assets/products/product7.webp";//women dress
import Image8 from "../assets/products/product8.webp";//women
import Image9 from "../assets/products/product9.webp";//jents pant
import Image10 from "../assets/products/product10.webp";//men jackets


// for girls
import g9 from "../assets/ProjectImage/Dresses/Girls-HopscotchBrand/img1.jpg";//girls
import mainImage from "../assets/ProjectImage/Jackets/Kids/Girls/Roxfid-brand/img1.jpg";//kids girls
import g2 from "../assets/ProjectImage/Jackets/Kids/Girls/Roxfid-brand/img2.jpg";
import g3 from "../assets/ProjectImage/Jackets/Kids/Girls/Roxfid-brand/img3.jpg";
import g4 from "../assets/ProjectImage/Jackets/Kids/Girls/Roxfid-brand/img4.jpg";
import g5 from "../assets/ProjectImage/Jackets/Kids/Girls/Roxfid-brand/img5.jpg";
export const mockData = [
  {
    id: 1,
    image: g9,
    name: "kids",
    price: 100,
  },
{
  id: 2,
  image: [mainImage, g2, g3, g4, g5], 
  name: "jackets",
  price: 150,

}
,
  {
    id: 3,
    image: Image3,
    name: "kurta",
    price: 200,
  },
  {
    id: 4,
    image: Image4,
    name: "shirts",
    price: 250,
  },
  {
    id: 5,
    image: Image5,
    name: "blezzers",
    price: 300,
  },
  {
    id: 6,
    image: Image6,
    name: "Product 6",
    price: 350,
  },
  {
    id: 7,
    image: Image7,
    name: "Product 7",
    price: 400,
  },
  {
    id: 8,
    image: Image8,
    name: "Product 8",
    price: 450,
  },
  {
    id: 9,
    image: Image9,
    name: "Product 9",
    price: 500,
  },
  {
    id: 10,
    image: Image10,
    name: "Product 10",
    price: 550,
  }


    
];








export const mockData1=[
  {

    kids: {
        boys: [
          { name: "Boys T-shirt", price: 25, img: [Image1], size: "M", color: "Red", brand: "Nike", description: "Comfortable cotton t-shirt." },
          { name: "Boys Jeans", price: 40, img: [Image2], size: "L", color: "Blue", brand: "Adidas", description: "Stylish denim jeans for boys." },
        ],
        girls: [
          { name: "Girls Dress", price: 30, img: [Image1], size: "S", color: "Green", brand: "Puma", description: "Elegant dress for girls." },
          { name: "Girls Top", price: 20, img: [g2], size: "M", color: "Red", brand: "Nike", description: "Stylish top for girls." },
        ],
      },
      men: [
        { name: "Men Shirt", price: 35, img: [Image1], size: "L", color: "Blue", brand: "Nike", description: "A classic men’s shirt." },
        { name: "Men Pants", price: 50, img: [Image2], size: "XL", color: "Green", brand: "Adidas", description: "Comfortable pants for men." },
      ],
      women: [
        { name: "Women Dress", price: 45, img: [Image3], size: "M", color: "Red", brand: "Puma", description: "Stylish women’s dress." },
        { name: "Women Top", price: 30, img: [Image1], size: "S", color: "Blue", brand: "Nike", description: "Fashionable top for women." },
      ],
    }
    ,{
      
  women: [
    {
      name: "Women Dress",
      price: 45,
      img: ["Image3.jpg"],  // Replace with actual image path
      size: "M",
      color: "Red",
      brand: "Puma",
      description: "Stylish women’s dress, perfect for casual outings.",
    },
    {
      name: "Women Top",
      price: 30,
      img: ["Image1.jpg"],  // Replace with actual image path
      size: "S",
      color: "Blue",
      brand: "Nike",
      description: "Fashionable top for women, ideal for workout or casual wear.",
    },
    {
      name: "Women Jacket",
      price: 60,
      img: ["Image2.jpg"],  // Replace with actual image path
      size: "L",
      color: "Black",
      brand: "Adidas",
      description: "Warm and stylish jacket for the winter season.",
    },
    {
      name: "Women Skirt",
      price: 35,
      img: ["Image4.jpg"],  // Replace with actual image path
      size: "M",
      color: "Green",
      brand: "H&M",
      description: "Elegant skirt for work or casual occasions.",
    },
  ],
  
  men: [
    {
      name: "Men Hoodie",
      price: 50,
      img: ["Image5.jpg"],  // Replace with actual image path
      size: "L",
      color: "Gray",
      brand: "Nike",
      description: "Comfortable hoodie for everyday wear or sports.",
    },
    {
      name: "Men T-Shirt",
      price: 25,
      img: ["Image6.jpg"],  // Replace with actual image path
      size: "M",
      color: "Black",
      brand: "Adidas",
      description: "Basic T-shirt, perfect for casual outings.",
    },
    {
      name: "Men Jeans",
      price: 60,
      img: ["Image7.jpg"],  // Replace with actual image path
      size: "34",
      color: "Blue",
      brand: "Levi's",
      description: "Classic fit jeans, perfect for any occasion.",
    },
    {
      name: "Men Jacket",
      price: 80,
      img: ["Image8.jpg"],  // Replace with actual image path
      size: "XL",
      color: "Brown",
      brand: "Zara",
      description: "Stylish jacket to stay warm during the winter.",
    },
  ],

 
}
]






























// export const products = [
//   // ---------- WOMEN CLOTHING (40) ----------
//   {
//     _id: "w1",
//     name: "Women Round Neck Cotton Top",
//     description: "Lightweight knitted pullover shirt, close-fitting and soft for casual wear.",
//     price: 499,
//     image: [P_img1],
//     category: "women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L"],
//     date: 17166334345001,
//     bestseller: true
//   },
//   {
//     _id: "w2",
//     name: "Women Floral Print Kurti",
//     description: "Beautiful floral printed kurti in soft rayon fabric.",
//     price: 799,
//     image: [P_img2],
//     category: "women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL"],
//     date: 17166334345002,
//     bestseller: false
//   },
//   {
//     _id: "w3",
//     name: "Women Blue Denim Jeans",
//     description: "Stretchable denim jeans with modern slim fit.",
//     price: 999,
//     image: [P_img3],
//     category: "women",
//     subCategory: "Bottomwear",
//     sizes: ["S", "M", "L", "XL"],
//     date: 17166334345003,
//     bestseller: true
//   },
//   {
//     _id: "w4",
//     name: "Women Printed Skirt",
//     description: "Stylish printed long skirt made of breathable fabric.",
//     price: 699,
//     image: [P_img4],
//     category: "women",
//     subCategory: "Bottomwear",
//     sizes: ["S", "M", "L"],
//     date: 17166334345004,
//     bestseller: false
//   },
//   {
//     _id: "w5",
//     name: "Women Casual Shirt",
//     description: "Button-down cotton shirt for a relaxed look.",
//     price: 749,
//     image: [P_img5],
//     category: "women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L"],
//     date: 17166334345005,
//     bestseller: false
//   },
//   {
//     _id: "w6",
//     name: "Women Crop Top",
//     description: "Trendy crop top with round neck and short sleeves.",
//     price: 549,
//     image: [P_img6],
//     category: "women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L"],
//     date: 17166334345006,
//     bestseller: true
//   },
//   {
//     _id: "w7",
//     name: "Women Cotton Palazzo",
//     description: "Soft cotton palazzo pants ideal for summer comfort.",
//     price: 699,
//     image: [P_img7],
//     category: "women",
//     subCategory: "Bottomwear",
//     sizes: ["S", "M", "L", "XL"],
//     date: 17166334345007,
//     bestseller: false
//   },
//   {
//     _id: "w8",
//     name: "Women Sweatshirt",
//     description: "Warm cotton sweatshirt with stylish print.",
//     price: 999,
//     image: [P_img8],
//     category: "women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL"],
//     date: 17166334345008,
//     bestseller: true
//   },
//   {
//     _id: "w9",
//     name: "Women Track Pants",
//     description: "Comfortable track pants for gym and casual wear.",
//     price: 849,
//     image: [P_img9],
//     category: "women",
//     subCategory: "Bottomwear",
//     sizes: ["S", "M", "L", "XL"],
//     date: 17166334345009,
//     bestseller: false
//   },
//   {
//     _id: "w10",
//     name: "Women Printed Kurta Set",
//     description: "Elegant cotton kurta with matching pants and dupatta.",
//     price: 1499,
//     image: [P_img10],
//     category: "women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL"],
//     date: 17166334345010,
//     bestseller: true
//   },
//   {
//     _id: "w11",
//     name: "Women Full Sleeve T-Shirt",
//     description: "Soft stretchable fabric perfect for layering.",
//     price: 599,
//     image: [P_img11],
//     category: "women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L"],
//     date: 17166334345011,
//     bestseller: false
//   },
//   {
//     _id: "w12",
//     name: "Women Linen Pants",
//     description: "Lightweight linen pants for elegant daily wear.",
//     price: 1099,
//     image: [P_img12],
//     category: "women",
//     subCategory: "Bottomwear",
//     sizes: ["S", "M", "L", "XL"],
//     date: 17166334345012,
//     bestseller: true
//   },
//   {
//     _id: "w13",
//     name: "Women Sleeveless Blouse",
//     description: "Trendy sleeveless blouse ideal for layering or summer wear.",
//     price: 649,
//     image: [P_img13],
//     category: "women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L"],
//     date: 17166334345013,
//     bestseller: false
//   },
//   {
//     _id: "w14",
//     name: "Women Leggings",
//     description: "Stretchable leggings made with breathable cotton blend.",
//     price: 499,
//     image: [P_img14],
//     category: "women",
//     subCategory: "Bottomwear",
//     sizes: ["S", "M", "L", "XL"],
//     date: 17166334345014,
//     bestseller: true
//   },
//   {
//     _id: "w15",
//     name: "Women Hoodie",
//     description: "Cozy winter hoodie with soft fleece lining.",
//     price: 1299,
//     image: [P_img15],
//     category: "women",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L"],
//     date: 17166334345015,
//     bestseller: true
//   },

//   // ---------- MEN CLOTHING (35) ----------
//   {
//     _id: "m1",
//     name: "Men Round Neck T-Shirt",
//     description: "Classic cotton t-shirt perfect for daily use.",
//     price: 599,
//     image: [P_img16],
//     category: "men",
//     subCategory: "Topwear",
//     sizes: ["M", "L", "XL"],
//     date: 17166334345016,
//     bestseller: true
//   },
//   {
//     _id: "m2",
//     name: "Men Polo Shirt",
//     description: "Half-sleeve polo with collar and soft fabric.",
//     price: 799,
//     image: [P_img17],
//     category: "men",
//     subCategory: "Topwear",
//     sizes: ["M", "L", "XL"],
//     date: 17166334345017,
//     bestseller: false
//   },
//   {
//     _id: "m3",
//     name: "Men Slim Fit Jeans",
//     description: "Stretchable denim with a perfect slim fit.",
//     price: 1099,
//     image: [P_img18],
//     category: "men",
//     subCategory: "Bottomwear",
//     sizes: ["M", "L", "XL"],
//     date: 17166334345018,
//     bestseller: true
//   },
//   {
//     _id: "m4",
//     name: "Men Formal Shirt",
//     description: "Pure cotton formal shirt suitable for office wear.",
//     price: 999,
//     image: [P_img19],
//     category: "men",
//     subCategory: "Topwear",
//     sizes: ["M", "L", "XL", "XXL"],
//     date: 17166334345019,
//     bestseller: false
//   },
//   {
//     _id: "m5",
//     name: "Men Track Pants",
//     description: "Comfortable polyester track pants for workouts.",
//     price: 899,
//     image: [P_img20],
//     category: "men",
//     subCategory: "Bottomwear",
//     sizes: ["M", "L", "XL"],
//     date: 17166334345020,
//     bestseller: false
//   },
//   {
//     _id: "m6",
//     name: "Men Hoodie Sweatshirt",
//     description: "Soft fleece hoodie for cozy winters.",
//     price: 1299,
//     image: [P_img21],
//     category: "men",
//     subCategory: "Topwear",
//     sizes: ["M", "L", "XL"],
//     date: 17166334345021,
//     bestseller: true
//   },
//   {
//     _id: "m7",
//     name: "Men Casual Shirt",
//     description: "Stylish checked shirt with full sleeves.",
//     price: 899,
//     image: [P_img22],
//     category: "men",
//     subCategory: "Topwear",
//     sizes: ["M", "L", "XL"],
//     date: 17166334345022,
//     bestseller: false
//   },
//   {
//     _id: "m8",
//     name: "Men Joggers",
//     description: "Slim fit joggers ideal for both gym and streetwear.",
//     price: 999,
//     image: [P_img23],
//     category: "men",
//     subCategory: "Bottomwear",
//     sizes: ["M", "L", "XL"],
//     date: 17166334345023,
//     bestseller: true
//   },

//   // ---------- KIDS CLOTHING (25) ----------
//   {
//     _id: "k1",
//     name: "Kids Cartoon Print T-Shirt",
//     description: "Soft cotton t-shirt with colorful cartoon print.",
//     price: 399,
//     image: [P_img24],
//     category: "kids",
//     subCategory: "Topwear",
//     sizes: ["2Y", "3Y", "4Y", "5Y"],
//     date: 17166334345024,
//     bestseller: true
//   },
//   {
//     _id: "k2",
//     name: "Kids Denim Shorts",
//     description: "Stretchable denim shorts for playful comfort.",
//     price: 499,
//     image: [P_img25],
//     category: "kids",
//     subCategory: "Bottomwear",
//     sizes: ["2Y", "3Y", "4Y", "5Y"],
//     date: 17166334345025,
//     bestseller: false
//   },
//   {
//     _id: "k3",
//     name: "Kids Hoodie",
//     description: "Warm hoodie with animal face design.",
//     price: 699,
//     image: [P_img26],
//     category: "kids",
//     subCategory: "Topwear",
//     sizes: ["2Y", "3Y", "4Y", "5Y"],
//     date: 17166334345026,
//     bestseller: true
//   },
//   {
//     _id: "k4",
//     name: "Kids Pajama Set",
//     description: "Cute printed pajama set made of pure cotton.",
//     price: 599,
//     image: [P_img27],
//     category: "kids",
//     subCategory: "Bottomwear",
//     sizes: ["2Y", "3Y", "4Y"],
//     date: 17166334345027,
//     bestseller: false
//   },
//   {
//     _id: "k5",
//     name: "Kids Party Dress",
//     description: "Bright festive frock for girls, perfect for birthdays.",
//     price: 999,
//     image: [P_img28],
//     category: "kids",
//     subCategory: "Topwear",
//     sizes: ["2Y", "3Y", "4Y", "5Y"],
//     date: 17166334345028,
//     bestseller: true
//   },

//   // ... Continue this same pattern up to w40, m35, k25 (total = 100)
// ];
