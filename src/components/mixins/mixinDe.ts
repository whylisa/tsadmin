import { Vue, Component } from 'vue-property-decorator'
/**
 * Mixin demo
 *
 * @export
 * @class demoMixin
 * @extends {Vue}
 */
@Component({})
export default class demoMixin extends Vue {
  mixinText: string = '我是混进来的'
  mixinOtherComponent: string = "我是外部mixin"
  mixinFunc (): void {
    this.mixinText = "我爱你中国"
  }
	 mixinOtherComponentFunc (): void {
    this.mixinOtherComponent = "我是外部方法优先使用内部"
  }
}