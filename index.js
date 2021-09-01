let randomcolor = randomColor({luminosity: 'light'})
console.log(randomcolor)
const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]
 
// generate random light colors: 
    // adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})
const handleClick = () => {
    const display = document.getElementById("adviceDisplay")
    let randNumber = Math.floor(Math.random() * advice.length)
    let randText = advice[randNumber]
    
    const eightCircle = document.getElementById("eightCircle")
    const adviceArea = document.getElementById("adviceArea")
    const container = document.getElementById("container")
    const audio = document.getElementById("audio")
    
    
    
    return (
        eightCircle.style.display = "none",
        adviceArea.style.visibility = "visible",
        audio.play(),
        container.style.background = randomcolor,
        display.innerHTML = randText,
        setTimeout(() => {
            return(
                 document.getElementById("eightCircle").style.display = "block",
                 document.getElementById("adviceArea").style.visibility = "hidden"
        )}, 10000)
        
        
        
    )
    
    
    
   
}

const handleChange = () =>{
    const adviceButton = document.getElementById("adviceBtn")
    const questionArea = document.getElementById("question")
   
    let showButtom = questionArea.value == ""
        ?adviceButton.disabled = true
        :adviceButton.disabled = false
    return showButtom
}
const questionArea = document.getElementById("question")
const adviceButton = document.getElementById("adviceBtn")
adviceButton.addEventListener("click", handleClick)
questionArea.addEventListener("input", handleChange)