import { unlink } from "fs/promises";

import { getDirname } from "../utils/path.js";
import { fileExists } from "../utils/file-exists.js";

const __dirname = getDirname(import.meta.url);
const filePath = `${__dirname}/files/fileToRemove.txt`;

export const remove = async () => {
  try {
    const exists = await fileExists(filePath);

    if (exists) {
      await unlink(filePath);
      console.log("File deleted");
    } else {
      throw new Error("FS operation failed");
    }
  } catch (error) {
    console.log(error);
  }
};

remove();
