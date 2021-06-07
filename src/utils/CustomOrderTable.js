import React, { useMemo } from "react";
import { useSortBy, useTable } from "react-table";

const CustomOrderTable = () => {
	const data = useMemo(
		() => [
			{
				orderId: 16,
				orderTitle:
					"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
				createdAt: "7 January 2019",
				orderStatus: "Delivered",
			},
			{
				orderId: 17,
				orderTitle: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
				createdAt: "12 June 2019",
				orderStatus: "Delivered",
			},
			{
				orderId: 18,
				orderTitle: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
				createdAt: "22 October 2019",
				orderStatus: "On Progress",
			},
			{
				orderId: 19,
				orderTitle: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
				createdAt: "15 March 2020",
				orderStatus: "Order PLaced",
			},
		],
		[]
	);

	const columns = useMemo(
		() => [
			{
				Header: "Order Id",
				accessor: "orderId",
				sortType: "basic",
			},
			{
				Header: "Product Name",
				accessor: "orderTitle",
				sortType: "alphanumeric",
			},
			{
				Header: "Created At",
				accessor: "createdAt",
				sortType: "datetime",
			},
			{
				Header: "Order Status",
				accessor: "orderStatus",
				sortType: "alphanumeric",
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data }, useSortBy);

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render("Header")}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default CustomOrderTable;
