import { useVouchers } from "@/hooks/use-vouchers";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Ticket } from "lucide-react";

export function VouchersDisplay() {
  const { data: vouchers, isLoading } = useVouchers();

  if (isLoading) return null;
  if (!vouchers?.length) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Ticket className="h-5 w-5 text-carnitas-primary" />
        <h3 className="text-lg font-semibold text-carnitas-text">Your Loyalty Vouchers</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
}