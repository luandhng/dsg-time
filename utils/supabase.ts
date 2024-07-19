import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xduitbjrlenjtpdzlwxj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkdWl0YmpybGVuanRwZHpsd3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0Mjg4NTUsImV4cCI6MjAzNzAwNDg1NX0.HUr0r9H_5_16ZOcI-RNFEBijjf7A8aazMXyOF24ENQM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
