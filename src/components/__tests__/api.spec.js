import { describe, it, expect } from 'vitest';

// URL base da API
const BASE_API = 'https://dummyjson.com';

// Função para chamar a API
async function fetchUsers(limit = 10) {
  const response = await fetch(`${BASE_API}/users?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data;
}

// Testes para a API
describe('DummyJSON API', () => {
  it('should fetch a limited number of users', async () => {
    const limit = 5;
    const data = await fetchUsers(limit);

    // Verifica se o retorno contém os campos esperados
    expect(data).toHaveProperty('users');
    expect(data.users).toBeInstanceOf(Array);
    expect(data.users.length).toBeLessThanOrEqual(limit);

    // Verifica um campo específico em um dos usuários
    const user = data.users[0];
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('firstName');
    expect(user).toHaveProperty('lastName');
  });

  it('should throw an error for invalid endpoint', async () => {
    const invalidFetch = async () => {
      const response = await fetch(`${BASE_API}/invalid-endpoint`);
      if (!response.ok) {
        throw new Error('Invalid endpoint');
      }
    };

    await expect(invalidFetch()).rejects.toThrow('Invalid endpoint');
  });
});