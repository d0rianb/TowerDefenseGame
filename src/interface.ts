import Vue from 'vue'

export const Interface = new Vue({
    el: '#app',
    data() {
        return {
            turretStats: null,
            turretHoverStats: null,
            frameTime: 0,
        }
    },
    computed: {
        fps() { return `${(1000 / this.frameTime).toFixed(0)} fps` }
    }
})
