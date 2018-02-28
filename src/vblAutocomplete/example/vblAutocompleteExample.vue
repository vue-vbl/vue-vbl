<template>
    <div>
        <vbl-autocomplete :suggestions="suggestions" 
            v-model="name" 
            placeholder="输入名称"></vbl-autocomplete>
        
        <br/>
        禁用
        <vbl-autocomplete :suggestions="suggestions" 
            v-model="name" 
            placeholder="输入名称"
            disabled></vbl-autocomplete>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {name: 'addd'},
                {name: 'a3333'},
                {name: 'a335rw'},
                {name: 'a342354ewew'},
                {name: 'adasfdasfdasf'},
                {name: 'ad234234234'}
            ],
            name: '',
            suggestions: []
        }
    },
    watch: {
        name(val) {
            this.suggestions = this.data.filter((item) => {
                return item.name.indexOf(val) >= 0;
            });
        }
    }
};
</script>
