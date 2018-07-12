import Vue from 'vue'
const  DemoSelec = Vue.extend(require('./demoSelec').default)

const DemoSec = (content) => {
  const DemoInstance = new DemoSelec({
    data: {
      title: content?content:'默认title'
    },
    methods: {
      show() {
        console.log(this.radio)
      }
    }
  })

  DemoInstance.vm= DemoInstance.$mount()
  DemoInstance.vm.visible= true
  DemoInstance.dom= DemoInstance.vm.$el
  document.body.appendChild(DemoInstance.dom)
  return DemoInstance.vm

}

export default {
  install: Vue => {
    Vue.prototype.$demosle = DemoSec
  }
}
