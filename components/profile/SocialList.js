import Card from '../global/Card'
import Link from 'next/link'
import ReactSVG from 'react-svg'
import { colors, socialColors } from '../../styles/variables'
import { noHttp } from '../../lib/helpers'

const SocialList = (props) => (
    <Card 
        headerTitle="Social media" 
        headerClass="white" 
        padding="medium">
        <div className="social-links">
            <table className="table social-table">
                <tbody>
                { props.website ?
                    <tr>
                        <td>
                        <Link href={props.website}>
                            <a className="social-link" target="_blank">
                                <ReactSVG 
                                    path="/static/icons/icon-world.svg" 
                                    svgClassName="social-icon facebook" 
                                    svgStyle={{
                                        height: '26px !important',
                                        width: '30px !important',
                                        display: 'block',
                                        fill: colors.green
                                    }} 
                                    style={{
                                        marginRight: '0.5rem'
                                    }} />
                                <span>{noHttp(props.website)}</span>
                            </a>
                        </Link>
                        </td>
                    </tr>
                    : null }
                    { props.facebook ?
                    <tr>
                        <td>
                        <Link href={props.facebook}>
                            <a className="social-link" target="_blank">
                                <ReactSVG 
                                    path="/static/icons/icon-social-facebook.svg" 
                                    svgClassName="social-icon facebook" 
                                    svgStyle={{
                                        height: '26px !important',
                                        width: '30px !important',
                                        display: 'block',
                                        fill: socialColors.facebook
                                    }} 
                                    style={{
                                        marginRight: '0.5rem'
                                    }} />
                                <span>Facebook</span>
                            </a>
                        </Link>
                        </td>
                    </tr>
                    : null }
                    { props.twitter ?
                    <tr>
                        <td>
                        <Link href={props.twitter}>
                            <a className="social-link" target="_blank">
                                <ReactSVG 
                                    path="/static/icons/icon-social-twitter.svg" 
                                    svgClassName="social-icon twitter" 
                                    svgStyle={{
                                        height: '26px !important',
                                        width: '30px !important',
                                        display: 'block',
                                        fill: socialColors.twitter
                                    }} 
                                    style={{
                                        marginRight: '0.5rem'
                                    }} />
                                <span>Twitter</span>
                            </a>
                        </Link>
                        </td>
                    </tr>
                    : null }
                    { props.instagram ?
                    <tr>
                        <td>
                        <Link href={props.instagram}>
                            <a className="social-link" target="_blank">
                                <ReactSVG 
                                    path="/static/icons/icon-social-instagram.svg" 
                                    svgClassName="social-icon instagram" 
                                    svgStyle={{
                                        height: '26px !important',
                                        width: '30px !important',
                                        display: 'block',
                                        fill: socialColors.instagram
                                    }} 
                                    style={{
                                        marginRight: '0.5rem'
                                    }} />
                                <span>Instagram</span>
                            </a>
                        </Link>
                        </td>
                    </tr>
                    : null }
                    { props.youtube ?
                    <tr>
                        <td>
                        <Link href={props.youtube}>
                            <a className="social-link" target="_blank">
                                <ReactSVG 
                                    path="/static/icons/icon-social-youtube.svg" 
                                    svgClassName="social-icon youtube" 
                                    svgStyle={{
                                        height: '22px !important',
                                        width: '30px !important',
                                        display: 'block',
                                        fill: socialColors.youtube
                                    }} 
                                    style={{
                                        marginRight: '0.5rem'
                                    }} />
                                <span>YouTube</span>
                            </a>
                        </Link>
                        </td>
                    </tr>
                    : null }
                </tbody>
            </table>
        </div>
        
        {/* styles */}
        <style jsx>{`
            table.table.social-table {
                margin-bottom: 0;
            }
            table.table.social-table th,
            table.table.social-table td {
                padding: 0.125rem 1rem;
                border: none;
            }
            table.table.social-table tr td {
                padding: 0.375rem 0;
            }
            table.table.social-table tr:first-of-type td {
                padding-top: 0;
            }
            table.table.social-table tr:last-of-type td {
                padding-bottom: 0;
            }
            .social-link {
                display: flex;
                align-items: center;
            }
        `}</style>
    </Card>
)

export default SocialList