import React, { useState } from "react"
import Todo from "./compornents/Todo"
import Form from "./compornents/Form"

// 解く順番、作業するファイル名,解くときのポイント
// まずは、App.tsx, Todo.tsx, Form.tsxを見てどんな処理があるか確認しよう！
// githubのReadme で課題１と課題２のポイントを確認しよう (https://github.com/foip-2023-tutorial/react-tutorial)
// 順番通りに解いてみよう！解き終わったら応用課題に挑戦してみよう！

type TodoType = {
  id: string
  name: string
  completed: boolean
}

function App() {
  // 1. App.tsxでuseStateを使って、タスクを格納する空配列とstateを更新する関数を作成する. state名はtasks, 関数名はsetTasks,型名はTodoType[],初期値は[]とする.
  // const [state名, 関数名] = useState<型名>(初期値)
  // 以下のような配列が入る予定(今回は[]でよい)
  //  [{id: "1", name: "掃除", completed: false},
  //   {id: "2", name: "洗濯", completed: false},
  //   {id: "3", name: "料理", completed: false}]

  function addTask(name: string) {
    // 2. App.tsxでaddTaskにタスクの配列に新しいタスクを追加する処理を実装する.配列に新たに追加するオブジェクトは、 {id: "4", name: "買い物", completed: false}のようなもの
    // 2-1  追加するためのオブジェクトであるnewtaskを作成する
    // 2-2　newTaskのidはnanoidを使って、ランダムな文字列を生成する. id = nanoid()
    // 2-3　newTaskのnameは引数に取っているnameをそのまま使う.
    // 2-4　newTaskのcompletedはfalseを使う.
    // 2.5  useStateで作成したstateを更新する関数を使って、タスクの配列を更新する　stateの配列の更新はp48ページ参考
  }

  function deleteTask(id: string) {
    // taskを削除する
    // 5. App.tsxでタスクを削除するdeleteTaskの処理を実装する. filterメソッドを使って条件式に合致しないタスクをなくす
    // 5-1 新しい配列であるremainingTasksを作成する.　remainingTasksには5-2の配列を入れる
    // 5.2 tasksにfilterメソッドを使って引数のidと違うidのタスクのみの配列を作成する
    // 5-3 setTasksにremainingTasksを代入する
  }

  return (
    <div className="App">
      <h1>Todoリスト</h1>
      <Form addTask={addTask} />
      {
        // 4. App.tsxでtasksにある配列をすべて表示させる処理を実装する
        // 4-1　配列の中身をすべて表示させるために、mapを使う
        // 4-2　mapの中身は、Todoコンポーネントを使う
        // 4-3　Todoコンポーネントには、id, name, completed, deleteTaskをpropsとして渡す　mapの使い方はp49を参考にする
        // 4.4 return内にある見本の<Todo id={task.id} name={task.name} completed={task.completed} deleteTask={deleteTask}/>を削除する
        //　ここまで来たら一度サイトを開いて確認してみよう
        // タスクが追加できるようになっていたらOK
      }
      <Todo name="掃除" completed={false} id="1" deleteTask={deleteTask} />
    </div>
  )
}

export default App
