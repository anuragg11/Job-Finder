import React, { useState } from 'react';

const TeamCard = ({ description, limit }) => {
	const [showAll, setShowAll] = useState(false);
	return (
		<p className="text-left text-gray-700 text-base">
			{description.length > limit ? (
				<>
					{showAll ? (
						<>
							{description}
							<br />
							<button
								onClick={() => setShowAll(false)}
								className="text-primary underline"
							>
								Read Less
							</button>
						</>
					) : (
						<>
							{description.substring(0, limit).concat("...")}
							<button onClick={() => setShowAll(true)} className="text-primary underline">
								Read More
							</button>
						</>
					)}
				</>
			) : (
				description
			)}
		</p>
	);
};
export default TeamCard;
