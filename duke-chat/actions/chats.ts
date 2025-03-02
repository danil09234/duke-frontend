import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export async function handleNewChat(user: User | null) {
  if (!user) return;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("chats")
    .insert({ user_id: user.id })
    .select("id")
    .single();
  if (error) {
    console.error("Error creating chat", error.message);
    return;
  }
  redirect(`/chats/${data.id}`);
}
