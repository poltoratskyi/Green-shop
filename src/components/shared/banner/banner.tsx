import Style from "./banner.module.scss";

import Info from "./info";
import Mobile from "./mobile";

const descr =
  "  We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!";

const Banner: React.FC = () => {
  return (
    <section className={Style.banner}>
      <div className="container">
        <Info
          descr={descr}
          className="banner"
          value="shop now"
          width={500}
          height={500}
        />

        {/* Media */}
        <Mobile />
      </div>
    </section>
  );
};

export default Banner;
