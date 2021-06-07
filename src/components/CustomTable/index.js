import React from "react";
import {
	Wrapper,
	Table,
	TableBody,
	TableBodyData,
	TableBodyDelivered,
	TableHeading,
	TableHeadingTitle,
} from "./styles";

const CustomTable = ({ data, headings }) => {
	return (
		<Wrapper>
			<Table className="rwd-table">
				<TableHeading>
					<tr>
						{headings.map((item, index) => (
							<TableHeadingTitle key={index}>{item.title}</TableHeadingTitle>
						))}
					</tr>
				</TableHeading>
				<TableBody>
					{data.map((item, index) => (
						<tr key={index}>
							<TableBodyData data-th="Order Title">{item.orderTitle}</TableBodyData>
							<TableBodyData data-th="Created At">{item.createdAt}</TableBodyData>
							{item.orderStatus === "Delivered" ? (
								<TableBodyDelivered data-th="Order Status">
									{item.orderStatus}
								</TableBodyDelivered>
							) : (
								<TableBodyData data-th="Order Status">{item.orderStatus}</TableBodyData>
							)}
						</tr>
					))}
				</TableBody>
			</Table>
		</Wrapper>
	);
};

export default CustomTable;
