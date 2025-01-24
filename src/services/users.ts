/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export const loginOrRegister = async ({
  email,
  pw,
}: {
  email: string;
  pw: string;
}) => {
  const body = JSON.stringify({ email, pw });

  const res = await api("/login", { body, method: "POST" });

  if (res.status === 401) {
    console.log("incorrect pw");
    window.alert("incorrect password");
    return res;
  }

  return res.json();
};

export const getAllUserData = async () => {
  const res = await api("/users");
  const parsed = await res.json();
  return parsed;
};

export const updateUserinDB = async (
  id: string,
  user: any,
  isNewUser: boolean
) => {
  const res = await api(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });
  await api(`/address/${id}`, {
    method: isNewUser ? "POST" : "PUT",
    body: JSON.stringify(user.address),
  });
  const parsed = await res.json();
  return parsed;
};
