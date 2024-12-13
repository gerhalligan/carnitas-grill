import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const AuthPage = () => {
  const navigate = useNavigate();
  const { user, session, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  useEffect(() => {
    if (session || user) {
      navigate("/menu");
    }
  }, [user, session, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await signIn(email, password);
      navigate("/menu");
    } catch (error: any) {
      setError("The email or password you entered is incorrect. Please try again.");
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });
      if (error) throw error;
      toast.success("Check your email for the password reset link");
      setIsForgotPassword(false);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto pt-32 md:pt-48 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            {isForgotPassword ? "Reset Password" : "Welcome Back"}
          </h2>
          <p className="text-center text-gray-600 mb-8">
            {isForgotPassword
              ? "Enter your email to receive a password reset link"
              : "Sign in to your account to view orders and earn rewards"}
          </p>

          <form onSubmit={isForgotPassword ? handleForgotPassword : handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                placeholder="Enter your email"
              />
            </div>

            {!isForgotPassword && (
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm text-gray-700">
                  Your Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full"
                  placeholder="Enter your password"
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600"
              disabled={isLoading}
            >
              {isLoading 
                ? (isForgotPassword ? "Sending reset link..." : "Signing in...") 
                : (isForgotPassword ? "Send Reset Link" : "Sign in")}
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <button
              onClick={() => {
                setIsForgotPassword(!isForgotPassword);
                setError(null);
              }}
              className="text-sm text-gray-600 hover:text-gray-800 block w-full"
            >
              {isForgotPassword ? "Back to Sign In" : "Forgot your password?"}
            </button>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 block"
            >
              Don't have an account? Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;