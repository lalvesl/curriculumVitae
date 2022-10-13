import crypto from "node:crypto";

export const hasher = (data) =>
  crypto.createHash("sha1").update(data).digest("hex");
