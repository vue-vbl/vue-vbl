<template>
    <div>
        <vbl-modal :show.sync="show">
            <p>自定义弹框内容自定义弹框内容自定义弹框内容自定义弹框内容自定义弹框内容自定义弹框内容自定义弹框内容</p>
        </vbl-modal>
        <vbl-modal :show.sync="show1" vertical-center>
            <p>自定义弹框内容自定义弹框内容自定义弹框内容自定义弹框内容自定义弹框内容自定义弹框内容自定义弹框内容</p>
        </vbl-modal>
        <vbl-button @click="show = true">显示弹框</vbl-button>
        <br/><br/>
        <vbl-button @click="show1 = true">显示垂直居中弹框</vbl-button>
        <br/><br/>
        <vbl-button @click="showImg">动态调用图片弹框</vbl-button>
        <br/><br/>
        <vbl-button @click="showConfirm">动态调用确认弹框</vbl-button>
        <br/><br/>
        <vbl-button @click="showAlert">动态调用提示弹框</vbl-button>
    </div>
</template>

<script>
import imgSrc from './2.jpg';

export default {
    data() {
        return {
            show: false,
            show1: false
        }
    },
    methods: {
        showConfirm() {
            this.$modal.confirm(
                {
                    content: '确认删除吗?',
                    okCallback: () => {
                        console.log('ok');
                    },
                    cancelCallback: () => {
                        console.log('cancel');
                    }
                }
            );
        },
        showAlert() {
            this.$modal.alert('编辑成功！');
        },
        showImg() {
            this.$modal.img({
                src: imgSrc
            });
        }
    }
}
</script>
