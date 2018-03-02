import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const renderPendingArticles = (pending) => {
    return pending.map(article => {
        return  {
                   id: article._id,
                   date: `${moment(article.createdAt).format('DD/MM/YYYY')}`,
                   title: `${article.title.substring(0,20)}...`
                }
    })
}

const PendingArticlesList = ({ pending, approveButton, editButton }) => {
    const pendingArticles = renderPendingArticles(pending);
    const options = {
        noDataText: 'No hay articulos pendientes de aprobación'
    };

    return (
        <div>
            <BootstrapTable striped hover condensed height='300' scrollTop={ 'Bottom' } data={pendingArticles} options={options} search={ true }>
                <TableHeaderColumn width="200" dataField='id' isKey>Id</TableHeaderColumn>
                <TableHeaderColumn width="90" dataField='date'>Fecha</TableHeaderColumn>
                <TableHeaderColumn width="200" dataField='title'>Titulo</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='approve' dataFormat={approveButton}>Aprobar</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='edit' dataFormat={editButton}>Editar</TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
};

export default PendingArticlesList;