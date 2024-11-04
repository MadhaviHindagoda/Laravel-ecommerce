import { createContext, useContext, useState } from "react";
import introImage from '../assets/gettyimages-183276205-612x612.jpg';



const StateContext = createContext({
    currentUser:{},
    userToken:null,
    setCurrentUser: () => {},
    setUserToken: () => {},
    products: [],
    cart: [],
    addToCart: () => {},
})

const tmpProducts = [
    {
        id: 1,
        name: "Gift Basket",
        description: "A beautiful gift basket filled with gourmet snacks.",
        about:"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        price: 49.99,
        image: introImage, // Replace with actual image paths
    },
    {
        id: 2,
        name: "Personalized Mug",
        description: "A custom mug with your favorite quote.",
        about:"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        price: 15.99,
        image: "path_to_image_2.jpg",
    },
    {
        id: 3,
        name: "Handmade Candle",
        description: "A scented candle to brighten up your home.",
        about:"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        price: 22.50,
        image: "path_to_image_3.jpg",
    },
    {
        id: 4,
        name: "Charming Necklace",
        description: "A delicate necklace perfect for any occasion.",
        about:"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        price: 34.99,
        image: "path_to_image_4.jpg",
    },
    {
        id: 5,
        name: "Gourmet Chocolate Box",
        description: "An assortment of fine chocolates.",
        about:"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        price: 29.99,
        image: "path_to_image_5.jpg",
    },
    {
        id: 6,
        name: "Stylish Tote Bag",
        description: "A fashionable tote bag for everyday use.",
        about:"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        price: 39.99,
        image: "path_to_image_6.jpg",
    },
    {
        id: 7,
        name: "Succulent Plant",
        description: "A low-maintenance plant to brighten your space.",
        about:"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        price: 12.99,
        image: "path_to_image_7.jpg",
    },
    {
        id: 8,
        name: "Gift Voucher",
        description: "A gift voucher for the perfect gift choice.",
        about:"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        price: 50.00,
        image: "path_to_image_8.jpg",
    },
    {
        id: 9,
        name: "Coffee Gift Set",
        description: "A set of gourmet coffee for coffee lovers.",
        about:"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        price: 39.50,
        image: "path_to_image_9.jpg",
    },
    {
        id: 10,
        name: "Bath Bomb Set",
        description: "Relaxing bath bombs for a soothing experience.",
        about:"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
        price: 25.00,
        image: "path_to_image_10.jpg",
    },
]

export const ContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({
        name: 'Tom Cook',
        email: 'tom@example.com',
    
    });
    const [userToken, setUserToken] = useState('1234');

    const [products, setProducts] = useState(tmpProducts);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return(
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            products,
            cart,
            addToCart,

        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)