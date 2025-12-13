// outputNode.js

import { Handle, Position } from "reactflow";
import withNameTypeHandlers from "../HOC/withNameTypeHandlers";

const OutputNode = ({
  id,
  currType,
  handleNameChange,
  currName,
  handleTypeChange,
}) => {
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <Handle type="target" position={Position.Left} id={`${id}-value`} />
      <div>
        <span>Output</span>
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
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default withNameTypeHandlers({
  nameKey: "outputName",
  typeKey: "outputType",
  initialDefaultName: "customOutput-",
  targetDefaultName: "output_",
  defaultType: "Image",
})(OutputNode);
