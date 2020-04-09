import React, {Component} from 'react';
import '../components/style.css'

class Card extends Component{
    render(){
        const profile = this.props;
        return (
            <div className="git-profile">
                <img className ="profile-image" src={profile.avatar_url} alt="gitlogo" />
                <div className="info">
                <div>{profile.name}</div>
                <div>{profile.company}</div>                    
                </div>

            </div>
        )
    }
}

export default Card