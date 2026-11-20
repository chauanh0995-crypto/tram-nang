// Hỏi – Đáp. Câu trả lời phải đúng thực tế của quán: Google và các trợ lý AI trích nguyên văn.
import { site } from './site';

export type QA = { q: string; a: string };

export const faqGeneral: QA[] = [
  { q: 'Trạm Nắng BBQ ở đâu?',
    a: `Trạm Nắng BBQ & More ở ${site.address}, gần trung tâm thành phố và có bãi đậu xe rộng.` },
  { q: 'Trạm Nắng mở cửa mấy giờ, có nghỉ ngày nào không?',
    a: 'Quán mở cửa từ 15h đến 22h tất cả các ngày trong tuần, không nghỉ ngày nào. Quán nhận order cuối lúc 21h30.' },
  { q: 'Giá ở Trạm Nắng khoảng bao nhiêu?',
    a: 'Món nướng tại bàn từ 79.000đ, món ăn chơi từ 50.000đ, lẩu từ 250.000đ. Combo nướng cho 2–3 người giá 390.000đ, gà Kampot nguyên con 350.000đ.' },
  { q: 'Có cần đặt bàn trước không?',
    a: `Nên đặt trước, nhất là tối cuối tuần hoặc khi muốn ngồi bàn sát lan can ngắm thành phố. Đặt qua điện thoại hoặc Zalo ${site.phoneDisplay}, hoặc nhắn Messenger fanpage Trạm Nắng.` },
  { q: 'Trời mưa có chỗ ngồi không?',
    a: 'Có. Ngoài sàn gỗ và sân cỏ ngoài trời, quán có khu vực trong nhà nên trời mưa hay lạnh vẫn ngồi nướng bình thường.' },
  { q: 'Quán có nhận đoàn đông không?',
    a: `Có. Trạm Nắng nhận đoàn khách đông, sức chứa khoảng ${site.capacity} khách. Đoàn đông nên nhắn quán trước để sắp xếp chỗ và chuẩn bị món.` },
  { q: 'Quán nhận thanh toán bằng gì?',
    a: 'Quán nhận tiền mặt và chuyển khoản.' },
  { q: 'Trạm Nắng có nhạc acoustic không?',
    a: 'Có. Acoustic thường diễn vào tối thứ Bảy hằng tuần, lịch cụ thể thay đổi theo từng tháng. Bạn nên nhắn quán hỏi lịch trước khi đi.' },
  { q: 'Đi giờ nào để ngắm hoàng hôn ở Trạm Nắng?',
    a: 'Mặt trời ở Đà Lạt lặn trong khoảng 17h20 đến 18h20 tùy mùa. Nên đến trước giờ đó khoảng 45 phút để chọn bàn và nhóm bếp, kịp lúc trời đổi màu.' },
];

export const faqParty: QA[] = [
  { q: 'Decor sinh nhật ở Trạm Nắng có mất phí không?',
    a: 'Không. Quán trang trí bàn tiệc sinh nhật và kỷ niệm miễn phí, theo concept của quán.' },
  { q: 'Quán có hỗ trợ bánh sinh nhật và hoa không?',
    a: 'Có. Quán hỗ trợ đặt bánh và hoa cho khách, bạn chỉ cần đến trải nghiệm.' },
  { q: 'Tự mang bánh sinh nhật đến có bị tính phí không?',
    a: 'Không. Khách mang theo bánh sinh nhật không bị tính phí, quán hỗ trợ dao, dĩa và ly.' },
  { q: 'Đặt tiệc sinh nhật ở Trạm Nắng như thế nào?',
    a: `Nhắn Zalo hoặc gọi ${site.phoneDisplay}, cho quán biết số người, ngày giờ và dịp tổ chức. Quán sẽ trang trí bàn tiệc và gợi ý thực đơn theo số người. Nên báo càng sớm càng tốt, nhất là cuối tuần.` },
  { q: 'Tiệc đông người quán có nhận không?',
    a: `Có. Quán nhận từ nhóm nhỏ đến đoàn đông, sức chứa khoảng ${site.capacity} khách.` },
  { q: 'Trời mưa thì tiệc có bị hủy không?',
    a: 'Không cần hủy. Quán có khu vực trong nhà để chuyển bàn tiệc vào khi trời mưa.' },
];

export const faqSpace: QA[] = [
  { q: 'Trạm Nắng có view gì?',
    a: 'Sàn gỗ ngoài trời của quán nhìn thẳng ra tháp Vinaphone và các đồi nhà trung tâm Đà Lạt. Đẹp nhất lúc hoàng hôn và khi thành phố lên đèn.' },
  { q: 'Quán có những khu vực ngồi nào?',
    a: 'Quán có sàn gỗ ngắm phố, sân cỏ giăng đèn dây và khu vực trong nhà cho ngày mưa.' },
  { q: 'Quán có chỗ đậu xe không?',
    a: 'Có. Quán có bãi đậu xe rộng.' },
  { q: 'Quán chứa được bao nhiêu khách?',
    a: `Sức chứa của quán khoảng ${site.capacity} khách, nhận được cả đoàn đông.` },
  { q: 'Trạm Nắng cách trung tâm Đà Lạt bao xa?',
    a: `Quán ở ${site.address}, thuộc khu vực gần trung tâm thành phố.` },
];

export const faqSchema = (items: QA[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
});
