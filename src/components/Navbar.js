import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon, Menu } from "semantic-ui-react";
import { selectUserSignIn, setSignIn, setSignOut } from "../feature/userSlice";
import ModalTask from "./UI/ModalTask";
import fire from "../firebase";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const isUserSignedIn = useSelector(selectUserSignIn);
  const dispatch = useDispatch();

  const openAddModal = () => {
    setShowModal(true);
  };
  const closeAddModal = () => {
    setShowModal(false);
  };

  const userLogOut = () => {
    fire.auth().signOut();
    dispatch(setSignOut());
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
            {isUserSignedIn && (
              <Button
                positive
                icon
                labelPosition="right"
                onClick={openAddModal}
              >
                Add Task
                <Icon name="plus" />
              </Button>
            )}
            &nbsp;
            {isUserSignedIn && (
              <Button negative icon labelPosition="right" onClick={userLogOut}>
                Logout
                <Icon name="sign-out" />
              </Button>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
}
