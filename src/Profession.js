import React,{ Component } from 'react';
import Autocomplete from 'react-autocomplete';

class Profession extends Component {

    constructor (props) {
        super(props)
        this.state = {
            value: '',
        }
        this.setValue=this.setValue.bind(this)
    }

    setValue(val){
        this.setState({ value: val })
        this.props.handleProfession(val);
    }


    render() {
        return (
            <Autocomplete
                items={[
                    { id: 'Парихмахер', label: 'Парихмахер' },
                    { id: 'Парихмахер-Визажист', label: 'Парихмахер-Визажист' },
                    { id: 'Слесарь', label: 'Слесарь' },
                    { id: 'Слесарь-Сантехник', label: 'Слесарь-Сантехник' },
                    { id: 'Сварщик', label: 'Сварщик' },
                    { id: 'Сварщик-Бухгалтер', label: 'Сварщик-Бухгалтер' },
                ]}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                    <div
                        className="inputItem"
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                    >
                        {item.label}
                    </div>
                }
                wrapperStyle= {{
                    display: 'block'
                }}
                menuStyle= {{
                    borderRadius: '3px',
                    background: '#fff',
                    padding: '2px 0',
                    fontSize: '100%',
                    position: 'fixed',
                    overflow: 'auto',
                    maxHeight: '50%',
                    zIndex: '600',
                    borderBottom: '1px solid #c8c8c8',
                    borderLeft: '1px solid #c8c8c8',
                    borderRight: '1px solid #c8c8c8',
                    textAlign: 'left',
                }}
                inputProps={{className: 'input',name: "profession"}}
                value={this.state.value}
                onChange={(e)=>this.setValue(e.target.value)}
                onSelect={value=>this.setValue(value)}
            />
        )
    }
}

export default Profession;