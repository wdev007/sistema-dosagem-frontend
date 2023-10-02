import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { authService } from "./auth";

export async function loginLoader() {
  console.log("LOGIN LOADER");
  if (authService.isAuthenticated) {
    return redirect("/");
  }
  return null;
}

export function protectedLoader({ request }: LoaderFunctionArgs) {
  console.log("PROTECTED LOADER: ", request);
  if (!authService.isAuthenticated) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/sign-in?" + params.toString());
  }
  return null;
}
