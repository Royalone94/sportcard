import {colors} from '../../styles/variables'
import Link from 'next/link'
import Video from 'react-player'

const Card = (props) => (
    <div className='card shadow'>
        { props.headerTitle ? 
        <div className={"card-header " + props.headerClass}>
            <h2>{ props.headerTitle }{ props.headerInfo ?<span>{props.headerInfo}</span>: null }</h2>
            { props.linkName && props.linkTo ?
            <Link href={props.linkTo}>
                { props.linkName ?
                <a>{props.linkName}</a>
                : null }
            </Link>
            : null }
        </div>
        : null }
        { props.video ? 
            <Video url={props.video} width="100%" />
        : null }
        <div className="card-video">
        </div>
        <div className={'card-inner padding-' + props.padding}>
            { props.children }
        </div>      
        {/* styles */}
        <style jsx>{`
        .card {
            border-radius: 5px;
            background: ${colors.white};
            overflow: hidden;
            margin-bottom: 1.5rem;
        }
        .card-header {
            background: ${colors.green};
            padding: 0.25rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .card-header.white {
            background: none;
            padding: 0.5rem 1rem;
            border-bottom: solid 1px ${colors.greyLight};
        }
        .card-header h2 {
            font-family: 'proxima-nova', sans-serif;
            font-weight: 700;
            font-style: italic;
            font-size: 1rem;
            color: ${colors.white};
            display: block;
            margin: 0;
        }
        .card-header.white h2 {
            color: ${colors.black};
        }
        .card-header h2 span {
            font-family: 'open-sans', sans-serif;
            font-weight: 300;
            font-style: italic;
            margin-left: 0.25rem;
            display: inline-block;
        }
        .card-header a {
            font-family: 'proxima-nova', sans-serif;
            font-weight: 700;
            font-style: italic;
            color: ${colors.white};
            font-size: 0.75rem;
            display: block;
            margin: 0;
            text-align: right;
        }
        .padding-small {
            padding: 0.75rem;
        }
        .padding-medium {
            padding: 1rem;
        }
        .padding-large {
            padding: 1.25rem;
        }
        `}</style>
    </div>
)

export default Card