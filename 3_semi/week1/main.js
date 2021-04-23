const display = document.getElementById("display")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2") 
const button3 = document.getElementById("button3")
const display2 = document.getElementById("display2")

button1.onclick = function(){
  display2.textContent = "正解"
}
button2.onclick = function(){
  display2.textContent = "不正解"
}
button3.onclick = function(){
  display2.textContent = "不正解"
}
