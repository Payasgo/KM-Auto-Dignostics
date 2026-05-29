// ==========================
// KM AUTO DIAGNOSTICS
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // Fade-in animation on scroll

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold:0.2
    });

    document.querySelectorAll(".feature,.hero-content")
    .forEach((el) => {
        observer.observe(el);
    });


    // Button hover glow

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn) => {

        btn.addEventListener("mouseenter", () => {

            btn.style.boxShadow =
            "0 0 25px rgba(255,51,0,.8)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.boxShadow = "none";

        });

    });


    // Feature cards animation

    const features =
    document.querySelectorAll(".feature");

    features.forEach((item,index) => {

        item.style.animation =
        `pulse 2s ease-in-out ${index * 0.2}s infinite`;

    });

});


// ==========================
// KEYFRAMES CREATED BY JS
// ==========================

const style = document.createElement("style");

style.innerHTML = `

@keyframes pulse {

0%{
    transform:scale(1);
}

50%{
    transform:scale(1.05);
    box-shadow:
    0 0 25px rgba(255,60,0,.6);
}

100%{
    transform:scale(1);
}

}

.fade{
    opacity:0;
    transform:translateY(50px);
    transition:1s;
}

.show{
    opacity:1;
    transform:translateY(0);
}

`;

document.head.appendChild(style);