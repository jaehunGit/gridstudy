import React, { useState, useRef } from "react";
import { Button, Modal, Input } from "antd";
import { InputRef } from "antd";

import data from "./data";

function App() {
  /**
   * [
    {
      index: 1,
      title: "김진국 담당",
      item: "L0001",
      parent: "",
      depth: 1,
      YN: "Y"
    },
   */

  /*
  L = Leader (총책임자)
  M = MainCategory (분과대분류)
  B = Board (Board 위원장)
  F = Facilitator(Facilitator 간사)
  C = Classification(분류)
  U = User (담당자)
*/

  // 그러면 음 일단은 props로 전달받아야할게..
  // 저 데이터를 하나씩 받아야할까용?
  // data.js 에서 data[0][0] 이런식으로 받아야하나용..?
  // 음 아뇨.. 그냥 이렇게 한번 해보세요
  //

  const tables = data.map((table) => {
    const map = new Map();
    table.forEach((x) => {
      const k = x.depth;
      if (map.has(k) && Array.isArray(map.get(k))) {
        const arr = map.get(k);
        arr.push(x);
        map.set(k, arr);
      } else map.set(k, [x]);
    });

    return map;
  });

  return (
    <>
      {data.map((table, index) => (
        // <RowComponent row={x} key={index} />
        <>
          <Heading data={table} key={index} />
          {table.map((row, k) => (
            <RowComponent row={row} tables={tables[index].get(k + 1)} key={k} />
          ))}
        </>
      ))}
    </>
  );
}

const Heading = ({ data }) => {
  let heading;
  switch (data[0].index) {
    case 1:
      heading = "DRAM";
      break;
    case 2:
      heading = "NAND";
      break;
    case 3:
      heading = "PCM";
      break;
    case 4:
      heading = "COMMON";
      break;
    default:
      heading = undefined;
  }
  return <h1>{heading}</h1>;
};

const RowComponent = ({ row, tables }) => {
  const identifier = row.item[0];
  let category;
  switch (identifier) {
    case "L":
      category = "총책임자";
      break;
    case "M":
      category = "분과대분류";
      break;

    case "B":
      category = "Board 위원장";
      break;

    case "F":
      category = "Facilitator 간사";
      break;

    case "C":
      category = "분과 분류";
      break;

    case "U":
      category = "총책임자";
      break;

    default:
      category = undefined;
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <ColumnComponent data={{ category, title: row.title, tables }} />
      </div>
    </>
  );
};

const ColumnComponent = ({ data: { category, title, tables } }) => {
  const [isModifyModal, setIsModifyModal] = useState(false);
  const [inputText, setInputText] = useState(
    Array.from(new Set(tables), (table) => table.title)
  );
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentText, setCurrentText] = useState("");
  const [tablesState, setTablesState] = useState(tables);
  const ref = useRef(null);

  const isModifyModalOpen = (e, idx) => {
    setCurrentIndex(idx);
    setIsModifyModal(true);
  };

  const modifyModalCancle = () => {
    setIsModifyModal(false);
    setCurrentText("");
    // ref.current.value = "abc";
  };

  const handleOk = () => {
    const newInputText = inputText;
    newInputText[currentIndex] = currentText;
    setInputText(newInputText);
    setIsModifyModal(false);
  };

  const handleChange = (e) => {
    setCurrentText(e.target.value);
  };

  const handleDelete = (idx) => {
    const newTables = JSON.parse(JSON.stringify(tablesState));
    const newInputText = JSON.parse(JSON.stringify(inputText));
    newInputText.splice(idx, 1);
    newTables.splice(idx, 1);
    setTablesState(newTables);
    setInputText(newInputText);
  };

  const handleCreate = () => {};

  return (
    <div style={{ display: "flex" }}>
      {tables && (
        <div
          style={{ border: "1px solid black", width: "200px", height: "100px" }}
        >
          {category}
        </div>
      )}
      {tablesState?.map((table, idx) => (
        <div
          style={{
            border: "1px solid black",
            borderLeft: "0px",
            width: "200px",
            height: "100px",
            position: "relative",
          }}
        >
          {inputText[idx] || table.title}
          <div style={{ position: "absolute", top: "0px", right: "0px" }}>
            <Button onClick={(e) => isModifyModalOpen(e, idx)}>수정</Button>
            {tablesState.length - 1 > idx ? (
              <Button onClick={() => handleDelete(idx)}> x </Button>
            ) : (
              <Button onClick={() => handleCreate()}> + </Button>
            )}
          </div>
          <Modal
            title="수정"
            width="500px"
            open={isModifyModal}
            onOk={handleOk}
            onCancel={modifyModalCancle}
          >
            <div style={{ width: "100%", heigth: "500px", display: "flex" }}>
              <Input
                style={{ width: "100%" }}
                onChange={handleChange}
                defaultValue={inputText[idx]}
                ref={ref}
              />
            </div>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default App;
