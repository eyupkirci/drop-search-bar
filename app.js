const input = document.querySelector(".Search");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    if (input.className == "Search") {
        opening();
    } else {
        closing();
    }

})

function opening() {
    input.className = "Search-open";

}

function closing() {
    
    if(input.value !== ""){
        window.open(`https://www.google.com/search?q=${input.value}`, "_blank");
    }else{
        input.className = "Search";
    }
}