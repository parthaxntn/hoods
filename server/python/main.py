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

from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential


IMAGE_SHAPE = (224, 224)

classifier = tf.keras.Sequential([
    hub.KerasLayer("https://tfhub.dev/rishit-dagli/plant-disease/1", input_shape=IMAGE_SHAPE+(3,))
])

app = Flask(__name__)


def model(url):

    response = requests.get(url)
    if response.status_code:
        fp = open('./image.jpg', 'wb')
        fp.write(response.content)
        fp.close()

    gold_fish = Image.open('./image.jpg').resize(IMAGE_SHAPE)
    gold_fish = np.array(gold_fish)/255.0
    result = classifier.predict(gold_fish[np.newaxis, ...])
    predicted_label_index = np.argmax(result)

    image_labels = []
    with open("class_indices.json", "r") as f:
        image_labels = f.read()
    
    labels = json.loads(image_labels)
    return labels[str(predicted_label_index)]



@app.route('/api/predict')
def helloworld():
    url = json.loads(request.data)['url']
    predicted_data = model(url)
    return predicted_data

    
if __name__ == '__main__':
    app.run(debug=True)

