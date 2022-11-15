import { nanoid } from 'nanoid'


class ToDo {
  isCompleted = false
  constructor (task) {
    this.task= task
    this.id = nanoid(6)
  }
}

export default ToDo