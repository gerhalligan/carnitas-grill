import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { cartItems: items },
      });

      if (error) throw error;

      // Redirect to Stripe Checkout in the main window
      if (data?.url) {
        // Close the cart sheet before redirecting
        setIsOpen(false);
        // Use window.location.href for top-level navigation
        window.top.location.href = data.url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast.error('Failed to create checkout session. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative !hover:bg-transparent !hover:text-white"
          aria-label="Shopping Cart"
        >
          <ShoppingCart className="h-6 w-6 text-white" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-carnitas-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-handwritten text-3xl text-carnitas-text">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 font-handwritten text-xl">Your cart is empty</p>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-handwritten text-xl text-carnitas-text">{item.name}</h3>
                      <p className="text-lg text-gray-500 font-handwritten">€{item.price.toFixed(2)}</p>
                      {item.customizations?.removedIngredients && (
                        <div className="mt-2">
                          <p className="text-base text-gray-500 mb-1 font-handwritten">Without:</p>
                          <div className="flex flex-wrap gap-1">
                            {item.customizations.removedIngredients.map((ingredient, index) => (
                              <Badge key={index} variant="secondary" className="text-base font-handwritten">
                                {ingredient}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {item.customizations?.notes && (
                        <p className="text-base text-gray-500 mt-2 font-handwritten">
                          Note: {item.customizations.notes}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center text-lg font-handwritten">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between font-handwritten text-xl text-carnitas-text">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
                <div className="mt-6 space-y-2">
                  <Button 
                    className="w-full sketch-button"
                    onClick={handleCheckout}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processing...' : 'Checkout'}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full font-handwritten text-lg"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};