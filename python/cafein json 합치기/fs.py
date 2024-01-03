# import json
# # 첫 번째 JSON 파일 경로
# input_file1 = 'data3.json'
# # 두 번째 JSON 파일 경로
# input_file2 = 'data4.json'
#
# input_file3 = 'data5.json'
# # 결과 JSON 파일 경로
# output_file = 'combinedData.json'
# # JSON 파일 1 읽기
# with open(input_file1, 'r', encoding='utf-8') as file1:
#     data1 = json.load(file1)
# # JSON 파일 2 읽기
# with open(input_file2, 'r', encoding='utf-8') as file2:
#     data2 = json.load(file2)
#
# with open(input_file3, 'r', encoding='utf-8') as file3:
#     data3 = json.load(file3)
# # 데이터를 순서대로 합치기
# combined_data = []
# for item1, item2, item3 in zip(data1, data2, data3):
#     new_item = {
#         "prodName": item1["prodName"],
#         "prodImage": item1["prodImage"],
#         # "prodCafe": item1["prodCafe"],
#         "prodContent": item2["text"],
#         "prodTag": item1.get("prodTag", []),
#         "prodPrice": item3.get("price", ""),
#         "prodDetail": {
#             "volume": item2.get("volume", ""),
#             "kcal": item2.get("kcal", ""),
#             "caffeine": item2.get("caffeine", ""),
#             "sodium": item2.get("sodium", ""),
#             "sugars": item2.get("sugars", ""),
#             "sat_FAT": item2.get("sat_FAT", "")
#         }
#     }
#     combined_data.append(new_item)
# # 새로운 JSON 파일로 저장
# with open(output_file, 'w', encoding='utf-8') as outfile:
#     json.dump(combined_data, outfile, indent=2, ensure_ascii=False)
# print('새로운 JSON 파일 생성 완료:', output_file)


import json

# 첫 번째 JSON 파일 경로
input_file1 = 'data1.json'
# 두 번째 JSON 파일 경로
input_file2 = 'data2.json'

input_file3 = 'data3.json'

output_file = 'combinedData.json'
# JSON 파일 1 읽기
with open(input_file1, 'r', encoding='utf-8') as file1:
    data1 = json.load(file1)
# JSON 파일 2 읽기
with open(input_file2, 'r', encoding='utf-8') as file2:
    data2 = json.load(file2)

with open(input_file3, 'r', encoding='utf-8') as file3:
    data3 = json.load(file3)

# 데이터를 순서대로 합치기
combined_data = []
for item1, item2, item3 in zip(data1, data2, data3):
    new_item = {
        "prodName": item1["prodName"],
        "prodImage": item1["prodImage"],
        "prodCafe": item1["prodCafe"],
        "prodContent": item1["prodContent"],
        "prodTag": item1["prodTag"],
        "prodPrice": item2["prodPrice"],
        "prodDetail": {
            "volume": item3.get("volume", ""),
            "kcal": item3.get("kcal", ""),
            "caffeine": item3.get("caffeine", ""),
            "sodium": item3.get("sodium", ""),
            "sugars": item3.get("sugars", ""),
            "sat_FAT": item3.get("sat_FAT", "")
        }
    }
    combined_data.append(new_item)
# 새로운 JSON 파일로 저장
with open(output_file, 'w', encoding='utf-8') as outfile:
    json.dump(combined_data, outfile, indent=2, ensure_ascii=False)
print('새로운 JSON 파일 생성 완료:', output_file)
