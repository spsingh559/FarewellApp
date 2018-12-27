import React from 'react';

const style={
    paperStyle:{
    width: "auto",
    height: "1000px",
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    border: "solid 1px #d5d5d5",
    overflowY:"auto",
    marginTop:"20px"
    }
  }

  import EachPost from './EachPost';

export default class ShowPost extends React.Component{

    

    render(){
console.log('data reached to showPost', this.props.data);
        let newData = this.props.data.map((data, i) => {
            return (
              <EachPost
                key={i}
                data={data}
              />
            );
          });

        return(
            <div >
                {newData}
                </div>
        )
    }
}