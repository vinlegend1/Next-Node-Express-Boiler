
const Index = (props) => {
    return (
        <div>
            hello world

            <h1>{props.message}</h1>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/api/')
    const json = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        message: json.message
      }
    }
 }
  

export default Index;