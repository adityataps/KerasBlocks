model = None
testlist = None
output = None


import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, activations

model = keras.Sequential([
  layers.Dense(2, activation=activations.relu, name="layer1"),
  layers.Dense(3, activation=activations.relu, name="layer2"),
  layers.Dense(4, activation=activations.relu, name="layer3"),
])

testlist = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
output = model(tf.convert_to_tensor(testlist))

model.summary()