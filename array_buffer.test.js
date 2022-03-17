
import fs from "fs";

test("readFileSync result is instance of ArrayBuffer", () => {
    let msg = fs.readFileSync("file.txt");
    expect(msg.buffer).toBeInstanceOf(ArrayBuffer);
});
