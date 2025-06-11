import { NextResponse } from "next/server";

export async function GET() {
  const client_id = process.env.GITHUB_CLIENT_ID!;
  const redirect_uri = "http://localhost:3000/api/auth/github/callback";
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=read:user`;

  return NextResponse.redirect(githubURL);
}
