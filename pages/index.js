import Link from 'next/link'

const Home = () => {
  	return (
    	<>
			<h1>Home</h1>
			<Link href={'/posts'}>
				<a><h1>Post</h1></a>
			</Link>
    	</>
  	)
}

export default Home