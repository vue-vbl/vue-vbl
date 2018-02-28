# vbl-table

>表格

## API

### props
|名称|类型|默认|描述
|----|----|----|----
|columns|Array|[]|表头,比如：[{name: 'num', text: '数量', width: '50'},...],width单位%
|rows||null|表内容,比如：[{num: 1},...],使用时初始化null可绕过为空判断
|order|Array|[]|表头排序字段
|check|Array|null|是否有多选,选择默认
|select||null|是否有单选,选择默认
|more|Boolean|false|是否有更多
|width|String/Number||表格宽度（单位px）

### events
|名称|参数|描述
|----|----|----
|toggleMore|show, row, index|折叠时调用

### slot
|名称|参数|描述
|----|----|----
|表字段|row, index|自定义单元格
|more|row, index|自定义更多

