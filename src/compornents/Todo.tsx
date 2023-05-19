import React, { useState } from "react"
import "./Todo.css"

type PropsTodoType = {
  id: string
  name: string
  completed: boolean
  deleteTask: (id: string) => void
}

export default function Todo({
  id,
  name,
  completed,
  deleteTask,
}: PropsTodoType) {
  return (
    <li>
      <span>{name}</span>
      <button onChange={() => deleteTask("")}>削除</button>
    </li>
  )
}
