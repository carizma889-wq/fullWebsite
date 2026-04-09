/* eslint-disable no-unused-vars */
import { v4 as uuid } from "uuid"
import product1 from '/img/products1.png'
import product2 from '/img/products2.png'
import product3 from '/img/products3.png'
import product4 from '/img/products4.png'
import product5 from '/img/products5.png'
import product6 from '/img/products6.png'
import product7 from '/img/products7.png'
import product8 from '/img/products8.png'
import product9 from '/img/products9.png'
import product10 from '/img/products10.png'
import product11 from '/img/products11.png'
import product12 from '/img/products12.png'
import product13 from '/img/products13.png'
import product14 from '/img/products14.png'
import product15 from '/img/products15.png'
import product16 from '/img/products16.png'
import product17 from '/img/products17.png'
import product18 from '/img/products18.png'
import product19 from '/img/products19.png'
import product20 from '/img/products20.png'
import product21 from '/img/products21.png'
import StorefrontIcon from '/img/iconMarket.png';
import ShoppingBagIcon from '/img/paper-bag.png';
import MonetizationOnIcon from '/img/coin.png';
import money from '/img/money.png'
import man1 from '/img/man1.png'
import woman2 from '/img/woman2.png'
import man2 from '/img/man2.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// 
import car from '/img/car.png'
import headPhone from '/img/headPhone.png';
import Services from '/img/Services.png'
// 
import call from '/img/IconCall.png';
import email from '/img/IconEmail.png';
// 
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import WatchIcon from '@mui/icons-material/Watch';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

// 

export const NAV_LINKS =[ 'Home','Content','About','Sign Up']

export const SIDEBAR_LINKS=[
    {id:uuid(),title:'Woman’s Fashion',isCollapse:true},
    {id:uuid(),title:'Men’s Fashion',isCollapse:true},
    {id:uuid(),title:'Electronics',isCollapse:false},
    {id:uuid(),title:'Home & Lifestyle',isCollapse:false},
    {id:uuid(),title:'Medicine',isCollapse:false},
    {id:uuid(),title:'Sports & Outdoor',isCollapse:false},
    {id:uuid(),title:'Baby’s & Toys',isCollapse:false},
    {id:uuid(),title:'Groceries & Pets',isCollapse:false},
    {id:uuid(),title:'Health & Beauty',isCollapse:false},
]

export const PRODUCTS_CAROUSEL=[
    {id:uuid(),details:'HAVIT HV-G92 Gamepad',salaryOffer:'120', salary:'160',startNumberYellow:5,startNumberempty:0,evaluation:'88',numberStarmaybe:0,img:product1},
    {id:uuid(),details:'AK-900 Wired Keyboard',salaryOffer:'960', salary:'1160',startNumberYellow:4,startNumberempty:1,evaluation:'88',numberStarmaybe:0,img:product2},
    {id:uuid(),details:'IPS LCD Gaming Monitor',salaryOffer:'370', salary:'400',startNumberYellow:5,startNumberempty:0,evaluation:'88',numberStarmaybe:0,img:product3},
    {id:uuid(),details:'S-Series Comfort Chair ',salaryOffer:'375', salary:'$400',startNumberYellow:4,startNumberempty:0,evaluation:'88',numberStarmaybe:1,img:product4},
    {id:uuid(),details:'S-Series Comfort Chair ',salaryOffer:'375', salary:'$400',startNumberYellow:4,startNumberempty:0,evaluation:'88',numberStarmaybe:1,img:product4},
]

export const CATEGORIES=[
    {id:uuid(),name:'Phones',icon:<PhoneAndroidIcon/>},
    {id:uuid(),name:'Computers',icon:<DesktopWindowsOutlinedIcon/>},
    {id:uuid(),name:'SmartWatch',icon:<WatchIcon/>},
    {id:uuid(),name:'Camera',icon:<CameraAltOutlinedIcon/>},
    {id:uuid(),name:'HeadPhones',icon:<HeadphonesOutlinedIcon/>},
    {id:uuid(),name:'Gaming',icon:<SportsEsportsOutlinedIcon/>},
    {id:uuid(),name:'Gaming',icon:<SportsEsportsOutlinedIcon/>},
    {id:uuid(),name:'Gaming',icon:<SportsEsportsOutlinedIcon/>},
]
export const BEST_SELLING_PRODUCTS=[
    {id:uuid(),name:"The north coat",salaryOffer:260,salary:360,startNumberYellow:5,evaluation:'65',startNumberempty:0,numberStarmaybe:0,img:product5},
    {id:uuid(),name:"Gucci duffle bag",salaryOffer:960,salary:1160,startNumberYellow:4,evaluation:'65',startNumberempty:0,numberStarmaybe:1,img:product6},
    {id:uuid(),name:"RGB liquid CPU Cooler",salaryOffer:160,salary:170,startNumberYellow:4,evaluation:'65',startNumberempty:0,numberStarmaybe:1,img:product7},
    {id:uuid(),name:"Small BookSelf",salaryOffer:0,salary:360,startNumberYellow:5,evaluation:'65',startNumberempty:0,numberStarmaybe:0,img:product8},
]

