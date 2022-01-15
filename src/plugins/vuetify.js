import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'md',
    theme: {
        themes: {
            light: {
                primary:'#d60000',
                secondary:'#34abdb',
                success:'#ffffff',
                error:'#ff2345'
        }
    }
    }
});


