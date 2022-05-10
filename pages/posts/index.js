import { getAllPostData  } from '../../src/posts';
import Link from 'next/link'

export async function getStaticProps() {
	const postData = await getAllPostData();
	return {
		props:  {
			postData,
		},
	};
}

const Post = ({ postData }) => {
    return (
		<>
			{postData.map((post) => (
                <Link key={post.id} href={`/posts/${post.id}`}>
                    <div>
                        <h1 style={{'cursor': 'pointer'}}>{post.title}</h1>
                        <p>{post.date}</p>
                    </div>
                </Link>
            ))}
		</>
  	)
}

export default Post