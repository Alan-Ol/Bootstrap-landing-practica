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


(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()