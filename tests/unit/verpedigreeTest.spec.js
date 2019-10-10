import { createLocalVue, mount } from '@vue/test-utils'
import verpedigree from '@/components/verpedigree.vue'
import vuetify from "vuetify"

describe('verpedigree', () => {
  let wrapper;
  beforeEach(()=>{
    const localVue = createLocalVue()
    localVue.use(vuetify)

    wrapper = mount(verpedigree, {
      localVue,
    })
  })

  it('Find input- type text ', ()=>{
    expect(wrapper.contains('[data-test="zipCodeText"]')).toBe(true)
  })
  it('Find input- type text ', ()=>{
    expect(wrapper.contains('[data-test="entradaperro"]')).toBe(true)
  })


  it('has a button', ()=>{
    expect(wrapper.contains('[data-test="saveButton"]')).toBe(true)
  })

  it('has a button', ()=>{
    expect(wrapper.contains('[data-test="handleClickButton"]')).toBe(true)
  })


  

  it('Enter text and check the value of inputText', ()=>{
    var textInput = wrapper.find('[data-test="zipCodeText"]')
    textInput.setValue('84102');
    expect(wrapper.vm.inputText).toBe('84102')
  })


  it('click enter button and clear input', ()=>{
    wrapper.find('[data-test="saveButton"]').trigger("click");
    var textInput = wrapper.find('[data-test="zipCodeText"]')
    expect(textInput.text()).toMatch('')
    expect(wrapper.vm.inputText).toBe('')
  })


  it('Check emitted "save" event', ()=>{
    wrapper.vm.$emit('save', "84102");
    expect(wrapper.emitted().save).toBeTruthy()
  })

});
