export function loginWithGithub(): Promise<{ token: string; user: any }> {
  return new Promise((resolve) => {
    const popup = window.open("/api/auth/github/login", "_blank", "width=500,height=600");

    const handler = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === "auth-token") {
        window.removeEventListener("message", handler);
        resolve({
          token: event.data.token,
          user: event.data.user,
        });
      }
    };

    window.addEventListener("message", handler);
  });
}
