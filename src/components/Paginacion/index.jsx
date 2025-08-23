import { Card, Col, Pagination } from "react-bootstrap"
import { useNavigate } from "react-router"
import "./Styles.css"


export const Paginacion = ({ actual, total }) => {
    const navigate = useNavigate()
    const items = []
    for (let number = 1; number <= total; number++) {
        items.push(
            <Pagination.Item key={number} active={number === actual}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination>{items}</Pagination>
    )
}