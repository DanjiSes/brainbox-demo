const timer = JSON.parse(localStorage.getItem('timer')) || 30
const start = localStorage.getItem('start') || null
const end = localStorage.getItem('end') || null
const curLevel = JSON.parse(localStorage.getItem('curLevel')) || 1
const answered = JSON.parse(localStorage.getItem('answered')) || []

export default {
  timer: {
    id: null,
    value: timer
  },
  start,
  end,
  curLevel,
  answered,
  game: {
    name: 'Megaline Квест',
    start: '24.09.2019',
    type: 'Линейная',
    author: {
      name: 'BOOM Studio',
      link: 'http://boomstudio.kg'
    },
    needs: ['Ручка'],
    rules: ['Cледуйте получаемым инструкциям']
  },
  levels: [
    {
      order: 1,
      required: 1,
      text: 'Привет, человек. Надеюсь, ты уже зарегистрировался и получил специальный бланк, который пригодится тебе позже. Давай проверим, готов ли ты пройти квест. Напиши, как меня зовут, в окно ответа внизу.',
      answers: [
        { level: 1, order: 1, code: 'BrainBox' }
      ]
    },
    {
      order: 2,
      required: 2,
      text: 'Отлично, человек, ты справился. Теперь я даю тебе задание посложнее. Напиши в окно ответа названия синего и красного брендов, которые ты видишь перед собой.',
      answers: [
        { order: 1, level: 2, code: 'Megaline|Мегалайн' },
        { order: 2, level: 2, code: 'Позитив Контакт|ПозитивКонтакт' }
      ]
    },
    {
      order: 3,
      required: 1,
      text: 'Превосходно, у тебя большой потенциал, человек. Для того, чтобы пройти дальше, найди неподалеку плакат с двумя логотипами, которые ты написал в предыдущем задании. На плакате будет код, который тебе надо вписать в окно ответов.',
      answers: [
        { order: 1, level: 3, code: '1979' }
      ]
    },
    {
      order: 4,
      required: 1,
      text: 'Я вижу, человек, что тебя уже ничто не остановит. На соседнем этаже есть портреты основателей социальных сетей. Впиши их имена в бланк, который ты получил на старте. Внимательно следуй инструкциям.',
      answers: [
        { order: 1, level: 4, code: 'Просто. Выгодно. Надежно.' }
      ]
    }
  ]
}
