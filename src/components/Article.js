import React, {Component} from 'react';

class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {article, foo, flag} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>;
        return (
            <div>
                <h2>
                    {article.title}
                    <button type="button" onClick={this.handleClick}>
                        {this.state.isOpen ? 'Закрыть' : 'Открыть'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        );
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });

    }

}

export default Article;
