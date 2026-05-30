/* eslint-disable no-unused-vars */
import { v4 as uuid } from "uuid"
import product1 from '/img/products1.png'
import product2 from '/img/products2.png'
import product3 from '/img/products3.png'
import product11 from '/img/products11.png'
import product17 from '/img/products17.png'
import product18 from '/img/products18.png'
import product19 from '/img/products19.png'
import product20 from '/img/products20.png'
import product21 from '/img/products21.png'
import StorefrontIcon from '/img/iconMarket.png';
import ShoppingBagIcon from '/img/bag.png';
import MonetizationOnIcon from '/img/IconSalary.png';
import money from '/img/salary.png'
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
import playStation5 from '/img/playStation5.png'
import perfume from '/img/perfume.png'
import woman from '/img/woman.png'
import speakers from '/img/speakers.png'
import Frame from '/img/Frame.png'


export const NAV_LINKS =[ 'Home','Content','About','SignUp']

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

export const dataCarousel=[
    {
    id: uuid(),
    icon: '/img/iconIphone.png',
    brand: 'iPhone 14 Series',
    title: 'Up to 10% off Voucher',
    img: Frame,
    imgAlt: 'iPhone 14 promotional image',
  },
      {
    id: uuid(),
    icon: '/img/iconIphone.png',
    brand: 'iPhone 14 Series',
    title: 'Up to 10% off Voucher',
    img: Frame,
    imgAlt: 'iPhone 14 promotional image',
  },
      {
    id: uuid(),
    icon: '/img/iconIphone.png',
    brand: 'iPhone 14 Series',
    title: 'Up to 10% off Voucher',
    img: Frame,
    imgAlt: 'iPhone 14 promotional image',
  },
      {
    id: uuid(),
    icon: '/img/iconIphone.png',
    brand: 'iPhone 14 Series',
    title: 'Up to 10% off Voucher',
    img: Frame,
    imgAlt: 'iPhone 14 promotional image',
  },
      {
    id: uuid(),
    icon: '/img/iconIphone.png',
    brand: 'iPhone 14 Series',
    title: 'Up to 10% off Voucher',
    img: Frame,
    imgAlt: 'iPhone 14 promotional image',
  },
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

export const featured=[
    {id:uuid(),name:'PlayStation 5',details:'Black and White version of the PS5 coming out on sale.',img:playStation5},
    {id:uuid(),name:'Women’s Collections',details:'Featured woman collections that give you another vibe.',img:woman},
    {id:uuid(),name:'Speakers',details:'Amazon wireless speakers',img:speakers},
    {id:uuid(),name:'Perfume',details:'GUCCI INTENSE OUD EDP',img:perfume},
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


export const ForYou=[
    {id:uuid(),name:"ASUS FHD Gaming Laptop",salaryOffer:960,salary:1160,startNumberYellow:5,evaluation:'65',startNumberempty:0,numberStarmaybe:0,img:product11},
    {id:uuid(),name:"IPS LCD Gaming Monitor",salaryOffer:1160,salary:0,startNumberYellow:5,evaluation:'65',startNumberempty:0,numberStarmaybe:0,img:product3},
    {id:uuid(),name:"HAVIT HV-G92 Gamepad",salaryOffer:560,salary:0,startNumberYellow:5,evaluation:'65',startNumberempty:0,numberStarmaybe:0,img:product1},
    {id:uuid(),name:"AK-900 Wired Keyboard",salaryOffer:200,salary:0,startNumberYellow:5,evaluation:'65',startNumberempty:0,numberStarmaybe:0,img:product2},
]