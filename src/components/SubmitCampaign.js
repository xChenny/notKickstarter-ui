import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Terms from './TermsOfService'
import axios from 'axios'

class submit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalClass: 'modal',
      picPath: ''
    }
  }

  onClickTos = e => {
    e.preventDefault()
    switch(this.state.modalClass) {
      case 'modal':
        this.setState({modalClass: 'modal is-active'})
      case 'modal is-active':
        this.setState({modalClass: 'modal'})
    }
    console.log('changed')
  }

  handlePictureUpload() {
    if (this.refs.campForm.pic.files[0]) {
      this.setState({picPath: this.refs.campForm.pic.files[0].name})
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log('submitting!')
    const title = this.refs.campForm.name.value,
          org = this.refs.campForm.org.value,
          email = this.refs.campForm.email.value,
          phone = this.refs.campForm.phone.value,
          type = this.refs.campForm.type.value,
          desc = this.refs.campForm.desc.value,
          author = this.refs.campForm.author.value,
          pic = this.refs.campForm.pic.files[0].name,
          explain = this.refs.campForm.explain.value

    const formData = {title, org, email, phone, type, desc, author, pic}
    const file = {file: this.refs.campForm.pic.files[0]}
    console.log(file)

    const s3upload = await axios.post("http://localhost:5000/images", file)
    const data = await axios.post("http://localhost:3001/campaigns", formData)
    console.log(data)
    // I think this should be here in order not to mess up react router
    // but its low priority bc its not breaking anything
    // this.history.pushState(null, '/campaigns')
    window.location.replace('/account')
  }

  render() {
    return (
      <div className="section">
        <h1 className="title">Submit a Campaign</h1>
        <hr />
        <div className="grid">
          <form ref='campForm'>

            <div className="field">
              <label className="label">Name of Campaign</label>
              <div className="control">
                <input className="input" type="text" placeholder="Name" name='name' />
              </div>
            </div>

            <div className="field">
              <label className="label">Short Description of Campaign</label>
              <div className="control">
                <input className="input" type="text" placeholder="Name" name='desc' />
              </div>
            </div>

            <div className="field">
              <label className="label">Organization</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Name of organization" name='org' />
                <span className="icon is-small is-left">
                  <i className="fas fa-users"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input className="input" type="email" placeholder="Email address" name='email'/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Phone</label>
              <div className="control has-icons-left">
                <input className="input" type="tel" placeholder="Phone number" name='phone' />
                <span className="icon is-small is-left">
                  <i className="fas fa-mobile"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Charity or Investment?</label>
              <div className="control">
                <div className="select">
                  <select name='type'>
                    <option>Charity</option>
                    <option>Investment</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Explain the Cause</label>
              <div className="control">
                <textarea className="textarea" placeholder="Description of the cause" name='explain'></textarea>
              </div>
            </div>

            <div className="field">
              <label className="label">Campaign Picture</label>
              <div className="file has-name">
                <label className="file-label">
                  <input className="file-input" type="file" accept=".png,.jpg,.jpeg" name="pic" onChange={this.handlePictureUpload.bind(this)} />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span className="file-name">
                    {this.state.picPath}
                  </span>
                </label>
              </div>
            </div>

            {/* <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                  I agree to the 
                  <div className={this.state.modalClass}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                      <Terms onClick={this.onClickTos} />
                    </div>
                    <a href="#" className="modal-close" onClick={e => this.onClickTos(e)}> terms and conditions</a>
                  </div>
                </label>
              </div>
            </div> */}

            <input type='text' name='author' value='1' style={{display: `none`}} readOnly/>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" onClick={e => this.handleSubmit(e)}>Submit</button>
              </div>
              <div className="control">
                <button className="button is-text">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default submit