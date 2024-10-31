import Link from "next/link";

import Style from "./backspace.module.scss";

import { svgBackspace } from "./static-data";

interface Props {
  text?: string;
}

const Backspace: React.FC<Props> = ({ text }) => {
  return (
    <div className={Style.backspace}>
      <Link href="/">{svgBackspace}</Link>

      {text && <h2>{text}</h2>}
    </div>
  );
};

export default Backspace;