const inquirer = require('inquirer');
const clear = require('clear');
const moment = require('moment');
const chalk = require('chalk');
const slugify = require('slugify');

const fs = require('fs');
const path = require('path');

(() => {
  clear();
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Please type the title of the blog:',
        validate: (input) =>
          !!input.length ? true : 'Please enter a blog title.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please type the description of the blog:',
        validate: (input) =>
          !!input.length ? true : 'Please enter a blog description.',
      },
    ])
    .then((answers) => {
      const { title, description } = answers;
      const slug = slugify(title, { lower: true }) + '.md';

      let newBlogPath;
      try {
        newBlogPath = path.join(process.cwd(), 'posts', slug);
      } catch (err) {
        throw new Error(`🔥🔥🔥 Sorry, ${title} is an invalid blog title.`);
      }

      if (fs.existsSync(newBlogPath)) {
        throw new Error(`🔥🔥🔥 Sorry, the blog ${slug} already exists.`);
      }

      const id = fs.readdirSync(path.join(process.cwd(), 'posts')).length + 1;

      const date = moment().format('MMMM DD YYYY');
      const metaData = [
        '---',
        `id: ${id}`,
        `title: ${title}`,
        `description: ${description}`,
        `date: ${date}`,
        '---',
        '',
        `## ${title}`,
        '',
        `### Subtitle`,
        'Subtexts goes here...',
        '',
        '<!--- MARKDOWN LINKS -->',
        '',
        '[example]: https://www.example.com',
      ];

      fs.writeFileSync(newBlogPath, metaData.join('\n'));

      console.log(`🙌 Created a new blog, ${slug} at ${newBlogPath}`);
      console.log();
      console.log('🗒️  Contents of the blog:');
      console.log();
      console.log(chalk.yellow(metaData.join('\n')));
    })
    .catch((err) => console.error(chalk.red(err)));
})();
