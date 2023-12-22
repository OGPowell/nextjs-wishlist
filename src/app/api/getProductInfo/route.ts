import { NextResponse } from 'next/server';
import ExtractImages from './ExtractImages';

export async function GET(request: Request) {
  const params = new URLSearchParams(request.url?.split('?')[1]);
  const link = params.get('link');

  if (!link) {
    return NextResponse.json(
      { error: 'No query parameters provided' },
      { status: 400 }
    );
  }

  try {
    // Fetch product details from Amazon API
    const productResponse = await fetch(link as string);
    const html = await productResponse.text();

    const imageURLs = ExtractImages(html);

    if (!imageURLs) {
      throw new Error('Failed to parse images. Please try again.');
    }

    return NextResponse.json(imageURLs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
