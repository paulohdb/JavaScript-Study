function handleMouseMove(event) {
    const { clientX, clientY } = event
    console.log(clientX, clientY);
}

const frutas = ["Banana", "uva"];

const [fruta1, fruta2] = frutas;

console.log(fruta1, fruta2)

const useState = [
    "blue", 
    function(color) {
        useState[0] = color;
    }
];


const [color, setColor] = useState;



// document.documentElement.addEventListener("mousemove", handleMouseMove);