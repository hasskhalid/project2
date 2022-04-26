import React from 'react';
import ReactDOM from 'react-dom';
import axiosAPI from "./axiosAPI";
import Table from "./board";
import './style/App.css';

const LARGE_DESKTOP_BREAKPOINT = 1366;
const SMALL_DESKTOP_BREAKPOINT = 1024;
const TABLET_BREAKPOINT = 768;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      view: "grid",
      posts: [],
      errorMessage: '',
      browserwidth: 0,
      breakpoint: 'large-desktop',
    };
  }

  componentDidMount() {
    this.getNewTasks();

    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize = () => {
    const browserWidth = window.innerWidth;
    let breakpoint = 'large-desktop';

    if(browserWidth < LARGE_DESKTOP_BREAKPOINT && browserWidth >= SMALL_DESKTOP_BREAKPOINT) {
      breakpoint = 'small-desktop';
    } else if(browserWidth < SMALL_DESKTOP_BREAKPOINT && browserWidth >= TABLET_BREAKPOINT) {
      breakpoint = 'tablet';
    } else if(browserWidth < TABLET_BREAKPOINT) {
      breakpoint = 'mobile';
    }

    this.setState({ breakpoint, browserWidth });
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    const {view} = this.state;

    if(prevState.view !== view) {
      this.render()
    }
  }

  async getNewTasks() {

    try {
      const response = await axiosAPI.getTasks();
      this.setState({posts: response});
    } catch (error) {
      this.setState({error: error.message});
    }
  }

  onFormChange = (view) => {
    this.setState({view});
  };

  changeStatus = (value) => {
    const {posts} = this.state;
    const arr = value.split(",");
    posts[arr[0] - 1].column = arr[1];
    this.setState({posts: posts, view: "grid"});
  };

  render(){
    const{posts} = this.state;

    return(
        <div className={ 'container ${this.state.breakpoint}' }>
          <h1 className={"Titleheader"}>To-Do or Not To-Do</h1>
          <h1 className={"Subheader"}>Task Board</h1>
          <h3 className={"Viewheader"}>Grid View</h3>
          <Table changeStatus={this.changeStatus} post = {posts}/>
        </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

export default App;

