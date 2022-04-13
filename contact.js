let icon = document.querySelector("#nav-icon");
icon.addEventListener("click", function(){
    document.querySelector("#navbar").classList.toggle("nav-active");
})

let purposes = document.querySelectorAll("input[name = 'purpose']")

purposes.forEach(purpose => purpose.addEventListener("click", function(){
    let show = document.querySelector("#show");
    if(purpose.value == 'hiring'){
        show.style.display = 'initial';
        document.querySelector("#salary").required = true;
    }
    else{
        show.style.display = 'none';
        document.querySelector("#salary").required = false;
    }
}));