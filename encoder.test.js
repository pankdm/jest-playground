import fs from "fs";

function encodeDecode(s) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  return decoder.decode(encoder.encode(s));
}

test("encode and decode message from file", () => {
  let data = fs.readFileSync("file.txt");
  let data2 = encodeDecode(data);
  console.log(data.toString());
  console.log(data2);
  expect(data2).toEqual(data.toString());
});
