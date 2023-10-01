import { supabaseClient } from "@/utils/supabaseClient";

export const getLibraries = async ({ userId, token }) => {
  const supabase = await supabaseClient(token);
  const { data: libraries, error } = await supabase
    .from("libraries")
    .select("*")
    .eq("user_id", userId);

  return libraries;
};

export const getLibrary = async ({ userId, token }) => {
  const supabase = await supabaseClient(token);
  const { data: library, error } = await supabase
    .from("libraries")
    .select("*")
    .eq("user_id", userId)

  return library;
};

export const createLibrary = async ({ userId, token, library }) => {
  const supabase = await supabaseClient(token);
  const { data: newLibrary, error } = await supabase
    .from("libraries")
    .insert([{ ...library, user_id: userId }]);
  console.log(newLibrary)
  return newLibrary;
};
