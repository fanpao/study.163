class InputNumber extends Component{
  constructor(props){
    super(props);
    this.state={value:props.value};
    this.handleValue = this.handleValue.bind(this);
  }
  render(){
    return(
      <input value={this.state.value} onChange={this.handleValue}/>
    )
  }
  handleValue(e){
    this.setState({value:e.target.value})
  }
}