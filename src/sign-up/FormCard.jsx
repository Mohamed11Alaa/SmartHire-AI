import React, { useState } from "react";
import Input from "./Input";

 function FormCard() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const onChange = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <div className="form-wrapper">
       

      <div className="form-card">
        <div className="form-inner">
          <div className="form-body">
            <Input label="Username" placeholder="Enter your username" value={form.username} onChange={onChange("username")} />
            <Input label="Email" placeholder="Enter your Email" value={form.email} onChange={onChange("email")} />
            <Input label="Password" placeholder="Enter your password" type="password" value={form.password} onChange={onChange("password")} />
            <Input label="Confirm your Password" placeholder="Reenter your password" type="password" value={form.confirm} onChange={onChange("confirm")} />

            <button className="btn-sign mt-3">Sign Up</button>
          </div>
          <div className="form-note-outside">
        Already have an account? <a href="#">Log In</a>
      </div>
        </div>
        
      </div>
      
    </div>              
  );
}
export default FormCard;
