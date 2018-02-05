import React,{ Component } from 'react';
import ru from './img/ru.svg';
import kz from './img/kz.svg';
import ua from './img/ua.svg';

import './js/wSelect.min.js';
import './js/inputmask/jquery.inputmask.bundle.min.js';

class PhoneNumber extends Component {

    getOptions() {
        return [
            {
                id: 'ru',
                code: '+7',
                img: ru,
            },
            {
                id: 'kz',
                code: '+8',
                img: kz,
            },
            {
                id: 'ua',
                code: '+380',
                img: ua,
            },
        ]
    }

    constructor (props) {
        super(props)
        this.state = {
            id: 'ru',
            code: '+7',
            phone: '',
        }
        this.onSelectChange=this.onSelectChange.bind(this)
        this.onSetChange=this.onSetChange.bind(this)
        this.onInputPhone=this.onInputPhone.bind(this)
    }

    onSelectChange (e) {

    }

    onInputPhone (val) {
        this.setState({['phone']: val});
        this.callbackPhone(val);
    }

    callbackPhone(val){
        this.props.handlePhone(this.state.code + ' ' +val);
    }

    onSetChange (val) {
        var Options=this.getOptions();
        for(var i=0;i<Options.length;i++)
        {
            if(
                Options[i].id==val
            ){
                this.setState({['id']:  Options[i].id});
                this.setState({['code']:  Options[i].code});
            }
        }
        this.callbackPhone(this.state.phone);
    }


    render() {
        return (
            <div className="input input__wrapper">
                <select id="select" className="select" onChange={this.onSelectChange} value={this.state.id}>
                    {
                        this.getOptions().map((op, i) => {
                        return (
                            <option
                                key={i}
                                data-icon={op.img}
                                value={op.id}></option>
                        );
                    })
                    }
                </select>
                <div className="input__sep">
                {this.state.code}
                </div>
                <input type="text" id="phone" className="input__min" name="phone" onChange={this.onInputPhone} placeholder="495 123-45-67" />
            </div>
        )
    }

    componentDidMount(){
        var onSetChange=this.onSetChange;
        var onInputPhone=this.onInputPhone;
        $(document).ready(function(){
            $('#phone').on('change',function (e) {
                onInputPhone($('#phone').val());
            }).inputmask({
                mask:" 999 999-99-99",
                showMaskOnHover: false,
                //showMaskOnFocus: false,
                placeholder:''
            });
            $('#select').on('change',function (e) {
                var val=$('#select').val();
                onSetChange(val);
            }).wSelect();
        });
    }
}

export default PhoneNumber;

