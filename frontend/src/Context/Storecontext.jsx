import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
const url= "https://mern-food-app-backend-ho47.onrender.com"
    const [itemcart, setitemcart] = useState({})
    const [token, settoken] = useState('')
    const [food_list, setfood_list] = useState([])


    useEffect(() => {
        fooddata()
        if (localStorage.getItem("token")) {
            settoken(localStorage.getItem("token"))
            cartdata(localStorage.getItem("token"))

        }
    }, [])

    ///////////////add and remove card/////////


    const addTocart = async (itemid) => {
        if (token) {
            await axios.post(`${url}/api/cart/add`, { itemid }, { headers: { token } })

        }

        if (!itemcart[itemid]) {
            setitemcart((prev) => ({ ...prev, [itemid]: 1 }))
        } else { setitemcart((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 })) }


    }

    const removeitem = async (itemid) => {
        setitemcart((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))

        if (token) {
            await axios.post(`${url}/api/cart/remove`, { itemid }, { headers: { token } })
        }

    }


    ////////gettotalamount///////////of //////// card//////

    const gettotalamount = () => {

        let totalamount = 0;

        for (const item in itemcart) {
            if (itemcart[item] > 0) {

                const iteminf = food_list.find((product) => product._id === item)
                totalamount += iteminf.price * itemcart[item]
            }
        }
        return totalamount;

    }

    //////////find all food list in db///////////////

    const fooddata = async () => {

        const responce = await axios.get(`${url}/api/food/foodlist`)


        if (responce) {
            setfood_list(responce.data.data)
        }
    }

    ///get cartdat///

    const cartdata = async (token) => {

        let responce = await axios.get(`${url}/api/cart/data`, { headers: { token } })
        setitemcart(responce.data.cartdata)
    }
    const contextvalue =
        { food_list, itemcart, addTocart, removeitem, gettotalamount, token, settoken ,url}

    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )


}

export default StoreContextProvider