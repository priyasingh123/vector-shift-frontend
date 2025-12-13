// inputNode.js

import { Handle, Position } from "reactflow";
import withNameTypeHandlers from "../HOC/withNameTypeHandlers";

const InputNode = ({
  id,
  currName,
  currType,
  handleNameChange,
  handleTypeChange,
}) => {
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <div>
        <span>Input</span>
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label>
          Type:
          <select value={currType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </div>
  );
};

export default withNameTypeHandlers({
  nameKey: "inputName",
  typeKey: "inputType",
  initialDefaultName: "customInput-",
  targetDefaultName: "input_",
  defaultType: "Text",
})(InputNode);
