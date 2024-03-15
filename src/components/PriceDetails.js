"use client";

import { addCommaToNumber } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const PriceDetails = ({ products, payment = false }) => {
  const router = useRouter();

  const cartReducer = useCallback((acc, curr) => {
    acc = acc + curr?.quantity * curr?.price;
    return acc;
  }, []);
  const totalReduce = useCallback((acc, curr) => {
    acc = acc + curr?.quantity;
    return acc;
  }, []);

  const cartTotal = products?.reduce(cartReducer, 0);
  const cartTotalItems = products?.reduce(totalReduce, 0);

  const goToCheckoutPage = useCallback(() => {
    router.push("/checkout");
  }, [router]);

  return (
    <>
      <div className="mt-3 bg-grayBorder rounded-md w-full p-3">
        <div className="flex">
          <p className="flex-1">Total Items</p>
          <p>{cartTotalItems}</p>
        </div>
        <div className="flex mt-3 border-t pt-3 border-gray-400">
          <p className="flex-1">Total MRP</p>
          <p>₹ {addCommaToNumber(Math.round(cartTotal * 100) / 100)}</p>
        </div>
      </div>
      {payment ? null : (
        <button
          onClick={goToCheckoutPage}
          className="mt-4 text-center bg-primary text-white font-bold rounded-md py-2 hover:opacity-80 duration-300"
        >
          Checkout
        </button>
      )}
    </>
  );
};

export default PriceDetails;
