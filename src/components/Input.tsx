import { useState, FormEvent } from "react";
const InputContainer = ({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
  const [newTaskName, setNewTaskName] = useState("");
  return (
    <form
      action=""
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        handleSubmit(e, newTaskName);
        setNewTaskName("");
      }}
    >
      <div className="flex flex-col">
        <label className="text-amber-50 font-bold">Add a task:</label>
        <input
          className="p-2 bg-blue-100 rounded-sm"
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-sky-900 rounded-lg hover:bg-blue-400 p-1 text-amber-50"
      >
        Add task
      </button>
    </form>
  );
};

export default InputContainer;
