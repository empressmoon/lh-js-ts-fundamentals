const elements = document.querySelectorAll("[data-next-page")

if (elements.length !== 1) {
    throw new Error("More than one element with attr \"data-next-page\"!")
}

const [element] = elements

window.addEventListener("scroll", onScroll)

function redirectTo(nextPageUrl) {
    window.location.href = nextPageUrl
}

function onScroll() {
    const scrollValue = document.body.scrollTop - element.offsetTop

    const scrollTargetElement = element.clientHeight - document.body.clientHeight / 2

    console.log(element.clientHeight)

    if (scrollValue >= scrollTargetElement) {
        redirectTo("https://www.google.com/")
    }
}
