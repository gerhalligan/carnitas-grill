import { useVouchers } from "@/hooks/use-vouchers";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

export function VouchersDisplay() {
  const { data: vouchers, isLoading: vouchersLoading } = useVouchers();
  const { user } = useAuth();

  const { data: orderCount, isLoading: ordersLoading } = useQuery({
    queryKey: ["completedOrders", user?.id],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("orders")
        .select("*", { count: 'exact', head: true })
        .eq("user_id", user?.id)
        .eq("status", "completed");

      if (error) throw error;
      return count || 0;
    },
    enabled: !!user?.id,
  });

  if (vouchersLoading || ordersLoading) return null;

  const completedOrders = (orderCount || 0) % 10;
  const ordersUntilNextVoucher = 10 - completedOrders;

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Star className="h-5 w-5 text-carnitas-primary" />
        <h3 className="text-lg font-semibold text-carnitas-text">Your Loyalty Rewards</h3>
      </div>

      <Card className="p-4 bg-white/90 border border-carnitas-primary mb-4">
        <p className="text-sm text-gray-600 mb-3">Progress to next voucher:</p>
        <div className="space-y-3">
          <div className="flex justify-center gap-1">
            {[...Array(10)].map((_, index) => (
              <Star
                key={index}
                className={`h-6 w-6 transition-colors ${
                  index < completedOrders
                    ? 'fill-carnitas-yellow text-carnitas-yellow'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            {ordersUntilNextVoucher} more order{ordersUntilNextVoucher !== 1 ? 's' : ''} until your next loyalty voucher
          </p>
        </div>
      </Card>

      {vouchers?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vouchers.map((voucher) => (
            <Card key={voucher.id} className="p-4 bg-white/90 border-2 border-carnitas-primary">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-lg font-semibold">€{voucher.amount.toFixed(2)}</p>
                  <p className="text-sm text-gray-600">
                    Expires: {format(new Date(voucher.expires_at), "PP")}
                  </p>
                </div>
                <Badge variant="secondary">Loyalty Reward</Badge>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}