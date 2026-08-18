# SiteCraft SA — Client Site Starter

Reusable, zero-cost, mobile-first single-page site for SA local businesses.
No build step, no database, no monthly hosting fee. Deploy free on
GitHub Pages / Netlify / Vercel. Keep your R1,500 + R450/mo margin.

## Clone-and-fill workflow (per client)
```bash
# 1. Copy this folder to a new client project
cp -r sitecraft-starter client-acme-plumbing
cd client-acme-plumbing

# 2. Fill config.txt with the client's details

# 3. Replace every {{PLACEHOLDER}} in index.html with config values
#    VS Code: Ctrl+H, paste a placeholder, "Replace All"

# 4. Get a FREE form key at https://web3forms.com  -> paste into {{WEB3FORMS_KEY}}

# 5. Deploy free (see below)
```

## Live demo
https://thabs1234.github.io/sitecraft-demo/

## Files
- `index.html` — all editable copy is between `{{ }}`
- `styles.css` — green + gold SA palette, responsive
- `main.js` — mobile menu, contact form (Web3Forms), year stamp
- `netlify.toml` — Netlify drag-and-drop publish config
- `config.txt` — fill-in-the-blanks for every placeholder

## Placeholder map
| Placeholder | Example |
|---|---|
| {{BUSINESS_NAME}} | Thabo's Plumbing |
| {{SERVICE_KEYWORD}} | plumbing |
| {{CITY}} | Soweto |
| {{BUSINESS_TAGLINE}} | Fast, affordable plumbing you can trust |
| {{HERO_SUBLINE}} | Leaks, geysers, drains & renovations — same-day callouts |
| {{PHONE}} | 074 508 6001 |
| {{PHONE_CLEAN}} | +27745086001 (for tel: links) |
| {{WHATSAPP}} | 27745086001 (digits, no +) |
| {{EMAIL}} | hello@business.co.za |
| {{ABOUT_PARAGRAPH}} | 1–2 sentences about the business |
| {{USP_1/2/3}} | unique selling points |
| {{SERVICE_1_TITLE}} … {{SERVICE_4_DESC}} | 4 service blurbs |
| {{TESTIMONIAL_1}}, {{TESTIMONIAL_1_NAME}} … | 2 reviews |
| {{WEB3FORMS_KEY}} | key from web3forms.com |

## Deploy free
**GitHub Pages:** push to a repo, then
`gh api repos/<you>/<repo>/pages --method POST -f source[branch]=main -f source[path]=/`
(first build takes ~1–2 min; poll the URL for 200)

**Netlify:** drag the folder onto https://app.netlify.com/drop
**Vercel:** import the folder / GitHub repo

## Custom domain (.co.za)
Buy at xneelo/Afrihost (~R99–150/yr), add a CNAME file or set it in the
host's custom-domain settings.

## Theme quick edits (styles.css)
`--green` / `--green-2` brand dark green · `--gold` accent · `--radius`, `--maxw` shape & width

## Notes
- Footer credits "SiteCraft SA" — keep as your brand stamp.
- Without a Web3Forms key the form shows an error and the WhatsApp
  button is the working fallback. Always set the key before go-live.
