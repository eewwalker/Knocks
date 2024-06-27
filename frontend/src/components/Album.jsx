/* eslint-disable react/prop-types */
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from './Rating'


const Album = ({ album }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/albums/${album._id}`}>
        <Card.Img src={album.image} variant='top'/>
        </Link>
        <Card.Body>
            <Link to={`/albums/${album._id}`} className='text-decoration-none link'>
            <Card.Title as='div' className='product-title'>
                <strong>{album.name}</strong>
            </Card.Title>
            </Link>
            <Card.Text as='div'>
              <Rating value={album.rating} text={`${album.numReviews} reviews`}/>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
export default Album