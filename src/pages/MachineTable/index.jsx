import { useState } from 'react';
import { Button, Table, Modal } from 'antd';

import { MachineTableConfig } from './config';

import { StyledInput } from './styled.js';
import 'antd/dist/antd.css';

const Machinetable = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [isAdding, setIsAdding] = useState(false);
	const [editingMachine, setEditingMachine] = useState(null);
	const [isAddingMachine, setIsAddingMachine] = useState(null);
	const [dataSource, setDataSource] = useState([]);

	const onAddMachine = () => {
		const randomNumber = parseInt(Math.random() * 10);
		const newMachine = {
			id: randomNumber,
			brand: isAddingMachine.brand,
			model: isAddingMachine.model,
			year: isAddingMachine.year,
		};

		setDataSource([...dataSource, newMachine]);
	};

	const onDeleteMachine = (record) => {
		Modal.confirm({
			title: 'Are you sure, you want to delete this Machine record?',
			okText: 'Yes',
			okType: 'danger',
			onOk: () => {
				setDataSource(dataSource.filter((Machine) => Machine.id !== record.id));
			},
		});
	};

	const editMachine = () => {
		setDataSource(
			dataSource.map((Machine) => {
				if (Machine.id === editingMachine.id) {
					return editingMachine;
				}
				return Machine;
			}),
		);
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
		setIsAddingMachine(null);
		setIsAdding(true);
	};

	const resetAdding = () => {
		setIsAdding(false);
	};

	return (
		<>
			<h1>MachineTable</h1>
			<Button onClick={onSetIsAdding}>Add new machine</Button>
			<Table columns={MachineTableConfig({ onEditMachine, onDeleteMachine })} dataSource={dataSource}></Table>
			<Modal
				title="Edit Machine"
				visible={isEditing}
				okText="Save"
				onCancel={() => {
					resetEditing();
				}}
				onOk={() => {
					editMachine();
					resetEditing();
				}}
			>
				<StyledInput
					value={editingMachine?.brand}
					onChange={(e) => setEditingMachine({ ...editingMachine, brand: e.target.value })}
				/>
				<StyledInput
					value={editingMachine?.model}
					onChange={(e) => setEditingMachine({ ...editingMachine, model: e.target.value })}
				/>
				<StyledInput
					value={editingMachine?.year}
					max={3}
					onChange={(e) => setEditingMachine({ ...editingMachine, year: e.target.value })}
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
					onAddMachine();
					resetAdding();
				}}
			>
				<StyledInput
					value={isAddingMachine?.brand}
					placeholder="brand"
					onChange={(e) => setIsAddingMachine({ ...isAddingMachine, brand: e.target.value })}
				/>
				<StyledInput
					value={isAddingMachine?.model}
					placeholder="model"
					onChange={(e) => setIsAddingMachine({ ...isAddingMachine, model: e.target.value })}
				/>
				<StyledInput
					value={isAddingMachine?.year}
					placeholder="year"
					onChange={(e) => setIsAddingMachine({ ...isAddingMachine, year: e.target.value })}
				/>
			</Modal>
		</>
	);
};

export default Machinetable;
