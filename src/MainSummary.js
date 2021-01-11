import React from 'react'
import Options from './Options'
import Total from './Total'



class MainSummary extends React.Component{
    render(){
        
        
        return(
            <div>
            <section className="main__summary">
                <h2>Your cart</h2>
                <Options
                selected = {this.props.selected}
                 />
                <Total
                selected = {this.props.selected}
                />
              </section>
            </div>
        )
    }

}

export default MainSummary;