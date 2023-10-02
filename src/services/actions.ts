import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { authService } from "./auth";

export async function loginAction({ request }: LoaderFunctionArgs) {
  console.log("LOGIN ACTION: ", request);
  let formData = await request.formData();
  let username = formData.get("username") as string | null;

  console.log("DATA: ", formData.get("username"));

  if (!username) {
    return {
      error: "You must provide a username to log in",
    };
  }
  try {
    await authService.signIn(username, formData.get("password") as string);
  } catch (error) {
    return {
      error: "Invalid login attempt",
    };
  }

  return redirect("/home" || "/sign-in");
}
