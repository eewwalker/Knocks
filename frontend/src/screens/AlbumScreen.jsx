import { useParams, Link } from "react-router-dom";
import albums from "../albums";
import { Row, Col, Image, ListGroup, Button} from 'react-bootstrap';
import Rating from "../components/Rating";

const AlbumScreen = () => {
    let { id } = useParams();
    const album = albums.find(a => a._id === id);

    return (
        <>
            <Link className="btn btn-light my-3" to='/'>
                Return Home
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={album.image} alt={album.name} fluid />
                </Col>
                <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{album.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>{album.artist}</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>{album.genre}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <small>{album.released}</small>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={album.rating} text={`${album.numReviews} reviews`}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            variant="secondary"
                            className="btn-block"
                            type="button">
                            Add to favorites
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={3}>
                </Col>
            </Row>

        </>
    );
};
export default AlbumScreen;