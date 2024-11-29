/* eslint-disable no-undef */
import store from "@/store";

describe("Vuex Store", () => {
  test("Comprobando que comienze con el contador en 0", () => {
    expect(store.state.number).toBe(0);
  });
  test("Comprobando que aumente el contador en 1", () => {
    store.commit("numberUp");
    expect(store.state.number).toBe(1);
  });
  test("Comprobando que reduzca el contador en 1", () => {
    store.commit("numberDown");
    expect(store.state.number).toBe(0);
  });
});
