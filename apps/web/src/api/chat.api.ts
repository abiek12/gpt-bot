const API_URL = import.meta.env.VITE_API_URL;

export const sendMessage = async (body: {userQuery: string}) => {
  const res = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    throw new Error("Failed to send message!")
  }

  console.log(res);

  return res.json();
}
