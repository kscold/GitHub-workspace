#   문제 사이트별로 비밀번호를 생성하는 프로그램을 작성하세요.

#     http://naver.com
#     http://daum.net
#     http://google.com
#     http://youtube.com


#   조건

#   1. http:// 부분은 제외한다.
#   2. 처음 만나는 점(.) 이후 부분도 제외한다.
#   3. 남은 글자 중 처음 세 자리 + 글자 개수 + 글자 내 ‘e’의 개수 + ‘!’로 구성한다.
#   4. 프로그램을 실행했을 때 실행결과는 다음 형태로 나와야 한다.


#  실행결과

#  http://naver.com의 비밀번호는 nav51!입니다.

#   예시

#   1. http:// 부분 제외 → naver.com

#   2. 처음 만나는 점 이후 부분 제외 → naver

#   3. 남은 글자 중 처음 세 자리(nav) + 글자 개수(5) + 글자 내 ‘e’의 개수(1) + (!)

# url = "http://naver.com"
# url = "http://daum.net"
url = "http://google.com"
# url = "http://youtube.com"

dot_index = url.index(".")
name = url[7:dot_index]  # naver

password = name[:3] + str(len(name)) + str(name.count("e")) + "!"

print(f"{url}의 비밀번호는 {password}입니다.")
