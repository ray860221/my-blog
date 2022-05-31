import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'posts'); // nowDi/posts

export const getAllPostData = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const fileDetail = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);

    return {
      id: fileName.replace(/\.md$/, ''),
      readingTime: readingTime(fileContents).text,
      ...data,
    };
  });

  return fileDetail;
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  return {
    content,
    frontmatter: {
      title: data.title,
      ...data,
    },
  };
};
