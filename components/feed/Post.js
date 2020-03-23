import Card from '../global/Card'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

const Post = (props) => (
    <article className="post">
        <div className="body">
            <Card>
                <PostHeader postData={props.postData} />
                {props.postData.message ?
                    <div className="content">
                        {props.postData.message}
                </div> : null
                }
            </Card>
        </div>
        <div className="footer">
            <PostFooter postData={props.postData} />
        </div>
        {/* styles */}
        <style jsx>{`
            .post {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
            }
            .body {
                z-index: 2;
                width: 100%;
            }
            .content {
                padding: 1rem;
            }
            .footer {
                width: 90%;
                position: relative;
                top: -2rem;
                z-index: 1;
            }
        `}</style>
    </article>
)

export default Post
