import Vue from 'vue'

function blink(el, className) {
    document.querySelector(el).classList.toggle(className)
    setTimeout(() => document.querySelector(el).classList.toggle(className), 300)
}

export const Interface = new Vue({
    el: '#app',
    data() {
        return {
            turretObject: null,
            turretHoverObject: null,
            money: 0
        }
    },
    methods: {
        blinkCostRed() { return blink('.money', 'red') },
        upgradeTurret() { this.turretObject.upgrade() },
        deleteTurret() { this.turretObject.delete() }
    }
})
