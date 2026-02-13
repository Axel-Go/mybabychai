
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const flower = document.querySelector(".flower");

envelope.addEventListener("click", () => {
    
    envelope.classList.add("fade-out");
    setTimeout(() => { envelope.style.display = "none"; }, 600);


    flower.classList.remove("hidden");
    flower.classList.add("show");


    letter.classList.remove("hidden");
    letter.classList.add("show");
});

