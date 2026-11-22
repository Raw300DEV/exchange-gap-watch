# Exchange gap watch

A live dashboard that compares BTC, ETH and SOL prices across **Kraken, Coinbase, Binance, Bitstamp and OKX** and flags when one exchange drifts away from the rest.

Built after November 20–21, 2026, when Kraken's Canadian-dollar markets traded up to 70% below every other exchange for 19h 45m (SOL/CAD printed C$32.00 vs ~C$95.86 elsewhere; BTC/CAD C$24,250 vs ~C$82,687).

## How it works
- **No backend for prices.** Your browser opens public WebSocket market-data feeds directly to each exchange (36 books: USD, USDT, USDC, CAD, EUR).
- **Market price** = median of the live USD/USDT/USDC books. USDT is adjusted by the live USDT/USD rate.
- **CAD/EUR books** convert at the FX rate their own books imply (median), checked against a daily bank rate and replaced by it if they disagree by more than 2.5% — so if every CAD book breaks together, the gap still shows.
- **Gap** = best bid anywhere vs best ask anywhere, with the size available at those prices (top of book).
- **Alerts** = browser notifications + sound while the tab is open; gap log kept in localStorage.
- **Replay** of the Kraken incident from Kraken's public 15-minute OHLC (`data/incident.json`).

## Files
| Path | What |
|---|---|
| `index.html` | the whole dashboard (vanilla JS, canvas charts) |
| `policy.html` | terms, disclaimer, privacy |
| `api/want.js` | serverless counter for requested alert channels (logs a channel name, no personal data) |
| `data/incident.json` | Nov 20–21 Kraken CAD vs USD candles + stats |

## Run locally
```
python -m http.server 8000
```
then open http://localhost:8000

## Disclaimer
Informational only. Not financial advice. A price on screen is not a fill. See `policy.html`.

MIT licensed.
