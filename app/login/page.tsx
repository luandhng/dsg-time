import { login } from "@/actions/server/login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-80">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <form action={login}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                required
                inputMode="numeric"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
