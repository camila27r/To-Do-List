import EveryItem from "./EveryItem";
import { Task } from "../../App";

const Everything = ({ tasks }: { tasks: Task[] }) => {
  const total = tasks.length;
  const pending = tasks.filter((t) => t.done === false).length;
  const done = tasks.filter((t) => t.done === true).length;
  return (
    <>
      <div className="flex justify-between">
        <EveryItem itemName={"Total"} itemValue={total} />
        <EveryItem itemName={"To-do"} itemValue={pending} />
        <EveryItem itemName={"Completed"} itemValue={done} />
      </div>
    </>
  );
};

export default Everything;
