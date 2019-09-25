import React,{Component} from 'react'
import './MemeGenerator.css'

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
				this.setState({randImg:memes[0].url})
			});

	}


	render(){
		return(
			<div>
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
					<br/>
					<button onClick={this.generateHandler}>Gen</button>
				</div>
				<br/>
				<div className='meme-container'>
					<img src={this.state.randImg} alt='random meme'/>
					<div className='meme-text top-text'>{this.state.topText}</div>
					<div className='meme-text bottom-text'>{this.state.bottomText}</div>
				</div>
			</div>
			)
	}
}

export default MemeGenerator;