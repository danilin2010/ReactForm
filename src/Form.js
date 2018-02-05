import React, { Component } from 'react';
import Profession from './Profession.js';
import PhoneNumber from './PhoneNumber.js';
import './form.scss';

class Form extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            profession: '',
            phone: '',
        }
        this.handlePhone=this.handlePhone.bind(this)
        this.handleProfession=this.handleProfession.bind(this)
    }


    handleUserInput  (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmitForm  (e) {
        e.preventDefault();
        console.log({
            name:this.state.name,
            surname:this.state.surname,
            profession:this.state.profession,
            phone:this.state.phone,
        });
    }

    handlePhone(phone){
        this.setState({phone : phone});
    }

    handleProfession(profession){
        this.setState({profession : profession});
    }

    render () {
        return (
            <div className="regform">
                <form onSubmit={this.handleSubmitForm.bind(this)}>
                    <h1><b>Зарегестрируйтесь</b> и начните продавать услуги через интернет сегодня</h1>
                    <div className="regform__line">
                        <div className="regform__col">
                            <label htmlFor="name">Имя</label>
                            <input type="text" className="input" name="name" value={this.state.name} onChange={this.handleUserInput.bind(this)} />
                        </div>
                        <div className="regform__col">
                            <label htmlFor="surname">Фамилия</label>
                            <input type="text" className="input" name="surname"  value={this.state.surname} onChange={this.handleUserInput.bind(this)}/>
                        </div>
                    </div>
                    <div className="regform__line">
                        <label htmlFor="profession">Профессия</label>
                        <Profession  handleProfession={this.handleProfession} />
                    </div>
                    <div className="regform__line">
                        <label htmlFor="phone">Телефон</label>
                        <PhoneNumber handlePhone={this.handlePhone} />
                    </div>
                    <div className="regform__line">
                        <button type="submit" className="button">
                            Зарегестрироваться
                        </button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Form;