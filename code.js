const spinner= document.querySelector(".spinner-wrapper")

window.addEventListener("load", () =>{
    spinner.style.opacity = "0";
    setTimeout(() =>{
        spinner.style.display = "none";
    }, 1000);
});


// setTimeout(()=>{
//     spinner.style.opacity = "0";

// }, 1000)