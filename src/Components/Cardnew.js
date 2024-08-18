import React, { useReducer } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { action } from '../Services/index';


function Cardnew(props) {

  const dispatch = useDispatch();
  const actions = bindActionCreators(action, dispatch)

  return (
    <>
      <Card className='my-3 mx-3' style={{ position:"relative", left:"25px", width: '19rem', height:"34rem" }}>
      <Card.Img variant="top" style={{ margin:"10px" ,width:"250px", height:"230px"}} src={props.img} />
      <Card.Body>
        <Card.Title> {(props.title).substring(0,50)}... </Card.Title>
        <Card.Text>
          {(props.description).substring(0,100)}...
        </Card.Text>
        <h6>Price: {(props.price).toFixed(2)}$ </h6>
        <Button className="btn btn-primary" style={{ position:"absolute" , bottom:"20px"}} onClick={()=>actions.addToCart({
          title:(props.title), description:(props.description), price:(props.price), img:(props.img)
        })} >Add to cart</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Cardnew
