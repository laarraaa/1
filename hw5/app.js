const arr = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
const obj = {};
arr.forEach(tag => {
    obj[tag] = (obj[tag] || 0) + 1;
});
const sorted = Object.fromEntries(Object.entries(obj).sort((a,b)=>a[0]-b[0]))
console.log(obj)

function name(name, surname, fatherName){


    let firstNameLetter = name.toUpperCase().split('')[0]
    let firstFatherName = fatherName.toUpperCase().split('')[0]
    console.log(surname+ ' '+firstNameLetter+"."+ firstFatherName+".")


}
name("Марина", "Зенкина", "Владимировна")

function book(...books) {
  books.forEach(el => {
      if (el.toLowerCase().split("").includes('у')){
          console.log(el)
      }
  })
}
book('Книга о У', "Книга о УО","Книга о Р")


const searchName = prompt('Enter search name').trim().toLowerCase()
const users = [
    {user:'john', birthday:'20.01.23'},
    {user:'oliver', birthday: '20.07.98'},
    {user:'jack', birthday: '08.12.88'},
    {user:'tim', birthday: '12.11.07}'},
    {user:'bob', birthday: '27.04.05'}]
let result =  users.find((info) => info.user.toLowerCase() === searchName)
console.log(result)
