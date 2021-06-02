import React from "react";
import Tasks from "./Tasks/Tasks";
import { emptyAvatar } from "../components/UI/emptySVG";
import { useSelector } from "react-redux";
import { selectTasks } from "../feature/tasksSlice";
import { Header } from "semantic-ui-react";

export default function HomePage() {
  const tasks = useSelector(selectTasks);
  return (
    <div>
      <Tasks />
      {tasks.length === 0 && (
        <>
          <Header as="h2" icon textAlign="center">
            Huurayy! No tasks
          </Header>
          {emptyAvatar}
        </>
      )}
    </div>
  );
}
