export default function baseEnv(baseApi: string) {
  return {
    api: {
      search: `${baseApi}/search`,
    },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}

export type Environment = ReturnType<typeof baseEnv>;
