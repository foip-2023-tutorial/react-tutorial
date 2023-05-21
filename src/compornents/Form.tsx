import React from "react"

type FormProps = {
  addTask: (name: string) => void
}

export default function Form({ addTask }: FormProps) {
  const [name, setName] = React.useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // 3. Form.jsで追加ボタンを押したときの処理であるhandleSubmitの処理を実装する。追加ボタンを押した時にinputに入力されている値をaddTaskで追加する処理
    // 3-1  e.preventDefault()を追加する
    // 3-2　addTaskの引数にstateであるnameを入れた関数を追加する
    // 3-3  stateであるnameの中身を""にする(submitボタンを押したときにinputの中にある文字を削除するため)
    // 3-4　inputにvalue属性値としてnameを追加する、ここだけ下のreturn文の中で行う
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="todoを入力してください"
        // 3-4　inputにvalue属性値としてnameを追加する
      />
      <input type="submit" value="追加" />
    </form>
  )
}
