<template>
    <div class="manage">
        <el-dialog title="用户表单" :visible.sync="dialogVisible" width="40%">
            <el-form ref="form" :model="form" label-width="100px" :inline="true" :rules="rules">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-select v-model="form.sex" placeholder="性别">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="日期" prop="birth">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.birth"
                        style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="地址" prop="addr">
                    <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="dialogVisible = true">+新增</el-button>
            <div class="block">
                <el-table height="90%" :data="tableData" style="width: 100%;">
                    <el-table-column prop="name" label="姓名">
                    </el-table-column>
                    <el-table-column prop="age" label="年龄">
                    </el-table-column>
                    <el-table-column prop="sex" label="性别">
                        <!-- <template slot-scope="scope">
                            <span>{{ scope.row.sex === 1 ? '男' : '女' }}</span>
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="birth" label="出生日期">
                    </el-table-column>
                    <el-table-column prop="addr" label="地址">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click='hadleDelete(scope.row)'>删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div>
                    <el-pagination layout="prev, pager, next" :total='total'></el-pagination>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { getUserData } from '../api'
// import {queryAll} from '../api/connetDataBase'
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                age: '',
                sex: '',
                birth: '',
                addr: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                age: [
                    { required: true, message: '请输入年龄', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '请选择性别' }
                ],
                birth: [
                    { required: true, message: '请选择日期' }
                ],
                addr: [
                    { required: true, message: '请输入地址', trigger: 'blur' }
                ]

            },
            tableData: [],
            total : 0
        }
    },
    methods: {
        submit() {
            this.$refs.form.validate((valid) => {
                // console.log(valid);
                // 对表单数据进行校验
                if (valid) {
                    console.log(this.form, 'form');
                    this.$refs.form.resetFields();
                    this.dialogVisible = false
                }
            })
        },
        closeDialog() {
            console.log(this.$refs.form, 'closeDialog');
            this.$refs.form.resetFields();
            this.dialogVisible = false;
        },
        cancel() {
            this.closeDialog();
        },
        handleEdit(val) {
            console.log('handleEdit', val);
        },
        hadleDelete(val) {
            console.log('hadleDelete', val);
        }
    },
    mounted() {
        getUserData().then(({ data }) => {
            const { user } = data
            // console.log('userData', user);
            this.tableData = user
            // console.log('this.tableData', this.tableData);
            this.total = user.length || 0
        })
    }

}
</script>
<style lang="less" scoped>
.manage,
.manage-header,
.block {
    height: 100%;
}
</style>