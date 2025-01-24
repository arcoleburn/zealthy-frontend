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
  const address = await api(`/address/${id}`, {
    method: isNewUser ? "POST" : "PUT",
    body: JSON.stringify(user.address),
  });
  if (res.ok && address.ok) {
    const parsed = await res.json();
    const parsedAddress = await address.json();
    return [parsed, parsedAddress];
  }
};
