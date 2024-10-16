const form = document.getElementById('main-form')
form.addEventListener('submit', function name(e) {
  e.preventDefault()
  console.log('INVIO DEL FORM', e)
  const taginput = document.getElementById('tag')
  const tagvalue = taginput.value
  console.log('tag', tagvalue)
  const newH3 = document.createElement('h3')
  newH3.innerText = 'Grazie! Prodotto registrato correttamente.'
  const main = document.getElementsByTagName('main')[0]
  main.appendChild(newH3)

  taginput.value = ''
  form.reset()
})
