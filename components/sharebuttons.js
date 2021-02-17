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

export default function Sharebuttons({ children, postURL }) {
  return (
    <div className={utilStyles.centerContentCenter}>
        <EmailShareButton url={constructURL(postURL)}>
            <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <FacebookShareButton url={constructURL(postURL)}>
            <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <FacebookMessengerShareButton url={constructURL(postURL)}>
            <FacebookMessengerIcon size={32} round={true} />
        </FacebookMessengerShareButton>
        <LinkedinShareButton url={constructURL(postURL)}>
            <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <TwitterShareButton url={constructURL(postURL)}>
            <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <PinterestShareButton media={'https://dominickgurnari.com/_next/image?url=%2Fimages%2Fprofile.jpg&w=384&q=75'} url={constructURL(postURL)}>
            <PinterestIcon size={32} round={true} />
        </PinterestShareButton>
        <RedditShareButton url={constructURL(postURL)}>
            <RedditIcon size={32} round={true} />
        </RedditShareButton>
    </div>
  );

  function constructURL(postURL) {
    const url = 'https://dominickgurnari.com/posts/' + postURL;
    return url;
  };
}