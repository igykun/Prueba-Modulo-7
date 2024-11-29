/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue';

describe("AboutView", () => {
  test("Ejercicio 2: comprobando la existencia de AboutView.vue", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/about",
          name: "about",
          component: AboutView,
        },
      ],
    });

    router.push("/about");
    await router.isReady();

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});
