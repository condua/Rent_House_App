import type { VercelRequest, VercelResponse } from "@vercel/node";

let rooms = [
  {
    id: "1",
    title: "Phòng trọ cao cấp gần ĐH Đồng Tháp",
    price: 1500000,
    address: "Cao Lãnh",
    distance: 0.5,
    type: "private",
  },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    return res.json(rooms);
  }

  if (req.method === "POST") {
    const newRoom = {
      ...req.body,
      id: String(rooms.length + 1),
    };
    rooms.push(newRoom);
    return res.status(201).json(newRoom);
  }

  return res.status(405).end();
}