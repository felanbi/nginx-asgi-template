import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

const LoginForm = () => {
  console.log("Login rendered");
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Welcome</div>
          <span className="text-600 font-medium line-height-3">
            Don't have an account?
          </span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Create now
          </a>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Username
          </label>
          <InputText
            id="username"
            type="text"
            placeholder="@username"
            className="w-full mb-3"
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
          />

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
              <Checkbox
                id="rememberme"
                onChange={(e: CheckboxChangeEvent) => setChecked(e.checked)}
                checked={checked}
                className="mr-2"
              />
              <label htmlFor="rememberme">Remember me</label>
            </div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Forgot your password?
            </a>
          </div>

          <Button label="Sign In" icon="pi pi-user" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
