import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { List, Button, Label } from "semantic-ui-react";
import { removeTask } from "../../feature/tasksSlice";
import ModalTask from "../UI/ModalTask";

export default function Task(props) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState();

  const onRemoveTask = () => {
    dispatch(removeTask(props.id));
  };
  const openEditTask = () => {
    setShowModal(true);
  };
  const closeAddModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <ModalTask
        open={showModal}
        onClose={closeAddModal}
        method="edit"
        btnText="Update"
        btnColor="blue"
      />
      <List.Item>
        <List.Content floated="right">
          <Button color="blue" icon="pencil" onClick={openEditTask} />
          <Button color="red" icon="trash" onClick={onRemoveTask} />
        </List.Content>
        <List.Content verticalAlign="middle">
          <h3>
            {props.title} &nbsp;
            <Label color="blue" horizontal>
              {props.status}
            </Label>
          </h3>
        </List.Content>
      </List.Item>
    </>
  );
}
