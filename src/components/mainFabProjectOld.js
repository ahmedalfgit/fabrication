import React, { Component } from 'react';
import Select from 'react-select';

import designIcon from '../assets/design-icon.png';
import laserIcon from '../assets/laser-icon.png';
import metalFormingIcon from '../assets/metal-forming-icon.png';
import machiningIcon from '../assets/machining-icon.png';
import weldingIcon from '../assets/welding-icon.png';

const options = [
	{ value: 'desing', label: 'Design' },
	{ value: 'laser cutting', label: 'Laser cutting' },
	{ value: 'bending', label: 'Bending' },
	{ value: 'machining', label: 'Machining' },
	{ value: 'welding', label: 'Welding' },
];

class FabProject extends Component {
	state = {
		//video url links
		videos: [
			'https://player.vimeo.com/video/331323695',
			'https://player.vimeo.com/video/382234067',
			'https://player.vimeo.com/video/380594758',
			'https://player.vimeo.com/video/380576380',
			'https://player.vimeo.com/video/389857569',
		],

		//video names
		videoNames: ['Design', 'Laser Cutting', 'Bending', 'Machining', 'Welding'],

		//video bullet points attached to videos
		videoBulletPoints: [
			'SolidWorks, AutoCAD, Illustrator, and Fusion 360',
			'Cut up to a 6’ x 12’ sheet of material | ½” thick mild steel, stainless steel , or aluminum',
			' ½” thick and up to 14 feet long | 40-ton GOFORM Press Brake',
			" 2' x 25' workable area | drilling, milling, and tapping.",
			'Stick, MIG, TIG, and Robotic welding',
		],

		//list icons
		photos: [
			designIcon,
			laserIcon,
			metalFormingIcon,
			machiningIcon,
			weldingIcon,
		],
		active: 0,

		//collect the project list
		selectedOption: null,

		emailForm: {
			name: '',
			email: '',
			phone: '',
			summary: '',
		},

		//show the fab form or hide it.
		isBoxVisible: true,
	};

	showVideo = (index) => {
		this.setState({
			active: index,
		});
	};

	projectInfoSubmmit = () => {
		console.log('submit info');
	};

	emailValidation = (e) => {
		handleFormEmail;
	};

	handleFormName = (event) => {
		this.setState({
			emailForm: {
				...this.state.emailForm,
				name: event.target.value,
			},
		});
		console.log('Name value ' + this.state.emailForm.name);
	};

	handleFormEmail = (event) => {
		this.setState({
			emailForm: {
				...this.state.emailForm,
				email: event.target.value,
			},
		});
		console.log('Email value ' + this.state.emailForm.email);
	};

	handleFormPhone = (event) => {
		this.setState({
			emailForm: {
				...this.state.emailForm,
				phone: event.target.value,
			},
		});
		console.log('Phone value ' + this.state.emailForm.phone);
	};

	handleFormSummary = (event) => {
		this.setState({
			emailForm: {
				...this.state.emailForm,
				summary: event.target.value,
			},
		});
		console.log('Summary value ' + this.state.emailForm.summay);
	};

	handleProjectList = (selectedOption) => {
		this.setState({ selectedOption }, () =>
			console.log(`Option selected `, this.state.selectedOption)
		);
	};

	toggleForm = () => {
		this.setState((prevState) => ({
			isBoxVisible: !prevState.isBoxVisible,
		}));
	};

	handleEmailQuery = (e) => {
		e.preventDefault();
		const name = this.state.emailForm.name;
		console.log(`name of the form input is: ${name}`);
		this.setState({
			emailForm: {
				...this.state.emailForm,
				name: '',
				email: '',
				phone: '',
				summary: '',
			},
		});
		this.setState({ selectedOption: null });
		const sendMessage = document.getElementById('sendMessage');
		sendMessage.innerHTML = `Thank you ${this.state.emailForm.name}, we will get back to you soon`;
	};

	render() {
		const {
			videos,
			videoNames,
			videoBulletPoints,
			photos,
			active,
			emailForm,
			selectedOption,
			isBoxVisible,
		} = this.state;

		return (
			<div className='row project-row pl-5'>
				<div className='container'>
					<div className='row'>
						<div className='project-col col-md-7 mt-md-3'>
							<div className='row project-icons-row pt-md-5 mt-md-5'>
								<div className='col-md-12 project-header-col'>
									<h1 className='text-left font-weight-bold'>
										Start Your Project
									</h1>
								</div>
								<div
									className={`col-12 project-list-col ${
										isBoxVisible ? '' : 'show'
									}`}
								>
									<div className='row pt-md-5 mt-md-5 project-list-col-row'>
										<ul className='project-list'>
											<li className='project-item text-center'>
												{photos.map((photos, index) => (
													<img
														className={index === active ? 'active' : ''}
														key={photos}
														onClick={this.showVideo.bind(this, index)}
														src={photos}
													/>
												))}
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='row project-details text-center p-5 m-4'>
								<div className='col-12'>
									<form
										id='fabForm'
										onSubmit={this.handleEmailQuery}
										className={`fab-form ${isBoxVisible ? '' : 'show'}`}
									>
										<input
											type='text'
											value={this.state.emailForm.name}
											onChange={this.handleFormName.bind(this)}
											placeholder='Name'
											className='w-100 p-2 project-input'
											project-input
										/>

										<input
											type='email'
											value={this.state.emailForm.email}
											onChange={this.handleFormEmail}
											placeholder='Email'
											className='w-100 p-2 project-input'
										/>

										<input
											type='tel'
											value={this.state.emailForm.phone}
											onChange={this.handleFormPhone}
											placeholder='Phone'
											className='w-100 p-2 project-input'
											project-input
										/>

										<textarea
											type='text'
											value={this.state.emailForm.summary}
											onChange={this.handleFormSummary}
											placeholder='Project details'
											className='w-100 p-2 project-input text-area'
											project-input
										/>
										<Select
											isMulti={true}
											value={selectedOption}
											onChange={this.handleProjectList}
											options={options}
											textField='text'
											placeholder='My project needs:'
											className=''
										/>
										<h6 className='send-message pt-3' id='sendMessage'></h6>
										<input
											type='submit'
											value={'Send'}
											className='btn btn-primary w-50 p-2 mt-4'
										/>
									</form>
									<div
										className='row justify-content-center pt-5'
										className={`row justify-content-center pt-5 project-details-row ${
											isBoxVisible ? '' : 'show'
										}`}
									>
										<div className='col-12'>
											<button
												className='btn btn-primary w-50 p-2'
												onClick={this.toggleForm.bind(this)}
											>
												Project details
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-5 video-col'>
							<li className='video-item design-video'>
								<h1>{this.state.videoNames[active]}</h1>
								<iframe
									src={videos[active]}
									width='580'
									height='360'
									frameBorder='0'
									allow='autoplay; fullscreen'
									allowFullScreen
								></iframe>
								<ul className='list'>
									<li className='item text-white'>
										{this.state.videoBulletPoints[active]}
									</li>
								</ul>
							</li>
							<div className='row video-col-row'>
								<div className='col-md-12 video-col-row-col'>
									<ul className='video-list'></ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FabProject;
