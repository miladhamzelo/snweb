import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import root from 'window-or-global';

class AppBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            class: root.innerWidth < 480 ? "button outline" : "is-hidden"
        }

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        root.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        root.addEventListener("resize", null);
    }
    handleResize(WindowSize, event) {
        if(root.innerWidth < 480) {
            this.setState({ class : "button outline" })
        } else {
            this.setState({ class : "is-hidden" })
        }
    }
    render() {
        return (
            <nav className="nav">
                <div className="nav-left">
                    <div id="menuToggle" className={this.state.class}>
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <NavLink to="/admin/dashboard">Dashboard</NavLink>
                            <NavLink to="/users">Nuevo articulo</NavLink>
                            <a href="/api/logout">Cerrar Sesión</a>
                        </ul>
                    </div>
                    <a className="brand" href="#">SNOnline</a>
 
                    <div className="tabs hide-phone">
                        <NavLink to="/admin/dashboard" activeClassName="active">Dashboard</NavLink>
                        <NavLink to="/users" activeClassName="active">Nuevo articulo</NavLink>
                    </div>
                </div>
                <div className="nav-right hide-phone">
                    <a className="button outline" href="/api/logout">Cerrar Sesión</a>
                </div>
            </nav>
        );
    };
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(AppBar);