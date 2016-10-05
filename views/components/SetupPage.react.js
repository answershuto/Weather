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
		this.state = {searchValue: "",resCitys: []};
	}

	componentWillReceiveProps(nextProps) {
	    this.props = nextProps;
	}

	handlesubmit(e){
		stopDefault(e);
		const {citys} = this.props;
		let szRes = [];

		if (this.state.searchValue !== "") {
			for(let i=0;i<citys.length;i++){
				if (citys[i].$.d2.indexOf(this.state.searchValue) >= 0) {
					szRes.push(citys[i].$)
				};
			}
		};
		
		this.setState(update(this.state,{resCitys:{$set: szRes}}));
	}

	handleChangeSearch(e){
		this.setState(update(this.state,{searchValue:{$set: e.target.value}}));
	}

	render(){
		this.state.searchValue

		return <div style={{width:deets().size.width*5/5,height:deets().size.height}}>
			<div>
				<form onSubmit={this.handlesubmit.bind(this)} method="post" action="/">
					<input className="form-control input-sm" type="search" placeholder="搜索🔍" value={this.state.searchValue} onChange={this.handleChangeSearch.bind(this)}></input>
				</form>
				<div></div>
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