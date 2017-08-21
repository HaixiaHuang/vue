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
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">

			<el-form :inline="true" :model="filters">
				<h4>操作提示：</h4>
					<p>显示订单编号、拍品描述、卖家、买家、订单总额、订单状态等信息</p>
					<p>点击查看详细订单信息</p>
					<p>可下载TXT、Excel文件</p>
					<p>可选择下载全部文档、或根据查询结果下载文档</p>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="tableData" style="width: 100%">
	       <el-table-column prop="order" label="订单号" width="150">
	       </el-table-column>
	       <el-table-column prop="paipin" label="拍品编号" width="150">
	       </el-table-column>
	       <el-table-column prop="def" label="拍品描述">
	       </el-table-column>
	       <el-table-column prop="seller" label="卖家">
	       </el-table-column>
	       <el-table-column prop="buyder" label="买家">
	       </el-table-column>
	       <el-table-column prop="orderTotal" label="订单总额">
	       </el-table-column>
	       <el-table-column prop="show" label="晒图">
	       </el-table-column>
	       <el-table-column prop="recommendShow" label="推荐晒单">
	       </el-table-column>
	       <el-table-column prop="status" label="订单状态" >
	       </el-table-column>
	       <el-table-column label="操作" width="150">
		      <template scope="scope">
		        <el-button
		          size="small"
		          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
		        <el-button
		          size="small"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
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
					paipin:'tpt201708171820',
					def:'恭喜发财，红包拿来',
					seller:'小叶',
					buyder:'hero',
					orderTotal:'500元',
					show:'否',
					recommendShow:'否',
					status:'未支付'
				},
				{
					order: '20708175675751',
					paipin:'tpt201708171820',
					def:'恭喜发财，红包拿来',
					seller:'小叶',
					buyder:'hero',
					orderTotal:'500元',
					show:'否',
					recommendShow:'否',
					status:'未支付'
				},
				{
					order: '20708175675751',
					paipin:'tpt201708171820',
					def:'恭喜发财，红包拿来',
					seller:'小叶',
					buyder:'hero',
					orderTotal:'500元',
					show:'否',
					recommendShow:'否',
					status:'未支付'
				},
				{
					order: '20708175675751',
					paipin:'tpt201708171820',
					def:'恭喜发财，红包拿来',
					seller:'小叶',
					buyder:'hero',
					orderTotal:'500元',
					show:'否',
					recommendShow:'否',
					status:'未支付'
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