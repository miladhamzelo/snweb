import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const renderApprovedArticles = (approved) => {
    return approved.map(article => {
        return {
            id: article._id,
            date: `${moment(article.createdAt).format('DD/MM/YYYY')}`,
            title: `${article.title.substring(0,20)}...`
        }
    })
}

const ApprovedArticlesList = ({ approved, editButton }) => {
    const approvedArticles = renderApprovedArticles(approved);
    const options = {
        noDataText: 'No hay articulos aprobados.'
    }

    return(
        <div>
            <BootstrapTable striped hover condensed height='300' scrollTop={ 'Bottom' } data={approvedArticles} options={options} search={ true }>
                <TableHeaderColumn width="200" dataField='id' isKey>Id</TableHeaderColumn>
                <TableHeaderColumn width="90"  dataField='date'>Fecha</TableHeaderColumn>
                <TableHeaderColumn width="200" dataField='title'>Titulo</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='edit' dataFormat={editButton}>Editar</TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
};

export default ApprovedArticlesList;