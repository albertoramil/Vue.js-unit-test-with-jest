// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Counter from '@/components/counter'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('existe el boton de incrementar', () => {
    expect(wrapper.contains('buttonIncrement')).toBe(true)
  })


 // it's also easy to check for the existence of elements
 it('existe el boton de decrementar', () => {
  expect(wrapper.contains('buttonDecrement')).toBe(true)
})

  it('añadi 1', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('buttonIncrement')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })


  it('resta 1', () => {
    expect(wrapper.vm.count).toBe(1)
    const button = wrapper.find('buttonDecrement')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(0)
  })



  it('lanza el mensaje', () => {


    const button = wrapper.find('buttonResponder')
    button.trigger('click')
    expect(wrapper.vm.respuesta).toBe("tonto")

  })


})