export const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .reduce((envs, [key, value]) => {
        if (/RSS_/.test(key)) {
          return [...envs, `${key}=${value}`];
        }

        return envs;
      }, [])
      .join("; ")
  );
};

parseEnv();
