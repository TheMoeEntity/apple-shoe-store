
export const HoverEffect = (elem) => {
    elem.addEventListener("mouseover",()=> {
        const x = elem.clientX
        console.log(x)
        console.log("hello")
    })
}