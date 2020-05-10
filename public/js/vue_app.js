Vue.component('app', {
    template: `
    <div class="main">
        <toast ref="toast"></toast>
        <div class="topbar">
            <ul>
                <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/hello">hello</router-link></li>
                <li><router-link to="/weather">weather</router-link></li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
    `,
    provide() {
        return {
            toast: this.toast
        }
    },
    methods: {
        toast: function(msg) {
            this.$refs.toast.showMsg(msg)
        }
    },
});