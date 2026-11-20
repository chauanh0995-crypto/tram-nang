import { getCollection } from 'astro:content';

// Chỉ lấy bài không phải nháp và đã tới ngày đăng.
// Bài có ngày ở tương lai được viết sẵn trong kho nhưng chưa hiện trên web;
// tới ngày đó, lần build hằng ngày sẽ tự đưa bài lên.
export async function getPublishedPosts() {
  const now = Date.now();
  const posts = await getCollection('blog', (p) => !p.data.draft && p.data.date.valueOf() <= now);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
