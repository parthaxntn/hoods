import numpy as np
from flask import Flask, render_template, request, session, redirect
import cv2

import PIL.Image as Image
import os

import matplotlib.pylab as plt

import tensorflow as tf
import tensorflow_hub as hub

from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential


IMAGE_SHAPE = (224, 224)

classifier = tf.keras.Sequential([
    hub.KerasLayer("https://tfhub.dev/rishit-dagli/plant-disease/1", input_shape=IMAGE_SHAPE+(3,))
])

app = Flask(__name__)

def model(url):

    gold_fish = Image.open(url).resize(IMAGE_SHAPE)
    # gold_fish


    gold_fish = np.array(gold_fish)/255.0
    # gold_fish.shape

    # gold_fish[np.newaxis, ...]

    result = classifier.predict(gold_fish[np.newaxis, ...])
    # result.shape


    predicted_label_index = np.argmax(result)
    # predicted_label_index


    image_labels = []
    with open("ImageNetLabels.txt", "r") as f:
        image_labels = f.read().splitlines()
    # image_labels[:5]



    # print(len(image_labels))
    print(classifier)
    print(image_labels[predicted_label_index])

@app.route('/api/predict')
def predict(techno):
    


