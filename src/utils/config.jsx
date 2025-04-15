const GOOGLE_API_KEY = "AIzaSyD7WMIin5c8tH9ssVi9Q8Eqi6hxKXA-cLg";
// export const GOOGLE_API_KEY = "AIzaSyDYDj8HiIJtcwepyJBESow6i0F_-qoWex0";

export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="
    + GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY + "&id=";

export const YOUTUBE_VIDEOS_COMMENTS =
    "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&maxResults=80&key=" + GOOGLE_API_KEY + "&videoId=";

export const YOUTUBE_CHANNEL_DP_API =
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&key=" + GOOGLE_API_KEY + "&id=";

export const YouTube_Suggestions_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YouTube_SEARCH_API =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&key=" + GOOGLE_API_KEY + "&q=";