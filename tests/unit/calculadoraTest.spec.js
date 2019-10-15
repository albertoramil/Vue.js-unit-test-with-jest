import { createLocalVue, mount } from '@vue/test-utils'
import numero from '@/components/numero.vue'
import Vuex from 'vuex'

import vuetify from "vuetify"

describe('numero', () => {
    let wrapper;
    let wrapper1;
    let wrapperVuex;

    let numeroEntrada;
    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(vuetify)

        const localVuex = createLocalVue()
        localVuex.use(Vuex)

        store = new Vuex.Store({
            getprimera
          })


        wrapper = mount(numero, {
            localVue, propsData: {
                numeroEntrada
            }
        })

        wrapper1 = mount(numero, {
            localVue, propsData: {
                numeroEntrada: 9
            }
        })


        wrapperVuex = mount(numero, {
            localVuex,store, propsData: {
                numeroEntrada: 9
            }
        })


    })





    it('Nº = 9 y debe mostrar el 9 wrapper1', () => {
        expect(wrapper1.vm.numeroEntrada).toBe(9)
        const button = wrapper1.find('[data-test="numeroEntradaClickButton"]')
        button.trigger('click')
        expect(wrapper1.vm.numeroEntrada).toBe(9)

    })


    it('Nº = 9 y debe guardarse wrapperVuex', () => {
       // expect(wrapperVuex.vm.numeroEntrada).toBe(9)
        //const button = wrapperVuex.find('[data-test="numeroEntradaClickButton"]')
        //button.trigger('click')
        expect(this.$store.getters.getprimera).toBe(9)
    })




});
