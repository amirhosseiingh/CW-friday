import { El } from "../../../utils/El.js";

export function UserLists() {
  // Fetch user data from the API
  function GetUser() {
    fetch("https://676d4ea00e299dd2ddff1999.mockapi.io/UserList")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        renderUser(result); // Pass the fetched data to the renderUser function
      })
      .catch((err) => console.log(err));
  }

  // Render user data
  function renderUser(users) {
    const listContainer = document.getElementById("list");
    if (listContainer) {
      // Clear the list before rendering new data
      listContainer.innerHTML = "";

      // Loop through users and append elements to the list
      users.forEach((item) => {
        const userElement = El({
          element: "div",
          className: "border border-red-700 rounded-sm p-4",
          children: [
            El({ element: "li", children: [item.name] }),
            El({ element: "li", children: [item.age] }),
            El({ element: "li", children: [item.city] }),
            El({
              element: "button",
              className: "border border-red-700 rounded-sm p-2",
              id: `edit-btn-${item.id}`,
              type: "button",
              eventListener: [
                {
                  event: "click",
                  callback: () => editUser(item.id),
                },
              ],
              children: ["Edit"],
            }),
            El({
              element: "button",
              className: "border border-red-700 rounded-sm p-2",
              id: `delete-btn-${item.id}`,
              type: "button",
              eventListener: [
                {
                  event: "click",
                  callback: () => deleteUser(item.id),
                },
              ],
              children: ["Delete"],
            }),El({
              element : "a",
              restAttrs:{href: `../../../single-product.html?id=${item.id}`},
              children :[
                El({
                  element : "button",
                  children : ["details"] ,
                  id: `detail-btn-${item.id}`,
                  type : "button",
                  className: "border border-red-700 rounded-sm p-2",
                  
                  // eventListener :[{
                  //   event : "click",
                  //   callback : ()=>detailsUser(item.id)
                  // }]
                  })
              ]
            })
          ],
        });

        // Append the user element to the list
        listContainer.appendChild(userElement);
      });
    }
  }
  // function detailsUser(userId) {
  //   window.location.href = userId;
  // }
  // Example editUser function (replace with your logic)
  function editUser(userId) {
    console.log("Editing user:", userId);
  }

  // Example deleteUser function (replace with your logic)
  async function deleteUser(userId) {
    console.log("Deleting user:", userId);
    try {
      const res = await fetch(
        `https://676d4ea00e299dd2ddff1999.mockapi.io/UserList/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (res.status === 200) {
        GetUser();
      }
    } catch (error) {
      console.log("error");
    }
  }

  // Initial render and fetching of user data
  GetUser();

  // Initial DOM structure
  return El({
    element: "div",
    children: [
      El({ element: "div", children: ["UserList:"] }),
      El({
        element: "div",
        children: [
          El({
            element: "ul",
            className: "flex flex-col gap-4",
            id: "list", // Set an ID to the list for appending items dynamically
            children: [], // Empty initially; will be populated dynamically
          }),
        ],
      }),
    ],
  });
}
