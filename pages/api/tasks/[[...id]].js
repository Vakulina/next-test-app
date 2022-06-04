import { tasks } from "../data/tasks"

export default function handleOneTask(req, res) {
  const { query: { id } } = req;
 
  if (Array.isArray(id)&&tasks[id - 1]) {
    res.status(200).json(tasks[id - 1])
  }
  else if(Array.isArray(id)){
    return res.status(400).json("Нет данных о задаче")
  }
  else {
    return res.status(200).json(tasks)
  }
}


