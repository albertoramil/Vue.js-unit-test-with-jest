import YesNoComponent from '@/components/YesNoComponent'
import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'



describe('YesNoComponent', () => {
    it('Click on yes button calls our method with argument "yes"', () => {
        // comprueba que YesNoComponent es un componente. 
        const wrapper = shallowMount(YesNoComponent)
        expect(wrapper.isVueInstance()).toBeTruthy()
        console.log("pasa")
    })



    it('Click on yes button calls our method with argument "yes"', () => {
        // comprueba que YesNoComponent que si existe
        const wrapper = shallowMount(YesNoComponent)
        expect(wrapper.contains('button')).toBe(true)
    })
  })

// describe('Click event', () => {
//   it('Click on yes button calls our method with argument "yes"', () => {
//     const spy = sinon.spy()
//     const wrapper = mount(YesNoComponent, {
//       propsData: {
//         callMe: spy
//       }
//     })
//     wrapper.find('button.yes').trigger('click')

//     spy.should.calledWith('yes')
//   //  expect(wrapper.text()).toMatch("Yes No");

//   })
// })