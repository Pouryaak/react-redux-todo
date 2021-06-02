import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { List, Button, Label, Icon } from "semantic-ui-react";
import { removeTask } from "../../feature/tasksSlice";
import ModalTask from "../UI/ModalTask";
import Swal from "sweetalert2";

export default function Task(props) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState();

  const onRemoveTask = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeTask(props.id));
        Swal.fire("Deleted!", "The task has been deleted.", "success");
      }
    });
  };
  const openEditTask = () => {
    setShowModal(true);
  };
  const closeAddModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <ModalTask
          open={showModal}
          onClose={closeAddModal}
          method="edit"
          btnText="Update"
          btnColor="blue"
          id={props.id}
        />
      )}
      <List.Item>
        <List.Content floated="right">
          <Button color="blue" icon="pencil" onClick={openEditTask} />
          <Button color="red" icon="trash" onClick={onRemoveTask} />
        </List.Content>
        <List.Content verticalAlign="middle">
          <h3>
            {props.title} &nbsp;
            <Label
              color={props.status === "pending" ? "blue" : "green"}
              horizontal
            >
              {props.status.charAt(0).toUpperCase() + props.status.slice(1)}
            </Label>
            <Icon name="calendar alternate outline" /> {props.date}
          </h3>
        </List.Content>
      </List.Item>
    </>
  );
}
