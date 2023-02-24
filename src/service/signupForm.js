import httpForm from "./httpserviceForm";

export function signupForm(userValue) {
    return httpForm.post("/user/register",userValue)
}