#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import readline from "node:readline";

// Required to get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple interactive prompt helper
function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (answer) => {
    rl.close();
    resolve(answer);
  }));
}

async function resolveLanguageOption(cliLang) {
  if (cliLang) {
    const val = String(cliLang).trim().toLowerCase();
    if (["ts", "typescript"].includes(val)) return "ts";
    if (["js", "javascript"].includes(val)) return "js";
    console.log(chalk.yellow(`⚠️  Unknown language '${cliLang}', defaulting to TypeScript.`));
    return "ts";
  }

  const answer = await ask("Select language (ts/js) [ts]: ");
  const normalized = String(answer || "").trim().toLowerCase();
  if (["js", "javascript"].includes(normalized)) return "js";
  return "ts"; // default
}

program
  .name("create-nodejs-app")
  .argument("<project-name>", "Name of your project")
  .option("-l, --lang <lang>", "Language: ts or js (default ts)")
  .action(async (projectName, options) => {
    const targetPath = path.join(process.cwd(), projectName);
    const lang = await resolveLanguageOption(options?.lang);
    const templateDirName = lang === "ts" ? "node-base-template-ts" : "node-base-template-js";
    const templatePath = path.join(__dirname, "../templates", templateDirName);

    try {
      if (await fs.pathExists(targetPath)) {
        console.log(chalk.red("❌ Project folder already exists."));
        return;
      }

      if (!(await fs.pathExists(templatePath))) {
        console.log(chalk.red(`❌ Template not found: ${templateDirName}`));
        return;
      }

      await fs.copy(templatePath, targetPath);
      console.log(chalk.green(`✅ ${lang.toUpperCase()} project created!`));
      console.log(`👉 cd ${projectName}`);
      console.log("👉 npm install");
    } catch (err) {
      console.error(chalk.red("❌ Failed to create project"), err);
    }
  });

program.parse();
