import state from './states.js'
import * as el from './elements.js'
import * as action from './actions.js'

export function countdown() {

    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds <0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        action.reset()
        return
    }

    updateDisplay(minutes, seconds)
    state.countdownId = setTimeout(() =>  countdown(), 1000)
}
export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function moreFiveMinutes() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    if (minutes >= 60) {
        return
    }
    updateDisplay(minutes + 5, seconds)
}

export function lessFiveMinutes() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    if (minutes <= 1) {
        return
    }
    updateDisplay(minutes - 5, seconds)
}