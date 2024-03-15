import { addCommaToNumber } from "../utils/helpers";
import Image from "next/image";

const CartItem = ({ product }) => {
  return (
    <div className="flex rounded-md border border-greyBorder p-3">
      <div className="relative h-[140px] w-[100px] flex-shrink-0">
        <Image sizes="" alt={`item-${product?.id}`} src={product?.image} fill />
      </div>

      <div className="flex flex-col ml-5">
        <p className="text-sm font-semibold">{product?.title}</p>
        <p className="text-lg font-bold mt-2">
          ₹ {addCommaToNumber(product?.price)}
        </p>
        <p className="mt-auto text-sm font-regular">Qty: {product?.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
