import { add, subtract } from '../utils/math';

describe('Math Utility Functions', () => {
  test('add() should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5); // Vérifie si 2 + 3 = 5
    expect(add(-1, -1)).toBe(-2); // Vérifie les nombres négatifs
  });

  test('subtract() should correctly subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2); // Vérifie si 5 - 3 = 2
    expect(subtract(0, 3)).toBe(-3); // Vérifie le résultat négatif
  });
});
