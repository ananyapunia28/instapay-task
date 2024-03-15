const CartShimmer = () => {
  return (
    <div className="flex flex-col gap-y-3 mt-3">
      {[0, 1]?.map((item) => (
        <div
          key={item}
          className="flex rounded-md border border-greyBorder p-3 animate-pulse"
        >
          <div className="relative h-[140px] w-[100px] flex-shrink-0 rounded-md bg-primary opacity-40" />

          <div className="flex flex-col ml-5">
            <p className="text-sm font-semibold bg-primary h-6 md:w-72 w-36 rounded-sm opacity-40" />
            <p className="text-lg font-medium mt-3 rounded-sm h-8 md:w-36 w-20 bg-foreground" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartShimmer;
