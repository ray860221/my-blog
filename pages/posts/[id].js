import { getAllPostIds, getPostData  } from '../../src/posts';

export async function getStaticPaths() {
	const paths = getAllPostIds()

	return {
		paths,
		fallback: false
	}
}
export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);

	return {
		props: {
			postData,
		},
	};
}

const Post = ({ postData }) => {

    return (
		<>
			<div>{postData.title}</div>
			<div>{postData.id}</div>
			<div>{postData.date}</div>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</>
  	)
}

export default Post