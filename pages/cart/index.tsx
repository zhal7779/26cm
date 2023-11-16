import CartProgress from '../../components/cart/cartProgress/cartProgress';
import EmptyCart from '../../components/cart/emptyCart/emptyCart';

export default function CartPage() {
  return (
    <div className="pb-[11rem]">
      <CartProgress />
      <EmptyCart />
    </div>
  );
}
