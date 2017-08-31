import React, {PropTypes} from 'react';
import defaultStyle from './defaultStyle';
import MentionsInput from './MentionsInput';
import Mention from './Mention';


class SocialMarkupInput extends React.Component {

    constructor(props) {
        super(props);
        const {data, isLoading, value} = this.props;
        this.state = {
            value: value,
            suggestionsList: data
        };
    }

    render() {
        //data passed is got to be the url for us to fetch stuff
        const {value, data, onChangeCallBack, onAdd, singleLine, readOnly, placeholderText, maxAllowedTextLength, allowEmailTrigger, isLoading} = this.props;

        // use first/outer capture group to extract the full entered sequence to be replaced
        // and second/inner capture group to extract search string from the match
        const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/;

        return allowEmailTrigger ? (
            <div className="mentions-suggestions__socialMarkupInput">
                <MentionsInput
                    markup="@[__display__](__type__:__id__)"
                    maxLength={maxAllowedTextLength}
                    readOnly={readOnly}
                    singleLine={singleLine}
                    value={this.state.value}
                    onChange={(ev, val, textAreaValAndMarkup, listOfMentions) => {
                        this.setState({value: val});
                        //call back with the content value of the text area
                        if (onChangeCallBack && typeof onChangeCallBack === 'function') {
                            onChangeCallBack(val, textAreaValAndMarkup, listOfMentions);
                        }
                    }}
                    style={defaultStyle}
                    placeholder={placeholderText}
                >
                    <Mention
                        type="user"
                        trigger="@"
                        readOnly={readOnly}
                        data={data}
                        onAdd={ onAdd }
                        style={{color: 'rgb(0,191,111)'}}
                        isLoading={isLoading}
                    />
                    <Mention
                        readOnly={readOnly}
                        type="email"
                        trigger={emailRegex}
                        data={data}
                        onAdd={ onAdd }
                        style={{backgroundColor: 'rgba(0,191,111,0.1)', color: 'rgb(0,191,111)'}}
                    />
                </MentionsInput>
            </div>
        ) : (
            <div className="mentions-suggestions__socialMarkupInput">
                <MentionsInput
                    maxLength={maxAllowedTextLength}
                    readOnly={readOnly ? true : false}
                    singleLine={singleLine ? true : false}
                    value={this.state.value}
                    onChange={(ev, val, textAreaValAndMarkup, listOfMentions) => {
                        this.setState({value: val});
                        //call back with the content value of the text area
                        if (onChangeCallBack && typeof onChangeCallBack === 'function') {
                            onChangeCallBack(val, textAreaValAndMarkup, listOfMentions);
                        }
                    }}
                    style={defaultStyle}
                    placeholder={placeholderText}
                >
                    <Mention
                        type="user"
                        readOnly={readOnly ? true : false}
                        data={data}
                        onAdd={ onAdd }
                        style={{backgroundColor: 'transparent', color: 'rgb(0,191,111)'}}
                        isLoading={isLoading}
                    />
                </MentionsInput>
            </div>
        );
    }
}


SocialMarkupInput.propTypes = {
    value: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
    onChangeCallBack: PropTypes.func,
    onAdd: PropTypes.func,
    singleLine: PropTypes.bool,
    readOnly: PropTypes.bool,
    placeholderText: PropTypes.string,
    maxAllowedTextLength: PropTypes.number,
    allowEmailTrigger: PropTypes.bool,
    isLoading: PropTypes.bool
};


SocialMarkupInput.defaultProps = {
    value: '',
    onChangeCallBack: () => {
    },
    onAdd: (added) => {
        console.log(added)
    },
    singleLine: false,
    readOnly: false,
    placeholderText: "Comment @colleague or using email@address.com...",
    allowEmailTrigger: false,
    isLoading: false
};
export default SocialMarkupInput;