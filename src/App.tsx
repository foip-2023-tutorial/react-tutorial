import React, { useState } from "react"
import Todo from "./compornents/Todo"
import Form from "./compornents/Form"

// 解く順番、作業するファイル名,解くときのポイント

// タスクを追加する
// 1. App.tsxでuseStateを使って、タスクを格納する空配列とstateを更新する関数を作成する. state名はtasks, 関数名はsetTasks,型名はTodoType[],初期値は[]とする.
// const [state名, 関数名] = useState<型名>(初期値)
// 以下のような配列が入る予定(今回は[]でよい)
//  [{id: "1", name: "掃除", completed: false},
//   {id: "2", name: "洗濯", completed: false},
//   {id: "3", name: "料理", completed: false}]

// 2. App.tsxでaddTaskにタスクの配列に新しいタスクを追加する処理を実装する.配列に新たに追加するオブジェクトは、 {id: "4", name: "買い物", completed: false}のようなもの
// 2-1  追加するためのオブジェクトであるnewtaskを作成する
// 2-2　newTaskのidはnanoidを使って、ランダムな文字列を生成する. id = nanoid()
// 2-3　newTaskのnameは引数に取っているnameをそのまま使う.
// 2-4　newTaskのcompletedはfalseを使う.
// 2.5  useStateで作成したstateを更新する関数を使って、タスクの配列を更新する　stateの配列の更新はp359ページ参考

// 3. Form.jsで追加ボタンを押したときの処理であるhandleSubmitの処理を実装する。追加ボタンを押した時にinputに入力されている値をaddTaskで追加する処理
// 3-1  e.preventDefault()を追加する
// 3-2　addTaskの引数にstateであるnameを入れた関数を追加する
// 3-3  stateであるnameの中身を""にする(submitボタンを押したときにinputの中にある文字を削除するため)
// 3-4　inputにvalue属性値としてnameを追加する

// 4. App.tsxでtasksにある配列をすべて表示させる処理を実装する
// 4-1　配列の中身をすべて表示させるために、mapを使う
// 4-2　mapの中身は、Todoコンポーネントを使う
// 4-3　Todoコンポーネントには、id, name, completed, deleteTaskをpropsとして渡す　mapの使い方はp361を参考にする
// 4.4 return内にある見本の<Todo id={task.id} name={task.name} completed={task.completed} deleteTask={deleteTask}/>を削除する

//　ここまで来たら一度サイトを開いて確認してみよう
// タスクが追加できるようになっていたらOK

// taskを削除する
// 5. App.tsxでタスクを削除するdeleteTaskの処理を実装する. filterメソッドを使って条件式に合致しないタスクをなくす
// 5-1 新しい配列であるremainingTasksを作成する.　remainingTasksには5-2の配列を入れる
// 5.2 tasksにfilterメソッドを使って引数のidと違うidのタスクのみの配列を作成する
// 5-3 setTasksにremainingTasksを代入する

// 6 Todo.tsxでdeleteTaskの引数を設定する
// 6-1 buttonタグのonClick属性にあるdeletetaskの引数を受け取ったpropsのidに変更する

//　ここまで来たら一度サイトを開いて確認してみよう
//  タスクが削除できるようになっていたらOK

type TodoType = {
  id: string
  name: string
  completed: boolean
}

function App() {
  //  タスクの空配列,とstateを更新する関数をuseStateで作成

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
      <Todo name="掃除" completed={false} id="1" deleteTask={deleteTask} />
    </div>
  )
}

export default App
