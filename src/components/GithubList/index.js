import React from 'react';
import { GitHubContext } from '../GithubContext/';
import { Bgithub, Input, Divgithub } from './styles'
import search from './api'


class GithubList extends React.Component {
    constructor() {
        super();
        this.searchItem = this.searchItem.bind(this);
        
        this.itemInput = React.createRef();

        this.state = {
            list: []
        };
    }
      
      searchItem() {
        const itemValue = this.itemInput.current.value;
        if(itemValue){
        search(`https://api.github.com/users/${itemValue}/repos`)
        .then((data)=>{
            this.setState(({ list }) => ({
                list: data
            }));
        })
        this.itemInput.current.value = ''
        this.itemInput.current.focus()
        }
    }
  
    render() {
        const valueProvider = {
            list: this.state.list
        }
        return (
            <GitHubContext.Provider value={valueProvider}>
                <Divgithub>
                    <h3>Search account Github</h3>
                    <Input type="text" placeholder="Enter account..." ref={this.itemInput} />
                    <Bgithub className="addBtn" onClick={this.searchItem}>Search repos</Bgithub>
                    {this.props.children} 
                </Divgithub>
             
            </GitHubContext.Provider>
        );
    }
}

export default GithubList;
