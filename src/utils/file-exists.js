import { access } from "fs/promises";

export const fileExists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch (error) {
    false;
  }
};
