export async function onRequest(context) {
  const url = new URL(context.request.url);
  const target = 'https://iw-triage-backend.onrender.com' + url.pathname + url.search;

  const init = {
    method: context.request.method,
    headers: context.request.headers,
  };

  if (!['GET', 'HEAD'].includes(context.request.method)) {
    init.body = context.request.body;
  }

  const response = await fetch(target, init);

  const newHeaders = new Headers(response.headers);
  newHeaders.delete('access-control-allow-origin');
  newHeaders.delete('access-control-allow-headers');
  newHeaders.delete('access-control-allow-methods');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
