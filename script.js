const searchBar = document.getElementById("search-bar");
const products = document.querySelectorAll(".product");

searchBar.addEventListener("keyup", function () {

    let searchValue = searchBar.value.toLowerCase();

    products.forEach(function(product) {

        let productName = product
            .querySelector("#product-name")
            .textContent
            .toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "flex";
        } else {
            product.style.display = "none";
        }

    });

});

products.forEach(function(product){

    product.addEventListener("mouseover", function(){

        product.style.transform = "scale(1.05)";
        product.style.transition = "0.3s";
        product.style.backgroundColor = "#ffe4c4";

    });

    product.addEventListener("mouseout", function(){

        product.style.transform = "scale(1)";
        product.style.backgroundColor = "rosybrown";

    });

});
    
const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){
button.textContent = " :) added";
button.style.backgroundColor = "orange";
button.style.color = "white";
button.style.fontWeight = "bold";

    });

});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}