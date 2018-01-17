import React, {Component} from 'react';
import Article from './Article';

class ArticleList extends Component {

    render() {
        const {articles} = this.props;
        const articleElements = articles.map((item, index) => <li key={item.id}>
            <Article article={item} defaultOpen={index === 0 || index === 3}/>
        </li>);
        return (
            <ul>
                {articleElements}
            </ul>
        );
    }
}

export default ArticleList;
