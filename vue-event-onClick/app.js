new Vue({
    el: '#app',
    data: {
        initialCount: 0
    },
    methods: {
        sumCount() {
            return this.initialCount++
        },
        resetCount() {
            return this.initialCount = 0
        }
    }
})