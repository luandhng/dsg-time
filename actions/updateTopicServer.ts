"use server";

import { createClient } from "@/utils/supabase/server";

interface updateTopicServerProps {
  newTopic: string;
  this_topic: string;
}

export async function updateTopicServer({
  newTopic,
  this_topic,
}: updateTopicServerProps) {
  const supabase = createClient();

  await supabase
    .from("notes")
    .update({ topic: newTopic })
    .eq("this_topic", this_topic);
}
