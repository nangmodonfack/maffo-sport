// lib/football-database/client.ts

import { createClient } from "@supabase/supabase-js";

/**
 * Client Supabase réservé au serveur.
 * Utilisé uniquement par Football Database.
 */

export function getFootballDatabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl) {
    throw new Error(
      "La variable NEXT_PUBLIC_SUPABASE_URL est manquante."
    );
  }

  if (!supabaseSecretKey) {
    throw new Error(
      "La variable SUPABASE_SECRET_KEY est manquante."
    );
  }

  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
