//tests/ ZipCodeInput.spec.js

import { createLocalVue, mount } from '@vue/test-utils'
import verpedigree from '@/components/verpedigree.vue'

describe('ZipCodeInput', () => {

   const wrapper = mount(verpedigree    )
  

  it('Find input- type text ', ()=>{
    expect(wrapper.contains('[        data-test="entradaPerro"  ]')).toBe(true)
  })
  it('has a button', ()=>{
    expect(wrapper.contains('[data-test="handleClickButton"]')).toBe(true)

  })
})

