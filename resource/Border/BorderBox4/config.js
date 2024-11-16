import { ComponentGroup, CustomComponent, FormType } from '@open-data-v/base'

export const componentName = 'BorderBox4'
class BorderBoxComponent extends CustomComponent {
  constructor(id, name) {
    super({
      component: componentName,
      group: ComponentGroup.BORDER,
      name: name ? name : '4#边框',
      id,
      width: 200,
      height: 200
    })
  }
  _prop = [
    {
      label: '基础配置',
      prop: 'base',
      children: [
        {
          prop: 'colorLeft',
          label: '边框颜色1',
          type: FormType.COLOR,
          props: {
            defaultValue: '#11eefd'
          }
        },
        {
          prop: 'colorRight',
          label: '边框颜色2',
          type: FormType.COLOR,
          props: {
            defaultValue: '#0078d2'
          }
        },
        {
          prop: 'backgroundColor',
          label: '底色',
          type: FormType.COLOR,
          props: {
            defaultValue: '#00000000'
          }
        },
        {
          prop: 'reverse',
          label: '反转',
          type: FormType.SWITCH,
          props: {
            defaultValue: false
          }
        },
        {
          prop: 'dur',
          label: '时间',
          type: FormType.NUMBER,
          props: {
            defaultValue: 3
          }
        }
      ]
    }
  ]
  _style = []
}
export default BorderBoxComponent
//# sourceMappingURL=config.js.map
