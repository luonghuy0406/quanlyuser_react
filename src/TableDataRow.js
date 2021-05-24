import React, { Component } from 'react';

class TableDataRow extends Component {
    constructor(props){
        super(props)
    }
    render() {
              return(
                <tr>
                  <td scope="row">{this.props.dataUser.id}</td>
                  <td>{this.props.dataUser.name}</td>
                  <td>{this.props.dataUser.tel}</td>
                  <td>{this.props.dataUser.permission==1?"admin" :"user"}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label>
                      <button type="button" className="btn btn-warning">
                        Sua
                      </button>
                      <button type="button" className="btn btn-danger">
                        xoa</button>
                    </div>
                  </td>
                </tr>
              )
        
    }
}

export default TableDataRow;