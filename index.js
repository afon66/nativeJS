
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    userId: 11,
    id: 101,
    title: " I am so dat nam conse",
    body: "tas error itaque dicta in\naum et distinctio eum\naccusamus ratione error aut"
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => {
    if (!res.ok) {
      throw new Error('Ошибка кругом все ошибка с вот таким статусом ' + res.status)
    }

    return res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log(error))


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    if (!res.ok) {
      throw new Error('Ошибка' + res.status)
    }
    return res.json()
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))


