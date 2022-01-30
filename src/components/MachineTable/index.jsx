import "antd/dist/antd.css";
import { Button, Table, Modal } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {StyledInput} from "./styled.js"

function Machinetable() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editingMachine, setEditingMachine] = useState(null);
  const [isAddingMachine, setIsAddingMachine] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      key: "1",
      title: "brand",
      dataIndex: "brand",
    },
    {
      key: "2",
      title: "model",
      dataIndex: "model",
    },
    {
      key: "3",
      title: "year",
      dataIndex: "year",
    },
    {
      key: "4",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditMachine(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteMachine(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddMachine = () => {
    const randomNumber = parseInt(Math.random() * 10);
    const newMachine = {
      id: randomNumber,
      brand: isAddingMachine.brand,
      model: isAddingMachine.model,
      year: isAddingMachine.year,
    };
  
    setDataSource((pre) => {
      return [...pre, newMachine];
    });
  };

  const onDeleteMachine = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Machine record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          console.log(pre);
          return pre.filter((Machine) => Machine.id !== record.id);
        });
      },
    });
  };

  const onEditMachine = (record) => {
    setIsEditing(true);
    setEditingMachine({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingMachine(null);
  };

  const onSetIsAdding = () => {
    setIsAddingMachine(null)
    setIsAdding(true)
  }

  const resetAdding = () => {
    setIsAdding(false);
   
  };

  return (
   <>
      <h1>MachineTable</h1>
      <Button onClick={onSetIsAdding}>Add new machine</Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Edit Machine"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((Machine) => {
              if (Machine.id === editingMachine.id) {
                return editingMachine;
              } 
              return Machine;
              
            });
          });
          resetEditing();
        }}
      >
        <StyledInput
          value={editingMachine?.brand}
          onChange={(e) => {
            setEditingMachine((pre) => {
              return { ...pre, brand: e.target.value };
            });
          }}
        />
        <StyledInput
          value={editingMachine?.model}
          onChange={(e) => {
            setEditingMachine((pre) => {
              return { ...pre, model: e.target.value };
            });
          }}
        />
        <StyledInput
          value={editingMachine?.year}
          max={3}
          onChange={(e) => {
            setEditingMachine((pre) => {
              return { ...pre, year: e.target.value };
            });
          }}
        />
      </Modal>
      <Modal
        title="Add Machine"
        visible={isAdding}
        okText="Save"
        onCancel={() => {
          resetAdding();
        }}
        onOk={() => {
          onAddMachine()
          resetAdding();
        }}
      >
          <StyledInput
          value={isAddingMachine?.brand}
          placeholder="brand"
          onChange={(e) => {
            setIsAddingMachine((pre) => {
              return { ...pre, brand: e.target.value };
            });
          }}
        />
        <StyledInput
          value={isAddingMachine?.model}
          placeholder="model"
          onChange={(e) => {
            setIsAddingMachine((pre) => {
              return { ...pre, model: e.target.value };
            });
          }}
        />
        <StyledInput
          value={isAddingMachine?.year}
          placeholder="year"
          onChange={(e) => {
            setIsAddingMachine((pre) => {
              return { ...pre, year: e.target.value };
            });
          }}
        />
      </Modal>
    </>
  );
}

export default Machinetable;