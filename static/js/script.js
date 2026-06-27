function searchShop() {

    let search = document.getElementById("searchInput")
                    .value.toLowerCase();

    let shops = document.getElementsByClassName("shop-card");

    for (let i = 0; i < shops.length; i++) {

        let text = shops[i].innerText.toLowerCase();

        if (text.includes(search)) {
            shops[i].style.display = "inline-block";
        } else {
            shops[i].style.display = "none";
        }
    }
}
function filterCategory(category){

    let shops = document.querySelectorAll(".shop-card");

    shops.forEach(shop => {

        if(category === "All"){
            shop.style.display = "block";
        }
        else if(shop.dataset.category === category){
            shop.style.display = "block";
        }
        else{
            shop.style.display = "none";
        }

    });
}
function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("theme-btn");

    if(document.body.classList.contains("dark-mode")){
        btn.innerHTML = "☀️ Light Mode";
    }
    else{
        btn.innerHTML = "🌙 Dark Mode";
    }

}
// Back To Top

let mybutton = document.getElementById("topBtn");

window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display="block";
    }
    else{
        mybutton.style.display="none";
    }

}

function topFunction(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}