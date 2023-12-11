<template>
    <div>
        <el-row>
            <el-col :span="4">
                <SysMenu></SysMenu>
            </el-col>
            <el-col :span="20" style="padding: 20px 20px;">
                <RouterView></RouterView>
            </el-col>
        </el-row>

       
    </div>
</template>

<script>
import SysMenu from '@/components/SysMenu.vue'
import {RouterLink ,RouterView} from 'vue-router';

export default {
    name: 'HomeView',
    components: { SysMenu },
    props: ['list'],
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {

    },
    beforeCreate() {

    },
    beforeMount() {

    },
    beforeUpdate() {

    },
    updated() {

    },
    beforeDestroy() {

    },
    destroyed() {

    },
    activated() {

    },
    methods: {

    }
}
</script>
<style  scoped></style>