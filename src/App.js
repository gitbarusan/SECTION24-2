import "./styles.css";
import { useState } from "react";

export default function App() {
  const [checkedPcOption, setCheckedPcOption] = useState([]);

  const objPcOption = [
    { id: 1, item: "マウス" },
    { id: 2, item: "モニター" },
    { id: 3, item: "キーボード" }
  ];

  const CheckPcOption = ({ onChange, checked }) =>
    objPcOption.map((value) => {
      return (
        <label key={value.id}>
          <input
            type="checkbox"
            value={value.item}
            onChange={onChange}
            checked={checked.includes(value.item)}
          />
          {value.item}
        </label>
      );
    });

  const onChangecheckedPcOption = (e) => {
    // includes:配列内にある特定の要素が存在するかどうかをチェックする
    // 配列.includes(要素)
    if (checkedPcOption.includes(e.target.value)) {
      //filter:配列から指定された条件に該当する要素を持つ新しい配列を作成します。
      setCheckedPcOption(
        //filter:配列.filter((配列の要素) => 配列の要素に対する条件分岐)
        checkedPcOption.filter((checkedValue) => {
          return checkedValue !== e.target.value;
        })
      );
    } else {
      //スプレット構文復習
      /**
       * 複数配列の要素をマージした配列を作成することができます。
       * const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const merged = [...arr1, ...arr2];
        console.log(merged);  // [1, 2, 3, 4, 5, 6]
       */
      setCheckedPcOption([...checkedPcOption, e.target.value]);
    }
  };
  return (
    <div className="App">
      {/* チェックボックス */}
      {/* join:配列の要素を繋げて文字列に変換する */}
      <p>現在選択されている値：{checkedPcOption.join("、")}</p>
      <CheckPcOption
        onChange={onChangecheckedPcOption}
        checked={checkedPcOption}
      />
    </div>
  );
}
