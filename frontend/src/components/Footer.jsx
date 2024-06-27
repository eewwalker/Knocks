import { Container, Row, Col } from "react-bootstrap"


/** Footer component
 * State: None
 * Props: None
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">
                    <p>Knocks &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer