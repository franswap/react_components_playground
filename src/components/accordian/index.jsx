import { useState } from "react";
import data from "./data";
import "./style.css";
import Button from "../button";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multipleSelected];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultipleSelected(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <div className="title-generator">BOX EN ACCORDEON AVEC SELECTION SIMPLE OU MULTIPLE</div>
      <div className="top">
        <Button
          onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        >
          Multi selection
        </Button>
        {enableMultipleSelection === true ? (
          <div className="txt-information">ACTIVE</div>
        ) : null}
      </div>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h2>{dataItem.name}</h2>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? multipleSelected.indexOf(dataItem.id) !== -1 && (
                    <div className="desc">{dataItem.hobbies}</div>
                  )
                : selected === dataItem.id && (
                    <div className="desc">{dataItem.hobbies}</div>
                  )}
            </div>
          ))
        ) : (
          <div className="notFound">Pas de données</div>
        )}
      </div>
    </div>
  );
}
