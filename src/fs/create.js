import { constants } from "fs";
import { writeFile, access, readFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = `${__dirname}/files/fresh.txt`;

class ExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = "ExistsError";
    this.code = "EEXIST";
  }
}

export const create = async () => {
  try {
    await access(filePath);
    throw new ExistsError("FS operation failed");
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
