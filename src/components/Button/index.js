import * as Btns from './MyButton'
const components = { ...Btns }

const install = function(Vue,options) {
    Object.keys(components).forEach( key => {
        Vue.component(components[key].name,components[key])
    })
}

export default {
    install
}
