import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { authService } from "./auth";

export async function loginLoader() {
  if (authService.isAuthenticated) {
    return redirect("/");
  }
  return null;
}

export function protectedLoader({ request }: LoaderFunctionArgs) {
  if (!authService.isAuthenticated) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/sign-in?" + params.toString());
  }
  return null;
}
