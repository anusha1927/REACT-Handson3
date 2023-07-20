import React, { Component } from 'react';
import './styles.css';
import DisplayForm from './DisplayForm';

class FormClass extends Component {
	constructor() {
		super();
		this.state = {
			Name: '',
			Dept: '',
			Rating: '',
			isActive: false,
			EmpData: [],
		};
	}

	changeHandle = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	clickHandle = () => {
		let newObj = {
			Name: this.state.Name,
			Dept: this.state.Dept,
			Rating: this.state.Rating,
		};
		this.state.EmpData.push(newObj);
		this.setState({
			EmpData: this.state.EmpData,
			Name: '',
			Dept: '',
			Rating: '',
			isActive: true,
		});

		//console.log(this.state.EmpData);
	};

	changeToggle = () => {
		this.setState({ isActive: !this.state.isActive });
	};

	render() {
		return (
			<div>
				{this.state.isActive ? (
					<DisplayForm
						data={this.state.EmpData}
						value={this.changeToggle}
					></DisplayForm>
				) : (
					<>
						<h1>EMPLOYEE FEEDBACK FORM</h1>
						<div className="form">
							<div>
								<label htmlFor="name">Name : </label>
								<input
									type="text"
									id="name"
									name="Name"
									value={this.state.Name}
									onChange={this.changeHandle}
								/>
							</div>
							<div>
								<label htmlFor="dept">Department : </label>
								<input
									type="text"
									id="dept"
									name="Dept"
									value={this.state.Dept}
									onChange={this.changeHandle}
								/>
							</div>
							<div>
								<label htmlFor="rating">Rating : </label>
								<input
									type="text"
									id="rating"
									name="Rating"
									value={this.state.Rating}
									onChange={this.changeHandle}
								/>
							</div>
							<div>
								<button type="button" onClick={this.clickHandle}>
									Submit
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		);
	}
}

export default FormClass;
