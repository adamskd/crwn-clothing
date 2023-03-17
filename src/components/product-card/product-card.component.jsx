import { useContext } from "react";

import {ProductCartContainer, Footer, Name, Price} from "./product-card.styles";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name as='span'>{name}</Name>
        <Price as="span">{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
