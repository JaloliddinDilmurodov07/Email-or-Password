let elTitle = document.querySelector('h1')
let elLogin = document.querySelector('.Login')
let elPassword = document.querySelector('.Password')
let elBtn = document.querySelector('.btn')

let log = 'admin'
let pas = 12345
let kir = 'kirit'

function test() {
  if (elLogin.value.trim().toLocaleLowerCase().length >= 5 && elPassword.value.trim().toLocaleLowerCase().length >= 8) {
    console.log('Xush Kelibsiz');
    alert('Xush kelibsiz!!!')
  }else {
    console.log("Noto'g'ri");
    alert("Noto'g'ri???")
  }
}

test()