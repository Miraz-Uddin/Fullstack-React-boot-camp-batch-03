(() => {
  /**
   * Promise with Error handling
   */
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     Pending State
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("DATA Loaded failed while Fetching ...");
  //     })
  //     Resolved State
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     Rejected State
  //     .catch((error) => {
  //       console.log(error);
  //     });
  /**
   * async await with Error handling
   */
  //   async function run() {
  //     try {
  //       let response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos/1"
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       let data = await response.json();
  //       console.log(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   run();
})();
