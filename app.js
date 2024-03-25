
const copyContent = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("copied!")
    } 
    catch (err) {console.error('Failed to copy: ', err);}
}

let timeoutId1, timeoutId2, isClicked = false;

// const getAnimationDuration = (animationDuration) => {
//     console.log(animationDuration)
//     let startPosition, units = ["ms", "s"], str = animationDuration;
//     units.forEach((unit) => {
//         if(animationDuration.includes(unit)){
//             startPosition = animationDuration.indexOf(unit);
//             str.slice(0, startPosition+1);
//         }
//     })
//     console.log(str)
//     return Number(str);
    
// }

const createModal = (message, timer) => {
    isClicked = false;
    clearInterval(timeoutId1)
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerText = message;

    const closeModal = document.createElement("button")
    closeModal.classList.add("modal-close")
    closeModal.addEventListener("click", () => {
        if(!isClicked){
            isClicked = true;
            modal.remove();
        }
    })
    modal.appendChild(closeModal);


    return modal;
}

const toClipboard = document.querySelector(".to-clipboard");
toClipboard.addEventListener("click", () => {
    clearInterval(timeoutId1);
    copyContent(document.querySelector(".content").innerText);
    const modal = createModal("Copied!", 4000);
    document.querySelector("body").appendChild(modal);
    setTimeout(() => {
        modal.remove();
    }, 2100) 
})