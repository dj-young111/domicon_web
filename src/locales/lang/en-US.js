import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU
}

const locale = {
  'message': '-',
  'home.tabs.home': 'Home',
  'home.tabs.mine': 'mine',
  'home.tabs.NodeCampaign': 'Node',
  
}

export default {
  ...components,
  ...locale
}
