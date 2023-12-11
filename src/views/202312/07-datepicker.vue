<template>
    <div>
        <div class="desc">
            当前案例，为了实现效果是： 手动输入时间按照格式YYYYMMDD格式，点击回车或者失去焦点时候，使用YYYY-MM-DD格式。
            <div>
                只读显示
                <el-input readonly v-model="startTime" style='width:200px'></el-input>
            </div>
        </div>
        <div>
            <el-date-picker v-model="startTime" value-format="yyyy-MM-dd" @focus="onTextFormatFocus" :format="textFormat"
                @blur="onTextFormatBlur"></el-date-picker>
            <el-button @click="submitTest">提交</el-button>
        </div>
    </div>
</template>

<script>



export default {
    name: '',
    components: {},
    props: [],
    data() {
        return {
            startTime: null,
            textFormat: "yyyyMMdd",
        }
    },
    computed: {

    },
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
        submitTest() {
            console.log(this.startTime);
        },
        onTextFormatBlur(args) {
            this.textFormat = 'yyyy-MM-dd'
        },
        onTextFormatFocus(args) {
            this.textFormat = 'yyyyMMdd'
        }
    }
}
</script>
<style  scoped>
.desc {
    border: 1px solid red;
    padding: 10px 40px 80px 120px; /* 上 - 右 - 下 - 左 */
    margin: 10px 20px 50px; /* 上 - 中(左右) - 下*/
}
</style>