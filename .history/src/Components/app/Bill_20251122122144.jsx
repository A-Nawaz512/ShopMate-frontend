import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, increaseQty, decreaseQty } from "./CartSlice";

const BillPage = () => {
  const cartItems = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg absolute right-[2%] top-[70%] w-[95%] md:w-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">
        🧾 Your Bill
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-orange-100 text-orange-700">
              <tr>
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Total</th>
                <th className="py-2 px-4">Action</th>
                <th className="py-2 px-4">Update Qty</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-orange-50 transition"
                >
                  <td className="py-2 px-4 text-gray-800">{item.name}</td>
                  <td className="py-2 px-4 text-gray-700">${item.price}</td>
                  <td className="py-2 px-4 text-gray-700">{item.qty}</td>
                  <td className="py-2 px-4 text-gray-900 font-medium">
                    ${(item.price * item.qty).toFixed(2)}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => dispatch(removeProduct(item))}
                      className="text-red-600 hover:text-red-800 font-medium cursoir=po"
                    >
                      Remove
                    </button>
                  </td>
                  <td className="py-2 px-4 flex gap-2 items-center">
                    <button
                      onClick={() => dispatch(decreaseQty(item))}
                      className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition text-lg"
                    >
                      −
                    </button>
                    <button
                      onClick={() => dispatch(increaseQty(item))}
                      className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition text-lg"
                    >
                      +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Grand Total */}
      <div className="mt-6 text-right text-xl font-semibold">
        Grand Total:{" "}
        <span className="text-orange-600">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default BillPage;
