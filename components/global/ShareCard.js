import Card from './Card'
import ReactSVG from 'react-svg'
import { colors, socialColors } from '../../styles/variables'
import {
    FacebookShareButton,
    TwitterShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    EmailShareButton
  } from 'react-share'

const ShareCard = (props) => (
    <Card padding="medium">
        <div className='sharecard'>
            <h2>Share to</h2>
            <div className="sharecard-buttons">
                <EmailShareButton url="https://email.com">
                    <ReactSVG 
                        path="/static/icons/icon-email.svg" 
                        svgClassName="social-icon email" 
                        svgStyle={{
                            height: '26px !important',
                            width: '26px !important',
                            display: 'block',
                            fill: colors.green
                        }} 
                        style={{
                            marginRight: '0.5rem'
                        }} />
                </EmailShareButton>
                <FacebookShareButton url="https://facebook.com">
                    <ReactSVG 
                        path="/static/icons/icon-social-facebook.svg" 
                        svgClassName="social-icon facebook" 
                        svgStyle={{
                            height: '26px !important',
                            width: '26px !important',
                            display: 'block',
                            fill: socialColors.facebook
                        }} 
                        style={{
                            marginRight: '0.5rem'
                        }} />
                </FacebookShareButton>
                <TwitterShareButton url="https://twitter.com">
                    <ReactSVG 
                        path="/static/icons/icon-social-twitter.svg" 
                        svgClassName="social-icon facebook" 
                        svgStyle={{
                            height: '26px !important',
                            width: '30px !important',
                            display: 'block',
                            fill: socialColors.twitter
                        }} 
                        style={{
                            marginRight: '0.5rem'
                        }} />
                </TwitterShareButton>
                <GooglePlusShareButton url="https://google.com">
                    <ReactSVG 
                        path="/static/icons/icon-social-googleplus.svg" 
                        svgClassName="social-icon googleplus" 
                        svgStyle={{
                            height: '26px !important',
                            width: '30px !important',
                            display: 'block',
                            fill: socialColors.googlePlus
                        }} 
                        style={{
                            marginRight: '0.5rem'
                        }} />
                </GooglePlusShareButton>
                <LinkedinShareButton url="https://linkedin.com">
                    <ReactSVG 
                        path="/static/icons/icon-social-linkedin.svg" 
                        svgClassName="social-icon linkedin" 
                        svgStyle={{
                            height: '26px !important',
                            width: '30px !important',
                            display: 'block',
                            fill: socialColors.linkedin
                        }} 
                        style={{
                            marginRight: '0.5rem'
                        }} />
                </LinkedinShareButton>
            </div>
        </div>
        {/* styles */}
        <style jsx>{`
        .sharecard {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .sharecard h2 {
            margin-bottom: 0;
            font-family: 'proxima-nova', sans-serif;
            font-weight: 700;
            font-style: italic;
            font-size: 1rem;
            color: ${colors.white};
            display: block;
            margin: 0;
            color: ${colors.black};
        }   
        .sharecard-buttons {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        `}</style>
    </Card>
)

export default ShareCard