/** @type {HTMLBodyElement} */
const body = document.getElementsByTagName("body")[0];
/** @type {HTMLDivElement} */
const content = document.getElementById("content");
/** @type {HTMLDivElement} */
const a = document.getElementsByClassName("a")[0];
/** @type {HTMLDivElement} */
const b = document.getElementsByClassName("b")[0];


content.innerHTML = a.innerHTML;

body.style.height = window.innerHeight + "px";
let in_anim = false;
let aturn = false;
let lightened = false;
let dislightened = false;

recover_a();

content.onclick = () => {
    content.classList.add("animated");
    if (!in_anim) {
        setTimeout(() => {
            content.innerHTML = (aturn ? a : b).innerHTML;
            aturn = !aturn;
            recover_a();
        }, 500);
        in_anim = true
    }
}

content.onanimationend = () => {
    content.classList.remove("animated");
    in_anim = false;
}

function recover_a() {
    /** @type {SVGGElement} */
    const flame = document.getElementsByClassName("flame")[0];
    /** @type {SVGElement} */
    const pie = document.getElementsByClassName("pie")[0];
    /** @type {HTMLParagraphElement} */
    const hint = document.getElementsByClassName("hint")[0];

    if ((!lightened) && (!dislightened)) {
        console.log("a")
        flame.style.display = "none";
        hint.innerText = "Натисни, щоб запалити свічки!";

        pie.onclick = (e) => {
            e.stopPropagation();
            flame.style.display = "block";
            lightened = true;
            dislightened = false;
            hint.innerText = "А тепер загадай бажання і задуй свічки!";
            pie.onclick = null;
            recover_a();
        }
    } else if ((lightened) && (!dislightened)) {
        console.log("b")
        flame.style.display = "block";
        hint.innerText = "А тепер загадай бажання і задуй свічки!";

        pie.onclick = (e) => {
            e.stopPropagation();
            flame.style.display = "none";
            lightened = true;
            dislightened = true;
            hint.innerText = "Бажаю тобі, щоб бажання здійснилося!";
            pie.onclick = null;
            recover_a();
        }
        
    } else {
        console.log("c")
        flame.style.display = "none";
        hint.innerText = "Хай всі бажання здійсняться!";

        return;
    }

    return;
}