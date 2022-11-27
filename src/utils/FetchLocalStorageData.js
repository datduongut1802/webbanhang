export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== "undefined" 
        ? JSON.parse(localStorage.getItem('user')) // nhận vào một chuỗi JSON và chuyển đổi (transform) nó thành một đối tượng JavaScript
        : localStorage.clear();

    return userInfo;
}

export const fetchCart = () => {
    const cartInfo = localStorage.getItem('cartItems') !== "undefined" 
        ? JSON.parse(localStorage.getItem('cartItems')) // nhận vào một chuỗi JSON và chuyển đổi (transform) nó thành một đối tượng JavaScript
        : localStorage.clear();

    return cartInfo ? cartInfo : [];
}