import api from "./api";

export const getModules = async () => {
  const res = await api("/modules");
  const parsed = await res.json();
  return parsed;
};

export const updateModules = async (body: unknown) => {
  const res = await api("/modules", {
    method: "PUT",
    body: JSON.stringify(body),
  });
  return res;
};
