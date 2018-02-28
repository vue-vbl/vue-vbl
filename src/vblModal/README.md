# vbl-modal

>对话框

## API

### props
|名称|类型|默认|描述
|----|----|----|----
|width|String/Number||弹窗宽度
|show|Boolean|false|是否显示
|verticalCenter|Boolean|false|是否垂直居中
|title|String|标题|弹框标题
|okText|String|确认|确认按钮文字
|cancelText|String|取消|取消按钮文字
|buttonSetShow|Boolean|true|点击确认或者取消按钮是否关闭弹框
|maskSetShow|Boolean|false|点击遮罩是否关闭弹框
|hideHeader|Boolean|false|是否显示头
|hideFooter|Boolean|false|是否显示尾
|hideCancel|Boolean|false|是否显示取消按钮
|alert|Boolean|false|是否为提示弹框
|prompt|Boolean|false|是否为确认弹框
|img|Boolean|false|是否为图片弹框
|src|String||图片路径
|content|String||弹框内容
|okCallback|Function||动态调用点击确认回调
|cancelCallbak|Function||动态调用点击取消回调

### events
|名称|参数|描述
|----|----|----
|ok||点击确认后
|cancel||点击取消后

### slot
|名称|参数|描述
|----|----|----
|默认||弹框内容

