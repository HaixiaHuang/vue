<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item label="保证金编号：">
				    <el-input v-model="formInline.user" placeholder="请输入保证金编号"></el-input>
				</el-form-item>
				<el-form-item label="用户昵称：">
				    <el-input v-model="formInline.user" placeholder="请输入用户昵称"></el-input>
				</el-form-item>
				<el-form-item label="时间段：">
					<div class="block">
					    <el-date-picker
					      v-model="value7"
					      type="daterange"
					      align="right"
					      placeholder="选择日期范围"
					      :picker-options="pickerOptions2">
					    </el-date-picker>
					 </div>
				</el-form-item>
				<el-form-item label="状态：">
				   <el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" icon="search">搜索</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;font-size:12px;">

			<el-form :inline="true" :model="filters">
				<h4>操作提示：</h4>
					<p>显示编号、昵称、拍品、金额、状态、时间等信息</p>
					<p>可根据保证金编号、昵称、时间区查询</p>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="tableData" style="width: 100%">
	       <el-table-column prop="order" label="编号" width="150">
	       </el-table-column>
	       <el-table-column prop="paipin" label="昵称" width="150">
	       </el-table-column>
	       <el-table-column prop="def" label="拍品">
	       </el-table-column>
	       <el-table-column prop="seller" label="金额">
	       </el-table-column>
	       <el-table-column prop="buyder" label="状态-方式">
	       </el-table-column>
	       <el-table-column prop="orderTotal" label="时间">
	       </el-table-column>
	       <el-table-column prop="show" label="状态-是/否">
	       </el-table-column>
	       <el-table-column prop="recommendShow" label="退还时间">
	       </el-table-column>
	    </el-table>

		<!--工具条-->
		

		<!--编辑界面-->
		
		<!--新增界面-->
		
	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
				formInline: {
					name: ''
				},
				tableData:[
				{
					order: '20708175675751',
					paipin:'小叶',
					def:'花瓶',
					seller:'100',
					buyder:'已支付',
					orderTotal:'2017-08-11 19:26',
					show:'否',
					recommendShow:'2017-08-11 23:14:35',
					status:'未支付'
				},
				{
					order: '20708175675751',
					paipin:'小叶叶',
					def:'字画',
					seller:'200',
					buyder:'已退还',
					orderTotal:'2017-08-11 19:26',
					show:'否',
					recommendShow:'2017-08-11 23:14:35',
					status:'未支付'
				},

				],
				   options: [{
			          value: '选项1',
			          label: '未支付'
			        }, {
			          value: '选项2',
			          label: '已支付'
			        }],
			        pickerOptions2: {
			          shortcuts: [{
			            text: '最近一周',
			            onClick(picker) {
			              const end = new Date();
			              const start = new Date();
			              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
			              picker.$emit('pick', [start, end]);
			            }
			          }, {
			            text: '最近一个月',
			            onClick(picker) {
			              const end = new Date();
			              const start = new Date();
			              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
			              picker.$emit('pick', [start, end]);
			            }
			          }, {
			            text: '最近三个月',
			            onClick(picker) {
			              const end = new Date();
			              const start = new Date();
			              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
			              picker.$emit('pick', [start, end]);
			            }
			          }]
			        },
							}
						},

		methods: {
			
		},
		mounted() {
			this.getUsers();
		}
	}

</script>
<style scoped>

</style>