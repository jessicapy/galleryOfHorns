import { useState } from "react";



function HornedBeast(props) {
    const [clicks, setClicks] = useState(0);

    function reaccionClick() {
        console.log("Fav clicked " + props.title)
        setClicks(clicks + 1);
    }
    

    return (
        <>
        <h2>{props.title}</h2>
        <img src={props.imageUrl} style={{width:'80px'}} alt={props.title} />
        <p>Descripcion: {props.description}</p>
        <button onClick={reaccionClick}>fav - {clicks}</button>
        {/* <p>mi edad {props.edad}</p> */}
        </>
    );
}
export default HornedBeast;