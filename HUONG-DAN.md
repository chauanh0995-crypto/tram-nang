# Website Trạm Nắng BBQ & More (tramnang.vn)

Web tĩnh làm bằng Astro, không cần hosting. Có blog để viết bài SEO và trang soạn bài `/admin`.

## Chạy trên máy
```
cd tram-nang-bbq
npm install      # lần đầu
npm run dev      # mở http://localhost:5520
```

## Sửa thông tin quán, giá món
- Điện thoại, Zalo, Messenger, địa chỉ, giờ mở cửa: `src/data/site.ts`.
  Địa chỉ và giờ đang để trống, điền vào là web tự hiện ra.
- Món và giá: `src/data/menu.ts`. Sửa một chỗ, trang chủ và trang Thực đơn tự cập nhật.
- Món nên thử ở trang chủ: danh sách `picks` trong `src/data/menu.ts`.

## Viết bài
- **Cách 1, trang soạn bài:** mở `/admin/` bằng Chrome hoặc Edge.
  Đây là trình soạn bài miễn phí Sveltia CMS. Khi web lên mạng, bạn đăng nhập bằng GitHub.
- **Cách 2, viết file:** mỗi bài là một file `.md` trong `src/content/blog/`.
  Tên file chính là đường dẫn bài, ví dụ `blog/ten-file/`.

Mỗi bài cần có: tiêu đề, tiêu đề SEO (dưới 60 ký tự), mô tả SEO (120–160 ký tự), ảnh đại diện và mô tả ảnh.
Ảnh của bài đặt trong `public/images/blog/`.

## SEO có sẵn
- Thẻ title, description, canonical, Open Graph (ảnh khi chia sẻ Facebook/Zalo).
- Dữ liệu cấu trúc cho Google: Restaurant, Menu (giá từng món), BlogPosting, Breadcrumb.
- `sitemap-index.xml` và `robots.txt` tự tạo khi build.

## Còn thiếu
- Địa chỉ, link Google Maps, giờ mở cửa → `src/data/site.ts`.
- Đưa lên mạng: tạo kho GitHub, deploy lên Cloudflare Pages (miễn phí), trỏ tên miền tramnang.vn.
  Sau đó sửa `repo:` trong `public/admin/config.yml`.
