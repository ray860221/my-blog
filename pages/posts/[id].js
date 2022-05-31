import styled from 'styled-components';
import { getAllPostIds, getPostData } from '../../src/posts';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { content, frontmatter } = await getPostData(params.id);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      source: mdxSource,
    },
  };
}

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Post = ({ source }) => {
  return (
    <Wrapper>
      <MDXRemote {...source} />
    </Wrapper>
  );
};

export default Post;
