// Thực đơn theo bản PDF 4 trang của quán. Giá: đồng.
export type Dish = { name: string; en?: string; price: number; best?: boolean; img?: string; note?: string };
export type Group = { id: string; title: string; sub: string; items: Dish[] };

export const menu: Group[] = [
  {
    id: 'signature', title: 'Signature', sub: 'Món chính của nhà Nắng',
    items: [
      { name: 'Gà Kampot', en: 'Nguyên con · Whole chicken', price: 350000, best: true, img: 'ga-kampot' },
      { name: 'Sườn tảng đút lò', en: 'Slow-roasted pork spare ribs', price: 369000, best: true, img: 'suon-tang-dut-lo' },
      { name: 'Combo nướng', en: 'BBQ combo for 2–3 people', price: 390000, img: 'combo-nuong', note: 'Cho 2–3 người' },
      { name: 'Lẩu cá tầm', en: 'Sturgeon hot pot', price: 360000, img: 'lau-ca-tam' },
      { name: 'Lẩu gà lá é', en: 'Chicken hot pot, lemon basil', price: 250000, img: 'lau-ga-la-e' },
    ],
  },
  {
    id: 'bbq', title: 'BBQ tại bàn', sub: 'Table grill',
    items: [
      { name: 'Bò tảng sốt trứng muối', en: 'Beef steak, salted egg sauce', price: 189000, best: true, img: 'bo-tang-sot-trung-muoi' },
      { name: 'Bò nướng hít hà', en: 'Grilled beef, mustard sauce', price: 189000 },
      { name: 'Cá tầm nướng', en: 'Grilled sturgeon', price: 160000 },
      { name: 'Mực nướng sa tế bùng vị', en: 'Spicy grilled squid, chili salt', price: 139000 },
      { name: 'Heo rừng lai nướng mắc mật', en: 'Grilled wild boar, mắc mật leaves', price: 129000 },
      { name: 'Ba chỉ bò', en: 'Grilled beef belly', price: 129000 },
      { name: 'Tôm nướng muối ớt', en: 'Grilled shrimp, chili salt', price: 129000 },
      { name: 'Nọng má heo nướng', en: 'Grilled pork jowl', price: 119000 },
      { name: 'Nầm nướng chao', en: 'Grilled pork udder, fermented tofu', price: 109000, best: true },
      { name: 'Chẳng dừng heo', en: 'Grilled pork skirt', price: 89000, best: true, img: 'chang-dung-heo' },
      { name: 'Ba chỉ heo', en: 'Grilled pork belly', price: 89000 },
      { name: 'Chân gà rút xương', en: 'Boneless chicken feet', price: 79000 },
      { name: 'Gọi thêm · Kim chi', en: 'Kimchi side', price: 30000 },
    ],
  },
  {
    id: 'khai-vi', title: 'Khai vị', sub: 'Appetizers',
    items: [
      { name: 'Salad rong nho sốt mè rang', en: 'Sea grape salad, roasted sesame dressing', price: 115000, img: 'salad-rong-nho' },
      { name: 'Salad tôm trái cây nhiệt đới', en: 'Tropical fruit & shrimp salad', price: 155000 },
      { name: 'Salad dầu giấm', en: 'Garden salad with vinaigrette', price: 79000 },
      { name: 'Súp gà nấm', en: 'Chicken & mushroom soup', price: 60000 },
      { name: 'Súp Tom Yum hải sản', en: 'Seafood Tom Yum soup', price: 140000 },
    ],
  },
  {
    id: 'an-choi', title: 'Món ăn chơi', sub: 'Small bites',
    items: [
      { name: 'Mực hấp chanh', en: 'Steamed squid, spicy lime', price: 169000, img: 'muc-hap-chanh' },
      { name: 'Tôm tái sốt Thái', en: 'Rare shrimp in Thai sauce', price: 169000, img: 'tom-tai-sot-thai' },
      { name: 'Gỏi bò ngũ sắc', en: 'Five-color spicy beef salad', price: 169000 },
      { name: 'Sứa sốt Namjim', en: 'Jellyfish with nam jim sauce', price: 89000, best: true, img: 'sua-sot-namjim' },
      { name: 'Đậu hũ tắm sốt cay', en: 'Tofu in spicy sauce', price: 89000, best: true, img: 'dau-hu-tam-sot-cay' },
      { name: 'Chân gà sốt Thái', en: 'Chicken feet in Thai sauce', price: 99000 },
      { name: 'Khoai tây + gà vòng lắc phô mai', en: 'Cheese-shaken fries & chicken nuggets', price: 99000 },
      { name: 'Khoai tây chiên giòn rụm', en: 'Crispy french fries', price: 79000 },
      { name: 'Khoai lang phô mai trứng muối', en: 'Baked sweet potato, cheese & salted egg', price: 59000, best: true, img: 'khoai-lang-pho-mai' },
      { name: 'Đậu bắp luộc chấm chao', en: 'Boiled okra, fermented tofu dip', price: 50000 },
      { name: 'Rau củ kho quẹt', en: 'Boiled vegetables, caramelized kho quẹt dip', price: 89000 },
      { name: 'Khô heo gác bếp Tây Bắc', en: 'Northwest-style smoked pork jerky', price: 99000 },
      { name: 'Tré trộn bắt mồi', en: 'Vietnamese fermented pork salad', price: 99000 },
    ],
  },
  {
    id: 'com-mi', title: 'Cơm & Mì', sub: 'Rice & noodles',
    items: [
      { name: 'Cơm chiên tỏi trứng', en: 'Garlic egg fried rice', price: 89000, best: true },
      { name: 'Cơm chiên cá mặn', en: 'Salted fish fried rice', price: 99000 },
      { name: 'Cơm chiên tôm ớt xanh', en: 'Green chili shrimp fried rice', price: 99000 },
      { name: 'Mì xào bò', en: 'Stir-fried noodles with beef', price: 110000 },
    ],
  },
  {
    id: 'do-uong', title: 'Đồ uống', sub: 'Drink menu',
    items: [
      { name: 'Soda các vị', en: 'Chanh · Việt quất', price: 45000, best: true },
      { name: 'Trà mát', en: 'Trà đào', price: 45000 },
      { name: 'Trà nóng', en: 'Trà cam quế · Trà gừng táo đỏ', price: 45000 },
      { name: 'Nước ngọt', en: 'Coca · Sprite · Sting', price: 20000 },
      { name: 'Nước suối', price: 15000 },
      { name: 'Bia Tiger Bạc (chai nhí)', price: 23000 },
      { name: 'Bia Ken Bạc', price: 28000 },
      { name: 'Rượu nếp mới', price: 140000 },
      { name: 'Vodka', price: 120000 },
      { name: 'Soju', price: 99000 },
    ],
  },
];

// Món nên thử ở trang chủ, theo thứ tự hiển thị (món đầu là ô lớn).
export const picks = [
  'Combo nướng', 'Gà Kampot', 'Sườn tảng đút lò', 'Bò tảng sốt trứng muối', 'Lẩu cá tầm',
  'Lẩu gà lá é', 'Chẳng dừng heo', 'Đậu hũ tắm sốt cay', 'Tôm tái sốt Thái',
];

export const allDishes = menu.flatMap((g) => g.items);
export const findDish = (name: string) => allDishes.find((d) => d.name === name)!;
export const vnd = (n: number) => n.toLocaleString('vi-VN').replace(/,/g, '.');
