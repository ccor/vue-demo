Vue.component('toast', {
    template: `
    <transition name="fade">
        <div class="m-toast-pop" v-if="show">
            <div class="m-toast-inner">
                <div class="m-toast-inner-text">{{msg}}</div>
            </div>
        </div>
    </transition>
    `,
    data() {
        return {
            show: false,
            msg: ''
        }
    },
    methods: {
        showMsg(txt) {
            this.msg = txt;
            this.show = true;
            setTimeout(() => this.show = false, 2000);
        }
    }
});