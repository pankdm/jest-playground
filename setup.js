import util from "util";
import { TextDecoder } from "text-encoding";

global.TextEncoder = util.TextEncoder;
global.TextDecoder = TextDecoder;
