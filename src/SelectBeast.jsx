import { Modal, Button, Card } from "react-bootstrap"

function SelectBeast(props) {
    return (
        <Modal show={props.show}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{props.selectedBeast.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card onClick={props.mostrarModal} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.selectedBeast.image_url} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}
export default SelectBeast;