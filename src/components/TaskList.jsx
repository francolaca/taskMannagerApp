
import { TaskItem } from './TaskItem';

export const TaskList = ({taskListKey, completeTaskKey, deleteTaskKey}) => {

  return (
        <div>     
          {taskListKey.map(task => 
            <TaskItem 
              key = {task.id} 
              taskListKey = {task} 
              completeTaskKey = {completeTaskKey} 
              deleteTaskKey = {deleteTaskKey}>
            </TaskItem>)}
        </div>
  );
};