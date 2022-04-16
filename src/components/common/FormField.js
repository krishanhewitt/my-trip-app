import React, { useState } from "react";

export default function FormField(props) {
  const [errMsg, showErrMsg] = useState(false);

  const validCheck = (e) => {
    if(props.validation) {
      const schema = props.validation;
      schema.isValid(e.target.value).then(function (valid) {
        showErrMsg(valid ? false : true);
      });
    }
  };

  return (
    <div>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.name}
      >
        {props.title}
      </label>
      <input
        className={`${
          errMsg ? "border-red-500" : "border-gray-200 focus:border-gray-500"
        } appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={validCheck}
      />
      <span
        className={`italic text-red-600 ${errMsg ? "visible" : "invisible"}`}
      >
        {props.errMsgText}
      </span>
    </div>
  );
}
