import itemsCounter from "./__mocks__/itemsCounter.js";

describe('Test itemsCounter function', () => {
  test('Items are difined', () => {
    expect(itemsCounter()).toBeDefined();
  });
  test('Items are not null', () => {
    expect(itemsCounter()).not.toBeNull();
  });
  test('Count items', () => {
    expect(itemsCounter()).toBe(3);
  });
});
