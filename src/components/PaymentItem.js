const PaymentItem = ({ method, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(method)}
      className="w-full rounded-md border-grayBorder border p-3 flex items-center text-start"
    >
      <p className="flex-1 text-xl font-semibold">{method}</p>
      <div className="rounded-full border border-grayBorder h-6 w-6 flex justify-center items-center">
        {selected === method ? (
          <div className="rounded-full h-4 w-4 bg-primary" />
        ) : null}
      </div>
    </button>
  );
};

export default PaymentItem;
