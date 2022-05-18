export function LogOut() {
    location.href = "/";
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}
