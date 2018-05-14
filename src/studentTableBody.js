
import React from 'react';
class StudentTableBody extends React.Component{
		render(){
			return <tbody>{
					this.props.resultsData.map(function(student, i){
						var total = 0;
						var totalSubjects = 0;
						Object.keys(student.marks).forEach(function(key){
								totalSubjects++;
								total+=student.marks[key];
						})
						return <tr key ={i}>
									<td key = {"firstName" + i} >{student.firstName}</td>
									<td key = {"lastName" + i} >{student.lastName}</td>
									<td key = {"percentage" + i} >{(total/totalSubjects).toFixed(2)}</td>
								</tr>
					})
				}
		</tbody>	
		} 
}
export default StudentTableBody;