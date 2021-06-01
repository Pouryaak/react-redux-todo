import React, { useState } from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import ModalTask from "./UI/ModalTask";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const openAddModal = () => {
    setShowModal(true);
  };
  const closeAddModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <ModalTask
        open={showModal}
        btnText="Add"
        onClose={closeAddModal}
        method="add"
        btnColor="green"
      />
      <Menu>
        <Menu.Item header>
          <h2>React ToDo</h2>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button positive icon labelPosition="right" onClick={openAddModal}>
              Add Task
              <Icon name="plus" />
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
}
