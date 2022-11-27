import { fetchCart, fetchUser } from "../utils/FetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

// set trạng thái ban đầu
export const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo,
};