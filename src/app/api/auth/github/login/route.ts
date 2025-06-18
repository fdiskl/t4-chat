import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const origin = `${protocol}://${host}`;

  const client_id = process.env.GITHUB_CLIENT_ID!;
  const redirect_uri = `${origin}/api/auth/github/callback`;
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=read:user`;

  return NextResponse.redirect(githubURL);
}
