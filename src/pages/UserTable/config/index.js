import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const UserTableConfig = ({ onEditUser, onDeleteUser }) => [
	{
		key: '1',
		title: 'Name',
		dataIndex: 'name',
	},
	{
		key: '2',
		title: 'Email',
		dataIndex: 'email',
	},
	{
		key: '3',
		title: 'Address',
		dataIndex: 'address',
	},
	{
		key: '4',
		title: 'Actions',
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
						style={{ color: 'red', marginLeft: 12 }}
					/>
				</>
			);
		},
	},
];
