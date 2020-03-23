import Card from '../global/Card'
import { colors } from '../../styles/variables.js';

const PostFooter = (props) => (
	<Card>
		<div className="post-footer">
			<div className="count-comments">0 Comments</div>
            <div className="count-claps">{props.postData.cheers_count} Claps</div>
		</div>
        {/* styles */}
        <style jsx>{`
            .post-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 1rem 0.5rem;
                border-bottom: solid 1px ${colors.greyLight};
            }
            .count-comments {
                color: ${colors.blue};
                font-family: 'open-sans', sans-serif;
                font-weight: 500;
                font-style: normal;
                margin: 0;
                font-size: 1rem;
                display: block;
            }
            .count-claps {
                color: ${colors.green};
                font-family: 'open-sans', sans-serif;
                font-weight: 500;
                font-style: normal;
                margin: 0;
                font-size: 1rem;
                display: block;
            }
        `}</style>
	</Card>
);

export default PostFooter;
