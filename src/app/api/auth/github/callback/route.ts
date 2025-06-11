import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  if (!code) return NextResponse.json({ error: "Missing code" }, { status: 400 });

  const client_id = process.env.GITHUB_CLIENT_ID!;
  const client_secret = process.env.GITHUB_CLIENT_SECRET!;

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new URLSearchParams({ client_id, client_secret, code }),
  });
  const tokenJson = await tokenRes.json();
  const access_token = tokenJson.access_token;

  if (!access_token) return NextResponse.json({ error: "Token fetch failed" }, { status: 401 });

  const userRes = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  const user = await userRes.json();

  const jwtToken = jwt.sign({ id: user.id, login: user.login }, process.env.JWT_SECRET!, {
    expiresIn: "7d", // not ideal
  });

  return new NextResponse(
    `
    <script>
      window.opener.postMessage({
        type: "auth-token",
        token: ${JSON.stringify(jwtToken)},
        user: ${JSON.stringify({
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
        })}
      }, "*");
      window.close();
    </script>
  `,
    {
      headers: { "Content-Type": "text/html" },
    }
  );
}
