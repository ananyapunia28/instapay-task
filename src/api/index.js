import axios from "axios";

const statuses = ["SUCCESS", "FAILURE", "PENDING"];

export const getCartAPI = async () => {
  try {
    const res = await axios.get(
      "https://groww-intern-assignment.vercel.app/v1/api/order-details"
    );
    return res?.data;
  } catch (err) {
    throw new Error(err?.message);
  }
};

export const getPaymentStatus = () => {
  return new Promise((res, rej) => {
    const status = Math.floor(Math.random() * statuses.length);

    setTimeout(() => {
      res(statuses[status]);
    }, 4000);
  });
};
