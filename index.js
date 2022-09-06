$(document).ready(function(){
    console.log("mnbj")
    $('.banner').slick({
        infinite: false,
    });
});

function burgerMenu() {
    const burgerItem = document.querySelector(".burger-menu");
    const burgerImage = document.querySelector(".burger-menu-image");
    const burgerContainer = document.querySelector(".burger-menu-overlay");
    const body = document.querySelector("body");

    burgerImage.addEventListener("click", () => {
        console.log(burgerItem);
        burgerItem.classList.toggle("burger-menu-active");
        burgerContainer.classList.toggle("burger-menu-overlay-active");
        body.classList.toggle("body-active");
    })


    const burgerImageClose = document.querySelector(".cross-burger-link");
    burgerImageClose.addEventListener("click", () => {
        console.log(burgerImageClose);
        burgerItem.classList.remove("burger-menu-active");
        burgerContainer.classList.remove("burger-menu-overlay-active");
        body.classList.remove("body-active");
    })


    burgerContainer.addEventListener("click", () => {
        console.log(burgerContainer);
        burgerItem.classList.remove("burger-menu-active");
        burgerContainer.classList.remove("burger-menu-overlay-active");
        body.classList.remove("body-active");
    })

    const burgerLinkItems = document.querySelectorAll(".list-nav-item");
    console.log(burgerLinkItems);

    for (let i = 0; i < burgerLinkItems.length; i++) {
        burgerLinkItems[i].addEventListener("click", () => {
            console.log(burgerLinkItems);
            burgerItem.classList.remove("burger-menu-active");
            burgerContainer.classList.remove("burger-menu-overlay-active");
            body.classList.remove("body-active");
        })
    }

}

burgerMenu()
