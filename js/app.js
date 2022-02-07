const userName = prompt('inserisci il tuo nome')
console.log (userName)

const surName = prompt('inserisci il tuo cognome')
console.log (surName)

const userColor = prompt('qual è il tuo colore preferito?')
console.log (userColor)

const userPassword = document.getElementById('text')

userPassword.innerHTML = userName + surName + userColor + '21'