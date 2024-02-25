/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SelectBox = (props) => {
  const [select, setSelect] = useState(false);
  const [valueSelect, setValueSelect] = useState("");

  const { values, titleDefault } = props;

  return (
    <div className="">
      <div
        onClick={() => setSelect(!select)}
        className="group/item relative flex w-[200px] cursor-pointer items-center
        justify-between rounded-lg border border-[var(--gray6)] px-5
        py-2 text-base font-normal outline-none"
      >
        {!valueSelect ? (
          <p className="">{titleDefault}</p>
        ) : (
          <p>{valueSelect}</p>
        )}

        <FaChevronDown className={`${select && "-rotate-180"} duration-300`} />

        {select && (
          <ul
            className="no-scrollbar absolute -left-[1px] top-[120%] z-10 max-h-[40vh]
            w-[100.5%] overflow-y-auto rounded-lg border border-[var(--gray6)] bg-white p-2"
          >
            {values.map((item, index) => (
              <li
                onClick={() => setValueSelect(item.nameCat || item)}
                key={index}
                className="rounded-lg p-3 duration-300 hover:bg-[var(--gray5)] "
              >
                {item.nameCat || item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectBox;
