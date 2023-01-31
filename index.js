
var pop=document.querySelector(".pop-up")



document.querySelector(".btn").addEventListener("click",()=>{
    console.log(pop.classList);
    if(pop.classList.length === 2){
        pop.classList.remove("hidden");
    }
    else{
        pop.classList.add("hidden")
    }
});
