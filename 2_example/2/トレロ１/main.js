const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
const inputElement2 = document.getElementById("input-todo2")
const container2 = document.getElementById("cards-container2")
const addButton2 = document.getElementById("add-button2")


// 追加ボタンを押したときの処理を登録
addButton.onclick = function() {
  // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}

// 共通の処理：テキストからカードを作成する
const createCard = function(text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}


addButton2.onclick = function() {
  // カードを作成する
  const card = createCard(inputElement2.value)
  container2.append(card)

  // 入力欄を空にする
  inputElement2.value = ""
}


