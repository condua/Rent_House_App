import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (email && password) {
    return res.json({
      token: "mock-jwt-token",
      user: {
        id: "u1",
        email,
        name: "Người dùng Test",
        role: "student",
      },
    });
  }

  return res.status(400).json({ message: "Thiếu thông tin đăng nhập" });
}