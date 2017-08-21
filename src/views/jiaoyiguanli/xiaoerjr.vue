<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item label="订单编号：">
				    <el-input v-model="formInline.user" placeholder="请输入订单编号"></el-input>
				</el-form-item>
				<el-form-item label="拍品编号：">
				    <el-input v-model="formInline.user" placeholder="请输入拍品编号"></el-input>
				</el-form-item>
				<el-form-item label="拍品描述：">
				    <el-input v-model="formInline.user" placeholder="请输入拍品描述"></el-input>
				</el-form-item>
				<el-form-item label="卖家：">
				    <el-input v-model="formInline.user" placeholder="请输入卖家"></el-input>
				</el-form-item>
				<el-form-item label="买家：">
				    <el-input v-model="formInline.user" placeholder="请输入买家"></el-input>
				</el-form-item>
				
				<el-form-item>
					<el-button type="primary" icon="search">搜索</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;" font-size="12px;">

			<el-form :inline="true" :model="filters">
				<h4>操作提示：</h4>
					<p>列表显示订单编号、申请时间、状态、操作的信息</p>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="tableData" style="width: 100%">
	       <el-table-column prop="order" label="订单编号">
	       </el-table-column>
	       <el-table-column prop="paipin" label="申请时间">
	       </el-table-column>
	       <el-table-column prop="def" label="状态">
	       </el-table-column>
	       <el-table-column prop="seller" label="操作">
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
					paipin:'2017-08-21',
					def:'未处理',
					seller:'查看详情',
				},
				{
					order: '20708175675751',
					paipin:'2017-08-21',
					def:'已处理',
					seller:'查看详情',
				},
				]

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