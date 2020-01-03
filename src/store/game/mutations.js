export function startTimer (state, id) {
  clearInterval(state.timer.id)
  state.timer.id = id
}

export function clearTimer (state) {
  clearInterval(state.timer.id)
  localStorage.removeItem('timer')
}

export function tick (state) {
  localStorage.setItem('timer', --state.timer.value)
}

export function nextLevel (state, n) {
  localStorage.setItem('curLevel', ++state.curLevel)
}

export function saveAnswer (state, answer) {
  state.answered.push(answer)
  localStorage.setItem('answered', JSON.stringify(state.answered))
}

export function saveStartDate (state) {
  state.start = new Date()
  localStorage.setItem('start', state.start)
}

export function saveEndDate (state) {
  state.end = new Date()
  localStorage.setItem('end', state.end)
}
