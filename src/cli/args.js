export const parseArgs = () => {
  const args = process.argv.slice(2);
  const regexp = new RegExp(/--\w+.?/);

  console.log(
    process.argv
      .reduce((acc, argument, index, source) => {
        const value = source[index + 1];
        if (regexp.test(argument) && !regexp.test(value)) {
          return [...acc, `${argument} is ${value}`];
        }

        return acc;
      }, [])
      .join(", ")
  );
};

parseArgs();
