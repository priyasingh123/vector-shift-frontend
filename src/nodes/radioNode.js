import withNameTypeHandlers from "../HOC/withNameTypeHandlers";

const RadioNode = ({
  id,
  currName,
  currType,
  handleNameChange,
  handleTypeChange,
}) => {
  const radioGroupName = `type-${id}`;
  return (
    <>
      <div>
        <span>Radio</span>
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <div>
          <span>Type:</span>

          <label htmlFor={`text-${id}`}>
            <input
              id={`text-${id}`}
              type="radio"
              name={radioGroupName}
              value="Text"
              checked={currType === "Text"}
              onChange={handleTypeChange}
            />
            Text
          </label>

          <label htmlFor={`file-${id}`}>
            <input
              id={`file-${id}`}
              type="radio"
              name={radioGroupName}
              value="File"
              checked={currType === "File"}
              onChange={handleTypeChange}
            />
            File
          </label>
        </div>
      </div>
    </>
  );
};

export default withNameTypeHandlers({
  targetDefaultName: "radio_",
  initialDefaultName: "radio-",
  //   defaultType: "Text",
  styleObj: {
    height: 100,
  },
})(RadioNode);
