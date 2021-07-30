<template>
  <div class="hello">
    <div :style="{color:childcolor}" >{{ msg }}</div>
    <button @click="clickchild">按钮</button>
    <el-table

            
            :data="dataList"
            style="width: 100%;"
            row-key="id"
            border
            default-expand-all>
            <el-table-column
                prop="developName"
                label="发展人"
                sortable
                width="180">
            </el-table-column>
            <el-table-column
                prop="indexValue"
                label="发展量"
                sortable
                width="180">
            </el-table-column>
            <el-table-column
                prop="indexMonthLj"
                label="当月累计(万)">
            </el-table-column>
              <el-table-column
                prop="indexYearLj"
                label="当年累计(万)">
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:"我是子组件里面给父亲的值"
    };
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
     childcolor: {
      type: String,
      default: "",
    },
    dataList: {
      type: Array,
      default: [],
    },
  },
  created() {
    
  },
  mounted() {

  },
  methods: {
  clickchild(){
    this.$emit("childclick1",this.list)
  }
  },
};
</script>
