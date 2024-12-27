import { El } from "../../utils/El.js";

import { UserLists } from "./user-list/user-lists.js";

export function Home() {
  return El({
    element: "div",
    children: [UserLists()],
  });
}
