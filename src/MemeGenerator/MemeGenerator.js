import React,{Component} from 'react'

class MemeGenerator extends Component{
	constructor(props){
		super(props);
		this.state={
			topText:'',
			buttonText:'',
			imgArr:[],
			randImg:''
		}
	}

	handleChange =(event)=>{
		this.setState({
			[event.target.name]:event.target.value
		})
	}

	generateHandler=()=>{
		let rand = Math.floor(Math.random()*this.state.imgArr.length);
		this.setState({randImg:this.state.imgArr[rand].url})
	}


	componentDidMount(){
		fetch('https://api.imgflip.com/get_memes')
			.then(data=>data.json())
			.then((data)=>{ 
				const memes = data.data.memes;
				this.setState({ imgArr:memes});
			});

	}


	render(){
		return(
			<div>
				<input 
					type='text' 
					name='topText'
					placeholder='top text' 
					value={this.state.top} 
					onChange={this.handleChange}
					/>

				<input 
					type ='text' 
					name='bottomText'
					placeholder='Bottom text' 
					value={this.state.bottom}
					onChange={this.handleChange}
					/>

				<button onClick={this.generateHandler}>Gen</button>
				<br/>
				<div>
					<img src={this.state.randImg} alt='random meme' style={{height:250, width:'auto'}}/>
					<p>{this.state.topText}</p>
					<p>{this.state.bottomText}</p>
				</div>
			</div>
			)
	}
}

export default MemeGenerator;