export const OurProducts=[
{id:uuid(),title:"Breed Dry Dog Food",salary:100,startNumberempty:2,startNumberYellow:3,numberStarmaybe:0,evaluation:'35',img:product9,color:[]},
{id:uuid(),title:"CANON EOS DSLR Camera",salary:360,startNumberempty:1,startNumberYellow:4,numberStarmaybe:0,evaluation:'95',img:product10,color:[]},
{id:uuid(),title:"ASUS FHD Gaming Laptop",salary:700,startNumberempty:0,startNumberYellow:5,numberStarmaybe:0,evaluation:'325',img:product11,color:[]},
{id:uuid(),title:"Curology Product Set",salary:500,startNumberempty:1,startNumberYellow:4,numberStarmaybe:0,evaluation:'145',img:product12,color:[]},
{id:uuid(),title:"Kids Electric Car",salary:960,startNumberempty:0,startNumberYellow:5,numberStarmaybe:0,evaluation:'65',img:product13,color:['red','primary']},
{id:uuid(),title:"Jr. Zoom Soccer Cleats",salary:1160,startNumberempty:0,startNumberYellow:5,numberStarmaybe:0,evaluation:'35',img:product14,color:['yellow','primary']},
{id:uuid(),title:"GP11 Shooter USB Gamepad",salary:660,startNumberempty:0,startNumberYellow:4,numberStarmaybe:1,evaluation:'55',img:product15,color:['black','primary']},
{id:uuid(),title:"Quilted Satin Jacket",salary:660,startNumberempty:0,startNumberYellow:4,numberStarmaybe:1,evaluation:'55',img:product16,color:['green','primary']}, 
]

export const Featured=[
    {id:uuid(),name:'PlayStation 5',details:'Black and White version of the PS5 coming out on sale.',img:''},
    {id:uuid(),name:'Women’s Collections',details:'Featured woman collections that give you another vibe.',img:''},
    {id:uuid(),name:'Speakers',details:'Amazon wireless speakers',img:''},
    {id:uuid(),name:'Perfume',details:'GUCCI INTENSE OUD EDP',img:''},
]

export const FooterData={
    Exclusive:[{name:'Exclusive',details:'Subscribe',list:['Get 10% off your first order']}],
    Support:[{name:'Support',list:['111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.','exclusive@gmail.com','+88015-88888-9999']}],
    Account:[{name:'Account',list:['My Account','Login / Register','Cart','Wishlist','Shop']}],
    QuickLink:[{name:'Quick Link',list:['Privacy Policy','Terms Of Use','FAQ','Contact']}],
    DownloadApp:[{name:'Download App',details:'Save $3 with App New User Only'}]
}

export const Property=[
    {id:uuid(),img:StorefrontIcon,number:'10.5k ',details:'Sallers active our site'},
    {id:uuid(),img:MonetizationOnIcon,number:'33K',details:'Mopnthly Produduct Sale'},
    {id:uuid(),img:ShoppingBagIcon,number:'45.5K ',details:'Customer active in our site'},
    {id:uuid(),img:money,number:'25K',details:'Anual gross sale in our site'},
]
export const detailsPeopleAbout=[
    {id:uuid(),img:man1,name:'Tom Cruise',details:'Founder & Chairman',iconsSocial:[<TwitterIcon/>,<InstagramIcon/>,<LinkedInIcon/>]},
    {id:uuid(),img:woman2,name:'Emma Watson',details:'Managing Director',iconsSocial:[<TwitterIcon/>,<InstagramIcon/>,<LinkedInIcon/>]},
    {id:uuid(),img:man2,name:'Will Smith',details:'Product Designer',iconsSocial:[<TwitterIcon/>,<InstagramIcon/>,<LinkedInIcon/>]},
]
export const propertyAbout=[
    {id:uuid(), img:car,title:'FREE AND FAST DELIVERY',details:'Free delivery for all orders over $140'},
    {id:uuid(),img:headPhone,title:'24/7 CUSTOMER SERVICE',details:'Friendly 24/7 customer support'},
    {id:uuid(),img:Services,title:'MONEY BACK GUARANTEE',details:'We reurn money within 30 days'}
]
export const DataPageContact=[
{id:uuid(),img:call,titleImg:'Call To Us',details:['We are available 24/7, 7 days a week.','Phone: +8801611112222']},
{id:uuid(),img:email,titleImg:'Write To US',details:['Fill out our form and we will contact you within 24 hours.','Emails: customer@exclusive.com','Emails: support@exclusive.com']}
]


