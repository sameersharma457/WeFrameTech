import { NextResponse } from "next/server";
import formidable, { Fields, Files } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  return new Promise((resolve, reject) => {
    const form = formidable({});
    form.parse(req as any, (err: any, fields: Fields, files: Files) => {
      if (err) reject(err);
      resolve(NextResponse.json({ ok: true, files }, { status: 200 }));
    });
  });
}
