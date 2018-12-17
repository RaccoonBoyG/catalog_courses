import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsWithRedux } from '../actions'


class Test extends Component {
    componentDidMount(){
  	    this.props.fetchPostsWithRedux()
    }

	render(){
        console.log(this.props)
	  return (
    		<ul>
				{
        	        this.props.posts && 
                    this.props.posts.map((post) =>{
                        return(
            	            <li>{post.title}</li>
                        )
                    })
                }
            </ul>
    )
  }
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

  
export default connect(mapStateToProps, {fetchPostsWithRedux})(Test);
  