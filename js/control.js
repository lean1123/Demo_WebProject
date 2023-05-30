var ourModel = document.querySelector(".our-models");
var buyOnline = document.querySelector(".buy-online");
var shoppingGuide = document.querySelector(".shopping-guide");
var service = document.querySelector(".service");
var merc = document.querySelector(".merc-world");


var ourList = document.querySelector(".our-models-nav");
var buyList = document.querySelector(".buy-online-nav");
var shoppingList = document.querySelector(".shopping-guide-nav");
var serviceList = document.querySelector(".services-nav");
var mercList = document.querySelector(".merc-world-nav");

var closeActive = document.getElementById("close-active-1");
var closeActive1 = document.getElementById("close-active-2");
var closeActive2 = document.getElementById("close-active-3");
var closeActive3 = document.getElementById("close-active-4");
var closeActive4 = document.getElementById("close-active-5");

var onTop = document.getElementById("on-top");

function callback_openModal(model, list) {
    return function() {
        model.setAttribute("style", "border-top: 1px solid blue");
        list.classList.add("display");
    }
}


function callback_closeModal(model, list) {
    return function() {
        list.classList.remove("display");
        model.removeAttribute("style");
    }
}

ourModel.addEventListener("click", callback_openModal(ourModel, ourList));
closeActive.addEventListener("click", callback_closeModal(ourModel, ourList));

buyOnline.addEventListener("click", callback_openModal(buyOnline, buyList));
closeActive1.addEventListener("click", callback_closeModal(buyOnline, buyList));

shoppingGuide.addEventListener("click", callback_openModal(shoppingGuide, shoppingList));
closeActive2.addEventListener("click", callback_closeModal(shoppingGuide, shoppingList));

service.addEventListener("click", callback_openModal(service, serviceList));
closeActive3.addEventListener("click", callback_closeModal(service, serviceList));

merc.addEventListener("click", callback_openModal(merc, mercList));
closeActive4.addEventListener("click", callback_closeModal(merc, mercList));

onTop.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


// function scrollFunction() {
//     window.scroll(0, findPosition(document.getElementById("content")));
// }

// function findPosition(obj) {
//     var currenttop = 0;
//     if (obj.offsetParent) {
//         do {
//             currenttop += obj.offsetTop;
//         } while ((obj = obj.offsetParent));
//         return [currenttop];
//     }
// }


var allmode = document.getElementById("all-mode");
var sedanMode = document.getElementById("sedans-mode");
var suvMode = document.getElementById("suv-mode");
var coupesMode = document.getElementById("coupes-mode");

var sedans = document.getElementById("sedans-type");
var suv = document.getElementById("suv-type");
var coupes = document.getElementById("coupes-type");
var ourVehicles = document.getElementById("our_vehicles");

function scrollTo(element) {
    return function() {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

sedanMode.addEventListener("click", scrollTo(sedans));
suvMode.addEventListener("click", scrollTo(suv));
coupesMode.addEventListener("click", scrollTo(coupes));
allmode.addEventListener("click", scrollTo(ourVehicles));

var modalSend = document.getElementById("show-modal");
var modalRegist = document.getElementById("modal-regist");
var closeBtn = document.getElementById("close-btn");

function showModal() {
    modalRegist.classList.add("displayModal");
}

function removeModal() {
    modalRegist.classList.remove("displayModal");
}

modalSend.addEventListener("click", showModal);
closeBtn.addEventListener("click", removeModal);