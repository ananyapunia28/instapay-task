"use client";

import { getPaymentStatus } from "@/api";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const statusConfig = {
  SUCCESS: { text: "Payment Successful!", color: "bg-green-100" },
  FAILURE: { text: "Payment Failed!", color: "bg-red-100" },
  PENDING: { text: "Payment Pending!", color: "bg-yellow-100" },
};

const Status = () => {
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const getStatus = async () => {
    const res = await getPaymentStatus();
    setStatus(res);
  };

  const goToHome = useCallback(() => {
    router.push("/");
  }, [router]);

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <main className="h-screen w-screen">
      <div className="max-w-[980px] mx-auto h-screen md:border-x border-borderGrey flex md:flex-row flex-col justify-center items-center">
        <div
          className={`md:w-[400px] w-full px-5 md:rounded-md ${
            status ? statusConfig?.[status]?.color : "bg-gray-100"
          } text-center mx-auto py-8`}
        >
          <p className="text-2xl font-semibold">
            {status
              ? statusConfig?.[status]?.text
              : "Fetching Payment Status..."}
          </p>

          <button
            onClick={goToHome}
            className="mt-5 rounded-md py-2 w-24 bg-black text-white"
          >
            Home
          </button>
        </div>
      </div>
    </main>
  );
};

export default Status;
