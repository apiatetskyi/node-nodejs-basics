import { readFile } from "fs/promises";

import { getDirname } from "../utils/path.js";
import { fileExists } from "../utils/file-exists.js";

const __dirname = getDirname(import.meta.url);
const filePath = `${__dirname}/files/fileToRead.txt`;

export const read = async () => {
  try {
    const exists = await fileExists(filePath);

    if (exists) {
      const content = await readFile(filePath);
      console.log(content.toString());
    } else {
      throw new Error("FS operation failed");
    }
  } catch (error) {
    console.log(error);
  }
};

read();
