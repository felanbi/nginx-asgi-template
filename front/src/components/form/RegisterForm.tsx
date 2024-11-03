import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

const RegisterForm = () => {
  console.log("Register rendered");
  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Welcome</div>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Choose an username
          </label>
          <InputText
            id="username"
            type="text"
            placeholder="@username"
            className="w-full mb-3"
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Enter password
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
          />

          <label htmlFor="password-confirm" className="block text-900 font-medium mb-2">
            Confirm password
          </label>
          <InputText
            id="password-confirm"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
          />
          <Button label="Register" icon="pi pi-user" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
