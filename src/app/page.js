"use client";

import { getCartAPI } from "../api";
import CartItem from "../components/CartItem";
import CartShimmer from "../components/CartShimmer";
import PriceDetails from "../components/PriceDetails";
import PricingShimmer from "../components/PricingShimmer";
import { OrderData } from "../context/OrderContext";
import { useCallback, useContext, useEffect, useState } from "react";

export default function Home() {
  const [cartDetails, setCartDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { setCart } = useContext(OrderData);

  const fetchCart = useCallback(async () => {
    const res = await getCartAPI();

    if (res?.products?.length === 0) {
      fetchCart();
      return;
    }

    setIsLoading(false);
    setCartDetails(res);
    setCart(res);
  }, [setCart]);

  const cartItemMap = useCallback(
    (item) => <CartItem key={item?.id} product={item} />,
    []
  );

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <main className="h-screen w-screen">
      <div className="max-w-[980px] mx-auto h-screen md:border-x border-borderGrey flex md:flex-row flex-col w-full">
        <div className="md:overflow-scroll md:h-screen flex flex-col md:flex-[0.6] py-8 px-5">
          <p className="text-lg font-semibold">Cart Details</p>
          {isLoading ? (
            <CartShimmer />
          ) : (
            <div className="flex flex-col gap-y-3 mt-3">
              {cartDetails?.products?.map(cartItemMap)}
            </div>
          )}
        </div>
        <div className="md:overflow-scroll flex flex-col md:flex-[0.4] md:border-l border-borderGrey md:pt-8 pb-8 px-5">
          <p className="text-lg font-semibold">Price Details</p>
          {isLoading ? (
            <PricingShimmer />
          ) : (
            <PriceDetails products={cartDetails?.products} />
          )}
        </div>
      </div>
    </main>
  );
}
