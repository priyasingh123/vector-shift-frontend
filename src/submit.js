// submit.js
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { useRef, useEffect } from "react";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});
export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const controllerRef = useRef(null);
  useEffect(() => {
    return () => {
      controllerRef?.current?.abort();
    };
  }, []);

  const handleSubmit = async () => {
    controllerRef?.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    const baseUrl = "https://vectorshift-backend-iqym.onrender.com";
    try {
      const res = await fetch(`${baseUrl}/pipelines/parse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
        signal: controller.signal,
      });

      const data = await res.json();
      console.log(data);
      alert(frameMessage(data));
    } catch (err) {
      console.log("error occured", err);
    }
  };

  const frameMessage = (data) => {
    const { num_nodes, num_edges, is_dag } = data;
    const message = `Total nodes are ${num_nodes} \n Total edges are ${num_edges} \n Graph is ${
      is_dag ? "" : "not a "
    }DAG`;
    return message;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
