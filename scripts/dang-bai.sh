#!/usr/bin/env bash
# Build lại web và đưa lên tramnang.vn.
# Chạy tự động mỗi ngày bằng Task Scheduler của Windows (tác vụ "TramNang-DangBai").
# Bài viết có ngày đăng (date) từ hôm nay trở về trước sẽ hiện lên web sau lần chạy này.
# Chạy tay: mở Git Bash rồi gõ  bash /c/SEODALATNOW/tram-nang-bbq/scripts/dang-bai.sh

REPO="/c/SEODALATNOW/tram-nang-bbq"
LOG="$REPO/scripts/dang-bai.log"
NODE_DIR="/c/Users/HP/AppData/Local/Microsoft/WinGet/Packages/OpenJS.NodeJS.LTS_Microsoft.Winget.Source_8wekyb3d8bbwe/node-v24.18.1-win-x64"
export PATH="$NODE_DIR:/mingw64/bin:/usr/bin:$PATH"

log() { echo "$(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG"; }
fail() { log "LOI: $1"; exit 1; }

cd "$REPO" || exit 1
log "Bat dau"

npm run build > "$REPO/scripts/build-last.txt" 2>&1 || fail "build khong thanh cong, xem scripts/build-last.txt"

# Các tệp bắt buộc phải có trước khi đưa lên
for f in index.html CNAME google67196d843732af74.html sitemap-index.xml; do
  [ -f "dist/$f" ] || fail "thieu dist/$f"
done

POSTS=$(find dist/blog -mindepth 1 -maxdepth 1 -type d | wc -l)

cd dist || fail "khong vao duoc dist"
rm -rf .git
git init -q -b gh-pages || fail "git init"
git config user.name "chauanh0995-crypto"
git config user.email "chauanh0995-crypto@users.noreply.github.com"
git config core.autocrlf false
git add -A > /dev/null 2>&1
git commit -q -m "Ban build tu dong $(date '+%Y-%m-%d')" || fail "git commit"
git push -q -f https://github.com/chauanh0995-crypto/tram-nang.git gh-pages >> "$LOG" 2>&1 || { rm -rf .git; fail "git push"; }
rm -rf .git

log "Xong: da dua len web, $POSTS bai dang hien"

# Báo Bing (IndexNow) danh sách trang, để trang mới được lập chỉ mục nhanh hơn.
# Chỉ gửi khi số bài thay đổi so với lần trước. Lỗi ở bước này không ảnh hưởng tới web.
cd "$REPO"
KEY=$(cat scripts/indexnow-key.txt 2>/dev/null)
LAST=$(cat scripts/indexnow-last.txt 2>/dev/null)
if [ -n "$KEY" ] && [ "$POSTS" != "$LAST" ]; then
  sleep 90
  URLS=$(grep -o '<loc>[^<]*</loc>' dist/sitemap-0.xml | sed 's/<loc>//; s/<\/loc>//' | sed 's/.*/"&"/' | paste -sd, -)
  CODE=$(curl -s -o /dev/null -m 30 -w '%{http_code}' -X POST 'https://api.indexnow.org/indexnow' \
    -H 'Content-Type: application/json; charset=utf-8' \
    -d "{\"host\":\"tramnang.vn\",\"key\":\"$KEY\",\"keyLocation\":\"https://tramnang.vn/$KEY.txt\",\"urlList\":[$URLS]}")
  log "IndexNow: ma tra ve $CODE"
  case "$CODE" in 200|202) echo "$POSTS" > scripts/indexnow-last.txt ;; esac
fi
