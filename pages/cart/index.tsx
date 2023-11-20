import CartProgress from '../../components/cart/cartProgress/cartProgress';
import EmptyCart from '../../components/cart/emptyCart/emptyCart';
import { getAppLayout } from '../../util/getLayout';
import { NextPageWithLayout } from '../_app';

const CartPage: NextPageWithLayout = () => {
  return (
    <div className="pb-[11rem]">
      <CartProgress />
      <EmptyCart />
    </div>
  );
};

CartPage.getLayout = getAppLayout;

export default CartPage;
