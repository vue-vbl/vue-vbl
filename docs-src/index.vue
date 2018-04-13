<template>
    <div class="index">
        <div class="side">
            <h1 title="vue backend library">
                <router-link to="/">&lt;vbl/&gt;</router-link>
            </h1>
            
            <h2><vbl-icon type="ion-android-arrow-dropright"></vbl-icon>常用</h2>
            <ul>
                <li v-for="(plugin, name) in common" 
                    :class="{'active': currentView === name}">
                    <router-link :to="`/${name}`">{{name}}</router-link>
                </li>
            </ul>
            
            <h2><vbl-icon type="ion-android-arrow-dropright"></vbl-icon>基本</h2>
            <ul>
                <li v-for="(plugin, name) in basic" 
                    :class="{'active': currentView === name}">
                    <router-link :to="`/${name}`">{{name}}</router-link>
                </li>
            </ul>
            
            <h2><vbl-icon type="ion-android-arrow-dropright"></vbl-icon>浮层</h2>
            <ul>
                <li v-for="(plugin, name) in float" 
                    :class="{'active': currentView === name}">
                    <router-link :to="`/${name}`">{{name}}</router-link>
                </li>
            </ul>
            
            <h2><vbl-icon type="ion-android-arrow-dropright"></vbl-icon>表单</h2>
            <ul>
                <li v-for="(plugin, name) in form" 
                    :class="{'active': currentView === name}">
                    <router-link :to="`/${name}`">{{name}}</router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="example">
                <div class="readme">
                    <h2>Examples</h2>
                </div>
                <div class="demo">
                    <component :is="demo"></component>
                </div>
                <div class="readme">
                    <pre>{{code}}</pre>
                </div>
            </div>
            <div class="readme" v-html="doc"></div>
        </div>
    </div>
</template>

<script>
import {
    common,
    basic,
    float,
    form
} from '../src';

export default {
    name: 'index',
    data() {
        return {
            common,
            basic,
            float,
            form
        };
    },
    computed: {
        currentView() {
            return this.$route.params.id;
        },
        doc() {
            return require(`@/${this.currentView}/README.md`);
        },
        code() {
            return require(`!!raw-loader!@/${this.currentView}/example/${this.currentView}Example`);
        },
        demo() {
            return require(`@/${this.currentView}/example/${this.currentView}Example`);
        }
    }
}
</script>

<style lang="less">
    .index{
        .side {
            float: left;
            width: 220px;
            border-right: 1px solid #ccc;
            font-size: 16px;
            h1 {
                padding: 20px 0;
                border-bottom: 1px solid #ccc;
                text-align: center;
                cursor: pointer;
                font-size: 32px;
                font-weight: bold;
                a {
                    color: #000;
                    text-decoration: none;   
                }
            }
            h2 {
                margin: 10px 0 0 20px;
                .vbl-icon {
                    margin-right: 5px;
                }
            }
            ul li {
                margin:10px 20px;
                &.active a {
                    color: #0e75e1;
                }
                a {
                    text-decoration: none;
                    color:#000;
                    display: inline-block;
                    border: 1px solid #ccc;
                    padding: 10px;
                    background: #f0f0f0;
                    display: block; 
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        .content {
            margin-left: 220px;
            padding: 85px 20px 20px;
            .demo {
                margin-bottom: 20px;
            }
        }
        .readme blockquote {
            position: absolute;
            top: 10px;
            font-size: 40px;
            border: none;
            color: #0e75e1;
            padding: 0;
        }
        .download {
            margin-bottom: 16px;
            a {
                color: #0e75e1;
            }
        }
    }
    
</style>
