"use server";

import { createClient } from "@/utils/supabase/server";

interface updateNoteServerProps {
  newNote: string;
  this_topic: string;
}

export async function updateNoteServer({
  newNote,
  this_topic,
}: updateNoteServerProps) {
  const supabase = createClient();

  await supabase
    .from("notes")
    .update({ note: newNote })
    .eq("this_topic", this_topic);
}
