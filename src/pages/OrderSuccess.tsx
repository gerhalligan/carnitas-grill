import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { format, addMinutes } from "date-fns";
import { Card } from "@/components/ui/card";
import { VouchersDisplay } from "@/components/menu/VouchersDisplay";
import Navbar from "@/components/Navbar";
import { Loader2 } from "lucide-react";

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const orderId = searchParams.get('order_id');
    if (!orderId) {
      navigate('/menu');
      return;
    }

    const fetchOrder = async () => {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .single();

      if (error || !data) {
        navigate('/menu');
        return;
      }

      setOrder(data);
      setLoading(false);
    };

    fetchOrder();
  }, [searchParams, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-carnitas-light">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex justify-center items-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    );
  }

  const estimatedDeliveryTime = addMinutes(new Date(order.created_at), 45);

  return (
    <div className="min-h-screen bg-carnitas-light">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="menu-title">Order Successful!</h1>
            <p className="text-gray-600 font-handwritten text-xl">
              Thank you for your order. We're preparing your delicious meal!
            </p>
          </div>

          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold font-handwritten">Order Summary</h2>
            <div className="space-y-4">
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
                    <div className="text-right">
                      <p className="text-gray-600">x{item.quantity}</p>
                      <p className="font-semibold">€{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <p>Total Paid</p>
                  <p>€{order.total.toFixed(2)}</p>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <p className="font-semibold">Order Details</p>
                <p className="text-gray-600">
                  Order placed: {format(new Date(order.created_at), "PPp")}
                </p>
                <p className="text-gray-600">
                  Estimated pickup time: {format(estimatedDeliveryTime, "p")}
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold font-handwritten text-center">Your Loyalty Rewards</h2>
            <VouchersDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;