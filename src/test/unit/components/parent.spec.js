/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";

describe("Ejercicio 3: Comprobando que el componente hijo mande un nombre al componente padre", () => {
  test("Mandaremos un mensaje al componente padre", async () => {

    const wrapper = mount(Parent);
    const child = wrapper.findComponent(Child);

    await child.setData({ name: "Mi nombre es Jazmín" });
    await child.find("button").trigger("click");

    expect(wrapper.text()).toContain("El nombre ingresado en el componente hijo es Mi nombre es Jazmín");
  });
});
