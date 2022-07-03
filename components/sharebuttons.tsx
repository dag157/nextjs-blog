import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    RedditShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    TwitterIcon,
    PinterestIcon,
    RedditIcon
} from "react-share";
import utilStyles from '../styles/utils.module.css';

const Sharebuttons = ({ children, postURL }) => {
  return (
    <div className={utilStyles.centerContentCenter}>
        { /*
        // @ts-ignore issue with package*/}
        <EmailShareButton url={constructURL(postURL)}>
            <EmailIcon size={32} round={true} />
        </EmailShareButton>
        { /*
        // @ts-ignore issue with package*/}
        <FacebookShareButton url={constructURL(postURL)}>
            <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        { /*
        // @ts-ignore issue with package*/}
        <FacebookMessengerShareButton url={constructURL(postURL)}>
            <FacebookMessengerIcon size={32} round={true} />
        </FacebookMessengerShareButton>
        { /*
        // @ts-ignore issue with package*/}
        <LinkedinShareButton url={constructURL(postURL)}>
            <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        { /*
        // @ts-ignore issue with package*/}
        <TwitterShareButton url={constructURL(postURL)}>
            <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        { /*
        // @ts-ignore issue with package*/}
        <PinterestShareButton media={'https://dominickgurnari.com/_next/image?url=%2Fimages%2Fprofile.jpg&w=384&q=75'} url={constructURL(postURL)}>
            <PinterestIcon size={32} round={true} />
        </PinterestShareButton>
        { /*
        // @ts-ignore issue with package*/}
        <RedditShareButton url={constructURL(postURL)}>
            <RedditIcon size={32} round={true} />
        </RedditShareButton>
    </div>
  );

  function constructURL(postURL) {
    const url = 'https://dominickgurnari.com/' + postURL;
    return url;
  };
}
export default Sharebuttons;