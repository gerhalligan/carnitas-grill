import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

export interface Voucher {
  id: string;
  amount: number;
  used: boolean;
  expires_at: string;
  created_at: string;
}

export function useVouchers() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["vouchers", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("loyalty_vouchers")
        .select("*")
        .eq("user_id", user?.id)
        .eq("used", false)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Voucher[];
    },
    enabled: !!user?.id,
  });
}