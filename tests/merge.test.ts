import { merge } from '../src/merge';

describe('merge function', () => {
  test('should merge and sort arrays correctly', () => {
    const collection_1 = [1, 3, 5, 7];
    const collection_2 = [6, 4, 2, 0];
    const collection_3 = [8, 9, 10];
    
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('should handle empty arrays', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  test('should handle arrays with negative numbers', () => {
    const collection_1 = [-3, -1, 2];
    const collection_2 = [5, 3, 1, -2];
    const collection_3 = [0, 4, 6];
    
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6]);
  });
});
