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
