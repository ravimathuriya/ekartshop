import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cardnew from './Cardnew';
// import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

import { Link, useLocation } from "react-router-dom";
import Cart from './Cart';


function NavNew() {



 const location = useLocation();
  
  const [array, setArray] = useState([]);
  
  const fetchdata = async() =>{
    const response = await fetch ("https://fakestoreapi.com/products")
        const data = await response.json()
        setArray(data)
      }


      
    useEffect(()=>{
      fetchdata()

    },[])

    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark" className='fixed-top'>
        <Container>
          <Link to=""><i className="fa-solid fa-dumpster-fire"></i></Link>
          <Nav className="me-auto">
            <Link to="" className="mx-2" >Home</Link>

            <Link to="/cart"  className="mx-2">Cart</Link>
            
          </Nav>
        </Container>
      </Navbar>

      { location.pathname !== "/cart" ? <Container fluid>
      <Row xs={1} md={2} className="g-4 mx-5 my-5">
      { array.map((item) => {
       return( <Cardnew key={item.id} title={item.title} price={item.price} description={item.description} img={item.image} /> )
      }) }
          </Row>
          </Container>: <Cart/>
          }

        </>
      );
    }

export default NavNew
