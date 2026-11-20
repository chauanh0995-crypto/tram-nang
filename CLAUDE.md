# Website Trạm Nắng BBQ & More (tramnang.vn)

Web tĩnh Astro cho quán nướng Trạm Nắng ở Đà Lạt. Chủ quán không rành kỹ thuật và thường nhắn từ điện thoại. Trả lời bằng tiếng Việt, ngắn gọn, không dùng thuật ngữ lập trình.

## Việc hay gặp nhất: viết bài blog theo từ khóa

Khi chủ quán gửi một từ khóa hoặc chủ đề (ví dụ "viết bài: quán nướng Đà Lạt cho gia đình"), làm theo thứ tự:

1. Đọc `src/data/site.ts`, `src/data/menu.ts`, `src/data/faq.ts` để lấy thông tin đúng.
2. Xem `src/content/blog/` để tránh trùng chủ đề và để chèn link sang bài liên quan.
3. Viết một file `.md` mới trong `src/content/blog/` theo mẫu bên dưới.
4. Chạy `npm run build`. Build phải thành công.
5. Commit và push lên nhánh `main`. Nếu kho đã có `.github/workflows/deploy.yml` thì web tự cập nhật sau khoảng 2 phút. Nếu chưa có, báo chủ quán rằng bài đã lưu nhưng chưa lên web.
6. Báo lại: tiêu đề bài, đường dẫn `https://tramnang.vn/blog/<tên-file>/`, và những chỗ cần chủ quán xác nhận.

Nếu chủ quán gửi nhiều từ khóa, viết mỗi từ khóa một bài.

### Mẫu file bài viết

Tên file: chữ thường không dấu, nối bằng gạch ngang, chứa từ khóa chính. Tên file chính là đường dẫn bài.

```markdown
---
title: "Tiêu đề hiện trên trang, chứa từ khóa chính"
seoTitle: "Tiêu đề hiện trên Google, dưới 60 ký tự"
description: "Mô tả 120–160 ký tự, có từ khóa và một lý do để bấm vào."
date: 2026-11-20
cover: /images/ten-anh.webp
coverAlt: "Mô tả đúng nội dung ảnh"
category: "Món ngon"
draft: false
---

Đoạn mở đầu 2–3 câu, trả lời thẳng câu hỏi của người tìm.

## Tiêu đề phụ

Nội dung...

**Trạm Nắng BBQ & More**: 18 Đống Đa, phường Xuân Hương - Đà Lạt · Mở cửa 15h – 22h (order cuối 21h30) · Đặt bàn: [0865 751 768](tel:0865751768)
```

- `date`: ngày đăng, định dạng `YYYY-MM-DD`. Bài mới nhất hiện lên đầu.
- `category`: một trong `Món ngon`, `Không gian`, `Tiệc & Decor`, `Sự kiện`, `Kinh nghiệm`.
- `description` tối đa 170 ký tự, dài hơn thì build lỗi.

### Quy tắc SEO và GEO

GEO là để các trợ lý AI (ChatGPT, Gemini, AI Overview của Google) trích dẫn bài. AI thích câu trả lời ngắn, rõ, có số liệu.

- Từ khóa chính xuất hiện trong: tên file, `title`, `seoTitle`, `description`, đoạn mở đầu và ít nhất một tiêu đề phụ. Viết tự nhiên, không nhồi.
- Tiêu đề có chữ "Đà Lạt" khi hợp lý.
- Đoạn mở đầu trả lời thẳng câu hỏi trong 2–3 câu. Đây là đoạn AI hay trích nhất.
- Mỗi tiêu đề phụ là một câu hỏi hoặc một ý khách thật sự quan tâm. Câu đầu tiên dưới tiêu đề phụ trả lời luôn.
- Có ít nhất một bảng hoặc danh sách: giá, giờ, các bước, so sánh.
- Ghi số cụ thể: giá, giờ, số người.
- 2–4 ảnh thật của quán, mỗi ảnh có mô tả đúng nội dung.
- 2–3 link sang trang khác của web: `/thuc-don/`, `/khong-gian/`, `/tiec-sinh-nhat/`, bài blog liên quan.
- Dài khoảng 400–700 từ. Không viết dài cho đủ chữ.
- Kết bài bằng dòng địa chỉ, giờ mở cửa, số đặt bàn như trong mẫu.

### Quy tắc về sự thật (quan trọng nhất)

Bài hiển thị công khai và AI sẽ lặp lại nguyên văn, nên sai một chi tiết là sai ở mọi nơi.

- **Giá và tên món** chỉ lấy từ `src/data/menu.ts`. Khi cộng tiền gợi ý thực đơn, tính lại cho đúng.
- **Thông tin quán** chỉ lấy từ `src/data/site.ts` và `src/data/faq.ts`.
- **Không bịa:** không tự thêm khuyến mãi, giải thưởng, đánh giá của khách, lịch sử quán, nguồn gốc món, cách chế biến, hay số liệu không có trong dữ liệu.
- Điều gì chưa biết thì viết chung và hướng khách nhắn quán, hoặc hỏi lại chủ quán trước khi viết.
- Thông tin thời tiết, giờ hoàng hôn, mùa du lịch: viết ở mức khoảng chừng.

Những điều đã được chủ quán xác nhận:

