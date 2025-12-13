// textNode.js

import { Handle, Position } from "reactflow";
import withNameTypeHandlers from "../HOC/withNameTypeHandlers";

const TextNode = ({ id, currName, handleNameChange }) => {
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </div>
  );
};

export default withNameTypeHandlers({
  nameKey: "text",
  targetDefaultName: "{{input}}",
})(TextNode);
