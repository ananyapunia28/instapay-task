"use client";

import PaymentItem from "@/components/PaymentItem";
import PriceDetails from "@/components/PriceDetails";
import { OrderData } from "@/context/OrderContext";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useState } from "react";

const Cart = () => {
  const router = useRouter();
  const { cart } = useContext(OrderData);

  const [selected, setSelected] = useState(null);

  const goToHome = useCallback(() => {
    router.push("/");
  }, [router]);

  const paymentMethodItemMap = useCallback(
    (item) => {
      return (
        <PaymentItem
          method={item}
          setSelected={setSelected}
          selected={selected}
        />
      );
    },
    [selected]
  );

  const goToStatusPage = useCallback(() => {
    router.push("/status");
  }, [router]);

  return (
    <main className="h-screen w-screen">
      <div className="max-w-[980px] mx-auto h-screen md:border-x border-borderGrey flex md:flex-row flex-col w-full">
        {cart?.products?.length > 0 ? (
          <>
            <div className="md:overflow-scroll md:h-screen flex flex-col md:flex-[0.6] py-8 px-5">
              <p className="text-lg font-semibold">Select Payment Method</p>
              <div className="flex flex-col gap-y-3 mt-3">
                {cart?.paymentMethods?.map(paymentMethodItemMap)}
              </div>
            </div>
            <div className="md:overflow-scroll flex flex-col md:flex-[0.4] md:border-l border-borderGrey md:pt-8 pb-8 px-5">
              <p className="text-lg font-semibold">Amount to pay</p>
              <PriceDetails products={cart?.products} payment />

              <button
                disabled={!selected}
                onClick={goToStatusPage}
                className={`mt-4 text-center bg-primary text-white font-bold rounded-md py-2 hover:opacity-80 duration-300 ${
                  !selected ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                Pay
              </button>
            </div>
          </>
        ) : (
          <div className="bg-red h-full w-full flex flex-col justify-center items-center">
            <p className="font-bold text-3xl">Oops! Cart is Empty</p>
            <button
              onClick={goToHome}
              className="mt-5 rounded-md py-2 w-24 bg-primary text-white"
            >
              Home
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
