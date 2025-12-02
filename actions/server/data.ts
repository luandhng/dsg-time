"use server";

import { createClient } from "@/lib/supabase/server";

export async function fetchStaffs() {
  const supabase = await createClient();
  const { data } = await supabase.from("staffs").select();

  return data;
}

export async function fetchTimeInfo() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("hours")
    .select()
    .order("date", { ascending: false });

  return data;
}
