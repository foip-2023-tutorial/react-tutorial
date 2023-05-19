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
    // 追加ボタンを押したときの処理
    // tasksにinputを押した時に入力されている値を追加する処理
    // inputタグのvalueを空にする処理
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="todoを入力してください"
      />
      <input type="submit" value="追加" />
    </form>
  )
}
