export const UserIcon = "https://github.com/AmanVerma1831/mytube/blob/main/src/assets/user-icon.png?raw=true";
export const SearchIcon = "https://raw.githubusercontent.com/AmanVerma1831/mytube/5fbd58b2b572b00d3951c3d65e208893f8147198/src/assets/search-icon.svg";
export const Youtube = "https://github.com/AmanVerma1831/mytube/blob/main/src/assets/YouTube_Logo.png?raw=true";
export const Hamburger = "https://raw.githubusercontent.com/AmanVerma1831/mytube/refs/heads/main/src/assets/Hamburger_icon.webp";

const GOOGLE_API_KEY = "AIzaSyD7WMIin5c8tH9ssVi9Q8Eqi6hxKXA-cLg";

export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="
    + GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY + "&id=";

export const YOUTUBE_VIDEOS_COMMENTS =
    "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&maxResults=500&key=" +
    GOOGLE_API_KEY + "&videoId=";

export const YOUTUBE_CHANNEL_DP_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&key=" +
    GOOGLE_API_KEY +
    "&id=";