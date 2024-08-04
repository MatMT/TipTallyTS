import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <>
      <h2 className="font-black text-4xl">Bill</h2>

      <div className="space-y-5 mt-5">
        {order.length === 0 ? (
          <p className="text-center">The order is empty</p>
        ) : (
          order.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p className="font-black text-xl">
                {item.quantity} x ${item.price}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
