(() => {
  const nums = [1, 2, 3, 4];

  /**
   * Imperative Coding
   */
  function triple(array) {
    const tripleArray = [];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      tripleArray.push(element * 3);
    }
    return tripleArray;
  }
  console.log(triple(nums));

  /**
   * Declarative Coding
   */
  function double(array) {
    const dblArray = [];
    for (const iterator of array) {
      dblArray.push(iterator * 2);
    }
    return dblArray;
  }
  console.log(double(nums));

  /**
   * Array Helper: map
   */
  function quadruple(array) {
    return array.map((item) => item * 5);
  }
  console.log(quadruple(nums));
  console.log(nums);

  /**
   * Array Helper: find
   */
  const findElm = (arr, chk) => arr.find((elm) => elm === chk);
  const result = findElm(nums, 4);
  console.log(result ?? "Not Found");

  /**
   * Array Helper: filter
   */
  const evenNumbersFiltered = (arr, chk) => arr.filter((elm) => elm % chk == 0);
  console.log(evenNumbersFiltered(nums, 2));
})();
