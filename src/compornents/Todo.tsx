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
      {
        // 6 Todo.tsxでdeleteTaskの引数を設定する
        // 6-1 buttonタグのonClick属性にあるdeletetaskの引数を受け取ったpropsのidに変更する
        //　ここまで来たら一度サイトを開いて確認してみよう
        //  タスクが削除できるようになっていたらOK
      }
      <button onClick={() => deleteTask("")}>削除</button>
    </li>
  )
}
