# verra.global

Static marketing site for **ACMX** (Astra Critical Minerals Exchange), operated by VERRA GLOBAL F.Z.E.
Plain HTML + `assets/site.css` + `assets/site.js`. No build step. Design ported from the BENE LLC site.

Run locally: `python -m http.server 8787` in this folder, then open http://localhost:8787.

## Pages
`index` · `platform` (skills, deal state, approvals) · `protocol` (7 stages) · `commodities` · `compare` (21 platforms) · `contact` (requirement form)

## Before launch
- [ ] Contact form posts to FormSubmit, which delivers to info@verraglobal.co. Submit the form once and click the activation email that arrives in that inbox.
- [ ] Confirm the legal relationship between Verra Global, ACMX, BENE LLC and GigaCore, and the public meaning of "Astra" (it clashes with Astra Rare Earths).
- [ ] Legal review of the "transaction execution" wording.
- [ ] Logo/wordmark: "verra" is currently rendered as text.
- [ ] Privacy policy before the form collects data.
- [ ] Confirm "TradeBridge" = TradeBridge365 on the compare page.

## Never publish
Counterparty or supplier names, prices, markups, commissions, LOI/FCO/COA terms, credentials, phone numbers or personal emails, HS codes as authoritative, and isotope/He-3 categories.
