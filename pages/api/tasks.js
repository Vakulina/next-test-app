
import { tasks } from "./data/tasks"

export default function handler(req, res) {
  res.status(200).json(tasks)
}