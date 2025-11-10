import  logo_img from './Logo/Logo.jpg';
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


//girls Dress Red
import g1 from "./Gimg1.jpg";
import g2 from "./Gimg2.jpg";
import g3 from "./Gimg3.jpg";
import g4 from "./Gimg4.jpg";
import g5 from "./Gimg5.jpg";

//girls top orange
import Gt1 from "../assets/Categories/Kids/gt1.jpg";
import Gt2 from "../assets/Categories/Kids/gt2.jpg";
import Gt3 from "../assets/Categories/Kids/gt3.jpg";
import Gt4 from "../assets/Categories/Kids/gt4.jpg";


//Boys T-shirts
import Ts1 from "../assets/Categories/Kids/Tshirts1.jpg";
import Ts2 from "../assets/Categories/Kids/Tshirts2.jpg";
import Ts3 from "../assets/Categories/Kids/Tshirts3.jpg";
import Ts4 from "../assets/Categories/Kids/Tshirts4.jpg";

//BoysPants  blue
import Bt1 from "../assets/Categories/Kids/boysPants1.jpg";
import Bt2 from "../assets/Categories/Kids/boysPants2.jpg";
import Bt3 from "../assets/Categories/Kids/boysPants3.jpg";
import Bt4 from "../assets/Categories/Kids/boysPants4.jpg";


//women dress pink
import p1 from "../assets/Categories/women/pink1.webp";
import p2 from "../assets/Categories/women/pink2.jpg";
import p3 from "../assets/Categories/women/pink3.jpg";
import p4 from "../assets/Categories/women/pink4.avif";
//

//women jacket blue
import bl1 from "../assets/Categories/women/jacket1.jpg";
import bl2 from "../assets/Categories/women/jacket2.jpg";
import bl3 from "../assets/Categories/women/jacket3.jpg";
import bl4 from "../assets/Categories/women/jacket4.jpg";

//women pants

import pa1 from "../assets/Categories/women/whitePants1.jpg";
import pa2 from  "../assets/Categories/women/whitePants2.jpg";
import pa3 from "../assets/Categories/women/whitePants3.jpg";
import pa4 from  "../assets/Categories/women/whitePants4.jpg"

//women sweater
import s1 from "../assets/Categories/women/sweater1.jpg";
import s2 from "../assets/Categories/women/sweater2.jpg";
import s3 from "../assets/Categories/women/sweater3.jpg";
import s4 from "../assets/Categories/women/sweater4.jpg";
import s5 from "../assets/Categories/women/sweater5.jpg";
import s6 from "../assets/Categories/women/sweater6.jpg";



//mens Jeans levis
import Lj1 from "../assets/Categories/men/Levis1.webp";
import Lj2 from "../assets/Categories/men/Levis2.webp";
import Lj3 from "../assets/Categories/men/Levis3.webp";
import Lj4 from "../assets/Categories/men/Levis4.webp";
import Lj5 from "../assets/Categories/men/Levis5.webp";


//mens puma t-shirts black
import Pt1 from "../assets/Categories/men/Puma1.avif";
import Pt2 from "../assets/Categories/men/Puma2.avif";
import Pt3 from "../assets/Categories/men/Puma3.avif";
import Pt4 from "../assets/Categories/men/Puma4.avif";
import Pt5 from "../assets/Categories/men/Puma5.avif";

//Mens shirts Red AllenSolley

import Al1 from "../assets/Categories/men/AllenSolley (1).jpg";
import Al2 from "../assets/Categories/men/AllenSolley (2).jpg";
import Al3 from "../assets/Categories/men/AllenSolley (3).jpg";
import Al4 from "../assets/Categories/men/AllenSolley (4).jpg";
import Al5 from "../assets/Categories/men/AllenSolley (5).jpg";


//Mens jacket white

import J1 from "../assets/Categories/men/MenJacket1.jpg";
import J2 from "../assets/Categories/men/MenJacket2.jpg";
import J3 from "../assets/Categories/men/MenJacket3.jpg";
import J4 from "../assets/Categories/men/MenJacket4.jpg";
import J5 from "../assets/Categories/men/MenJacket5.jpg";



