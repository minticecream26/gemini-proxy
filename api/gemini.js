export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return res.status(200).json({ message: 'Hello from Vercel!' });
}
```

**3. Delete `package.json`** - We don't need it for this simple function

**4. Your final structure should be:**
```
gemini-proxy/
├── api/
│   └── gemini.js
└── vercel.json
```

**5. Commit and push these changes**

**6. In Vercel, go to your project → Settings → General → scroll to bottom:**
   - Click **"Redeploy"** or trigger a new deployment

---

After it redeploys, try visiting:
```
https://gemini-proxy-six-rouge.vercel.app/api/gemini
