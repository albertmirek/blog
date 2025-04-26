export function cookies() {
  return {
    get: (key: string) => {
      if (key === "accessToken") return { value: "accesstokenstring" };
      return undefined;
    },
  };
}
