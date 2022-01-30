import "antd/dist/antd.css";
import { Button, Table, Modal } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {StyledInput} from "./styled.js"

function Usertable() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [isAddingUser, setIsAddingUser] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "3",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "4",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditUser(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteUser(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddUser = () => {
    const randomNumber = parseInt(Math.random() * 10);
    const newUser = {
      id: randomNumber,
      name: isAddingUser.name,
      email: isAddingUser.email,
      address: isAddingUser.address,
    };
  
    setDataSource((pre) => {
      return [...pre, newUser];
    });
  };

  const onDeleteUser = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this User record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          console.log(pre);
          return pre.filter((User) => User.id !== record.id);
        });
      },
    });
  };

  const onEditUser = (record) => {
    setIsEditing(true);
    setEditingUser({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingUser(null);
  };

  const onSetIsAdding = () => {
    setIsAddingUser(null)
    setIsAdding(true)
  }

  const resetAdding = () => {
    setIsAdding(false);
   
  };

  return (
      <div className="userTable-holder">
        <h1 className="Table-name">UserTable</h1>
        <div className="button-holder">
        <Button onClick={onSetIsAdding}>Add new User</Button>
        </div>
        <div className="userTable">
        <Table columns={columns} dataSource={dataSource}></Table>
          <Modal
            title="Edit User"
            visible={isEditing}
            okText="Save"
            onCancel={() => {
              resetEditing();
            }}
            onOk={() => {
              setDataSource((pre) => {
                return pre.map((User) => {
                  if (User.id === editingUser.id) {
                    return editingUser;
                  } 
                  return User;
                  
                });
              });
              resetEditing();
            }}
          >
            <StyledInput
              value={editingUser?.name}
              onChange={(e) => {
                setEditingUser((pre) => {
                  return { ...pre, name: e.target.value };
                });
              }}
            />
            <StyledInput
              value={editingUser?.email}
              onChange={(e) => {
                setEditingUser((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
            <StyledInput
              value={editingUser?.address}
              onChange={(e) => {
                setEditingUser((pre) => {
                  return { ...pre, address: e.target.value };
                });
              }}
            />
          </Modal>
          <Modal
            title="Add User"
            visible={isAdding}
            okText="Save"
            onCancel={() => {
              resetAdding();
            }}
            onOk={() => {
              onAddUser()
              resetAdding();
            }}
          >
            <StyledInput
              value={isAddingUser?.name}
              placeholder="Name"
              onChange={(e) => {
                setIsAddingUser((pre) => {
                  return { ...pre, name: e.target.value };
                });
              }}
            />
            <StyledInput
              value={isAddingUser?.email}
              placeholder="Email"
              onChange={(e) => {
                setIsAddingUser((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
            <StyledInput
              value={isAddingUser?.address}
              placeholder="Address"
              onChange={(e) => {
                setIsAddingUser((pre) => {
                  return { ...pre, address: e.target.value };
                });
              }}
            />
          </Modal>
        </div>
      </div>
  );
}

export default Usertable;