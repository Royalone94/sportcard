import Page from '../layouts/Main'
import { SportscardAPI } from '../lib/sportscard-api'
import { colors, mediaQueries, strings } from '../styles/variables';
import SearchBox from '../components/global/SearchBox';
import Card from '../components/global/Card';
import MediaQuery from 'react-responsive';

const Index = (props) => (
  <Page>
    {
      (props.hasOwnProperty('homePageData') == false) ?
        <div> Loading homePageData </div>
      : <div className="main">
          <div id="div_section1">
            <div className="img1" style={{ backgroundImage: 'url(' + props.homePageData.background_image.url + ')'}}>
            </div>
            <div id="div_search">
              <p className='text1'> {strings.become_fan}</p>
              <p className='text2'> {strings.find_best_players_teams}</p>
              <SearchBox></SearchBox>
            </div>
            <div className="chevron gradient-green mar-top-70"></div>
            <div className="desc">
              <div className="content">
                <div className="first">
                  <p className="title">{props.homePageData.tagline_blocks[0].value.heading}</p>
                  <p className="content">{props.homePageData.tagline_blocks[0].value.text}</p>
                </div>
                <div className="sec">
                  <p className="title">{props.homePageData.tagline_blocks[1].value.heading}</p>
                  <p className="content">{props.homePageData.tagline_blocks[1].value.text}</p>
                </div>
                <div className="third">
                  <p className="title">{props.homePageData.tagline_blocks[2].value.heading}</p>
                  <p className="content">{props.homePageData.tagline_blocks[2].value.text}</p>
                </div>
              </div>
              <div className="btn">
                <button>{props.homePageData.cta_text}</button>
              </div>
            </div>
            <div className="chevron gradient-green mar-top-70"></div>
            <div className="sub gradient-gray">
              <p className="text1">{props.homePageData.subheading}</p>
              <p className="text2">{props.homePageData.subheading_text}</p>
              <div className="video-clip">
                <img src='../static/resources/play-button@2x.png'/>
              </div>
            </div>
            <div className="chevron gradient-blue chevron-blue"></div>
            <div className="feature">
              <p className="title"> {props.homePageData.features_subheading} </p>
              <div className="items">
                <div className="">
                  <p>{props.homePageData.features_blocks[0].value.heading}</p>
                  <div></div>
                </div>
                <div className="">
                  <p>{props.homePageData.features_blocks[1].value.heading}</p>
                  <div></div> 
                </div>
              </div>
              <div className="item-content">
                <div className="img" style={{ backgroundImage: 'url(' + props.homePageData.features_blocks[0].value.image.url + ')'}}>
                </div>
                <div>
                  <p>{props.homePageData.features_blocks[0].value.description}</p>
                </div>
              </div>
              <button className="gradient-blue">{props.homePageData.features_cta_text}</button>
            </div>
            <div className="chevron gradient-green mar-top-70"></div>
            <div className="testimonials gradient-gray">
              <p className='title'>{props.homePageData.testimonials[0].type}</p>
              <div className='content'>
                <div>
                  <p className='heading'>{props.homePageData.testimonials[0].value.heading}</p>
                  <p className='text'>{props.homePageData.testimonials[0].value.description}</p>
                </div>
                <div className="arrow"></div>
                <div className="img" style={{ backgroundImage: 'url(' + props.homePageData.testimonials[0].value.image.url + ')'}}>
                </div>
                <div className="arrow-left">
                </div>
                <div className="arrow-right">
                </div>
              </div>
            </div>
            <div className="chevron gradient-green mar-top-70"></div>
            <div className="partners">
              <p className="title">{props.homePageData.partners_subheading}</p>
              <div className="content">
                <div className="img" style={{ backgroundImage: 'url(' + props.homePageData.partners[0].value.image.url + ')'}}></div>
                <div className="desc">
                  <p className="heading">{props.homePageData.partners[0].value.heading}</p>
                  <p className="text">{props.homePageData.partners[0].value.description}</p>
                </div>
              </div>
              <div className="items">
                <div className="img" style={{ backgroundImage: 'url(' + props.homePageData.partners[0].value.image.url + ')'}}></div>
                <div className="img" style={{ backgroundImage: 'url(' + props.homePageData.partners[1].value.image.url + ')'}}></div>
                <div className="img" style={{ backgroundImage: 'url(' + props.homePageData.partners[2].value.image.url + ')'}}></div>
                <div className="arrow-left">
                </div>
                <div className="arrow-right">
                </div>
              </div>
            </div>
            <div className="chevron gradient-green mar-top-70"></div>
            <div className="register gradient-blue">
              <p className="title">{props.homePageData.features_cta_text}</p>
              <p className="subtitle">If you want to know more about our platform, leave your details below and we will be in touch</p>
              <div className="input-group">
                <div>
                  <label>name</label><br></br>
                  <input type="text"></input>
                </div>
                <div>
                  <label>email address</label><br></br>
                  <input type="text"></input>
                </div>
              </div>
              <div className="input-group">
                <div>
                  <label>phone number</label><br></br>
                  <input type="text"></input>
                </div>
                <div>
                  <label>sporting code</label><br></br>
                  <input type="text"></input>
                </div>
              </div>
              <div className="msg">
                  <label>message</label><br></br>
                    <textarea rows="4" cols="50">
                    </textarea> 
              </div>
              <button className="gradient-green">enquire   now</button>
            </div>
            <div className="chevron gradient-green mar-top-70"></div>
            <div className="footer gradient-gray">
              <div className="link">
                <a>terms.</a>
                <a>privacy</a>
              </div>
              <div className="company-name">
                <p>© Sports Card 2018<br></br>Website by TechEquipt</p>
              </div>
              <div className="social-links">
                <a><img src="../static/resources/icon-facebook@2x.png"/></a>
                <a><img src="../static/resources/icon-twitter@2x.png"/></a>
                <a><img src="../static/resources/icon-linkedin@2x.png"/></a>
              </div>
            </div>
          </div>
          <style jsx>{`
            @media ${mediaQueries.mediumUp} {
              #div_search {
                position:absolute;
                width:35%;
                height:130px;
                top:280px;
              }
              #div_section1 > .img1 {
                height: 700px;
                background-size: 100% 700px;
                -webkit-clip-path: polygon(52% 82%, 100% 0, 100% 16%, 52% 100%, 0 15%, 0 0);
                clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
              }
              #div_section1 > .chevron {
                height: 100px;
                -webkit-clip-path: polygon(52% 82%, 100% 0, 100% 16%, 52% 100%, 0 15%, 0 0);
                clip-path: polygon(50% 70%, 100% 0, 100% 25%, 50% 95%, 0 25%, 0 0);
              }
              #div_section1 > .desc {
                height: 400px;
                margin-top: -75px;
                -webkit-clip-path: polygon(50% 20%, 100% 0, 100% 70%, 50% 70%, 0 100%, 0 0);
                clip-path: polygon(50% 17%, 100% 0, 100% 83%, 50% 100%, 0 83%, 0 0);
              }
              div.desc > .content > div{
                display: inline-block;
                width: 30%;
                top: 0px;
                vertical-align: top;
                margin-left: 3%;
              }
              div.desc > .btn{
                width: 25%;
              }
              div.desc > .btn > button{
                font-size: 16px;
              }
              #div_section1 > .sub {
                height: 890px;
                margin-top: -76px;
                -webkit-clip-path: polygon(50% 20%, 100% 0, 100% 70%, 50% 70%, 0 100%, 0 0);
                clip-path: polygon(50% 8%, 100% 0, 100% 92.5%, 50% 100%, 0 92.5%, 0 0);
              }
              #div_section1 > .sub > p{
                margin: 0px;
                padding: 0px;
              }
              div.sub > .video-clip > img{
                margin-top: 182px;
                margin-left: -27px;
              }
              .chevron-blue {
                margin-top: -71px;
              }
              #div_section1 > .feature {
                height: 700px;
                margin-top: -75px;
                background-color: #e1e1e1;
                -webkit-clip-path: polygon(50% 20%, 100% 0, 100% 70%, 50% 70%, 0 100%, 0 0);
                clip-path: polygon(50% 10%, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
              }
              #div_section1 > .testimonials {
                height: 500px;
                margin-top: -75px;
                background-color: #e1e1e1;
                -webkit-clip-path: polygon(50% 20%, 100% 0, 100% 70%, 50% 70%, 0 100%, 0 0);
                clip-path: polygon(50% 14%, 100% 0, 100% 86%, 50% 100%, 0 86%, 0 0);
              }
              #div_section1 > .partners {
                height: 700px;
                margin-top: -78px;
                background-color: #e1e1e1;
                -webkit-clip-path: polygon(50% 20%, 100% 0, 100% 70%, 50% 70%, 0 100%, 0 0);
                clip-path: polygon(50% 10%, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
              }
              #div_section1 > .register {
                height: 700px;
                margin-top: -78px;
                -webkit-clip-path: polygon(50% 20%, 100% 0, 100% 70%, 50% 70%, 0 100%, 0 0);
                clip-path: polygon(50% 10%, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
              }
              #div_section1 > .footer {
                height: 120px;
                margin-top: -78px;
                -webkit-clip-path: polygon(50% 20%, 100% 0, 100% 70%, 50% 70%, 0 100%, 0 0);
                clip-path: polygon(50% 60%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0);
              }
            }

            @media ${mediaQueries.smallOnly} {
              #div_search {
                width:75%;
                height:120px;
                top:220px;
              },
              #div_search>.text1{
                font-size: 20px;
              },
              #div_search>.text2{
                font-size: 10px;
              }
              #div_section1 > .img1 {
                height: 400px;
                background-size: 100% 400px;
                -webkit-clip-path: polygon(52% 82%, 100% 0, 100% 16%, 52% 100%, 0 15%, 0 0);
                clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
              }
              div.chevron {
                height: 80px;
                -webkit-clip-path: polygon(50% 20%, 100% 0, 100% 70%, 50% 70%, 0 100%, 0 0);
                clip-path: polygon(50% 50%, 100% 0, 100% 30%, 50% 80%, 0 30%, 0 0);
              }
              #div_section1 > .desc {
                height: 800px;
                margin-top: -56px;
                -webkit-clip-path: polygon(50% 20%, 100% 0, 100% 70%, 50% 70%, 0 100%, 0 0);
                clip-path: polygon(50% 5%, 100% 0, 100% 95%, 50% 100%, 0 95%, 0 0);
              }
              div.desc > .content > div:nth-child(2),
              div.desc > .content > div:nth-child(3){
                margin-top: 70px;
              }
              div.desc > .content > div:nth-child(3){
                margin-bottom: 50px;
              }
              div.desc > .btn{
                width: 70%;
              }
              div.desc > .btn > button{
                font-size: 16px;
              }
              #div_section1 > .sub {
                height: 690px;
                margin-top: -56px;
                -webkit-clip-path: polygon(50% 20%, 100% 0, 100% 70%, 50% 70%, 0 100%, 0 0);
                clip-path: polygon(50% 5.5%, 100% 0, 100% 94.5%, 50% 100%, 0 94.5%, 0 0);
              }
              div.sub > .video-clip > img{
                margin-top: 58px;
                margin-left: -27px;
              }
              .chevron-blue{
                margin-top: -56px;
              }
            }

            div.main{
              margin-top: 0px;
            }
            #div_section1 > .img1 {
              background-repeat: no-repeat;
              width: 100%;
              margin-top: 0;
              z-index: 120;
            }
            #div_search {
              position:absolute;
              left:0;
              right:0;
              background-color: ${colors.alphaBlue};
              z-index:100;
              text-align: center;
              margin: 0 auto;
            }
            #div_search>.text1{
              font-size: 30px;
              font-style: italic;
              font-weight: bold;
              padding-top: 0px;
              margin: 0px;
            }
            #div_search>.text2{
              font-size: 12px;
              font-style: normal;
              font-weight: normal;
              padding-top: 0px;
              margin-top: 0px;
              margin-bottom: 10px;
            }
            #div_section1 {
              position:static;
              margin:0;
              padding:0;
            }
            p {
              color:white;
              margin-top:3px;
            }
            #div_section1 > .chevron {
              width: 100%;
              box-shadow: 10px 10px;
              z-index: 119;
            }
            #div_section1 > .desc{
              background-image: linear-gradient(to right, #37609a, #1e3554);
              width: 100%;
              z-index: 118;
              text-align: center;
              padding-top: 110px;
            }
            div.desc > .content {
              margin: 0 auto;
              width: 70%;
            }
            div.desc > .content > div{
            }
            div.desc > .content > div > p.title{
              font-size: 36px;
              font-style: italic;
              line-height: 0px;
              text-align: left;
              margin-bottom: 30px;
            }
            div.desc > .content > div > p.content{
              color: #ddd;
              text-align: left;
              font-size: 16px;
            }
            div.desc > .btn > button{
              color: white;
              font-weight: bold;
              background-image: linear-gradient(to right, #8dc051, #71a73c);
              border: none;
              height: 34px;
              width: 100%;
              box-shadow: 0px 1px 5px #333;
            }
            #div_section1 > .sub {
              
              width: 100%;
              z-index: 116;
              padding-top: 120px;
              text-align: center;
              padding-left: 15%;
              padding-right: 15%;
            }
            div.sub > .text1{
              color: white;
              font-weight: bold;
              font-size: 36px;
              font-style: italic;
              margin-bottom: 15px !important;
            }
            div.sub > .text2{
              font-size: 14px;
              font-style: italic;
            }
            div.sub > .video-clip{
              background-image: url('../static/images/sub-img.png');
              background-size: 100%;
              background-repeat: no-repeat;
              width: 100%;
              height: 440px;
              margin-top: 40px;
            }
            div.sub > .video-clip > img{
              width: 60px;
              height: 60px;
              z-index: 100;
              position: absolute;
              cursor: pointer;
            }
            #div_section1 > .feature {
              text-align: center;
              padding-top: 110px;
            }
            .feature > .title{
              color: #558d28;
              font-size: 36px;
              font-style: italic;
              font-weight: bold;
            }
            .feature > .items{
              width: 100%;
            }
            .feature > .items > div{
              display: inline-block;
              width: 130px;
              color: black;
              font-weight: bold;
              vertical-align: top;
              margin-left: 30px;
            }
            .feature > .items > div > p{
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .feature > .items > div:nth-child(2) > p{
              color: black;
            }
            .feature > .items > div:first-child > div {
              margin-top: 4px;
            }
            .feature > .items > div:first-child > p{
              color: #558d28;
              border-bottom: 3px solid;
            }
            .feature > .items > div:first-child > div:after{
              width: 0; 
              height: 0; 
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-top: 5px solid #558d28;
              content: '';
            }
            .feature > .item-content > div {
              display: inline-block;
              vertical-align: top;
            }
            .feature > .item-content > .img {
              height: 300px;
              width: 400px;
              background-size: 400px 300px;
              margin-right: 40px;
            }
            .feature > .item-content > div:nth-child(2) {
              width: 40%;
                text-align: left;
            }
            .feature > .item-content > div:nth-child(2) > p {
              color: black;
            }
            .feature > button {
              margin-top: 40px;
              border: none;
              height: 34px;
              width: 250px;
              font-size: 18px;
              color: white;
              font-weight: bold;
            }
            .testimonials {
              text-align: center;
              padding-top: 110px;
            }
            .testimonials > .title {
              font-size: 34px;
              color: white;
              font-weight: bold;
              font-style: italic;
              margin-bottom: 20px;
            }
            .testimonials > .content > div {
              display: inline-block;
              vertical-align: top;
            }
            .testimonials > .content > div:first-child {
              width: 50%;
              text-align: left;
              margin-right: 30px;
            }
            .testimonials > .content > div:first-child > p:first-child {
              font-weight: bold;
            }
            .testimonials > .content > div.arrow {
              content: '';
              border-top: 15px solid transparent;
              border-bottom: 15px solid transparent;
              border-right: 15px solid #1b3150;
              margin-top: 85px;
              margin-left: 1px;
            }
            .testimonials > .content > div.img{
              width: 200px;
              height: 200px;
              border-radius: 50%;
              border: 5px solid #1b3150;
              background-position: 358px 0px;
              background-size: 500px;
              margin-left: -1px;
            }
            .testimonials > .content > .arrow-left{
              background-image: url('../static/resources/arrow-left@2x.png');
              background-size: 25px;
              width: 25px;
              height: 19px;
              position: absolute;
              left: calc(50% - 25% - 180px);
              margin-top: 100px;
            }
            .testimonials > .content > .arrow-right{
              background-image: url('../static/resources/arrow-right@2x.png');
              background-size: 25px;
              width: 25px;
              height: 19px;
              position: absolute;
              right: calc(50% - 25% - 180px);
              margin-top: 100px;
            }
            #div_section1 > .partners {
              padding-top: 110px;
              text-align: center
            }
            #div_section1 > .partners > .title {
              font-size: 34px;
              color: #558d28;
              font-style: italic;
              font-weight: bold;
            }
            #div_section1 > .partners > .content > div {
              display: inline-block;
              vertical-align: top;
            }
            #div_section1 > .partners > .content > .img {
              background-size: 180px;
              background-repeat: no-repeat;
              background-position: 60px 30px;
              width: 300px;
              height: 200px;
              background-color: white;
              box-shadow: 0px 2px 2px #999;
            }
            #div_section1 > .partners > .content > .desc {
              width: 40%;
              margin-left: 20px;
              text-align: left;
            }
            #div_section1 > .partners > .content > .desc > p {
              color: black;
            }
            #div_section1 > .partners > .content > .desc > p:first-child {
              font-size: 20px;
              font-weight: bold;
            }
            #div_section1 > .partners > .content > .desc > p:nth-child(2) {
              line-height: 18px;
            }
            #div_section1 > .partners > .items > div:nth-child(1),
            #div_section1 > .partners > .items > div:nth-child(2),
            #div_section1 > .partners > .items > div:nth-child(3) {
              background-size: 160px;
              background-repeat: no-repeat;
              background-position: 40px 30px;
              width: 250px;
              height: 180px;
              background-color: white;
              box-shadow: 0px 2px 2px #999;
              display: inline-block;
              vertical-align: top;
              margin-left: 20px;
            }
            #div_section1 > .partners > .items > div.arrow-left {
              background-image: url('../static/resources/arrow-left@2x.png');
              background-size: 25px;
              width: 25px;
              height: 19px;
              position: absolute;
              left: calc(50% - 25% - 160px);
              margin-top: -100px;
            }
            #div_section1 > .partners > .items > div.arrow-right {
              background-image: url('../static/resources/arrow-right@2x.png');
              background-size: 25px;
              width: 25px;
              height: 19px;
              position: absolute;
              right: calc(50% - 25% - 160px);
              margin-top: -100px;
            }
            #div_section1 > .register {
              padding-top: 110px;
              text-align: center;
            }
            #div_section1 > .register > .title {
              font-size: 34px;
              font-style: italic;
              font-weight: bold;
              margin-bottom: 20px;
            }
            #div_section1 > .register > .subtitle {
              font-style: italic;
              width: 400px;
              margin: 0 auto;
              margin-bottom: 20px;
            }
            #div_section1 > .register > .input-group {
              color: white;
            }
            #div_section1 > .register > .input-group > div {
              display: inline-block;
              vertical-align: top;
              text-align: left;
              margin-left: 20px;
              width: 250px;
              margin-bottom: 10px;
            }
            #div_section1 > .register > .input-group > div > label {
              margin-bottom: 3px;
              padding-bottom: 0;
              font-size: 12px;
            }
            #div_section1 > .register > .input-group > div > input {
              width: 100%;
            }
            #div_section1 > .register > .msg {
              width: 520px;
              margin: 0 auto;
              text-align: left;
            }
            #div_section1 > .register > .msg > label {
              margin-bottom: 3px;
              padding-bottom: 0;
              font-size: 12px;
              color: white;
              margin-left: 10px;
            }
            #div_section1 > .register > .msg > textarea {
              width: 100%;
              margin-left: 10px;
            }
            #div_section1 > .register > button {
              border: none;
              width: 150px;
              height: 35px;
              margin-top: 30px;
              font-weight: 900px;
              color: white;
              font-size: 20px;
            }
            #div_section1 > .footer {
              padding-top: 80px;
            }
            #div_section1 > .footer > .link {
              text-align: center;
              width: 30%;
              margin: 0 auto;
            }
            #div_section1 > .footer > .link > a {
              margin-right: 10px;
              text-decoration: none;
              font-style: italic;
            }
            #div_section1 > .footer > .company-name {
              float: right;
              position: absolute;
              right: 20px;
              margin-top: -30px;
            }
            #div_section1 > .footer > .company-name > p {
              text-align: right;
              font-size: 12px;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .social-links {
              margin-top: -30px;
              margin-left: 30px;
            }
            .social-links > a > img {
              margin-right: 10px;
            }
            .social-links > a:first-child > img {
              width: 10px;
            }
            .social-links > a:nth-child(2) > img,
            .social-links > a:nth-child(3) > img {
              width: 15px;
            }



            .mar-top-50 {
              margin-top: -50px;
            }
            .mar-top-70 {
              margin-top: -70px;
            }
            .mar-top-71 {
              margin-top: -72px;
            }
            .gradient-green {
              background-image: linear-gradient(to right, #8dc051, #71a73c); 
            }
            .gradient-blue {
              background-image: linear-gradient(to right, #3a64a0, #1f3656); 
            }
            .gradient-gray {
              background-image: linear-gradient(to right, #5f5f5f, #2e2e2e); 
            }
          `}</style>
        </div>
    }
  </Page>
)

Index.getInitialProps = async function(ctx) {
  let homePageData
  homePageData = await new SportscardAPI(ctx).homepage()
  return {
    homePageData: homePageData
  } 
}

export default Index
