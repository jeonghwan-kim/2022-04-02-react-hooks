/**
 * 함수 컴포넌트에서 상태를 관리하라
 */

import { ChangeEventHandler } from "react";

function NameField1() {
  const name = "jeonghwan";

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    // ?
  };
  return (
    <div>
      <h1>NameField1</h1>
      <input value={name} onChange={handleChange} />
    </div>
  );
}

export default NameField1;
