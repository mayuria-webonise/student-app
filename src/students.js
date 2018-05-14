import React from 'react';
import SearchStudent from './searchStudent'
import StudentTableBody from './studentTableBody'
class Students extends React.Component {
	constructor(){
		super();
		this.state={
			searchedStudent:{}
		}
	}
	render(){
		return <div><SearchStudent resultsData = {this.props.resultsData}/>
					<div>
						<table>
							<TableHeader/>
		   					<StudentTableBody resultsData={this.props.resultsData}/>
						</table>
					</div>
				</div>
	}
}


class TableHeader extends React.Component{
	render(){
		return <thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Percentage</th>

				</tr>
			</thead>
	}
}
export default Students;
