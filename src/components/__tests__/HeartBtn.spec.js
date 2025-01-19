// tests/unit/HeartBtn.spec.js
import { mount } from '@vue/test-utils';
import HeartBtn from '@/components/HeartBtn.vue';

describe('HeartBtn.vue', () => {
  it('renders the correct default icon', () => {
    const wrapper = mount(HeartBtn, {
      props: { isActive: false },
    });
    expect(wrapper.find('v-icon').text()).toBe('mdi-heart-plus-outline');
  });

  it('toggles the icon on click', async () => {
    const wrapper = mount(HeartBtn, {
      props: { isActive: false },
    });

    // Simula o clique
    await wrapper.find('v-btn').trigger('click');

    // Verifica se o ícone foi alterado
    expect(wrapper.find('v-icon').text()).toBe('mdi-heart');
  });
});