import { writeFile, access } from "fs/promises";
import { fileExists } from "../utils/file-exists.js";

import { getDirname } from "../utils/path.js";

const __dirname = getDirname(import.meta.url);
const filePath = `${__dirname}/files/fresh.txt`;

export const create = async () => {
  try {
    const exists = await fileExists(filePath);

    if (exists) {
      throw new Error("FS operation failed");
    } else {
      await writeFile(filePath, "I am fresh and young");
      console.log("File created");
    }
  } catch (error) {
    console.log(error);
  }
};

create();
