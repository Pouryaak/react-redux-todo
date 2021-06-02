import React from "react";
import { useSelector } from "react-redux";
import { List } from "semantic-ui-react";
import { selectTasks } from "../../feature/tasksSlice";
import Task from "./Task";

export default function Tasks() {
  const tasks = useSelector(selectTasks);
  return (
    <List divided verticalAlign="middle">
      {tasks?.map((task) => {
        return (
          <Task
            id={task.id}
            title={task.title}
            status={task.status}
            key={task.id}
            date={task.dueDate}
          />
        );
      })}
    </List>
  );
}
