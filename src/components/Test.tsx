import { defineComponent, createVNode, render } from 'vue';
//和vue2类似 创建个组件，vue2 用 vue.extend和vue.component
//vue3用jsx写 用createVnode和render写虚拟dom和 渲染(patch生成真实dom)
const LoadingDemo = defineComponent({
  name: "LoadingDemo",
  props: {
    type: String,
    text: String
  },
  setup(props) {
    console.log(props, 'props')
    const render = () => {
      return <div>Loading...</div>
    }
    return render
  }
})
type message = {
  types: String,
  text: String
}
/**
 * 
 * @param param0 类型和文字
 * @param ref    父元素的dom。还可以有第三个参数 就是挂载处
 */
export function Message({ types, text }: message, ref: string): void {
  const messageVNode = createVNode(LoadingDemo, { types, text })
  const divContainer = document.createElement(ref)
  // 添加到容器中
  render(messageVNode, divContainer)  //将虚拟的dom变为真正的dom
  document.body.appendChild(divContainer)
  setTimeout(() => {
    render(null, divContainer)
    document.body.removeChild(divContainer)
  }, 1500)
}