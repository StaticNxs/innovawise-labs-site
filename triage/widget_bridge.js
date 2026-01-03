(function () {
  const base = (window.__IW_API_BASE__ || "").replace(/\/+$/, "");
  if (!base) {
    console.warn("[IW] Missing window.__IW_API_BASE__ (backend URL).");
    return;
  }

  window.sendMessage = async function (text) {
    try {
      const res = await fetch(`${base}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });

      const data = await res.json().catch(() => ({}));
      const reply = (data.reply || data.response || "Got it.");

      window.dispatchEvent(new CustomEvent("chat:reply", {
        detail: { text: reply }
      }));
    } catch (e) {
      window.dispatchEvent(new CustomEvent("chat:reply", {
        detail: { text: "Network error — please try again." }
      }));
    }
  };
})();
