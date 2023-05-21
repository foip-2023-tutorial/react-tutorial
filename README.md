# 課題１．課題２の作業するファイル名,解くときのポイント

## タスクを追加する

1.  App.tsx で useState を使って、タスクを格納する空配列と state を更新する関数を作成する. state 名は tasks, 関数名は setTasks,型名は TodoType[],初期値は[]とする.
    const [state 名, 関数名] = useState<型名>(初期値)
    以下のような配列が入る予定(今回は[]でよい)
    [{id: "1", name: "掃除", completed: false},
    {id: "2", name: "洗濯", completed: false},
    {id: "3", name: "料理", completed: false}]

2.  App.tsx で addTask にタスクの配列に新しいタスクを追加する処理を実装する.配列に新たに追加するオブジェクトは、 {id: "4", name: "買い物", completed: false}のようなもの
    2-1. 追加するためのオブジェクトである newtask を作成する
    2-2. newTask の id は nanoid を使って、ランダムな文字列を生成する. id = nanoid()
    2-3. newTask の name は引数に取っている name をそのまま使う.
    2-4. newTask の completed は false を使う.
    2-5. useState で作成した state を更新する関数を使って、タスクの配列を更新する　 state の配列の更新は p359 ページ参考

3.  Form.js で追加ボタンを押したときの処理である handleSubmit の処理を実装する。追加ボタンを押した時に input に入力されている値を addTask で追加する処理
    3-1. e.preventDefault()を追加する
    3-2. 　 addTask の引数に state である name を入れた関数を追加する
    3-3. state である name の中身を""にする(submit ボタンを押したときに input の中にある文字を削除するため)
    3-4. 　 input に value 属性値として name を追加する

4.  App.tsx で tasks にある配列をすべて表示させる処理を実装する
    4-1. 　配列の中身をすべて表示させるために、map を使う
    4-2. 　 map の中身は、Todo コンポーネントを使う
    4-3. 　 Todo コンポーネントには、id, name, completed, deleteTask を props として渡す　 map の使い方は p361 を参考にする
    4.4. return 内にある見本の<Todo id={task.id} name={task.name} completed={task.completed} deleteTask={deleteTask}/>を削除する

ここまで来たら一度サイトを開いて確認してみよう!

タスクが追加できるようになっていたら OK

## task を削除する

5.  App.tsx でタスクを削除する deleteTask の処理を実装する. filter メソッドを使って条件式に合致しないタスクをなくす
    5-1. 新しい配列である remainingTasks を作成する.　 remainingTasks には 5-2 の配列を入れる
    5.2. tasks に filter メソッドを使って引数の id と違う id のタスクのみの配列を作成する
    5-3. setTasks に remainingTasks を代入する

6.  Todo.tsx で deleteTask の引数を設定する
    6-1. button タグの onClick 属性にある deletetask の引数を受け取った props の id に変更する

ここまで来たら一度サイトを開いて確認してみよう!

タスクが削除できるようになっていたら OK
