import type { VercelRequest, VercelResponse } from "@vercel/node";

let rooms = [
  {
    id: "1",
    title: "Phòng trọ cao cấp",
    price: 1500000,
  },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  const room = rooms.find((r) => r.id === id);

  if (!room) {
    return res.status(404).json({ message: "Không tìm thấy phòng" });
  }

  return res.json(room);
}