export const showAllProduct=[
    {id:uuid(),title:"Breed Dry Dog Food",salary:100,startNumberempty:2,startNumberYellow:3,numberStarmaybe:0,evaluation:'35',img:product9,color:[]},
    {id:uuid(),title:"CANON EOS DSLR Camera",salary:360,startNumberempty:1,startNumberYellow:4,numberStarmaybe:0,evaluation:'95',img:product10,color:[]},
    {id:uuid(),title:"ASUS FHD Gaming Laptop",salary:700,startNumberempty:0,startNumberYellow:5,numberStarmaybe:0,evaluation:'325',img:product11,color:[]},
    {id:uuid(),title:"Curology Product Set",salary:500,startNumberempty:1,startNumberYellow:4,numberStarmaybe:0,evaluation:'145',img:product12,color:[]},
    {id:uuid(),title:"Kids Electric Car",salary:960,startNumberempty:0,startNumberYellow:5,numberStarmaybe:0,evaluation:'65',img:product13,color:['red','primary']},
    {id:uuid(),title:"Jr. Zoom Soccer Cleats",salary:1160,startNumberempty:0,startNumberYellow:5,numberStarmaybe:0,evaluation:'35',img:product14,color:['yellow','primary']},
    {id:uuid(),title:"GP11 Shooter USB Gamepad",salary:660,startNumberempty:0,startNumberYellow:4,numberStarmaybe:1,evaluation:'55',img:product15,color:['black','primary']},
    {id:uuid(),title:"Quilted Satin Jacket",salary:660,startNumberempty:0,startNumberYellow:4,numberStarmaybe:1,evaluation:'55',img:product16,color:['green','primary']}, 
    {id:uuid(),title:"The north coat",salaryOffer:260,salary:360,startNumberYellow:5,evaluation:'65',startNumberempty:0,numberStarmaybe:0,img:product5},
    {id:uuid(),title:"Gucci duffle bag",salaryOffer:960,salary:1160,startNumberYellow:4,evaluation:'65',startNumberempty:0,numberStarmaybe:1,img:product6},
    {id:uuid(),title:"RGB liquid CPU Cooler",salaryOffer:160,salary:170,startNumberYellow:4,evaluation:'65',startNumberempty:0,numberStarmaybe:1,img:product7},
    {id:uuid(),title:"Small BookSelf",salaryOffer:0,salary:360,startNumberYellow:5,evaluation:'65',startNumberempty:0,numberStarmaybe:0,img:product8},
       {id:uuid(),title:'HAVIT HV-G92 Gamepad',salaryOffer:'120', salary:'160',startNumberYellow:5,startNumberempty:0,evaluation:'88',numberStarmaybe:0,img:product1},
    {id:uuid(),title:'AK-900 Wired Keyboard',salaryOffer:'960', salary:'1160',startNumberYellow:4,startNumberempty:1,evaluation:'88',numberStarmaybe:0,img:product2},
    {id:uuid(),title:'IPS LCD Gaming Monitor',salaryOffer:'370', salary:'400',startNumberYellow:5,startNumberempty:0,evaluation:'88',numberStarmaybe:0,img:product3},
    {id:uuid(),title:'S-Series Comfort Chair ',salaryOffer:'375', salary:'$400',startNumberYellow:4,startNumberempty:0,evaluation:'88',numberStarmaybe:1,img:product4},
    {id:uuid(),title:'S-Series Comfort Chair ',salaryOffer:'375', salary:'$400',startNumberYellow:4,startNumberempty:0,evaluation:'88',numberStarmaybe:1,img:product4},
]