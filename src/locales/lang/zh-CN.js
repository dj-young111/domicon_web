import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

const locale = {
  'message': '-',
  'home.tabs.home': '主页',
  'home.tabs.mine': '我的',
  'home.tabs.NodeCampaign': '节点竞选',
  
}

export default {
  ...components,
  ...locale
}
