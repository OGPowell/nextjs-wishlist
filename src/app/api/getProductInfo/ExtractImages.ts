import { JSDOM } from 'jsdom';

export default function ExtractImages(html: string): string[] {
  const dom = new JSDOM(html);
  const images = dom.window.document.querySelectorAll('img');
  let imageURLs = Array.from(images).map((img) => {
    let src = img.src;
    if (!src.startsWith('http://') && !src.startsWith('https://')) {
      src = 'https:' + src;
    }
    return src;
  });

  // Only return the first 10 images
  imageURLs = imageURLs.slice(0, 20);

  return imageURLs;
}
