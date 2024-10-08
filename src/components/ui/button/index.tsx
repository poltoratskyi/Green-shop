"use client";

import Link from "next/link";

import Style from "./button.module.scss";

interface Props {
  button?: boolean;
  link?: boolean;
  className?: string;
  value: string | JSX.Element;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;
  setOpenModal?: (openModal: boolean) => void;
}

const Button: React.FC<Props> = ({
  className,
  value,
  svgLeft,
  svgRight,
  button,
  link,
  setOpenModal,
}) => {
  const buttonClass = Style[className || ""];

  const handlerOpenModal = () => {
    document.body.style.overflow = "hidden";
    setOpenModal && setOpenModal(true);
  };

  return (
    <>
      {button && (
        <button
          onClick={() => {
            handlerOpenModal();
          }}
          className={buttonClass}
        >
          {svgLeft}
          {value}
          {svgRight}
        </button>
      )}

      {link && (
        <Link href="#" className={buttonClass}>
          {svgLeft}
          {value}
          {svgRight}
        </Link>
      )}
    </>
  );
};

export default Button;
