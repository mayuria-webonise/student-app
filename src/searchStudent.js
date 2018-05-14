
import React from 'react';

class SearchStudent extends React.Component{
	constructor(){
		super();
		this.state = {
				searchText:""
			}
		this.searchStudentRecord =this.searchStudentRecord.bind(this);
		this.updateSearchText =this.updateSearchText.bind(this);

	}
	searchStudentRecord(e){
		var student = this.props.resultsData.map(student=>{
			if((student.firstName === this.state.searchText) || (student.lastName === this.state.searchText)){
				return student;
			}
			return false;
		})
			console.log(student);
	}

	updateSearchText(event){
		this.setState({
			searchText:event.target.value
		})
	}
	render(){
		return <div><input type="text" name="Student Name" value={this.state.searchText} onChange={this.updateSearchText}/>
		<button onClick={this.searchStudentRecord}>Search</button></div>
	}
}
export default SearchStudent;