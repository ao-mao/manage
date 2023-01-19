<template>
    <div class="manage">
        <el-dialog title="用户表单" :visible.sync="dialogVisible" width="40%">
            <el-form :model="form" label-width="100px" :inline="true">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-select v-model="form.region" placeholder="性别">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="日期" prop="birth">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="地址" prop="addr">
                    <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="enter">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="dialogVisible = true">+新增</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            form:{
                name:'',
                age:'',
                sex:'',
                birth:'',
                addr : ''
            }
        };
    },
    methods : {
        enter(){
            console.log('form',form);
        }
    },

}
</script>