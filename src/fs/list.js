import { readdir } from "fs/promises";

import { getDirname } from "../utils/path.js";
import { fileExists } from "../utils/file-exists.js";

const __dirname = getDirname(import.meta.url);

export const list = async () => {
  try {
    if (!(await fileExists(`${__dirname}/files`))) {
      throw new Error("FS operation failed");
    }
    const entries = await readdir(`${__dirname}/files`, {
      withFileTypes: true,
    });

    const files = entries.reduce((acc, entry) => {
      if (entry.isFile()) {
        return [...acc, entry.name];
      }

      return acc;
    }, []);

    console.log(files);
  } catch (error) {
    console.log(error);
  }
};

list();
