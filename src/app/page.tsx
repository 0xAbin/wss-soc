"use clent";

export default function Home() {
  const price = {
    size1: 100,
    size2: 200,
  };

  return (
    <>
      <h2 className="flex justify-center mt-10">Web Socket Stream</h2>

      <div className="flex justify-center mt-32 gap-32">
        <div className="flex flex-col gap-7 text-green-700">
          Buy Bids
          <p className="text-green-300">Size : {price.size1}</p>
        </div>
        <div className="flex flex-col gap-7 text-red-800">
          Sell Bids
          <p className="text-red-300">Size : {price.size2}</p>
        </div>
      </div>
    </>
  );
}
