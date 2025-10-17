import { useState, useEffect } from "react";

const NAME_KEY = "NAME";
const EMAIL_KEY = "EMAIL";
const PASSWORD_KEY = "PASSWORD";

export default function ManageAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");

  // Load user data when component mounts
  useEffect(() => {
    const storedName = localStorage.getItem(NAME_KEY) || "";
    const storedEmail = localStorage.getItem(EMAIL_KEY) || "";
    const storedPassword = localStorage.getItem(PASSWORD_KEY) || "";
    setName(storedName);
    setEmail(storedEmail);
    setPassword(storedPassword);
  }, []);

  // Save updates
  function handleSave() {
    if (newPassword && newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    localStorage.setItem(NAME_KEY, name);
    localStorage.setItem(EMAIL_KEY, email);
    localStorage.setItem(PASSWORD_KEY, newPassword || password);

    alert("Profile updated successfully!");
    setNewPassword("");
    setConfirmPassword("");
  }

  // Cancel edits (reset to stored data)
  function handleCancel() {
    const storedName = localStorage.getItem(NAME_KEY) || "";
    const storedEmail = localStorage.getItem(EMAIL_KEY) || "";
    const storedPassword = localStorage.getItem(PASSWORD_KEY) || "";
    setName(storedName);
    setEmail(storedEmail);
    setPassword(storedPassword);
    setNewPassword("");
    setConfirmPassword("");
    setAddress("");
  }

  return (
    <div className="all-links-content flex flex-col w-full max-w-3xl bg-[#F5F5F5] px-15 py-5 gap-y-5 max-md:px-10 max-md:py-4 max-sm:px-1 max-sm:py-2 max-md:items-center">
      <h3 className="font-medium text-xl text-[#DB4444] max-md:text-lg max-sm:text-base">
        Edit Your Profile
      </h3>

      <div className="flex justify-between max-md:flex-col max-md:justify-center">
        <div className="flex flex-col">
          <label className="max-md:text-sm max-sm:text-xs">First Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="ml-4 placeholder:text-[10px] max-md:placeholder:text-[10px] max-sm:placeholder:text-[8px] max-sm:max-w-[170px]"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col">
          <label className="max-md:text-sm max-sm:text-xs">Last Name</label>
          <input
            type="text"
            className="ml-4 placeholder:text-[10px] max-sm:max-w-[170px]"
            placeholder="(optional)"
          />
        </div>
      </div>

      <div className="flex justify-between max-md:flex-col max-md:justify-center">
        <div className="flex flex-col">
          <label className="max-md:text-sm max-sm:text-xs">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ml-4 placeholder:text-[10px] max-sm:max-w-[170px]"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="flex flex-col">
          <label className="max-md:text-sm max-sm:text-xs">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="ml-4 placeholder:text-[10px] max-sm:max-w-[170px]"
            placeholder="First Floor, City Road, NY, USA"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-y-2.5">
          <label className="max-md:text-sm max-sm:text-xs">
            Password Changes
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="ml-4 placeholder:text-[10px] max-sm:max-w-[170px]"
            placeholder="Current Password"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="ml-4 placeholder:text-[10px] max-sm:max-w-[170px]"
            placeholder="New Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="ml-4 placeholder:text-[10px] max-sm:max-w-[170px]"
            placeholder="Confirm New Password"
          />
        </div>
      </div>

      <div className="flex justify-end gap-x-4 max-sm:gap-x-2 max-md:-ml-10">
        <button
          onClick={handleCancel}
          className="max-md:text-sm max-sm:text-[10px]"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-[#DB4444] text-white px-4 py-2.5 max-sm:px-3 max-sm:py-2 rounded text-sm max-md:text-xs max-sm:text-[8px]"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
