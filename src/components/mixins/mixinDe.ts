import { Vue, Component } from 'vue-property-decorator'
/**
 * Mixin demo
 *
 * @export
 * @class TestMixin
 * @extends {Vue}
 */
@Component({})
export default class demoMixin extends Vue {
  mixinText: string = '我是混进来的'

  mixinFunc (): void {
    // this.mixinText = "我爱你中国"
  }
}