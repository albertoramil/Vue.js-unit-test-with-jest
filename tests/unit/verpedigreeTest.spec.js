import { createLocalVue, mount } from '@vue/test-utils'
import verpedigree from '@/components/verpedigree.vue'
import vuetify from "vuetify"

describe('verpedigree', () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(vuetify)

    wrapper = mount(verpedigree, {
      localVue,
    })
  })

  it('Find input- type text ', () => {
    expect(wrapper.contains('[data-test="entradaperro"]')).toBe(true)
  })


  it('has a button', () => {
    expect(wrapper.contains('[data-test="handleClickButton"]')).toBe(true)
  })


  it('Enter text and check the value of inputText', () => {
    var textInput = wrapper.find('[data-test="entradaperro"]')
    textInput.setValue('cora');
    expect(wrapper.vm.perro).toBe('cora')
  })


  it('esperamos un 0 al no ser un caso del case', () => {
    var textInput = wrapper.find('[data-test="entradaperro"]')
    textInput.setValue('coraaaa');
    const button = wrapper.find('[data-test="handleClickButton"]')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(0)
  })


  it('esperamos la url del perro introducido', () => {
    var textInput = wrapper.find('[data-test="entradaperro"]')
    textInput.setValue('cora');
    const button = wrapper.find('[data-test="handleClickButton"]')
    button.trigger('click')
    expect(wrapper.vm.url).toBe("https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=11475&fn=pedigree&rq=CORA")
  })

});
