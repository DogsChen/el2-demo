<template>
    <div>
        <el-menu default-activate="/home" router>
            <template>
                <!-- 当前写法仅支持二级菜单 -->
                <div v-for="it, index in MenuDataSource" :key="index">
                    <el-submenu v-if="it.children" :index="it.title">
                        <template slot="title">
                            <i :class="it.icon"></i>
                            <span>{{ it.text }}</span>
                        </template>
                        <div v-for="item in  it.children" >
                            <el-menu-item :index="item.href">
                                <i :class="item.icon"></i>
                                <span>{{ item.text || item.title }}</span>
                            </el-menu-item>
                        </div>
                    </el-submenu>
                    <el-menu-item v-else :index="it.title">
                        <i :class="it.icon"></i>
                        <span>{{ it.text }}</span>
                    </el-menu-item>
                </div>

            </template>
        </el-menu>
    </div>
</template>

<script>

export default {
    name: 'SysMenu',
    components: {},
    props: [],
    data() {
        return {
            MenuDataSource: []
        }
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {
        this.MenuDataSource = this.$store.state.MENUS;
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


<style  scoped>
.el-menu {
    height: 100vh;
}
</style>