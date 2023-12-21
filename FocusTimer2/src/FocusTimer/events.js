import { controls } from './elements.js';
import { toggleMode } from './elements.js';
import * as actions from './actions.js'
import * as el from './elements.js'


export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })

    toggleMode.addEventListener('click', (event) => {
        const actionMusic = event.target.dataset.action
        if(typeof actions[actionMusic] != "function") {
            return
        }

        actions[actionMusic]()
    })
}


export function moreMinutes() {
    el.minutes.addEventListener('Click', actions.more)

}

export function lessMinutes() {
    el.minutes.addEventListener('click', actions.less())

}
