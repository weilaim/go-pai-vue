<template>
    <div>
        <h1>我是test</h1>
    </div>
</template>

<script>
import * as API from '@/api/test/';
    export default {
        data() {
            return {
                id: 4,
            }
        },
        methods: {
            load() {
                API.getVideo(this.id).then((res) => {
                    console.log(res);
                })
            }
        },
        beforeMount() {
            this.load();
        }
    }
</script>

<style lang="scss" scoped>

</style>