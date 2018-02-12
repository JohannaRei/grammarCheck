import * as React from 'react';
import uuid from 'uuid';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: '',
            languages: [],
            selectedLanguage: 'en-US',
            result: {}
        };
    }

    componentDidMount = () => {
        let url = "https://languagetool.org/api/v2/languages";

        fetch(url).then(res => res.json())
        .catch(error => console.log(error))
        .then(response => { 
            this.setState({languages: response}); 
        });
    }

    onChange = (event) => {
        this.setState({sentence: event.target.value});
    }

    setLanguage = (event) => {
        event.preventDefault();
        this.setState({selectedLanguage: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        let url = 'https://languagetool.org/api/v2/check';
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        };
        let sentenceURI = encodeURI(this.state.sentence);
        let dataString = `text=${sentenceURI}&language=${this.state.selectedLanguage}&enabledOnly=false`;

        fetch(url, {
            method: 'post',
            headers: headers,
            body: dataString
        }).then(res => res.json())
        .catch(error => console.log(error))
        .then(response => { 
            console.log(response)
            this.setState({result: response.matches})});
    }

    render() {
        return (
            <div>
                <h1 className="logo">GrammarCheck</h1>
                {/*<TextInput />*/}
                <div className="from-group">
                    <label>Select language:</label>
                    <select className="form-control" name="languages" id="languages" onChange={this.setLanguage} value={this.state.selectedLanguage}>
                        {this.state.languages.map(language => <option key={language.longCode} value={language.longCode}>{language.name}</option>)}
                    </select>
                    <label>Enter text you want to check:</label>
                    <input id="text-check" className="form-control" value={this.state.word} onChange={this.onChange} type="text" placeholder="Enter some text" /><br />
                    <input className="btn" type="submit" onClick={this.onSubmit} />
                </div>
                <h2>{this.state.sentence}</h2>
                {this.state.result.length > 0 ? this.state.result.map(match => <div key={uuid.v4()} className="alert alert-danger">{match.message}</div>) : ''}
            </div>
        );
    }
};

export default HomePage;