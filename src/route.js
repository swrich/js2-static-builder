const NODE_ENV = process.env.NODE_ENV //环境变量

//前台页面（没有directory属性）
const front = []

const template_1 = [{
	name: 'layout',
	title: '模板'
}, {
	name: 'index',
	title: '首页'
}, {
	name: 'products',
	title: '产品中心'
}, {
	name: 'posts',
	title: '新闻中心'
}, {
	name: 'post',
	title: '详情页'
}, {
	name: 'guestbook',
	title: '留言页'
}, {
	name: 'search',
	title: '搜索页'
}, {
	name: 'tag',
	title: '标签页'
}]

const template_2 = [{
	name: 'layout',
	title: '模板'
}, {
	name: 'index',
	title: '首页'
}, {
	name: 'posts',
	title: '文章列表'
}, {
	name: 'post',
	title: '详情页'
}, {
	name: 'guestbook',
	title: '留言页'
}, {
	name: 'search',
	title: '搜索页'
}, {
	name: 'tag',
	title: '标签页'
}]

//模版页面（示例为js2system模板页面）
const templates = [
	template_1,
	template_2
]

//组件演示页面
const demo = [{
		name: 'index',
		title: '组件示例',
	}, {
		name: 'iconfont',
		title: '字体图标示例',
	}, {
		name: 'sprite',
		title: '精灵图示例',
	},
	//基本页面组件
	{
		name: 'menu',
		title: '菜单示例',
	}, {
		name: 'banner',
		title: '横幅/轮播图示例',
	}, {
		name: 'cover',
		title: '单页顶部横幅示例',
	}, {
		name: 'crumbs',
		title: '面包屑导航示例',
	}, {
		name: 'friend-link',
		title: '友情链接示例',
	}, {
		name: 'pagination',
		title: '分页示例',
	}, {
		name: 'bottom',
		title: '底部示例',
	}, {
		name: 'post-list',
		title: '内容列表示例',
	}, {
		name: 'product-list',
		title: '产品列表示例',
	}, {
		name: 'post',
		title: '内容页示例',
	}, {
		name: 'tag',
		title: '标签示例',
	}, {
		name: 'sidebar',
		title: '边栏示例',
	}, {
		name: 'sidebar-tool',
		title: '边栏工具示例',
	},
	//商务网站组件
	{
		name: 'about',
		title: '关于我们示例',
	}, {
		name: 'culture',
		title: '公司文化示例',
	},
	{
		name: 'service',
		title: '公司业务示例',
	}, {
		name: 'client',
		title: '合作客户示例',
	},
	//其他组件
	{
		name: 'guestbook-form',
		title: '留言表单示例',
	},
	{
		name: 'login-register-form',
		title: '登录注册表单示例',
	}
]


//二级页面（directory属性为打包后的目录，没有该属性默认打包在根目录）
demo.forEach(item => {
	item.directory = 'demo' //目录名称需要跟实际项目目录名称一致（src/view/demo/）
})

const route = [...front]

//模板目录
templates.forEach((items, index) => {
	items.forEach(item => {
		item.directory = 'template-' + (index + 1)
	})
	route.push(...items)
})

if (NODE_ENV != 'production') {
	route.push(...demo)
}

module.exports = {
	route
}