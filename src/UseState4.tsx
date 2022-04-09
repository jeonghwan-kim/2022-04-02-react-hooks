/**
 * 커서를 안으로
 */

import React from "react";
import { ChangeEventHandler } from "react";

// 우선 신경쓰지 말고
const useForceUpdate = () => {
  const [value, setValue] = React.useState(1);
  const forceUpdate = () => setValue(value + 1);
  return {
    forceUpdate,
  };
};

let cursor = 0;

const { useState } = (function MyReact() {
  // 상태
  const values: string[] = [];
  const isInitialized: (boolean | undefined)[] = [];

  function useState(initilaValue?: string) {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized[cursor]) {
      values[cursor] = initilaValue || "";
      isInitialized[cursor] = true;
    }

    const value = values[cursor];
    const setValueAt = (cursor: number) => (value: any) => {
      console.log("setValue", cursor);
      values[cursor] = value;
      forceUpdate();
    };

    const setValue = setValueAt(cursor);

    cursor++;

    return [value, setValue];
  }

  return {
    useState,
  };
})();

function UseState4() {
  cursor = 0;
  const [name, setName] = useState("asdf"); // cursor 0
  const [lastName, setLastName] = useState("a"); // cursor 1

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    (setName as Function)(e.target.value);
  };
  const handleChangeLastName: ChangeEventHandler<HTMLInputElement> = (e) => {
    (setLastName as Function)(e.target.value);
  };

  return (
    <div>
      <input value={name as string} onChange={handleChange} />
      <input value={lastName as string} onChange={handleChangeLastName} />
    </div>
  );
}

export default UseState4;
