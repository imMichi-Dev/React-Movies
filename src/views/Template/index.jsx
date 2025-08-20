import Footer from "./Footer";
import Header from "./Header"
import { Button } from 'react-bootstrap';

const Template = ({ children }) => {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}

export default Template