class InputNumber extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <input ref={input=>this.textInput=input}/>
    )
  }
}