import React, { Component } from 'react';

class DisplayForm extends Component {
	constructor(props) {
		super(props);
		//console.log(props.data);
		console.log(props);
	}
	render() {
		return (
			<div>
				<h1>EMPLOYEE FEEDBACK DATA</h1>
				<div className="container">
					{this.props.data.map((item, index) => {
						return (
							<div key={index} className="box">
								Name : {item.Name} | Department : {item.Dept} | Rating :{' '}
								{item.Rating}
							</div>
						);
					})}
				</div>

				<footer>
					<button type="button" onClick={this.props.value}>
						Go Back
					</button>
				</footer>
			</div>
		);
	}
}

export default DisplayForm;
