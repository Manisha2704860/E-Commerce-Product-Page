/* ===== DISCOUNT CALCULATION ===== */
const oldPrice = 1999;
const newPrice = 699;

const discount = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
document.getElementById("discountPercent").innerText =
    `(${discount}% OFF)`;


/* ===== COLOR CHANGE ===== */
function changeColor(color){
    const img = document.getElementById("productImage");

    if(color === "black"){
        img.src = "https://www.leafstudios.in/cdn/shop/files/1_a1411db7-fc20-43fd-8ff9-f3f15366477c_1000x.png?v=1742538001";
    } else {
        img.src = "https://www.leafstudios.in/cdn/shop/files/1copy_3185c313-fe00-4008-b149-a8cbd501e632_1000x.png?v=1736754471";
    }
}


/* ===== CART COUNTER ===== */
let count = 0;

function addToCart(){
    count++;
    document.getElementById("cartCount").innerText = count;
    alert("Product added to cart!");
}
