const body = document.body

const cartBtnOpen = document.getElementById("menu-btn")
const cartBtnClose = document.getElementById("close-menu")
const cartContainer = document.getElementById
("menu-container")

cartBtnOpen.addEventListener( "click", () => cartContainer.classList.remove("hide") )

cartBtnClose.addEventListener( "click", () => cartContainer.classList.add("hide")  )