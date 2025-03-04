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
  // Reset the input element state
  const inputElement = document.querySelector('textarea');
  if (inputElement) {
    inputElement.value = '';
  }
  redirect(`/chats/${data.id}`);
}

export async function handleNewMessage(chatId: string, content: string, userId: string) {
  const supabase = createClient();
  const { data: userProfile, error: userProfileError } = await supabase
    .from("user_profile")
    .select("message_limit")
    .eq("id", userId)
    .single();
  if (userProfileError) {
    console.error("Error fetching user profile", userProfileError.message);
    return;
  }
  if (userProfile.message_limit <= 0) {
    console.error("Message limit reached");
    return;
  }
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
    return;
  }
  const { error: messageLimitError } = await supabase
    .from("user_profile")
    .update({ message_limit: userProfile.message_limit - 1 })
    .eq("id", userId);
  if (messageLimitError) {
    console.error("Error updating message limit", messageLimitError.message);
  }
}
