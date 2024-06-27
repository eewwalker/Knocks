import {Row, Col} from 'react-bootstrap';
import Album from '../components/Album';
import { useEffect, useState } from 'react';

const HomeScreen = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(()=> {
    async function fetchAlbums() {
      const response = await fetch('http://localhost:3000/api/albums');
      console.log(response)
      const data = await response.json();
      setAlbums(data);
    }
    fetchAlbums();
  },[]);

  return (
    <>
    <h1>Recent Albums</h1>
    <Row>
        {albums.map(a => (
            <Col key={a._id} sm={12} md={6} lg={4} xl={3}>
                <Album album={a}>{a.name}</Album>
            </Col>
        ))}
    </Row>
    </>
  )
}
export default HomeScreen