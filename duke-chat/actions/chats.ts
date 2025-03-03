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

export async function handleNewMessage(chatId: string, content: string) {
  const supabase = createClient();
  const { error } = await supabase
    .from("messages")
    .insert({
      chat_id: chatId,
      sender_type: "user",
      content,
    });
  if (error) {
    console.error("Error inserting message", error.message);
    return;
  }

  const { error: updateError } = await supabase
    .from("chats")
    .update({ updated_at: new Date().toISOString() })
    .eq("id", chatId);
  if (updateError) {
    console.error("Error updating chat", updateError.message);
  }
}
