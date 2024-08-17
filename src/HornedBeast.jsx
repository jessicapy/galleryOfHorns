import { useState } from "react";
import { Card, Button } from 'react-bootstrap';



function HornedBeast(props) {
    const [clicks, setClicks] = useState(0);

    function reaccionClick() {
        console.log("Fav clicked " + props.title)
        setClicks(clicks + 1);
    }


    return (
        <>
             {/*<h2>{props.title}</h2>
            <img src={props.imageUrl} style={{ width: '80px' }} alt={props.title} />
            <p>Descripcion: {props.description}</p>
            <button onClick={reaccionClick}>fav - {clicks}</button>
            <p>mi edad {props.edad}</p> */}

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imageUrl} style={{ width: '80px' }} alt={props.title} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    Descripcion: {props.description}
                    </Card.Text>
                    <Button onClick={reaccionClick}>fav - {clicks}</Button>
                </Card.Body>
            </Card>
        </>
    );
}
export default HornedBeast;