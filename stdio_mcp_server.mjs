#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "themuse",
  boardId: "themuse-official",
  domain: "themuse.com",
  npmName: "zc-themuse-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
