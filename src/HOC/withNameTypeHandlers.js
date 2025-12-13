import { useEffect } from "react";
import { useSetValues } from "../hooks/useSetValues";

const withNameTypeHandlers =
  (config = {}) =>
  (Component) => {
    const WrappedComponent = (props) => {
      const { data, id } = props;
      const {
        nameKey,
        typeKey,
        initialDefaultName,
        targetDefaultName,
        defaultType,
        styleObj,
      } = config;
      const initialName =
        data?.[nameKey] ||
        (initialDefaultName && id
          ? id.replace(initialDefaultName, targetDefaultName)
          : targetDefaultName);
      const initialType = data[typeKey] ?? defaultType;

      const [currName, setCurrName, handleNameChange] =
        useSetValues(initialName);
      const [currType, setCurrType, handleTypeChange] =
        useSetValues(initialType);
      const defaultStyleObj = {
        width: 200,
        height: 80,
        border: "1px solid black",
        borderRadius: "12px",
        padding: "2px",
        ...styleObj,
      };

      useEffect(() => {
        setCurrName(
          data?.[nameKey] ||
            (initialDefaultName && id
              ? id.replace(initialDefaultName, targetDefaultName)
              : targetDefaultName)
        );
      }, [
        data,
        id,
        initialDefaultName,
        nameKey,
        setCurrName,
        targetDefaultName,
      ]);

      useEffect(() => {
        setCurrType(data[typeKey] ?? defaultType);
      }, [data, defaultType, setCurrType, typeKey]);

      return (
        <div style={{ ...defaultStyleObj, ...styleObj }}>
          <Component
            {...props}
            currName={currName}
            currType={currType}
            handleNameChange={handleNameChange}
            handleTypeChange={handleTypeChange}
          />
        </div>
      );
    };
    return WrappedComponent;
  };

export default withNameTypeHandlers;
