const cancelButton = document.querySelector('.Cancel_button')
const input2 = document.querySelector('.input2')
const Okay_button = document.querySelector(".Okay_button")
const modal = document.querySelector(".modal")
const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector("#todo_list")
let editButton;
const createTodo = () => {
    if (input.value.trim() === ''){
        return alert('Нельзя вводить пустоту или пробелы')
    }
    const div = document.createElement('div')
    div.setAttribute('class','block_text')

    const divButtons = document.createElement('button')
    divButtons.setAttribute('class','div_buttons')

    const text = document.createElement('h3')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class','delete_button')

    let editButton = document.createElement('button')
    editButton.setAttribute('class','edit_button')



    deleteButton.innerHTML = 'delete'
    editButton.innerHTML = 'edit'


    text.innerHTML = input.value

    cancelButton.onclick = () => {
        if (input2.value != ''){
            text.innerHTML = input2.value;
            modal.classList.remove('toggleUp')
        }else {
            alert('Нельзя вводить пустоту или пробелы')
        }
    }

    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)

    deleteButton.onclick = () => div.remove()
    text.addEventListener('click', ()=> text.classList.toggle('toggle'))

    editButton.addEventListener('click', () => modal.classList.add('toggleUp'))
    Okay_button.onclick = () => {modal.classList.remove('toggleUp')}




    todoList.prepend(div)
    input.value = ''



}
createButton.onclick = () => createTodo()
window.onkeydown = (event) => {
    if (event.code === 'Enter'){
        createTodo()
    }
}







