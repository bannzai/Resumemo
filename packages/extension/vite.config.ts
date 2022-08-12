import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Resumemo",
  version: "1.0.0",
  // Ref: https://developer.chrome.com/docs/extensions/mv3/declare_permissions/
  permissions: ["bookmarks", "tabs", "activeTab", "scripting"],
  action: {
    default_popup: "popup.html",
  },
  content_scripts: [
    {
      matches: ["*://findy-code.io/*"],
      run_at: "document_start",
      js: ["content.js"],
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
