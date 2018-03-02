import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../actions';
import requireAuth from '../components/hocs/requireAuth';
import axios from 'axios';

import Spinner from '../components/Spinner';
import PendingArticlesList from '../components/PendingArticlesList';
import ApprovedArticlesList from '../components/ApprovedArticlesList';

class DashboardPage extends Component {
    constructor(props){
        super(props);
        this.approveButton = this.approveButton.bind(this);
    }

    componentWillMount() {
        this.props.fetchArticles();
    }

    approveButton(cell, row) {
        return (
            <button className="button outline primary" onClick={() => {
                axios.post(`/api/approve_article`, { id: row.id } ).then(() => {
                    this.props.fetchArticles();
                })
            }}>
                Aprobar
            </button>
        );
    }

    editButton(cell, row) {
        return (
            <Link className="button outline primary" 
                to="#"
            >
                Editar
            </Link>
        );
    }

    render() {
        switch(this.props.blog){
            case null:
                return (
                    <Spinner />
                )
            default:
                return (
                    <div>
                        <div className="row">
                            <div className="col">
                                <div className="card"> 
                                    <div className="card-header card-header-pending">                               
                                        <span className="title-with-icon"><i className="material-icons">alarm</i>Pendientes</span>
                                    </div>

                                    <PendingArticlesList 
                                        pending={this.props.blog.filter((article) => article.status === false)} 
                                        approveButton={this.approveButton}
                                        editButton={this.editButton}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card"> 
                                    <div className="card-header card-header-approved">
                                        <span className="title-with-icon"><i className="material-icons">check_circle</i>Aprobados</span>
                                    </div>                               

                                    <ApprovedArticlesList 
                                        approved={this.props.blog.filter((article) => article.status === true)} 
                                        editButton={this.editButton}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }
};

function mapStateToProps({ blog }) {
    return { blog };
}

export default {
    component: connect(mapStateToProps, { fetchArticles })(requireAuth(DashboardPage)),
    loadData: ({ dispatch }) => dispatch(fetchArticles())
};