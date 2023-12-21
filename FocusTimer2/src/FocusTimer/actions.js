import state from './states.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

//counter
export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function more() {
    timer.moreFiveMinutes()
}

export function less() {
    timer.lessFiveMinutes()
}

//sounds
export function mute(){
    sounds.Floresta.pause()
    sounds.Chuva.pause()
    sounds.Cafeteria.pause()
    sounds.Lareira.pause()
}

export function onMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
}
export function forest() {
    onMusic()
    if(state.isMute) {
        sounds.Floresta.play()
        return
    }
    mute()

} 

export function raind() {
    onMusic()
    if(state.isMute) {
        sounds.Chuva.play()
        return
    }
    mute()

} 

export function coffee() {
    onMusic()
        if(state.isMute) {
        sounds.Cafeteria.play()
        return
    }

    mute()


} 

export function firePlace() {
    onMusic()
        if(state.isMute) {
        sounds.Lareira.play()
        return
    }

    mute()

} 