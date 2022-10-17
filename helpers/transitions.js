
export const HoverEffect = (ref) => {
    // elem.addEventListener("mouseover",()=> {
    //     const x = elem.clientX
    //     console.log(x)
    //     console.log("hello")
    // })
    let main = ref.current

    let cards = main.children[0].children
    for (const card of cards) {
        card.addEventListener('mousemove',(elem)=> {
            console.log(elem.clientX - elem.offsetLeft)
        })
    }
    
    // setCoords({
    //   x: event.clientX - event.target.offsetLeft,
    //   y: event.clientY - event.target.offsetTop,
    // });
}