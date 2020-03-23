import React from 'react';
import { colors } from '../../styles/variables'
import { Table } from 'reactstrap'
import { monthNumberToString } from '../../lib/helpers'

const Achievements = (props) => (
	<div>
		<Table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Achievement</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((a, i) => (
					<tr key={i}>
						<td>
							<strong>
								{monthNumberToString(a.month)} {a.year}
							</strong>
						</td>
						<td>{a.description}</td>
					</tr>
				))}
			</tbody>
		</Table>
		{/* styles */}
		<style jsx>{`
			a {
				color: ${colors.black};
				margin-left: 1rem;
				font-family: 'proxima-nova', sans-serif;
				font-weight: 700;
				font-style: italic;
				text-decoration: none;
			}
		`}</style>
	</div>
);

export default Achievements;
