import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import app from './app';
import index from './index';
import start from './start';
import {plugins} from '../src';
import './readme.css';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.emulateJSON = true;

var rules = {
    isMail: {
        getMessage: field => '邮件格式不正确',
        validate: value => value.indexOf('@') > 0
    }
};

Object.keys(plugins).forEach((name) => {
    if (name === 'vblForm') {
        Vue.use(plugins[name], rules);
        return;
    }
    Vue.use(plugins[name]);
});

var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: start
        }, 
        {
            path: '/:id',
            component: index
        }
    ]
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

new Vue({
    el: '#app',
    router,
    template: '<app/>',
    components: {
        app
    }
});
