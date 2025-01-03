"use client";

import Link from "next/link";

import Style from "./cart.module.scss";

import Skeleton from "../../ui/skeleton/cart-summary";

import { useCartStore } from "../../../store";

import Button from "../button";

const Summary: React.FC = () => {
  const isLoading = useCartStore((state) => state.isLoading);
  const subTotalAmount = useCartStore((state) => state.subtotalAmount);
  const totalAmount = useCartStore((state) => state.totalAmount);

  if (isLoading) {
    return (
      <>
        <div className={Style.result}>
          <p>Subtotal</p>

          {isLoading &&
            [...new Array(1)].map((_, index: number) => (
              <Skeleton key={index} width="60" height="100%" uniqueKey="7" />
            ))}
        </div>

        <div className={Style.result}>
          <p>Coupon Discount</p>
          <p>(-) 00.00</p>
        </div>

        <div style={{ alignItems: "flex-start" }} className={Style.result}>
          <p>Shipping</p>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            {isLoading &&
              [...new Array(1)].map((_, index: number) => (
                <Skeleton key={index} width="60" height="24" uniqueKey="7" />
              ))}
            <Link href="#">View shipping charge</Link>
          </span>
        </div>

        <div style={{ marginBottom: "30px" }} className={Style.result}>
          <mark>Total</mark>

          {isLoading &&
            [...new Array(1)].map((_, index: number) => (
              <Skeleton key={index} width="60" height="100%" uniqueKey="7" />
            ))}
        </div>

        <Button
          link
          linkValue="#"
          className="disabled"
          value="Proceed To Checkout"
        />
      </>
    );
  }

  return (
    <>
      <div className={Style.result}>
        <p>Subtotal</p>
        <span>${subTotalAmount.toFixed(2)}</span>
      </div>

      <div className={Style.result}>
        <p>Coupon Discount</p>
        <p>(-) 00.00</p>
      </div>

      <div style={{ alignItems: "flex-start" }} className={Style.result}>
        <p>Shipping</p>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          $16.00
          <Link href="#">View shipping charge</Link>
        </span>
      </div>

      <div style={{ marginBottom: "30px" }} className={Style.result}>
        <mark>Total</mark>
        <b>${totalAmount.toFixed(2)} </b>
      </div>

      <Button
        link
        linkValue="#"
        className="checkout"
        value="Proceed To Checkout"
      />
    </>
  );
};

export default Summary;
