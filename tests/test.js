// tests/test.js

// Fonction d'addition à tester
function addition(a, b) {
    return a + b;
}
  
  // Test 1
  test('additionne 2 + 3', () => {
    expect(addition(2, 3)).toBe(5);
  });
  
  // Test 2
  test('additionne -2 + -3', () => {
    expect(addition(-2, -3)).toBe(-5);
  });
  
  // Test 3
  test('additionne 0 + 0', () => {
    expect(addition(0, 0)).toBe(0);
  });
  