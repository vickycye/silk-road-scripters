import { NextRequest, NextResponse } from 'next/server';
import { fetchVideoDetails } from '../../services/youtube';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return NextResponse.json(
      { error: 'Video ID is required' },
      { status: 400 }
    );
  }

  try {
    const [videoDetails] = await fetchVideoDetails([videoId]);
    
    if (!videoDetails) {
      return NextResponse.json(
        { error: 'Video not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      title: videoDetails.title,
      channelTitle: videoDetails.channelTitle,
      thumbnailUrl: videoDetails.thumbnailUrl
    });
  } catch (error) {
    console.error('YouTube API error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch video details' },
      { status: 500 }
    );
  }
} 