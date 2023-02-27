let userName = prompt('Кто там?')

if(userName == 'Админ'){
    let password = prompt('Пароль?')
    if(password == 'Я Главный'){
        alert('Здравствуйте!')
    }
    else if(password == '' || password == null){
        alert('Отмена')
    }
    else{
        alert('Неверный пароль')
    }
}
else if(userName == '' || userName == null){
    alert('Отмена')
}
else{
    alert('Я вас не знаю')
}