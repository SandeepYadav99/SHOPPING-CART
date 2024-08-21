import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggle } from '../../store/uiSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const {itemQuantity}=useSelector((state)=>state.cart)
  const openCart=()=>{
    dispatch(toggle())
  }
  return (
    <button className={classes.button} onClick={openCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;