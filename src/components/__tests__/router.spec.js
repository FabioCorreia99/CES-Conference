import { describe, it, expect, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { useUsersStore } from "@/stores/users";
import router from "@/router";

describe("Route Guards", () => {
  let store;

    //  Garante que cada teste começa com um estado "limpo"
  beforeEach(async () => {
    // Criar uma instância de Pinia de teste
    const pinia = createTestingPinia({
      createSpy: vi.fn, // Permite espionar chamadas às ações do store
    });
    store = useUsersStore(pinia);

    router.replace("/"); // Reseta o estado do router antes de cada teste
    await router.isReady();
  });

  it("should redirect to /login if the user is not authenticated", async () => {
    store.authentication = false; // Simula user não autenticado

    await router.push("/profile/1");
    await router.isReady();

    expect(router.currentRoute.value.fullPath).toBe("/login?from=/profile/1");
  });

  it("should allow access to protected route when authenticated", async () => {
    store.authentication = true; // Simula user autenticado

    await router.push("/profile/1");
    await router.isReady();

    expect(router.currentRoute.value.fullPath).toBe("/profile/1");
  });

  it("should allow access to public routes without authentication", async () => {
    await router.push("/about");
    await router.isReady();

    expect(router.currentRoute.value.fullPath).toBe("/about");
  });
});
