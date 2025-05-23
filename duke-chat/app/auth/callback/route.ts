import { NextResponse } from "next/server";
// The client you created from the Server-Side Auth instructions
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const { data, error: userError } = await supabase.auth.getUser();
      if (userError) {
        console.error("Error getting user", userError.message);
        return NextResponse.redirect(`${origin}/error`);
      }

      // Check if user exists in user_profile table
      const { data: existingUser } = await supabase
        .from("user_profile")
        .select("*")
        .eq("email", data?.user?.email)
        .limit(1)
        .single();

      if (!existingUser) {
        // console.log(`User does not exist in user_profile table, inserting... username: ${data?.user?.user_metadata?.name}`);
        // console.log(`User ${JSON.stringify(data?.user, null, 2)}`);
        
        const { error: dbError } = await supabase.from("user_profile").insert({
          email: data?.user?.email,
          username: data?.user?.user_metadata?.name,
        });

        if (dbError) {
          console.error("Error inserting use data", dbError.message);
          return NextResponse.redirect(`${origin}/error`);
        }
      }

      const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        console.log(`Redirecting to ${origin}${next}`);
        return NextResponse.redirect(`https://duke.fei.tuke.sk/`);
      } else if (forwardedHost) {
        console.log(`Redirecting to ${forwardedHost}${next}`);
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        console.log(`Redirecting to ${origin}${next}`);
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
