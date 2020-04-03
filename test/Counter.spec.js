import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Counter from '../src/Counter.vue';
chai.use(sinonChai);

describe('Counter.vue', () => {
    it('increments count when button is clicked', async () => {
        const wrapper = shallowMount(Counter);
        wrapper.find('button').trigger('click');
        await Vue.nextTick();
        expect(wrapper.find('label').text()).to.equal('1');
    })
});