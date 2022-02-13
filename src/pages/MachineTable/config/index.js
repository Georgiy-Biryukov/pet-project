import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const MachineTableConfig = ({ onEditMachine, onDeleteMachine }) => [
	{
		key: '1',
		title: 'brand',
		dataIndex: 'brand',
	},
	{
		key: '2',
		title: 'model',
		dataIndex: 'model',
	},
	{
		key: '3',
		title: 'year',
		dataIndex: 'year',
	},
	{
		key: '4',
		title: 'Actions',
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
						style={{ color: 'red', marginLeft: 12 }}
					/>
				</>
			);
		},
	},
];
