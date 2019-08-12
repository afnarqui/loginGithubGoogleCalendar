import React from 'react';

import { GitHubContext } from '../GithubContext/index';
import { Li ,Ul } from './styles'

class GithubItem extends React.PureComponent {
    render() {
        return (
            <Ul>
                <GitHubContext.Consumer>
                    {
                        ({ list }) =>
                        list.map((item, key) =>
                                <Li key={key}>
                                {item.key}.  {item.name} 
                                </Li>
                            )

                    }
                </GitHubContext.Consumer>
                
            </Ul>
        );
    }
}

export default GithubItem;
