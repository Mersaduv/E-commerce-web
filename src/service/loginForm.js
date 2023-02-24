import httpForm from "./httpserviceForm";

export function loginForm(userValue) {
  return httpForm.post("/user/login", userValue);
}
