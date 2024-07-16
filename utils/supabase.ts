import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rxvhebzppbendltvepwa.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4dmhlYnpwcGJlbmRsdHZlcHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4MDkzNDQsImV4cCI6MjAzNjM4NTM0NH0.wUmH-aEsLnsC47KifDhG9IA6MQpK_eHlAd9WjKA18_g";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
