import {Component} from "react";


export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    static  getDerivedStateFromError (){
        return { hasError: true}
    }
    render() {
        const { children } = this.props;
        const { hasError } = this.state;
        if(hasError) {
            return <h1>Что-то пошло не так</h1>
        } else {
            return children
        }
    }
}