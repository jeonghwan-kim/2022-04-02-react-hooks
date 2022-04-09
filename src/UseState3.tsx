/**
 * 다중 상태
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

const { useState } = (function MyReact() {
  // 상태
  const values: string[] = [];
  const isInitialized: (boolean | undefined)[] = [];

  function useState(cursor: number, initilaValue?: string) {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized[cursor]) {
      values[cursor] = initilaValue || "";
      isInitialized[cursor] = true;
    }

    const value = values[cursor];
    const setValue = (value: any) => {
      values[cursor] = value;
      forceUpdate();
    };

    return [value, setValue];
  }

  return {
    useState,
  };
})();

function UseState3() {
  const [name, setName] = useState(0, "asdf");
  const [lastName, setLastName] = useState(1, "a");

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

export default UseState3;
