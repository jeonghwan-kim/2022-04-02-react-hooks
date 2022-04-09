/**
 * 클로져로 상태 구현
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

const { useName } = (function MyReact() {
  // 이름
  let name: string;
  let isInitialized = false;

  function useName(initilaName?: string): [string, (value: string) => void] {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized) {
      name = initilaName || "";
      isInitialized = true;
    }

    // 이름 변경
    const setName = (nextName: string) => {
      name = nextName;
      forceUpdate();
    };

    return [name, setName];
  }

  return {
    useName,
  };
})();

function UseState2() {
  const [name, setName] = useName("asdf");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input value={name} onChange={handleChange} />
    </div>
  );
}

export default UseState2;