export const mockData = [
  // --- WOMEN ---
  { id: 1, category: "women", name: "Women Dress", price: 45, img: [p1,p2,p3,p4], size: "M", color: "pink", brand: "AllenSolley", description: "Stylish women’s medi dress." },
  { id: 2, category: "women", name: "Women Pants", price: 30, img: [pa1,pa2,pa3,pa4], size: "S", color: "White", brand: "Nike", description: "Fashionable pants for women." },
  { id: 3, category: "women", name: "Women Jacket", price: 60, img: [bl1,bl2,bl3,bl4], size: "L", color: "Blue", brand: "Adidas", description: "Warm and stylish jacket." },
  { id: 4, category: "women", name: "Women Sweater", price: 35, img: [s1,s2,s3,s4,s5,s6], size: "M", color: "purple", brand: "H&M", description: "Elegant ." },

  // --- MEN ---
  { id: 5, category: "men", name: "Men shirts", price: 50, img: [Al1,Al2,Al3,Al4,Al5], size: "L", color: "Red", brand: "AllenSolley", description: "Stylish men red shirts ." },
  { id: 6, category: "men", name: "Men T-Shirt", price: 25, img: [Pt1,Pt2,Pt3,Pt4,Pt5], size: "M", color: "Black", brand: "puma", description: "Basic T-shirt." },
  { id: 7, category: "men", name: "Men Jeans", price: 60, img: [Lj1,Lj2,Lj3,Lj4,Lj5], size: "34", color: "Blue", brand: "Levi's", description: "Classic fit jeans." },
  { id: 8, category: "men", name: "Men Jacket", price: 80, img: [J1,J2,J3,J4,J5], size: "XL", color: "White", brand: "Nike", description: "Stylish winter jacket." },

  // --- KIDS ---
  { id: 9, category: "kids", subcategory: "boys", name: "Boys T-shirt", price: 25, img: [Ts1,Ts2,Ts3,Ts4], size: "M", color: "Orange,Red,Blue,Yellow", brand: "Nike", description: "Cotton T-shirt for boys." },
  { id: 10, category: "kids", subcategory: "boys", name: "Boys Pants", price: 40, img: [Bt1,Bt2,Bt3,Bt4], size: "L", color: "Blue", brand: "Denim", description: "Denim jeans for boys." },
  { id: 11, category: "kids", subcategory: "girls", name: "Girls Dress", price: 30, img: [g1, g2, g3, g4,g5], size: "S", color: "Red", brand: "Puma", description: "Elegant dress for girls." },
  { id: 12, category: "kids", subcategory: "girls", name: "Girls Top", price: 20, img: [Gt1,Gt2,Gt3,Gt4], size: "M", color: "Orange", brand: "Nike", description: "Stylish top for girls." }
];






















// export const mockData1=[
//   {

   
//       men: [
//         { name: "Men Shirt", price: 35, img: [Image1], size: "L", color: "Blue", brand: "Nike", description: "A classic men’s shirt." },
//         { name: "Men Pants", price: 50, img: [Image2], size: "XL", color: "Green", brand: "Adidas", description: "Comfortable pants for men." },
//       ],
//       women: [
//         { name: "Women Dress", price: 45, img: [Image3], size: "M", color: "Red", brand: "Puma", description: "Stylish women’s dress." },
//         { name: "Women Top", price: 30, img: [Image1], size: "S", color: "Blue", brand: "Nike", description: "Fashionable top for women." },
//       ],
//     }
//     ,{
      
 
// }
// ]


























// import Image1 from "./products/product1.jpg";//mens shorts
// import Image2 from "./products/product2.jpg";//xl tshirts men
// import Image3 from "./products/product3.jpg";//men shirts
// import Image4 from "./products/product4.webp";//men shirts
// import Image5 from "./products/product5.webp";//men blezzer
// import Image6 from "./products/product6.webp";//men 
// import Image7 from "./products/product7.webp";//women dress
// import Image8 from "./products/product8.webp";//women
// import Image9 from "./products/product9.webp";//jents pant
// import Image10 from "./products/product10.webp";//men jackets



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
