import React from 'react';
import Spinner from './Spinner.jsx';

    class News extends React.Component{
        constructor(props){
            super(props);
            this.state={
                loaded: false,
                articles: [],
            }
        }
        

        getArticle(url){
            fetch(url)
            .then( r => r.json() )
            .then( response => {
                 let newArticles = this.state.articles.slice();
                 newArticles.push(...response.response.docs);
                 this.setState({
                   articles: newArticles,

                })
            });
        }

        componentDidMount(){
             
            const key = "cd0f544a173a494b8eecdea25e8d5f34";
            const q = "nasa";
            const sort = "newest";
            const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&q=${q}&sort=${sort}`;

            this.getArticle(url);

        }

        render(){
            if(!this.state.loaded){ //if didn't get response from NASA API, render spinner
                return <Spinner />
            }else{
                return <section id="home">

                    </section>
            }
        }
    }

module.exports = News;