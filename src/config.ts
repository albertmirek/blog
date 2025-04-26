function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value || value === "") {
    throw new Error(`The environment variable ${key} is not set`);
  }
  return value;
}

const config = {
  apiKey: getRequiredEnv("API_KEY"),
  apiEndpoint: getRequiredEnv("API_ENDPOINT"),
};

export default config;
