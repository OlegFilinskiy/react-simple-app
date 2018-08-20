import React, {Component as ReactComponent} from 'react'

export default OriginalComponent => class Accordion extends ReactComponent {
    constructor(props) {
        super(props)
        this.state = {
            openItemId: props.defaultOpenId
        }
    }

    render() {
        return <OriginalComponent {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {this.state.openItemId}/>
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}