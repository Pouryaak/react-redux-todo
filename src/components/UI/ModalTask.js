import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Select, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import { addTask, editTask, selectTasks } from "../../feature/tasksSlice";

const statusOptions = [
  { key: "p", text: "Pending", value: "pending" },
  { key: "d", text: "Done", value: "done" },
];
export default function ModalTask(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const task = useSelector(selectTasks).find((task) => task.id === props.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.method === "edit") {
      setTitle(task.title);
      setDate(task.dueDate);
      setStatus(task.status);
    }
  }, [props.method, task]);

  const onFormSubmit = () => {
    if (props.method === "edit") {
      dispatch(
        editTask({
          id: props.id,
          title,
          dueDate: date,
          status,
        })
      );
      Swal.fire("Updated!", "The task has been updated.", "success");
    } else {
      dispatch(
        addTask({
          id: "t" + Date.now(),
          title,
          dueDate: date,
          status,
        })
      );
      Swal.fire("Added!", "The new task has been added.", "success");
    }
    setTitle("");
    setDate("");
    setStatus("");
    props.onClose();
  };
  return (
    <>
      <Modal open={props.open}>
        <Modal.Header>{props.title}</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Task Title</label>
              <input
                type="text"
                placeholder="Task Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Field>
            <Form.Field>
              <label>Due Date</label>
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Field>
            <Form.Field
              control={Select}
              options={statusOptions}
              label={{
                children: "Status",
                htmlFor: "form-select-control-gender",
              }}
              placeholder="Status"
              onChange={(e, { name, value }) => setStatus(value)}
              value={status}
            />
            <Button type="button" color="red" onClick={props.onClose}>
              Cancel
            </Button>
            <Button type="button" color={props.btnColor} onClick={onFormSubmit}>
              {props.btnText}
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  );
}
