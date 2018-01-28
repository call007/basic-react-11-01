import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Filters from './Filters'
import Coutner from './Counter'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Coutner />
                <Filters articles = {[0]}/>
                <ArticleList />
            </div>
        )
    }
}
export default App
