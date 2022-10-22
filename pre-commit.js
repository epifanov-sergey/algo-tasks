const fs = require('fs');
const path = require('path');

const getAllFilesInDir = async (path) => await fs.promises.readdir(path, { withFileTypes: true });

const getStats = async () => {
  const basePath = __dirname;
  const excludedDirs = ['node_modules', '.git', '.idea', 'leetcode'];
  const allFiles = await getAllFilesInDir(basePath);
  const dirsWithSolutions = allFiles.filter(
    (item) => item.isDirectory() && !excludedDirs.includes(item.name)
  );

  const languages = dirsWithSolutions.map((dir) => dir.name);
  const difficulties = {};

  for (const dir of dirsWithSolutions) {
    const difficultiesPath = path.resolve(basePath, dir.name);
    const difficultiesDirs = await getAllFilesInDir(difficultiesPath);

    for (const diffDir of difficultiesDirs) {
      const solutionsDirs = await getAllFilesInDir(path.resolve(difficultiesPath, diffDir.name));

      if (difficulties[diffDir.name] === undefined) {
        difficulties[diffDir.name] = 0;
      }

      difficulties[diffDir.name] += solutionsDirs.length;
    }
  }

  return { languages, difficulties };
};

const formatStats = ({ languages, difficulties }) => {
  const arDifficulties = [];

  Object.keys(difficulties).forEach((item) => {
    arDifficulties.push(`${item}: ${difficulties[item]}`);
  });

  return { languages: languages.join(', '), difficulties: arDifficulties.join(', ') };
};

const generateReadme = async ({ languages, difficulties }) => {
  const basePath = path.resolve(__dirname, 'readme.base');
  const readmePath = path.resolve(__dirname, 'readme.md');
  const content = await fs.promises.readFile(basePath);

  await fs.promises.writeFile(
    readmePath,
    content.toString().replace('#LANGUAGES#', languages).replace('#DIFFICULTIES#', difficulties)
  );
};

const main = async () => {
  const stats = await getStats();

  await generateReadme(formatStats(stats));
};

main().finally(() => process.exit());
