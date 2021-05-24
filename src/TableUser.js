import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableUser extends Component {
    render() {
        return (
            <div className="col">
            <table className="table table-striped table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Ten</th>
                  <th>Dien thoai</th>
                  <th>Quyen</th>
                  <th>Thao tac</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.dataUser.map((x) =>{
                    return(
                      <TableDataRow dataUser = {x}/>
                    )
                  })
                }
                
                
              </tbody>
            </table>    
          </div>
        );
    }
}

export default TableUser;