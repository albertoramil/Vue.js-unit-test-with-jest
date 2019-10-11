import { createLocalVue, mount } from '@vue/test-utils'
import numero from '@/components/numero.vue'

import vuetify from "vuetify"

describe('numero', () => {
  let wrapper;
  let wrapper1;

  let numeroEntrada;
  beforeEach(()=>{
    const localVue = createLocalVue()
    localVue.use(vuetify)

    wrapper = mount(numero, {
      localVue, propsData: {
        numeroEntrada
      }
    })

    wrapper1 = mount(numero, {
        localVue, propsData: {
          numeroEntrada:9
        }
      })

  })

  

  it('Find input- type text ', ()=>{
    expect(wrapper.contains('[data-test="numeroEntradaClickButton"]')).toBe(true)
  })


  it('Nº = 9 y debe guardarse wrapper1', ()=>{

    
    expect(wrapper1.vm.numeroEntrada).toBe(9)

})

  


});
