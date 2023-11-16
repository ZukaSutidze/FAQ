const P = document.querySelectorAll(".Howmany");
const Arrow = document.querySelectorAll(".Arrow");
const Ptext = document.querySelectorAll(".Nomore");
const Team = document.querySelectorAll(".Team");
for (let i = 0; i < Arrow.length; i++) {
    Arrow[i].addEventListener("click", function () {
        P[i].classList.toggle("Bold");
        for (let j = 0; j < Arrow.length; j++) {
            if (j !== i) {
                P[j].classList.remove("Bold");
            }
        }
        Arrow[i].classList.toggle("Rotate");
        for (let j = 0; j < Arrow.length; j++) {
            if (j !== i) {
                Arrow[j].classList.remove("Rotate");
            }
        }
        Ptext[i].classList.toggle("Appear");
        Team[i].classList.toggle("Bottom");
        for (let j = 0; j < Arrow.length; j++) {
            if (j !== i) {
                Ptext[j].classList.remove("Appear");
                Team[j].classList.remove("Bottom");
            }
        }
    });
}

for (let i = 0; i < Arrow.length; i++) {
    P[i].addEventListener("click", function () {
        P[i].classList.toggle("Bold");
        for (let j = 0; j < Arrow.length; j++) {
            if (j !== i) {
                P[j].classList.remove("Bold");
            }
        }
        Arrow[i].classList.toggle("Rotate");
        for (let j = 0; j < Arrow.length; j++) {
            if (j !== i) {
                Arrow[j].classList.remove("Rotate");
            }
        }
        Ptext[i].classList.toggle("Appear");
        Team[i].classList.toggle("Bottom");
        for (let j = 0; j < Arrow.length; j++) {
            if (j !== i) {
                Ptext[j].classList.remove("Appear");
                Team[j].classList.remove("Bottom");
            }
        }
    });
}
