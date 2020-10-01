import Layout from './components/layout';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      message: ''
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch('/api/');
    const json = await response.json();

    this.setState({
      message: json.message
    })
  }

  render() {
    return (
      <Layout>
        <div className="p-2">
          Hello World
          <br />
          <h1>{this.state.message}</h1>
        </div>
      </Layout>
    );
  }
}

export default Index;