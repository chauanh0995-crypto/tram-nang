' Chạy ẩn tập lệnh đăng bài (không hiện cửa sổ dòng lệnh).
' Task Scheduler gọi tệp này; tệp này gọi dang-bai.sh bằng Git Bash và chờ chạy xong.
Set sh = CreateObject("WScript.Shell")
cmd = """C:\Program Files\Git\bin\bash.exe"" /c/SEODALATNOW/tram-nang-bbq/scripts/dang-bai.sh"
code = sh.Run(cmd, 0, True)
WScript.Quit code
