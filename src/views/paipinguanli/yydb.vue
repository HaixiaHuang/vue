<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				
				<el-form-item label="宝贝编号：">
				    <el-input v-model="formInline.user" placeholder="请输入拍品编号"></el-input>
				</el-form-item>
			
				<el-form-item label="卖家：">
				    <el-input v-model="formInline.user" placeholder="请输入卖家"></el-input>
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

				<el-form-item label="审核：">
				   <el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in optionss"
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
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">

			<el-form :inline="true" :model="filters">
				<h4>操作提示：</h4>
					<p>列表显示产品库拍品编号、拍品描述、库存、卖家等相关信息</p>
					<p>可以查看拍品详情</p>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="tableData" style="width: 100%">
	       <el-table-column prop="order" label="宝贝编号" width="150">
	       </el-table-column>
	       <el-table-column prop="paipin" label="众筹类型" width="150">
	       </el-table-column>
	       <el-table-column prop="def" label="添加时间">
	       </el-table-column>
	       <el-table-column prop="seller" label="卖家">
	       </el-table-column>
	       <el-table-column prop="buyder" label="当前累计金额">
	       </el-table-column>
	       <el-table-column prop="orderTotal" label="当前累计人数">
	       </el-table-column>
	       <el-table-column prop="show" label="发布">
	       </el-table-column>
	       <el-table-column prop="recommendShow" label="审核">
	       </el-table-column>
	       <el-table-column prop="recommendShow" label="状态">
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
					def:'恭喜发财',
					seller:'小叶',
					buyder:'hero',
					orderTotal:'500元',
					show:'否',
					recommendShow:'否',
					status:'未支付'
				}
				],
					options: [{
			          value: '选项1',
			          label: '马上开奖'
			        }, {
			          value: '选项2',
			          label: '已开奖'
			        },
			        {
			          value: '选项2',
			          label: '未结束'
			        }

			        ],optionss: [{
			          value: '选项1',
			          label: '已审核'
			        }, {
			          value: '选项2',
			          label: '未审核'
			        }
			        ],


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