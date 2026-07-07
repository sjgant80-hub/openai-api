#!/usr/bin/env node
/**
 * openai-api · HTTP proxy for OpenAI
 * Sovereign estate wrapper for OpenAI · AI/LLM
 * Docs: https://platform.openai.com/docs/api-reference
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'OpenAI' }));
  res.end(JSON.stringify({ name: 'openai-api', wraps: 'OpenAI', docs: 'https://platform.openai.com/docs/api-reference' }));
}).listen(PORT, () => console.log('openai-api on', PORT));
