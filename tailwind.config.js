export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "var(--ink)", paper: "var(--paper)", dim: "var(--dim)", accent: "var(--accent)" },
    fontFamily: { body: ["Georgia", "serif"], sys: ["ui-monospace", "Menlo", "monospace"] } } },
};
