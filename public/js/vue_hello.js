Vue.component('hello', {
    template: `
    <div class="container">
        <h2>hello world</h2>
        <button @click="showText">点击显示</button>
    </div>
    `,
    data() {
        return {
            msg: ''
        }
    },
    inject: ['toast'],
    methods: {
        showText() {
            this.toast('hello!')
        }
    }
});