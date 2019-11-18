import React from "react";
import "./styles.css";
import { Table, Input, InputNumber, Form } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// fake data
import { dataCVPB } from "../../utils/data";

const { Search } = Input;
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`
                }
              ],
              initialValue: record[dataIndex]
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: dataCVPB, editingKey: "" }; //fake data
    this.columns = [
      {
        title: (
          <div>
            <div className="title">Mã CV</div>
            <Search placeholder="" onSearch={value => console.log(value)} />
          </div>
        ), 
        dataIndex: "code",
        width: "8%",
        editable: true
      },
      {
        title: (
          <div>
            <div className="title">Tên công việc</div>
            <Search placeholder="" onSearch={value => console.log(value)} />
          </div>
        ),
        dataIndex: "name",
        width: "20%",
        editable: true
      },
      {
        title: (
          <div>
            <div className="title">Người kiểm duyệt</div>
            <Search placeholder="" onSearch={value => console.log(value)} />
          </div>
        ),
        dataIndex: "censor",
        width: "10%",
        editable: true
      },
      {
        title: (
          <div>
            <div className="title">Người phụ trách</div>
            <Search placeholder="" onSearch={value => console.log(value)} />
          </div>
        ),
        dataIndex: "censor",
        width: "10%",
        editable: true
      },
      {
        title: (
          <div>
            <div className="title">Ngày tạo</div>
            <Search placeholder="" onSearch={value => console.log(value)} />
          </div>
        ),
        dataIndex: "dateStart",
        width: "10%",
        editable: true
      },
      {
        title: (
          <div>
            <div className="title">Ngày hết hạn</div>
            <Search placeholder="" onSearch={value => console.log(value)} />
          </div>
        ),
        dataIndex: "dateFinish",
        width: "10%",
        editable: true
      },
      {
        title: (
          <div>
            <div className="title">Trọng số</div>
            <Search placeholder="" onSearch={value => console.log(value)} />
          </div>
        ),
        dataIndex: "weight",
        width: "7%",
        editable: true
      },
      {
        title: (
          <div>
            <div className="title">Trạng thái</div>
            <Search placeholder="" onSearch={value => console.log(value)} />
          </div>
        ),
        dataIndex: "status",
        width: "15%",
        editable: true
      },
      {
        title: <div>Xem chi tiết</div>,
        dataIndex: "detail",
        width: "10%",
        editable: true,
        render: data => {
          return <Link to="/detail-task">{data}</Link>;
        }
      }
    ];
  }

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: "" });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data: newData, editingKey: "" });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: "" });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  render() {
    const components = {
      body: {
        cell: EditableCell
      }
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === "age" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <Table
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: this.cancel
          }}
        />
      </EditableContext.Provider>
    );
  }
}

const EditableFormTable = Form.create()(connect()(EditableTable));
export default EditableFormTable;
