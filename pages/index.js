import styled from 'styled-components'
import Header from '../components/Header'
import Link from 'next/link'
import { getAllPostData  } from '../src/posts';


export async function getStaticProps() {
	const postData = await getAllPostData();
	return {
		props:  {
			postData,
		},
	};
}

const Wrapper = styled.div``
const Content = styled.div`
	max-width: 800px;
	margin: 0 auto;
`

const Home = ({ postData }) => {
  	return (
    	<Wrapper>
			<Header />
			<Content>
				{postData.map((post) => (
					<div key={post.id}>
						<div>
							<h1 style={{'cursor': 'pointer'}}>{post.title}</h1>
							<p>{post.date}</p>
						</div>
					</div>
				))}
			</Content>
    	</Wrapper>
  	)
}

export default Home