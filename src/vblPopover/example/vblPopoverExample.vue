<template>
    <div>
        <br/><br/>
        <vbl-popover place="top">
            <vbl-button>鼠标滑过显示(上)</vbl-button>
            <div slot="content">
                <div style="width: 200px">这个是一个说明！</div>
            </div>
        </vbl-popover>
        <br/><br/>
        <vbl-popover place="bottom">
            <vbl-button>鼠标滑过显示(下)</vbl-button>
            <div slot="content">
                <div style="width: 200px">这个是一个说明！</div>
            </div>
        </vbl-popover>
        <br/><br/>
        <vbl-popover place="left">
            <vbl-button>鼠标滑过显示(左)</vbl-button>
            <div slot="content">
                <div style="width: 200px">这个是一个说明！</div>
            </div>
        </vbl-popover>
        <br/><br/>
        <vbl-popover place="right">
            <vbl-button>鼠标滑过显示(右)</vbl-button>
            <div slot="content">
                <div style="width: 200px">这个是一个说明！</div>
            </div>
        </vbl-popover>
    </div>
</template>