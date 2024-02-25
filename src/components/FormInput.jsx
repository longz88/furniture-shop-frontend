/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FormInput = (props) => {
  const { name, title, placeholder, type, value, setData } = props;

  const [select, setSelect] = useState(false);
  const [valueSelect, setValueSelect] = useState("");

  return (
    <div className="">
      <label className=" font-medium" htmlFor={title}>
        {name}
      </label>
      <br />
      {type === "select" ? (
        <>
          <div
            onClick={() => setSelect(!select)}
            className="relative mt-5 flex w-full cursor-pointer items-center justify-between rounded-lg
            border border-[var(--gray6)] p-5 text-base font-normal outline-none"
          >
            {!valueSelect ? (
              <p className="text-[var(--gray6)]">HN</p>
            ) : (
              <p>{valueSelect}</p>
            )}

            {!select ? <FaChevronDown /> : <FaChevronUp />}

            {select && (
              <ul
                className="absolute -left-[1px] top-[110%] w-[100.5%] rounded-lg border
              border-[var(--gray6)] bg-white p-2
            "
              >
                {value.map((item, index) => (
                  <li
                    onClick={() => setValueSelect(item)}
                    key={index}
                    className="rounded-lg p-3 duration-300 hover:bg-[var(--gray5)] "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : type === "textarea" ? (
        <textarea
          type="text"
          id={title}
          className="mt-5 w-full rounded-lg border border-[var(--gray6)] p-5 text-base font-normal outline-none"
          placeholder={placeholder}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type="text"
          id={title}
          className="mt-5 w-full rounded-lg border border-[var(--gray6)] p-5 text-base font-normal outline-none"
          placeholder={placeholder}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormInput;
