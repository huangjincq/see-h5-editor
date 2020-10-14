/**
 * 公共方法
 * */
import plugins from '@/plugins'

/*
* 获取组件的props
* @params elName
* */
export function getComponentProps (elName) {
  let elComponentData
  for (let key in plugins) {
    if (key.toLowerCase() === elName.toLowerCase()) {
      elComponentData = plugins[key];
      break;
    }
  }

  if (!elComponentData) return {}
  let props = {}
  for (let key in elComponentData.props) {
    const defaultValue = [Object, Array].includes(elComponentData.props[key].type) ? elComponentData.props[key].default() : elComponentData.props[key].default
    props[key] = elComponentData.props[key].label ? {
      value: defaultValue,
      label: elComponentData.props[key].label,
      tip: elComponentData.props[key].tip,
      group: elComponentData.props[key].group,
      options: elComponentData.props[key].options,
      urlParams: elComponentData.props[key].urlParams,
      placeholder: elComponentData.props[key].placeholder
    } : defaultValue
  }
  return props
}
