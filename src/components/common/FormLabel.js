import React from 'react';

export default function FormLabel(props) {
    return (
        <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.htmlFor}
      >
        {props.title}
      </label>
    )
}