import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ChessCell from '@/components/ChessBoard/ChessCell/ChessCell.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ChessCell.vue', () => {
    let position;
    let actions;
    let store;

    beforeEach(() => {
        position = Math.random() * (64 - 1) + 1; // Random position of chess cell

        actions = {
            select: jest.fn(),
        };

        store = new Vuex.Store({
            actions,
        });
    });

	it('render cell with position', () => {
        const wrapper = shallowMount(ChessCell, { store, localVue });
        wrapper.setProps({ position });
        
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes('chess-cell')).toBe(true);
        expect(wrapper.vm.selected).toBe(false);
    });

    it('cell click event', () => {
        const wrapper = shallowMount(ChessCell, { store, localVue });
        wrapper.setProps({ position });

        wrapper.trigger('click');
        expect(wrapper.vm.selected).toBe(true);
        expect(actions.select).toHaveBeenCalled();
        expect(wrapper.classes('chess-cell_selected')).toBe(true);
    });
});
