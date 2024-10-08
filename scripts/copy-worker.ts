import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.mjs');

const targetDir = 'public';
const targetPath = path.join(targetDir, 'pdf.worker.mjs');

fs.cpSync(pdfWorkerPath, targetPath, { recursive: true });
