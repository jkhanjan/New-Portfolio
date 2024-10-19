import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    viteCompression({
      algorithm: "brotliCompress", // You can also use 'gzip' or 'deflate'
      ext: ".br", // Extension for Brotli compressed files
      threshold: 10240, // Compress files larger than 10KB
      deleteOriginFile: false, // Optionally, you can delete original files
    }),
  ],
});
