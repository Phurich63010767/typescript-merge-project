export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    // Reverse collection_2 to make it ascending
    const reversedCollection2 = collection_2.slice().reverse();
    
    const mergedArray: number[] = [];
    let i = 0, j = 0, k = 0;
  
    while (i < collection_1.length || j < reversedCollection2.length || k < collection_3.length) {
      const val1 = i < collection_1.length ? collection_1[i] : Infinity;
      const val2 = j < reversedCollection2.length ? reversedCollection2[j] : Infinity;
      const val3 = k < collection_3.length ? collection_3[k] : Infinity;
  
      if (val1 <= val2 && val1 <= val3) {
        mergedArray.push(val1);
        i++;
      } else if (val2 <= val1 && val2 <= val3) {
        mergedArray.push(val2);
        j++;
      } else {
        mergedArray.push(val3);
        k++;
      }
    }
  
    return mergedArray;
  }
  