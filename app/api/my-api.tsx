export class API {

    static CACHE_MAX_AGE: number = 300; // seconds
  
    /**
     * Simple method to test API
     */
    static simpleMethod() {
      // let's do something .....
      // ....
  
      console.log("Hello World");
      
      return "Hello World"; 
    }
  
    /**
     */
    static testAPI() {
      return new Promise<any>((resolve, reject) => {
        const options = {
          method: "GET",
          headers: {
            //"Cache-Control": "No-Cache",
            //"Cache-Control": `${DWZAPI.CACHE_MAX_AGE}`,
            //Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate      },
          },
          queryStringParameters: {
            //person: context.user.person?.id,
          },
        };
        let url = "https://dogapi.dog/api/v2/breeds";
        
        fetch(url, options)
          .then((response) => response.json())
          .then((json) => {
            resolve(json); // let client to deal with error/exception
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  
  }