/**
 * 함수 컴포넌트에서 상태를 관리하라
 */

import { ChangeEventHandler } from "react";

function UseState1() {
  const name = "jeonghwan";

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    // ?
  };
  return <input value={name} onChange={handleChange} />;
}

export default UseState1;
