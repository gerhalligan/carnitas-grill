import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const OrderHistory = () => {
  const { user } = useAuth();

  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-6">
            <div className="space-y-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-24" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (!orders?.length) {
    return (
      <Card className="p-6">
        <p className="text-center text-gray-500 font-handwritten text-xl">
          You haven't placed any orders yet
        </p>
      </Card>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'preparing':
        return 'bg-blue-500';
      case 'ready':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id} className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500">
                Order placed: {format(new Date(order.created_at), "PPp")}
              </p>
              <p className="font-semibold mt-1">Total: €{order.total.toFixed(2)}</p>
            </div>
            <Badge className={`${getStatusColor(order.status)} capitalize`}>
              {order.status}
            </Badge>
          </div>
          <div className="space-y-2">
            {order.items.map((item: any, index: number) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-handwritten text-lg">{item.name}</p>
                  {item.customizations && (
                    <div className="text-sm text-gray-500">
                      {item.customizations.removedIngredients && (
                        <p>Without: {item.customizations.removedIngredients.join(', ')}</p>
                      )}
                      {item.customizations.notes && (
                        <p>Notes: {item.customizations.notes}</p>
                      )}
                    </div>
                  )}
                </div>
                <p className="text-gray-600">x{item.quantity}</p>
              </div>
            ))}
          </div>
          {order.pickup_time && (
            <p className="mt-4 text-sm text-gray-500">
              Pickup time: {format(new Date(order.pickup_time), "p")}
            </p>
          )}
        </Card>
      ))}
    </div>
  );
};

export default OrderHistory;