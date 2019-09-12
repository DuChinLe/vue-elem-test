<!--
 * @Description: 确认申领，填写信息
 * @Author: Duchin/梁达钦
 * @Date: 2019-09-01 23:10:28
 * @LastEditTime: 2019-09-11 11:09:50
 * @LastEditors: Duchin/梁达钦
 -->
<template>
  <el-dialog
  :close-on-press-escape="false"
  :close-on-click-modal="false"
  width="55%" 
  :show-close="false" 
  class="title-link"  
  :visible.sync="visible">
  <div slot="title"  >
    <h3 class="dialog-title">
      {{ dialogInfo.title }}</h3>
  </div>
  <el-form
    class="dialog-form"
    ref="form" 
    :model="form" 
    :rules="rules" 
    label-width="100"
    >
    <el-form-item v-if="verify.textarea" class="textarea-box" :label="dialogInfo.label" prop="additionInfo">
      <el-input 
        type="textarea" 
        rows="8" 
        v-model="form.additionInfo"
        maxlength="500"
        minlength="100"
        style="vertical-align: middle； line-height: 100%;" 
        :placeholder="dialogInfo.placeholder">
      </el-input>
    </el-form-item>
    <el-form-item v-else class="textarea-box" :label="dialogInfo.label">
      <el-input 
        type="textarea" 
        rows="8" 
        v-model="form.additionInfo"
        maxlength="500"
        minlength="100"
        style="vertical-align: middle； line-height: 100%;" 
        :placeholder="dialogInfo.placeholder">
      </el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="submit-box" >
    <el-button  @click="isOpenVisible" class="submit-box-item-left">取 消</el-button>
    <el-button type="primary" @click="hanldSubmitInfo(dialogInfo)" class="submit-box-item-right">确 定</el-button>
  </div>
</el-dialog>
</template>

<script>
import {
    province,
    city
    } from '@/utils/citylist'
import { watch } from 'fs';
    
export default {
  name: 'DemandDetailsDialog',
  props: {
    visible:{
      type: Boolean,
      default: false
    },
    // applyDemandItem:{
    //   type: Array,
    //   default: ()=>{
    //     return []
    //   }
    // },
    dialogInfo:{
      type: Object,
      default: ()=>{
        return {
          infoType: Number,
          title: '',
          placeholder: '',
          label: ''
        }
      }
    },
    verify:{
      type: Object,
      default: ()=>{
        return {
          textarea: true,
        }
      }
    }
  },
  data(){
    return {
      form: {
        additionInfo: ''
      },
      rules: {
        additionInfo: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
      },
      dialogInfoConten: {}
    }
  },
  methods: {
    isOpenVisible(){
      this.$emit('isVisible',this.visible)
      this.form.additionInfo = ''
    },
    hanldSubmitInfo(dialogInfo){
      if(this.form.additionInfo == ''){
        this.$message.error('内容不能为空');
        return 
      }
      this.$emit('hanldSubmit',{
          form: this.form,
          dialogInfo:dialogInfo,
        })
    }
  },
  watch: {
  dialogInfo (newVal, oldVal){
    console.log(newVal)
    this.dialogInfoConten = newVal
  }
  }
}
</script>

<style lang="scss" scoped>
      .dialog-form{
        padding: 0 20px;
      }
      .dialog-title{
        margin: 0;
        padding-left: 10px;
      }
</style>