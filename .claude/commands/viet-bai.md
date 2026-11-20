---
description: Viết một bài blog chuẩn SEO/GEO theo từ khóa rồi đưa lên web
argument-hint: <từ khóa hoặc chủ đề>
---

Viết bài blog cho Trạm Nắng theo từ khóa: **$ARGUMENTS**

Làm đúng quy trình "Viết bài blog theo từ khóa" trong `CLAUDE.md`:

1. Đọc `src/data/site.ts`, `src/data/menu.ts`, `src/data/faq.ts` và danh sách bài trong `src/content/blog/`.
2. Nếu từ khóa trùng với bài đã có, đề xuất góc viết khác hoặc cập nhật bài cũ thay vì viết bài trùng.
3. Viết file `.md` mới theo mẫu, tuân thủ quy tắc SEO/GEO và quy tắc về sự thật.
5. Chạy `npm run build`, sửa cho tới khi build thành công.
6. Commit, push lên `main`.
7. Trả lời ngắn gọn bằng tiếng Việt: tiêu đề, đường dẫn bài, và các chỗ cần chủ quán xác nhận (nếu có).

Nếu không có từ khóa, lấy bài kế tiếp chưa viết trong `LICH-BAI-VIET.md`.
