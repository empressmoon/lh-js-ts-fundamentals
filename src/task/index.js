// interface ImageGalleryImpl {
//     init: () => void
//     addListeners: () => void
//     toggleClass: (cell: HTMLElement) => void
// }

// class ImageGallery implements ImageGalleryImpl {
//     cells: NodeListOf<HTMLElement>

//     constructor () {
//         this.cells = document.querySelectorAll(".cell")
//     }

//     init = () => {
//         this.addListeners()
//     }

//     addListeners = () => {
//         this.cells.forEach((cell) => {
//             cell.addEventListener("click", () => this.toggleClass(cell))
//         })
//     }

//     toggleClass = (cell: HTMLElement) => {
//         cell.classList.toggle("active")
//     }
// }

class ImageGallery {
    cells

    constructor () {
        this.cells = document.querySelectorAll(".cell")
    }

    init = () => {
        this.addListeners()
    }

    addListeners = () => {
        this.cells.forEach((cell) => {
            cell.addEventListener("click", () => this.toggleClass(cell))
        })
    }

    toggleClass = (cell) => {
        cell.classList.toggle("active")
    }
}

const imageGallery = new ImageGallery()
imageGallery.init()
