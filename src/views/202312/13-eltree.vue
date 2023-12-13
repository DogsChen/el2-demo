<template>
    <div>
        <span> 为了实现手动选择el-tree节点的demo</span>
        <div>
            <el-tree ref="treeObj" default-expand-all highlight-current show-checkbox node-key="id" :data="treeData" :props="defaultProps"
                @node-click="handleNodeClick"></el-tree>
        </div>
        <div>
            <el-button type="success" @click="selectOneTotwo">选择1-2节点</el-button>
            <el-button type="success" @click="setOneToOne">选择1-1节点</el-button>
            <el-button type="success" @click="reset">reset</el-button>
        </div>
    </div>
</template>

<script>

export default {
    name: '',
    components: {},
    props: ['list'],
    data() {
        return {
            treeData: [
                {
                    id: 1,
                    label: '一级',
                    children: [{
                        id: 11,
                        label: '1-1级',
                    }, {
                        id: 12,
                        label: '1-2级',
                    }]
                }
            ],
            defaultProps: {
                label: 'label',
                children: "children"
            }

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
        handleNodeClick(args) {
            console.log(args,'checked');
        },
        selectOneTotwo(args) {
            console.log(this.$refs.treeObj, args)
            this.$refs.treeObj.setCheckedKeys([12])
            this.loginfo();
        },
        setOneToOne() {
            this.$refs.treeObj.setCurrentKey(11)
            this.loginfo();
            this.$refs.treeObj.setCurrentNode({
                id: 11,
                label: '1-1级',
            });
            this.handleNodeClick(this.$refs.treeObj.getCurrentNode()) // 手动调用点击节点的事件
            this.loginfo();
        },
        reset(){
            this.$refs.treeObj.setCheckedKeys([]);
            this.$refs.treeObj.setCurrentKey();
            this.loginfo();
            
        },
        loginfo(){
            console.log(this.$refs.treeObj.getCheckedNodes());
            console.log(this.$refs.treeObj.getCheckedKeys());
            console.log(this.$refs.treeObj.getCurrentKey());
            console.log(this.$refs.treeObj.getCurrentNode());
        }
    }
}
</script>
<style  scoped></style>