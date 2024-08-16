import HornedBeast from './HornedBeast';
import hornedBeasts from './hornedBeast.json';

function Gallery() {
    return (
        <>
            {/* <HornedBeast title="imagen1" description="Esta es una imagen de referencia"
                imageUrl="https://plus.unsplash.com/premium_photo-1679865372673-70f67caad093?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxEYkdqTjdaUDFHY3x8ZW58MHx8fHx8" />
            <HornedBeast edad={"25"} title="imagen2" description="Esta es otra imagen de referencia"
                imageUrl="https://plus.unsplash.com/premium_photo-1680831748238-1fe52ad0e3af?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
            {hornedBeasts.map(hornedBeast => (
                <HornedBeast key={hornedBeast._id} title={hornedBeast.title} description={hornedBeast.description} imageUrl={hornedBeast.image_url}/>
            ))
            }
        </>
    );
}
export default Gallery;