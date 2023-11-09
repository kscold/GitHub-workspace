# from flask import Flask, jsonify, request
# import requests

# app = Flask(__name__)


# @app.route("/getWeather", methods=["GET"])
# def get_weather():
#     api_url = (
#         "https://apis.data.go.kr/1360000/TourStnInfoService1/getTourStnVilageFcst1"
#     )
#     service_key = "ZtGq7Au5Kf%2FNiW3xAO04zSKex1VLDedcbpzt1nXzTkfpQKnN%2FT1F0a4yttny2a6k6ONyBTMBG8QTBUbMNVi4bQ%3D%3D"
#     page_no = "1"
#     num_of_rows = "10"
#     data_type = "JSON"
#     current_date = "20220329"
#     hour = "24"
#     course_id = "1"

#     url = f"{api_url}?ServiceKey={service_key}&pageNo={page_no}&numOfRows={num_of_rows}&dataType={data_type}&CURRENT_DATE={current_date}&HOUR={hour}&COURSE_ID={course_id}"

#     response = requests.get(url, verify=False)

#     if response.status_code == 200:
#         data = response.json()
#         return jsonify(data)
#     else:
#         return "Error: Unable to fetch data from the API"


# if __name__ == "__main__":
#     app.run(debug=True, port=4000)


# from flask import Flask, jsonify, request
# import requests
# import xml.etree.ElementTree as ET

# app = Flask(__name__)


# def recursive_parse(xml):
#     data = {}
#     for child in xml:
#         if child.tag in [
#             "AREA_NM",
#             "LAT",
#             "LNG",
#             "TEMP",
#             "SENSIBLE_TEMP",
#             "PRECIPITATION",
#         ]:
#             data[child.tag] = child.text
#         data.update(recursive_parse(child))
#     return data


# @app.route("/get", methods=["GET"])
# def get_weather():
#     url = "http://openapi.seoul.go.kr:8088/487a5844577363343130326b6a625576/xml/citydata/1/5/영등포 타임스퀘어"

#     response = requests.get(url, verify=False)

#     if response.status_code == 200:
#         # Parse the XML response
#         root = ET.fromstring(response.text)

#         # Convert the XML data to a dictionary
#         data = recursive_parse(root)

#         return jsonify(data)
#     else:
#         return "Error: Unable to fetch data from the API"


# if __name__ == "__main__":
#     app.run(debug=True, port=4000)


from flask import Flask, jsonify, request
import requests
import xml.etree.ElementTree as ET

app = Flask(__name__)


def recursive_parse(xml):
    data = {}
    for child in xml:
        if child.tag in [
            "AREA_NM",
            "LAT",
            "LNG",
            "TEMP",
            "SENSIBLE_TEMP",
            "PRECIPITATION",
        ]:
            data[child.tag] = child.text
        data.update(recursive_parse(child))
    return data


@app.route("/get", methods=["POST"])
def get_weather():
    place = request.json.get("place")
    url = f"http://openapi.seoul.go.kr:8088/487a5844577363343130326b6a625576/xml/citydata/1/5/{place}"

    response = requests.get(url, verify=False)

    if response.status_code == 200:
        # Parse the XML response
        root = ET.fromstring(response.text)

        # Convert the XML data to a dictionary
        data = recursive_parse(root)

        return jsonify(data)
    else:
        return "Error: Unable to fetch data from the API"


if __name__ == "__main__":
    app.run(debug=True, port=4000)
