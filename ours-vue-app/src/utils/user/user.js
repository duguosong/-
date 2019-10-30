import { getToken } from "../auth"

export function filtration(userName) {
  // console.log(userName)
  userName = "" + userName
  var ary = userName.split("")
  ary.splice(3, 4, "****")
  var tell = ary.join("")
  return tell
}

export function toLogin() {}
