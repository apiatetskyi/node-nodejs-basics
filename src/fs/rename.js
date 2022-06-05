import { rename as fsRename } from "fs/promises";

import { fileExists } from "../utils/file-exists.js";
import { getDirname } from "../utils/path.js";

const __dirname = getDirname(import.meta.url);
const oldPath = `${__dirname}/files/wrongFilename.txt`;
const newPath = `${__dirname}/files/properFilename.md`;

export const rename = async () => {
  try {
    const oldExists = await fileExists(oldPath);
    const newExists = await fileExists(newPath);

    if (!oldExists || newExists) {
      throw new Error("FS operation failed");
    }

    await fsRename(
      `${__dirname}/files/wrongFilename.txt`,
      `${__dirname}/files/properFilename.md`
    );

    console.log("File renamed");
  } catch (error) {
    console.log(error);
  }
};

rename();
