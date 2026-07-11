import express from 'express';
const app = express();
app.use(express.json());
const UPSTREAM = process.env.UPSTREAM || 'https://api.openai.com/v1';

app.get('/health', (_,res) => res.json({ ok:true, service:'openai-api', routes:100 }));

app.get('/assistants', async (req, res) => {
  try {
    const upstream = new URL('/assistants', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/assistants', async (req, res) => {
  try {
    const upstream = new URL('/assistants', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/assistants/:assistant_id', async (req, res) => {
  try {
    const upstream = new URL('/assistants/{assistant_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/assistants/:assistant_id', async (req, res) => {
  try {
    const upstream = new URL('/assistants/{assistant_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/assistants/:assistant_id', async (req, res) => {
  try {
    const upstream = new URL('/assistants/{assistant_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/audio/speech', async (req, res) => {
  try {
    const upstream = new URL('/audio/speech', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/audio/transcriptions', async (req, res) => {
  try {
    const upstream = new URL('/audio/transcriptions', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/audio/translations', async (req, res) => {
  try {
    const upstream = new URL('/audio/translations', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/audio/voice_consents', async (req, res) => {
  try {
    const upstream = new URL('/audio/voice_consents', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/audio/voice_consents', async (req, res) => {
  try {
    const upstream = new URL('/audio/voice_consents', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/audio/voice_consents/:consent_id', async (req, res) => {
  try {
    const upstream = new URL('/audio/voice_consents/{consent_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/audio/voice_consents/:consent_id', async (req, res) => {
  try {
    const upstream = new URL('/audio/voice_consents/{consent_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/audio/voice_consents/:consent_id', async (req, res) => {
  try {
    const upstream = new URL('/audio/voice_consents/{consent_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/audio/voices', async (req, res) => {
  try {
    const upstream = new URL('/audio/voices', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/batches', async (req, res) => {
  try {
    const upstream = new URL('/batches', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/batches', async (req, res) => {
  try {
    const upstream = new URL('/batches', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/batches/:batch_id', async (req, res) => {
  try {
    const upstream = new URL('/batches/{batch_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/batches/:batch_id/cancel', async (req, res) => {
  try {
    const upstream = new URL('/batches/{batch_id}/cancel', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/chat/completions', async (req, res) => {
  try {
    const upstream = new URL('/chat/completions', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/chat/completions', async (req, res) => {
  try {
    const upstream = new URL('/chat/completions', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/chat/completions/:completion_id', async (req, res) => {
  try {
    const upstream = new URL('/chat/completions/{completion_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/chat/completions/:completion_id', async (req, res) => {
  try {
    const upstream = new URL('/chat/completions/{completion_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/chat/completions/:completion_id', async (req, res) => {
  try {
    const upstream = new URL('/chat/completions/{completion_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/chat/completions/:completion_id/messages', async (req, res) => {
  try {
    const upstream = new URL('/chat/completions/{completion_id}/messages', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/completions', async (req, res) => {
  try {
    const upstream = new URL('/completions', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/containers', async (req, res) => {
  try {
    const upstream = new URL('/containers', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/containers', async (req, res) => {
  try {
    const upstream = new URL('/containers', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/containers/:container_id', async (req, res) => {
  try {
    const upstream = new URL('/containers/{container_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/containers/:container_id', async (req, res) => {
  try {
    const upstream = new URL('/containers/{container_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/containers/:container_id/files', async (req, res) => {
  try {
    const upstream = new URL('/containers/{container_id}/files', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/containers/:container_id/files', async (req, res) => {
  try {
    const upstream = new URL('/containers/{container_id}/files', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/containers/:container_id/files/:file_id', async (req, res) => {
  try {
    const upstream = new URL('/containers/{container_id}/files/{file_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/containers/:container_id/files/:file_id', async (req, res) => {
  try {
    const upstream = new URL('/containers/{container_id}/files/{file_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/containers/:container_id/files/:file_id/content', async (req, res) => {
  try {
    const upstream = new URL('/containers/{container_id}/files/{file_id}/content', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/conversations/:conversation_id/items', async (req, res) => {
  try {
    const upstream = new URL('/conversations/{conversation_id}/items', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/conversations/:conversation_id/items', async (req, res) => {
  try {
    const upstream = new URL('/conversations/{conversation_id}/items', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/conversations/:conversation_id/items/:item_id', async (req, res) => {
  try {
    const upstream = new URL('/conversations/{conversation_id}/items/{item_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/conversations/:conversation_id/items/:item_id', async (req, res) => {
  try {
    const upstream = new URL('/conversations/{conversation_id}/items/{item_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/embeddings', async (req, res) => {
  try {
    const upstream = new URL('/embeddings', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/evals', async (req, res) => {
  try {
    const upstream = new URL('/evals', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/evals', async (req, res) => {
  try {
    const upstream = new URL('/evals', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/evals/:eval_id', async (req, res) => {
  try {
    const upstream = new URL('/evals/{eval_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/evals/:eval_id', async (req, res) => {
  try {
    const upstream = new URL('/evals/{eval_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/evals/:eval_id', async (req, res) => {
  try {
    const upstream = new URL('/evals/{eval_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/evals/:eval_id/runs', async (req, res) => {
  try {
    const upstream = new URL('/evals/{eval_id}/runs', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/evals/:eval_id/runs', async (req, res) => {
  try {
    const upstream = new URL('/evals/{eval_id}/runs', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/evals/:eval_id/runs/:run_id', async (req, res) => {
  try {
    const upstream = new URL('/evals/{eval_id}/runs/{run_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/evals/:eval_id/runs/:run_id', async (req, res) => {
  try {
    const upstream = new URL('/evals/{eval_id}/runs/{run_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/evals/:eval_id/runs/:run_id', async (req, res) => {
  try {
    const upstream = new URL('/evals/{eval_id}/runs/{run_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/evals/:eval_id/runs/:run_id/output_items', async (req, res) => {
  try {
    const upstream = new URL('/evals/{eval_id}/runs/{run_id}/output_items', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/evals/:eval_id/runs/:run_id/output_items/:output_item_id', async (req, res) => {
  try {
    const upstream = new URL('/evals/{eval_id}/runs/{run_id}/output_items/{output_item_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/files', async (req, res) => {
  try {
    const upstream = new URL('/files', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/files', async (req, res) => {
  try {
    const upstream = new URL('/files', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/files/:file_id', async (req, res) => {
  try {
    const upstream = new URL('/files/{file_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/files/:file_id', async (req, res) => {
  try {
    const upstream = new URL('/files/{file_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/files/:file_id/content', async (req, res) => {
  try {
    const upstream = new URL('/files/{file_id}/content', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/fine_tuning/alpha/graders/run', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/alpha/graders/run', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/fine_tuning/alpha/graders/validate', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/alpha/graders/validate', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions/:permission_id', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions/{permission_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/fine_tuning/jobs', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/jobs', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/fine_tuning/jobs', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/jobs', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/fine_tuning/jobs/:fine_tuning_job_id', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/jobs/{fine_tuning_job_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/fine_tuning/jobs/:fine_tuning_job_id/cancel', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/jobs/{fine_tuning_job_id}/cancel', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/fine_tuning/jobs/:fine_tuning_job_id/checkpoints', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/jobs/{fine_tuning_job_id}/checkpoints', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/fine_tuning/jobs/:fine_tuning_job_id/events', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/jobs/{fine_tuning_job_id}/events', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/fine_tuning/jobs/:fine_tuning_job_id/pause', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/jobs/{fine_tuning_job_id}/pause', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/fine_tuning/jobs/:fine_tuning_job_id/resume', async (req, res) => {
  try {
    const upstream = new URL('/fine_tuning/jobs/{fine_tuning_job_id}/resume', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/images/edits', async (req, res) => {
  try {
    const upstream = new URL('/images/edits', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/images/generations', async (req, res) => {
  try {
    const upstream = new URL('/images/generations', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/images/variations', async (req, res) => {
  try {
    const upstream = new URL('/images/variations', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/models', async (req, res) => {
  try {
    const upstream = new URL('/models', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/models/:model', async (req, res) => {
  try {
    const upstream = new URL('/models/{model}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/models/:model', async (req, res) => {
  try {
    const upstream = new URL('/models/{model}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/moderations', async (req, res) => {
  try {
    const upstream = new URL('/moderations', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/organization/admin_api_keys', async (req, res) => {
  try {
    const upstream = new URL('/organization/admin_api_keys', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/organization/admin_api_keys', async (req, res) => {
  try {
    const upstream = new URL('/organization/admin_api_keys', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/organization/admin_api_keys/:key_id', async (req, res) => {
  try {
    const upstream = new URL('/organization/admin_api_keys/{key_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/organization/admin_api_keys/:key_id', async (req, res) => {
  try {
    const upstream = new URL('/organization/admin_api_keys/{key_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/organization/audit_logs', async (req, res) => {
  try {
    const upstream = new URL('/organization/audit_logs', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/organization/certificates', async (req, res) => {
  try {
    const upstream = new URL('/organization/certificates', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/organization/certificates', async (req, res) => {
  try {
    const upstream = new URL('/organization/certificates', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/organization/certificates/activate', async (req, res) => {
  try {
    const upstream = new URL('/organization/certificates/activate', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/organization/certificates/deactivate', async (req, res) => {
  try {
    const upstream = new URL('/organization/certificates/deactivate', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/organization/certificates/:certificate_id', async (req, res) => {
  try {
    const upstream = new URL('/organization/certificates/{certificate_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/organization/certificates/:certificate_id', async (req, res) => {
  try {
    const upstream = new URL('/organization/certificates/{certificate_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/organization/certificates/:certificate_id', async (req, res) => {
  try {
    const upstream = new URL('/organization/certificates/{certificate_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/organization/costs', async (req, res) => {
  try {
    const upstream = new URL('/organization/costs', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/organization/groups', async (req, res) => {
  try {
    const upstream = new URL('/organization/groups', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/organization/groups', async (req, res) => {
  try {
    const upstream = new URL('/organization/groups', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/organization/groups/:group_id', async (req, res) => {
  try {
    const upstream = new URL('/organization/groups/{group_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/organization/groups/:group_id', async (req, res) => {
  try {
    const upstream = new URL('/organization/groups/{group_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/organization/groups/:group_id/roles', async (req, res) => {
  try {
    const upstream = new URL('/organization/groups/{group_id}/roles', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/organization/groups/:group_id/roles', async (req, res) => {
  try {
    const upstream = new URL('/organization/groups/{group_id}/roles', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/organization/groups/:group_id/roles/:role_id', async (req, res) => {
  try {
    const upstream = new URL('/organization/groups/{group_id}/roles/{role_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/organization/groups/:group_id/users', async (req, res) => {
  try {
    const upstream = new URL('/organization/groups/{group_id}/users', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/organization/groups/:group_id/users', async (req, res) => {
  try {
    const upstream = new URL('/organization/groups/{group_id}/users', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/organization/groups/:group_id/users/:user_id', async (req, res) => {
  try {
    const upstream = new URL('/organization/groups/{group_id}/users/{user_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/organization/invites', async (req, res) => {
  try {
    const upstream = new URL('/organization/invites', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'openai-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('openai-api on :' + PORT));