- Địa chỉ: 18 Đống Đa, phường Xuân Hương - Đà Lạt. Gần trung tâm, bãi đậu xe rộng.
- Mở cửa 15h – 22h tất cả các ngày, không nghỉ. Order cuối 21h30.
- Đặt bàn: điện thoại và Zalo 0865 751 768, Messenger fanpage.
- Ba khu vực: sàn gỗ ngắm phố (view tháp Vinaphone), sân cỏ đèn dây, khu trong nhà.
- Decor sinh nhật, kỷ niệm miễn phí theo concept của quán. Quán hỗ trợ đặt bánh và hoa. Khách tự mang bánh sinh nhật không bị tính phí.
- Acoustic thường vào tối thứ Bảy hằng tuần, lịch thay đổi theo tháng.
- Nhận đoàn đông, sức chứa khoảng 800 khách.
- Thanh toán: tiền mặt, chuyển khoản.
- Từ tháng 11 quán trang trí Giáng sinh.

Chưa xác nhận, **không viết**: chính sách phụ thu, lịch mở cửa Tết, điều kiện đặt trước, bãi xe có nhận ô tô hay không.

### Ảnh có sẵn

Ảnh nằm trong `public/images/`, gọi bằng `/images/<tên>.webp`. Chọn ảnh khớp nội dung và viết mô tả đúng thứ thấy trong ảnh.

- **View, hoàng hôn:** `hero-hoang-hon-lon`, `ban-tiec-hoang-hon`, `san-go-hoang-hon`, `bang-hieu-hoang-hon`, `thap-vinaphone-ban-ngay`, `san-go-ghe-ngam-pho`
- **Sân cỏ:** `san-co-hoang-hon`, `san-co-hoang-hon-tren-cao`, `san-co-den-day`
- **Ban đêm:** `flycam-dem-toan-canh`, `flycam-dem-san-co`, `ban-tiec-dem-ngam-pho`, `ban-tiec-dem-bang-hieu`
- **Khu trong nhà, bãi xe:** `khu-trong-nha`, `khu-trong-nha-ban-go`, `bai-dau-xe`
- **Decor sinh nhật:** `decor-sinh-nhat-view-thap`, `decor-sinh-nhat-ban-tiec`, `decor-happy-birthday`, `decor-sinh-nhat-toi`, `decor-sinh-nhat-mon-an`, `decor-hoa-nen`, `decor-tiec-view-thap`, `decor-banh-sinh-nhat`
- **Noel:** `noel-san-co`, `noel-cay-thong`, `noel-cong-den`, `noel-ban-tiec`, `san-co-decor-noel`, `ban-tiec-decor-noel`
- **Bàn tiệc, món ăn chụp thật:** `ga-kampot-view-pho`, `ga-kampot-nieu-dat`, `ga-kampot-dem`, `ban-an-tu-tren-cao`, `bo-tang-can-canh`, `nuong-tai-ban`, `salad-tom-can-canh`, `tom-tai-sot-thai-can-canh`, `ban-tiec-ngam-pho`
- **Ảnh món nền trong suốt** (dùng cho thực đơn, không hợp làm ảnh bài): `combo-nuong`, `ga-kampot`, `suon-tang-dut-lo`, `lau-ca-tam`, `lau-ga-la-e`, và các món khác trong `menu.ts`

Không dùng ảnh thấy rõ mặt khách thật. Chủ quán gửi ảnh mới thì nén về webp, cạnh dài tối đa 1200px, rồi thêm vào danh sách này.

### Giọng văn

- Tiếng Việt tự nhiên, thân thiện, như người địa phương mách chỗ ăn. Không quảng cáo lố, không dùng "tuyệt vời nhất", "số 1".
- Câu ngắn, đoạn ngắn, đi thẳng vào ý.
- Không viết đánh giá giả dưới danh nghĩa khách.

Lịch chủ đề 12 tuần nằm trong `LICH-BAI-VIET.md`. Khi chủ quán nói "viết bài tuần này" mà không nêu chủ đề, lấy bài kế tiếp trong lịch.

## Cấu trúc dự án

- `src/data/site.ts`: thông tin quán. `src/data/menu.ts`: món và giá. `src/data/faq.ts`: hỏi đáp.
- `src/pages/`: các trang. `src/pages/en/`, `src/pages/zh/`: bản tiếng Anh, tiếng Trung (mỗi bản một trang).
- `src/components/`, `src/layouts/Base.astro`, `src/styles/`: giao diện.
- `src/content/blog/`: bài viết.
- `public/`: ảnh, clip, `llms.txt`, `robots.txt`, `CNAME`.

Tệp `llms.txt` tự sinh từ `src/pages/llms.txt.ts`, danh sách bài tự cập nhật. Bài có `date` ở tương lai chưa hiện trên web cho tới ngày đó (xem `src/data/posts.ts`).

## Không được làm

- Không xóa `public/google67196d843732af74.html` (xác minh Google Search Console) và `public/CNAME`.
- Không tìm "tệp không dùng" bằng cách dò tên tệp: ảnh món được gọi theo tên trong `menu.ts`.
- Không sửa giá trong `menu.ts` nếu chủ quán không yêu cầu.

## Chạy và kiểm tra

```
npm install
npm run dev     # http://localhost:5520
npm run build   # phải chạy được trước khi push
```
