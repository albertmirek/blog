import "@testing-library/jest-dom";

import { MessageChannel } from "worker_threads";
import { TextEncoder, TextDecoder } from "util";

// eslint-disable-next-line
(global as any).MessageChannel = MessageChannel;
// eslint-disable-next-line
(global as any).TextEncoder = TextEncoder;
// eslint-disable-next-line
(global as any).TextDecoder = TextDecoder;
