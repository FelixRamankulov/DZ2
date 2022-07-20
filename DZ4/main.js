  button.onclick = () => {
    const div = document.createElement("div")
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "delete"
    const changeButton = document.createElement("button")
    changeButton.innerText = "change"
    const p = document.createElement("p")
    deleteButton.onclick = (e) => {
        e.target.parentElement.remove()
    }
    changeButton.onclick = (e) => {
        e.target.nextSibling.innerText = prompt("Изменить текст")
    }





    div.setAttribute("class", "block")
    p.innerText = input.value



    div.append(deleteButton, changeButton, p)
    document.body.append(div)
    input.value = ""

}