import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export  const Product = [
        {
          id:'000001',
          name: "Girl Cloth",
          description: "cloth for girl who have money to waste",
          price:1500,
          oldPrice:2400,
          percent:((900/2400) * 100),
          img:require("../assets/woman.png"),
          section:'cloth',
          location:"Port Harcourt",
          longDescip:"Alot of thing i wanna say but time will not let me say them i have size p and size to and stop."
        },
        {
          id:'100008',
          name: "Slick Shoe",
          description: "Nike Shoe for the best..",
          price:15,
          oldPrice:24,
          percent:((9/24)*100),
          img:require("../assets/shoe.png"),
          section:'cloth',
          location:"Ahoada",

        },
        {
          id:'920001',
          name: "Chicken",
          description: "Loving the Flavour",
          price:10,
          oldPrice:20,
          percent: ((10/20) * 100),
          img:require("../assets/download (3).jpg"),
          section:'food'
        },
        {
          id:'066802',
          name: "Designer Logo",
          description: "Application Logo..",
          price:6,
          oldPrice:8,
          percent:((2/8)*100),
          img:require("../assets/Logo.jpg"),
          section:'service'
        },
        {
          id:'066802',
          name: "Real Me 7",
          description: "Mobile Phone..",
          price:70,
          oldPrice:100,
          percent:((30/100)*100),
          img:require("../assets/phone.png"),
          section:'Gadget',
        },
        {
          id:'608001',
          name: "PS4 Game",
          description: "game for Guys who have money to waste",
          price:24,
          oldPrice:30,
          percent:((6/30) * 100),
          img:require("../assets/game.png"),
          section:'play',
        },
        {
          id:'100008',
          name: "Slick Shoe",
          description: "Nike Shoe for the best..",
          price:15,
          oldPrice:24,
          percent:((9/24)*100),
          img:require("../assets/shoe.png"),
          section:'cloth'
        },
        {
          id:'920001',
          name: "Chicken",
          description: "Loving the Flavour",
          price:10,
          oldPrice:20,
          percent: ((10/20) * 100),
          img:require("../assets/download (3).jpg"),
          section:'food'
        },
        {
          id:'066802',
          name: "Designer Logo",
          description: "Application Logo..",
          price:6,
          oldPrice:8,
          percent:((2/8)*100),
          img:require("../assets/Logo.jpg"),
          section:'service'
        },
        {
          id:'066802',
          name: "Real Me 7",
          description: "Mobile Phone..",
          price:70,
          oldPrice:100,
          percent:((30/100)*100),
          img:require("../assets/phone.png"),
          section:'Gadget',
        },
        {
          id:'920001',
          name: "Chicken",
          description: "Loving the Flavour",
          price:10,
          oldPrice:20,
          percent: ((10/20) * 100),
          img:require("../assets/download (3).jpg"),
          section:'food'
        },
        {
          id:'066802',
          name: "Designer Logo",
          description: "Application Logo..",
          price:6,
          oldPrice:8,
          percent:((2/8)*100),
          img:require("../assets/Logo.jpg"),
          section:'service'
        },
        {
          id:'066802',
          name: "Real Me 7",
          description: "Mobile Phone..",
          price:70,
          oldPrice:100,
          percent:((30/100)*100),
          img:require("../assets/phone.png"),
          section:'Gadget',
        },
        {
          id:'608001',
          name: "PS4 Game",
          description: "game for Guys who have money to waste",
          price:24,
          oldPrice:30,
          percent:((6/30) * 100),
          img:require("../assets/game.png"),
          section:'play',
        },
        {
          id:'100008',
          name: "Slick Shoe",
          description: "Nike Shoe for the best..",
          price:15,
          oldPrice:24,
          percent:((9/24)*100),
          img:require("../assets/shoe.png"),
          section:'cloth'
        },
        {
          id:'920001',
          name: "Chicken",
          description: "Loving the Flavour",
          price:10,
          oldPrice:20,
          percent: ((10/20) * 100),
          img:require("../assets/download (3).jpg"),
          section:'food'
        },
        {
          id:'066802',
          name: "Designer Logo",
          description: "Application Logo..",
          price:6,
          oldPrice:8,
          percent:((2/8)*100),
          img:require("../assets/Logo.jpg"),
          section:'service'
        },
        {
          id:'066802',
          name: "Real Me 7",
          description: "Mobile Phone..",
          price:70,
          oldPrice:100,
          percent:((30/100)*100),
          img:require("../assets/phone.png"),
          section:'Gadget',
        },
]
export const imgData = [
  {
    text: "Beauty",
    img: require("../assets/img4.png"),
    onpress: ()=>{},
  },
  {
    text: "Fashion",
    img: require("../assets/img3.png"),
    onpress: ()=>{}
  },
  {
    text: "Kids",
    img: require("../assets/img1.png"),
    onpress: ()=>{}
  },
  {
    text: "Men",
    img: require("../assets/img2.png"),
    onpress: ()=>{}
  },
  {
    text: "Women",
    img: require("../assets/img3.png"),
    onpress: ()=>{}
  },
  {
    text: "Phones",
    img: require("../assets/img4.png"),
    onpress: ()=>{}
  },
  {
    text: "Laptop",
    img: require("../assets/img1.png"),
    onpress: ()=>{}
  },
  {
    text: "Accessories",
    img: require("../assets/img2.png"),
    onpress: ()=>{}
  },
]

export const imageProduct = [
{
    img: require("../assets/Card1.png"),
},
{
    img: require("../assets/download.jpg"),
},
{
    img: require("../assets/download1.jpg"),
},
]