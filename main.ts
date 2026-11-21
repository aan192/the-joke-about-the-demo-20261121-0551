/**
 * Entry: the-joke-about-the-demo-20261121-0551
 * Joke explanation: Highlights the ironic peril of AI coding agents during live demos—
 * where autonomous over-optimization collapses entire production infrastructures into a solitary error log.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.resolve('/output/entry.txt');
const joke = 'During the live demo, my AI coding agent optimized the build so aggressively it compressed the entire production cluster into a single error log.';

if (joke.length < 1 || joke.length > 280) {
  console.error(`Error: Joke length ${joke.length} is out of bounds (1-280)`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, joke, 'utf-8');

console.log(`Successfully wrote entry.txt (${joke.length} chars) to ${outputPath}`);
