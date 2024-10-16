"use client";

import Link from "next/link";

import Style from "./cart.module.scss";

import catalog from "../../../data/catalog";

import { useCountStore } from "../../../utils/store";

const svgDecr = (
  <svg
    height={10}
    width={10}
    x="0px"
    y="0px"
    viewBox="0 0 455 455"
    enableBackground="new 0 0 455 455;"
    fill="#000"
  >
    <rect y="212.5" width="455" height="30"></rect>
  </svg>
);

const svgIncr = (
  <svg
    height={10}
    width={10}
    x="0px"
    y="0px"
    viewBox="0 0 455 455"
    enableBackground="new 0 0 455 455;"
  >
    <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 455,242.5 "></polygon>
  </svg>
);

interface Item {
  id: number;
  imgUrl: string;
  name: string;
  onSale: boolean;
  sailPrice: number;
  price: number;
  sku: string;
  description: string;
  category: string;
  tags: string;
}
[];

const CartList: React.FC = () => {
  const { count, increase, decrease } = useCountStore();

  return (
    <ul className={Style.cart_lists}>
      <h2 className={Style.header}>Products</h2>

      {catalog.slice(0, 1).map((item: Item) => (
        <li className={Style.list} key={item.id}>
          <div className={Style.layout}>
            <Link href="#">
              <div className={Style.info}>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={item.imgUrl}
                  alt={item.name}
                />

                <div style={{ marginLeft: "10px" }}>
                  <h2 className={Style.title}>{item.name}</h2>

                  <p className={Style.sku}>
                    <span>SKU:</span>
                    {item.sku}
                  </p>
                </div>
              </div>
            </Link>

            {item.onSale ? (
              <span className={Style.price}>${item.sailPrice.toFixed(2)}</span>
            ) : (
              <span className={Style.price}>${item.price.toFixed(2)}</span>
            )}

            <div className={Style.quantity}>
              <button onClick={() => decrease(item.id)}>{svgDecr}</button>

              <span>{count}</span>

              <button onClick={() => increase(item.id)}>{svgIncr}</button>
            </div>

            {item.onSale ? (
              <span className={Style.total}>${item.sailPrice.toFixed(2)}</span>
            ) : (
              <span className={Style.total}>${item.price.toFixed(2)}</span>
            )}

            <span style={{ textAlign: "center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.8892 9.55408C18.8892 17.5731 20.0435 21.1979 12.2797 21.1979C4.5149 21.1979 5.693 17.5731 5.693 9.55408"
                  stroke="#3d3d3d"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.3651 6.47979H4.2146"
                  stroke="#3d3d3d"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.7148 6.47979C15.7148 6.47979 16.2434 2.71408 12.2891 2.71408C8.33578 2.71408 8.86435 6.47979 8.86435 6.47979"
                  stroke="#3d3d3d"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartList;
