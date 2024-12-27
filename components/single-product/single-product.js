import { El } from "../../utils/El.js";

export function SingleProduct() {
    console.log(window.location.search);
    const id = window.location.search.split("=")[1]
    console.log(id);
    function GetUserById() {
        fetch(`https://676d4ea00e299dd2ddff1999.mockapi.io/UserList/${id}`)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
        
            // renderUser(result); // Pass the fetched data to the renderUser function
          })
          .catch((err) => console.log(err));
      }
      GetUserById()
    return El({
        element : "div",
        children : [id]
    })
}
