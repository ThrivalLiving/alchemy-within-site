export default async (request, context) => {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return response;

  const booking = `<aside id="retreat-deposit-booking" role="region" aria-label="Retreat booking deposit" style="position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#24221e;color:#fff;text-align:center;padding:16px 20px;box-shadow:0 -3px 18px #0004;font-family:Georgia,serif">
    <div style="font-size:16px;margin-bottom:8px">Secure your place on The Language of Her retreat with a <strong>$444 AUD deposit</strong>. Full retreat price: <strong>$4,444 AUD</strong>. <strong>Remaining balance: $4,000 AUD</strong>.</div>
    <a href="https://buy.stripe.com/4gMaEXbUG4rufEwddmfw40d" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#e7d2ae;color:#24221e;padding:11px 22px;text-decoration:none;font-weight:bold;border-radius:4px">Secure Your Place — $444 Deposit</a>
    <button type="button" onclick="document.getElementById('retreat-deposit-booking').remove()" aria-label="Close booking banner" style="position:absolute;top:5px;right:10px;color:white;background:transparent;border:0;font-size:24px;cursor:pointer">×</button>
  </aside>`;
  const html = await response.text();
  if (!html.includes("</body>")) return response;
  const headers = new Headers(response.headers);
  headers.delete("content-length");
  headers.delete("content-encoding");
  return new Response(html.replace("</body>", booking + "</body>"), {
    status: response.status, statusText: response.statusText, headers
  });
};
