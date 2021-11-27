"use-strict"

function imageClickHandler() {
    const clickedImage = this

    clickedImage.classList.toggle("active")
}

const cells = document.querySelectorAll(".cell")

cells.forEach((cell) => {
    cell.addEventListener("click", imageClickHandler)
})