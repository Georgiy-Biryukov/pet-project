import { useState } from 'react';
import { Button, Table, Modal } from 'antd';

import { UserTableConfig } from './config';

import { StyledInput } from './styled.js';
import 'antd/dist/antd.css';

const Usertable = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [isAdding, setIsAdding] = useState(false);
	const [editingUser, setEditingUser] = useState(null);
	const [isAddingUser, setIsAddingUser] = useState(null);
	const [dataSource, setDataSource] = useState([]);

	const onAddUser = () => {
		const randomNumber = parseInt(Math.random() * 10);
		const newUser = {
			id: randomNumber,
			name: isAddingUser.name,
			email: isAddingUser.email,
			address: isAddingUser.address,
		};
		setDataSource([...dataSource, newUser]);
	};

	const onDeleteUser = (record) => {
		Modal.confirm({
			title: 'Are you sure, you want to delete this User record?',
			okText: 'Yes',
			okType: 'danger',
			onOk: () => {
				setDataSource(dataSource.filter((User) => User.id !== record.id));
			},
		});
	};

	const editUser = () => {
		setDataSource(
			dataSource.map((User) => {
				if (User.id === editingUser.id) {
					return editingUser;
				}
				return User;
			}),
		);
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
		setIsAddingUser(null);
		setIsAdding(true);
	};

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
				<Table columns={UserTableConfig({ onEditUser, onDeleteUser })} dataSource={dataSource} />
				<Modal
					title="Edit User"
					visible={isEditing}
					okText="Save"
					onCancel={() => {
						resetEditing();
					}}
					onOk={() => {
						editUser();
						resetEditing();
					}}
				>
					<StyledInput
						value={editingUser?.name}
						onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
					/>
					<StyledInput
						value={editingUser?.email}
						onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
					/>
					<StyledInput
						value={editingUser?.address}
						onChange={(e) => setEditingUser({ ...editingUser, address: e.target.value })}
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
						onAddUser();
						resetAdding();
					}}
				>
					<StyledInput
						value={isAddingUser?.name}
						placeholder="Name"
						onChange={(e) => setIsAddingUser({ ...isAddingUser, name: e.target.value })}
					/>
					<StyledInput
						value={isAddingUser?.email}
						placeholder="Email"
						onChange={(e) => setIsAddingUser({ ...isAddingUser, email: e.target.value })}
					/>
					<StyledInput
						value={isAddingUser?.address}
						placeholder="Address"
						onChange={(e) => setIsAddingUser({ ...isAddingUser, address: e.target.value })}
					/>
				</Modal>
			</div>
		</div>
	);
};

export default Usertable;
