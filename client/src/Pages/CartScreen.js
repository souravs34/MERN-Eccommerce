import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartAction";
const CartScreen = () => {
  const productId = useParams();
  //const qty = useParams();
  // const qty = location.search;
  // console.log(qty);

  //console.log(qty);

  return (
    <div>
      <h1>{productId.id}</h1>
    </div>
  );
};

export default CartScreen;
