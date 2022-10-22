import json
import numpy as np
from flask import jsonify, Flask, render_template, request, session, redirect
import cv2

import PIL.Image as Image
import os

import matplotlib.pylab as plt

import tensorflow as tf
import tensorflow_hub as hub

import requests

# from tensorflow import keras
# from tensorflow.keras import layers
# from tensorflow.keras.models import Sequential


IMAGE_SHAPE = (224, 224)

classifier = tf.keras.Sequential([
    hub.KerasLayer("https://tfhub.dev/rishit-dagli/plant-disease/1", input_shape=IMAGE_SHAPE+(3,))
])

app = Flask(__name__)

# print(requests.body)


# def model(url):

#     print(requests.body)

#     response = requests.get(url)
#     if response.status_code:
#         fp = open('./image.jpg', 'wb')
#         fp.write(response.content)
#         fp.close()

#     gold_fish = Image.open('./image.jpg').resize(IMAGE_SHAPE)
#     # gold_fish = Image.open('https://cdn.britannica.com/89/126689-004-D622CD2F/Potato-leaf-blight.jpg').resize(IMAGE_SHAPE)
#     # gold_fish


#     gold_fish = np.array(gold_fish)/255.0
#     # gold_fish.shape

#     # gold_fish[np.newaxis, ...]

#     result = classifier.predict(gold_fish[np.newaxis, ...])
#     # result.shape


#     predicted_label_index = np.argmax(result)
#     # predicted_label_index


#     image_labels = []
#     with open("class_indices.json", "r") as f:
#         image_labels = f.read()
    
#     labels = json.loads(image_labels)
#     # image_labels[:5]



#     # print(len(image_labels))
#     # print(classifier)
#     # print(labels[str(predicted_label_index)])
#     return labels[str(predicted_label_index)]

# @app.route('/api/predict')
# def predict(techno):


# a = input('Enter the url')
# model(a)


@app.route('/api/predict')
def helloworld():
    # recieved = json(requests.data).name
    # return recieved
    url = json.loads(request.data)['url']

    # data = {
    # }

    # return request.data
    return url
    predictions = model(url)
    data = {
        'Name': predictions
    }
    return jsonify(data)

    
if __name__ == '__main__':
    app.run(debug=True)

