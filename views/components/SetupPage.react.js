import React, { PropTypes, Component } from 'react'
import deets from 'deets'
import update from 'react-addons-update'

function stopDefault(e){
  if ( e && e.preventDefault ) 
      e.preventDefault(); 
  else
      window.event.returnValue = false; 
}

class SetupPage extends Component{
	constructor(props){
		super(props);
		this.state = {searchValue: "s"};
	}

	componentWillReceiveProps(nextProps) {
	    this.props = nextProps;
	}

	handlesubmit(e){
		stopDefault(e);
		console.log('ppp')
	}

	handleChangeSearch(e){
		this.setState(update(this.state,{searchValue:{$set: e.target.value}}));
	}

	render(){
		const {citys} = this.props;
		let szC = [];
		console.log('citys',citys)

		for(let i=0;i<citys.length;i++){
			if (szC.indexOf(citys[i].$.d4) < 0) {
				szC.push(citys[i].$.d4);
			};
		}

		return <div style={{width:deets().size.width*5/5,height:deets().size.height}}>
			<div>
				<form onSubmit={this.handlesubmit.bind(this)} method="post" action="/">
					<input className="form-control input-sm" type="search" placeholder="搜索🔍" value={this.state.searchValue} onChange={this.handleChangeSearch.bind(this)}></input>
				</form>
			</div>
		</div>
	}

	componentDidMount(){

	}

	componentDidUpdate(){

	}
}

SetupPage.propTypes = {

}

export default SetupPage