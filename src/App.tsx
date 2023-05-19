import React, { useState } from "react"
import Todo from "./compornents/Todo"
import Form from "./compornents/Form"

type TodoType = {
  id: string
  name: string
  completed: boolean
}

function App() {
  //  タスクの配列,とstateを更新する関数をuseStateで作成

  function addTask(name: string) {
    //  タスクの配列に新しいタスクを追加する処理
  }

  function deleteTask(id: string) {
    //  タスクの配列の中からidが一致するものを削除する処理
  }

  return (
    <div className="App">
      <h1>Todoリスト</h1>
      <Form addTask={addTask} />
      {/* tasksにあるタスクの集合をすべて表示させる処理（配列操作を用いて） */}
      <Todo
        name="掃除"
        completed={false}
        id="1"
        deleteTask={() => {
          deleteTask("")
        }}
      />
    </div>
  )
}

export default App
