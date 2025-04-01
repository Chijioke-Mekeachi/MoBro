import { number_of_likes } from "../components/Post/LikeComment"
export const Users = [
    {
        FullName:"Admin Admin",
        UName: "Admin",
        UEmail:"admin",
        class: "admin",
        password: "password",
        profilePhoto: require("../assets/splash.jpg"),
    },
    {
        FullName:"Elon Musk",
        UName: "ElonMusk",
        UEmail:"elonmusk207@gmail.com",
        class: "superUser",
        password: "elon123#",
        profilePhoto: require("../assets/profile.jpg"),
    },
    {
        FullName:"Trevour John",
        UName: "Trevor",
        UEmail:"trevournoah231@gmail.com",
        class: "User",
        password: "trevour234#",
        profilePhoto: require("../assets/trevor.jpg"),
    },
    {
        FullName:"Young Woman",
        UName: "LadyAnn",
        UEmail:"youngwoman@gmail.com",
        class: "User",
        password: "youngwoman",
        profilePhoto: require("../assets/woman.png"),
    },
    {
        FullName:"Bat Man",
        UName: "Batman",
        UEmail:"thebat@gmail.com",
        class: "Seller",
        password: "thebat",
        profilePhoto: require("../assets/batman.jpg"),
    },
]
var number;
number = number + number_of_likes;
export var number