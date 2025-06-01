interface YouTubeVideo {
  id: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
}

const YOUTUBE_API_KEY = process.env.YOUTUBE_DATA_API_V3;

async function makeYouTubeRequest(url: string) {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API key is not configured. Please check your environment variables.');
  }

  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage = `YouTube API Error (${response.status}): `;
    try {
      const errorJson = JSON.parse(errorText);
      errorMessage += errorJson.error?.message || errorText;
    } catch {
      errorMessage += errorText || response.statusText;
    }
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function fetchVideoDetails(videoIds: string[]): Promise<YouTubeVideo[]> {
  const url = new URL('https://www.googleapis.com/youtube/v3/videos');
  url.searchParams.append('part', 'snippet');
  url.searchParams.append('id', videoIds.join(','));
  url.searchParams.append('key', YOUTUBE_API_KEY!);

  const data = await makeYouTubeRequest(url.toString());
  
  if (!data.items?.length) {
    return [];
  }

  return data.items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    channelTitle: item.snippet.channelTitle,
    thumbnailUrl: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
  }));
}

export async function searchVideos(query: string, maxResults: number = 10): Promise<YouTubeVideo[]> {
  const url = new URL('https://www.googleapis.com/youtube/v3/search');
  url.searchParams.append('part', 'snippet');
  url.searchParams.append('q', query);
  url.searchParams.append('type', 'video');
  url.searchParams.append('maxResults', maxResults.toString());
  url.searchParams.append('key', YOUTUBE_API_KEY!);

  const data = await makeYouTubeRequest(url.toString());

  if (!data.items?.length) {
    return [];
  }

  return data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    channelTitle: item.snippet.channelTitle,
    thumbnailUrl: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
  }));
} 