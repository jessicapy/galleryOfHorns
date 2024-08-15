function HornedBeast(props){
    return (
        <>
        <h2>{props.title}</h2>
        <img src={props.imageUrl} style={{width:'80px'}} alt={props.title} />
        <p>Descripcion: {props.description}</p>
        <p>mi edad {props.edad}</p>
        </>
    );
}
export default HornedBeast;