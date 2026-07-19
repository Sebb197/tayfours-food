```javascript
// =================================
// TAYFOURS FOOD - SCRIPT.JS
// =================================


// LOADER

window.addEventListener("load", function(){

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(function(){

            loader.style.opacity = "0";

            setTimeout(function(){

                loader.style.display = "none";

            },500);

        },800);

    }

});




// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if(menuToggle && navLinks){

    menuToggle.addEventListener("click", function(){

        navLinks.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a").forEach(function(link){

        link.addEventListener("click", function(){

            navLinks.classList.remove("active");

        });

    });

}




// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(function(link){

    link.addEventListener("click", function(event){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            event.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// NAVBAR CHANGE ON SCROLL

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function(){

    if(navbar){

        if(window.scrollY > 80){

            navbar.style.background = "rgba(0,0,0,0.95)";
            navbar.style.padding = "15px 8%";

        }else{

            navbar.style.background = "rgba(0,0,0,0.45)";
            navbar.style.padding = "22px 8%";

        }

    }

});




// MENU FILTER

const buttons = document.querySelectorAll(".filter-btn");
const foods = document.querySelectorAll(".food-card");


buttons.forEach(function(button){

    button.addEventListener("click", function(){

        buttons.forEach(function(btn){

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter = button.getAttribute("data-filter");


        foods.forEach(function(food){

            const category = food.getAttribute("data-category");


            if(filter === "all" || category === filter){

                food.style.display = "block";

            }else{

                food.style.display = "none";

            }

        });


    });

});




// SCROLL ANIMATION


const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });


},{
    threshold:0.15
});



document.querySelectorAll(
".feature-card, .food-card, .review-card, .gallery-grid img"
).forEach(function(item){

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="0.6s";

    observer.observe(item);

});




// BACK TO TOP BUTTON


const topButton = document.querySelector(".top-btn");


if(topButton){

    window.addEventListener("scroll", function(){

        if(window.scrollY > 500){

            topButton.style.display="flex";

        }else{

            topButton.style.display="none";

        }

    });



    topButton.addEventListener("click", function(){

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}




// IMAGE POPUP


document.querySelectorAll(".gallery-grid img").forEach(function(image){

    image.addEventListener("click", function(){


        const popup = document.createElement("div");

        popup.style.position="fixed";
        popup.style.top="0";
        popup.style.left="0";
        popup.style.width="100%";
        popup.style.height="100%";
        popup.style.background="rgba(0,0,0,.9)";
        popup.style.display="flex";
        popup.style.alignItems="center";
        popup.style.justifyContent="center";
        popup.style.zIndex="9999";


        popup.innerHTML = 
        '<img src="' + image.src + '" style="max-width:90%;max-height:90%;border-radius:20px;">';


        document.body.appendChild(popup);



        popup.addEventListener("click",function(){

            popup.remove();

        });


    });

});




// CONTACT FORM


const form = document.querySelector(".contact-form");


if(form){

    form.addEventListener("submit",function(event){

        event.preventDefault();


        alert("Tack! Vi återkommer så snart som möjligt.");


        form.reset();


    });

}
```
