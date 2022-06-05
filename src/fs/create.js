import { writeFile, access } from "fs/promises";

import { getDirname } from "../utils/path.js";

const __dirname = getDirname(import.meta.url);
const filePath = `${__dirname}/files/fresh.txt`;

export const create = async () => {
  try {
    await access(filePath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(filePath, "I am fresh and young");
      console.log("File created");
    }

    if (error.code === "EEXIST") {
      console.log(error);
    }
  }
};

create();
