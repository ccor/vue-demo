Vue.component('weather', {
    template: `
    <div class="container">
        <h2 v-if="weatherinfo.city">{{weatherinfo.city}} |{{weatherinfo.weather}}| {{weatherinfo.temp1}}/ {{weatherinfo.temp2}} </h2>
    </div>
    `,
    data() {
        return {
            weatherinfo: {}
        }
    },
    mounted () {
        this.getWeather()
    },
    methods: {
        async getWeather(){
            const res = await axios.post('api/proxy', {
                req:{
                    url: 'http://www.weather.com.cn/data/cityinfo/101010100.html',
                    method: 'get'
                }
            })
            if(res.data.weatherinfo){
                this.weatherinfo = res.data.weatherinfo
            }
        }
    }
});