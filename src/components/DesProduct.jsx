import { useState } from "react";
import imgPro from "../assets/imgProduct/sofa2.webp";

const DesProduct = () => {
  const [active, setActive] = useState("Description");

  return (
    <div className="w-ful border-b border-t border-[var(#D9D9D9)] py-14">
      <div className=" mx-auto max-w-screen-xl">
        <div className="mb-9 flex items-center justify-center gap-14">
          <p
            className={`${
              active === "Description" ? "text-black" : "text-[var(--gray6)]"
            } cursor-pointer text-2xl font-normal`}
            onClick={() => setActive("Description")}
          >
            Description
          </p>
          <p
            className={`${
              active === "addInfo" ? "text-black" : "text-[var(--gray6)]"
            } cursor-pointer text-2xl font-normal`}
            onClick={() => setActive("addInfo")}
          >
            Additional Information
          </p>
          <p
            className={`${
              active === "Reviews" ? "text-black" : "text-[var(--gray6)]"
            } cursor-pointer text-2xl font-normal`}
            onClick={() => setActive("Reviews")}
          >
            Reviews [5]
          </p>
        </div>
        <div className=" mx-auto max-w-screen-lg text-base font-normal text-[var(--gray6)]">
          <p className="mb-7">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-5">
          <img
            className="h-[340px] w-full rounded-lg object-cover"
            src={imgPro}
            alt=""
          />
          <img
            className="h-[340px] w-full rounded-lg object-cover"
            src={imgPro}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DesProduct;
