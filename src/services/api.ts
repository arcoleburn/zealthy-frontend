const api = async (endpoint: string, options?: RequestInit) => {
  const res = await fetch(
    `https://zealthy-intw-backend.arcoleburn.workers.dev${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
        
      },
    }
  );

  return res;
};

export default api;
