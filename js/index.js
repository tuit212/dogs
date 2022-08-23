var elBtn = document.querySelector(".dark-btn")
var elBody = document.querySelector("body")

elBtn.addEventListener("click", function() {
    elBody.classList.toggle("active")
})


var elsun = document.querySelector(".sun")
var elnight = document.querySelector(".night")



elsun.addEventListener("click" , function(){
    elnight.classList.toggle("night")
}
)

