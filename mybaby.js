
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const flower = document.querySelector(".flower");

envelope.addEventListener("click", () => {
    letter.classList.remove("hidden");
    letter.classList.add("show");

    flower.classList.remove("hidden");
    flower.classList.add("show");
});
