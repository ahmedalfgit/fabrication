import React, { Component } from 'react';
import facilityIcon from '../assets/facility-icon.png';
import designIcon from '../assets/design-icon.png';
import laserIcon from '../assets/laser-icon.png';
import metalFormingIcon from '../assets/metal-forming-icon.png';
import machiningIcon from '../assets/machining-icon.png';
import weldingIcon from '../assets/welding-icon.png';
import Select from 'react-select';

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
      'https://player.vimeo.com/video/453324225?',
      'https://player.vimeo.com/video/453324029',
      'https://player.vimeo.com/video/453395125',
      'https://player.vimeo.com/video/453396311',
      'https://player.vimeo.com/video/453395627',
      'https://player.vimeo.com/video/453396452',
    ],

    //video names
    videoNames: [
      'Facility',
      'Design',
      'Laser Cutting',
      'Bending',
      'Machining',
      'Welding',
    ],

    //video bullet points attached to videos
    videoBulletPoints: [
      'Size of facility',
      'SolidWorks, AutoCAD, Illustrator, and Fusion 360',
      'Cut up to a 6’ x 12’ sheet of material | ½” thick mild steel, stainless steel , or aluminum',
      ' ½” thick and up to 14 feet long | 40-ton GOFORM Press Brake',
      " 2' x 25' workable area | drilling, milling, and tapping.",
      'Stick, MIG, TIG, and Robotic welding',
    ],

    //list icons
    photos: [
      facilityIcon,
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

  handleFormName = (event) => {
    this.setState({
      emailForm: {
        ...this.state.emailForm,
        name: event.target.value,
      },
    });
    console.log('Name value ' + this.state.emailForm.name);
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
      <div className="row project-row">
        <div className="container project-row-container">
          <div className="row">
            <div className="project-col col-md-12 mt-md-1">
              <div className="row project-icons-row">
                <div
                  className={`col-12 project-list-col ${
                    isBoxVisible ? '' : 'show'
                  }`}
                >
                  <div className="row pt-md-3 mt-md-3 project-list-col-row justify-content-center">
                    <ul className="project-list">
                      <li className="project-item text-center">
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
            </div>
            <div className="col-md-12 video-col pt-md-2">
              <li className="video-item design-video">
                {/* <h1>{this.state.videoNames[active]}</h1> */}
                <iframe
                  src={videos[active]}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  className="pt-4 h-229px"
                ></iframe>
                <ul className="list pt-3">
                  <li className="item text-dark">
                    {this.state.videoBulletPoints[active]}
                  </li>
                </ul>
              </li>
              <div className="row video-col-row">
                <div className="col-md-12 video-col-row-col">
                  <ul className="video-list"></ul>
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
