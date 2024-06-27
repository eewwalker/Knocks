import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Col, Image, ListGroup, Button} from 'react-bootstrap';
import Rating from "../components/Rating";


const AlbumScreen = () => {
    const [album, setAlbum] = useState({});
    let { id } = useParams();

    useEffect(()=> {
        async function fetchAlbumDetails() {
            const response = await fetch(`http://localhost:3000/api/albums/${id}`);
            const data = await response.json();
            setAlbum(data);
            console.log(data)
        }
        fetchAlbumDetails()
    },[id])

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