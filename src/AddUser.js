import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttonStatusAdd: true,
            name:"",
            id:"",
            tel:"",
            permission:""
        };
    }
    isChange = (e) =>{
        this.setState(
            {[e.target.name] : e.target.value}
        )
    }
    setDispalyButton = () =>{
        if(this.state.buttonStatusAdd==true){
            return (
                <div className="col-3">
                    <div className="btn btn-success" onClick={() =>{this.setState({buttonStatusAdd: false})}}>Đóng lại</div>
                    <div className="card border-primary mt-2">
                        <div className="card-body">
                            <h4 className="card-title">Them nguoi dung</h4>
                            <hr />
                            <div className="form-group">
                            <label htmlFor="ten">Ten</label>
                            <input type="text" name="name" onChange={(e) =>{this.isChange(e)}} className="form-control" aria-describedby="helpId" />
                            <label htmlFor="dienthoai">Dien thoai</label>
                            <input type="text" name="tel" onChange={(e) =>{this.isChange(e)}} className="form-control"  aria-describedby="helpId" />
                            <div className="form-group">
                                <label htmlFor="quyen">Quyen</label>
                                <select className="form-control" name="permission" onChange={(e) =>{this.isChange(e)}}>
                                <option value>Chon</option>
                                <option value={1}>Admin</option>
                                <option value={0}>User</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary">Them moi</button>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            );
            
        }
        return <div className="btn btn-info" onClick={() =>{this.setState({buttonStatusAdd: true})}}>Thêm mới</div>
           
    }
    render() {
        console.log('>>>', this.state)
        return (
            
               <> 
                {this.setDispalyButton()}
                
          </>
        );
    }
}

export default AddUser;